export const addItem = (item) => {
    return(dispatch, getState) => {
        dispatch({type: 'ADD_ITEM', item})
    }
}