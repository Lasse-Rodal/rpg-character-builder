import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [race, setRace] = useState("Human");
  const [charClass, setCharClass] = useState("Warrior");

  function getImagePath(race, charClass) {
    const key = `${race.toLowerCase()}_${charClass.toLowerCase()}`.replace(/\s+/g, '_');
    return `/images/${key}.png`;
  }

  return (
    <div className="container" style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>🏹 RPG Character Builder</h1>

      {/* Character Name */}
      <div style={{ marginBottom: '15px' }}>
        <label><strong>Character Name:</strong></label><br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your hero's name"
          style={{ padding: '8px', marginTop: '5px', width: '200px' }}
        />
      </div>

      {/* Race Selection */}
      <div style={{ marginBottom: '15px' }}>
        <label><strong>Race:</strong></label><br />
        <select
          value={race}
          onChange={(e) => setRace(e.target.value)}
          style={{ padding: '8px', marginTop: '5px', width: '200px' }}
        >
          <option>Human</option>
          <option>Elf</option>
          <option>Orc</option>
          <option>Undead</option>
        </select>
      </div>

      {/* Class Selection */}
      <div style={{ marginBottom: '20px' }}>
        <label><strong>Class:</strong></label><br />
        <select
          value={charClass}
          onChange={(e) => setCharClass(e.target.value)}
          style={{ padding: '8px', marginTop: '5px', width: '200px' }}
        >
          <option>Warrior</option>
          <option>Mage</option>
          <option>Rogue</option>
          <option>Healer</option>
        </select>
      </div>

      {/* Preview */}
      <div style={{ marginTop: '30px' }}>
        <h2>🛡️ Character Preview</h2>
        <p><strong>Name:</strong> {name || "Unnamed Hero"}</p>
        <p><strong>Race:</strong> {race}</p>
        <p><strong>Class:</strong> {charClass}</p>

        {/* Character Image */}
        <div style={{ marginTop: '20px' }}>
          <img
            src={getImagePath(race, charClass)}
            alt="Character"
            style={{ width: '200px', height: 'auto', borderRadius: '10px', border: '2px solid #ccc' }}
            onError={(e) => {
              e.target.src = '/images/default.png';
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
