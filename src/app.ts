import express from 'express'
const app = express();

const query = (req: any , res: any): void => {
    res.send('hello typescript');
}

app.get('/', query);

app.listen(10000, () => {
    console.log('服务已启动，端口10000');
})