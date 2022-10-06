const Comments=(state=[],action)=>{
    switch (action.type) {
        case "CREATE_COMMENT":
            return state=[...state,action.data];
        break;
    
        default:
            return state;
    }
}
export default Comments;