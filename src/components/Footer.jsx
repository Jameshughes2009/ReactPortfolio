import {FaGithub} from "react-icons/fa"
import {CiLinkedin} from "react-icons/ci"

export default function Footer() {
    return (
        <div className="footer-main">
            <div className="footer fixed-bottom p-3">
                <a
                    href="https://github.com/Jameshughes2009"
                    target="_blank"
                    className="mx-3 icons"
                >
                    <FaGithub size={30}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/james-hughes-1b131a158/"
                    target="_blank"
                    className="mx-3 icons"
                >
                    <CiLinkedin size={30} />
                </a>
            </div>
        </div>
    )
}