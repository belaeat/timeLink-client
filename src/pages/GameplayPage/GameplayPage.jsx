import { useState, useEffect } from "react";
import boardImage from '../../assets/gameboard.png';
import userPic from "../../assets/userpic.svg";
import alienImage from "../../assets/alienbob.png";
import lockIcon from "../../assets/icons8-lock-64.png";
import starIcon from "../../assets/icons8-star-96.png";
import placeAlienOnGrid from "../../utilities/placeAlienOnGrid";
import Modal from "../../components/GamePlay/Modal/Modal";
import Button from "../../components/Button/Button";

const gameplayFields = [116, 87, 200, 48, 212, 120, 205, 52, 165, 82, 223, 154]; // Playable fields

function GameplayPage({ onLogOut }) {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [icons, setIcons] = useState(Array(10).fill(lockIcon)); // Initialize with default icons

  const [isModalOpen, setIsModalOpen] = useState(false); //modal is closed by default
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Initialize the avatar at the starting grid
  useEffect(() => {
    const startingFieldId = `${gameplayFields[0]}`; // Get the starting grid ID
    placeAlienOnGrid(startingFieldId, alienImage); // Place the alien on the grid
  }, []);

  const handleMoveNext = () => {
    const nextIndex = (currentFieldIndex + 1) % gameplayFields.length;
    const nextFieldId = `${gameplayFields[nextIndex]}`;
    placeAlienOnGrid(nextFieldId, alienImage); // Move the alien to the next grid
    setCurrentFieldIndex(nextIndex);
  };

  const handleCorrectAnswer = () => {
    setRewards((prevRewards) => [...prevRewards, "Reward"]); // Add a prize to rewards
    setIcons((prevIcons) => {
      const newIcons = [...prevIcons];
      newIcons[rewards.length] = starIcon; // Update the icon for the current reward (to star now). CHANGE IT WHEN WE DEFINE REWARDS FOR EVERY QUESTION
      return newIcons;
    });
    handleMoveNext(); // Automatically move the avatar to the next grid
  };

  return (
    <main>
      <div className="boxForGameplayAndMenu flex flex-row flex-nowrap gap-12 w-full h-[79.8vh]">
        <div className="boxForGameplayAndItems flex flex-col flex-nowrap w-full h-full relative z-20 border-2 border-[#8168fe] rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.22)]">
          <div className="boxForGameplay block h-full w-full">
          <div className="playboard h-80 w-full z-10 absolute opacity-100">
                {<img className="playboard-img" src={boardImage} alt="game playboard" />}
            </div>
            <div className="playboard-grid grid grid-cols-14 gap-0 h-full w-full z-20" id="playboard-grid">
              {[...Array(294)].map((_, index) => (
                <div key={index} id={index + 1} className="relative text-[0.7rem] text-transparent text-center max-w-[75px]"
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
          <div id="itemList" className="itemList flex flex-row flex-nowrap w-full bg-[#d9f9cf] border-t-2 border-[#8168fe] rounded-b-md"
          >
            {icons.map((icon, index) => (
              <div
                key={index}
                className="item flex justify-center items-center bg-[#fefffa] h-[70px] w-[10%] p-2 border-l border-r border-[#8168fe]"
              >
                <img src={icon} className="lockIcon w-[40px] mx-4"  alt="icon" />
              </div>
            ))}
          </div>
        </div>
        <aside className="boxForMenu flex flex-col items-center justify-evenly text-center w-[20%] h-full bg-[#bbbbff] rounded-md border-2 border-[#8168fe] p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.22)]">
          <div id="user" className="user flex flex-col items-center">
            <img src={userPic} className="align-self-end w-[180px] max-h-[80px] pt-2 pr-4 pl-2 bg-[#fefffa] rounded-t-md border-b-[1px] border-l-2 border-r-2 border-t-2 border-[#8168fe]" alt="little Alien" />
            <h3 id="userName" className="text-[18px] bg-[#fefffa] w-[180px] py-0.5 rounded-b-md border-b-2 border-l-2 border-r-2 border-[#8168fe] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">Username</h3>
          </div>
          <div id="gameProgress" className="gameProgress h-36 w-[180px] mt-4 mb-0 p-1 bg-[#fefffa] rounded-md border-2 border-[#8168fe] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <p>Currently in:</p>
            <p>{gameplayFields[currentFieldIndex]}</p>
          </div>
          <div>
            <Button text="Next riddle" onClick={openModal} className="my-0" />
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              handleMoveNext={handleMoveNext}
              setRewards={setRewards}
              handleCorrectAnswer={handleCorrectAnswer}
            />
          </div>
          <div className="musicBox w-[180px] h-32 p-1 bg-[#fefffa] rounded-md border-2 border-[#8168fe] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <p>Box for radio/music</p>
          </div>

         {/* <Button text="Exit" onClick={onLogOut} data-role="primary" className="mt-6"/>
          <div id="settings">
            <a href="#">
              <img
                src={musicIcon}
                className="musicIcon max-w-[60px] mt-4"
                alt="music icon"
              />
            </a>
          </div>*/}
        </aside>
      </div>
    </main>
  );
}

export default GameplayPage;
