import { useSelector } from "react-redux";


const Nav = () => {
    const amount = useSelector(state => state.amount)
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#/">
            Union Bank Of India
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#/">
                Home <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#/">
                About
              </a>
              
            </div>
          </div>
          <button className="btn btn-primary">Your Balance: {amount}</button>
        </nav>
      </>
    );
  };
  
  export default Nav
  