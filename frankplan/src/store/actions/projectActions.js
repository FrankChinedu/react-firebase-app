export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore})=> {
        //make asynch call to databae
        dispatch({type:'CREATE_PROJECT', project})
    }
}