import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h1>The Zerodha Universe</h1>
          <p className="lead">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-md-4 col-sm-6 p-3 mt-5 d-flex">
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "100%" }}
          >
            <div
              className="d-flex align-items-center justify-content-center w-100"
              style={{ height: 140 }}
            >
              <img
                src="media/images/zerodhaFundhouse.png"
                className="img-fluid"
                style={{ maxHeight: 100, maxWidth: 180 }}
                alt="Zerodha Fund House"
              />
            </div>
            <p
              className="text-small text-muted mt-3 text-center"
              style={{ minHeight: 90 }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 p-3 mt-5 d-flex">
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "100%" }}
          >
            <div
              className="d-flex align-items-center justify-content-center w-100"
              style={{ height: 140 }}
            >
              <img
                src="media/images/sensibullLogo.svg"
                className="img-fluid"
                style={{ maxHeight: 100, maxWidth: 180 }}
                alt="Sensibull"
              />
            </div>
            <p
              className="text-small text-muted mt-3 text-center"
              style={{ minHeight: 90 }}
            >
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 p-3 mt-5 d-flex">
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "100%" }}
          >
            <div
              className="d-flex align-items-center justify-content-center w-100"
              style={{ height: 140 }}
            >
              <img
                src="media/images/tijori.svg"
                className="img-fluid"
                style={{ maxHeight: 100, maxWidth: 180 }}
                alt="Tijori"
              />
            </div>
            <p
              className="text-small text-muted mt-3 text-center"
              style={{ minHeight: 90 }}
            >
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 p-3 mt-5 d-flex">
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "100%" }}
          >
            <div
              className="d-flex align-items-center justify-content-center w-100"
              style={{ height: 140 }}
            >
              <img
                src="media/images/streakLogo.png"
                className="img-fluid"
                style={{ maxHeight: 100, maxWidth: 180 }}
                alt="Streak"
              />
            </div>
            <p
              className="text-small text-muted mt-3 text-center"
              style={{ minHeight: 90 }}
            >
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 p-3 mt-5 d-flex">
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "100%" }}
          >
            <div
              className="d-flex align-items-center justify-content-center w-100"
              style={{ height: 140 }}
            >
              <img
                src="media/images/smallcaseLogo.png"
                className="img-fluid"
                style={{ maxHeight: 100, maxWidth: 180 }}
                alt="Smallcase"
              />
            </div>
            <p
              className="text-small text-muted mt-3 text-center"
              style={{ minHeight: 90 }}
            >
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 p-3 mt-5 d-flex">
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "100%" }}
          >
            <div
              className="d-flex align-items-center justify-content-center w-100"
              style={{ height: 140 }}
            >
              <img
                src="media/images/dittoLogo.png"
                className="img-fluid"
                style={{ maxHeight: 100, maxWidth: 180 }}
                alt="Ditto"
              />
            </div>
            <p
              className="text-small text-muted mt-3 text-center"
              style={{ minHeight: 90 }}
            >
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-center mt-4 mb-5">
          <button className="p-2 btn btn-primary fs-5" style={{ width: 220 }}>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
