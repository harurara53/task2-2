/* global $ */
function clickButton(button){
  
  let val = button.innerHTML;
  let result = document.getElementById("result");
  console.log(result.innerHTML);
  
  // 条件　計算済み/演算子
  var finish = false;
  var operator = false;
 
  if (val == "AC"){
    result.innerHTML = "0";
    
  }else if (val == "="){
    result.innerHTML = eval(result.innerHTML);
    finish = true;
  
  // 演算子
  }else if (val == "+" || "-" || "*" || "/" && operator == false){
    result.innerHTML = result.innerHTML.slice(-1) + val;
    operator = false;
  }else if (val == "+" || "-" || "*" || "/" ){
    result.innerHTML += val;
    operator = false;
  
  // 数字
  }else if (finish == true){
    result.innerHTML = val;
    finish = false;
    operator = true;
  }else if (result.innerHTML == "0" && val == "0"){
    result.innerHTML = "0";
    operator = true;
  }else if (result.innerHTML == "0" && val == "."){
    result.innerHTML = "0.";
    operator = true;
  }else if (result.innerHTML == "0"){
    result.innerHTML = val;
    operator = true;
  }else {
    result.innerHTML += val;
    operator = true;
  }
  
};