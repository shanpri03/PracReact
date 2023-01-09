let num = 56
let s = "Prashant"
let b = true
let v = false


const arr = ["Prashant", "Divya", "Medha"]
const per1 = {
    fname: "Prashant" ,
    lname: "Dey",
    rollnum: 23
}

const per2 = {
    fname: "Durgadevi" ,
    lname: "PS",
    rollnum: 25,
    fullName: function(){
        return this.fname + " " + this.lname
    }
}
const date = new Date('2022-12-13')

console.log(per1.fname)
console.log(per2.fullName())
console.log(arr[1])

const sports = new Array("cricket", "football", "tennis")
console.log(sports[2])

const students = [
    {
        fname: "Prashant" ,
        lname: "Dey",
        rollnum: 23
    },
    {
        fname: "Durga" ,
        lname: "PS",
        rollnum: 18
    },
    {
        fname: "Shalini" ,
        lname: "Baranwal",
        rollnum: 18
    }
]

console.log(students[2].lname)
let f = sports.pop()
console.log(f)
console.log(sports)
let k = sports.push("badminton")
console.log(sports)
console.log(sports[2])
sports[2]="basketball"
console.log(sports)
sports.shift()
console.log(sports)
sports.unshift("cricket")

console.log(sports.length)
console.log(sports)
// console.log(arr)
// const nwarr = sports.concat(per2)
// console.log(nwarr)
// console.log(sports.concat(arr,nwarr))

sports.sort()
console.log(sports)
sports.reverse()
console.log(sports)
/*
Upto you to work on array or object or whatever....

Q1. Write a function which will take name of player as input and display its stats.
Q2. Write a function which will add new player and its stats.

Q3. (optional for today) Write a function which will take sports name as input and display all players and their stats in that sports.

*/
