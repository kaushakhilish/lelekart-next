"use client";

import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

type Data = {
    name: string;
    books: number;
    clothes: number;
    electronic: number;
};

type Prop = {
    chartData: Data[];
};
const AreaChartComponent = (prop: Prop) => {
    return (
        <div className="flex flex-col justify-between w-full h-[400px] ">
            <h1 className="text-2xl font-semibold pb-4">Revenue Analytics</h1>
            <div className="w-full h-full">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        data={prop.chartData}
                        margin={{
                            top: 10, 
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="electronic"
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                        <Area
                            type="monotone"
                            dataKey="clothes"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                        <Area
                            type="monotone"
                            dataKey="books"
                            stackId="1"
                            stroke="#ffc658"
                            fill="#ffc658"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AreaChartComponent;