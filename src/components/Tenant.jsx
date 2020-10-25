import React, { Component } from 'react';
import { Form, Button, Container, Toast } from 'react-bootstrap'
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
        show: false
    }
    handleChange=(input) =>{
        let tenant =this.state.tenant;
        let currentId = input.currentTarget.id;
        
        if(currentId){
            tenant[currentId] =input.currentTarget.value;
        }
        
        this.setState({tenant: tenant})
     }
     
     bookProperty = async(e) =>{
        //e.preventDefault()
        const resp = await fetch(`${BASE_URL}/listings/${this.props.match.params.id}/tenants`,{
            method: "POST",
            body: JSON.stringify(this.state.tenant),
            headers: {
                "Content-Type": "application/json",
            }
        })
        
        if(resp.ok){
            // alert("Property booked!");
            
            this.setState({
                tenant:{ 
                    name: "",
                    surname:"",
                    Employer:"",
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
            <div>
                        <Toast onClose={() => this.setState({show:false})} show={this.state.show} delay={3000} autohide 
                        style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        }}
                        >
                        
                        <Toast.Body>An email has been sent!</Toast.Body>
                        </Toast>
                 
                   
              
                <Container>   
                    <Form style={{fontSize: '12px', border: '1px solid #DEDEE0', padding: '20px'}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{fontSize: '15px', marginBottom: '30px', fontWeight: '500'}}>Fill in the form and we will get back to you</Form.Label>
                        </Form.Group>
                        <Form.Group >
                          <Form.Label style={{fontSize: '12px'}}>Name</Form.Label>
                          <Form.Control className='borderNone' 
                          id="name" 
                          type="text"
                           placeholder="Name" 
                           style={{fontSize: '12px'}}
                           value={this.state.tenant.name}
                           onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group >
                          <Form.Label>Surname</Form.Label>
                          <Form.Control className='borderNone'
                           id="surname"
                            type="text" 
                            placeholder="Surname"  
                            style={{fontSize: '12px'}}
                            value={this.state.tenant.surname}
                            onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group >
                        <Form.Label>Employer</Form.Label>
                        <Form.Control className='borderNone'
                         id="Employer" 
                         type="text" 
                         placeholder="Employer's details" 
                         style={{fontSize: '12px'}}
                         value={this.state.tenant.Employer}
                         onChange={this.handleChange}/>
                      </Form.Group>
                      <Form.Group >
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control className='borderNone' 
                          id="phone"
                           type="tel" 
                           placeholder="Number" 
                           style={{fontSize: '12px'}}
                           value={this.state.tenant.phone}
                           onChange={this.handleChange}/>
                        </Form.Group>
                      <Form.Group >
                          <Form.Label>Email</Form.Label>
                          <Form.Control className='borderNone' 
                          id="email" type="email" placeholder="Email Address" 
                          style={{fontSize: '12px'}}
                          value={this.state.tenant.email}
                          onChange={this.handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ background: '#C82332', border: 'none', padding: '5px 25px', marginTop: '10px'}} 
                        onClick={(e)=> {this.setState({show:true});
                                        e.preventDefault();
                                 this.bookProperty()}}>
                            Submit Now
                        </Button>

                        
                        
                  
                    </Form>


                </Container>
            </div>
        );
    }
}


export default withRouter(Tenant);