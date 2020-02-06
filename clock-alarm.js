const clock_area = document.querySelector(".clock-alarm");
const btn = clock_area.querySelector("#startButton");
const concentrate = clock_area.querySelector("#concentrate-minute");
const brk = clock_area.querySelector("#break-minute");

function handleOnclick(event)
{
    
}

function init()
{
    btn.addEventListener("onclick", handleOnclick);
}


init();