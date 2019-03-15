import React, { Component } from 'react'
import axios from 'axios'

export default class Employees extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            salary: '',
            currentEmployees: []
        }
    }

    componentDidMount(){
        axios.get('/api/staff').then(results => {
            this.setState({
                currentEmployees: results.data
            })
            console.log(111113333, this.state.currentEmployees)
        })
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
        // console.log(this.state)
    }

    addEmployee = () => {
        axios.post('/api/employee', this.state).then(response => {
            console.log(11111222, response)
        })
    }

    deleteEmployee = () => {
        axios.delete(`/api/delete/${this.state.currentEmployees.id}`).then(results => {
            
        })
    }

    render() {
        let currentStaff = this.state.currentEmployees.map((e, i) => {
            
            return (
               <div >
                   <p>employees id: {e.id}</p>
                   <p>first name: {e.first}</p>
                   <p>last name: {e.last}</p>
                   <p>email: {e.email}</p>
                   <p>phone #: {e.phone}</p>
                   <p>salary: {e.salary}</p>
                   <button onClick={this.deleteEmployee}>delete</button>
               </div>
            )
        })
        
        return (
        <div>
            <div>
                <h1>Add new Employee</h1>
                <input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="first name"></input>
                <input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="last name"></input>
                <input value={this.state.emailAddress} onChange={this.handleInputChange} name="emailAddress" placeholder="email"></input>
                <input value={this.state.phoneNumber} onChange={this.handleInputChange} name="phoneNumber" placeholder="phone number"></input>
                <input value={this.state.salary} onChange={this.handleInputChange} name="salary" placeholder="salary"></input>
                <button onClick={this.addEmployee}>Add</button>
            </div>
            <div>
                <h1>Current Employees</h1>
                <div className="staff-table">
                    
                        
                        {currentStaff}                
                    
                
                    
                </div>
                
            </div>
        </div>
        )
    }
}

