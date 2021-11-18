import {Component} from 'react'
import axios from 'axios';
// import {AiFillPhone} from 'react-icons/ai'
import './index.css'
const initialState = {
        nameValue: "",
        numberValue:"",
        VehicleType: "",
        emailValue: "",
        modelValue:"",
        propertyType:"",
        addressValue:"",
        pincodeValue:"",
        nameError:"",
        numberError:"",
        emailError:"",
        modelError:"",
        agree: false,
}
class FormData extends Component  {
    state = initialState;
    onClickForm = () => {
        this.setState(prevState => ({show: !prevState.show}))
    }
    onClose = () => {
        this.setState(prevState => ({show: !prevState.show}))
    }
    handleName = event => {
        this.setState({nameValue: event.target.value})
    }
    handleNumber = event  => {
        this.setState({numberValue: event.target.value})
    }
    handleVehicleType = event => {
        this.setState({VehicleType: event.target.value});
    }
    handleEmail = event => {
        this.setState({emailValue: event.target.value});
    }
    handleModel = event => {
        this.setState({modelValue: event.target.value});
    }
    handleAddress = event => {
        this.setState({addressValue: event.target.value});
    }
    handlePincode = event => {
        this.setState({pincodeValue: event.target.value});
    }
    handlePropertyType = event => {
        this.setState({propertyType: event.target.value});
    }
    checkboxHandler = () => {
        //const {agree} = this.state
        this.setState(prevState => ({
            agree: !prevState.agree,
        }))
    }
    validate = () => {
       let nameError = "";
       let emailError="";
       let numberError="";
       let modelError="";
       if (!this.state.nameValue) {
           nameError = "*Name is required";
       }
       if (!this.state.emailValue) {
           emailError = "*Email is required";
       }
       else if (!this.state.emailValue.includes("@"))  {
           emailError = "*Invalid email";
       }
       if (this.state.numberValue.length !== 10) {
           numberError = "*Invalid Number";
       }
       if (!this.state.modelValue) {
        modelError = "*Vehicle model is required";
    }
       if (nameError || emailError || numberError || modelError)  {
           this.setState({nameError, emailError, numberError, modelError});
           return false;
       }
       return true;
    }
    submitForm = async event => {
        //  const {nameValue, numberValue,emailValue, VehicleType,modelValue,addressValue} = this.state;
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        const url='https://powerurev.in/api/FormData'
        axios.post(url,this.state).then((response)=>console.log(response)).catch(err=>console.log(err));
        axios.post('https://powerurev.in/api/sendMail',this.state).then((response)=>console.log(response)).catch(err=>console.log(err));
        // const options={
        //     method:'GET',
        //     //body:JSON.stringify(formDetails),
        //     }
        // const response=await fetch(url,options);
        // console.log(response);
        // //const data=
        this.setState(initialState);
        }
    }
    render()  {
        const {nameValue, numberValue, VehicleType, emailValue,modelValue,addressValue,pincodeValue, propertyType, agree} = this.state
        return (
            <div id="formdata">
                <div className="form-header-container">
                    <h1 className="form-heading">Get A Quote</h1>
                </div>
              <form className="form-container" onSubmit={this.submitForm}>
                <div className="input-container">
                <label className="input-label" htmlFor="name">
                  NAME
                </label>
                <input
                   type="text"
                   id="name"
                   className="username-input-field"
                  //autoFocus
                //    required
                   placeholder="Enter your name"
                   onChange={this.handleName}
                   value={nameValue}
                />
                <div style={{fontSize: 12, color: "red"}}>{this.state.nameError}</div>
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="number">
                  NUMBER
                </label>
                {/* <AiFillPhone/> */}
                <input
                   type="text"
                   id="number"
                   //autoFocus
                //    required
                   className="username-input-field"
                   placeholder="Enter your mobile number"
                   onChange={this.handleNumber}
                   value={numberValue}
                />
                <div style={{fontSize: 12, color: "red"}}>{this.state.numberError}</div>
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="email">
                  EMAIL
                </label>
                <input
                   type="text"
                   id="email"
                   className="username-input-field"
                   placeholder="Enter your Email id"
                   onChange={this.handleEmail}
                   value={emailValue}
                />
                <div style={{fontSize: 12, color: "red"}}>{this.state.emailError}</div>
                </div>
                <div className="input-container">
                    <label htmlFor="vehicletype"className="input-label" >VEHICLE TYPE</label>
                    <select id="vehicletype" className="username-input-field" placeholder="Select Vehicle Type" onChange={this.handleVehicleType} value={VehicleType}>
                        <option value="">--select your vehicle type--</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="ebicycle">E-Bicycle</option>
                    </select>
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="model">
                  MODEL
                </label>
                <input
                   type="text"
                   id="model"
                   className="username-input-field"
                   placeholder="Enter your vehicle model"
                   onChange={this.handleModel}
                   value={modelValue}
                />
                <div style={{fontSize: 12, color: "red"}}>{this.state.modelError}</div>
                </div>
                <div className="input-container">
                    <label htmlFor="propertytype"className="input-label" >PROPERTY TYPE</label>
                    <select id="propertytype" className="username-input-field" placeholder="Select Property Type" onChange={this.handlePropertyType} value={propertyType}>
                        <option value="">--select your property type--</option>
                        <option value="individual">Individual</option>
                        <option value="apartment">Apartment</option>
                        <option value="office">Office Space</option>
                        <option value="garage">Garage</option>
                    </select>
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="address">
                  ADDRESS
                </label>
                <input
                   type="text"
                   id="model"
                   className="username-input-field"
                   placeholder="Enter your address"
                   onChange={this.handleAddress}
                   value={addressValue}
                />
                </div>
                <div className="input-container">
                <label className="input-label" htmlFor="pincode">
                  PIN CODE
                </label>
                <input
                   type="text"
                   id="model"
                   className="username-input-field"
                   placeholder="Pincode"
                   onChange={this.handlePincode}
                   value={pincodeValue}
                />
                </div>
                {/* <div className="input-container">
                <label className="input-label" htmlFor="address">
                  ADDRESS
                </label>
                <textarea
                   type="text"
                   id="address"
                   className="username-input-field"
                   placeholder="Enter your address"
                   onChange={this.handleAddress}
                   value={addressValue}
                />
                </div> */}
                <div className="input-container input-row">
                  <input className="checkbox-icon" type="checkbox" id="agree" onChange={this.checkboxHandler} />
                  <label htmlFor="agree" className="acceptance-text"> I accept <span className="span-text">terms and conditions and your privacy policy</span></label>
                </div>
                <div className="submit-btn-container">
                <button disabled={!agree} className="submit-btn" type="submit">Submit</button>
                </div>
              </form>
            </div>
        )
    }
}

export default FormData

