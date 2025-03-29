import React from "react";

const App = () => {
  const relativeList = [
    { key: "relativeListItem1", name: "Uncle" },
    { key: "relativeListItem2", name: "Aunt" },
    { key: "relativeListItem3", name: "Cousins" },
    { key: "relativeListItem4", name: "Grandparents" },
    { key: "relativeListItem5", name: "Family Friends" },
  ];
  return (
    <div id="main">
      <ol>
        {
        relativeList.map(value=> (
          <li>{value.name}</li>
        ))
        }
      </ol>
    </div>
  );
};

export default App;
