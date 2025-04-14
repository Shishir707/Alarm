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
            Swal.fire({
                title: "⏰ Alarm!",
                text: "Time's up!",
                icon:"Success",
                confirmButtonText:"OK"

            });
            flag=false
            alert("⏰ Alarm! Time's up!");
            var text=`✅ Alarm triggered at ${nowTime}`
            document.getElementById("status").innerText =text ;
            document.getElementById("alarmTime").value =null;
        }
    }
}

setInterval(waitTime, 1000);

