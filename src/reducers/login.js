const LoggedIn = (state = false, action ) => {
    switch(action.type){
        case 'IS_LOGGED':
            return !state ;
        default :
        return state
    }

}
export default LoggedIn;