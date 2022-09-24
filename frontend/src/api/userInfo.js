import{post,get,patch,remove} from "./request"

export const getUsers=()=>get('/user') ;
export const getUser=id=>get(`/user/${id}`) ;
export const newUser=data=>post('/user',data) ;
 
export const updateUser=(id,data)=>patch(`/user/${id}`,data) ;
export const deleteUser=(id)=>remove(`/user/${id}`) ;