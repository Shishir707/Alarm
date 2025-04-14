function setAlarm(){
    var user=document.getElementById("alarmTime").value ;
    if (user){
        var msg=`Alarm Set for ${user}`
        document.getElementById("status").innerText =msg ;
        setAlarm= true;
    }
}

waitTime((){
    if(setAlarm){
        var now = new Date();
        var nowTime = now.toTimeString().slice(0,5);
        if (nowTime==user){
            alert("⏰ Alarm! Time's up!");
            setAlarm=false;
            document.getElementById("status").innerText=""

        }
    }
},1000);
