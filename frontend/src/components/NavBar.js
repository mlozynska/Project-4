import React from 'react'
import { useHistory } from 'react-router-dom'
import { Segment, Menu, MenuItem, Icon, Header, Grid, Image } from 'semantic-ui-react'

const NavBar = () => {
  const history = useHistory()

  return (
    <>
      <Segment id="navBarSegment" basic>
        <Grid>
          {/* style={{ color: '#e5cf89' }} */}
          <Image id="navBarImg" src={'https://www.freeiconspng.com/thumbs/vintage-cars-png/volkswagen-vintage-cars-png-0.png'}/>
          <Header as="h1" style={{ margin: '10px 0 0 0' }}>VintCars</Header>

          
        </Grid>
        
        <Menu secondary color="yellow" inverted>
          <MenuItem position='left'>
            <Menu.Item onClick={() => history.push('/')}>
              <Icon name="home" size="large" color="black"/>
            </Menu.Item>
            <Menu.Item onClick={() => history.push('/cars')}>
              <h3>Our Cars</h3>
            </Menu.Item>
          </MenuItem>
          <MenuItem className="navInfo" position="right">
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
          </MenuItem>
        </Menu>
      </Segment>




    </>
  )
  
  
  
  

}
export default NavBar