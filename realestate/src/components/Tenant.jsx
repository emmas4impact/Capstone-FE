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
            <div>
                <Container>   
                    <Form style={{fontSize: '12px', border: '1px solid #DEDEE0', padding: '20px'}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{fontSize: '15px', marginBottom: '30px', fontWeight: '500'}}>Fill in the form and we will get back to you</Form.Label>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label style={{fontSize: '12px'}}>Name</Form.Label>
                          <Form.Control className='borderNone' type="text" placeholder="Name" style={{fontSize: '12px'}}/>
                        </Form.Group>
                        <Form.Group >
                          <Form.Label>Surname</Form.Label>
                          <Form.Control className='borderNone' type="text" placeholder="Surname"  style={{fontSize: '12px'}}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className='borderNone' type="email" placeholder="Email address" style={{fontSize: '12px'}}/>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Phone Nember</Form.Label>
                          <Form.Control className='borderNone' type="tel" placeholder="Number" style={{fontSize: '12px'}}/>
                        </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Property ID</Form.Label>
                          <Form.Control className='borderNone' type="text" placeholder="Property ID" style={{fontSize: '12px'}}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ background: '#C82332', border: 'none', padding: '5px 25px', marginTop: '10px'}}>
                            Submit Now
                        </Button>

                        
                        
                  
                    </Form>


                </Container>
            </div>
        );
    }
}


export default withRouter(Tenant);