                        //pset7

var person = [];
var person1 = {};
var person2 = {};
var person3 = {};

person.push(person1);
person.push(person2);
person.push(person3);

person.forEach(function(value, index){
    value.name = "";
    value.age = 0;
    value.mob;
});

person[0].name = "Naruto";
person[0].age = 18;
person[0].mob = [1234, 5678, 91011];

person[1].name = "Sakura";
person[1].age = 80;
person[1].mob = [191919];

person[2].name = "Kakashi";
person[2].age = 25;
person[2].mob = [11111, 22222, 99999];

function findIndex(object, arr){
    var len = arr.length;
    for(; len!=0; --len){
        if(object == arr[len-1]){
            return (len-1);
        }
    }
}

function findProperty(arr, property){
    for(var property1 in arr){
        if(property == property1){
            return property1;
        }
    }
}

function getValue(object, prop){ 
    var ind = findIndex(object, person);
    var property1 = findProperty(person[ind], prop);
    
    return person[ind][property1];
}

function setValue(object, prop, propValue){
    var ind = findIndex(object, person);
    var property1 = findProperty(person[ind], prop);    
    
    person[ind][property1] = propValue;
    return person[ind];
}

function getStatus(object){
    var ind = findIndex(object, person);
    
    if(person[ind].age<=100 && person[ind].age>=0){
        if(person[ind].age <= 10){
            return "kid";
        }
        else if(person[ind].age <= 20){
            return "teenager";
        }
        else if(person[ind].age <= 60){
            return "adult";
        }
        else{
            return "old";
        }

    }
    else{
        return "Invalid Age";
    }
}

function addMobile(object, mobileNumber){
    var ind = findIndex(object, person);
    
    person[ind].mob.push(mobileNumber);

    return person[ind].mob;

}

function removeMobile(object, mobileNumber){
    var ind = findIndex(object, person);

    person[ind].mob.forEach(function(value, index){
        if(mobileNumber == value){
            person[ind].mob.splice(index, 1);
        }
    });
    
    return person[ind].mob;
}

function totalMobiles(object){
    var ind = findIndex(object, person);

    return person[ind].mob.length;
}