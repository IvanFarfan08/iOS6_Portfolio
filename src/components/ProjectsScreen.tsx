import iBooks from "../assets/screens/iBooks_Clean.webp";
import ProjectLayout from "./ProjectLayout";
import PopUp from "./PopUp";
import { useState } from "react";

export type ProjectName = 'Vertex' | 'DishDetective' | 'Recalled' | 'Vertex Annotator';

interface ProjectData {
    description: string;
    buttons: string[];
    links: string[];
}

function ProjectsScreen() {
    const [activeProject, setActiveProject] = useState<ProjectName | null>(null);
    const projects: Record<ProjectName, ProjectData> = {
        "Vertex": {
            description: "Vertex is a wireframe-to-3D-model pipeline that uses machine learning to convert hand-drawn sketches into editable 3D geometry. Built with React and Python/Flask, it leverages custom-trained computer vision models to interpret wireframe drawings and generate accurate 3D meshes. Winner of the Thomas H. Scholl Award (2024) at Stevens Institute of Technology for technical innovation and commercial viability.",
            buttons: ["View Demo", "View Award Post", "View Website (2025 Update)"],
            links: ["https://drive.google.com/file/d/19hYwXquVe_n4Q013xX1lBPolCl0ofgXK/view?usp=sharing", "https://www.stevens.edu/news/scholl-awards-help-launch-student-innovations", "https://vertex3d.site/"]
        },
        "DishDetective": {
            description: "A Point-of-Sale system that uses Google's Teachable Machine for computer vision-based food recognition. Instead of manually entering menu items, cashiers simply place a dish in front of the camera and the system identifies it instantly, calculates the total, and processes the order. Built to reduce transaction time and human error in fast-paced food service environments.",
            buttons: ["View Repo"],
            links: ["https://github.com/IvanFarfan08/DishDetective"]
        },
        "Recalled": {
            description: "An iOS and visionOS application that scans product barcodes to check against FDA and CPSC recall databases in real time. Users can scan groceries and household items to instantly know if a product has been recalled, view recall details, and find safe alternatives. Built with Swift and Apple's Vision framework during a hackathon focused on consumer safety.",
            buttons: ["View Devpost"],
            links: ["https://devpost.com/software/hackathon-project-3kxw6c"]
        },
        "Vertex Annotator": {
            description: "A web platform for creating labeled wireframe parsing datasets used to train Vertex's machine learning models. Annotators upload wireframe images, draw bounding boxes around geometric primitives, and label each element. The tool exports annotations in ML-ready formats, enabling rapid dataset expansion for improving Vertex's sketch recognition accuracy.",
            buttons: ["View Website"],
            links: ["https://www.vertexannotator.xyz/"]
        }
    }

    const handleProjectClick = (project: ProjectName) => {
        setActiveProject(project);
    };

    return (
        <div className="absolute inset-0 top-[30px] bg-[#f0f0f0] animate-fade-in">
            <h2 className="sr-only">Projects</h2>
            <div className="w-full h-[calc(100vh-30px)] overflow-hidden">
                <img
                    src={iBooks}
                    alt=""
                    className="w-full h-full transition-all duration-500"
                />
            </div>
            <ProjectLayout onProjectClick={handleProjectClick} />
            {activeProject !== null && (
                <div className="absolute inset-0 bg-[#00000080] z-3 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/5 mt-[68px] z-30">
                        <PopUp title={activeProject} description={projects[activeProject].description} buttons={projects[activeProject].buttons} links={projects[activeProject].links} setActiveProject={setActiveProject} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectsScreen;