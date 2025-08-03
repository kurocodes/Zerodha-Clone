function Hero() {
  return (
    <div className="container-fluid container-sm p-5 pb-0 mt-5 single-section">
      <div className="row text-center py-5 border-bottom">
        <h1 style={{ opacity: "0.9" }}>Pricing</h1>
        <h3
          className="text-muted mt-2 fw-normal opacity-75 mb-5"
          style={{ fontSize: "20px" }}
        >
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>

      <div className="row text-center mt-5">
        <div className="col-12 col-md-4">
          <img src="media/images/pricingEquity.svg" alt="" style={{width: "70%"}} className="img-fluid"/>
          <h2 style={{opacity: "0.8"}}>Free equity delivery</h2>
          <p className="mt-4 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img src="media/images/intradayTrades.svg" alt="" style={{width: "70%"}} className="img-fluid"/>
          <h2 style={{opacity: "0.8"}}>Intraday and F&O trades</h2>
          <p className="mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img src="media/images/pricingEquity.svg" alt="" style={{width: "70%"}} className="img-fluid"/>
          <h2 style={{opacity: "0.8"}}>Free direct MF</h2>
          <p className="mt-4 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
