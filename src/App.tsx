import SideMenu from "./components/SideMenu";
import Badge from "./components/SlideMenuReuseables/badge";
import Heading from "./components/SlideMenuReuseables/heading";
import TextField from "./components/SlideMenuReuseables/textField";

function App() {
  return (
    <>
      <SideMenu>
        <Badge>فروشگاه</Badge>
        <Badge>مشاهده بیشتر ←</Badge>
        <Heading>فیلتر دسته‌بندی</Heading>
      </SideMenu>
      <TextField label="نام" placeholder="آیفون ۱۴" />
      <TextField label="قیمت" placeholder="۱۰,۰۰۰" />

    </>
  );
}

export default App;
