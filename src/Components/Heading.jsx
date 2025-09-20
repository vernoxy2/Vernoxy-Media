const Heading = ({ boldText, normalText, className }) => {
  return (
    <h1 className={`text-4xl md:text-5xl font-bold ${className}`}>
      <span className="block">{boldText}</span>
      <span className="block font-normal">{normalText}</span>
    </h1>
  );
};

export default Heading;