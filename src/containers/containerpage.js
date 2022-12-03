import React, { useEffect, useState } from "react";
import { CharactersComponent } from "../components/characters";
import { SingleCharacter } from "../components/singlecharacter";
export const ContainerPage = ({}) => {
  const [CharacterID, setCharacterID] = useState(null);
  const [singleCharacterPage, setSingleCharacterPage] = useState(false);

  const onCardClick = () => {
    setSingleCharacterPage(true);
  };

  const onBckclick = () => {
    setSingleCharacterPage(false);
  };
  return !singleCharacterPage ? (
    <CharactersComponent
      setCharacterID={setCharacterID}
      onCardClick={onCardClick}
    ></CharactersComponent>
  ) : (
    <SingleCharacter
      charID={CharacterID}
      onBckclick={onBckclick}
    ></SingleCharacter>
  );
};
