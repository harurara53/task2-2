/* global $ count*/
$(function(){
  
  let timeResult = 0;
  
  /* start */
  
  $('#start').click(function(){
    $('#time').html('0:0:0:0');
    timeResult = setInterval(count(), 100);
    $(this).attr('disabled','disabled');
    $('#stop').removeAttr('disabled');
  });
  
  /* stop */
  
  $('#stop').click(function(){
    clearInterval(timeResult);
    $(this).attr('disabled','disabled');
    $('#clear').removeAttr('disabled');
  });
  
  /* clear */
  
  $('#clear').click(function(){
    let msec = 0;
    let sec = 0;
    let min = 0;
    let hour = 0;
    $('#time').html('0:0:0:0');
    clearInterval(timeResult);
    $(this).attr('disabled','disabled');
    $('#start').removeAttr('disabled');
  });
  
  /* count */
  
  let msec = 0;
  let sec = 0;
  let min = 0;
  let hour = 0;
  
  function count(){
    
  /* msec */
    msec ++;
    if(msec > 9){
      msec = 0;
      min ++;
    }
    
    if(sec > 59){
      sec = 0;
      min ++;
    }
    
    if(min > 59){
      min = 0;
      hour ++;
    }
    var msecNumber = msec;
    
  /* sec */
  if(sec > 10){
    secNumber = '0' + sec.toString();
  }else{
    var secNumber = sec;
  }
  
  /* min */
  if(min > 10){
    minNumber = '0' + min.toString();
  }else{
    var minNumber = min;
  }
  
  /* hour */
  if(hour > 10){
    hourNumber = '0' + hour.toString();
  }else{
    var hourNumber = hour;
  }
  
  $('#time').html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
    
  }
  
});