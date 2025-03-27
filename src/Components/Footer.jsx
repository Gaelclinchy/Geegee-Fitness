const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p>Geegeee fitness has recieved alot of praises for our services and products we provide good services so that customers can keep fit and healthy</p>
                <p>We also offer discount to our membership payment depending on the time period you opt to pay for</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/download.jpeg" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/ig.jpeg" alt="" className="socialspictures"/>
                </a>
                <p className="text-dark">You can contact us on our social media handle to get more information or if you have questions or you need help from our customer care</p>
                </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
                <h5>Developed by Gael Clinchy &copy; 2025.All rights reserved</h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;