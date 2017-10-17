let BASE_URL = "http://104.236.141.69:8080";
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:8080";
  console.log("Running using dev host!"); // eslint-disable-line no-console
}

const USER_ROUTE = "/users";
const PAGE_ROUTE = "/pages";
const PAGE_LIST_ROUTE = "/pages";

export { BASE_URL, USER_ROUTE, PAGE_ROUTE, PAGE_LIST_ROUTE };
