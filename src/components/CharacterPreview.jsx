function CharacterPreview({ name, race, charClass }) {
  function getImagePath(race, charClass) {
    const key = `${race.toLowerCase()}_${charClass.toLowerCase()}`.replace(/\s+/g, '_');
    return process.env.PUBLIC_URL + `/images/${key}.png`;
  }

  return (
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
          e.target.src = process.env.PUBLIC_URL + '/images/default.png';
        }}
      />
    </div>
  );
}

export default CharacterPreview;
