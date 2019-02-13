import React, { useState } from "react";

// class Home extends Component {
//   state = {
//     result: 0
//   };

//   handleAdd = e => {
//     e.preventDefault();
//     console.log("CLICK", e);
//     this.setState({ result: this.state.result + 1 });
//   };

//   handleSub = e => {
//     e.preventDefault();
//     console.log("CLICK", e);
//     this.setState({ result: this.state.result - 1 });
//   };

//   render() {
//     const { result } = this.state;
//     return (
//       <>
//         <button onClick={this.handleAdd}>Add</button>
//         <button onClick={this.handleSub}>Sub</button>
//         <p>Result: {result}</p>
//       </>
//     );
//   }
// }

// export default Home;

function Home() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: ""
  });
  // const handleAdd = () => {
  //  setCount(+count + +incr); };

  //  const handleSub = () => {
  //  setCount(+count - +incr);
  // };

  //  const setIncrement = e => {
  //  setIncr(e.target.value);
  //};

  const setNames = event => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(inputs, null, 2));
  };

  return (
    <>
      <label>
        Ime: <input type="text" name="firstName" onChange={setNames} />
      </label>
      <br />
      <br />
      <label>
        Prezime: <input type="text" name="lastName" onChange={setNames} />
      </label>
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Home;
