import {  useState } from "react";
import mock from "./data/mockjson.json";
interface Item {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}
interface props {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}


let mockArray: Item[] = mock;

function App() {
  const [filtered, setFiltered] = useState(mockArray);

  return (
 <div className="min-h-screen bg-slate-200">
     <div className="h-fit grid gap-10 max-w-7xl mx-auto  ">
      <input
        type="text"
        name="filter"
        id="filter"
        className="border border-gray-300 px-5 py-3 m-5 rounded-lg h-fit"
        onChange={(e) => {
          let result = mockArray.filter((item: Item) => {
            let target = e.target.value.toLowerCase();
            let fullName=item.first_name+" "+item.last_name;

          

            if (fullName.toLowerCase().includes(target)) {
              return item;
            }

            if (item.email.toLowerCase().includes(target)) {
              return item;
            }

            if (item.gender.toLowerCase().includes(target)) {
              return item;
            }
          });
          setFiltered(result);
        }}
        placeholder="enter Email name or gender and get the results"
      />

      <div className="px-3 border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((item: Item) => {
          return (
            <Result
              firstName={item.first_name}
              lastName={item.last_name}
              gender={item.gender}
              email={item.email}
            />
          );
        })}
      </div>
    </div>
 </div>
  );
}

function Result({ firstName, lastName, gender, email }: props) {
  return (
    <div className="grid gap-2 border border-gray-400 px-3 py-2">
      <div className="flex item-center justify-between gap-3">
        <div>
          <span> {firstName} </span>
          <span> {lastName}</span>
        </div>
        <div>{gender}</div>
      </div>
      <div>{email}</div>
    </div>
  );
}

export default App;
