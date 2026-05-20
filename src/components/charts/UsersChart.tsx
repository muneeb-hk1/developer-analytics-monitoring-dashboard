import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { type AnalyticsItem } from "../../hooks/useUsersAnalytics";

type Props = {
  data: AnalyticsItem[];
};

function UsersChart({ data }: Props) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">User Growth Analytics</h2>

        <p className="text-slate-400 mt-2">Monthly active developer growth</p>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default UsersChart;
