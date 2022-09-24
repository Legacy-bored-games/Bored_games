import{post,get,patch,remove} from "./request"

export const getBoardGames=()=>get('/boardGame') ;
export const getBoardGame=id=>get(`/boardGame/${id}`) ;
export const newBoardGame=data=>post('/boardGame',data) ;
 
export const updateBoardGame=(id,data)=>patch(`/boardGame/${id}`,data) ;
export const deleteBoardGame=(id)=>remove(`/boardGame/${id}`) ;