import React, {useState} from "react";
import { FaGithubSquare } from "react-icons/fa";
import { GrDeploy} from "react-icons/gr"
import { groupPojects } from "../utils/groupProjects";
import { moduleList } from "../utils/moduleList";
import { schoolRepo } from "../utils/schoolRepo";

export default function Projects() {
    const [projects] = useState(groupPojects);
    const [school] = useState(schoolRepo);
    const [module] = useState(moduleList);

    return (
        <>
            <div id = "team-projects-container" className="container">
                <h2 className="project-tittle">All Work Done With Other UofT Students</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{project.projectName}</h5>
                                    <p className="card-text">
                                        Module: {project.projectDescription}
                                    </p>
                                    <a
                                        href={project.projectGithub}
                                        target="_blank"
                                        className="card-text"
                                        id="card-anchor"
                                    >
                                        <FaGithubSquare size={25} className="github-icon"/>
                                    </a>
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        className="card-text"
                                        id="card-anchor"
                                    >
                                        <GrDeploy size={20} className="deplop-icon" />
                                        Deployed
                                    </a>
                                </div>
                    ))}
                </div>
            </div>
        </>
    )
}