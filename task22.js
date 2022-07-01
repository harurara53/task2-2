/* global $ */

var result = document.getElementById('result');
// 計算済み,演算子,小数点
var finish = false;
var operator = false;
var point = true;

function clickC(button){
  var val = button.innerHTML;
  result.innerHTML = "0";
  finish = false;
  point = true;
};

function clickE(button){
  var val = button.innerHTML;
  if (opeLast()){
    result.innerHTML = result.innerHTML.slice(-1);
  }
  result.innerHTML = eval(result.innerHTML);
  point = true;
};

function clickN(button){
  var val = button.innerHTML;
  if (finish == true){
    result.innerHTML = "0";
    finish = false;
  }
  if (result.innerHTML == "0" && val == "0"){
    result.innerHTML = "0";
  }else if (result.innerHTML == "0" && val == "00"){
    result.innerHTML = "0";
  }else if (result.innerHTML == "0"){
    result.innerHTML = val;
  }else {
    result.innerHTML += val;
  }
};

function clickO(button){
  var val = button.innerHTML;
  if (finish == true){
    finish = false;
  }
  if (opeLast()){
    result.innerHTML = result.innerHTML.slice(0,-1) + val;
  }else {
    result.innerHTML += val;
  }
  point = true;
};

function clickP(button){
  var val = button.innerHTML;
  if (result.innerHTML == "0" && point == true){
    result.innerHTML += val;
  }else if (opeLast() && point == true){
    result.innerHTML += "0.";
  }else if (point == true){
    result.innerHTML += val;
  }else {
    ;
  }
  point = false;
};

function opeLast(){
  return ["+","-","×","÷"].includes(result.innerHTML.slice(-1));
}