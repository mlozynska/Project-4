// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Segment, Image, Header, Card, Grid, Form, Input, Button, TextArea, Divider } from 'semantic-ui-react'
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
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={3500}
              transitionTime={1000}
              autoFocus={true}
              swipeable={true}
              showStatus={false}
              // showIndicators={true}
              // dynamicHeight={true}
            >
              {car.image_set.map(image =>
                <img key={image.id} src={image.image}></img> 
              )
              }
            </Carousel>
          </Segment>

          {/* Info Box */}
          <Segment style={{ background: '#7b1113' }} basic>
            <Card.Group style={{ justifyContent: 'center' }} items={5}>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  <Image id="icon" src={'https://www.bookaclassic.co.uk/images/calendar.png'} size="mini" />
                  <h4 textalign='center' style={{ color: '#d4af37' }}>Year: {car.year}</h4>
                </Card.Content>
              </Card>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  <Image id="icon" src={'https://www.bookaclassic.co.uk/images/people.png'} size="mini"/>
                  <h4 textalign='center' style={{ color: '#d4af37' }}>Passengers: {car.passengers}</h4>
                </Card.Content>
              </Card>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  <Image id="icon" src={'https://www.bookaclassic.co.uk/images/paint.png'} size="mini" />
                  <h4 textalign='center' style={{ color: '#d4af37' }}>Colour: {car.colour}</h4>
                </Card.Content>
              </Card>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  <Image id="icon" src={'https://www.bookaclassic.co.uk/images/wheel2.png'} size="mini" />
                  <h4 textalign='center' style={{ color: '#d4af37' }}>Steering: {car.steering}</h4>
                </Card.Content>
              </Card>
              <Card id="infoBox">
                <Card.Content style={{ background: 'black' }} textAlign="center">
                  <Image id="money" src={'https://lh3.googleusercontent.com/proxy/-1zOfkCoBxVWdSx-YU6mBVFXkBW_ErbDxHWNALQy8YpfrnIf6xMS912j-jge1GXC6dXnFpHePTZXyZCCWIh7ykbZcapzZoGU-eauWD8puB9FqxaVeaoR4UlNtuQl35lw1ny29i2SY-U'} />
                  <h4 textalign='center' style={{ color: '#d4af37' }}>Min.price: £ {car.minprice}</h4>
                  <h4 textalign='center' style={{ color: '#d4af37' }}>Hourly: £ {car.hourly}</h4>
                </Card.Content>
              </Card>
            </Card.Group>
          </Segment>
          {/* Info box */}

          <Segment id="goldenColor" basic>
            <h5 style={{ textAlign: 'justify' }}>{car.description}</h5>
          </Segment>
          

          <Segment inverted color="black" style={{ padding: '1px 15px 0 15px' }}>
            <Divider horizontal>
              <Header as='h3' style={{ color: '#7b1113' }}>
                Services
              </Header>
            </Divider>
          </Segment>

          {/* SERVICES */}
          <Segment style={{ background: '#7b1113' }} basic>
            <Card.Group style={{ justifyContent: 'center' }}  items={6}>
              {car.services.map( service => {
                return (
                  <Card key={car.services.id} id="serviceBox">
                    <Card.Content style={{ background: '#d4af37' }} >
                      <Card.Header>{service.title}</Card.Header>
                      <Card.Meta> £ {service.price}</Card.Meta>
                      <Card.Description style={{ color: 'black' }}>{service.description}</Card.Description>
                    </Card.Content>
                  </Card>
                )
              })}
            </Card.Group>
            
          </Segment>
          {/* SERVICES */}

          {/* Form area */}
          <Segment inverted basic>
            <h5 id="formInfo">Feel free to contact us with the details of your event and we can aim to build you a bespoke quote to suit your exact requirements. We aim to offer the highest form of service and quality with a competitive package that can`t be beaten. </h5>
            <Segment inverted basic>
              <Grid columns={2} style={{ justifyContent: 'space-evenly' }}>
                <Segment style={{ marginBottom: '0' }} id="goldenColor">
                  <Form >
                    <Header as='h2' style={{ color: '#7b1113' }} textAlign="center">
                        Enquire Here
                    </Header>
                    <Form.Field control={Input} placeholder='Your full name: ' />
                    <Form.Input placeholder='joe@schmoe.com' />
                    <Form.Field control={Input}placeholder='Your phone number: '/>
                    <Form.Field control={Input} placeholder='Car-Title: '/>
                    <Form.Field control={TextArea} placeholder='Your message... '/>
                    <Button  style={{ background: '#7b1113' }} >Submit</Button>
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
          </Segment>
          {/* Form area  */}




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

          {/* <Segment>
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
          </Segment> */}


        </Segment>
        :
        <h1> Loading</h1>
      
      }
    </Segment>
  )

}
export default CarPage