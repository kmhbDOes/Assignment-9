import React from "react";

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div>
          <p>
            One Step <br /> Closer To Your <br /> Dream Job
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
            laudantium!
          </p>
          <button className="btn-primary"></button>
        </div>
        <div>
          <img src="../../public/header-banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
