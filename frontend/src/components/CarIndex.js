import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CarCard from './CarCard'

const CarIndex = () => {

  const [cars, setCars] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get('/api/cars')
      setCars(data)
    }
    getdata()
    console.log(cars)
  }, [])
  return (
    <>
      <h1>My Beautiful Cars</h1>
      {cars.map(car => {
        return (
          <CarCard key={car.id} title={car.title}
          />
        )
      })}
      
    </>
  )
}
export default CarIndex