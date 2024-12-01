import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';



const MyPieChart = () => {
    return (
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Social' },
            { id: 1, value: 15, label: 'Direct' },
            { id: 2, value: 20, label: 'Referral' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    );
};

export default MyPieChart;
