function RightSection({
  imageUrl,
  productName,
  productDescription,
  linkUrl,
  linkTitle,
  imageWidth
}) {
  return (
    <div className="container-fluid container-sm p-xl-5 mt-5 products-single-section">
      <div className="row">
        <div className="col-12 col-xl-6 p-xl-5 mt-5 text-center text-xl-center">
          <h1 style={{ opacity: "0.9" }}>{productName}</h1>
          <p
            className="mt-4 text-muted"
            style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}
          >
            {productDescription}
          </p>
          <a
            style={{ textDecorationLine: "none", fontSize: "1.1rem" }}
            href={linkUrl}
          >
            {linkTitle} &nbsp; <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-12 col-xl-6 text-center text-xl-start">
          <img src={imageUrl} style={{width: imageWidth}} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
