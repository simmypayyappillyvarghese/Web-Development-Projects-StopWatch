
var secondSpan =document.getElementsByClassName("time-span")[2];
var minuteSpan =document.getElementsByClassName("time-span")[1];
var hourSpan   =document.getElementsByClassName("time-span")[0];


var second=1,minute=1,hour=1,timer;




function setSecond(){
    
   
    
    if(second<10){
    secondSpan.innerText='0'+second;
       }
    else{
       secondSpan.innerText=second; 
    }
       
    if(second>=59){
        second=1;
        setMinute();
    }
    else{
    second++;    
    }
    
    timer=setTimeout(setSecond,1000);
    
}


function setMinute(){
    
     if(minute<10){
    minuteSpan.innerHTML='0'+minute;
       }
    else{
       minuteSpan.innerHTML=minute; 
    }   
    
    
     if(minute>=59){
        minute=1;
        setHour();
       }
       else{
           
           minute++; 
       }
    
    
}


function setHour(){
    
    if(hour<10){
    hourSpan.innerHTML='0'+hour;
    }
    else{
        
        hourSpan.innerHTML=hour;
    }    
    hour++;
    
}




document.getElementById("start-button").addEventListener('click',function (){
    
   
   
   /*To prevent from multiple setTime out clock if user clicks start multiple times*/
    
     if(!timer){
        setSecond();
             
    }
    
    
});



document.getElementById("stop-button").addEventListener('click',function (){
    
    timer=clearTimeout(timer);
    
});



document.getElementById("reset-button").addEventListener('click',function (){
    
     
   //reset the timer value,which is required to do a start followed by a reset.
    
   timer=clearTimeout(timer);
   secondSpan.innerHTML='SS';
   minuteSpan.innerHTML='MM';
   hourSpan.innerHTML='HH';
   second=1,minute=1,hour=1;
    
});





