const Favorites=(state=[],action)=>{
    switch (action.type) {
        case "CREATE_FAVORITE":
            return state=[...state,action.data]
        break;
    
        default:
            return state;
    }
}
export default Favorites;