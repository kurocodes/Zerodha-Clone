import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container-fluid p-xl-5 my-5 single-section">
      <div className="row justify-content-center text-center">
        <h1 className="mt-4">Open a Zerodha account</h1>
        <p className="lead">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to={"/signup"}>
          <button
            className="btn btn-primary fs-5 px-4 py-2 mt-3"
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
