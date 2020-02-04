import React from 'react';


// function App() {

//   const dom = <h1>{greeting}</h1>;
//   return (
//     {dom}
//   );
// }


// class App extends React.Component{
//   render(){   
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() =>  console.log("I am clicked!!")} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>);
};

const Cat = () => {
  return <div>Meow!</div>
};

export default App;
