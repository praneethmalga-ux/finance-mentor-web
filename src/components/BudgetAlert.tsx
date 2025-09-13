import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, CheckCircle, XCircle } from "lucide-react";

const alerts = [
  {
    id: 1,
    category: "Dining Out",
    budget: 400,
    spent: 380,
    type: "warning" as const,
    message: "95% of dining budget used"
  },
  {
    id: 2,
    category: "Entertainment",
    budget: 200,
    spent: 245,
    type: "danger" as const,
    message: "Budget exceeded by $45"
  },
  {
    id: 3,
    category: "Groceries",
    budget: 600,
    spent: 420,
    type: "success" as const,
    message: "30% under budget"
  },
  {
    id: 4,
    category: "Transportation",
    budget: 300,
    spent: 180,
    type: "info" as const,
    message: "Predicted to be under budget"
  }
];

export const BudgetAlert = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      case "danger":
        return <XCircle className="h-4 w-4" />;
      case "success":
        return <CheckCircle className="h-4 w-4" />;
      case "info":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getVariant = (type: string) => {
    switch (type) {
      case "warning":
        return "default";
      case "danger":
        return "destructive";
      case "success":
        return "default";
      case "info":
        return "default";
      default:
        return "default";
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "warning":
        return "secondary";
      case "danger":
        return "destructive";
      case "success":
        return "default";
      case "info":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Budget Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => {
          const percentage = (alert.spent / alert.budget) * 100;
          
          return (
            <Alert key={alert.id} variant={getVariant(alert.type)} className="border-l-2">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  {getIcon(alert.type)}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{alert.category}</span>
                      <Badge variant={getBadgeVariant(alert.type)} className="text-xs">
                        {percentage > 100 ? "Over Budget" : percentage > 90 ? "Near Limit" : percentage < 70 ? "On Track" : "Watch"}
                      </Badge>
                    </div>
                    <AlertDescription className="text-xs">
                      {alert.message}
                    </AlertDescription>
                    <div className="text-xs text-muted-foreground">
                      ${alert.spent} / ${alert.budget} ({percentage.toFixed(0)}%)
                    </div>
                  </div>
                </div>
              </div>
            </Alert>
          );
        })}
      </CardContent>
    </Card>
  );
};