import { InputType, Query, Resolver,Field, Mutation, ObjectType, Arg } from "type-graphql";
import { getConnection } from "typeorm";
import { Team } from "../entities/Team";



@InputType()
export class TeamNameInput{
    @Field()
    team!: string;

    @Field()
    color!: string;
    @Field()
    imgURL!: string;
}
@ObjectType()
class TeamResponse {

  @Field(() => Team, { nullable: true })
  team?: Team;
}

@Resolver(Team)
export class TeamResolver{
//=================find all Teams==============================
@Query(()=>[Team])
team(

    ):Promise<Team[]>{
        return Team.find()
    }

//=================create new team==============================
    @Mutation(()=>TeamResponse)
    async createTeam(
        //TeamInput -> team/color/imgURL
        @Arg('TeamInput')TeamInput:TeamNameInput,
        ):Promise<TeamResponse>{
            let team;
            try{
                const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Team)
                .values({
                    team: TeamInput.team,
                    color: TeamInput.color,
                    imgURL: TeamInput.imgURL,
                })
                .returning("*")
                .execute()
                team = result.raw[0];
            }catch(err){
                console.log(err);
                
            }
            return { team };
    }

}



