import React from "react";
import { Nav ,Footer} from "../components";
import { About_Img } from "../assets";
const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <div className="flex w-screen md:min-h-screen overflow-x-hidden bg-anti-flash_white-900 z-1 flex flex-row justify-center items-center md:overflow-hidden flex-wrap md:flex-nowrap pt-20 gap-10 md:gap-0">

      <div className="text-delft_blue flex justify-center items-center flex-col gap-10 md:w-1/2 md:gap-14">

        <p className="md:text-5xl flex justify-center items-center text-3xl font-bold md:w-11/12 w-full px-7 md:p-0">
          Our Story
        </p>

        <p className="md:text-2xl w-full md:w-11/12 px-5 md:p-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid vel quam nam? Esse nulla fuga non deleniti debitis nisi perferendis error cumque sit qui placeat ex nobis aliquid, quia corporis.
          Voluptate excepturi recusandae, obcaecati placeat id dignissimos iusto magni doloribus sit molestias aperiam. Fugiat quae tempora accusantium dolore velit ratione, aperiam, consequuntur atque eos libero nesciunt fugit similique hic cupiditate?
          Temporibus possimus commodi qui, tenetur laudantium saepe corrupti quod enim accusamus at eaque quia velit ut voluptatum labore error earum iure aliquid reiciendis incidunt doloribus omnis eum voluptatibus! Officiis, ea.
        </p>

     
      </div>

      <img className="w-full md:w-4/12 pb-5 md:pb-0" src={About_Img} alt="hero" />
    </div>

    <Footer/>

    </div>
  );
};

export default About;
