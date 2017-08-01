import { Request, Response, Router } from "express";
import { User } from './usermodel';
const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
  response.json({
    text: "Hello Angular 2",
    title: "Greetings.",
  });
});

publicRouter.get('/list', (request: Request, response: Response) => {
 

// force: true will drop the table if it already exists
  
  Users.findAll({
  attributes: ['firstName', 'lastName']
}).
then(users => {
  response.json({
  users
  });
 
});
});


 publicRouter.get('/add_user', (request: Request, response: Response) => {
 Tas_product.sync({force: true}).then(() => {
  //Table created
  return Tas_product.create({
    NAME: 'Ghee',
    HAS_STOCK: true,
    IS_POOJA: false,
     });
 });
   
 });


export { publicRouter };
