function simplyfy(num){
    return function add(a,b){
        return (a+b)*num;
    }
}


console.log(simplyfy(5)(2,3));