import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function login(credentials) {
  console.log(credentials);
  const { token, ...user } = await apiFetch("login", {
    body: credentials,
  });

  console.log(token);

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "DELETE" });
  sessionStorage.removeItem(tokenKey);
}

export async function signup(newCredentials) {
  const { token, ...user } = await apiFetch("/users", {
    body: newCredentials,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}
