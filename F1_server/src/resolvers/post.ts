import { InputType, Query, Resolver,Field, Mutation, ObjectType, Arg } from "type-graphql";
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
@Query(() => PaginatedPosts,{nullable: true})
async paginatedPosts(
        @Arg('type')type:string,
    ):Promise<PaginatedPosts>{
        const posts = await getConnection().query(`
        select p.*
        from post p
        where p."type" = $1
        order by p."id" DESC
        `,[type]);
    return {posts: posts.slice(5,13),hasMore:false}
        
    }

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

}