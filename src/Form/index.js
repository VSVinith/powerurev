import {Component} from 'react'
import {Modal} from 'react-bootstrap';
import {GrClose} from 'react-icons/gr'
import {AiOutlineForm} from 'react-icons/ai'
import Bounce from 'react-reveal/Bounce';
import './index.css'
class Form extends Component  {
    state = {
        show: false,
    }
    onClickForm = () => {
        const {show} = this.state 
        this.setState(prevState => ({show: !prevState.show}))
    }
    onClose = () => {
        const {show} = this.state 
        this.setState(prevState => ({show: !prevState.show}))
    }
    submitForm = event => {
        event.preventDefault();
    }
    render()  {
        const {show} = this.state
        return (
            <div>
            <div className="form-app-container">
                <Bounce left>
                <AiOutlineForm className="form-icon" onClick={this.onClickForm}/>
                </Bounce> 
            </div>
            <Modal show={show}>
              <Modal.Header className="form-header-container">
                  <p className="form-heading">Fill the details</p>
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
                />
                </div>
                <div className="input-container">
                    <label htmlFor="vehicletype"className="input-label" >VEHICLE TYPE</label>
                    <select id="vehicletype" className="username-input-field">
                        <option value="twoWheeler">4 Wheeler</option>
                        <option value="FourWheeler">2 Wheeler</option>
                    </select>
                </div>
                <button className="submit-btn" type="submit">Submit</button>
              </form>
            </Modal>
            </div>
        )
    }
}

export default Form

