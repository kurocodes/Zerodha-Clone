function Hero() {
  return (
    <div className="container-fluid p-5 mt-5 border-bottom products-single-section">
      <div className="row text-center mt-5 mb-3">
        <h1 style={{ opacity: "0.9" }}>Zerodha Products</h1>
        <h3 className="text-muted mt-2 fw-normal" style={{ fontSize: "20px" }}>
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="text-muted mt-2" style={{ fontSize: "16px" }}>
          Check out our{" "}
          <a style={{ textDecorationLine: "none" }} href="">
            investment offerings{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
