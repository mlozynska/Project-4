import React from 'react'
import FindBook from './FindBook'

import { Segment, Header, Button, Divider } from 'semantic-ui-react'

const Home = () => {

  return (
    <Segment id="homeImgSegment" inverted color="black" basic vertical>
      <Segment style={{ margin: '0' }} basic inverted >
        <div className="homeImg">
          <Header as="h1" style={{ color: 'white' }}>Welcome to Vintage Car hire!</Header>
          {/* <Header as="h1" style={{ color: 'white' }}>Find & book your car!</Header> */}
          <Segment basic>
            <Button inverted size="small" style={{ width: '160px' }} position='center'>Find & book your car</Button>
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

      <FindBook /> 
      






    </Segment>
  )
  
  

}
export default Home
