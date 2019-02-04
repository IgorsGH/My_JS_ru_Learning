"use strict";


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