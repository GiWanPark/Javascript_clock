const clock_area = document.querySelector(".clock-alarm");
const btn = clock_area.querySelector("#startButton");
const left_minute = document.querySelector("#left_minute");
const concentrate_minute_option = clock_area.querySelector("#concentrate-minute");
const break_minute_option = clock_area.querySelector("#break-minute");
const snd = new Audio('./sound/Old-alarm-clock-sound.mp3');
var alarmtime;

function tictoc(concentrate)
{
    if(alarmtime <= 0)
    {
        return;
    }
    var minute = Math.floor(alarmtime / ( 60 * 1000 ));
    var second = Math.floor(alarmtime % ( 60 * 1000 ) / 1000);
    if(concentrate === true)
        left_minute.innerHTML = `Concentrate time<br> ${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0'+ second : second}`;
    else
        left_minute.innerHTML = `Break time <br> ${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0'+ second : second}`;
    alarmtime -= 1000;
}

function setClockSettingAble(value)
{
    if(value === false)
    {
        btn.disabled = concentrate_minute_option.disabled = break_minute_option.disabled = true;
        btn.id = "btn_disabled";
    }
    else
    {
        btn.disabled = concentrate_minute_option.disabled = break_minute_option.disabled = false;
        btn.id = "startButton";
    }
}

function handleOnclick(event)
{
    const concentrate_minute = concentrate_minute_option.value;
    const break_minute = break_minute_option.value;

    alarmtime = concentrate_minute * 60 * 1000;
    alert("Start concentration after click the button.");
    
    setClockSettingAble(false);
    
    
    var intervalHandle = setInterval(tictoc, 1000, true);
    setTimeout(function(){
        snd.play();
        clearInterval(intervalHandle);
        alarmtime = break_minute * 60 * 1000;
        intervalHandle = setInterval(tictoc, 1000, false);
        setTimeout(function(){
            snd.play();
            clearInterval(intervalHandle);
            left_minute.innerText = `Finished break! Concentrate again??`;
            setClockSettingAble(true);
        }, break_minute * 60 * 1000);
    }, concentrate_minute * 60 * 1000);
}

function init()
{
    btn.addEventListener("click", handleOnclick);
}


init();