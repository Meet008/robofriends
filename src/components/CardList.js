import React from "react";
import Card from "./Card";

const CardList = (props) => {
  const { robots } = props;
  const cardComponent = robots.map((user) => {
    return (
      <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    );
  });
  return <div>{cardComponent}</div>;
  // <div>

  //   <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
  //   <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
  // </div>
};
export default CardList;
