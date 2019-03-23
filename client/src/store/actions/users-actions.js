const setUsers = ( users ) => {
    return { type: "SET_USERS", payload: users }
}


const addUser = ( users ) => {
    return { type: "ADD_USER", payload: users }
}

export { setUsers, addUser }