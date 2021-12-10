import React, { Component } from 'react'
import { Button,Container,Row,Col,Card,CardImg,CardBody,CardFooter,CardGroup } from 'react-bootstrap'
import img1 from '../images/41.jpg'
import img2 from '../images/42.jpg'
import img3 from '../images/43.jpg'
import img4 from '../images/44.jpg'
import img5 from '../images/45.jpg'
import img6 from '../images/46.jpg'

export default class Card4 extends Component {
    render() {
        return (
            <div>
               <Container style={{ padding: 20, marginTop:40}}>
                    <br/>
                    <h1 style={{ fontWeight:'bold', textAlign: 'center', marginBottom:60}}>Fitness</h1>
                    <br />
                <Row>
    <Col md={4}>
      <Card style={{cursor:'pointer',textAlign: 'center'}} border="dark">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>4 Ways To Start Burning More Fat When Exercising</Card.Title>
          <Card.Text>
          To maintain your health and reduce the risk of health issues and problems, you need to start working out today. The existence of little…          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">READ MORE</small>
    </Card.Footer>
      </Card>
    </Col>
    <Col md={4}>
      <Card style={{cursor:'pointer',textAlign: 'center'}} border="dark">
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>4 Plank Mistakes and How to Avoid Them</Card.Title>
          <Card.Text>
          The plank is, hands down, the best core exercise. When done correctly, the plank develops core strength, stability and endurance...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">READ MORE</small>
    </Card.Footer>
      </Card>
    </Col>
    <Col md={4}>
      <Card style={{ cursor:'pointer',textAlign: 'center'}} border="dark">
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>20-Minute Full-Body Dumbbell Workout</Card.Title>
          <Card.Text>
          “I don’t have enough time.” “I don’t belong to a gym.” “Workout routines are overcomplicated.” These (and many more) are common excuses...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">READ MORE</small>
    </Card.Footer>
      </Card>
    </Col>
</Row>
</Container>
                <Container style={{ padding: 30, marginTop:30}}>        
                <Row>
    <Col md={4}>
      <Card style={{cursor:'pointer',textAlign: 'center'}} border="dark">
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>
          The Top 5 Most Common Running Injuries</Card.Title>
          <Card.Text>
          Are you thinking about taking up running? It’s a brilliant way to get outside and feel the fresh air in your lungs as you…
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">READ MORE</small>
    </Card.Footer>
      </Card>
    </Col>
    <Col md={4}>
      <Card style={{ paddinging:20,cursor:'pointer',textAlign: 'center'}} border="dark">
        <Card.Img variant="top" src={img5} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>
          5 Stretches to Relieve Work-From-Home Pains
          </Card.Title>
          <Card.Text>
          In this age of constant connectedness and digital everything, many of us spend the bulk of our days sitting down and staring...         
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">READ MORE</small>
    </Card.Footer>
      </Card>
    </Col>
    <Col md={4}>
      <Card style={{ paddinging:20,cursor:'pointer',textAlign: 'center'}} border="dark">
        <Card.Img variant="top" src={img6} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>This 5-Minute Breathing Exercise Could Help Lower Your Blood Pressure</Card.Title>
          <Card.Text>
          Chances are, you know deep breaths can help ease stress. But according to new research from the University of Colorado,...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">READ MORE</small>
    </Card.Footer>
      </Card>
    </Col>
</Row>
</Container> 
            </div>
        )
    }
}
