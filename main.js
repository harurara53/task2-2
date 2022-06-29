/* global $ countUp*/
$(function(){
  
  let msec = 0;
  let sec = 0;
  let min = 0;
  let hour = 0;
  
  let timeResult = () =>{
    msec++;
    if(msec > 9){
      sec++;
      msec = 0;
    }
    if(sec > 59){
      min++;
      sec = 0;
    }
    if(min > 59){
      hour++;
      min = 0;
    }
    
    $('#time').html(hour + ':' + min + ':' + sec + ':' + msec);
  };
  
  let time ;

  /* start */
  
  $('#start').click(function() {
      time = setInterval(timeResult, 100);
      $('#start').attr('disabled','disabled');
      $('#stop').removeAttr('disabled');
      $('#clear').attr('disabled','disabled');
  });
  
  /* stop */
  
  $('#stop').click(function(){
    clearInterval(time);
    $('#start').removeAttr('disabled');
    $('#stop').attr('disabled','disabled');
    $('#clear').removeAttr('disabled');
  });
  
  /* clear */
  
  $('#clear').click(function(){
    $('#time').html('0:0:0:0');
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    $('#start').removeAttr('disabled');
    $('#stop').attr('disabled','disabled');
    $('#clear').attr('disabled','disabled');
  });

});