import client from 'prom-client'
const activeUserGauge = new client.Gauge({
    name: "active_users",
    help: "Total number of users whose request hasn't yet resolved",
    labelNames: ["method", "route"]
});
// const requestCounter = new client.Counter({
//     name: "request_count",
//     help: "Total request count",
//     labelNames: ["method", "route"]
// });
// @ts-ignore
export function requestCount(req, res, next){
    // console.log("req is: ", req)
    activeUserGauge.inc({
        method: req.method,
        route: req.route ? req.route.path : req.path
    });
    res.on("finish", () => {
        activeUserGauge.dec({
            method: req.method,
            route: req.route ? req.route.path : req.path
        })
    });
    next()
}