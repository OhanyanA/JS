//PROMPT
// let name = prompt("What is your name?");
// let lastName = prompt("What is your last name")
// alert('Nice to meet you ' + name+ " " + lastN

// // if/else statement
// let x= prompt("How are you?")
// if(x==="good") {
//     alert("It's well");
// }
// if (x=== "bad") {
//     alert("Oh,it's bad")
// } else {
//     alert("Oh, no")
// }
// let  y = 5;


//GAME

// let points = 0;
// let resp0 = prompt("What is the capital of Armenia");
// if (resp0 === "Yerevan") {
//     points= points + 1;
// }
// let resp1 = prompt("What is the capital of Russia?");
// if (resp1==="Moscow"){
//     points= points+1;
// }
// let resp2 = prompt("What is the capital of France?");
//  if (resp2 === "Paris") {
//      points = points+1;
//  }
//  alert(" You received " +points+ " out of 3")


//JS(Number to string)
// let x = prompt("What is your name")
// let z = prompt("What is your last name?")
//
// if (x === "Ann") {
//   if (z === "Hakobyan"){
//       alert("Oh,it's very interesting")
//   }
//   else {alert("Your last name is very interesting")}
// } else if (x === "John") {
//     alert("Hi, dear John ")
// } else if (x === "Jane") {
//     alert("Hi Jane")
// } else {
//     alert("Good morning")
// }


//String to number
// let x = "20"; //or let x = +"20"
// let y = +x;
//  if (y===20){
//      alert("Yay")
//  }
// Number to string
// let x =20
// let y ="" +20;
//
// if(y==="20"){
//     alert("wow")
// }


// Math operators
// let a =2;
// let b =3;
// let c =4;
// let d =a+b*(c+(2/a)-5);
// alert(d)

// let a = 2;
// let b = "3";
// let z ="a"+b;
//     alert(z);

// let a = 4;
// let b = ((+"4")+4)+"55"+(2+a)+("z"+a);
// alert(b+1)

// let z = 2;
// if ((z + 2) === 3) {
//     alert(1);
// } else if ((z + 1) === 4) {
//     alert(2);
// } else {
//     alert(3);
// }
//
// if (z < 3) {
//     if (z > 1) {
//         if (z >= 2) {
//             alert(4);
//         } else {
//             alert(5);
//         }
//     } else {
//         alert(6);
//     }
// } else {
//     alert(7);
// }

//WHILE LOOP
// let i = 0;
// while(i<3){
//     alert(i)
//     i = i+1
// }

// while (true){
//     let userResponse = prompt("Hi");
//     if(userResponse ==="continue"){
//  continue;
//     }
//     alert("Ok. we'll stop");
//     break;
// }


// let i = 0;
//     while(i<100)
//     {
//     alert('yay')
//         i=i+10;
//     if(i>3){
//         break;
//     }
// }


// BOOLEAN OPERATORS
// let userResponse = +prompt("How old are you?")
// if (userResponse>18 && userResponse<60){
//     alert("You are adult");
// }
// let userResponse = prompt("How old are you?")
// if (userResponse>18 || userResponse<10){
//     alert("Yay");
// }
// let userResponse = prompt("How old are you?")
// if (userResponse>18 &&  !(userResponse<10)){ //!շուռ տալ
//     alert("You are adult");
// }

// let x = 20;
// let y = (x>= 20 && (x+11===30 || !!!(x-3>10)));
// alert(y);
//
// let x =20
// let y =((!!!(x<5 && x>100))||(x+20>20|| !(x!==3)))
// alert(y)


//ARRAY
// let x = [44, 929, 8, 57];
// let y = x[0];
// x[1]= 10;
// alert(x.length);
// alert(x[1]);
// //
// let x =[]
// x[1] = 6;
// x[2] = 9;
// x[3]= 92;
// alert(x.length);
//
// let x =["Jane","Karen","Poul"]
// let i = 0;
// while (i<x.length){
//     alert(x[i])
//     i++
// }

//MULTIDIMENSIONAL ARRAYS
// let x = [5, "Hello", true, false, [5, ["Ann","John","Lisa"], 99]];
// alert(x[4][1][2]);


//TIC TAC TOE
// let board =[
//     ["_", "_", "_"],
//     ["_", "_", "_"],
//     ["_", "_", "_"]
// ];
// let player= "x"
//
// while (true) {
//     let boardStr = board[0].join("   ") +
//         "\n" +
//         board[1].join("   ") +
//         "\n" +
//         board[2].join("   ")
//
//     let row = +prompt('Dear user, please provider the value for the row \n  \n ' + boardStr)
//     let column=+prompt('Dear user, please provider the value for the column \n  \n ' + boardStr)
//
//    if( board[row][column]!=="_"){
//        alert("Not a legal move, you lose!")
// break
//    }
//     board[row][column] = player
//     if(player==="x"){
//         player = "o"
//     }else{
//         player = "x";
//     }
// }


