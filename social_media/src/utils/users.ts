

export const users: Array<usersType> = Array.from(getUsers());
console.log("Users ", users);
console.log("Users type", typeof users);


export type usersType = {
    [key: string]: string;
};

export function setUsers(users: Array<usersType>, signUp = false) {
    if (signUp) {
        var v = users[users.length - 1]
        v.avatarUrl =
            "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg";

        v.firstName = v.fullName.split(" ")[0]
        v.surname = v.fullName.split(" ")[1]
        v.phoneNumber = " "
        v.address1 = " "
        v.address2 = " "
        v.postcode = " "
        v.area = " "
        v.education = " "
        v.country = " "
        v.state = " "
        v.region = " "
        v.bio = " "
    }
    localStorage.setItem("users", JSON.stringify(users));
    getUsers();
}

export function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[{}]");
}

export function updateUsersObj(index: string, newObj: usersType) {
    users[Number(index)] = newObj;
    setUsers(users)
}