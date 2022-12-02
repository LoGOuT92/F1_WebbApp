import { InputType, Query, Resolver,Field, Mutation, ObjectType, Arg } from "type-graphql";
import { getConnection } from "typeorm";
import { Driver } from "../entities/Driver";



@InputType()
export class DriverNameInput{
    @Field()
    name!: string;

    @Field()
    surName!: string;
    @Field()
    team!: string;

    @Field()
    color!: string;

    @Field()
    pictureURL!: string;

    @Field()
    points!: number;
}
@ObjectType()
class DriverResponse {

  @Field(() => Driver, { nullable: true })
  driver?: Driver;
}

@Resolver(Driver)
export class DriverResolver{
//=================find all drivers==============================
@Query(()=>[Driver])
drivers(

    ):Promise<Driver[]>{
        return Driver.find()
    }

//=================create new driver==============================
    @Mutation(()=>DriverResponse)
    async createDriver(
        //driverInput -> name/surName/team/color
        @Arg('driverInput')driverInput:DriverNameInput,
        ):Promise<DriverResponse>{
            let driver;
            try{
                const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Driver)
                .values({
                    name: driverInput.name,
                    surName: driverInput.surName,
                    team: driverInput.team,
                    color: driverInput.color,
                    pictureURL: driverInput.pictureURL,
                    points: driverInput.points,
                })
                .returning("*")
                .execute()
                driver = result.raw[0];
            }catch(err){
                console.log(err);
                
            }
            return { driver };
    }
//=================delete driver==============================
    @Mutation(()=>Boolean)
    async deleteDriver(
        @Arg('id')id:number
    ):Promise<boolean>{
        const driver = await Driver.findOne({where:{id}})
        if(!driver){
            return false
        }
        await Driver.delete({id})
        return true;
    }
//=================ranking drivers==============================
    @Query(()=>[Driver])
    async rankingDrivers(

    ):Promise<Driver[]>{
        const drivers = await getConnection().query(`
        select d.*
        from driver d
        order by d."points" DESC
        `);

        return drivers
    }
    //=======================single driver =================
        @Query(()=>[Driver])
        async singleDriver(
            @Arg('team',()=>String) team:string
        ):Promise<Driver[]>{
            if(team==="Red Bull"){
                team = 'Red Bull Racing'
            }

            const drivers = await Driver.find({where:{team:team}})
            return drivers
        }

}



