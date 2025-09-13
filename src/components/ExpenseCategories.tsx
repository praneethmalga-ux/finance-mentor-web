import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Sparkles, ShoppingCart, Car, Home, Coffee, Gamepad2 } from "lucide-react";

const categoryData = [
  { name: "Housing", value: 1200, color: "hsl(var(--primary))", icon: Home },
  { name: "Transportation", value: 400, color: "hsl(var(--accent))", icon: Car },
  { name: "Food", value: 600, color: "hsl(var(--warning))", icon: Coffee },
  { name: "Shopping", value: 300, color: "hsl(var(--info))", icon: ShoppingCart },
  { name: "Entertainment", value: 200, color: "hsl(var(--success))", icon: Gamepad2 },
];

const recentTransactions = [
  { id: 1, description: "Starbucks Coffee", amount: 4.95, category: "Food", suggested: "Dining Out", confidence: 95 },
  { id: 2, description: "Amazon Purchase", amount: 89.99, category: "Shopping", suggested: "Electronics", confidence: 87 },
  { id: 3, description: "Uber Ride", amount: 12.50, category: "Transportation", suggested: "Rideshare", confidence: 98 },
  { id: 4, description: "Netflix Subscription", amount: 15.99, category: "Entertainment", suggested: "Streaming", confidence: 92 },
];

export const ExpenseCategories = () => {
  const total = categoryData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Spending by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[250px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`$${value}`, 'Amount']}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
            {categoryData.map((category) => {
              const IconComponent = category.icon;
              const percentage = ((category.value / total) * 100).toFixed(1);
              
              return (
                <div key={category.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <IconComponent className="h-4 w-4 text-muted-foreground" />
                    <span>{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">{percentage}%</span>
                    <span className="font-medium">${category.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            AI Categorization
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="space-y-1">
                <div className="font-medium text-sm">{transaction.description}</div>
                <div className="text-xs text-muted-foreground">${transaction.amount}</div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {transaction.suggested}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {transaction.confidence}% confidence
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-xs h-7">
                  Accept
                </Button>
                <Button size="sm" variant="ghost" className="text-xs h-7">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};