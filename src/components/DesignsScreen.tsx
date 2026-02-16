import Designs from "../assets/screens/Designs.webp";
import DesignLayout, { DesignName } from "./DesignLayout";

function DesignsScreen() {
    const handleDesignClick = (design: DesignName) => {
        // Handle design click - we can add navigation or modal here later
        console.log(`Clicked design: ${design}`);
    };

    return (
        <div className="absolute inset-0 top-[30px] bg-[#f0f0f0] animate-fade-in">
            <div className="w-full h-[calc(100vh-30px)] overflow-hidden">
                <img 
                    src={Designs} 
                    alt="Designs" 
                    className="w-full h-full transition-all duration-500" 
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <DesignLayout onDesignClick={handleDesignClick} />
            </div>
        </div>
    );
}

export default DesignsScreen;