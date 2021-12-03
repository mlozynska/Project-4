import React from 'react'
import { useHistory } from 'react-router-dom'
import { Segment, Menu, MenuItem, Icon, Header, Grid } from 'semantic-ui-react'

const NavBar = () => {
  const history = useHistory()

  return (
    <>
      <Segment color="yellow" inverted size="tiny">
        <Header as="h1" style={{ margin: '0' }}>VintCars 🚗</Header>
        <Menu icon secondary color="yellow" inverted style={{ margin: '0' }}>
          <MenuItem position='left'>
            <Menu.Item onClick={() => history.push('/')}>
              <Icon name="home" size="big" color="black"/>
            </Menu.Item>
          </MenuItem>
          <MenuItem position="center">
            <Menu.Item onClick={() => history.push('/cars')}>
              <h3>Our Cars</h3>
            </Menu.Item>
          </MenuItem>
          <MenuItem position="right">
            <Grid.Column>
              <Menu.Item style={{ padding: '0' }}>
                <h3 >Mon-Sat 9am - 6pm</h3>
              </Menu.Item>
              <Menu.Item style={{ padding: '0' }}>
                <Icon name="phone" size="big" color="black"/>
                <p>0123456789</p>
              </Menu.Item>
              <Menu.Item style={{ padding: '0' }}>
                <Icon name="mail outline" size="big" color="black"/>
                <p>info@vintCars.com</p>
              </Menu.Item>
            </Grid.Column>
          </MenuItem>
        </Menu>
      </Segment>




    </>
  )
  
  
  
  

}
export default NavBar