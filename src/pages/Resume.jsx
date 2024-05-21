import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiSequelize } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

export default function Resume() {
    const fileUrl = 
        "https://github.com/Jameshughes2009/ReactPortfolio/blob/main/src/assets/files/jamesResume.docx"
    
    return (
        <div id="skills-container" className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Frontend Tech Used</h5>
                            <p className="card-text">
                                <ul>
                                    <li>
                                        <FaHtml5 size={30} />
                                        HTML
                                    </li>
                                    <li>
                                        <FaCss3Alt size={30} />
                                        Css
                                    </li>
                                    <li>
                                        <FaBootstrap size={30} />
                                        Bootstrap
                                    </li>
                                    <li>
                                        <DiJqueryLogo size={30}/>
                                        JQuery
                                    </li>
                                    
                                    <li>
                                        <FaReact size={27} />
                                        React
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"> Backend Tech Used</h5>
                            <p className="card-text">
                                <ul>
                                    <li>
                                        <GrMysql size={30} /> MySQL
                                    </li>
                                    <li>
                                        <SiSequelize size={30} /> Sequelize
                                    </li>
                                    <li>
                                        <FaNodeJs size={30} />
                                        NodeJs
                                    </li>
                                    <li>
                                        <SiExpress size={30} />
                                        Express.js
                                    </li>
                                    <li>
                                        <SiMongodb size={30} />
                                        Mongodb
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <p>Download Resume</p>
                <a
                    href={fileUrl}
                    download=""
                    className="btn btn-primary"
                    id="download-btn"
                >
                    Click to Download
                </a>
            </div>
        </div>
    );
}