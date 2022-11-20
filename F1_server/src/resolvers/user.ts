import { InputType, Query, Resolver,Field, Mutation, ObjectType, Arg } from "type-graphql";
import { User } from "../entities/User";
import { validateRegister } from "../utils/validateRegister";
import argon2 from 'argon2'
import { validateEmail } from "../utils/emailValidate";
import { getConnection } from "typeorm";


@ObjectType()
class FieldError{
    @Field()
    field?: string
    @Field()
    message?: string
}
@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@InputType()
export class UserNameInput{
    @Field()
    username!: string;
    @Field()
    password!: string;
    @Field()
    email?: string;
}

@Resolver(User)
export class UserResolver{
//=================find all users==============================
    @Query(()=>[User])
    users(

    ):Promise<User[]>{
        return User.find()
    }
//===================create new user============================
    @Mutation(()=>UserResponse)
    async register(
        //options -> username/email/password
        @Arg('options')options:UserNameInput,
    ):Promise<UserResponse>{
        const username = await User.findOne({where:{username:options.username}})

        //if username is in db
        if(username){
            return {errors:[{field: "username", message:"user alredy exist"}]}
        }
        //validate register field 
        const res = validateRegister(options)
        if(res){
            return res;
        }
        //validate email
        const checkEmail = validateEmail(options.email!)
        
        if(!checkEmail){
            return {
                errors:[{field: "email",message:"email address is incorrect"}]
            }
        }
        
        //if everything is ok
        //create new user
        const hashedPassword = await argon2.hash(options.password);
        let user;
        try{
            const result = await getConnection()
            .createQueryBuilder()
            .insert()
            .into(User)
            .values({
                username: options.username,
                email: options.email,
                password: hashedPassword,
            })
            .returning("*")
            .execute()
            user = result.raw[0];
        }catch(err){
            console.log(err);
            
        }
        return { user };
    }
//==================login=============================
    @Mutation(()=>UserResponse)
    async login(
        @Arg('email')email:string,
        @Arg('password')password:string,
        ):Promise<UserResponse>{
            //find user in DB
        const user = await User.findOne({where:{email:email}})
        //validate email
        const checkEmail = validateEmail(email)

        if(!checkEmail){
            return {
                errors:[{field: "email",message:"email address is incorrect"}]
            }
        }

            // if user doesn't' exist in db
        if(!user){
            return{
                errors:[{field: "email",message:"that user doesn't exist"}]
            }
        }
        //password validate
        try {
            if (await argon2.verify(user.password, password)) {
              // password match
              return {
                user
              };
            } else {
              // password did not match
              return {
                errors:[{field:"password",message:"wrong password"}],
            };
            }
          } catch (err) {
            // internal failure
            return {
                errors:[{field:"else"}],
            };
          }
    }
    //==================update user=============================

    @Mutation(()=>UserResponse)
    async updateUser(
        // findy by ID -> username/password/email are new or the same values
        @Arg('id')id:number,
        @Arg('username')username:string,
        @Arg('password')password:string,
        @Arg('email')email:string ,

    ):Promise<UserResponse | boolean>{
        const user = await User.findOne({where:{id}})
        // check if new username/email already exists is db
        const userNam = await User.findOne({where:{username}})
        const userEmail = await User.findOne({where:{email}})


        if(!user){
            return{
                errors:[{field:"username",message:"user does not exist"}],
            }
        }
        if(userNam&&userNam.username!==user.username){
            return{
                errors:[{field:"username",message:"username already exists"}],
            }
        }

        if(userEmail&&userEmail.email!==user.email){
            return{
                errors:[{field:"email",message:"user with this email already exists"}],
            }
        }
        
        //if user want change password
        if(password){
            await User.update({id},{password:await argon2.hash(password)})
        }
        //if user want change email 
        if(email&&email!==user.email){
            await User.update({id},{email:email})
        }
        if(username&&username!==user.username){
            await User.update({id},{username:username})
        }
        return true

    }
}

