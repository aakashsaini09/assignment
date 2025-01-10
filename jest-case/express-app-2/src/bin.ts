import { app } from "./index";
import { describe, expect, it} from '@jest/globals'
import request from 'supertest'
describe('POST /sum', async() => {
    const res = await request(app).post('/sum').send({
        a: 0,
        b: 0
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.ans).toBe(0)
})
app.listen(3000, () => {
 
});