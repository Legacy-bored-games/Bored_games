import React,{ createContext, useState, useEffect } from 'react'
import { EventApi } from "../api/index"

const EventContext = createContext()

export const ToDoProvider = ({ children }) => {
  const [events, setEvents] = useState([])

  const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('userId')).id)
 

  useEffect(() => {
    
    fillEvents()
  }, []);

  const fillEvents = () => {
    EventApi.getEvents().then(res => setEvents(res.filter(event => event.participantUser.includes(activeUser[0].userId))))
  }


  return (
    <EventContext.Provider
      value={{
        events, 
        setEvents, 
        fillEvents
         
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export default EventContext
