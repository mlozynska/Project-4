// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Segment, Image } from 'semantic-ui-react'

const CarPage = () => {
  const { id } = useParams()
  const [car, setCar] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/cars/${id}`)
      setCar(data)
      
    }
    getData()
    
  }, [id])
  console.log(car)
  return (
    <>
      {car ?
        <Segment>
          <h1>{car.title}</h1>
          <p>{car.description}</p>
          <h5>{car.colour}</h5>
          <h5>{car.minprice}</h5>
          <h5>{car.hourly}</h5>
          <h5>{car.passengers}</h5>
          <h5>{car.steering}</h5>
          <h5>{car.year}</h5>
          <h5>{car.steering}</h5>
          <Image src = {car.picture}></Image>
          <h5>{}</h5>
          <h5>{}</h5>
          <Segment>
            <p>{car.services[0].description}</p>
            {/* {car.services.map( service => {
              return (
                <p key={id}>{service}</p>
              )
              
            })} */}
          </Segment>
        </Segment>
        
        

        :
        <h1> Loading</h1>
      
      }
    </>
  )

}
export default CarPage