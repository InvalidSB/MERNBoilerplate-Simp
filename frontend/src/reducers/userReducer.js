export const initialState=null

export const reducer = (state,action)=>{
        if(action.type==="USER"){
            return action.payload
        }
        if(action.type==="CLEAR"){
            return null
        }
      
        
        if(action.type === "UPDATEDETAILS"){
            return {
                ...state,
                name:action.payload.name,
                email:action.payload.email,
            }
        }
        return state
}