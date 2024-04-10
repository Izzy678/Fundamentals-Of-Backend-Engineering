import express from 'express';
const job = {};

const app = express();

app.listen(3000, () => {
    console.log("app listening on port ", 3000)
});

app.get('/submit', (req, res) => {
    //create job
    const jobId =  createJob();
    //update job
    updateJob(jobId);
    res.send(`job created with jobId ${jobId}`)
})

app.get('/status/:jobId',(req,res)=>{
 const jobId =  req.params.jobId;
 if(job[jobId]===100){
   return res.send(`job completed >>>>>${job[jobId]}% (domi response data)`)
 }
 res.send(`job status: ${job[jobId]}%`);
})

function createJob() {
    const jobId = Date.now();
    job[jobId] = 0
    return jobId;
}

function updateJob(jobId) {
    job[jobId] += 10;
    setTimeout(() => {
        if (job[jobId] === 100)return;
        updateJob(jobId);
    },1000);
}

