export const users = JSON.parse(localStorage.getItem("users") || "[{}]");
console.log("Users ", users);
console.log("Users type", typeof users);

export type usersType = {
    [key: string]: string;
};

export function setUsers(users: Array<usersType>) {
    users.forEach((v, i) => {
        if (!users[1])
            v.avatarUrl =
                "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg";

        v.name = v.fullName.split(" ")[0]
        v.surname = v.fullName.split(" ")[1]
        v.phone_number = " "
        v.address1 = " "
        v.address2 = " "
        v.postcode = " "
        v.area = " "
        v.education = " "
        v.country = " "
        v.state = " "
        v.region = " "
        v.bio = " "
    });
    return localStorage.setItem("users", JSON.stringify(users));
}

export function updateUsers(users: Array<usersType>, index: Number) {
    users.forEach((v, i) => {
        if (users[0] && (v.avatarUrl === undefined || v.avatarUrl === "")) {
            v.avatarUrl =
                "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg";
        }
    });
    return localStorage.setItem("users", JSON.stringify(users));
}