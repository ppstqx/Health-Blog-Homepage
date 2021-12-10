import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3333.jpg'


export default class Header extends Component {
  render() {
    return (
      <div>
        <Carousel>
  <Carousel.Item style={{height:'32rem',position:'relative',background:'#000',color:'white'}}>
    <img style={{position:'absolute',backgroundPosition:'center',backgroundSize:'cover',opacity:'0.5'}}
     className="d-block w-100"
      src={img1}
      alt="First slide" height="550px"
    />
    <Carousel.Caption>
      <h3>Meditation Benefits for the Mind and Body</h3>
      <p>Our minds and our bodies are connected. If we’re unhappy for an extended time, our bodies become weaker and more susceptible to illness. In the same way, when we’re physically run down, it adversely...</p>
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item style={{height:'32rem',position:'relative',background:'#000',color:'white'}}>
    <img style={{position:'absolute',backgroundPosition:'center',backgroundSize:'cover',opacity:'0.5'}}
      className="d-block w-100"
      src={img2}
      alt="Second slide" height="550px"
    />

    <Carousel.Caption>
      <h3>Why You Should Try Yoga</h3>
      <p>What is yoga, and why is it so popular? Yoga is a series of stretches and poses that you do with breathing techniques. It offers the powerful benefits of exercise. And since yoga is gentle, almost anyone can do it, regardless of your age or fitness level.
</p>
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item style={{height:'32rem',position:'relative',background:'#000',color:'white'}}>
    <img style={{position:'absolute',backgroundPosition:'center',backgroundSize:'cover',opacity:'0.5'}}
      className="d-block w-100"
      src={img3}
      alt="Third slide" height="550px"
    />

    <Carousel.Caption>
      <h3>Health Benefits of a Morning Walk</h3>
      <p>Morning walks tend to start and end your day in a good mood. They can also help your creativity. Studies have shown that getting up and moving helps you be more creative than sitting. Walking also helps you get better sleep, which results in an overall better mood the next morning.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    )
  }
}
