import PNFImage from "../../assets/images/404Oops.png";

const NotFound = () => (
  <div className="flex flex-col items-center px-4 md:px-24 py-10 min-h-screen bg-yellow-100 text-red-900">
    <img
      src={PNFImage}
      alt="404 page not found"
      className="w-full md:max-w-lg"
    />
    <h2 className="text-2xl md:text-4xl">
      <strong>404 - Page Not Found!</strong>
    </h2>
    <p className="text-xl md:text-2xl">
      <strong>Sorry! Please go back to the homepage and try again.</strong>
    </p>
  </div>
);

export default NotFound;
