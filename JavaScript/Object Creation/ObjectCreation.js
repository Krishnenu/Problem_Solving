function factory() {
  return new Object();
}

factory();

//2

function factory2() {
  const obj = {};
}

// 3

function factory3() {
  const obj = {
    print: function () {
      console.log(this);
    },
  };
}

// 4

function factory4() {
  const obj = {
    print: function () {
      console.log(this);
    },
  };
  return obj;
}
let a = factory4();
a.name = "hellow";
a.print();
let b = factory4();
b;

//5
function factoryMethod() {
  let obj = {};
  obj.prototype = function () {
    console.log(this);
  };
  return obj;
}

let a = factoryMethod();
let c = factoryMethod();


//6

function factory(){
    const prototype={
        print:function (){
            console.log(this);
        }
    return Object.create(prototype)
    }
}

// 7

function f(){
        
}

new f();

function f2(name){
    this.name=name;
        
}


new f2("lalla");
let m=new f2("abc");

let n=new f2("abc");

f2.prototype.getName=function (){
    console.log(this.name);
}

//8
class Student{
    constructor(name){
    this.name=name;
    }
    getName(){
        console.log(this.name);
    }

}


let stu=new Student("lalla");