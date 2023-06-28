import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OverTimeChart = () => {
  const data = [
    {
      name: "Feb",
      Incomplete: 70,
      Complete: 55,
    },
    {
      name: "Mar",
      Incomplete: 70,
      Complete: 55,
    },
    {
      name: "Apr",
      Incomplete: 80,
      Complete: 60,
    },
    {
      name: "May",
      Incomplete: 80,
      Complete: 60,
    },
    {
      name: "Jun",
      Incomplete: 75,
      Complete: 55,
    },
    {
      name: "Jul",
      Incomplete: 75,
      Complete: 55,
    },
    {
      name: "Aug",
      Incomplete: 75,
      Complete: 60,
    },
  ];

 
  return (
    <div className="chart-container" style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={512}
          height={315}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis axisLine={false} dataKey="name" />
          <YAxis
            axisLine={false}
            type="number"
            allowDataOverflow={true}
            domain={[49,84]}
            tickCount={7}
            ticks={[49, 56, 63, 70, 77, 84]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Incomplete"
            stackId="1"
            stroke="#00A2FE"
            strokeWidth="3"
            fill="#d1e0f0"
          />
          <Area
            type="monotone"
            dataKey="Complete"
            stackId="0"
            stroke="#50CD89"
            strokeWidth="3"
            fill="#E8FFF3"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverTimeChart;
