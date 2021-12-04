import React from 'react'
import { Segment, Header, Button } from 'semantic-ui-react'

const Home = () => {

  return (
    <Segment id="homeImgSegment" inverted color="black" basic vertical>
      <Segment style={{ margin: '0' }} basic inverted >
        <div className="homeImg">
          <Header as="h1" style={{ color: 'white' }}>Welcome to Vintage Car hire!</Header>
          <Header as="h1" style={{ color: 'white' }}>Find & book your car!</Header>
          <Segment basic>
            <Button inverted size="small" style={{ width: '120px' }} position='center'>Find your car</Button>
          </Segment>
          
        </div>
      </Segment>
    </Segment>
  )
  
  

}
export default Home
