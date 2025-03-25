import { Link } from "react-router-dom"
// Import the usestate hook library
import{ useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const Signup = () => {
  // initialise the hooks
  const[username, setUsername] = useState("");
  const[email, setemail] = useState("");
  const[password, setpassword] = useState("");
  const[phone, setphone] = useState("");
  // create three hooks that will capture the state of our application when the signup button is created
  const[loading, setloading] = useState("");
  const[error, seterror] = useState("");
  const[succcess, setsuccess] = useState("");
    // We create a function below that will handle the data submitted on the form all to the database
  const submit = async (e) =>{
    // loading
    // Below we shall prevent our soite from entire reload whenever the details are submited
    e.preventDefault();
    
    // update the loading hook with a message that will be displayed when a user hits on the signup button
    setloading("Aploading your Details Please wait")

    try{
        // we create an object that will hold all the data on the hooks (email,username,phone and password)
        const data = new FormData();

        // Below we opened the different details onto mout object
        data.append("username", username);
        data.append("email", email);
        data.append("password", password);
        data.append("phone", phone);

        // Use the axios library that will help us interact with https request
        // The particular method we shall use is the post method
        const response = await axios.post("https://gaelclinchy7.pythonanywhere.com/api/signup",data)

        // After the data has been inserted successfully set the loading hook to empty
        setloading("");

        // Set the success hook with the message you get from a successfull registration
        setsuccess(response.data.Message)

        // Clear all the input fields on the html form
        // return the form to default
        setUsername("");
        setemail("");
        setpassword("");
        setphone("");
    }
    catch(error){
        // Update the loading hook to error message
        seterror("something went wrong")
        // seterror(error.Message)
    }
  }

  return (
    <div className="row justify-content-center mt-4">
        <Navbar/>
        <div className="col-md-6 card shadow p-4">
          <h2>Sign Up</h2>
          <form onSubmit={submit}>

            {loading}
            {succcess}
            {error}
            <input type="text"
            placeholder="Enter the username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/> <br />

            {/* {username} */}

            <input 
            type="email"
            placeholder="Enter Email Address"
            className="form-control"
            value={email}
            onChange={(e) => setemail(e.target.value)} 
            required /> <br />

            {/* {email} */}

            <input 
            type="password"
            placeholder="Enter the Password"
            className="form-control"
            value={password}
            onChange={(e) => setpassword(e.target.value)} 
            required /> <br />

            {/* {password} */}

            <input
             type="text"
             placeholder="Enter Phone Number"
             className="form-control"
             value={phone}
             onChange={(e) => setphone(e.target.value)} 
             required /> <br /> <br />
             <button type="Submit" className="btn btn-dark">Sign Up</button>
 
            {/* {phone} */}
          </form>
          <p>Already have an account? <Link to={"/signin"}>Sign in</Link></p>
        </div>
    </div>
  )
}

export default Signup
