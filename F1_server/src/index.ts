import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql';
import path from 'path';
import { createConnection } from 'typeorm';
import { User } from './entities/User';
import { UserResolver } from './resolvers/user';
import { Post } from './entities/Post';
import { Tour } from './entities/Tour';
import { Team } from './entities/Team';
import { Driver } from './entities/Driver';
import { DriverResolver } from './resolvers/driver';
import { PostResolver } from './resolvers/post';
import { TourResolver } from './resolvers/tour';
import { TeamResolver } from './resolvers/team';

const main = async () => {

    const con = await createConnection({
        type: 'postgres',
        database:'f1db',
        username:"postgres",
        password:"tajne123",
        logging: true,
        synchronize: true,
        migrations:[path.join(__dirname,'./migrations/*')],
        entities: [User,Driver,Post,Tour,Team]

    })
    // User.delete({})
    // Post.delete({})
    const app = express();
    app.use(
        '/graphql',
        cors<cors.CorsRequest>({
            origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
            credentials: true,
          }),
      );

      const apolloServer= new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver,DriverResolver,PostResolver,TourResolver,TeamResolver],
            validate: false,
        }),
        context: ({res,req})=>({res,req})
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({app,cors:false});

    app.listen(4000, ()=>{
        console.log("server on 4000");
    })

}
main().catch(err =>{
    console.log(err);
    
})
