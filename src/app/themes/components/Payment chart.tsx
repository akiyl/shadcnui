// PaymentsPage.tsx
"use client";
// PaymentsPage.tsx

// PaymentsPage.tsx

import React, { useState } from "react";

interface Payment {
  id: number;
  email: string;
  amount: number;
  status: string;
}

const PaymentsPage: React.FC = () => {
  const [selectedColumn, setSelectedColumn] = useState<string>("all");
  const [payments, setPayments] = useState<Payment[]>([
    { id: 1, email: "john.doe@example.com", amount: 100, status: "Pending" },
    {
      id: 2,
      email: "jane.smith@example.com",
      amount: 200,
      status: "Completed",
    },
    // Add more payment data as needed
  ]);

  const handleColumnChange = (column: string) => {
    setSelectedColumn(column);
  };

  const filteredPayments = payments.map((payment) => {
    if (selectedColumn === "all") {
      return {
        id: payment.id,
        value: `${payment.email}, ${payment.amount}, ${payment.status}`,
      };
    } else {
      return { id: payment.id, value: payment[selectedColumn] };
    }
  });

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Payments</h1>
      <p>Manage your payments</p>

      <div className="my-8">
        <nav>
          <label className="mr-4">Show:</label>
          <select
            className="border p-1"
            value={selectedColumn}
            onChange={(e) => handleColumnChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="email">Email</option>
            <option value="amount">Amount</option>
            <option value="status">Status</option>
          </select>
        </nav>
      </div>

      <div className="flex">
        <div className="flex-1">
          <table className="w-full border">
            <thead>
              <tr>
                <th>
                  {selectedColumn === "all"
                    ? "All Columns"
                    : selectedColumn.charAt(0).toUpperCase() +
                      selectedColumn.slice(1)}
                </th>
                <th>Selected</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.value}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
