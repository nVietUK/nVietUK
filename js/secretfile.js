var percent = 0;
var interval;

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}

interval=setInterval(function(){ 
  percent++;
  document.getElementById("water").style.transform='translate(0'+','+(100-percent/10)+'%)';
  if(percent==1000){
    clearInterval(interval);
  }
}, 6);