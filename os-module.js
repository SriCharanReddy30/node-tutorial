const { log } = require("console")
const os = require("os")
 const user = os.userInfo()
console.log(user);


 const time = os.uptime()
 console.log(`the system uptime is ${time} seconds`);
 
 const currentOs ={
    name:os.type(),
    release:os.release(),
 totalMem:os.totalmem(),
 freeMem:os.freemem(),
 };
 console.log(currentOs);
 