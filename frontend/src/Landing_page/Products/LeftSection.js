function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container-fluid container-sm p-xl-5 mt-5 products-single-section">
      <div className="row">
        <div className="col-12 col-xl-6 text-center text-xl-start">
          <img src={imageUrl} className="img-fluid"/>
        </div>
        <div className="col-12 col-xl-6 p-xl-5 text-center text-xl-start">
          <h1 style={{ opacity: "0.9" }}>{productName}</h1>
          <p
            className="mt-4 text-muted"
            style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}
          >
            {productDescription}
          </p>
          <div className="d-flex gap-5 mb-4 justify-content-center justify-content-xl-start">
            <a
              style={{ textDecorationLine: "none", fontSize: "1.1rem" }}
              href={tryDemo}
            >
              Try demo &nbsp; <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              style={{ textDecorationLine: "none", fontSize: "1.1rem" }}
              href={learnMore}
            >
              Learn more &nbsp; <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="d-flex gap-4 justify-content-center justify-content-xl-start">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
