import { Link } from "react-router-dom";

function Hero () {
    return ( 
        <div className="container-fluid p-5 my-5 single-section">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <img
                        src="media/images/homeHero.png"
                        alt="Hero"
                        className="img-fluid mb-4"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <h1 className="mt-4">Invest in everything</h1>
                    <p className="lead">
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <Link to="/signup">
                        <button className="btn btn-primary fs-5 px-4 py-2 mt-3">
                            Sign up for free
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
