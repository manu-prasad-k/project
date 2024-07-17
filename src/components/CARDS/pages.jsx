import React from 'react'
import './Card.css'
import Card from 'react-bootstrap/Card';
import { FaLocationArrow } from "react-icons/fa6";



function Pages() {
  return (
    <div className='Car' >

<h5>OUR SERVICES <FaLocationArrow />
</h5>

<div className='head'>
  <div className='head1'>
  <h3>Adventure Unleashed</h3>

  </div>

  <div className='head2'>
  <h3>Discover Your Next</h3>

  </div>
</div>
                 {/* cards */}
<div className='center'>


  {/* card1 */}
<div className='center1'>
<Card style={{ width: '18rem' }}>
      <Card.Img className='round' variant="top" src="https://img.freepik.com/free-vector/vector-world-globe-map-india-middle-east-asia-centered-map-blue-planet-sphere-icon-isolated-white-background_8130-758.jpg?t=st=1721206576~exp=1721210176~hmac=49eeea26b4a65321a189e287a41d21c5aea32d3daf0ee4b52b5ac6cd76b71e9a&w=740" />
      <Card.Body>
        <Card.Title className='food'>   Food and wine Tours</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio in iure, ex itaque quis quos, debitis totam culpa enim et</p>
        </Card.Text>
      </Card.Body>
      </Card>
</div>

{/* card2 */}
<div center2>
<Card style={{ width: '18rem' }}>
      <Card.Img className='round' variant="top" src="https://img.freepik.com/free-vector/vector-world-globe-map-india-middle-east-asia-centered-map-blue-planet-sphere-icon-isolated-white-background_8130-758.jpg?t=st=1721206576~exp=1721210176~hmac=49eeea26b4a65321a189e287a41d21c5aea32d3daf0ee4b52b5ac6cd76b71e9a&w=740" />
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className='title2'>Opportunities </Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio in iure, ex itaque quis quos, debitis totam culpa enim et</p>
        </Card.Text>
      </Card.Body>
      </Card>
</div>


{/* card3 */}
<div className='center3'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='round' src="https://img.freepik.com/free-vector/vector-world-globe-map-india-middle-east-asia-centered-map-blue-planet-sphere-icon-isolated-white-background_8130-758.jpg?t=st=1721206576~exp=1721210176~hmac=49eeea26b4a65321a189e287a41d21c5aea32d3daf0ee4b52b5ac6cd76b71e9a&w=740" />
      <Card.Body>
        <Card.Title className='solo'>Solo </Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio in iure, ex itaque quis quos, debitis totam culpa enim et</p>
        </Card.Text>
      </Card.Body>
      </Card>
</div>




</div>



    </div>
  )
}

export default Pages