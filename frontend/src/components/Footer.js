import React from 'react'
import { Segment, Grid, Header, Icon, Image } from 'semantic-ui-react'

const Footer = () => {

  return (
    <Segment size='' basic id="goldenColor">
      <Grid columns={3}>

        
        <Grid.Column floated='right' width={5} textAlign="left" >
          <Header as="h6"  style={{ margin: '0 0 10px 0' }}>CONTACT:</Header>
          <h6 style={{ color: 'black' }, { marginTop: '-5px' }}>Mon-Sat 9am - 6pm</h6>
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
          <Header as="h6" style={{ margin: '0 0 25px 0' }}>CONNECT:</Header>
          <Grid >
            <Icon name="facebook official" size="large" color="black" />
            <Icon name="twitter" size="large" color="black" />
            <Icon name="instagram" size="large" color="black" />
          </Grid>
        </Grid.Column>

        <Grid.Column>
          <Image id="navBarImg" src={'https://lh3.googleusercontent.com/oTmncSI5olRXn583xK0A_0jjIC5JRF93rWVUjsj8aaxJ3eJOzQ1uNHBOIWEwgesIdRE3ZlafOnQkB2Eh_Ci6XtQ=s0'} style={{ margin: '20px 0 0 0' }}/>
          <p className="pFooter">Copyright © 2021 M.Lozynska ®</p>
        </Grid.Column>

      </Grid>
    </Segment>
    
  )

}
export default Footer