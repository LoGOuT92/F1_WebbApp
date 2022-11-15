import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql';
import path from 'path';
import { createConnection } from 'typeorm';
import { User } from './entities/User';
import { UserResolver } from './resolvers/user';

const main = async () => {

    const con = await createConnection({
        type: 'postgres',
        database:'f1db',
        username:"postgres",
        password:"tajne123",
        logging: true,
        synchronize: true,
        migrations:[path.join(__dirname,'./migrations/*')],
        entities: [User]

    })
    // User.delete({})
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
            resolvers: [UserResolver],
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
