import { Link } from "react-router-dom";

import Button from "../../components/UI/Button";
import Container from "../../components/UI/Container";

const NotFound = () => {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-7xl font-extrabold text-blue-600">404</p>

      <h1 className="mt-4 text-4xl font-bold text-gray-900">Page Not Found</h1>

      <p className="mt-4 max-w-md text-gray-600">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <Link to="/" className="mt-8">
        <Button>Back to Home</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
