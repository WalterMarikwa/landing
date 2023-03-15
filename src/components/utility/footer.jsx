import React from "react";

export default function Footer() {
    return (
        <div>
            <footer>
                <p>Walter Marikwa</p>
                <p>
                    For more information - Please click on the links below
                    and don't forget to get in touch.
                </p>
                <div className="social">
                    <a href="https://www.facebook.com/walter.ishe/"  target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://twitter.com/3KINGWALTER" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.secure.instagram.com/itsjust_walter/"  target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/walter-m-03b137175/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin" />
                    </a>
                    {/* <a href="#">
                        <i className="fab fa-indeed" />
                    </a> */}
                    <a href="https://github.com/WalterMarikwa" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" />
                    </a>
                </div>
                <p className="end">CopyRight By Walter Marikwa, 2023</p>
            </footer>
        </div>
    );
}
