import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
    { x: 1, y: 2 },
    { x: 2, y: 5.5 },
    { x: 3, y: 2 },
    { x: 5, y: 8.5 },
    { x: 8, y: 1.5 },
    { x: 10, y: 5 },
];

const MyLineChartAdmin = () => {
    return (
        <div>
            <LineChart width={950} height={330} data={data}>
                <XAxis dataKey="x" />
                <YAxis />
                <Line type="monotone" dataKey="y" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default MyLineChartAdmin;