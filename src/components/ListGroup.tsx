import { useState } from "react";

interface ListGroupProps {
  items: String[];
  heading: String;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <li className="list-group-item">No Item found</li>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
