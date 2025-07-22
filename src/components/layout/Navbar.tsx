// Navigation bar

const Navbar = () => {
    return(
<nav className="navbar fixed-top navbar-expand-md eos-navbar">
            <a className="navbar-brand" href="#">
                <img src="images/logo.png" className="d-inline-block" alt="EOS CODE LAB"/><span>CODE LAB</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#eos-navbar" aria-controls="eos-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="eos-navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className ="nav-item active">
                        <a className="nav-link" href="#services"><strong>SERVICES</strong></a>
                    </li>
                    <li className ="nav-item">
                        <a className="nav-link" href="#best-of"><strong>OUR STORY</strong></a>
                    </li>
                    <li className ="nav-item">
                    <a className="nav-link" href="#our-partners"><strong>PARTNERS</strong></a>
                    </li>
                    <li className ="nav-item">
                        <a className="nav-link" href="#contact-us"><strong>LET'S TALK</strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="https://www.facebook.com/EOSCodeLab/"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="https://twitter.com/CodeEos/"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="https://www.linkedin.com/company/eos-code-lab/"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>
            </div>
        </nav>)
}

 export default Navbar;