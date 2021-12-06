import React from 'react'
import { Segment, Grid, Header, Input, TextArea, Button, Form } from 'semantic-ui-react'

const EnqForm = () => {

  return (
    <Segment inverted basic>
      <p id="formInfo">Feel free to contact us with the details of your event and we can aim to build you a bespoke quote to suit your exact requirements. We aim to offer the highest form of service and quality with a competitive package that can`t be beaten. </p>
      <Segment inverted basic>
        <Grid columns={2} style={{ justifyContent: 'space-evenly' }}>
          <Segment style={{ marginBottom: '0' }} id="goldenColor">
            <Form >
              <Header as='h2' style={{ color: '#7b1113' }} textAlign="center">
                  Enquire Here
              </Header>
              <Form.Field control={Input} placeholder='Your full name: ' />
              <Form.Input placeholder='joe@schmoe.com' />
              <Form.Field control={Input}placeholder='Your phone number: '/>
              <Form.Field control={Input} placeholder='Car-Title: '/>
              <Form.Field control={TextArea} placeholder='Your message... '/>
              <Button  style={{ background: '#7b1113' }} >Submit</Button>
            </Form>
          </Segment>
          <Segment  id="goldenColor" style={{ marginTop: '0' }}>
            <Header as='h2' style={{ color: '#7b1113' }} textAlign="center">
                  What`s Included
            </Header>
            <Segment id="goldenColor" basic textAlign="center">
              <h4>Full Comprehensive Insurance</h4>
              <h4>Daily Mileage Included - 100</h4>
              <h4>Collision Damage Waiver</h4>
              <h4>Breakdown Cover</h4>
              <h4>Storage For Your Vehicle</h4>
              <h4>20-30 Minute Classic Car Driving Lesson</h4>
            </Segment>
          </Segment>
        </Grid>
      </Segment>
    </Segment>
  )
}
export default EnqForm