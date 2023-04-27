var cont1=document.getElementsByClassName("container1");
for (const container1 of cont1 ) {
    container1.style.display = 'none';
}
var cont2=document.getElementsByClassName("container2");
for (const container2 of cont2 ) {
    container2.style.display = 'none';
}

function timer(){
    var cont=document.getElementsByClassName("container");
    for (const container of cont ) {
    container.style.display = 'none';
     }  
    var cont1=document.getElementsByClassName("container1");
    for (const container1 of cont1 ) {
    container1.style.display = 'block';
     }
    var cont2=document.getElementsByClassName("container2");
     for (const container2 of cont2 ) {
    container2.style.display = 'none';
    }
}

function stopwatch(){
    var cont1=document.getElementsByClassName("container1");
    for (const container1 of cont1 ) {
    container1.style.display = 'none';
    }
    var cont2=document.getElementsByClassName("container2");
    for (const container2 of cont2 ) {
    container2.style.display = 'block';
    }
    var cont=document.getElementsByClassName("container");
    for (const container of cont ) {
    container.style.display = 'none';
     }
}


function timer_start(){
    const m=setInterval(timer_start1,1000);
    }
    function timer_start1(){
        var x=document.getElementById("demo1");
        var a=document.getElementById("demo2");
        var b=document.getElementById("demo3");
        var y=document.getElementById("demo4");
        var c=document.getElementById("demo5");
        var d=document.getElementById("demo6");
        var z=document.getElementById("demo7");
        y.innerText=x.value;
        c.innerText=a.value;
        d.innerText=b.value;
        var o=document.getElementById("demo8").innerHTML=":";
        var p=document.getElementById("demo9").innerHTML=":";
        if(b.value==0){
            if(a.value==0){
               if(x.value==0)
               {
                z.innerText="Stop";
                 clearInterval(m);
               }
               else
               {
                 a.value=59;
                 b.value=59;
                --x.value;
               }
            }
            else
            {
                b.value=59;
                --a.value;
            }
        }
        else{
        --b.value;
        }
    }

    function stopwatchstart1(){
        var a=document.getElementById("demo10");
        var b=document.getElementById("demo12");
        var c=document.getElementById("demo14");
        var d=document.getElementById("demo16");
        d.innerText = parseInt(d.innerText) + 1;
        if(d.innerText == 100){
            d.innerText = '0';
            c.innerText = parseInt(c.innerText)+1;
            if(c.innerText == 60){
                c.innerText = 0;
                b.innerText++;
                if(b.innerText== 60){
                    b.innerText = 0;
                    a.innerText = parseInt(a.innerText)+1;
                }
            }
    }
    }
    var stopwatchtimer = 0;
    function stopwatchend(){
        clearInterval(window.stopwatchtimer);
    }
     function stopwatchstart(){
        window.stopwatchtimer=setInterval(stopwatchstart1,10);
    }

function reset(){
    document.getElementById("demo10").innerHTML="00";
    document.getElementById("demo12").innerHTML="00";
    document.getElementById("demo14").innerHTML="00";
    document.getElementById("demo16").innerHTML="00";
}

function backfunction(){
    var cont1=document.getElementsByClassName("container1");
    for (const container1 of cont1 ) {
    container1.style.display = 'none';
    }
    var cont2=document.getElementsByClassName("container2");
    for (const container2 of cont2 ) {
    container2.style.display = 'none';
    }
    var cont=document.getElementsByClassName("container");
    for (const container of cont ) {
    container.style.display = 'block';
    }
}

function clearfunc(){
    document.getElementById("demo1").value=" ";
    document.getElementById("demo2").value=" ";
    document.getElementById("demo3").value=" ";
    document.getElementById("demo4").value=" ";
    document.getElementById("demo5").value=" ";
    document.getElementById("demo6").value=" ";
    document.getElementById("demo7").style.display="none";
    document.getElementById("demo8").style.display="none";
    document.getElementById("demo9").style.display="none";
}