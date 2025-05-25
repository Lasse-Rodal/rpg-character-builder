function StatList({ getTotalStat }) {
  return (
    <>
      <h3>Attributes</h3>
      <ul className="stats">
        <li><i className="fas fa-dumbbell"></i> Strength: {getTotalStat('str')}</li>
        <li><i className="fas fa-running"></i> Dexterity: {getTotalStat('dex')}</li>
        <li><i className="fas fa-brain"></i> Intelligence: {getTotalStat('int')}</li>
        <li><i className="fas fa-theater-masks"></i> Charisma: {getTotalStat('cha')}</li>
      </ul>
    </>
  );
}

export default StatList;
