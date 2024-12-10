import { useEffect, useState } from "react";
import ShowRiddle from "../ShowRiddle/ShowRiddle";

const Modal = ({ isOpen, onClose, handleCorrectAnswer }) => {
  const [riddle, setRiddle] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetchRiddle();
    }
  }, [isOpen]);

  const fetchRiddle = async () => {
    try {
      const response = await fetch("https://riddles-api.vercel.app/random");
      const data = await response.json();
      console.log("Fetched Riddle:", data); // Debugging the response

      const incorrectAnswers = [
        "Some answer",
        "Another answer",
        "One more answer",
      ]; //answers for debugging
      const allAnswers = shuffleArray([data.answer, ...incorrectAnswers]);

      setRiddle(data); // Set the full API response
      setAnswers(allAnswers); // Set the answers array
    } catch (error) {
      console.error("Failed to fetch riddle:", error);
      setRiddle({
        riddle: "Error fetching riddle. Please try again later.",
        answer: "",
      });
      setAnswers([]);
    }
  };

  const handleAnswerSubmit = (selectedAnswer) => {
    if (
      selectedAnswer.trim().toLowerCase() ===
      riddle?.answer?.trim().toLowerCase()
    ) {
      alert("Correct! You earned a reward.");
      onClose(); // Close the modal
      handleCorrectAnswer(); // Call the correct answer handler
    } else {
      alert("Incorrect answer. Try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-[#0f0831] bg-opacity-50 flex justify-center items-center z-50">
      <div className="modal-content bg-[#fefffa] p-6 rounded-lg relative w-4/5 max-w-xl max-h-[90%] overflow-auto">
        <button className="modal-close w-10 rounded-md absolute top-0 right-6" onClick={onClose}>
          X
        </button>
        <div className="iddle-section mt-12">
          {riddle ? (
            <>
              <ShowRiddle riddle={riddle} />
              <div className="answer-buttons flex flex-col flex-wrap gap-3 mt-4">
                {answers.map((answer, index) => (
                  <button
                    className="answer-button flex-1 w-full min-w-[100px] text-lg my-1 px-4 py-2 bg-gray-200 border border-gray-300 rounded-md cursor-pointer text-center whitespace-normal hover:bg-[#BBBBFF] hover:border-[#8168fe]"
                    key={index}
                    onClick={() => handleAnswerSubmit(answer)}
                  >
                    {" "}
                    {answer}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default Modal;