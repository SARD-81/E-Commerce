import SideMenu from "./components/SideMenu";
// temporary import used to view myOrders and details
// import OrdersPage from "./pages/User/myOrders";
// import OrderDetailsPage from "./pages/User/details";

// const mockOrders = [
//   {
//     image: "https://via.placeholder.com/50",
//     name: "Product A",
//     quantity: 3,
//     price: 25.99,
//   },
//   {
//     image: "https://via.placeholder.com/50",
//     name: "Product B",
//     quantity: 1,
//     price: 15.49,
//   },
// ];

function App() {
  return (
    <>
      <SideMenu></SideMenu>
      {/* return <OrdersPage />; */}
      {/* <OrderDetailsPage orderItems={mockOrders} /> */}
    </>
  );
}

export default App;
