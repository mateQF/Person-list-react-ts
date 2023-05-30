import { Person } from "../types";

interface Props {
  persons: Array<Person>;
}

// const List: React.FunctionComponent<Props> = ({ persons }) => {
const List = ({ persons }: Props) => {

  const renderList = (): JSX.Element[] => {
    return persons.map((p) => {
      return (
        <li key={p.nick}>
          <img src={p.avatar} alt={`Avatar for ${p.nick}`} />
          <h3>
            {p.nick} (<small>{p.age}</small>)
          </h3>
          <p>{p.description?.substring(0, 100)}</p> {/* ? => optional*/}
        </li>
      );
    })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  );
}

export default List