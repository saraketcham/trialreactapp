import './App.css'
import myPic from './assets/screenshot.png' 

function App() {

  const yourName = "Sara";

  const currentYear = 1999;

  const favColor = "purple rainbow dazzle delight";


  return (

    <div>
      <img src={myPic} alt="picture" width="100" />

      <h1>Hello, React!</h1>

      <h2>My name is {yourName}</h2>

      <p>I’m learning React in {currentYear}.</p>

      <p>This is my first React component!</p>

      <p>My favorite color is {favColor} </p>


    </div>

  );

}


export default App;