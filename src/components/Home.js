import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
           title="Model S"
           description="Order Online for Touchless Delivery"
           img="model-s.jpg"
           leftButtonText="Custom Order"
           rightButtonText="Existing Inventory"
        />
        <Section
           title="Model Y"
           description="Order Online for Touchless Delivery"
           img="model-y.jpg"
           leftButtonText="Custom Order"
           rightButtonText="Existing Inventory"
        />
        <Section
           title="Model 3"
           description="Order Online for Touchless Delivery"
           img="model-3.jpg"
           leftButtonText="Custom Order"
           rightButtonText="Existing Inventory"
        />
        <Section
           title="Model X"
           description="Order Online for Touchless Delivery"
           img="model-x.jpg"
           leftButtonText="Custom Order"
           rightButtonText="Existing Inventory"
        />
         
            <Section
           title=" Solar for New Roofs"
           description="Money-back Guarentees"
           img="solar-panel.jpg"
           leftButtonText="Custom Order"
           rightButtonText="Existing Inventory"
        />
        <Section
           title="Lower Cost Solar Panels in America"
           description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
           img="solar-roof.jpg"
           leftButtonText="Custom Order"
           rightButtonText="Existing Inventory"
        />
          <Section
           title="Accessories"
           description=""
           img="accessories.jpg"
           leftButtonText="shop Now"
           
        />
        

    </Container>
  )
}

export default Home

const Container=styled.div` 
   height:100vh;
`