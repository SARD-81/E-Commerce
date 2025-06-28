import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  type ChartOptions,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Dashboard: React.FC = () => {
  // Sample data for Chart.js
  const data = {
    labels: ['5', '4', '3', '2', '1', '0'],
    datasets: [
      {
        label: 'فروش',
        data: [0, 3, 0, 0, 0, 0],
        backgroundColor: '#E91E63',
        barThickness: 100,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: 'x',
    scales: {
      x: {
        grid: { display: false },
        ticks: { stepSize: 1 },
      },
      y: {
        grid: { color: '#E0E0E0' },
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'نمودار فروش',
        align: 'end',
        padding: { top: 10, bottom: 30 },
        position: 'top',
      },
      tooltip: { enabled: true },
    },
  };

  return (
    <Box sx={{ p: 4, minHeight: '100vh' }}>
      <Grid container spacing={10} mb={8} justifyContent={'center'}>
        {/* Card 1 */}
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 2 , width : "17rem", paddingY:"0.25rem"}}>
            <CardContent>
              <Box sx={{ display: 'flex' , flexDirection : "column"}}>
                <Avatar sx={{ bgcolor: '#E91E63' }}>$</Avatar>
                <Box textAlign="right">
                  <Typography variant="subtitle2" color='#58616C' mt={1.5} fontSize={20}>فروش کل</Typography>
                  <Typography variant="h5">۰ تومان</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 2 , width : "17rem", paddingY:"0.25rem"}}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection : "column"}}>
                <Avatar sx={{ bgcolor: '#E91E63' }}>$</Avatar>
                <Box textAlign="right">
                  <Typography variant="subtitle2" color='#58616C' mt={1.5} fontSize={20}>مشتری ها</Typography>
                  <Typography variant="h5">10</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={4}>
          <Card sx={{ borderRadius: 2 , width : "17rem", paddingY:"0.25rem"}}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection : "column" , justifyContent : "flex-end"}}>
                <Avatar sx={{ bgcolor: '#E91E63' }}>$</Avatar>
                <Box textAlign="right">
                  <Typography variant="subtitle2" color='#58616C' mt={1.5} fontSize={20}>سفارشات</Typography>
                  <Typography variant="h5">100</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Chart Section */}
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Bar data={data} options={options} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;