import React from 'react'
import { Card, Image, Header, Grid, Segment } from 'semantic-ui-react'

const CarCard = ({ title, year, picture, passengers, minprice, hourly }) => {

  return (
    <>
      <Card >
        <Segment inverted color='black'
          onClick={() => history.push('/cars/:id')}
        >
          <Header as="h3" textAlign="left" color="white"
          > {title}</Header>
          <Header as="h5" textAlign="left" color="white">
            Year: {year}
          </Header>
          <Image src={picture} alt={title} style={{ width: '300px', height: '200px' }}></Image>
          <Card.Content>
            <Grid columns={2} style={{ margin: '0 0' }}>
              <Grid.Column >
                <Header as="h5" textAlign="left" color="yellow">
                  Number of passengers: {passengers}
                </Header>
                
              </Grid.Column>
              <Grid.Column >
                <Header as="h5" textAlign="left" color="yellow">
                  <p>Minimum price: £ {minprice}</p>
                </Header>
                <Header as="h5" textAlign="left" color="yellow">
                  <p>Hourly: £ {hourly}</p>
                </Header>
                
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Segment>
        
      </Card>
    </>
  )

}
export default CarCard