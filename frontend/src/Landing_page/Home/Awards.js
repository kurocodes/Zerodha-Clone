function Awards() {
  return (
    <div className="container-fluid container-sm mt-5 single-section">
      <div className="row">
        <div className="col-12 col-xl-6 pt-0 pb-5 p-xl-5 text-center">
          <img src="media/images/largestBroker.svg" alt="Home Awards Img" className="img-fluid" />
        </div>
        <div className="col-12 col-xl-6 pt-0 pb-5 p-xl-5 mt-xl-4">
          <h1 className="text-center text-xl-start">Largest stock broker in India</h1>
          <p className="mb-5 text-center text-xl-start">
            2+ million Zirodha clients contribute to over 15% of retail order in
            India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 flex-center-div">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 flex-center-div">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li><p>Bond and Govt. Securities</p></li>
              </ul>
            </div>
          </div>

          <img src="/media/images/pressLogos.png" alt="Press Logos Image" style={{width: "90%"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
