const BreweryDetails=(state={},action)=>{
    switch(action.type){
        case "VIEW_BREWERY_DETAILS":
            return state=action.data;
        break;
        default:
            return state;
    }
}
export default BreweryDetails;