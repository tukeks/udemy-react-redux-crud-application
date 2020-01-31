import React from 'react';


// function App() {

//   const dom = <h1>{greeting}</h1>;
//   return (
//     {dom}
//   );
// }


class App extends React.Component{
  render(){   
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() =>  console.log("I am clicked!!")} />
      </React.Fragment>
    )
  }
}
export default App;
