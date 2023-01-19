import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function signup(credentials) {
	const { token } = await apiFetch("signup", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: credentials,
	});

	sessionStorage.setItem(tokenKey, token);
}