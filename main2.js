/* global $ */

var result = document.getElementById("result");

// 計算済み,演算子,小数点
var finish = false;
var operator = false;
var point = true;

function clickC(button){
  var val = button.innerHTML;
  result.innerHTML = "0";
  point = true;
};

function clickE(button){
  var val = button.innerHTML;
  result.innerHTML = eval(result.innerHTML);
  finish = true;
  point = true;
  operator = false;
  if (result.innerHTML.last == clickO.innerHTML){
    result.innerHTML.slice(0,-1);
  }
};

function clickO(button){
  var val = button.innerHTML;
  if (operator == true){
    result.innerHTML += val;
  }else if (operator == false && result.innerHTML.last == clickO.innerHTML){
    result.innerHTML = result.innerHTML.slice(0,-1) + val;
  }
  point = true;
  operator = false;
};

function clickN(button){
  var val = button.innerHTML;
  if (finish == true){
    finish = false;
    result.innerHTML = val;
  }else if (result.innerHTML == "0" && val == "0"){
    result.innerHTML = "0";
  }else if (result.innerHTML == "0" && val == "00"){
    result.innerHTML = "0";
  }else if (result.innerHTML == "0"){
    result.innerHTML = val;
  }else {
    result.innerHTML += val;
  }
  operator = true;
};
  
  function clickP(button){
    var val = button.innerHTML;
    if (finish == true){
      result.innerHTML = "0.";
    }else if (point == true){
      result.innerHTML += val;
    }
    point = false;
    finish = false;
};