import React from 'react'
import { Segment, Grid, Header, Icon } from 'semantic-ui-react'

const Footer = () => {

  return (
    <Segment size='large' basic id="goldenColor">
      <Grid columns={2}>
        <Grid.Column floated='right' width={5} textAlign="left" >
          <Header as="h6"  style={{ margin: '0 0 10px 0' }}>CONTACT:</Header>
          <h6 style={{ color: 'black' }, { marginTop: '0 0' }}>Mon-Sat 9am - 6pm</h6>
          <Grid columns={2}  style={{ margin: '-20px 0 -10px -15px' }}>
            <Icon name="phone" size="small" color="black" />
            <p className="pFooter">0123456789</p>
          </Grid>
          <Grid columns={2}>
            <Icon name="mail outline" size="small" color="black"/>
            <p className="pFooter">info@vintCars.com</p>
          </Grid>
        </Grid.Column>
        <Grid.Column floated='left' width={5} >
          <Header as="h6" style={{ margin: '0 0 30px 0' }}>CONNECT:</Header>
          <Grid >
            <Icon name="facebook official" size="large" color="black" />
            <Icon name="twitter" size="large" color="black" />
            <Icon name="instagram" size="large" color="black" />
          </Grid>
        </Grid.Column>
        
      </Grid>
    </Segment>
    
  )

}
export default Footer