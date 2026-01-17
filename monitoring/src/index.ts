import Express = require("express");
// import { requestCount } from "./monitoring/requestCount";
import client from 'prom-client'
const app = Express();

const histogram = new client.Histogram({
    name: "request_time",
    help: "Time it took for a request to be handled",
    buckets: [0.1, 1, 5, 10, 100, 1000],
    labelNames: ["value"]
})
function middleware(req: any, res: any, next: any){
    const startTime = Date.now()
    res.on("finish", () => {
        const endTime = Date.now()
        histogram.observe({}, endTime - startTime)
    })
    next()
}
app.use(middleware)
// app.use(requestCount)
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