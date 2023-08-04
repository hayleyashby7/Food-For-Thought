import PNFImage from "../../assets/images/404Oops.png";

const NotFound = () => (
  <div className="flex flex-col items-center p-24 min-h-screen bg-yellow-100 text-red-900">
    <img src={PNFImage} alt="404 page not found" />
    <h2>
      <strong>404 - Page Not Found!</strong>
    </h2>
    <p>
      <strong>Sorry! Please go back to the homepage and try again.</strong>
    </p>
  </div>
);

export default NotFound;
