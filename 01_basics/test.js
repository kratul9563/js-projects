// console.log("Kratul")



/************************ Conversion **************************/

let score="33abc"

let validnumber=Number(score)     // it is using to convert string in number

// console.log(typeof(validnumber));  //  this will show that it is type of  number 

// console.log(validnumber);   // it will show that NaN it means it is not a number


// 33 => 33
// "33abc" =>NaN
// true => 1
// null=> 0
// undefined => NaN


let number= undefined
let boolnumber=Boolean(number)

// console.log(boolnumber)

// 1 =>true
// ""=>false
// "Kratul"=>true
// undefined =>false
// true =>true

let my = NaN
let Change=String(my)

// console.log(typeof Change)

/******************************** Operation *************************/

let value=6
let negValue = -value

// console.log(negValue)   // convert value in negative form

let str1="Hello "
let str2="Kratul"

// console.log(str1+str2)     // we have join two string here 



let x= 3
let y= x++

// console.table([x,y])  // here first initialize than increment

let a=3
let b=++a

// console.table([a,b])   //here first increment than initialize


let userOne = {
    email: "kratulsingh9517@gmail.com",
    upi: "@kratul123"
}

let userTwo=userOne

// console.log(userOne)

userTwo.email = "kratul@gmail.com"

// console.log(userTwo)

// console.log(userOne.email)
// console.log(userTwo.email)


//  ********************string interpolation******************

const name="kratul"
const s1=30

// console.log(`My name is ${name} and score is ${s1}`)


const gameName= new String('Kratul')

// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())


// *************************** Numbers and Math***********************


const balance = new Number(10.89)


// console.log(balance)
// console.log(balance.toString())


// console.log(balance.toFixed(2))
// console.log(balance.toLocaleString('en-IN'))
// console.log(balance.toPrecision(2))

