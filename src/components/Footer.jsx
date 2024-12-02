import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
    return (
        <footer>
            <div class="footer-content">
                <h3>AfkSinceBirth</h3>
                <ul class="socials">
                    <li>
                        <a href="#" target="_blank">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i className="fa-brands fa-square-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/om-pandey-992136253/"
                            target="_blank"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/AfkSinceBirth"
                            target="_blank"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul>
                <div class="footer-bottom">
                    <p>© 2024 AfkSinceBirth. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
