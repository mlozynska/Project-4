import React from 'react'
import { Card, Image, Header, Segment, Button, Grid } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'

const CarCard = ({ id, title, year, picture, passengers, minprice }) => {
  const history = useHistory()

  

  return (
    <Link to={`/cars/${id}`}>
      <Card id="carCard">
        <Segment style={{ background: '#d4af37' }}>
          <Header as="h3" textAlign="center" style={{ margin: '0' }}> {title}</Header>
          <Header as="h5" textAlign="center" style={{ margin: '0' }}>
            Year: {year}</Header>
        </Segment>
        
        <Image src={picture} alt={title} style={{ width: '300px', height: '200px' }}></Image>

        <Card.Content>
          <Grid columns={2} style={{ justifyContent: 'space-between' }}>
            <Grid >
              <div>
                <Image id="iconCard" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeAXI2o_OrKfgn80JFKjbpbvkUMabKtllUwA&usqp=CAU'} />
              </div>
              <p as="h4" id="headerPassengers" style={{ padding: '12px 0' }}>{passengers}</p>  
            </Grid>
            <Grid.Column>
              <Header as="h5" color="yellow" >From: £ {minprice}</Header>
            </Grid.Column>
          </Grid>

        </Card.Content>
        <Segment  basic id="showMore">
          
          <Button
            onClick={() => history.push(`/cars/${id}`)}
            autoFocus
            content="Show more"
            labelPosition="right"
            inverted
            style={{ padding: '0' }}
          />  
        </Segment>  
        
        
      </Card>
    </Link>
  )

}
export default CarCard