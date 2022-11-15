import { InputType, Query, Resolver,Field, Mutation, ObjectType, Arg } from "type-graphql";
import { getConnection } from "typeorm";
import { Schedule } from "../entities/Schedule";



@InputType()
export class ScheduleNameInput{
    @Field()
    title!: string;

    @Field()
    imgURL!: string;
    @Field()
    content!: string;

    @Field()
    date!: string;
}
@ObjectType()
class SchedulerResponse {

  @Field(() => Schedule, { nullable: true })
  schedule?: Schedule;
}

@Resolver(Schedule)
export class ScheduleResolver{
//=================find all drivers==============================
@Query(()=>[Schedule])
users(

    ):Promise<Schedule[]>{
        return Schedule.find()
    }

//=================create new Schedule==============================
    @Mutation(()=>ScheduleNameInput)
    async createSchedule(
        //ScheduleNameInput -> title/imgURL/content/date
        @Arg('scheduleInput')scheduleInput:ScheduleNameInput,
        ):Promise<SchedulerResponse>{
            let schedule;
            try{
                const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Schedule)
                .values({
                    title: scheduleInput.title,
                    imgURL: scheduleInput.imgURL,
                    content: scheduleInput.content,
                    date: scheduleInput.date,
                })
                .returning("*")
                .execute()
                schedule = result.raw[0];
            }catch(err){
                console.log(err);
                
            }
            return { schedule };
    }


}



