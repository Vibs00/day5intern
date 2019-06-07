function area_of_triangle(a, b, c){
    var p = (a+b+c)/2;
    var ans = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return ans.toFixed(3);
}

function c_f(c){
    return (((c*9)/5)+32) + "°F";
}

function f_c(f){
    return (((f-32)*5)/9) + "°C";
}

function max(a,b,c){
    return (a>b)?(a>c?a:c) : (b>c?b:c);
}

function factor(num){
    return (num%3==0)?true : (num%7==0?true:false);
}

console.log("capitalize prog");
function capitalize(str){
   var i=0;
   var arr = str.split(" ");
   //arr = str.split("");
    
    //arr[0] = arr[0].charAt(0).toUpperCase();
    var len = str.length;
    for(; len!=0; --len){
        arr[len-1] = arr[len-1].split("");
        if(arr[len-1][0]>= "a" && arr[len-1][0]<="z"){
            //arr[i][0] = arr[i][0] + ("a" - "A");
            arr[len-1][0].toUpperCase();
        }
    } 
   
   return arr;
}
console.log(capitalize("vibha sharma"))


                            //Pset 4
//Ques 1
function contains(arr){
    var len = arr.length;
    var flag30 = 0, flag40 = 0;

    for(; len!=0; --len){
        if(arr[len-1]==30){
            ++flag30;
            if(flag40!=0)
                return true;
        }
        else if(arr[len-1]==40){
            ++flag40;
            if(flag30!=0)
                return true;
        }
    }
    if(flag30==0 || flag40==0)
        return false;
}

console.log(contains([10,20,30,50,60,40]))
console.log(contains([10,20,30,60]));

//Ques 2
function fnlswap(arr){
    var len = arr.length;
    if(len >= 1){
        arr[0] = arr[0] + arr[len-1];
        arr[len-1] = arr[0] - arr[len-1];
        arr[0] = arr[0] - arr[len-1];
    }
    return arr;
}

console.log(fnlswap([1,2,3,4,5,6,7,8]));

//Ques 3
function high_and_low(arr){
    var len = arr.length;
    var max = arr[len-1];
    var min = arr[len-1];
    --len;
    for(; len!=0; --len){
        if(arr[len-1] > max){
            max = arr[len-1];
        }
        if(arr[len-1] < min){
            min = arr[len-1];
        }
    }
    return "Max = " + max + " Min = " + min;
}

console.log(high_and_low([1,0,60,9,4,7,4,8]))

//Ques 4
var total = 0;
function sumOf(value){
    total += value;
}
[1,2,3,4,5,6,7,8,9,10].forEach(sumOf);
console.log(total);