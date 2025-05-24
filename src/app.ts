import express from 'express'
import { User } from './interfaces/user';

const hostname: string = '127.0.0.1';
const port: number = 3000;

const app: express.Application = express()

app.get('/', (req, res) => {
  let newUser: User = {userName: "damu", email: "damu@gmail.com"}
  res.send(`Hello ${newUser.userName} your email is ${newUser.email}`)
})




app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});