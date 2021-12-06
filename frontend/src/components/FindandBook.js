import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const FindandBook = () => {

  return (
    <Card.Group style={{ justifyContent: 'center' }} items={3}>
      <Card >
        <Card.Content style={{ background: '#d4af37' }} textAlign="right">
          <h3 textAlign='center' style={{ color: 'black' }}>FIND YOUR DREAM CAR</h3>
          <Image id="icon" src={'https://lh3.googleusercontent.com/TTDOo8I1YwYyUoilCjLOsWUktXsj9L1PufGt8cSnetUEzyHcCid2oziUZ-O1Zn0U7FxauFNwMEb1RTgdv_plsHY=s0'} size="mini" style={{ background: '#d4af37' }} />
          <Image id="icon" src={'https://icon-library.com/images/right-arrow-icon-png/right-arrow-icon-png-19.jpg'} size="mini" style={{ background: '#d4af37' }} />
          <Card.Description>
          You are only 20 seconds away from booking a dream car. Right here you can find the worlds most extensive collection of unique classic cars and sports cars. Dreams are better in real life!
          </Card.Description>
        </Card.Content>
      </Card>

      <Card >
        <Card.Content style={{ background: '#d4af37' }} textAlign="right">
          <h4 textAlign='center' style={{ color: 'black' }}>BOOK YOUR DREAM RIDE</h4>
          <Image id="icon" src={'https://lh3.googleusercontent.com/cZTQC8blO5EIOIANXRFuYTK92X9sNN8VwPkRSWby4aVuluhh31rdkK_yOvQWjWT2twD1bg_ytKAzWagxBrwsjlQ_yg=s0'} size="mini" style={{ background: '#d4af37' }} />
          <Image id="icon" src={'https://icon-library.com/images/right-arrow-icon-png/right-arrow-icon-png-19.jpg'} size="mini" style={{ background: '#d4af37' }} />
          <Card.Description>
          Explore our collection and get instant quotes for your event. The process for booking and payment is simple and secure. We will guide you all the way through the process.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card >
        <Card.Content style={{ background: '#d4af37' }} textAlign="right">
          <h4 textAlign='center' style={{ color: 'black' }}>STOP DREAMING & START DRIVING</h4>
          <Image id="icon" src={'https://lh3.googleusercontent.com/oTmncSI5olRXn583xK0A_0jjIC5JRF93rWVUjsj8aaxJ3eJOzQ1uNHBOIWEwgesIdRE3ZlafOnQkB2Eh_Ci6XtQ=s0'} size="mini" style={{ marginTop: '22px' }} />
          
          <Card.Description>
          As soon as your booking is confirmed, the vehicle owner will contact you directly to agree all the necessary details for your big day. Then you will be all set for an unforgettable experience.
          </Card.Description>
        </Card.Content>
      </Card>

    </Card.Group>
  )
}
export default FindandBook