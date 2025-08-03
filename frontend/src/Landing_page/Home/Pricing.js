

function Pricing() {
    return ( 
        <div className="container-fluid container-sm p-5 single-section">
            <div className="row">
                <div className="col-xl-4 text-center text-xl-start">
                    <h1 className="fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="" style={{textDecorationLine: "none"}}>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-xl-2"></div>
                <div className="col-xl-6 mt-3 mt-xl-0">
                    <div className="row text-center">
                        <div className="col border py-3 px-5">
                            <h1 className="mb-3">₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col border py-3 px-5">
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;