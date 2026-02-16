import Contacts from "../assets/screens/Contacts.webp";
import profile from "../assets/biography/profile.webp";

function BioText() {
    return (
        <p className="text-md leading-relaxed">
            Hello! My name is Ivan, I'm a Senior Software Engineering Student at <b>Stevens Institute of Technology</b>. I'm also a self-taught 3D Modeler and Automation Engineer.
            <br />
            <br />
            Currently, I work as an <b>Automation Engineer</b> at <b>One Stone LLC</b>, where I design and implement automations and custom applications for CRM systems to optimize business operations.
            <br />
            <br />
            I'm passionate about building tools that bring efficiency and automation to industries that rely on manual processes such as sales or 3D modeling.
            <br />
            <br />
            Currently, I'm working on <b>Vertex</b>, a startup that makes software solution to make 3D modeling more accesible, efficient and intuitive. This project is part of the <b>Launchpad / iSTEM</b> program at Stevens, which I'm a member of since 2022.
            <br />
            <br />
            I'm also a member of <b>Blueprint</b>, a student ran organization that develops software solutions to non profit organizations for free where I serve as the VP of Design, leading the development of UI/UX designs for multiple NPOs.
        </p>
    );
}

function BiographyScreen() {
    return (
        <div className="absolute inset-0 top-[30px] bg-[#f0f0f0] animate-fade-in">
            <div className="w-full h-[calc(100vh-30px)] overflow-hidden">
                <img
                    src={Contacts}
                    alt="Contacts"
                    className="w-full h-full transition-all duration-500"
                />
                {/* Mobile Layout */}
                <div className="md:hidden absolute inset-0 flex flex-col items-center w-full p-8 gap-8 overflow-y-auto">
                    <div className="flex items-center gap-3.5">
                        <div className="w-18 h-18 bg-white shadow-[0_0.5px_0_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.1)] p-1">
                            <img
                                src={profile}
                                alt="Ivan Farfan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-[#000000] font-bold">
                            <p className="text-[32px]">
                                Ivan Farfan Diaz
                            </p>
                        </div>
                    </div>
                    <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-[#000000] space-y-6 border border-[#00000033] p-6 w-full">
                        <BioText />
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="absolute inset-y-0 top-1/2 transform -translate-y-1/2 w-1/2 p-8 overflow-y-auto h-full flex items-center justify-center">
                        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-[#000000] space-y-6 border border-[#00000033] p-6">
                            <BioText />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 top-1/2 -translate-y-3/5 w-1/2 p-8 overflow-y-auto">
                        <div className="flex items-center justify-start gap-3.5 p-2.5 relative">
                            <div className="w-18 h-18 bg-white shadow-[0_0.5px_0_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.1)] p-1">
                                <img
                                    src={profile}
                                    alt="Ivan Farfan"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-[#000000] font-bold">
                                <p className="text-[32px]">
                                    Ivan Farfan Diaz
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col py-5 gap-5">
                            <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold flex items-start">
                                <span className="text-[20px] text-[#516691] w-[100px] text-right">email</span>
                                <span className="text-[20px] text-[#000000] ml-2">ifarfand@stevens.edu</span>
                            </div>
                            <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold flex items-start">
                                <span className="text-[20px] text-[#516691] w-[100px] text-right">location</span>
                                <span className="text-[20px] text-[#000000] ml-2">Hoboken, NJ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BiographyScreen;