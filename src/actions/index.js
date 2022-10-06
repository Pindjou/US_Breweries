export const set_breweries=(data)=>{
 return{
    type: 'SET_BREWERIES',
    data: data
 }
}
//
export const view_brewery_details=(data)=>{
    return{
    type: 'VIEW_BREWERY_DETAILS',
    data: data
 }
}
//
export const create_comment=(data)=>{
    return{
    type: 'CREATE_COMMENT',
    data: data
 }
}
//
export const create_favorite=(data)=>{
    return{
        type: 'CREATE_FAVORITE',
        data: data
    }
}
//
export const login =()=>{
    return{
    type: 'LOGIN',
 }
}
//
export const create_review=(data)=>{
    return{
    type: 'CREATE_REVIEW',
    data: data
 }
}
//
export const set_user_info=(data)=>{
    return{
    type: 'SET_USER_INFO',
    data: data
 }
}
//
export const create_user=(data)=>{
    return{
        type: 'CREATE_USER',
        data: data
    }
}