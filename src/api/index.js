import axios from "axios";
import { BASE_URL, USER_ROUTE, PAGE_ROUTE } from "./constants";

function getPage(userID, pageID) {
  return axios.get(
    BASE_URL + USER_ROUTE + `/${userID}` + PAGE_ROUTE + `/${pageID}`
  );
}

export default { getPage };
