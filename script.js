var user = null;
var flag = false;

function setAlarm(){
    user = document.getElementById("alarmTime").value;
    if (user){
        var msg = `Alarm Set for ${user}`;
        document.getElementById("status").innerText = msg;
        flag = true;
    }
}

function waitTime(){
    if (flag){
        var now = new Date();
        var nowTime = now.toTimeString().slice(0,5);
        if (nowTime == user){
            alert("⏰ Alarm! Time's up!");
            flag = false;
            document.getElementById("status").innerText ="";
        }
    }
}

setInterval(waitTime, 1000);
