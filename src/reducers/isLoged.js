const Isloged=(state=false,action)=>{
    switch (action.type) {
        case 'LOGIN':
            return state=!state;
            break;
    
        default:
            return state;
    }
}
export default Isloged;