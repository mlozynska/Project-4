import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CarCard from './CarCard'
import { Segment, Grid, Header } from 'semantic-ui-react'

const CarIndex = () => {

  const [cars, setCars] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get('/api/cars')
      setCars(data)
    }
    getdata()
  }, [])

  return (
    <Segment inverted color='yellow' basic>
      <Segment inverted color='black'>
        <Header>Our Cars</Header>
      </Segment>
      
      <Segment  inverted color='black'>
        <Grid>
          {cars.map(car => {
            return (
              <CarCard
                key={car.id}
                title={car.title}
                year={car.year}
                minprice={car.minprice}
                hourly={car.hourly}
                passengers={car.passengers}
                picture={car.picture}
              />
            )
          })}
        </Grid>
        
      </Segment>
      
      
    </Segment>
  )
}
export default CarIndex