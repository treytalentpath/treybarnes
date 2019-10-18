// user = new User(email, password, passwordConfirmation)
// signUp(user)
// signIn(user)
// signOut(user)
// changePassword(previous, next, user)


const usersList = new Map();

function authenticate(){
    if (usersList.get(user.email === "undefined")){
        console.log("User does not exist")
    } else if (usersList.get(user.email).password === password) {
        console.log("Authentication successful!");
        user.signedIn = true;
    } else {
        console.log("Invalid password!");
    }
}


let user = {}

const signUp = function(user){
    if(usersList.get(user)=== "undefined"){
        save(user);
    } else {
        console.log("failed")
    }
}

const signIn = function(user){
   return authenticate()

}

const changePassword = function(previos, next, user){
    if (previous === usersList.get(user.email).password){
        console.log("Successfully changed password");
        user.password = next;
        user.passwordConfirmation = next;
        save(user);
    } else {
        console.log("Password change unsuccessfull")
    }
}

const signOut = function(user){
console.log("successful signout")
}
