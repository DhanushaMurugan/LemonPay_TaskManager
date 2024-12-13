import React from "react";
import logoImg from "../image/lemonpay-logo.png";
// import Login from "./Login";
import Signup from "./Signup";
import TaskManager from "./TaskManager";

function HomePage() {
  return (
    <div>
      <div class="h-screen ">
        <div class=" h-screen ">
          <div class="w-full h-fit  bg-custom-gradient bg-blend-lighten flex justify-around mb-8">
            <div>
              <img
                src={logoImg}
                alt="Login"
                className=" h-24 border-0 left-7 top-12 rotate-0 relative"
              />
              <h1 class=" text-white pt-52 pb-20 pl-8 w-2/3 font-nunito text-[40px] font-semibold leading-[57.6px] text-left underline-offset-[from-font] decoration-none ">
                Join 8 Million Businesses{" "}
                <span className="text-yellow-200">Powering Growth with</span>{" "}
                Lemonpay!
              </h1>
            </div>

            <div className=" font-nunito text-white mr-28">
              {/* <Login /> */}
              <Signup />
            </div>
          </div>
        </div>
        <div className="mt-40 ">
          <TaskManager />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
