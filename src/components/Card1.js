import React, { Component } from 'react'
import { Button,Container,Row,Col,Card,CardImg,CardBody,CardFooter,CardGroup } from 'react-bootstrap'
import img1 from '../images/11.jpg'
import img2 from '../images/12.jpg'
import img3 from '../images/13.jpg'
import img4 from '../images/14.jpg'
import img5 from '../images/15.jpg'
import img6 from '../images/16.jpg'


export default class Card1 extends Component {
    render() {
        return (
            <div>
                <Container id='Card1' style={{ padding: 20, marginTop:40}}>
                    <br/>
                    <h1 style={{ fontWeight:'bold', textAlign: 'center', marginBottom:60}}>Top Stories</h1>
                    <br />
                <Row>
    <Col md={4}>
      <Card style={{cursor:'pointer',textAlign: 'center'}} border="dark">
        <Card.Img variant="top" hover-overlay hover-zoom src={img1} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>Who’s at Higher Risk of Severe Illness From the Coronavirus?</Card.Title>
          <Card.Text>
          If you catch COVID-19, you have a greater chance of getting severe complications if you're older or have another health problem.
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
          <Card.Title style={{fontWeight:'bold'}}>Study: Those Vaccinated Still Face Risk of COVID-19</Card.Title>
          <Card.Text>
          Aug. 5, 2021 -- Fully vaccinated people still face considerable risks for contracting COVID-19, according to a new study published Wednesday...
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
          <Card.Title style={{fontWeight:'bold'}}>COVID-19 vaccines for children: What are the side effects?</Card.Title>
          <Card.Text>
          Vaccines undergo particularly rigorous safety tests before receiving approval for use in the general population. However, no drug...
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
          Mood Disorders: How to Recognize and Treat Them
</Card.Title>
          <Card.Text>
          If your emotions and moods seem out of your control over a long period of time, you may have a mood disorder. There are several different...
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
          <Card.Title style={{fontWeight:'bold'}}>Healthy Sleep Habits to Improve Deep Sleep</Card.Title>
          <Card.Text>
          By now, you’ve likely heard of many good habits that help aid in getting a restful sleep, like tossing your phone to the side and turning over...
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
          <Card.Title style={{fontWeight:'bold'}}>Why You Should Take A Daily Multivitamin</Card.Title>
          <Card.Text>
          Life doesn’t come with an owner’s manual. But it probably should. When you were young, everything you needed to know to live a healthy…
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
