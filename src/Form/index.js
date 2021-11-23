import {Component} from 'react'
//import {Modal} from 'react-bootstrap';
//import {GrClose} from 'react-icons/gr';
import {AiOutlineForm} from 'react-icons/ai';
import axios from 'axios';
import './index.css'
class Form extends Component  {
    state = {
        show: false,
        // nameValue: "",
        // numberValue:"",
        // VehicleType: "",
        // emailValue: "",
        // modelValue:"",
        // address1Value:"",
        // address2Value:"",
        // landmarkValue:"",
        // pincodeValue:"",
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
    handleModel = event => {
        this.setState({modelValue: event.target.value});
    }
    handleAddress1 = event => {
        this.setState({address1Value: event.target.value});
    }
    handleAddress2 = event => {
        this.setState({address2Value: event.target.value});
    }
    handleLandmark = event => {
        this.setState({landmarkValue: event.target.value});
    }
    handlePincode = event => {
        this.setState({pincodeValue: event.target.value});
    }
    submitForm = async event => {
        // const {nameValue, numberValue,emailValue, VehicleType,modelValue,addressValue} = this.state;
        //console.log(nameValue);
        //console.log(numberValue);
        // console.log(VehicleType);
        // console.log(modelValue);
        // console.log(addressValue);
        //console.log(this.state);
        event.preventDefault();
        //console.log("insert into PowerUrEV.dbo.userData values('"+nameValue+"','',"+numberValue+",'"+addressValue+"')");
        //const formDetails={nameValue, numberValue, VehicleType,modelValue,addressValue}
        //const formDetails={nameValue:this.nameValue, numberValue:this.numberValue}//, VehicleType,modelValue,addressValue}
        //const url="https://apis.ccbp.in/login";
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
        
        
    }
    render()  {
        //const {show, nameValue, numberValue, VehicleType, emailValue,modelValue,address1Value,address2Value,landmarkValue,pincodeValue} = this.state
        return (
            <div>
            <a className="form-app-container" id="rotate" href="/#form">
                <button  className="form-button" onClick={this.onClickForm}><AiOutlineForm className="form-icon"/>Get A Quote</button>                
            </a>
            
            </div>
        )
    }
}

export default Form

