import express, {Request, Response} from 'express';
const app = express();
const port =  3000;
import db from './src/models';
// import {users} from './src/seeders/users';
// import {projects} from './src/seeders/projects'
// import {projectassignments} from './src/seeders/projectassignments'

app.get('/', (req:Request, res:Response) => {
    db.User.findAll({
        include: {
            model: db.Project
        }
    }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
})


db.sequelize.sync().then(() => {
    console.log("connected");
    
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})