const Reviews=(state=[],action)=>{
    switch (action.type) {
        case "CREATE_REVIEW":
           return state=[...state,action.data] 
        break;
    
        default:
            return state;
    }
}
export default Reviews;