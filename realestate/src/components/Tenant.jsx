import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

const BASE_URL = process.env.REACT_APP_URL
class Tenant extends Component {
    state={
        tenant:{ 
            name: "",
            surname:"",
            employer:"",
            phone:"",
            email:""
        },
        errMess: "",
    }
    handleChange=(input) =>{
        let tenant =this.state.tenant;
        let currentId = input.currentTarget.id;
        
        if(currentId){
            tenant[currentId] =input.currentTarget.value;
        }
        
        this.setState({tenant: tenant})
     }
     
     bookProperty = async(e,id) =>{
        e.preventDefault()
        const resp = await fetch(`${BASE_URL}/listings/${id}/tenant`,{
            method: "POST",
            body: JSON.stringify(this.state.tenant),
            headers: {
                "Content-Type": "application/json",
            }
        })
        
        if(resp.ok){
            alert("Property booked!");
            
            this.setState({
                tenant:{ 
                    name: "",
                    surname:"",
                    employer:"",
                    phone:"",
                    email:""
                }
            })
            
        }else{
            let json =await resp.json();
            this.setState({
                
                errMess: json.message
            })
        }
         
     }
    // componentDidMount= async()=>{
    //     this.bookProperty(this.props.match.params.id)
    // }


    render() {
        console.log(this.props)
        return (
            <div style={{background: 'light green', paddingTop: '100px', paddingBottom: '100px'}}>
                <Container>   
                    <Form onSubmit={()=>this.bookProperty(this.props.match.params.id)}>
                        <Form.Group >
                            <Form.Label style={{fontSize: '20px', marginBottom: '30px', fontWeight: '500'}}>Fill in the form and we will get back to you</Form.Label>
                        </Form.Group>
                        <Form.Group >
                          <Form.Label>Name</Form.Label>
                          <Form.Control className='borderNone' id="name" type="text" placeholder="Name" value={this.state.tenant.name}  onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group >
                          <Form.Label>Surname</Form.Label>
                          <Form.Control className='borderNone' id="surname" type="text" placeholder="Surname" value={this.state.tenant.surname}  onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group >
                        <Form.Label>Employer</Form.Label>
                        <Form.Control className='borderNone' id="employer" type="text" placeholder="Employer Details" value={this.state.tenant.employer}  onChange={this.handleChange}/>
                      </Form.Group>
                      <Form.Group >
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control className='borderNone' id="phone" type="tel" placeholder="Number" value={this.state.tenant.phone}  onChange={this.handleChange}/>
                        </Form.Group>
                      <Form.Group >
                          <Form.Label>Email</Form.Label>
                          <Form.Control className='borderNone' id="email" type="email" placeholder="Property ID" value={this.state.tenant.email}  onChange={this.handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" 
                        style={{ background: '#C82332', border: 'none', padding: '5px 25px', marginTop: '50px'}}
                        >
                            Submit Now
                        </Button>

                        
                        
                  
                    </Form>


                </Container>
            </div>
        );
    }
}


export default withRouter(Tenant);