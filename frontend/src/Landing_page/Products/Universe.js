import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container-fluid container-sm mt-5 p-xl-5 products-single-section">
      <div className="row text-center">
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p className="mt-3 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col p-3">
          <img
            src="media/zerodhafundhouse.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="mt-3 text-muted text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col p-3">
          <img src="media/sensibull-logo.svg" alt="" style={{ width: "60%" }} />
          <p className="mt-4 text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col p-3">
          <img src="media/tijori.svg" alt="" style={{ width: "40%" }} />
          <p className="mt-3 text-muted text-small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col p-3">
          <img src="media/streak-logo.png" alt="" style={{ width: "50%" }} />
          <p className="mt-3 text-muted text-small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col p-3">
          <img src="media/smallcase-logo.png" alt="" style={{ width: "60%" }} />
          <p className="mt-4 text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col p-3">
          <img src="media/ditto-logo.png" alt="" style={{ width: "40%" }} />
          <p className="mt-3 text-muted text-small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>

      <Link className="d-block text-center mt-4" to="/signup">
        <button
          className="p-2 btn btn-primary fs-5 mb-5 w-50 w-md-25"
          style={{ margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </Link>
    </div>
  );
}

export default Universe;
