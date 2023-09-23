// import React from "react"; In next we do not need to specify this import statement.
import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share Your
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptifier is an open-source tool where one can create and share their
        creative and disctincts prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
