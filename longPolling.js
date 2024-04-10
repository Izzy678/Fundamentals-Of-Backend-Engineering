import express from 'express';
import fetch from 'fetch'
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
    res.end(`job created with jobId ${jobId}`)
})


app.get('/status/:jobId',async (req,res)=>{
    const jobId =  req.params.jobId;
    while(await checkJobComplete(jobId)===false)
    res.end(`job status: Complte ${job[jobId]}%`);
   })

function createJob() {
    const jobId = Date.now();
    job[jobId] = 0
    return jobId;
}

async function checkJobComplete(jobId) {
return new Promise((resolve,reject)=>{
    console.log("check")
    if(job[jobId]<100) setTimeout(()=>resolve(false),1000)
    else
    resolve(true);
})

}

function updateJob(jobId) {
    job[jobId] += 10;
    console.log("Job update ongoing>>",job[jobId])
    setTimeout(() => {
        if (job[jobId] === 100)return;
        updateJob(jobId);
    },3000);
}