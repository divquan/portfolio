import { space_grotestk } from "./fonts";

const Heading = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className={`flex items-center gap-2 text-qred ${space_grotestk.className} font-semibold text-xl w-fit`}
    >
      <div className="h-[2px] w-20 rounded-md flex-1 bg-qred"></div>
      {children}
      <div className="h-[2px] w-20 rounded-md flex-1 bg-qred"></div>
    </div>
  );
};

export default Heading;
