import { app } from "./index";

app.listen(3000)

describe("Tests the sum function", () => {
    it("Should return 3 when 1 + 2", async () => {
        prismaClient.request.create.mockResolvedValue({
            id: 1,
            answer: 3,
            type: "Sum",
            a: 1,
            b: 2
        })

        vi.spyOn(prismaClient.request, "create");

        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        })

        expect(prismaClient.request.create).toHaveBeenCalledWith({
            data: {
                a: 1,
                b: 2,
                type: "Sum",
                answer: 3
            }
        })

        expect(res.body.answer).toBe(3);
        expect(res.body.id).toBe(1);
        expect(res.statusCode).toBe(200);
    })

    it("Should fail when a number is too big", async () => {
        const res = await request(app).post("/sum").send({
            a: 1000000000000,
            b: 2
        })

        expect(res.body.message).toBe("Sorry we dont support big numbers");
        expect(res.statusCode).toBe(422);
    })
})