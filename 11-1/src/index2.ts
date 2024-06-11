interface User{
    id: string;
    name: string;
    age: Number;
    email: string;
    password: string
};
type UpdateUser = Pick<User, 'age' | 'email' | 'name'>
type selectSpceific = Partial<UpdateUser>
function UpdateUser(userVal: selectSpceific){
    console.log(userVal)
}
UpdateUser({
    name: "aakash",
    age: 23,
    email: "aakash@gmail.com"
})


// When you don't want to change the values of something
// Method 1:
type UserData = {
    readonly name: string;
    readonly age: Number;
    readonly email: string
}
const userdata: UserData = {
    name: "aakash",
    age: 23,
    email: "aakash@gmail.com"
}

// Method 2: 
type userinfo = {
    name: string;
    age: Number;
    email: "aakash@gmail.com"
}
const userdataUlternative: Readonly<userinfo> = {
    name: "aakash",
    age: 23,
    email: "aakash@gmail.com"
}
// It will complain if you change the value now
// userdata.name = "aman"


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