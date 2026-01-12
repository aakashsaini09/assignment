import Express = require("express");
const app = Express();


function middleware(req: any, res: any, next: any){
    const startTime = Date.now()
    next()
    const endTime = Date.now()
    console.log("Time it took: ", endTime - startTime, 'ms')

}
app.use(middleware)
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
app.listen(3000)