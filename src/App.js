import React, { useState } from 'react';
import './App.css';

const baseStatsByRace = {
  Human:  { str: 5, dex: 5, int: 5, cha: 5 },
  Elf:    { str: 3, dex: 7, int: 6, cha: 4 },
  Orc:    { str: 8, dex: 4, int: 2, cha: 3 },
  Undead: { str: 4, dex: 4, int: 6, cha: 2 },
};

const classModifiers = {
  Warrior: { str: 3, dex: 1, int: 0, cha: 0 },
  Mage:    { str: -1, dex: 0, int: 4, cha: 1 },
  Rogue:   { str: 0, dex: 3, int: 1, cha: 1 },
  Healer:  { str: 0, dex: 0, int: 2, cha: 3 },
};

function App() {
  const [name, setName] = useState('');
  const [race, setRace] = useState('Human');
  const [charClass, setCharClass] = useState('Warrior');
  const [extraPoints, setExtraPoints] = useState(5);
  const [customStats, setCustomStats] = useState({ str: 0, dex: 0, int: 0, cha: 0 });

  function getImagePath(race, charClass) {
    const key = `${race.toLowerCase()}_${charClass.toLowerCase()}`.replace(/\s+/g, '_');
    return `/images/${key}.png`;
  }

  function getTotalStat(stat) {
    const base = baseStatsByRace[race][stat];
    const mod = classModifiers[charClass][stat] || 0;
    const custom = customStats[stat] || 0;
    return base + mod + custom;
  }

  return (
    <div className="container">
      <h1><i className="fas fa-hat-wizard"></i> RPG Character Builder</h1>

      {/* Character Name */}
      <div className="form-group">
        <label>Character Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your hero's name"
        />
      </div>

      {/* Race Selection */}
      <div className="form-group">
        <label>Race:</label>
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          <option>Human</option>
          <option>Elf</option>
          <option>Orc</option>
          <option>Undead</option>
        </select>
      </div>

      {/* Class Selection */}
      <div className="form-group">
        <label>Class:</label>
        <select value={charClass} onChange={(e) => setCharClass(e.target.value)}>
          <option>Warrior</option>
          <option>Mage</option>
          <option>Rogue</option>
          <option>Healer</option>
        </select>
      </div>

      {/* Preview */}
      <div className="preview">
        <h2><i className="fas fa-shield-alt"></i> Character Preview</h2>
        <p><strong>Name:</strong> {name || "Unnamed Hero"}</p>
        <p><strong>Race:</strong> {race}</p>
        <p><strong>Class:</strong> {charClass}</p>

        <img
          src={getImagePath(race, charClass)}
          alt="Character"
          className="character-img"
          onError={(e) => {
            e.target.src = '/images/default.png';
          }}
        />

        {/* Allocate Stat Points */}
        <div style={{ marginTop: '30px' }}>
          <h2><i className="fas fa-balance-scale"></i> Allocate Stat Points</h2>
          <p>You have <strong>{extraPoints}</strong> points to assign</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            {["str", "dex", "int", "cha"].map(stat => (
              <div key={stat} style={{ textAlign: 'center' }}>
                <i
                  className={`fas ${{
                    str: 'fa-dumbbell',
                    dex: 'fa-running',
                    int: 'fa-brain',
                    cha: 'fa-theater-masks',
                  }[stat]}`}
                  style={{ fontSize: '28px', marginBottom: '5px' }}
                ></i>
                <br />
                <strong>{stat.toUpperCase()}</strong><br />
                {getTotalStat(stat)}<br />
                <button
                  disabled={extraPoints === 0}
                  onClick={() => {
                    if (extraPoints > 0) {
                      setCustomStats(prev => ({ ...prev, [stat]: prev[stat] + 1 }));
                      setExtraPoints(prev => prev - 1);
                    }
                  }}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Display */}
        <h3>Attributes</h3>
        <ul className="stats">
          <li><i className="fas fa-dumbbell"></i> Strength: {getTotalStat('str')}</li>
          <li><i className="fas fa-running"></i> Dexterity: {getTotalStat('dex')}</li>
          <li><i className="fas fa-brain"></i> Intelligence: {getTotalStat('int')}</li>
          <li><i className="fas fa-theater-masks"></i> Charisma: {getTotalStat('cha')}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
