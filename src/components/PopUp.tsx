import React from 'react';
import gloss from "../assets/Gloss.webp";
import { ProjectName } from './ProjectsScreen';

interface PopUpProps {
    title: ProjectName;
    description: string;
    buttons: string[];
    links: string[];
    setActiveProject: React.Dispatch<React.SetStateAction<ProjectName | null>>;
}

function PopUp({title, description, buttons, links, setActiveProject}: PopUpProps) {
    return (
        <div className="flex flex-col items-center justify-center w-[276px] gap-[18px] pt-3.5 pb-[9px] px-2 relative rounded-[10px] overflow-hidden border-2 border-solid border-[#ffffffb2]">
            <div className="absolute inset-0 bg-[#081a50cc] z-0"/>
            <img className="absolute w-[276px] h-[29px] top-0 left-0 object-cover z-10"
                src={gloss}
                alt="Gloss"/>
            <div className="flex flex-col items-start gap-2 relative self-stetch w-full flex-[0_0_auto] z-10">
                <h3 className="self-stretch mt-[-1.00px] leading-[normal] relative [text-shadow:0_-1px_0px_#000000c] [font-family:'Helvetica_Neue-Bold', Helvetica] font-bold text-color-[#ffffff] text-lg text-center tracking-[0]">
                    {title}
                </h3>
                <div className="overflow-y-auto max-h-[60vh]">
                    <p className="relative self-stretch [text-shadow:0px_-1px_0px_#000000c] [font-family:'Helvetica_Neue-Bold', Helvetica] font-normal text-color-[#ffffff] text-base text-center tracking-[0] leading-5">
                        {description}
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] z-10">
                {buttons.map((button, index) => (
                    <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer" className="all-[unset] box-border h-[42px] mt-[-1.00px] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.36)_50%,rgba(255,255,255,0.24)_50%,rgba(255,255,255,0.36)_100%)] flex items-center justify-center pt-2 pb-2.5 px-2 relative self-stretch w-full ml-[-1.00px] mr-[-1.00px] rounded-[5px] overflow-hidden border border-solid border-[#00000066] shadow-[0px_0.5px_0.5px_#ffffff33] transition-all duration-100 active:scale-[0.98] active:brightness-75 cursor-pointer">
                        <div className="flex-1 leading-[22px] relative [text-shadow:0px_-1px_0px_#000000cc] [font-family:'Helvetica_Neue-Bold', Helvetica] font-bold text-color-[#ffffff] text-lg text-center tracking-[0]">
                            {button}
                        </div>
                    </a>
                ))}
            </div>

            <button className="all-[unset] box-border h-[42px] mb-[-1.00px] [background:linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.16)_50%,rgba(255,255,255,0.04)_50%,rgba(255,255,255,0.08)_100%)] flex items-center justify-center pt-2 pb-2.5 px-2 relative self-stretch w-full ml-[-1.00px] mr-[-1.00px] rounded-[5px] overflow-hidden border border-solid border-[#00000066] shadow-[0px_0.5px_0.5px_#ffffff33] transition-all duration-100 active:scale-[0.98] active:brightness-75" onClick={() => setActiveProject(null)}>
                <div className="flex-1 leading-[22px] relative [text-shadow:0px_-1px_0px_#000000cc] [font-family:'Helvetica_Neue-Bold', Helvetica] font-bold text-color-[#ffffff] text-lg text-center tracking-[0]">
                    Cancel
                </div>
            </button>
        </div>
    );
}

export default PopUp;