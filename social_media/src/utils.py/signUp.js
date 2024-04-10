export const data = [
  {
    fullName: "Vladyslav Klymchuk",
    username: "vlad",
    email: "vlad@gmail.com",
    password: "12345",
  },
];

export function usernameExists(username) {
  return data.filter((value, i) => data[i].username === username).length > 1;
}

export function userExists(email) {
  return data.filter((value, i) => data[i].email === email).length > 0;
}

export function checkPassword(password) {
  return data.filter((value, i) => data[i].password === password).length > 0;
}
