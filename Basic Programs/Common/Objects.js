let obj=new Object();
obj.id="hi";
obj.name="krishendnu";


const user={
    emil:"abc@gmail.com",
    fullName:{
        firstName:"Krish",
        latName:"Narayan"
    }
}


console.log(user["fullName"]);

// console.log(obj);

// const ob2={...obj,...user};

// const obj3=Object.assign({},obj,user.fullName);
// console.log(obj3);  

// Object.keys(obj);  //return a array of keys;
// Object.values(obj); // retuns an array of values;

// Object.entries(obj); // returns an arary of [kay,value];


const course={
    courseName:"Js in Hindi",
    price:"99",
    courseLog:"hellow"
}

const {courseLog}=course;


console.log(courseLog);
