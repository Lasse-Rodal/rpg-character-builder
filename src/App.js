import React, { useState } from 'react';
import './App.css';

import CharacterForm from './components/CharacterForm';
import CharacterPreview from './components/CharacterPreview';
import StatAllocator from './components/StatAllocator';
import StatList from './components/StatList';

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

  const getTotalStat = (stat) => {
    const base = baseStatsByRace[race][stat];
    const mod = classModifiers[charClass][stat] || 0;
    const custom = customStats[stat] || 0;
    return base + mod + custom;
  };

  return (
    <div className="container">
      <h1><i className="fas fa-hat-wizard"></i> RPG Character Builder</h1>

      <CharacterForm
        name={name}
        setName={setName}
        race={race}
        setRace={setRace}
        charClass={charClass}
        setCharClass={setCharClass}
      />

      <CharacterPreview
        name={name}
        race={race}
        charClass={charClass}
      />

      <StatAllocator
        customStats={customStats}
        setCustomStats={setCustomStats}
        extraPoints={extraPoints}
        setExtraPoints={setExtraPoints}
        getTotalStat={getTotalStat}
      />

      <StatList getTotalStat={getTotalStat} />
    </div>
  );
}

export default App;
