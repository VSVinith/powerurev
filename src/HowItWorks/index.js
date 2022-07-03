import './index.css'


const HowItWorks = () => (
    <div className="how-container" id="howitworks">
        <div className="container-1">
            <div className="how-content">
                <h1 className="heading-hw">How it works</h1>
                <ul className="list-conatiner">
                    <li className="lst-item">
                        <div className="num-card">
                            <h1 className="number">1</h1>
                        </div>
                        <p className="description-hw">Reach out to us by filling a small form with basic KYC details.</p>
                    </li>
                    <li className="lst-item lst-right">
                        <div className="num-card">
                            <h1 className="number">2</h1>
                        </div>
                        <p className="description-hw">We'll get in touch with you within the next 32 hours over a telephonic conversation.</p>
                    </li>
                    <li className="lst-item">
                        <div className="num-card">
                            <h1 className="number">3</h1>
                        </div>
                        <p className="description-hw">Avail a paid-at-location consultation at just Rs. 250/-</p>
                    </li>
                    <li className="lst-item lst-right">
                        <div className="num-card">
                            <h1 className="number">4</h1>
                        </div>
                        <p className="description-hw">Voila! Your charging station will be installed within the next 48-72 hours.</p>
                    </li>
                </ul>

            </div>

        </div>
    </div>
)

export default HowItWorks