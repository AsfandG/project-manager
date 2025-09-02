import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4">
      <Link to="/auth/signin">
        <Button size={"sm"} className="bg-blue-500 text-white">
          Login
        </Button>
      </Link>
      <Link to="/auth/signup">
        <Button
          size={"sm"}
          variant={"outline"}
          className="bg-blue-500 text-white"
        >
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default Home;
