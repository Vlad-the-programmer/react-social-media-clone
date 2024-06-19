import { users } from "./users.ts";

export const data = [
  {
    fullName: "Vladyslav Klymchuk",
    username: "vlad",
    email: "vlad@gmail.com",
    password: "12345",
  },
];

const allUsersExceptCurrent = users.slice(0, users.length - 1);

export function usernameExists(username) {
  return (
    allUsersExceptCurrent.filter((v, i) => v.username === username).length > 0
  );
}

export function userExists(email) {
  return allUsersExceptCurrent.filter((v, i) => v.email === email).length > 0;
}

export function checkPassword(password) {
  return (
    allUsersExceptCurrent.filter((v, i) => v.password === password).length > 0
  );
}
