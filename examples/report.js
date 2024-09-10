import {downloadReport} from '../CASHMATIC_API/utils.js';

const token = "...";

await downloadReport({
    token,
    startTime:"2023-11-10 00:00:00",
    endTime:"2023-11-27 23:00:00"
}).then(res=>{
    console.log(res);
})