import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export async function getProperties() {
  const properties = await apiFetch("properties");

  return properties;
}
