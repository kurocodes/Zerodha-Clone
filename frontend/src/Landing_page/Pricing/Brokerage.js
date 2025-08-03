function Brokerage() {
  return (
    <div className="container-fluid container-sm border-top single-section">
      <div className="row p-xl-5 mt-5">
        <div className="col-12 col-xl-8 p-xl-4">
          <a style={{ textDecorationLine: "none" }} href="">
            <h3 className="fs-5 text-center">Brokerage calculator</h3>
          </a>
          <ul style={{ lineHeight: "2.5", fontSize: "13px" }} className="text-muted">
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-12 col-xl-4 p-4 text-center text-xl-start">
          <a style={{ textDecorationLine: "none" }} href="">
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
