import { Link } from "react-router-dom";
import HomePage from "./HomePage";
function PageNotFound() {
  return (
    <div>
      <h1>Page not Found</h1>
      <h2>404 error</h2>
      <p>
        Go back to{" "}
        <Link to='/' element={<HomePage />}>
          Home Page
        </Link>
      </p>
    </div>
  );
}
export default PageNotFound;
