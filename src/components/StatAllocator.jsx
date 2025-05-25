const statIcons = {
  str: 'fa-dumbbell',
  dex: 'fa-running',
  int: 'fa-brain',
  cha: 'fa-theater-masks',
};

function StatAllocator({ customStats, setCustomStats, extraPoints, setExtraPoints, getTotalStat }) {
  const handleIncrease = (stat) => {
    if (extraPoints > 0) {
      setCustomStats(prev => ({ ...prev, [stat]: prev[stat] + 1 }));
      setExtraPoints(prev => prev - 1);
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2><i className="fas fa-balance-scale"></i> Allocate Stat Points</h2>
      <p>You have <strong>{extraPoints}</strong> points to assign</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {Object.keys(statIcons).map(stat => (
          <div key={stat} style={{ textAlign: 'center' }}>
            <i className={`fas ${statIcons[stat]}`} style={{ fontSize: '28px', marginBottom: '5px' }}></i><br />
            <strong>{stat.toUpperCase()}</strong><br />
            {getTotalStat(stat)}<br />
            <button disabled={extraPoints === 0} onClick={() => handleIncrease(stat)}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatAllocator;
