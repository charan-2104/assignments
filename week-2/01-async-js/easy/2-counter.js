let counter = 0;

function timer(){
    counter++;
    process.stdout.write(`\r${counter}`)
    if(counter > 0){
        setTimeout(timer,1000)
    }
}
timer();