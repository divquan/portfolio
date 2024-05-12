const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-fit h-fit my-3">
      <button className="  bg-qyellow py-3 px-5 flex gap-2 border-black  border rounded-lg -translate-x-1 -translate-y-2 hover:-translate-x-2 hover:-translate-y-3 transition-transform">
        {children}
      </button>
      <div className="absolute inset-0 bg-black rounded-lg -z-10"></div>
    </div>
  );
};
export default Button;
