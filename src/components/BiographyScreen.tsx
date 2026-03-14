import Contacts from "../assets/screens/Contacts.webp";
import profile from "../assets/biography/profile.webp";

function BioText() {
    return (
        <article>
            <h2 className="sr-only">About Ivan Farfan Diaz</h2>

            <h3 className="sr-only">Introduction</h3>
            <p className="text-sm leading-relaxed">
                Hello! My name is Ivan, I'm a Senior Software Engineering Student at <b>Stevens Institute of Technology</b> and a full-stack developer. I'm also a self-taught 3D Modeler and Automation Engineer based in Hoboken, NJ.
            </p>

            <br />

            <h3 className="sr-only">Technical Skills</h3>
            <p className="text-sm leading-relaxed">
                My technical toolkit spans frontend and backend development. I work primarily with <b>React</b>, <b>TypeScript</b>, and <b>Tailwind CSS</b> for web interfaces, <b>Python</b> and <b>Flask</b> for backend services and automation, and <b>Swift</b> and <b>SwiftUI</b> for native iOS development. On the creative side, I use <b>Blender</b> for 3D modeling and procedural generation.
            </p>

            <br />

            <h3 className="sr-only">Work Experience</h3>
            <p className="text-sm leading-relaxed">
                Currently, I work as an <b>Automation Engineer</b> at <b>One Stone LLC</b>, where I design and implement automations for CRM systems. I build REST API integrations between platforms, create automated workflows that eliminate repetitive data entry, and develop custom dashboards that give sales teams real-time pipeline visibility.
            </p>

            <br />

            <h3 className="sr-only">Vertex — Award-Winning 3D Modeling Startup</h3>
            <p className="text-sm leading-relaxed">
                I'm building <b>Vertex</b>, a startup that makes 3D modeling more accessible through a wireframe-to-3D-model pipeline powered by machine learning. The tech stack includes <b>React</b> with a <b>Python/Flask</b> backend, leveraging custom-trained computer vision models. In 2024, Vertex won the <b>Thomas H. Scholl Award</b> at Stevens for technical innovation and commercial potential. This project is part of the <b>Launchpad / iSTEM</b> program, which I've been a member of since 2022.
            </p>

            <br />

            <h3 className="sr-only">Blueprint — VP of Design</h3>
            <p className="text-sm leading-relaxed">
                I'm the <b>VP of Design</b> at <b>Blueprint</b>, a student-run organization that develops free software for non-profits. I lead the design team across multiple NPO projects, conduct design reviews, establish design systems, and mentor junior designers on accessibility and user-centered design principles.
            </p>

            <br />

            <h3 className="sr-only">Career Goals</h3>
            <p className="text-sm leading-relaxed">
                I'm focused on roles at the intersection of software engineering and product development — drawn to early-stage teams where I can contribute to architecture, build user-facing features, and shape product direction. My goal is to build products that democratize access to powerful tools through automation and thoughtful design.
            </p>
        </article>
    );
}

function BiographyScreen() {
    return (
        <div className="absolute inset-0 top-[30px] bg-[#f0f0f0] animate-fade-in">
            <div className="w-full h-[calc(100vh-30px)] overflow-hidden">
                <img
                    src={Contacts}
                    alt=""
                    className="w-full h-full transition-all duration-500"
                />
                {/* Mobile Layout */}
                <div className="md:hidden absolute inset-0 top-[30px] flex flex-col items-center w-full p-6 gap-4 overflow-y-auto pb-20">
                    <div className="flex items-center gap-3.5 shrink-0">
                        <div className="w-18 h-18 bg-white shadow-[0_0.5px_0_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.1)] p-1">
                            <img
                                src={profile}
                                alt="Portrait of Ivan Farfan Diaz, Software Engineer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-[#000000] font-bold">
                            <h1 className="text-[28px] leading-tight">
                                Ivan Farfan Diaz
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col py-2 gap-2 w-full shrink-0">
                        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold flex items-start">
                            <span className="text-[14px] text-[#516691] w-[70px] text-right">email</span>
                            <a href="mailto:ifarfand@stevens.edu" className="text-[14px] text-[#000000] ml-2">ifarfand@stevens.edu</a>
                        </div>
                        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold flex items-start">
                            <span className="text-[14px] text-[#516691] w-[70px] text-right">location</span>
                            <span className="text-[14px] text-[#000000] ml-2">Hoboken, NJ</span>
                        </div>
                    </div>
                    <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-[#000000] border border-[#00000033] p-4 w-full">
                        <BioText />
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="absolute inset-y-0 left-0 w-1/2 p-8 overflow-y-auto top-[30px]">
                        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-[#000000] border border-[#00000033] p-6">
                            <BioText />
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 top-1/2 -translate-y-3/5 w-1/2 p-8 overflow-y-auto">
                        <div className="flex items-center justify-start gap-3.5 p-2.5 relative">
                            <div className="w-18 h-18 bg-white shadow-[0_0.5px_0_rgba(0,0,0,0.15),0_3px_6px_rgba(0,0,0,0.1)] p-1">
                                <img
                                    src={profile}
                                    alt="Portrait of Ivan Farfan Diaz, Software Engineer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-[#000000] font-bold">
                                <h1 className="text-[32px]">
                                    Ivan Farfan Diaz
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col py-5 gap-5">
                            <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold flex items-start">
                                <span className="text-[20px] text-[#516691] w-[100px] text-right">email</span>
                                <a href="mailto:ifarfand@stevens.edu" className="text-[20px] text-[#000000] ml-2">ifarfand@stevens.edu</a>
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