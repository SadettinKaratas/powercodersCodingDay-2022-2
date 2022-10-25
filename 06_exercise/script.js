
let days= ["Monday","Thursday","Saturday","Wednesday","Tuesday"];

function getLastValue(){
    days = days.sort()
    return days[(days.length-1)]
}



console.log(getLastValue())

