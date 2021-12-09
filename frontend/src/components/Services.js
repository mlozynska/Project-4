import React from 'react'
import { Segment, Card, Image, Header } from 'semantic-ui-react'

const Services = ({ car }) => {

  return (
    <Segment style={{ background: '#7b1113' }} basic>
      <Card.Group style={{ justifyContent: 'center' }}  items={4}>
        {car.services.map( service => {
          return (
            <Card key={car.services.id} id="serviceBox">
              <Card.Content style={{ background: '#d4af37' }} >
                <Image src={service.picture} />
                <Card.Content id='servisCard'>
                  <Header as="h3" textAlign="center" style={{ paddingTop: '15px' }}>{service.title}</Header>
                  <Card.Meta textAlign="center">From: £ {service.price}</Card.Meta>
                </Card.Content>
                <Card.Description style={{ color: 'black' }}>{service.description}</Card.Description>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    </Segment>
  )
}
export default Services