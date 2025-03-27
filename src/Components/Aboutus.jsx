import Footer from './Footer';
import Navbar from "./Navbar";
 

const Aboutus = () => {
  return (
    <div className="row justify-content-center">
            <Navbar/>
 

        <h1 className='display-4 text-danger'>About Us</h1>
 

        <div className="col-md-6">
            <div className="card shadow p-4 m-3">
                <img src="images/gym.jpeg" alt="our team" />
            </div>
        </div>
        <div className="col-md-6 justify-content-start">
            <h2 className='text-success'>Members:</h2>
            <ul >
                <li>Gael : CEO</li>
                <li>Nicole: COO</li>
                <li>Terry: Member</li>
                <li>Antony: Member</li>
            </ul>
            <p>At Geegee Fitness we offer Greate products and services with the leadership and cooperration of the leaders and  staff</p>
 

            <h3 className='text-primary'>Over 30+ services, over 1200+ customers served...</h3>
 

           
        </div>
        <Footer/>
    </div>
  )
}
 

export default Aboutus;
