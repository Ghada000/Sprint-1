// Variables:

// Problem: Write a JavaScript function that declares a variable using var and returns its value.
function sameValue () {
    var animal= "hourse"
    return animal 

 }
 
 
undefined
sameValue()
'hourse'



// Problem: Create a function that takes two arguments and checks if they are equal. Return true if they are and false if they are not.

function equalValue (n1,n2){
    if (n1===n2){
        return true
    }
    return false
}
undefined
equalValue (2,2)
true
equalValue(5,4)
false


// Problem: Implement a function that declares a "constant" variable using var (even though var variables are not constant) and attempts


function constantVariable(n){
    var x=Math.PI
    return Math.PI+n
}
undefined
constantVariable(2)
5.141592653589793
function constantVariable(n){
    const x=Math.PI
    return Math.PI+n
}
undefined
constantVariable(5)
8.141592653589793



// Problem: Create a function that defines a variable using var within its scope. Try to access the variable outside of the function and explain the result.

function defineVar(){
    var x=5 
    return x }
undefined
defineVar()
5
defineVar(x)
VM902:1 Uncaught ReferenceError: x is not defined
    at <anonymous>:1:11
(anonymous) @ VM902:1


// Problem: Write a function that takes a variable as an argument and returns its data type.
function dataType (ghada){
    console.log(typeof ghada)
    return ghada
    
}
undefined
dataType(3)
VM1592:2 number
3
dataType(badis)
/////
function dataType (ghada){
    return typeof (ghada)
    
}
undefined
dataType(true)
'boolean'






// Conditional Statements:

// Problem: Create a function that takes an age as an argument and returns a message based on whether the person is a child, a teenager, an adult, or a senior citizen.

function AgePeople(age){
    if (age <= 10) 
    return 'you are a Child' 
else if (age >10 && age < 22)
return 'you are a teenager'
else if (age > 22 &&  age < 45)
return 'you are an adult'  
else if (age > 45 )
return 'you are a senior citizen'
}
undefined
AgePeople(5)
'you are a Child' 





// Problem: Write a function that checks if a given number is even or odd and returns an appropriate message.
function EvenOdd(number){
    if (number%2===0)
    return "This number is an even number"
 else 
 return "This number is an odd number"
 }

undefined
EvenOdd(15)
'This number is an odd number'




// Problem: Create a function that simulates a basic login system. It takes a username and password as arguments and returns true if  "Login successful" if they match, or false if  "Login failed" if they don't.

function logIn(user,password){
    if (user==='badis' && password=== 'boughanmi')
    return "Login successful"
else
    return "Login failed"
}
undefined
logIn('hi','hello')
'Login failed'


// Problem: Write a function that calculates the grade for a given test score. The function should return "A," "B," "C," "D," or "F" based on the score.
function CalculateGrade()











// Problem: Create a function that takes a day of the week as an argument and returns whether it's a weekday or a weekend day.
 function dayInWeek (day){
 if (day === "sunday" && day ==="saturday")
 return "it's weekend day "

else 
return "it is a week day "





















