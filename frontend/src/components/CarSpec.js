import React from 'react'
import { Segment, Card, Image } from 'semantic-ui-react'

const CarSpec = ({ car }) => {

  return  (
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
  )
}
export default CarSpec