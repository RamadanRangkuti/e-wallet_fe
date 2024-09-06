import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useStoreSelector } from "../redux/hooks";
import { jwtDecode } from "jwt-decode";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BalanceData {
  date: string;
  balance_in: string;
  balance_out: string;
}

interface ApiResponse {
  msg: string;
  data: BalanceData[];
}

export default function FinancialChart() {
  const [balanceData, setBalanceData] = useState<BalanceData[]>([]);
  const { token } = useStoreSelector((state) => state.auth);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ id: string }>(token);
      setId(decodedToken.id);
    }
  }, [token]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/transactions/${id}/balance/chart`;
        const result = await axios.get<ApiResponse>(url,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });;
        setBalanceData(result.data.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    getTransactions();
  }, [id, token]);

  const data = {
    labels: balanceData.map((item) => new Date(item.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })),
    datasets: [
      {
        label: "Pemasukan",
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: balanceData.map((item) => parseFloat(item.balance_in)),
      },
      {
        label: "Pengeluaran",
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: balanceData.map((item) => parseFloat(item.balance_out)),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Pemasukan dan Pengeluaran E-Wallet",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
