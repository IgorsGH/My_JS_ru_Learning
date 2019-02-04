"use strict";

let tste = "sadasda";

[1,2].forEach(alert);

let rez = {pic:12,name:"pippo"};

alert(typeof rez.pic);

let promtResult = prompt("ThisIsTitle", "just enter something");

alert(promtResult);

let noDefault = prompt("NoDefault");

let confirmResult = confirm("Is this is a question?");

alert(confirmResult);

alert( 1 && null && 2 );

alert( null || 9 && 3 || 4 );

alert( String(null) === "null" );

alert( +true );

/*
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5
 = "$45"
"4" - 2
 = 2
"4px" - 2
 = NaN
7 / 0
 = Infinity
" -9\n" + 5 = " -9\n5"
" -9\n" - 5 = -14
5 && 2
 = 2
2 && 5
 = 5
5 || 0
 = 5
0 || 5 = 5
null + 1 = 1 // (3)
undefined + 1 = NaN // (4)
null == "\n0\n" = false // (5)
*/
/*
1-Оператор "+" в данном случае прибавляет 1 как строку, и затем 0.
2-Оператор "-" работает только с числами, так что он сразу приводит "" к 0.
3-null при численном преобразовании становится 0
4-undefined при численном преобразовании становится NaN
5-При сравнении == с null преобразования не происходит, есть жёсткое правило: null == undefined и только.
6-И левая и правая часть == преобразуются к числу 0.
*/

for (var i = 0; i < 10; i++) {

  if (i % 2 == 0) continue;

  alert(i);
}

outer: for (var i = 0; i < 3; i++) {

  for (var j = 0; j < 3; j++) {

    var input = prompt('Значение в координатах '+i+','+j, '');

    // если отмена ввода или пустая строка -
    // завершить оба цикла
    if (!input) break outer; // (*)

  }
}
alert('Готово!');

// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
var sum = function(a, b) {
  return a + b;
}

//Для того, чтобы функция всегда надёжно работала, объявим её как Named Function Expression:
var f = function factorial(n) {
  return n ? n*factorial(n-1) : 1;
};

var g = f;  // скопировали ссылку на функцию-факториал в g
f = null;

alert( g(5) ); // 120, работает!




var ob = {name:"obJJect", id:77, data:{}};

function checObj(incObj){
    if(incObj==null || incObj ===undefined)
        return "object is null or undefined";
    if(!("id" in incObj && "name" in incObj))
        return "this object doesnt have id and name field";
    if( !("data" in incObj) || !(incObj.data instanceof Object))
        return "there is no filed data or this field isn't an object";
    if(!("text" in incObj.data)){
        incObj.data.text = "this is text from data object, in obJJect"
        return "a text was added to field \"text\" in data.text";
    }
    return "This is "+ob.name +" with Id - " + ob.id +". It has a field called data wich is also object with field text where is written -> "+ob.data.text;
};

alert( checObj(ob));

 

var tezt = {};
let ttt = ()=>{let result; tezt==undefined? result = "tezd is undefined" : tezt===null? result = "tezd is null" : tezt instanceof Object ? result = "tezd is an Object" : result = "tezd is something else ))"; return result; }
alert( ttt() );