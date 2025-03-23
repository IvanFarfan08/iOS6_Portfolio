import iBooks from "../assets/screens/iBooks_Clean.png";
import ProjectLayout from "./ProjectLayout";
import PopUp from "./PopUp";
import { useState } from "react";

export type ProjectName = 'Vertex' | 'DishDetective' | 'Recalled'; // | 'Fourier Stocks';

interface ProjectData {
    description: string;
    buttons: string[];
    links: string[];
}

function ProjectsScreen() {
    const [activeProject, setActiveProject] = useState<ProjectName | null>(null);
    const projects: Record<ProjectName, ProjectData> = {
        "Vertex": {
            description: "AI-based 2D Image to 3D Mesh converter. Thomas H. Scholl Award Winner (2024)",
            buttons: ["View Demo", "View Award Post", "View Website"],
            links: ["https://drive.google.com/file/d/19hYwXquVe_n4Q013xX1lBPolCl0ofgXK/view?usp=sharing", "https://www.stevens.edu/news/scholl-awards-help-launch-student-innovations", "https://vertex3d.ai/"]
        },
        "DishDetective": {
            description: "Point-of-Sale (POS) system powered by Teachable Machine (Google's Computer Vision Model)",
            buttons: ["View Repo"],
            links: ["https://github.com/IvanFarfan08/DishDetective"]
        },
        "Recalled": {
            description: "iOS and visionOS App for product recall scanning. Identifying recalled products and alerting users, ensuring food safety.",
            buttons: ["View Devpost"],
            links: ["https://devpost.com/software/hackathon-project-3kxw6c"]
        },
        // "Fourier Stocks": {
        //     description: "Stock price predictor using Digital Signal Processing (Fast Fourier Transform)",
        //     buttons: ["View Website", "View Repo"],
        //     links: ["ivanfarfan0", "https://github.com/ivanfarfan08/FourierStocks"]
        // }
    }

    const handleProjectClick = (project: ProjectName) => {
        setActiveProject(project);
    };

    return (
        <div className="absolute inset-0 top-[30px] bg-[#f0f0f0] animate-fade-in">
            <div className="w-full h-[calc(100vh-30px)] overflow-hidden">
                <img 
                    src={iBooks} 
                    alt="iBooks" 
                    className="w-full h-full transition-all duration-500" 
                />
            </div>
            <ProjectLayout onProjectClick={handleProjectClick}/>
            {activeProject !== null && (
                <div className="absolute inset-0 bg-[#00000080] z-3 w-full h-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/5 mt-[68px] z-30">
                        <PopUp title={activeProject} description={projects[activeProject].description} buttons={projects[activeProject].buttons} links={projects[activeProject].links} setActiveProject={setActiveProject}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectsScreen;