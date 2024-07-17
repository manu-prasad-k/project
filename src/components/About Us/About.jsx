import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLocationArrow } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import Button from 'react-bootstrap/Button';





function About() {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>

<Container>
      <Row>
        <Col>
        
     
       
        
        </Col>


       



        <Col>
        
        
        <div className='value'>


            <h5>ABOUT US <FaLocationArrow /></h5>
            
            <h3>Unknown Wanderlust</h3>


            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eveniet architecto facilis voluptatem! Eveniet, nemo ipsam assumenda doloremque ad est tempor</p>
            </div>

            <Container>
      <Row>
        <Col>
        <div className='grid'>
        <h5  className='h1'><SiTicktick />    Safty Guides</h5>

<p>Lorem ipsum dolor sit amet consectetur adipnhh hvrsg i</p>

<Button variant="success">Success</Button>

        </div>

       
        </Col>
        <Col>

<div className='grid2'>
<h5 className='h2'><SiTicktick />Passport Assistance</h5>

<p>Lorem ipsum dolor sit amet consectetur adipnhh hvrsg i</p>
</div>



        
        </Col>
      </Row>
      </Container>
        
        
        </Col>
      </Row>

      </Container>


    </div>
  )
}

export default About
