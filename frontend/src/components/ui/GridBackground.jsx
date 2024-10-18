const GridBackground = ({ children }) => {
  return (
    <div className="w-full bg-sky-950 text-white bg-grid-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 bg-sky-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};
export default GridBackground;
