import { users } from "./users.ts";

export const data = [
  {
    fullName: "Vladyslav Klymchuk",
    username: "vlad",
    email: "vlad@gmail.com",
    password: "12345",
  },
];

export function usernameExists(username) {
  return users.filter((v, i) => v.username === username).length > 1;
}

export function userExists(email) {
  return users.filter((v, i) => v.email === email).length > 0;
}

export function checkPassword(password) {
  return users.filter((v, i) => v.password === password).length > 0;
}