// EXERCISE(ARRAYS)
// let a =["July", "Jane", "Ann", "Steve","Joe"];
// // THIS IS A SHORT WAY
// // console.log(a.reverse())
// // THIS IS A LOGIC
//  let i = 0,
//      i2=a.length-1;
//
//  while (i<a.length/2){
//      let d = a[i]
//      a[i]=a[i2]
//      a[i2]=d
//      i++
//      i2--
//  }
//  alert(a)

// let x =[5, 10, 33];
// let y =[]
//
// let i =0
// while(i<x.length){
//    y[i]= x[i]*2
//     i++
// }
// alert(y)

// let x
// if(x === undefined){
//     alert("OK");
// }
// x = 8
// if(x === 8) {
//     alert("Yay")
//     let x = []
//     x[0]= 9
//     x[1]="hello";
//     x[10]= "ok"
//     alert(x.length)
// }

//%OPERATOR
// alert(5%2);
// let x = [5, 8, 19, 340, 24, 58, 919, 82, 11, 33];
// let y = []
// let i = 0;
// let i2 =0
//
// while(i<x.length){
//     if(x[i] %2 !==0){
//         y[i2]=x[i]
//         i2++
//     }
//     i++
// }
// alert(y)


//FUNCTIONS//
// let add = function(y, z) {
// return y+z
// };
// let u = add(6, 10)
// alert(add(99, 100))

// // EXERCISE (BOOLEAN)
// let y = 66;
// let x = 5;
// let z = 9;
// let o = [y*z];
// o[x] = 4;
// alert(((!!!(z=== 1+3*2+(5%2))) && !(o[0]===662)) || (x*y<100 && o.length>=6))

//
// //EXERCISE // FUNCTION, ARRAY, LOOP
// let sum = function (numbers) {
//  let result = 0;
//  let i = 0;
//  while (i<numbers.length){
//   result= result+numbers[i]
//   i++
//  }
//
//  return result
//
// };
//  alert(sum([1, 2, 3]));

// //OBJECTS
// let x = []
// x[0]= 9
// x[5]= "hi"
//
// let y = {}
// y["age"]= 10
// y["name"]= "Hakob"
// y["phone"]= "098123456"
// y["address"]= {}
// y["address"]["city"]= "Yerevan"
// y["address"]["street"]= "Baghramyan"

//two ways creating an object
// let x = {}
// x["hi"]= 38
// x["name"]= "Ann"
// let y = {
//  "name": "Ann",
//  //name:"Ann", without quotes
//  "age": "17"
// }
// y.name= "Ann"
// alert(x.name) //alert(x[name])
// //
// let person= {
//  name: "Joe",
//  age: 46,
//  address: {
//   city: "Yerevan",
//   street: "aram",
//   aprtNum: 52
//  },
//  friends: [
//   {
//    name: "Mike",
//    age: 23
//   },
//   {
//    name: "Jane",
//    age: 83
//   }
//  ]
// }


// //ARRAY FILTER
// let a = [7, 99, 22, 34, 93, 101];
// let filter = function (arr){
//  let filteredArr = [];
// let i=0
//  arr.forEach(function (val) {
//   if(val%2===0){
//    filteredArr[i]= val;
//    i++
//   }
//  })
//  return filteredArr
// }
// alert(filter(a));

// let people=[{
//  name: "joe",
//  age:34
// },
//  {
//   name: "Mike",
//   age:22
//  },
//  {
//   name: "Jane",
//   age:12
//  },
// ]
// let result = people.filter(function (person){
//  return person.age>=18
// }).map(function(person){
//  return person.name
// })
// alert(result)


// // JSON
// let a= {
//  name: "Joe",
//  age: 39,
//  phone:"21122222"
// }
// alert(Object.keys(a).forEach(function (key){
//  let value = a[key]
//
//  alert(key + ":" + value)
// }))
// let a= {
//     name: "Joe",
//     age: 39,
//     phone:"21122222"
// }
//
// alert(JSON.stringify(a)) //text from object
//
// alert(JSON.parse(a)) // object from text
// let stringify= function (obj){
//  let result = "";
//  Object.keys(obj).forEach(function (key){
//   let value = obj[key];
//   result+= key +":"+ value+"\n"
//  })
//  return result
// }
// alert(stringify(a))




