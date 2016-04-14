/**
 * Created by yurii.kosovskyi on 12.04.2016.
 */

var user = {name:'Yurii',email:'ykosovsky@gmail.com',isAdmin:true, age:18}

var patternEmail  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    patternName = /^[a-zA-Z ]+$/,
    patternAge = /^(18|19|([2-9]\d|[1-9]\d))$/;

var validator = function (array) {
    if (array.length != 0) {
        while (array.length > 0){
            if (array.pop().call() === false)
                console.log('Your personal information is invalid');
        }
    }
}

function checkPattern(pattern,validationValue) {
    try {
        if (validationValue == undefined) throw new Error();
    } catch (ex) {
        console.log('Entered undefined value');
    }
    var validationResult = function () {
        return pattern.test(validationValue);
    }
    return validationResult;
}

function validatorConstructor(funcArray, func){

    if (funcArray === undefined) funcArray = new Array();
    funcArray.push(func);
    return funcArray;
}

var funcForValidation;
funcForValidation = validatorConstructor(validatorConstructor(validatorConstructor(funcForValidation
    ,checkPattern(patternName,user.name))
    ,checkPattern(patternAge,user.age))
    ,checkPattern(patternEmail,user.email));

validator(funcForValidation);