import React from 'react'
import { Segment, Card, Image } from 'semantic-ui-react'

const CarSpec = ({ car }) => {

  return  (
    <Segment style={{ background: '#7b1113' }} basic>
      <Card.Group style={{ justifyContent: 'center' }} items={5}>

        <Card id="infoBox">
          <Card.Content style={{ background: 'black' }} textAlign="center">
            <Image id="icon" src={'https://www.bookaclassic.co.uk/images/calendar.png'} size="mini" />
            <h6 id="h6CarSpec" textalign='center' >Year: {car.year}</h6>
          </Card.Content>
        </Card>

        <Card id="infoBox">
          <Card.Content style={{ background: 'black' }} textAlign="center">
            <Image id="icon" src={'https://www.bookaclassic.co.uk/images/people.png'} size="mini"/>
            <h6 id="h6CarSpec" textalign='center'>Passengers: {car.passengers}</h6>
          </Card.Content>
        </Card>

        <Card id="infoBox">
          <Card.Content style={{ background: 'black' }} textAlign="center">
            <Image id="icon" src={'https://www.bookaclassic.co.uk/images/paint.png'} size="mini" />
            <h6 id="h6CarSpec" textalign='center'>Colour: {car.colour}</h6>
          </Card.Content>
        </Card>

        <Card id="infoBox">
          <Card.Content style={{ background: 'black' }} textAlign="center">
            <Image id="icon" src={'https://www.bookaclassic.co.uk/images/wheel2.png'} size="mini" />
            <h6 id="h6CarSpec" textalign='center'>Steering: {car.steering}</h6>
          </Card.Content>
        </Card>

        <Card id="infoBox">
          <Card.Content style={{ background: 'black' }} textAlign="center">
            <Image id="money" src={'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11522172.jpg'} />
            <h6 id="h6CarSpec" textalign='center'>Min.price: £ {car.minprice}</h6>
            <h6 id="h6CarSpec" textalign='center'>Hourly: £ {car.hourly}</h6>
          </Card.Content>
        </Card>

      </Card.Group>
    </Segment>  
  )
}
export default CarSpec