// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// 1.1:

const Header = (props) => {
  return ( 
      <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>

  )

}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <>
      <p>
        <Part part={part1} exercises={exercises1}/>
        <Part part={part2} exercises={exercises2}/>
        <Part part={part3} exercises={exercises3}/>
      </p>
    </>
  )

}

const Total = (props) => {
  return (
    <>
      <p>
        {props.total}
      </p>
    </>
  )


}
const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const total = (exercises1+exercises2+exercises3)

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={total}/>
    </div>
  )
}

export default App;
