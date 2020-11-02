import './App.css';
// import Answer from "./components/Answer";
import Question from "./components/Questions";
import Score from "./components/Score";


function App() {
  return (
    <div className="App">
      <h1>Trivia Game</h1>
      <Question />
      {/* <Answer/> */}
    </div>
  );
}

export default App;
