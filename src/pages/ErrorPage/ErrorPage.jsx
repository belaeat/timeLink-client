import { Link, useRouteError } from "react-router-dom";
import ErrorImage from "../../assets/ErrorPage.png";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img className="w-1/3" src={ErrorImage} alt="" />
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8 text-[#5C48BC]">
            {error?.message}
          </p>
          <Link to="/">
            <button className="w-48">Back to homepage</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
