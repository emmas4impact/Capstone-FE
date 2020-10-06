import React, {Component} from 'react';
import { Jumbotron, Card, Button , Container, Row, Col}from 'react-bootstrap'
import { connect } from "react-redux";

const URL="http://localhost:5001"
console.log(URL)
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({


getListingThunk: (listings) => dispatch(getListingWithThunk(listings)),
//getProjectThunk :(projects) => dispatch(getProjectWithThunk(projects))
});
const getListingWithThunk = (listings) => {
    
    return async(dispatch, getState) => {
        const data= await fetch(`${URL}/listings`)
        //listings = await data.json()
        listings  = await data.json()
       
        console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "GET_PROPERTY",
            payload: listings.data,
        });
        console.log("hello", listings)
    
    };
  };


class PropertyListing extends Component {
    
    
    
    componentDidMount = async (id) =>{
        this.props.getListingThunk(id)
        
        // const response = await fetch("http://localhost:3456/students")
        // const data = await response.json()
        
        // console.log(data)
        // this.setState({
        //     students: data.Students,
        //     Total: data.Total
        // })

        // const resp = await fetch("http://localhost:3456/projects")
        // const project = await resp.json()
        // this.setState({
            
        //     totalProject: project.total,
        //     Projects: project.projects
        // })
        
       
    }
    
    //  handleClose = () => {
    //      this.setState({
    //          show: false
    //      })
    //  };
    //  handleShow = () => {
    //     this.setState({
    //         show: true
    //     })
    //  }
    //  saveStudent = async(e) =>{
    //     e.preventDefault()
    //     const resp = await fetch("http://localhost:3456/students",{
    //         method: "POST",
    //         body: JSON.stringify(this.state.student),
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     })
        
    //     if(resp.ok){
    //         alert("New Student Added!");
            
    //         this.setState({
    //             isLoading: false,
    //             errMess: "",
    //             student:{
    //                 firstname: "",
    //                 surname: "",
    //                 email: "",
    //                 dateofbirth: ""
    //             }
    //         })
            
    //     }else{
    //         let json =await resp.json();
    //         this.setState({
    //             isLoading: false,
    //             errMess: json.message
    //         })
    //     }
         
    //  }
    //  handleChange=(input) =>{
    //     let student =this.state.student;
    //     let currentId = input.currentTarget.id;
        
    //     if(currentId){
    //         student[currentId] =input.currentTarget.value;
    //     }
        
    //     this.setState({student: student})
    //  }
    
    render(){
      
        return(
            <>
            
            
            <Jumbotron>
               <h1>Properties</h1>  
               <div style={{ display: "flex"}} onClick={this.handleShow}><Button>Add Property</Button></div>   
            </Jumbotron>
            <Container>
            <Row>
             
            {this.props.data.properties.map((property, i)=>(
               
               <Col md={4} className="mb-3" key={i}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={property.image}/>
                        <Card.Body>
                            <Card.Title>{property.title}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go To property</Button>
                        </Card.Body>
                    </Card>
                </Col>
               
            ))}
            
            </Row>
       
            </Container>  

          
           </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListing);