import Express = require("express");
import { requestCount } from "./monitoring/requestCount";
import client from 'prom-client'
const app = Express();


function middleware(req: any, res: any, next: any){
    const startTime = Date.now()
    next()
    const endTime = Date.now()
    console.log("Time it took: ", endTime - startTime, 'ms')

}
app.use(middleware)
app.use(requestCount)
app.get('/user', (req, res) => {
    const user = {
        name: "Aakash", 
        age: 25
    }
    res.json({
        name: "Aakash Saini"
    })
})

app.post('/', (req, res) => {
    res.json({
        name: "Aakash Saini"
    })
})
app.get('/metrics', async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics)
})
app.listen(3000)