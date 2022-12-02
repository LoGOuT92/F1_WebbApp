import { InputType, Query, Resolver,Field, Mutation, ObjectType, Arg, Int } from "type-graphql";
import { getConnection } from "typeorm";
import { Post } from "../entities/Post";


@InputType()
class PostInput{
    @Field()
    title!: string
    @Field()
    content!: string
    @Field()
    imgURL!: string
    @Field()
    type!: string

}
@ObjectType()
class PaginatedPosts{
    @Field(()=> [Post])
    posts!:Post[]
    @Field()
    hasMore?: boolean;

}




@Resolver(Post)
export class PostResolver{
//=================get first 3 posts==============================
@Query(() => PaginatedPosts,{nullable: true})
async posts(
        @Arg('type')type:string,
    ):Promise<PaginatedPosts>{
        const posts = await getConnection().query(`
        select p.*
        from post p
        where p."type" = $1
        order by p."id" DESC
        `,[type]);
        if(type==='news'){
            return {posts: posts.slice(0,3),hasMore:false}
        }else{
            return {posts: posts.slice(0,5),hasMore:false}
        }
    }
    //=================paginated posts==============================
@Query(() => PaginatedPosts,{nullable: true})
async paginatedPosts(
        @Arg('cursor',()=>Int,{nullable:true})cursor:number|null,
    ):Promise<PaginatedPosts>{
        const realLimit = Math.min(32,7)+1;
        const realLimitPlusOne = realLimit+1

        const replacment:any=[realLimitPlusOne,'posts']
        if(cursor){
            replacment.push(cursor)

        }

        const posts = await getConnection().query(`
        select p.*
        from post p
        ${cursor ? `where p."id" < $3 and p."type" = $2` : `where p."type" = $2`}
        order by p."id" DESC
        limit $1
        `,replacment);

        return {posts: posts.slice(0,realLimit),hasMore:posts.length === realLimitPlusOne}
        
    }
//=================create post==============================
    @Mutation(() => Post)
async createPost(
    @Arg('postInput')postInput:PostInput
    ):Promise<Post>{
        let post;
            try{
                const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Post)
                .values({
                    title: postInput.title,
                    content: postInput.content,
                    imgURL: postInput.imgURL,
                    type: postInput.type,
                })
                .returning("*")
                .execute()
                post = result.raw[0];
            }catch(err){
                console.log(err);
                
            }
            return post;
    }
//=================get single post==============================
@Query(()=>Post,{nullable:true})
singlePost(
    @Arg('id',()=>Int) id:number
):Promise<Post|undefined|null>{
    return Post.findOne({where: {id}})
}
//=================delete single post==============================
@Mutation(()=>Boolean)
async deletePost(
@Arg('id')id:number
):Promise<boolean>{
    const post = await Post.findOne({where:{id}})
    if(!post){
        return false
    }
    await Post.delete({id})
    return true;
}
//=================Update Post============================
@Mutation(() => Post)
async updatePost(
    @Arg('title')title:string,
    @Arg('content')content:string,
    @Arg('imgURL')imgURL:string,
    @Arg('type')type:string,
    @Arg('id')id:number
    ):Promise<Post>{
        let post;
            try{
                const result = await getConnection()
                .createQueryBuilder()
                .update(Post)
                .set({
                    title,
                    content,
                    imgURL,
                    type
                })
                .where("id = :id", { id })
                .returning("*")
                .execute()
                post = result.raw[0];
            }catch(err){
                console.log(err);
                
            }
            return post;
    }
    @Query(()=>[Post])
    allPosts(

    ):Promise<Post[]>{
        return Post.find()
    }

}