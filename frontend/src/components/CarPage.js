// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CarSpec from './CarSpec'
import EnqForm from './EnqForm'
import Services from './Services'
import {
  Segment,
  Header,
  Divider,
  Comment,
  Rating,
  Form,
  Button,
  Modal
} from 'semantic-ui-react'
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel/index'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarPage = () => {
  const { id } = useParams()
  const [car, setCar] = useState(null)
  const [review, setReview] = useState({
    name: '',
    title: '',
    text: '',
    rating: '',
    car: `${id}`
  })

  const [errors, setErrors] = useState({
    name: '',
    title: '',
    text: '',
    rating: ''
  })

  const [message, setMessage] = useState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/cars/${id}/`)
      setCar(data)
    }
    getData()
  }, [id, review])
  // console.log(car.id)

  useEffect(() => {
    if (review.name) return
    if (review.title) return
    if (review.text) return

    window.scrollTo(0, 0)
  })

  const handleChange = (event) => {
    const newReview = { ...review, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setReview(newReview)
    setErrors(newErrors)
  }

  const handleStars = (e) => {
    const rating = e.target.attributes.getNamedItem('aria-posinset').value
    const newReview = { ...review, rating }
    setReview(newReview)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!review.name || !review.title || !review.text || !review.rating) {
      const errorCopy = { ...errors }
      setErrors(errorCopy)
      setMessage('Please, fill in all required fields')
      console.log(errors)
      return
    }
    try {
      if (review.name || review.title || review.text || review.rating) {
        setMessage('Thank you very much for the review!')
        await axios.post('/api/reviews/', review)
        location.reload()
      }
    } catch (err) {
      setErrors(err.response.data)
    }
  }

  return (
    <Segment id="carPageSegment" inverted basic>
      {car ? (
        <Segment basic>
          <Header as="h1" textAlign="center" style={{ color: '#d4af37' }}>
            {car.title}
          </Header>

          <Segment basic id="redColor">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={2500}
              transitionTime={1000}
              autoFocus={true}
              swipeable={true}
              showStatus={false}
            >
              {car.image_set.map((image) => (
                <img key={image.id} src={image.image}></img>
              ))}
            </Carousel>
          </Segment>

          <CarSpec car={car} />

          <Segment id="goldenColor" basic>
            <h5 style={{ textAlign: 'justify' }}>{car.description}</h5>
          </Segment>

          <Segment
            inverted
            color="black"
            style={{ padding: '1px 15px 0 15px' }}
          >
            <Divider horizontal>
              <Header as="h3" style={{ color: '#7b1113' }}>
                Services
              </Header>
            </Divider>
          </Segment>
          <Services car={car} />

          <EnqForm />

          <Segment id="goldenColor" basic>
            <Divider horizontal>
              <Header as="h3" style={{ color: '#7b1113' }}>
                Reviews
              </Header>
            </Divider>

            <Segment style={{ background: '#7b1113' }}>
              <Comment id="groupContent">
                <Comment.Content>
                  {car.review_set.length ? (
                    car.review_set.map((review) => {
                      return (
                        <Segment key={car.review_set.id}>
                          <h5>{review.name}</h5>
                          <Comment.Metadata>{review.title}</Comment.Metadata>

                          <Comment.Text>{review.text}</Comment.Text>
                          <Rating
                            defaultRating={review.rating}
                            icon="star"
                            maxRating={5}
                            disabled
                          />
                        </Segment>
                      )
                    })
                  ) : (
                    <Header
                      textAlign="center"
                      as="h2"
                      style={{ color: '#d4af37' }}
                    >
                      Be first to comment and rate this Car!
                    </Header>
                  )}

                  <Form reply>
                    <input
                      onChange={handleChange}
                      name="name"
                      placeholder="Your name"
                      required
                    />
                    <input
                      onChange={handleChange}
                      name="title"
                      placeholder="Title"
                      required
                    />
                    <Form.TextArea
                      onChange={handleChange}
                      name="text"
                      placeholder="Your review..."
                      required
                    />

                    <p style={{ color: '#d4af37' }}>
                      Please add a rating to submit your comment
                    </p>
                    <Rating
                      onClick={handleStars}
                      icon="star"
                      maxRating={5}
                      name="rating"
                      required
                    />

                    <Segment id="redColor" style={{ padding: '0' }} basic>
                      <Modal
                        header="Please, fill in all required fields"
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        size="tiny"
                        trigger={
                          <Button
                            autoFocus
                            onClick={handleSubmit}
                            content="Add Review"
                            labelPosition="left"
                          />
                        }
                      >
                        {message && <Header>{message}</Header>}
                      </Modal>
                    </Segment>
                  </Form>
                </Comment.Content>
              </Comment>
            </Segment>
          </Segment>
        </Segment>
      ) : (
        <h4> Loading</h4>
      )}
    </Segment>
  )
}
export default CarPage
