import axios from "axios";
import { useState } from "react"
import Navbar from "./Navbar";

const Addproduct = () => {

  // Create hooks that will enable you to store different data
    // create hooks that will enable to store different data
    const [product_name, setProductName] = useState("");
    const [product_description, setProductDescription] = useState("");
    const [product_cost, setProductCost] = useState("");
    const [product_photo, setProductPhoto] = useState("");

    // Create three additional hooks to manage the state of your application when a person clicks the add product button
    const[loading, setloading]= useState("");
    const[Message, setMessage] = useState("");
    const[error, seterror] = useState("");

    // create a fucntion that will handle the submit event
    const submit = async (e) =>{
      // prevent the site from reloading
      e.preventDefault()

      // Update the loading hook with a message
      setloading("Please wait as we upload your product details....")

      // Create a form data variable thet will hold all the details fromthe hooks
      const data = new FormData()

      // append the information from the two hooks
      data.append("product_name", product_name);
      data.append("product_description", product_description);
      data.append("product_cost", product_cost)
      data.append("product_photo", product_photo)

      try{
        const response = await axios.post("https://gaelclinchy7.pythonanywhere.com/api/addproduct", data);

      // set loading back to default
      setloading("");

      // Update your message hook with a message if the details have been saved successfully into the data base
      setMessage("Product added Successfully.")

     // set the timeout of the message
     setTimeout(() => {
     setMessage("");
     }, 8000)
      // Clear the data on the other four hooks
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");
      }
      catch(error){
        setloading("");
        seterror("Failed to add the product please try again")

      }
      
       }
    
  return (
<div className="row justify-content-center mt-4">
       <Navbar/>
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit} >
           <h2>Add Equipment</h2>

           {loading}
           {Message}
           {error}

           <input 
           type="text"
           placeholder="Enter the Equipment Name"
           className="form-control"
           value={product_name}
           onChange={(e) => setProductName(e.target.value)}
           required/> <br />

           {/* {product_name} */}

           <textarea placeholder="Enter the Description"
           className="form-control"
           value={product_description}
           onChange={(e) => setProductDescription(e.target.value)}
           required></textarea> <br/>

           {/* {product_description} */}



           <input type="number"
           placeholder="Enter the price"
           className="form-control"
           value={product_cost}
           onChange={(e) => setProductCost(e.target.value)} /> <br />

           {/* {product_cost} */}

           <label> Product Photo</label> <br />
           <input type="file"
           className="form-control"
           accept="image/*"
           onChange={(e) => setProductPhoto(e.target.files[0])}
           required /> <br /> <br />       

           <button type="submit" className="btn btn-dark">Add Equipment</button>    
        </form>
      </div>
    </div>


  )
}

export default Addproduct
