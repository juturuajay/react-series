import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // Api Calls
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;

// const User = (props) => {
//   return (
//     <div className="user-card">
//       <h2>Name: {props.name} </h2>
//       <h3>Location: HYD</h3>
//       <h3>Contact: @ajay007</h3>
//     </div>
//   );
// };

// export default User;
