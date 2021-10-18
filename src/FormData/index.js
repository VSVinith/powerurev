import {Component} from 'react'
import axios from 'axios';
import './index.css'
const initialState = {
        nameValue: "",
        numberValue:"",
        VehicleType: "",
        emailValue: "",
        modelValue:"",
        addressValue:"",
        nameError:"",
        numberError:"",
        emailError:"",
        modelError:"",
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
        // console.log(nameValue);
        // console.log(numberValue);
        // console.log(emailValue);
        //  console.log(VehicleType);
        //  console.log(modelValue);
        //  console.log(addressValue);
        //console.log(this.state);
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
        //console.log("insert into PowerUrEV.dbo.userData values('"+nameValue+"','',"+numberValue+",'"+addressValue+"')");
        //const formDetails={nameValue, numberValue, VehicleType,modelValue,addressValue}
        //const formDetails={nameValue:this.nameValue, numberValue:this.numberValue}//, VehicleType,modelValue,addressValue}
        //const url="https://apis.ccbp.in/login";
        const url='http://localhost:5000/FormData'
        axios.post(url,this.state).then((response)=>console.log(response)).catch(err=>console.log(err));
        axios.post('http://localhost:5000/sendMail',this.state).then((response)=>console.log(response)).catch(err=>console.log(err));
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
        const {nameValue, numberValue, VehicleType, emailValue,modelValue,addressValue} = this.state
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
                <input
                   type="text"
                   id="number"
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
                </div>
                <button className="submit-btn" type="submit">Submit</button>
              </form>
            </div>
        )
    }
}

export default FormData

