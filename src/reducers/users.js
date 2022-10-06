const Users=(state=[],action)=>{
    switch (action.type) {
        case "CREATE_USER":
            return state=[...state,action.data];
        break;
    
        default:
            return state;
    }
}
export default Users;