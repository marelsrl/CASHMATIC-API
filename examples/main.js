import deviceOperations from "../APIS/deviceOperations.js";
import deviceInfo from "../APIS/deviceInfo.js";
import {startPaymentKeepAlive} from '../APIS/utils.js';
import utility from "../APIS/utility.js";

const credenziali = {
    username: process.env.CASHMATIC_USERNAME,
    password: process.env.CASHMATIC_PASSWORD
}

let d = await deviceOperations.login(credenziali)

let token =  d.data.token;


deviceInfo.userData({token,id:10}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})


deviceOperations.startWithdrawal({
    token,
    amount:1000
})

deviceOperations.stopRefill(token)


deviceOperations.startPayments({
    amount:900,
    token:token,
    timeout:5
}).then(status=>{
    console.log(status)
})

startPaymentKeepAlive({
    token:token,
    amount:900,
    queueAllowed:false,
    timeout:10
}).then(response=>{
    console.log(response);
})




deviceOperations.startWithdrawal({
    token,
    amount:10
})


console.log(await deviceInfo.allLevels(token));

deviceOperations.emptyCashbox({token})