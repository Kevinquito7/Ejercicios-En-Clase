 /*import React from 'react';
  import { Card } from 'antd';
  import './App.css';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    style={{ width: 500}}
    cover={<img alt="example" src="https://www.eluniverso.com/resizer/syJ9gYfi-kkDcXSdrWRYpJeUqHg=/826x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/HVHNTSBLSNH6PCQ2EVFYDPX2PU.jpg" />}
  >
    <Meta style={{fontFamily:"monospace"}} title="Los Transformers son una franquicia de medios." />
  </Card>
);


export default function Gallery (){
  return(
    <section>
     <h2 style={{fontFamily:"cursive"}}>Transformers</h2>
              <App/>
      </section>
  )
}*/

/*import React, { useState } from 'react';

export default function EmojiCounter() {
  const [emoji, setEmoji] = useState("😎");

  const addSmiles = () => {
    setEmoji (emoji + "😎");
    setEmoji (emoji + "😎😎");
    setEmoji(emoji + "😎😎😎");
  };

  return (
    <>
      <h1>{emoji}</h1>
      <button onClick={addSmiles}>
        Add 3 Smiles
      </button>
    </>
  );
}*/


/*export default function EmojiIncrementor() {
  const [emojiString, setEmojiString] = useState("🐕");

  function añadeDogs() {
    setEmojiString(function (prevEmoji) {
      return prevEmoji + "🐕";
    });
    setEmojiString(function (prevEmoji) {
      return prevEmoji + "🐕🐕";
    });
    setEmojiString(function (prevEmoji) {
      return prevEmoji + "🐕🐕🐕";
    });
  }

  return (
    <>
      <h1>{emojiString}</h1>
      <button onClick={añadeDogs}>Add 3 Dogs</button>
    </>
  );
}
*/



/*export default function MadLibs (){
  const [word, setWord] = useState ("chicken");
  return (
    <>
    <h1> { `Once upon a time there was a giant ${word}.`}</h1>
    <button onClick={()=>{
      setWord(W=> w === "chicken" ? "octopus")
    }}></button>
    </>
  )
}*/

/*import React, { useState } from 'react';

function componente() {
  
  const [estado, Estado] = useState('Inicial');

  
  const Estado1 = () => {
    Estado('Estado 1');
  };

  const Estado2 = () => {
    Estado('Estado 2');
  };

  const Estado3 = () => {
    Estado('Estado 3');
  };

  return (
    <div>
      <p>Estado actual: {estado}</p>
      <button onClick={Estado1}>Cambiar a Estado 1</button>
      <button onClick={Estado2}>Cambiar a Estado 2</button>
      <button onClick={Estado3}>Cambiar a Estado 3</button>
    </div>
  );
}

export default componente;*/


/*import {useState} from 'react';

export default function CharacterStats () {
  const [character, setCharacter] = useState({
    name:'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma:16,
  });

  function handleChange(e) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.Value
    });
  }
  return (
  <label>
    Strength:
    <input 
    name="strength"
    value={character.strength}
    onChange={handleChange}
    />
  </label>
  );

}*/

import React, { useState } from 'react';
import './CharacterStats.css'; // Importa el archivo CSS

export default function CharacterStats() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCharacter(prevCharacter => ({
      ...prevCharacter,
      [name]: value
    }));
  }

  return (
    <div className="character-form">
      <label>
        Name:
        <input
          className="input-field"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Strength:
        <input
          className="input-field"
          name="strength"
          value={character.strength}
          onChange={handleChange}
        />
      </label>
      <label>
        Intelligence:
        <input
          className="input-field"
          name="intelligence"
          value={character.intelligence}
          onChange={handleChange}
        />
      </label>
      <label>
        Charisma:
        <input
          className="input-field"
          name="charisma"
          value={character.charisma}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
