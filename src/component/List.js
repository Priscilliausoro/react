import React from "react";

function List() {
  const ListName = [
    {
      id: 1,
      name: "Priscillia",
      age: 30,
      skills: "JS",
    },
    {
      id: 2,
      name: "esther",
      age: 40,
      skills: "JavaaS",
    },
  ];
  const ListNameDisplay ={
    
  }
  return <div>
    my name is {ListName.name} i am {ListName.age} i love {ListName.skill}
  </div>;
}
export default List;
