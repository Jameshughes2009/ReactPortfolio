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
        </>
    )
}