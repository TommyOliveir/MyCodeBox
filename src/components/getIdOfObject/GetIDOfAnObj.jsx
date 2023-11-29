import { useUser } from "../../hooks/useUserHook";
const array = [
  { id: 1, name: "Tommy" },
  { id: 2, name: "Agi" },
  { name: "gi" },
];

export const GetIDOfAnObj = () => {
    const {user} = useUser()
  const idExistItems = array.filter((item) => item.id !== undefined);

  return (
    <div>
       username: {user}
       <hr />
      GetIDOfAnObj -
      <ul>
        {idExistItems.map((item) => (
          <li key={item.id}>
            {item.name} {item.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
