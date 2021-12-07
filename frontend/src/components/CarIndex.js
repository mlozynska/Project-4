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
    <Segment  basic inverted style={{ margin: '0 0' }}>
      <Segment  id="goldenColor">
        <Header as="h1" style={{ color: '#7b1113' }} textAlign="center">FIND YOUR DREAM CAR</Header>
      </Segment>
      
      <Segment  id="redColor" >
        <Segment  id="redColor" basic>
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
      
      
    </Segment>
  )
}
export default CarIndex