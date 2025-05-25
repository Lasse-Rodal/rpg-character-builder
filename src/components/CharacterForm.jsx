function CharacterForm({ name, race, charClass, setName, setRace, setCharClass }) {
  return (
    <>
      <div className="form-group">
        <label>Character Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your hero's name"
        />
      </div>

      <div className="form-group">
        <label>Race:</label>
        <select value={race} onChange={(e) => setRace(e.target.value)}>
          <option>Human</option>
          <option>Elf</option>
          <option>Orc</option>
          <option>Undead</option>
        </select>
      </div>

      <div className="form-group">
        <label>Class:</label>
        <select value={charClass} onChange={(e) => setCharClass(e.target.value)}>
          <option>Warrior</option>
          <option>Mage</option>
          <option>Rogue</option>
          <option>Healer</option>
        </select>
      </div>
    </>
  );
}

export default CharacterForm;
