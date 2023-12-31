const RoutesTitel = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center mt-16 mb-6">
      <p className="text-purple-600 text-lg mb-2">--- {subHeading} ---</p>
      <h3 className="text-3xl border-y-4 border-double border-orange-300 p-4 uppercase font-medium">
        {heading}
      </h3>
    </div>
  );
};

export default RoutesTitel;
