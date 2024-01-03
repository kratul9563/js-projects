/*******************************Function ***************************/

function sayMyName(){
     console.log("Kratul")
}

// sayMyName()

function add(num1,num2){
    let total=num1+num2
    return total
   
}

// console.log(add(4,5))



function loginUserMessage(username){    
    if(username===undefined){
        console.log("Please enter a user name")
    }
   console.log(`${username}, just logged in`)
}

// loginUserMessage("Kratul")

function calculateCart(...num1){  // rest operstor(...)  it can store multiple value
    return num1
}
// console.log(calculateCart(200,300,400,500))


const user={
    username:"Kratul",
    price:199
}

function anyObject(anobject){                         // object passing in a function 
    console.log(`${anobject.username} is here and price is ${anobject.price}`)
}

// anyObject(user)

const num1=[200,600,100,300,700]

function returnValue(num1){  // array can access value 
    return num1[4]
}
// console.log(returnValue(num1))

function one(){                        // you cant access local  variable outside the function scope but 
                                        // you can access global variable inside the function
    const username="Kratul"

    function two(){
        const leetcode="kratulsingh9563@gmail.com"

        function three(){
           const name="Singh"
           console.log(leetcode)
           console.log(username)
        }
        three()
       
    }
    two()
}

// one()




const sum=function(num1,num2){   // function decleration using variable
    return num1+num2
}

// console.log(sum(2,3))

// console.log(typeof this)


