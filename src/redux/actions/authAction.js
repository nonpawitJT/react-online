export const GET_PROFILE = 'GET_PROFLIE'

export const updateProfile = (profile) =>{
 return{
    type: GET_PROFILE,
    payload:{
        profile: profile
    }
 }
}