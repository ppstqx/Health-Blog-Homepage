import React, { Component } from 'react'
import { Button,Container,Row,Col,Card,CardImg,CardBody,CardFooter,CardGroup } from 'react-bootstrap'
import img1 from '../images/21.jpg'
import img2 from '../images/22.jpg'
import img3 from '../images/23.jpg'
import img4 from '../images/24.jpg'
import img5 from '../images/25.jpg'
import img6 from '../images/26.jpg'


export default class Card2 extends Component {
    render() {
        return (
            <div>
                <Container style={{ padding: 20, marginTop:40}}>
                    <br/>
                    <h1 style={{ fontWeight:'bold', textAlign: 'center', marginBottom:60}}>Mental Health</h1>
                    <br />
                <Row>
    <Col md={4}>
      <Card style={{cursor:'pointer',textAlign: 'center'}} border="dark">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>How to Support Your Child's Mental Health</Card.Title>
          <Card.Text>
          A therapist discusses the special role parents and other caregivers have to play in safeguarding their children’s mental health.
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
          <Card.Title style={{fontWeight:'bold'}}>How to Prepare Yourself for a Tough Season</Card.Title>
          <Card.Text>
          Many of us are being challenged like never before. Get tips to stay emotionally balanced in the face of extremely difficult circumstances.
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
          <Card.Title style={{fontWeight:'bold'}}>Want to Sleep Better? Therapy Can Help</Card.Title>
          <Card.Text>
          If you struggle to sleep at night, you’re not alone. It’s estimated that more than a third of American adults aren’t getting enough sleep ...
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
          What Not to Say to Someone Struggling With Mental Health</Card.Title>
          <Card.Text>
          When someone we know is overwhelmed by depression or anxiety, we want to be supportive, but often we’re afraid we’ll say the wrong thing.
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
          <Card.Title style={{fontWeight:'bold'}}>How to Feel Better About What's Going on in the World</Card.Title>
          <Card.Text>
          If we can’t feel better about what’s happening, maybe we can find peace by letting go of our attachment to how we want life to be.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
      <small className="text-muted">READ MORE</small>
    </Card.Footer>
      </Card>
    </Col>
    <Col md={4}>
      <Card style={{ paddinging:20,cursor:'pointer' ,textAlign: 'center'}} border="dark">
        <Card.Img variant="top" src={img6} />
        <Card.Body>
          <Card.Title style={{fontWeight:'bold'}}>How to Handle Work-From-Home Burnout</Card.Title>
          <Card.Text>
          Has the reality of working from home been different from what you imagined? If so, you may be experiencing symptoms of burnout.
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
