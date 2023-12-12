setInterval(()=>{
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let day = hours >=12 ? 'PM' : 'AM'

    process.stdout.write(`\r${hours}:${minutes}:${seconds} ${day}`)
},1000)