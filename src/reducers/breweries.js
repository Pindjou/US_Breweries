const Breweries=(state=[],action)=>{
    switch(action.type){
        case 'SET_BREWERIES':
            return state=action.data;
        break;
        default:
            return state;
    }
}
export default Breweries;