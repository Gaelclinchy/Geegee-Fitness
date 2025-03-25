import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Signin = () => {

  // create diff hooks that will help you manage the different states
  const[email, setemail] = useState("");
  const[password, setpassword] = useState("");
  // set the states your application can be in
  const[loading, setloading] = useState("");
  const[error, seterror] = useState("");
    // after a successful login and verification of details, we need to redirect a user to a certain page
   // below is a hook for the same
const navigate = useNavigate()

  // a function to help us submit the details to the backed API
  const submit = async (e) =>{
        // below line of code will make sure that our app does not reload when a user clicks the signup button
        e.preventDefault()

        // Update the loading hook with some information
        setloading("Please wait")

           // create a try and catch block that will add the details to the Api
           try{
              // create an object that will be used to hold our
              const data = new FormData();
              // add the two details gotten from the input (hooks) onto the object
              data.append("email", email) 
              data.append("password", password)

              // access the post method the axios library
              // Add the detail to the back end Api
              const response = await axios.post("https://gaelclinchy7.pythonanywhere.com/api/signin", data)
              // Set the loading hook back to empty
              setloading("");

              if (response.data.user){
                // console.log(response.data.user)
                // save the details of the user into the local storage
                localStorage.setItem("user", JSON.stringify(response.data.user));
                // redirect the person to another page
                // use the navigate hook to do this
                navigate("/")
              }
              else{
                // the user was not found, show a message
                seterror(response.data.Message)
                // seterror("The user is not found")
              }
            }
           catch(error){
            // set the loading hook back to empty
            setloading("");
            seterror(error.response.data.Message)



           } 
          }


  return (
    <div className="row justify-content-center mt-5">
        <Navbar/>
      <div className="card shadow col-md-6 p-4">
        <h2>Sign In</h2>
        {loading}
        {error}
        <form onSubmit={submit}>
        <input 
        type="email"
        placeholder="Enter your email address here"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        className="form-control" /> <br />

        {/* {email} */}


        <input 
        type="password"
        placeholder="Enter the password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        className="form-control" /> <br /> <br />

        {/* {password} */}

        <button type="" className="btn btn-dark">Sign in</button>
        </form>
      </div>
    </div>
        

  )
}

export default Signin
