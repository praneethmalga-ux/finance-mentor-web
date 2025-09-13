import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", spending: 2400, budget: 3000 },
  { month: "Feb", spending: 1398, budget: 3000 },
  { month: "Mar", spending: 9800, budget: 3000 },
  { month: "Apr", spending: 3908, budget: 3000 },
  { month: "May", spending: 4800, budget: 3000 },
  { month: "Jun", spending: 3800, budget: 3000 },
];

export const ExpenseChart = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Spending vs Budget</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis 
                dataKey="month" 
                className="text-muted-foreground text-xs"
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                className="text-muted-foreground text-xs"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value, name) => [`$${value}`, name === 'spending' ? 'Spending' : 'Budget']}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="budget"
                stackId="1"
                stroke="hsl(var(--muted-foreground) / 0.5)"
                fill="hsl(var(--muted) / 0.3)"
              />
              <Area
                type="monotone"
                dataKey="spending"
                stackId="2"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary) / 0.2)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};