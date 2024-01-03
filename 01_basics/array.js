/*********************** Array ***********************/

const user={
    username: "Kratul",
    price: 199,

    welcomeMessage:function(){
        console.log(`${this.username}, is just logged in `)
    }

}

// user.welcomeMessage()
// user.username="Singh"
// user.welcomeMessage()

/***************** Arrow Function decleration************************/

const addTwo=(num1,num2) => {   // explicit decleration arrow function
    return num1+num2
}

// console.log(addTwo(2,3))


const add = (num1,num2) => (num1+num2);    // implicit decleration arrow function

// console.log(add(2,3))