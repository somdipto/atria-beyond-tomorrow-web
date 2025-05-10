
import { Link } from "react-router-dom";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-ted-red text-9xl font-bold mb-8">404</h1>
        <div className="mb-8">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-lg">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <Link to="/">
          <Button size="lg">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
