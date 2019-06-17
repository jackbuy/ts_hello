import express from 'express'
const app = express();
const query = (req: any , res: any): void => {
    const a: object = {
        a: 1,
        b: 2
    }

    const b: Array<object> = [{aa: 1, bb:2}]

    const c: string = 'hello typeScript'

    const d: boolean = true

    const e: number = 123

    enum Color {red, blue, green}
    const f: Color = Color.green
    
    const name = (): string => {
        return 'hello'
    }
    
    res.send(a);
}

app.get('/', query);

app.listen(10000, (): void => {
    console.log('服务已启动，端口10000');
})