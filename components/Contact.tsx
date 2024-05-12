import React from "react";
import Button from "./Button";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div className="w-full flex items-center gap-10 justify-center flex-col bg-[#48A36A] px-4 md:px-6 py-4 md:py-6">
      {/* <Heading>Contact</Heading> */}
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

export default Contact;
