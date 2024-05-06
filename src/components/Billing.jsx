import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import FormfacadeEmbed from "@formfacade/embed-react";

const flights = () => {
  return (
    <section id='flights' >
      <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/116819366189686557563/form/1FAIpQLSfLSqi2jCeiqkQCuD5HHzC05pXJFD7Tt5fAsSKbk_t2j-1JTw/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/> 
    </section>
  )
}

export default flights
