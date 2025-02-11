import { paths } from "@/openapi.gen";
import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";

const fetchClient = createFetchClient<paths>({
  baseUrl: "http://localhost:3000/",
});
export const $api = createClient(fetchClient);
