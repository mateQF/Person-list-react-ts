import axios from "axios";
import { Person, PersonResponseFromApi } from "../types";

export const getAllPersons = () => {
    return fetchPersons().then(mapFromApiToPersons)
}

const fetchPersons = async (): Promise<PersonResponseFromApi> => {
  const response = await axios.get("http://localhost:3001/persons");
  return response.data;
};

const mapFromApiToPersons = (
  apiResponse: PersonResponseFromApi
): Array<Person> => {
  return apiResponse.map((personFromApi) => {
    const {
      months: age,
      profileUrl: avatar,
      nick,
      description,
    } = personFromApi;

    return {
      nick,
      age,
      avatar,
      description,
    };
  });
};
