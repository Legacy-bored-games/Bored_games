import{post,get,patch,remove} from "./request"

export const getEvents=()=>get('/event') ;
export const getEvent=id=>get(`/event/${id}`) ;
export const newEvent=data=>post('/event',data) ;
export const updateEvent=(id,data)=>patch(`/event/${id}`,data) ;
export const deleteEvent=(id)=>remove(`/event/${id}`) ;