import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import { TiTick } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



function Footer() {
  return (
    <div style={{ backgroundColor: 'green', padding: '20px' }}>


<Container>
      
      <Row>
        <Col>
        
        <div className='grid'>

<h4 className='head'>RouteX</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod doloremque impedit libero suscipit, cum autem, pariatur quia quis quas labore u</p>     


<div className='icons'>
<div className='icon'><FaFacebookF /></div>

<div className='icon'> <FaInstagram /></div>

<div className='icon'> <FaLinkedin /></div>
 
 
</div>



        </div>
    
        
        
        </Col>
        <Col>
        
        <div className='grid'>

<h4 className='head2'>Service Menu</h4>
              <p><TiTick/> Mistakes To Avoid</p>
              <p><TiTick/> Your Startup</p>
              <p><TiTick/> Know About Fonts</p>




</div>

        
        </Col>
        <Col>
        
        <div>
<h4 className='head3'>Useful Link</h4>                                     
<p><FaArrowRight />Latest News </p>
              <p><FaArrowRight /> Careers</p>
              <p><FaArrowRight />General Inquries </p>
              <p><FaArrowRight /> Know About Fonts</p>


        </div>
        
        
        
        
        </Col>


        <Col>
        
        <h4 className='head4'>Gallery</h4>

        <div className='image-row'>
      <div className='image'><img src='https://www.daily-choices.com/wp-content/uploads/2021/02/148480/shutterstock_1038413653-traveler-scaled.jpg.pro-cmg.jpg' alt='Image 1' /></div>
      <div className='image'><img src='http://whereandwhatintheworld.com/wp-content/uploads/formidable/Backpacker_Picture.jpg' alt='Image 2' /></div>
      <div className='image'><img src='http://htn.com.au/wp-content/uploads/2017/10/people1.jpg' alt='Image 3' /></div>
    </div>

    <div className='image-row2'>
      <div className='image2'><img src='https://www.cheapoair.com/miles-away/wp-content/uploads/2016/04/50-7.jpg' alt='Image 1' /></div>
      <div className='image2'><img src='https://tse2.mm.bing.net/th?id=OIP.6oCuUrVoWCk1sJ0pj4yBOwHaE8&pid=Api&P=0&h=180' alt='Image 2' /></div>
      <div className='image2'><img src='https://www.tripsavvy.com/thmb/U_dXVtSg7cxhvYFflLDO_Rtd3es=/3865x2576/filters:fill(auto,1)/world-in-hands-478667956-5a55118ec7822d0037964a6e.jpg' alt='Image 3' /></div>
    </div>
        
        
        </Col>
      </Row>
    </Container>

    <hr />

    <p className='text-center'>RRDevs2024|All Rights Reserved </p>


    </div>
  )
}

export default Footer