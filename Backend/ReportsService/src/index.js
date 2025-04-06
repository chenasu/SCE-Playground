import express, { json } from 'express';
import cors from 'cors';
import { addReport, getReports } from "./controllers/reportsController.js";
const app = express();
const port = 4002;

app.use(cors());
app.use(json());
app.get('/reports', getReports);
app.post('/reports', addReport);

app.listen(port, ()=>{
    console.log("Reports service is running at port:" + port);
})
