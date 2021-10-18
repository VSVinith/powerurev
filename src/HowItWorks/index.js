import './index.css'


const HowItWorks = () =>  (
    <div className="how-container" id="howitworks">
        <div className="container-1">
        {/* <img alt="ev img1" className="how-car-img" src="https://afdc.energy.gov/sp/assets/car_pages/electric-4f9deff163a93794d18539eeaa28c03e2760c6a7e1fa161cf46d10cdc42b8bea.jpg"/> */}
        <div className="how-content">
            <h1 className="">How it works</h1>
            <ul className="list-conatiner">
               <li className="lst-item">
                   <img className="number-img" src="https://printables.space/files/uploads/download-and-print/large-printable-numbers/1-a4.jpg" alt="num1"/>
                   <p className="description">Fill the form with your basic KYC details</p>
                </li>
               <li className="lst-item">
                   <img className="number-img" src="https://www.officenational.com.au/obv9.public/wcsstore/ONCatalogAssetStore/images/900407_1.jpg?w=400&ch=DPR&dpr=2" alt="img2"/>
                   <p className="description">Our representative will get in touch with you</p>
                </li>
               <li className="lst-item">
                   <img className="number-img" src="https://lh3.googleusercontent.com/proxy/TOv3qshCNwm3cewjMPGojMbRiBqoSubSpXGJiRgYATGZ1S2Q6gK993r-2FchHdPAtuq81mUXwuPf5t0sTdFish0zcR_ksec" alt="img3"/>
                   <p className="description">Pay 250/- of visiting charges, our technician will reach your location assess the work involved and give you the quotation.</p>
                </li>
               <li className="lst-item">
                   <img className="number-img" src="https://printables.space/files/uploads/download-and-print/large-printable-numbers/4-a4-1200x1697.jpg" alt="img4"/>
                   <p className="description">If you are convinced with the quote, we will complete the work in promised hours.</p>
                </li>
            </ul>
            
        </div>
        
        </div>
    </div>
)

export default HowItWorks