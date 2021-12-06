import React from 'react'
import { Segment, Card } from 'semantic-ui-react'

const Services = ({ car }) => {

  return (
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
  )
}
export default Services