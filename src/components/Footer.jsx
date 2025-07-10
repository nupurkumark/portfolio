import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faKaggle } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="pt-5 text-center mt-30 bg-[#38b6ff]">
            <p>
                <a href="mailto:kumarnupurk@gmail.com" target="_blank" rel="noopener noreferrer" className="group inline-flex space-x-2 hover:text-gray-600 transition duration-200">
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "22px" }} />
                    <span className="underline mr-5">kumarnupurk@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/nupurkumar1/" target="_blank" rel="noopener noreferrer" className="group inline-flex space-x-2 hover:text-gray-600 transition duration-200">
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "22px" }} />
                    <span className="underline">/in/nupukumar1</span>
                </a>
            </p>
        </footer>
    );
}