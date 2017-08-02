import { Request, Response, Router } from "express";
import { Tas_users } from '../models/tas_users';
import { Sequelize, sequelize } from './dbcon';
const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
  response.json({
    text: "Hello Angular 2",
    title: "Greetings.",
  });
});

publicRouter.get('/list', (request: Request, response: Response) => {
 

// force: true will drop the table if it already exists
  
  Tas_users.findAll({
  attributes: ['ID','NAME', 'CODE','MARK']
}).
then(users => {
  response.json({
  users
  });
 
});
});


 publicRouter.get('/create_user_table', (request: Request, response: Response) => {
 Tas_users.sync({force: true}).then(() => {
  //Table created
  return Tas_users.create({
    NAME: 'Prems021',
    CODE: 11,
    MARK: 100,
     });
 });
   
 });


export { publicRouter };
