import Card from "./Api/Card";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

import Upnext from "./Api/UpNext";
import S from "./Swiper";
// import Upcoming from './Api/Upcoming'
// import Axios from './Api/Axios/Axios'
// import Contoh from './Api/Axios/Contoh'

export default function Main() {
  return (
    <div className="home ">
      <Navbar />
      <div class="flex mt-4 header mx-8">
        <S />
        <Upnext />
        {/* <Upcoming/> */}
      </div>
      {/* <Contoh/> */}
      <Card />

      <Footer />
    </div>
  );
}
