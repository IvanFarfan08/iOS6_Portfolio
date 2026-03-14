import Designs from "../assets/screens/Designs.webp";
import DesignLayout, { DesignName } from "./DesignLayout";

function DesignsScreen() {
    const handleDesignClick = (_design: DesignName) => {
        // Design click handler — extend with navigation or modal as needed
    };

    return (
        <div className="absolute inset-0 top-[30px] bg-[#f0f0f0] animate-fade-in">
            <h2 className="sr-only">Designs</h2>
            <div className="w-full h-[calc(100vh-30px)] overflow-hidden">
                <img 
                    src={Designs} 
                    alt="" 
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