import Contacts from "../assets/screens/Contacts.png";
import profile from "../assets/biography/profile.jpg";

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
                        <p className="text-md leading-relaxed">
                            Hello! My name is Ivan, I'm a Junior Software Engineering Student at <b>Stevens Institute of Technology</b>. I'm also a self-taught 3D Modeler and Game Developer. 
                            <br/>
                            <br/>
                            I'm passionate about Computer Vision, Deep Learning, Backend Development, 3D Modeling and UI / UX design. Besides technology, I enjoy reading about History and Politics, going for walks, and playing the piano.

                            <br/>
                            <br/>
                            Currently, I'm working on <b>Vertex</b>, a startup that vows to revolutionize 3D Modeling by assisting users in the creation of new meshes. This project is part of the <b>Launchpad / iSTEM</b> program at Stevens, which I'm a member of since 2022.
                            <br/>
                            <br/>
                            I'm also a member of <b>Blueprint</b>, a student ran organization that develops software solutions to non profit organizations for free where I serve as one of the VP of Technology.
                        </p>
                    </div>
                </div>
                
                {/* Desktop Layout */}
                <div className="hidden md:block">
                    <div className="absolute inset-y-0 top-1/2 transform -translate-y-1/2 w-1/2 p-8 overflow-y-auto h-full flex items-center justify-center">
                        <div className="[font-family:'Helvetica_Neue-Bold',Helvetica] text-[#000000] space-y-6 border border-[#00000033] p-6">
                            <p className="text-md leading-relaxed">
                                Hello! My name is Ivan, I'm a Junior Software Engineering Student at <b>Stevens Institute of Technology</b>. I'm also a self-taught 3D Modeler and Game Developer. 
                                <br/>
                                <br/>
                                I'm passionate about Computer Vision, Deep Learning, Backend Development, 3D Modeling and UI / UX design. Besides technology, I enjoy reading about History and Politics, going for walks, and playing the piano.

                                <br/>
                                <br/>
                                Currently, I'm working on <b>Vertex</b>, a startup that vows to revolutionize 3D Modeling by assisting users in the creation of new meshes. This project is part of the <b>Launchpad / iSTEM</b> program at Stevens, which I'm a member of since 2022.
                                <br/>
                                <br/>
                                I'm also a member of <b>Blueprint</b>, a student ran organization that develops software solutions to non profit organizations for free where I serve as one of the VP of Technology.
                            </p>
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