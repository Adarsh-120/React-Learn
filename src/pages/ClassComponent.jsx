import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Devtown",
      age: "5",
    };
  }
  render() {
    return (
      // <div className="App"> --> In place of div we use <>  </>
      <>
        <p> This is Class Components</p>
      </>
    );
  }
}
export default BaseHoc(ClassComponent);
