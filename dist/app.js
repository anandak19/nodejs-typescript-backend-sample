import express from 'express';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();
app.get('/', (req, res) => {
    let newUser = { userName: "damu", email: "damu@gmail.com" };
    res.send(`Hello ${newUser.userName} your email is ${newUser.email}`);
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
