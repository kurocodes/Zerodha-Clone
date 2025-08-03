function Hero() {
  return (
    <div style={{ backgroundColor: "#387ed1" }} className="pt-4 text-white single-section">
      <div className="container-fuild container-sm p-5 mt-5">
        <div className="d-flex justify-content-between mb-5">
          <h3 className="fs-4">Support Portal</h3>
          <a className="text-light" href="">
            Track tickets
          </a>
        </div>

        <div className="row">
          <div className="col-12 col-xl-6">
            <h1 className="fs-4 fw-normal">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejcted ..."
              className="w-100 p-3 mt-4"
              style={{
                border: "none",
                borderRadius: "3px",
                fontSize: "1.1rem",
                outline: "none",
              }}
            />
            <div
              className="d-flex flex-wrap gap-2 my-3"
              style={{ fontSize: "1.1rem", lineHeight: "2" }}
            >
              <a
                className="text-light text-decoration-none border-bottom me-3"
                href=""
              >
                Track account opening
              </a>
              <a
                className="text-light text-decoration-none border-bottom me-3"
                href=""
              >
                Track segment activation
              </a>
              <a
                className="text-light text-decoration-none border-bottom me-3"
                href=""
              >
                Intraday margins
              </a>
              <a
                className="text-light text-decoration-none border-bottom me-3"
                href=""
              >
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-1"></div>

          <div className="col-12 col-xl-5 mt-4">
            <h1 className="fs-4 fw-normal">Featured</h1>
            <ol className="mt-3" style={{ fontSize: "1.1rem" }}>
              <li className="mb-4">
                <a className="text-light" href="">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>

              <li>
                <a className="text-light" href="">
                  Offer for sale (OFS) – May 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
