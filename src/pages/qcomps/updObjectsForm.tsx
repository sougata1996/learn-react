import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "John Woodrow",
    lastName: "Wilson",
    likescore: 10,
  });

  function handlePlusClick() {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      likescore: prevPlayer.likescore + 1, // Update like score using state setter
    }));
  }

  function handleFirstNameChange(e: { target: { value: string } }) {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      firstName: e.target.value, // Update first name using state setter
    }));
  }

  function handleLastNameChange(e: { target: { value: string } }) {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      lastName: e.target.value, // Update last name using state setter
    }));
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {"  "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
