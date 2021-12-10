import React, { Component } from 'react'
import { Button,Container,Row,Col,Card,CardImg,CardBody,CardFooter,CardGroup } from 'react-bootstrap'
import img1 from '../images/31.jpg'
import img2 from '../images/32.jpg'
import img3 from '../images/33.jpg'
import img4 from '../images/34.jpg'
import img5 from '../images/35.jpg'
import img6 from '../images/36.jpg'


export default class Card3 extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 20, marginTop:40}}>
                    <br/>
                    <h1 style={{ fontWeight:'bold', textAlign: 'center', marginBottom:60}}>Nutrition</h1>
                    <br />
                <Row>
    <Col md={4}>
      <Card style={{cursor:'pointer',textAlign: 'center'}} border="dark">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>11 Things That Can Happen When You Go Vegan for a Month</Card.Title>
          <Card.Text>
          Considering going vegan? You’re not alone: Every month, people test out the meat- and dairy-free diet for ethical and environmental reasons...
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
          <Card.Title style={{fontWeight:'bold'}}>The Secret Foods Dietitians Eat to Stay Fit and Healthy</Card.Title>
          <Card.Text>
          Ever wondered what foods dietitians rely on for staying healthy? While some experts love particular foods for their flavor profile, others...
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
          <Card.Title style={{fontWeight:'bold'}}>12 Foods With More Vitamin C Than Oranges</Card.Title>
          <Card.Text>
          Eating foods rich in vitamin C may help reduce the duration of a cold. These foods contain even more vitamin C than oranges.
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
          What Are Some Of The Healthier Sides Of Drinking Beer?</Card.Title>
          <Card.Text>
          Is there a healthy side of drinking beer? Yes, there is! When consumed in moderation you can reap some of the benefits from the…
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
          <Card.Title style={{fontWeight:'bold'}}>Coffee Can Affect Your Heart's Rhythms</Card.Title>
          <Card.Text>
          Drinking coffee helps people stay more active, but it also significantly robs some of sleep, researchers say.
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
          <Card.Title style={{fontWeight:'bold'}}>Are Potatoes Healthy? Here's What a Nutritionist Says</Card.Title>
          <Card.Text>
          Eating foods rich in vitamin C may help reduce the duration of a cold. These foods contain even more vitamin C than oranges.
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
