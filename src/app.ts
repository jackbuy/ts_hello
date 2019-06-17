import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send('hello typescript');
});

app.listen(10000, () => {
    console.log('服务已启动，端口10000');
})