export default function About() {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="name"> James Hughes </h1>
                <h5 className="dev-title"> UofT Full Stack WebDev Module 20</h5>
            </div>
            <div className="row">
                <div className="col-md-3 text center">
                    <img
                        src={profilePic}
                        alt="profilePic"
                        className="img-fuid profile-image"
                        style={{ borderRadius: "15px"}}>
                    </img>
                    <h4>Current Skills List</h4>
                    <ul className="list-unstyled mt-3">
                        <li>
                            <strong>Hardworking</strong> 
                        </li>
                        <li>
                            <strong>Qick Learner</strong>
                        </li>
                        <li>
                            <strong>Reliable</strong>
                        </li>
                    </ul>
                </div>
                <div className="col-md-7">
                    <section className="right-container text-left">
                        <p> 
                            Currenlty working full time at Microbix Biosystems Inc and doing this class. It has been a great expreice to be part of this and have the backing of my employeer. The bootcamp I will say needs so work as i belive there is not enough time even with the partime camp to full learn all content!
                        </p>
                        <br/>
                        <p> 
                            I hope you'll get the chance to expore my GitHub account to get some insight in all the work that has been done durring this 6 mounth course. My new skill learned from this full stack bootcamp include, HTML/CSS , Java, JQuery, Postman, Express.js, OOP, ORM, MVC and many other skills thoughout the course. Please find the links to both my github account and linkedin profile in the bottom left of all pages!
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

import profilePic from "../assets/picture2025.png"
// adding info for images later