import React from 'react'
import { Card, Image, Container, Header, Segment } from 'semantic-ui-react'

const CarCard = ({ title, year, picture, passengers, minprice, hourly }) => {

  return (
    <>
      <Container>
        <Card>
          <Header as="h2" textAlign="center" style={{ margin: '5px 0' }}
          > {title}</Header>
          <Segment style={{ margin: '0 0 10px 0' }} textAlign="center" >Year: {year}</Segment>
          <Image src={picture} alt={title} style={{ width: '250px', height: '200px' }}></Image>
          <Card.Content>
            <Card.Description></Card.Description>
            <Card.Description>Number of passengers: {passengers}</Card.Description>
            <Card.Description>Minimum price: £ {minprice}</Card.Description>
            <Card.Description>Hourly: £ {hourly}</Card.Description>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
        </Card>
      </Container>
      
    </>
  )

}
export default CarCard