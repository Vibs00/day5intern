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