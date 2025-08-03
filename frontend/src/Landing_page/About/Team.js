function Team() {
  return (
    <div className="container-fluid container-sm px-5 mb-5 mt-5 mt-xl-0 single-section">
      <div className="row">
        <h1 className="fs-2 text-center" style={{ opacity: "0.85" }}>
          People
        </h1>
      </div>

      <div
        className="row p-xl-5 mt-3 mt-xl-0"
        style={{fontWeight: "400", lineHeight: "1.8", fontSize: "1rem", opacity: "0.9" }}
      >
        <div className="col-12 col-xl-6 text-center">
            <img src="media/images/nithinKamath.jpg" alt="" style={{width: "45%", borderRadius: "100%"}} />
            <h4 className="fs-5 mt-3">Nithin Kamath</h4>
            <h5 className="fs-6 fw-normal mt-3">Founder, CEO</h5>
        </div>
        <div className="col-12 col-xl-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
