import Contacts from "../assets/screens/Contacts.webp";
import profile from "../assets/biography/profile.webp";

function BioText() {
    return (
        <>
            <h2 className="sr-only">About</h2>
            <p className="text-md leading-relaxed">
                Hello! My name is Ivan, I'm a Senior Software Engineering Student at <b>Stevens Institute of Technology</b>. I'm also a self-taught 3D Modeler and Automation Engineer.
                <br />
                <br />
                My technical toolkit spans both frontend and backend development. On the web side, I work primarily with <b>React</b>, <b>TypeScript</b>, and <b>Tailwind CSS</b> to build responsive, performant user interfaces. I also have experience with <b>Python</b> for scripting, automation pipelines, and backend services. For mobile development, I've built native iOS applications using <b>Swift</b> and <b>SwiftUI</b>, including an app that leverages Apple's Vision framework for barcode scanning. On the creative side, I use <b>Blender</b> for 3D modeling and have explored procedural generation techniques for creating assets programmatically.
                <br />
                <br />
                Currently, I work as an <b>Automation Engineer</b> at <b>One Stone LLC</b>, where I design and implement automations and custom applications for CRM systems to optimize business operations. My work involves building integrations between platforms using REST APIs, creating automated workflows that eliminate repetitive data entry, and developing custom dashboards that give sales teams real-time visibility into their pipeline. I've automated processes that previously took hours of manual effort, reducing turnaround times and minimizing human error across the organization.
                <br />
                <br />
                I'm passionate about building tools that bring efficiency and automation to industries that rely on manual processes such as sales or 3D modeling. I believe the best software is invisible — it removes friction and lets people focus on the creative or strategic work that actually matters.
                <br />
                <br />
                Currently, I'm working on <b>Vertex</b>, a startup that makes software solutions to make 3D modeling more accessible, efficient and intuitive. Vertex's core product is a wireframe-to-3D-model pipeline that uses machine learning to interpret hand-drawn sketches and convert them into editable 3D geometry. The tech stack includes a <b>React</b> frontend with a <b>Python/Flask</b> backend, leveraging computer vision models trained on custom annotated datasets. In 2024, Vertex won the <b>Thomas H. Scholl Award</b> at Stevens, a competitive innovation prize recognizing student ventures with strong technical merit and commercial potential. This project is part of the <b>Launchpad / iSTEM</b> program at Stevens, which I've been a member of since 2022. Through Launchpad, I've refined my approach to product development — learning to validate ideas early, iterate based on user feedback, and balance technical ambition with practical usability.
                <br />
                <br />
                I'm also a member of <b>Blueprint</b>, a student-run organization that develops software solutions for non-profit organizations for free, where I serve as the <b>VP of Design</b>. In this role, I lead the design team responsible for creating UI/UX designs across multiple NPO projects simultaneously. I conduct design reviews, establish design systems for consistency across projects, and mentor junior designers on accessibility best practices and user-centered design principles. Our work has directly impacted organizations serving thousands of community members by giving them modern, intuitive digital tools they couldn't otherwise afford.
                <br />
                <br />
                Looking ahead, I'm focused on roles at the intersection of software engineering and product development. I'm drawn to early-stage companies and teams where I can wear multiple hats — contributing to architecture decisions, building user-facing features, and shaping the product direction. My long-term goal is to continue building products that democratize access to powerful tools, whether that's in the 3D modeling space through Vertex or in new domains where automation and thoughtful design can make expert-level capabilities available to everyone.
            </p>
        </>
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
                            <h1 className="text-[32px]">
                                Ivan Farfan Diaz
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col py-3 gap-3 w-full">
                        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold flex items-start">
                            <span className="text-[16px] text-[#516691] w-[80px] text-right">email</span>
                            <a href="mailto:ifarfand@stevens.edu" className="text-[16px] text-[#000000] ml-2">ifarfand@stevens.edu</a>
                        </div>
                        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold flex items-start">
                            <span className="text-[16px] text-[#516691] w-[80px] text-right">location</span>
                            <span className="text-[16px] text-[#000000] ml-2">Hoboken, NJ</span>
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