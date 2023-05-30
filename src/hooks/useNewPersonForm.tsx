import { useReducer } from "react";
import { Person } from "../types";

interface FormState {
  inputValues: Person;
}

const INITIAL_STATE = {
  nick: "",
  age: 0,
  avatar: "",
  description: "",
};

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear":
      return INITIAL_STATE;

    default: // unnecessary
      return state;
  }
};

export const useNewPersonForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};
