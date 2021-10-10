import {Component} from 'react'
import {Modal} from 'react-bootstrap';
import {GrClose} from 'react-icons/gr'
import {AiOutlineForm} from 'react-icons/ai'
import './index.css'
class Form extends Component  {
    state = {
        show: false,
        nameValue: "",
        numberValue:"",
        VehicleType: "",
        emailValue: "",
    }
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
    submitForm = event => {
        // const {nameValue, numberValue, VehicleType} = this.state;
        // console.log(nameValue);
        // console.log(numberValue);
        // console.log(VehicleType);
        event.preventDefault();
        this.setState({nameValue: ""});
    }
    render()  {
        const {show, nameValue, numberValue, VehicleType, emailValue} = this.state
        return (
            <div>
            <div className="form-app-container" id="rotate">
                <button className="form-button" onClick={this.onClickForm}><AiOutlineForm className="form-icon"/>Get A Quote</button>                
            </div>
            <Modal show={show}>
              <Modal.Header className="form-header-container">
                  <p className="form-heading">Get A Quote</p>
                  <GrClose onClick={this.onClose}/>
              </Modal.Header>
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
                </div>
                <div className="input-container">
                    <label htmlFor="vehicletype"className="input-label" >VEHICLE TYPE</label>
                    <select id="vehicletype" className="username-input-field" onChange={this.handleVehicleType} value={VehicleType}>
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
                />
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
                />
                </div>
                <button className="submit-btn" type="submit">Submit</button>
              </form>
            </Modal>
            </div>
        )
    }
}

export default Form

