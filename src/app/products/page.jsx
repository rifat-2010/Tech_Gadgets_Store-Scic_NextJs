import Products from "@/components/Products";
import Link from "next/link";
import React from "react";

const page = async () => {
  //next js e fetch korar niyom (ekane akta fake data diye fetch kore dekano hoyese ei page e ) :
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await data.json();
  console.log(users);

  return (
    <div>
      <Products />
    </div>
  );
};

export default page;
