function Hero() {
  return (
    <div className="container-fluid container-sm p-xl-5 mt-5 single-section">
      <div className="row border-bottom mb-5">
        <h1 className="my-5 fs-2 py-5 text-center" style={{ opacity: "0.85" }}>
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-xl-5 text-muted"
        style={{ fontSize: "1.1rem", fontWeight: "400", lineHeight: "1.8" }}
      >
        <div className="col-12 col-xl-6 px-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-xl-6 px-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{textDecorationLine: "none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="" style={{textDecorationLine: "none"}}>blog</a> or see what the media is saying about
            us or learn more about our business and product <a href="" style={{textDecorationLine: "none"}}>philosophies</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
