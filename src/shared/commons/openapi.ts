import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import { paths } from "../openapi";

const fetchClient = createFetchClient<paths>({
  baseUrl: "http://localhost:3000/",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:5173/",
    "Access-Control-Allow-Credentials": "true",
  },
});
export const $api = createClient(fetchClient);
