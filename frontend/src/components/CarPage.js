// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Segment, Image, Header, Card, Grid, Form, Input, Button, TextArea } from 'semantic-ui-react'
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarPage = () => {
  const { id } = useParams()
  const [car, setCar] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/cars/${id}`)
      setCar(data)
      console.log(data.image_set.image)
    }
    getData()
    
  }, [id])
  // console.log(car)
  return (
    <Segment id="carPageSegment" inverted basic>
      {car ?
        <Segment basic>
          <Header as="h1" textAlign="center" style={{ color: '#d4af37' }}>
            {car.title}
          </Header>
          
          <Segment basic id="goldenColor" >
            <Carousel
              // showThumbs={true}
              // infiniteLoop={true}
              // autoPlay={true}
              // interval={3500}
              // transitionTime={1000}
              // autoFocus={true}
              // swipeable={true}
              // showThumbs={false}
              // showStatus={false}
              // showIndicators={true}
              // dynamicHeight={true}
            >
              {car.image_set.map(image =>
                <img key={car.image_set} src={image.image}></img> 
              )
              }
            </Carousel>
          </Segment>
          
          <Segment style={{ background: '#7b1113' }} >
            <Card.Group style={{ justifyContent: 'center' }} items={5}>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  <Image id="icon" src={'https://www.bookaclassic.co.uk/images/calendar.png'} size="mini" />
                  <h4 textAlign='center' style={{ color: '#d4af37' }}>Year: {car.year}</h4>
                </Card.Content>
              </Card>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  <Image id="icon" src={'https://www.bookaclassic.co.uk/images/people.png'} size="mini"/>
                  <h4 textAlign='center' style={{ color: '#d4af37' }}>Passengers: {car.passengers}</h4>
                </Card.Content>
              </Card>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  <Image id="icon" src={'https://www.bookaclassic.co.uk/images/paint.png'} size="mini" />
                  <h4 textAlign='center' style={{ color: '#d4af37' }}>Colour: {car.colour}</h4>
                </Card.Content>
              </Card>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  <Image id="icon" src={'https://www.bookaclassic.co.uk/images/wheel2.png'} size="mini" />
                  <h4 textAlign='center' style={{ color: '#d4af37' }}>Steering: {car.steering}</h4>
                </Card.Content>
              </Card>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  {/* <Icon name="money bill alternate outline" size="big" color="grey" /> */}
                  <Image id="money" src={'https://lh3.googleusercontent.com/proxy/-1zOfkCoBxVWdSx-YU6mBVFXkBW_ErbDxHWNALQy8YpfrnIf6xMS912j-jge1GXC6dXnFpHePTZXyZCCWIh7ykbZcapzZoGU-eauWD8puB9FqxaVeaoR4UlNtuQl35lw1ny29i2SY-U'} />
                  <h4 textAlign='center' style={{ color: '#d4af37' }}>Min.price: £ {car.minprice}</h4>
                  <h4 textAlign='center' style={{ color: '#d4af37' }}>Hourly: £ {car.hourly}</h4>
                </Card.Content>
              </Card>
            </Card.Group>
          </Segment>
          
          <Segment id="goldenColor" basic>
            <h5 style={{ textAlign: 'justify' }}>{car.description}</h5>
          </Segment>

          <Segment style={{ background: '#7b1113' }}>
            <Grid columns={2} style={{ justifyContent: 'space-evenly' }}>
              <Segment style={{ marginBottom: '0' }} id="goldenColor">
                <Form >
                  <Header as='h2' style={{ color: '#7b1113' }} textAlign="center">
                      Enquire Here
                  </Header>
                  <Form.Field control={Input} placeholder='Your full name:' />
                  <Form.Input placeholder='joe@schmoe.com' />
                  <Form.Field control={Input}placeholder='Your phone number:'/>
                  <Form.Field control={Input} placeholder='Car-Title'/>
                  <Form.Field control={TextArea} placeholder='Your message...'/>
                  <Button color="black" >Submit</Button>
                </Form>
              </Segment>
              <Segment  id="goldenColor" style={{ marginTop: '0' }}>
                <Header as='h2' style={{ color: '#7b1113' }} textAlign="center">
                      What`s Included
                </Header>
                <Segment id="goldenColor" basic textAlign="center">
                  <h4>Full Comprehensive Insurance</h4>
                  <h4>Daily Mileage Included - 100</h4>
                  <h4>Collision Damage Waiver</h4>
                  <h4>Breakdown Cover</h4>
                  <h4>Storage For Your Vehicle</h4>
                  <h4>20-30 Minute Classic Car Driving Lesson</h4>
                </Segment>
              </Segment>
            </Grid>
          </Segment>

          
          


          <Segment>
            <h1>REVIEW</h1>
            {car.review_set.map( review => {
              return (
                <>
                  <p key={id}>{review.name}</p>
                  <p key={id}>{review.title}</p>
                  <p key={id}>{review.rating}</p>
                  <p key={id}>{review.text}</p>
                </>
              )
              
            })}
          </Segment>

          <Segment>
            <h1>SERVICES</h1>
            {car.services.map( service => {
              return (
                <>
                  <p key={service.id}>{service.title}</p>
                  <p key={id}>{service.description}</p>
                  <p key={id}>{service.price}</p>
                </>
              )
              
            })}
          </Segment>

          {/* <Image src = {car.image_set[1].image}></Image>
          <Image src = {car.image_set[2].image}></Image>
          <Image src = {car.image_set[3].image}></Image>
          <Image src = {car.image_set[4].image}></Image> */}
          <Segment>
            <h1>IMAGES</h1>

            {car.image_set.map( image => {
              return (
                <>
                  <img  src={image.image}></img>
                </>
              )
              
            })}
          </Segment>

        </Segment>
        
        

        :
        <h1> Loading</h1>
      
      }
    </Segment>
  )

}
export default CarPage