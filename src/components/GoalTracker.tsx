import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Target, Calendar, DollarSign } from "lucide-react";

const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    target: 10000,
    current: 7500,
    deadline: "Dec 2024",
    category: "Savings",
    color: "bg-gradient-success"
  },
  {
    id: 2,
    name: "Vacation Fund",
    target: 5000,
    current: 2800,
    deadline: "Jun 2024",
    category: "Travel",
    color: "bg-gradient-primary"
  },
  {
    id: 3,
    name: "Car Down Payment",
    target: 15000,
    current: 4200,
    deadline: "Sep 2024",
    category: "Purchase",
    color: "bg-gradient-primary"
  }
];

export const GoalTracker = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Financial Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          
          return (
            <div key={goal.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{goal.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {goal.deadline}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {goal.category}
                </Badge>
              </div>
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{progress.toFixed(1)}% complete</span>
                  <span>${remaining.toLocaleString()} remaining</span>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};