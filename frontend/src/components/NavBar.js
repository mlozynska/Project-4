import React from 'react'
import { useHistory } from 'react-router-dom'
import { Segment, Menu, MenuItem, Icon, Header } from 'semantic-ui-react'

const NavBar = () => {
  const history = useHistory()

  return (
    <>
      <Segment color="yellow" inverted>
        <Header as="h1" inverted className="navbarTitle">VintCars 🚗</Header>
        <Menu icon secondary color="yellow" inverted>
          <MenuItem position='left'>
            <Menu.Item onClick={() => history.push('/')}>
              <Icon name="home" size="big" />
            </Menu.Item>
            <Menu.Item onClick={() => history.push('/cars')}>
              <p>Our Cars</p>
            </Menu.Item>
          </MenuItem>
        </Menu>
        <h1>NavBar lives here</h1>
      </Segment>




    </>
  )
  
  
  
  

}
export default NavBar