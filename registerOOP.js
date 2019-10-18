class User{
   //create a constructor
   constructor(email, password, passwordConfirmation) {
       this.email = email;
       this.password = password;
       this.passworrdCofirmation = passwordConfirmation
       this.authenticated = false
   }

   signUp() {
        database.set(this.email, this)

        return this;

   }

   signIn() {
       this.authenticate()

   }
   authenticate(){
       if (this.password === database.get(this.email).password){
           this.authenticated = true
           console.log("Authenticate success")
       } else {
           console.log("Authentisize was a failure my guy")
       }
       return this
   }

   signOut(){
       console.log("Successful signout")
   }

   changePassword(previous, next){
       if (this.authenticated){
           this.password = next
           console.log("verified")
       } else {
           console.log("failed to verify")
       }
   }


}




const database = new Map();

user = new User("rd", "wow", "wow");

user.save