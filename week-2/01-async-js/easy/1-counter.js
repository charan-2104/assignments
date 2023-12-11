let counter = 0;

setInterval(()=>{
    counter++;
    process.stdout.write(`\r${counter}`);
},1000)




// function timer(){
//     counter++;
//     process.stdout.write(`\r${counter}`)
// }
// timer()
// setInterval(timer,1000)