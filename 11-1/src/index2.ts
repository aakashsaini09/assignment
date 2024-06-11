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