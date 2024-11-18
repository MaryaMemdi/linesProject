
import Textbox1component from "./../../components/Textbox1/Textbox1component"
import BlogCartComponent from "../../components/BlogCartComponent";
import Welcome from "../../components/welcome";
import PopularStories from "../../components/explore/popularStories";
import ExploreLanding from "../../components/exploreLanding";
import Unlock from "../../components/unlock";

function MainPage() {
  return (
    <div className="flex flex-col gap-[95px] justify-center items-center mx-auto w-full ">
      
      <Welcome />
      <Textbox1component />
      <PopularStories />
      <ExploreLanding />
      <Unlock />
      <BlogCartComponent />
    </div>
  );

}


export default MainPage


