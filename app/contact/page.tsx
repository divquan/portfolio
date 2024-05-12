import Button from "@/components/Button";
import Contact from "@/components/Contact";
import { space_grotestk } from "@/components/fonts";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen px-4 md:px-6 py-2 md:py-3 flex flex-col gap-7 md:gap-14 my-8 items-center justify-center">
      <h2
        className={`text-3xl md:text-5xl font-bold ${space_grotestk.className}`}
      >
        Contact
      </h2>
      <form className="max-w-sm flex flex-col  w-full gap-8 items-center">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col">
            <label className="text-xl">Name</label>
            <input className="shadow-custom border border-black px-4 py-2" />
          </div>
          <div className="flex flex-col">
            <label className="text-xl">Email</label>
            <input
              className="shadow-custom border border-black px-4 py-2"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl">Note</label>
            <textarea className="shadow-custom border border-black px-4 py-2" />
          </div>
        </div>
        <div>
          <Button>Send Me a message</Button>
        </div>
      </form>
    </div>
  );
};

export default page;
