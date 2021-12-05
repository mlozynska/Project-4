import React, { useEffect, useState } from 'react'
import FindandBook from './FindandBook'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Segment, Header, Button, Divider, Card } from 'semantic-ui-react'
import Review from './Review'
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Home = () => {
  const history = useHistory()
  const [cars, setCars] = useState([])
  
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get('/api/cars')
      console.log(data)
      setCars(data)
    }
    getdata()
    console.log(cars)
  }, [ ])
  

  return (
    <Segment id="homeImgSegment" inverted color="black" basic vertical>
      <Segment style={{ margin: '0' }} basic inverted >
        <div className="homeImg">
          <Header as="h1" style={{ color: 'white' }}>Welcome to Vintage Car hire!</Header>
          {/* <Header as="h1" style={{ color: 'white' }}>Find & book your car!</Header> */}
          <Segment basic>
            <Button inverted size="small" style={{ width: '160px' }} position='center' onClick={() => history.push('/cars')}>Find & book your car</Button>
          </Segment>
        </div>
      </Segment>
      <Segment inverted color="black" style={{ padding: '0 15px 0 15px' }}>
        <Divider horizontal>
          <Header as='h4' style={{ color: '#7b1113' }}>
            About us
          </Header>
        </Divider>
      </Segment>
      
      <Segment id="homeAbout" inverted style={{ color: '#d4af37' }}>
        <p style={{ textAlign: 'justify' }}>Welcome to VintCars, one of the largest classic car hire company with a sumptuous selection of over 20 Classic Cars To Rent in London. We pride ourselves on service and building a bespoke product around our customers requirements, from Wedding self drive hire classic cars to driving experiences, corporate events and incentives and of course vehicles for TV, film and advertising shoots.</p>
        <p style={{ textAlign: 'justify' }}>We feel we offer the best possible selection of vintage classic cars for self drive hire; from the legendary Jaguar E-Type, the Ford Mustang to the DeLorean DMC-12 and the elegant Rolls Royce Mulliner Park Ward to name but a few.</p>
      </Segment>

      <Segment inverted color="black" style={{ padding: '0 15px 0 15px' }}>
        <Divider horizontal>
          <Header as='h4' style={{ color: '#7b1113' }}>
            How it works
          </Header>
        </Divider>
      </Segment>

      <FindandBook />

      <Segment inverted color="black" style={{ padding: '0 15px 0 15px' }}>
        <Divider horizontal>
          <Header as='h4' style={{ color: '#7b1113' }}>
            Our Cars
          </Header>
        </Divider>
      </Segment>


      <Segment basic id="goldenColor" >
        <Carousel
          showThumbs={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3500}
          transitionTime={1000}
          autoFocus={true}
          swipeable={true}
          // dynamicHeight={true}
        >

          {cars.map(car => (
            <img key={cars} src={car.picture} ></img>
          ))
          }
        </Carousel>
      </Segment>
      <Segment inverted color="black" style={{ padding: '0 15px 0 15px' }}>
        <Divider horizontal>
          <Header as='h4' style={{ color: '#7b1113' }}>
            Reviews
          </Header>
        </Divider>
      </Segment>

      <Segment inverted style={{ backgroundColor: '#7b1113' }} basic>
        <Card.Group style={{ justifyContent: 'center' }} items={3}>
          <Review />
          <Review />
          <Review />
        </Card.Group>
      </Segment>
    </Segment>
  )
  
  

}
export default Home
