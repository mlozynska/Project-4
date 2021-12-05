import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'


const Review = () => {
  const [reviews, setReviews] = useState([])
  const randomReview = reviews[Math.floor(Math.random() * reviews.length)]
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get('/api/reviews')
      // console.log(data)
      setReviews(data)
    }
    getdata()
    console.log(reviews)
  }, [ ])

  
  console.log(randomReview)
  return (
    <>
      {randomReview ?
        <Card>
          <Card.Content style={{ background: '#d4af37' }} >
            <Card.Header>{randomReview.title}</Card.Header>
            <Card.Meta>{randomReview.name}</Card.Meta>
            <Card.Description style={{ color: 'black' }}>{randomReview.text}</Card.Description>
          </Card.Content>
        </Card>
        :
        <h1>Loading</h1>


      }
    </>
  )
}
export default Review