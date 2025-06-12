import SideMenu from "./components/SideMenu";
// Temporary import used to view MyOrders and DetailsMain:
// import MyOrders from "./pages/User/MyOrders";
// import DetailsMain from "./pages/User/DetailsMain";

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
      {/* return <MyOrders />; */}
      {/* <DetailsMain orderItems={mockOrders} /> */}
    </>
  );
}

export default App;
