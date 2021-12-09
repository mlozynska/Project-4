import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Segment, Grid, Header, Input, TextArea, Button, Form } from 'semantic-ui-react'

const EnqForm = () => {
  const formId = 'ij6FemlU'
  const formsparkUrl = `https://submit-form.com/${formId}`
  const history = useHistory()

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    message: '',
  })

  const handleChange = (event) => {
    const newForm = { ...form, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    console.log(form)
    setForm(newForm)
    setErrors(newErrors)
  }

  // console.log(form)
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      ...form,
      // message: 'Test formspark submittion',
    }
    try {
      if (!form.name || !form.title || !form.text || !form.message || !form.phone) {
        const errorCopy = { ...errors }
        setErrors(errorCopy)
        console.log(errors)
        return
      }
      await axios.post(formsparkUrl, payload)
      // alert('Form submitted')
      console.log('Form submitted')
      history.push('/cars')
    } catch (err) {
      setErrors(err.response.data)
    }
    
  }

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
              <Form.Field control={Input} placeholder='Your full name: ' onChange={handleChange} name="name"/>
              <Form.Input control={Input} placeholder='joe@schmoe.com' onChange={handleChange} name="email"/>
              <Form.Field control={Input} placeholder='Your phone number: ' onChange={handleChange} name="phone"/>
              <Form.Field control={Input} placeholder='Car-Title: ' onChange={handleChange} name="title"/>
              <Form.Field control={TextArea} placeholder='Your message... ' onChange={handleChange} name="message"/>
              <Button  style={{ background: '#7b1113' }} onClick={handleSubmit}
              >Submit</Button>
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