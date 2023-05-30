import { Person } from "../types";
import { useNewPersonForm } from "../hooks/useNewPersonForm";

interface FormProps {
  onNewPerson: (newPerson: Person) => void;
}

const Form = ({ onNewPerson }: FormProps) => {
  const [inputValues, dispatch] = useNewPersonForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewPerson(inputValues);
    dispatch({ type: "clear" });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({
      type: "clear",
    });
  };

  return (
    <div className="form">
      <h1>Add a person</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="Nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.age}
          type="number"
          name="age"
          placeholder="Age"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="Avatar"
        />
        <textarea
          value={inputValues.description}
          onChange={handleChange}
          name="description"
          placeholder="Description (optional)"
        />
        <div className="formButton">
          <button type="button" onClick={handleClear}>
            Clear Form
          </button>
          <button type="submit">Add Person</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
