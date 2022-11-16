import { InputType, Query, Resolver,Field, Mutation, ObjectType, Arg } from "type-graphql";
import { getConnection } from "typeorm";
import { Tour } from "../entities/Tour";



@InputType()
export class TourNameInput{
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
class TourResponse {

  @Field(() => Tour, { nullable: true })
  tour?: Tour;
}

@Resolver(Tour)
export class TourResolver{
//=================find all tour==============================
@Query(()=>[Tour])
async tours(

    ):Promise<Tour[]>{
        const tours = await Tour.find()
        return tours.slice(0,4).reverse()
    };

//=================create new Schedule==============================
    @Mutation(()=>TourResponse)
    async createTour(
        //ScheduleNameInput -> title/imgURL/content/date
        @Arg('tourInput')tourInput:TourNameInput,
        ):Promise<TourResponse>{
            let tour;
            try{
                const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Tour)
                .values({
                    title: tourInput.title,
                    imgURL: tourInput.imgURL,
                    content: tourInput.content,
                    date: tourInput.date,
                })
                .returning("*")
                .execute()
                tour = result.raw[0];
            }catch(err){
                console.log(err);
                
            }
            return { tour };
    }


}



