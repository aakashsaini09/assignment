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