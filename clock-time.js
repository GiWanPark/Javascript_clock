const time_div = document.querySelector(".clock-time");


function getTime()
{
    var date = new Date();
    var second = date.getSeconds();
    var minute = date.getMinutes();
    var hour = date.getHours();

    time_div.innerHTML = `<h2>` + (hour < 10 ? `0${hour}` : `${hour}`) +`:`+ (minute < 10 ? `0${minute}` : `${minute}`) +`:`+ (second < 10 ? `0${second}` : `${second}` ) + `</h2>`;
}

function init()
{
    getTime();
    setInterval(getTime, 1000);    
}


init();