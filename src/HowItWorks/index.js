import './index.css'


const HowItWorks = () =>  (
    <div className="how-container" id="howitworks">
        <div className="container-1">
        {/* <img alt="ev img1" className="how-car-img" src="https://afdc.energy.gov/sp/assets/car_pages/electric-4f9deff163a93794d18539eeaa28c03e2760c6a7e1fa161cf46d10cdc42b8bea.jpg"/> */}
        <div className="how-content">
            <h1 className="">How it works</h1>
            <ul className="list-conatiner">
               <li className="lst-item">
                   <div className="num-card">
                        <h1 className="number">1</h1>
                   </div>
                   <p className="description">Fill the form with your basic KYC details</p>
                </li>
               <li className="lst-item">
                    <div className="num-card">
                        <h1 className="number">2</h1>
                    </div>
                   <p className="description">Our representative will get in touch with you</p>
                </li>
               <li className="lst-item">
                    <div className="num-card">
                        <h1 className="number">3</h1>
                    </div>
                   <p className="description">Pay 250/- of visiting charges, our technician will reach your location assess the work involved and give you the quotation.</p>
                </li>
               <li className="lst-item">
                    <div className="num-card">
                        <h1 className="number">4</h1>
                    </div>
                   <p className="description">If you are convinced with the quote, we will complete the work in promised hours.</p>
                </li>
            </ul>
            
        </div>
        
        </div>
    </div>
)

export default HowItWorks