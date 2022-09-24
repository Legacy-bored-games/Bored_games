import{post} from "./request"

export const login=data=>post('/user/login',data) ;
export const signUp =data=>post('/user/signup',data) ;