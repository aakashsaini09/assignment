// Objects in TS
// Method 1:
type First = {
    id: Number;
    username: string;
    age: Number
}
type Firsts = {
    [key: string]: First
}
// Method 2:
type Seconds = {
    [key: string]: {
        id: Number;
        username: string;
        age: Number
    }
}
const userObj: Firsts = {
    "aakash": {
        id: 21,
        age: 21,
        username: "user1"
    },
    "aman": {
        id: 2,
        age: 20,
        username: "user2"
    },
    "ankit": {
        id: 3,
        age: 18,
        username: "user3"
    },
}

// Better option use record
type Users = Record<string, number>
const user: Users = {
    "aakash": 21,
    "ravi": 23,
}

// Map function infro (it's a Js concept!)
const users = new Map()
// Set users using map function
users.set("aakash", {name: "ak", age: 20, email: "ak@gmail.com"})
users.set("aman", {name: "ak", age: 21, email: "ak@gmail.com"})
users.set("ankit", {name: "ak", age: 22, email: "ak@gmail.com"})
// get users using map function
const myuser = users.get("aakash")
console.log(myuser)
// delete users using map function
users.delete("aakash")
