const indicadoresGet = require('./indicadores');

describe('Endpoints', () => {
    describe('Indicadores', () =>{
        it('return to user json', async () => {
            const axios ={
                get: jest.fn().mockResolvedValue({data: 1})
            }
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            }
            await indicadoresGet.indicadoresGet({data: 1}, res)
            expect(res.status.mock.calls).toEqual([])
            expect(res.send.mock.calls).toEqual([])
        })
    })
})