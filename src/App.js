
import './App.css';
import screenshot from './images/found_04_jabrayilova.jpg';
function App() {
  return (
    <div>
      <h1>Hello, mtc!</h1>
      <p>Welcome to my first React app.</p>
      <img
        src={screenshot}
        alt="fi"
        className="image"
        />
      </div>
  );
}

export default App;
