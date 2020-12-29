import React, { Component } from "react";
import "./Demo.css";

const Demo = ({ name }) => {
  return (
    <div className="maindiv_style">
      <h1>'Hello {name}'</h1>
    </div>
  );
};
// const Demo = (props) => {
//   return (
//     <div className="maindiv_style">
//       <h1>'Hello {props.name}'</h1>
//     </div>
//   );
// };
// class Demo extends Component {
//   render() {
//     return (
//       <div className="maindiv_style">
//         <h1>'Hello {this.props.name}'</h1>
//       </div>
//     );
//   }
// }
export default Demo;
