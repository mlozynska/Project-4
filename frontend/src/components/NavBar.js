import React from 'react'
import { useHistory } from 'react-router-dom'
import { Segment, Menu, Icon, Header, Grid, Image } from 'semantic-ui-react'

const NavBar = () => {
  const history = useHistory()

  return (
    <>
      <Segment basic id="goldenColor" style={{ margin: '0' }}>
        <Menu secondary style={{ color: '#d4af37' }}>
          <Grid columns={3}>
            <Menu.Item  style={{ padding: '0' }} onClick={() => history.push('/')}>
              <Menu.Item  style={{ padding: '0' }}>
                <Image id="navBarImg" src={'https://lh3.googleusercontent.com/oTmncSI5olRXn583xK0A_0jjIC5JRF93rWVUjsj8aaxJ3eJOzQ1uNHBOIWEwgesIdRE3ZlafOnQkB2Eh_Ci6XtQ=s0'} style={{ padding: '0 0 0 15px' }}/>
              </Menu.Item>
              <Menu.Item style={{ padding: '5px 0' }}>
                <Header as="h1" style={{ margin: '10px 0 0 0' }}>VintCars</Header>
              </Menu.Item>
            </Menu.Item>

            <Menu.Item id="navInfo" >
              <Grid.Column style={{ padding: '0' }}>
                <Menu.Item style={{ padding: '0' }}>
                  <h5 style={{ color: 'black' }}>Mon-Sat 9am - 6pm</h5>
                </Menu.Item>
                <Menu.Item style={{ padding: '0' }}>
                  <Icon name="phone" size="small" color="black"/>
                  <p className="pNavBar">0123456789</p>
                </Menu.Item>
                <Menu.Item style={{ padding: '0' }}>
                  <Icon name="mail outline" size="small" color="black"/>
                  <p className="pNavBar">info@vintCars.com</p>
                </Menu.Item>
              </Grid.Column>
            </Menu.Item>

            <Menu.Item onClick={() => history.push('/cars/')} style={{ margin: '17px 0 0 7em' }}>
              <Header as="h1" style={{ color: '#7b1113' }}>Our Cars</Header>
            </Menu.Item>
          
          </Grid>
        </Menu>
      </Segment>
    </>
  )
  
  
  
  

}
export default NavBar