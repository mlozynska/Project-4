// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CarSpec from './CarSpec'
import EnqForm from './EnqForm'
import Services from './Services'
import { Segment,  Header, Divider, Comment, Rating, Form, Button } from 'semantic-ui-react'
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
    car: `${id}`,
  })
  // const [newReview, setNewReview] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/cars/${id}`)
      setCar(data)
      
    }
    getData()
    
  }, [id])
  // console.log(car)

  const handleChange = (event) => {
    const newReview = { ...review, [event.target.name]: event.target.value }
    setReview(newReview)
  }
  
  const handleStars = e => {
    const rating = e.target.attributes.getNamedItem('aria-posinset').value
    console.log(rating)
    const newReview = { ...review, rating }
    setReview(newReview)
  }

  const handleSubmit = async (event) => {
    console.log(review)
    event.preventDefault()
    try {
      await axios.post('/api/reviews/', review)
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <Segment id="carPageSegment" inverted basic>
      {car ?
        <Segment basic>
          <Header as="h1" textAlign="center" style={{ color: '#d4af37' }}>
            {car.title}
          </Header>
          
          <Segment basic id="goldenColor" >
            <Carousel
              // showThumbs={true}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={2500}
              transitionTime={1000}
              autoFocus={true}
              swipeable={true}
              showStatus={false}>
              {car.image_set.map(image =>
                <img key={image.id} src={image.image}></img> 
              )}

            </Carousel>
          </Segment>
          
          < CarSpec car={car}/>

          <Segment id="goldenColor" basic>
            <h5 style={{ textAlign: 'justify' }}>{car.description}</h5>
          </Segment>

          <Segment inverted color="black" style={{ padding: '1px 15px 0 15px' }}>
            <Divider horizontal>
              <Header as='h3' style={{ color: '#7b1113' }}>
                Services
              </Header>
            </Divider>
          </Segment>
          <Services car={car} />

          <EnqForm />

          <Segment id="goldenColor" basic>
            <Comment.Group>
              <Header>Reviews</Header>
              <Comment>
                <Comment.Content>
                  {car.review_set.length ? (
                    car.review_set.map( review => {
                      return (
                        <Segment key={car.review_set.id}>
                          <h5>{review.name}</h5>
                          {/* <h4>{review.title}</h4> */}
                          {/* <Comment.Author></Comment.Author> */}
                          <Comment.Metadata>{review.title}</Comment.Metadata>
                          
                          <Comment.Text>{review.text}</Comment.Text>
                          <Rating
                            defaultRating={review.rating}
                            icon="star"
                            maxRating={5}
                            disabled/>
                        </Segment>
                      )
                    })
                  ) : (
                    <Header textAlign="center" as="h2">
                      Be first to comment and rate this park!
                    </Header>
                  )}

                  <Form reply>
                    <input
                      onChange={handleChange}
                      name="name"
                      placeholder="Your name"
                    />
                    <input
                      onChange={handleChange}
                      name="title"
                      placeholder="Title"
                    />
                    <Form.TextArea
                      onChange={handleChange}
                      name="text"
                      placeholder="Your review..."
                    />
                    <p style={{ color: 'black' }}>
                      Please add a rating to submit your comment
                    </p>
                    <Rating
                      onClick={handleStars}
                      icon="star"
                      maxRating={5}
                      name="rating"
                    />
                    
                    <Button
                      autoFocus
                      onClick={handleSubmit}
                      content="Add Review"
                      labelPosition="left"
                    />
                  </Form>

                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Segment>

        </Segment>
        :
        <h1> Loading</h1>
      }
    </Segment>
  )
}
export default CarPage