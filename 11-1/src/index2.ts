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
