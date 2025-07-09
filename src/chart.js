import React from 'react';
import featuredImportancesChart from './src/images/Featured_Importances_Chart.png';

const ChartDisplay = () => {
  return (
    <div>
      <h2>Featured Importances Chart</h2>
      <img src={featuredImportancesChart} alt="Featured Importances Chart" />
    </div>
  );
};

export default ChartDisplay;