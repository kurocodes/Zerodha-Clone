function Stats() {
  return (
    <div className="container-fluid container-sm mt-5 single-section">
      <div className="row">
        <div className="col-12 col-xl-6 pt-0 pb-5 p-xl-5 text-center text-xl-start">
          <h1 className="fs-xl-2 mb-4 mb-xl-5">Trust with confidence</h1>

          <div className="my-3">
            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="my-3">
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div className="my-3">
            <h2 className="fs-4">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="my-3">
            <h2 className="fs-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        <div className="col-12 col-xl-6 pt-0 pb-5 p-xl-5 text-center text-xl-start">
          <img
            src="media/images/ecosystem.png"
            alt=""
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a href="" className="" style={{textDecorationLine: "none"}}>Explore our products <i className="fa-solid fa-arrow-right-long"></i></a>
            <a href="" className="mx-4" style={{textDecorationLine: "none"}}>Try Kite demo <i className="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
