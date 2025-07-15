import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../../state-management/stores/useAuthStore";
import Grid from "@mui/material/Grid";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Skeleton,
  Alert,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { useDashboardStats, useSalesData } from "../../hooks/useDashboard";
import Preloader from "../../components/Preloader";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const isAdmin = useAuthStore();
  const loading = useAuthStore();
  const {
    data: stats,
    isLoading: statsLoading,
    isError: statsError,
  } = useDashboardStats();

  const {
    data: salesData,
    isLoading: salesLoading,
    isError: salesError,
  } = useSalesData(6);

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/", { replace: true });
    }
  }, [isAdmin, loading, navigate]);

  // Format currency for display
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fa-IR", {
      style: "currency",
      currency: "IRR",
    }).format(amount);
  };

  // Prepare chart data
  const chartData = {
    labels: salesData?.map((item) => item.date) || [],
    datasets: [
      {
        label: "فروش",
        data: salesData?.map((item) => item.amount) || [],
        backgroundColor: "#E91E63",
        barThickness: 100,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "x",
    scales: {
      x: {
        grid: { display: false },
        ticks: { stepSize: 1 },
      },
      y: {
        grid: { color: "#E0E0E0" },
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "نمودار فروش",
        align: "end",
        padding: { top: 10, bottom: 30 },
        position: "top",
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => formatCurrency(context.raw as number),
        },
      },
    },
  };

  // Loading skeleton
  if (statsLoading || salesLoading) {
    return <Preloader />;
  }

  // Error handling
  if (statsError || salesError) {
    return (
      <Box sx={{ p: 4, minHeight: "100vh" }}>
        <Alert severity="error" sx={{ mb: 3 }}>
          خطا در دریافت اطلاعات داشبورد. لطفا دوباره تلاش کنید.
        </Alert>
        <Skeleton variant="rectangular" height={400} />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, minHeight: "100vh" }}>
      <Grid container spacing={10} mb={8} justifyContent="center">
        {/* Total Sales Card */}
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 2, width: "17rem", paddingY: "0.25rem" }}>
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Avatar sx={{ bgcolor: "#E91E63" }}>$</Avatar>
                <Box textAlign="right">
                  <Typography
                    variant="subtitle2"
                    color="#58616C"
                    mt={1.5}
                    fontSize={20}
                  >
                    فروش کل
                  </Typography>
                  <Typography variant="h5">
                    {formatCurrency(stats?.totalSales || 0)}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Customers Card */}
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 2, width: "17rem", paddingY: "0.25rem" }}>
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Avatar sx={{ bgcolor: "#E91E63" }}>$</Avatar>
                <Box textAlign="right">
                  <Typography
                    variant="subtitle2"
                    color="#58616C"
                    mt={1.5}
                    fontSize={20}
                  >
                    مشتری ها
                  </Typography>
                  <Typography variant="h5">
                    {stats?.customerCount || 0}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Orders Card */}
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 2, width: "17rem", paddingY: "0.25rem" }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Avatar sx={{ bgcolor: "#E91E63" }}>$</Avatar>
                <Box textAlign="right">
                  <Typography
                    variant="subtitle2"
                    color="#58616C"
                    mt={1.5}
                    fontSize={20}
                  >
                    سفارشات
                  </Typography>
                  <Typography variant="h5">{stats?.orderCount || 0}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Chart Section */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          {salesData && salesData.length > 0 ? (
            <Bar data={chartData} options={options} />
          ) : (
            <Box
              sx={{
                height: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">
                داده‌ای برای نمایش وجود ندارد
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
