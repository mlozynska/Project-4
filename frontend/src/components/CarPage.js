// import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CarPage = () => {
  const { id } = useParams()
  const [car, setCar] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/cars/${id}`)
      setCar(data)
      console.log(car)
    }
    getData()
    
  }, [id])

  return (
    <>
      {car ? 
        // <h1>{car.title}</h1>
        <h1>{car.description}</h1>
        

        :
        <h1> Loading</h1>
      }
      
      <h1>Car Page</h1>
    </>
  )

}
export default CarPage