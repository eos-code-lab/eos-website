// Site footer

const Footer = () => {
    const curretYear = new Date().getFullYear();

    return (
        <footer className="footer text-white">
            <div className="container-fluid">
                <div className="d-flex justify-content-start">
                    <p className="p-2">
                        <small><strong>&copy; {curretYear} EOS CODE LAB - All Rights Reserved.</strong></small>
                    </p>
                    <div className="ml-auto p-2">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a target="_blank" href="https://www.facebook.com/EOSCodeLab/"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a target="_blank" href="https://twitter.com/CodeEos/"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a target="_blank" href="https://www.linkedin.com/company/eos-code-lab/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fas fa-arrow-circle-up"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;