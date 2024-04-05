
export function usernameExists(username){
    return data.filter((value, i) => data[i].username === username).length > 1
}

export function userExists(email){
    return data.filter((value, i) => data[i].email === email).length > 0
}