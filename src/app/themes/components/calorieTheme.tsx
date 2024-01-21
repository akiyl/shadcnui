"use client";
import React, { useState } from "react";
interface MyComponentProps {
  themeColor: string;
}
const CaloriesTheme: React.FC<MyComponentProps> = ({ themeColor }) => {
  const [caloriesGoal, setCaloriesGoal] = useState<number>(350);

  const handleIncrement = () => {
    if (caloriesGoal < 400) {
      setCaloriesGoal(caloriesGoal + 20);
    }
  };

  const handleDecrement = () => {
    if (caloriesGoal > 200) {
      setCaloriesGoal(caloriesGoal - 20);
    }
  };

  const handleSetGoal = () => {
    // Add logic for handling the set goal action
    console.log(themeColor);
  };

  // Placeholder for the chart (Replace with your charting library/component)
  const renderChart = () => {
    return (
      <div className="chart-placeholder">
        {/* Replace this with your chart component */}
        Chart Component
      </div>
    );
  };

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex flex-col space-y-1.5 p-6 pb-4">
        <h3 className="font-semibold leading-none tracking-tight">Move Goal</h3>
        <p className="text-sm text-muted-foreground">
          Set your daily activity goal.
        </p>
      </div>
      <div className="p-6 pt-0 pb-2">
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={handleDecrement}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 shrink-0 rounded-full"
          >
            -
          </button>
          <div className="flex-1 text-center">
            <div className="text-5xl font-bold tracking-tighter">
              {caloriesGoal}
            </div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">
              Calories/day
            </div>
          </div>
          <button
            onClick={handleIncrement}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 shrink-0 rounded-full"
          >
            +
          </button>
        </div>
        <div className="my-3 h-[60px]">{renderChart()}</div>
      </div>
      <div className="flex items-center p-6 pt-0">
        <button
          onClick={handleSetGoal}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full  bg-[${themeColor}]`}
        >
          Set Goal
        </button>
      </div>
    </div>
  );
};

export default CaloriesTheme;
