import PNFImage from "../../assets/images/404Oops.png";

const NotFound = () => (
  <div className="flex flex-col items-center p-24 min-h-screen bg-green-600 text-red-900">
    <img src={PNFImage} alt="404 page not found" />
    <h2>404 - Page Not Found!</h2>
    <p>Sorry! Please go back to the homepage and try again</p>
  </div>
);

export default NotFound;
