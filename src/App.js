import React, { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const questions = [
    {
      text: "Which function is used to serialize an object into a JSON string in Javascript?",
      options: [
        { id: 0, text: "Stringify()", isCorrect: true },
        { id: 1, text: "None", isCorrect: false },
        { id: 2, text: "Parse()", isCorrect: false },
        { id: 3, text: "Convert()", isCorrect: false },
      ],
    },
    {
      text: "Which of the following keywords is used to define a variable in Javascript?",
      options: [
        { id: 0, text: "var", isCorrect: false },
        { id: 1, text: "let", isCorrect: false },
        { id: 2, text: "const()", isCorrect: false },
        { id: 3, text: "Var and Let()", isCorrect: true },
      ],
    },
    {
      text: "Which of the following methods can be used to display data in some form using Javascript?",
      options: [
        { id: 0, text: "document.write()", isCorrect: false },
        { id: 1, text: "console.log", isCorrect: false },
        { id: 2, text: "window.alert", isCorrect: false },
        { id: 3, text: "All of the above()", isCorrect: true },
      ],
    },
    {
      text: "Which of the following can be used to call a JavaScript CodeSnippet?",
      options: [
        { id: 0, text: "function/Method", isCorrect: true },
        { id: 1, text: "Preprocessor", isCorrect: false },
        { id: 2, text: "Object", isCorrect: false },
        { id: 3, text: "RMI", isCorrect: false },
      ],
    },
    {
      text: "When the switch statement matches the expression with the given labels, how is the comparison done?  ",
      options: [
        { id: 0, text: "function/Method", isCorrect: true },
        { id: 1, text: "Preprocessor", isCorrect: false },
        { id: 2, text: "Object", isCorrect: false },
        { id: 3, text: "RMI", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setcurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartgame = () => {
    setScore(0);
    setcurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            image: " linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
          },
          particles: {
            number: { value: 10, density: { enable: true, value_area: 600 } },
            color: { value: "#ffffff" },
            shape: {
              type: "square",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.25,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 29,
              random: true,
              anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 300,
              color: "#ffffff",
              opacity: 0,
              width: 0,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "top",
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false, mode: "repulse" },
              onclick: { enable: false, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 800, line_linked: { opacity: 1 } },
              bubble: {
                distance: 790,
                size: 79,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      <h1> JavaScript Quiz</h1>

      <h2> Current Score :{score}</h2>

      {showResults ? (
        <div className="final-result">
          <h1>Final result</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartgame()}>Restart Game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1}Out of{questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
