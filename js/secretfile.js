var percent = 0, sz = 100;
var interval;

const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
}

interval=setInterval(function(){ 
  percent++;
  document.getElementById("water").style.transform='translate(0'+','+(sz-percent/10)+'%)';
  if(percent==sz*10){
    clearInterval(interval);
  }
}, 6);