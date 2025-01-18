import React from "react"

type Instructions = string[]

const instructions: Instructions = [
  "Start your adventure",
  "Choose your character",
  "Follow the story",
  "Select the path you want to take but do not forget to buy items in the store.",
  "Click on Fight button to kill your foes",
  "Win the game by killing the Anomaly"
];

const gameMechanics = [
  {
    name: "Fights",
    about: [
      `There are 4 types of outcomes when pressing the fight button, "Normal Damage"(1x your character attack)
      , "Critical Damage"(2x), "Fatal Damage"(3x), "Miss"(0x).
      `,
      "These outcomes are calculated based on rolls (8d10)",
      "Getting 2 or more 8 will be Critical",
      "Getting 4 or more 8 will be Fatal",
      "Getting 4 or more (1 or 2 or 0) -Yes its possible to get zero- will be Miss"
    ]
  },
  {
    name: "Items",
    about: [
      "For now the items store will refresh everytime you kill an enemy.",
      "Items are good, do not forget to buy them"
    ]
  },
  {
    name: "Skills",
    about: [
      "Coming soon!"
    ]
  }
]

type InstructionsComponentProps = {
  setOpenInstructions: React.Dispatch<React.SetStateAction<boolean>>;
}

const InstructionsComponent: React.FC<InstructionsComponentProps> = ({ setOpenInstructions }) => {
  return (
    <div className="toasty-toast">
      <div className="instructions-toast">
      <h3>Instructions</h3>
        <div className="instructions-div">  
          <div>
            <ul>
              {instructions.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <h3>Game Mechanics</h3>
          <div>
            <ul>
              {gameMechanics.map((obj, index) => (
                <li key={index}>
                  {obj.name}
                  <ol>
                    {obj.about.map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
            onClick={() => { setOpenInstructions(false) }}
            className="buttonsNavigate"
          >
            Close
        </button>
      </div>
    </div>
  )
}

export default InstructionsComponent