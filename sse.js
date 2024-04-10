/* 
const sse = new EventSource("http://localhost:3000");
sse.onMessage = console.log()
*/
/* server sent events(sse)*/
import express from 'express';
const job = {};

const app = express();

app.listen(3000, () => {
    console.log("app listening on port ", 3000)
});
app.get('/',(req,res)=>{
    res.send("Hello")
});
app.get('/stream',(req,res)=>{
    res.setHeader("Content-Type","text/event-stream")
    writeStreamData(res);
});

let i = 0 ; 
function writeStreamData(res){
    res.write(`data: hello from server----------- [${i++}]\n\n`);
    setTimeout(()=>writeStreamData(res),1000);
}
