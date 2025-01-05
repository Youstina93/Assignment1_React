export default function Footer() {
  return (
    <>
      <div className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4">
              <h3>AROUND THE WEB</h3>
              <div className="icons pt-3">
                <a href="">
                  <i className="fa-brands fa-facebook fs-1 me-3  rounded-circle"></i>
                </a>
                <a href="">
                  {" "}
                  <i className="fa-brands fa-twitter fs-1 me-3"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram fs-1 me-3"></i>
                </a>
                <a href="">
                  <i className="fa-solid fa-globe fs-1 me-3"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>Copyright &copy; Your Website 2025</p>
      </div>
    </>
  );
}
