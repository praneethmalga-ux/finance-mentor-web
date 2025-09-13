import { DashboardCard } from "@/components/DashboardCard";
import { ExpenseChart } from "@/components/ExpenseChart";
import { GoalTracker } from "@/components/GoalTracker";
import { BudgetAlert } from "@/components/BudgetAlert";
import { ExpenseCategories } from "@/components/ExpenseCategories";
import { DollarSign, TrendingUp, TrendingDown, PiggyBank, Brain, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-gradient-card shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">FinanceAI</h1>
                <p className="text-xs text-muted-foreground">Intelligent Financial Management</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Alerts
              </Button>
              <Button size="sm" className="bg-gradient-primary">
                Connect Bank
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <Card className="bg-gradient-primary text-primary-foreground shadow-elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
                <p className="text-primary-foreground/80">
                  Your AI assistant has analyzed your spending patterns and found $347 in potential savings this month.
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">$2,847</div>
                <div className="text-sm text-primary-foreground/80">Available to spend</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total Balance"
            value="$24,567"
            change="+2.4% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <DashboardCard
            title="Monthly Spending"
            value="$3,247"
            change="+12% from last month"
            changeType="negative"
            icon={TrendingUp}
          />
          <DashboardCard
            title="Savings Rate"
            value="23%"
            change="+5% from last month"
            changeType="positive"
            icon={PiggyBank}
          />
          <DashboardCard
            title="Budget Left"
            value="$753"
            change="18 days remaining"
            changeType="neutral"
            icon={TrendingDown}
          />
        </div>

        {/* Charts and Goals */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ExpenseChart />
          </div>
          <div>
            <GoalTracker />
          </div>
        </div>

        {/* Categories and Alerts */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ExpenseCategories />
          </div>
          <div>
            <BudgetAlert />
          </div>
        </div>

        {/* AI Insights */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                <Brain className="h-4 w-4 text-success-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">AI Insights</h3>
                <p className="text-sm text-muted-foreground">Personalized recommendations based on your spending</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                <h4 className="font-medium text-success mb-2">Optimization Opportunity</h4>
                <p className="text-sm text-muted-foreground">
                  You could save $89/month by switching to a different phone plan based on your usage patterns.
                </p>
              </div>
              <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                <h4 className="font-medium text-warning mb-2">Spending Alert</h4>
                <p className="text-sm text-muted-foreground">
                  Your dining out expenses are 34% higher than similar users. Consider setting a weekly limit.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;