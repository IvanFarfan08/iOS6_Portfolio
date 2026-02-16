// Preload images by creating Image objects that cache them in the browser
// This ensures images are ready before the user navigates to a screen

// Screen backgrounds
import Contacts from "../assets/screens/Contacts.webp";
import iBooks_Clean from "../assets/screens/iBooks_Clean.webp";
import Designs from "../assets/screens/Designs.webp";
import Shelf from "../assets/screens/Shelf.webp";

// Biography assets
import profile from "../assets/biography/profile.webp";

// Book assets
import vertex from "../assets/books/vertex.webp";
import Blue_Book from "../assets/books/Blue_Book.webp";
import Red_Book from "../assets/books/Red_Book.webp";
import Green_Book from "../assets/books/Green_Book.webp";

// Design assets
import portfolioDesign from "../assets/designs/portfolio.webp";
import vertexDesign from "../assets/designs/vertex.webp";

// UI assets
import Gloss from "../assets/Gloss.webp";

const imagesToPreload = [
    // Screen backgrounds (highest priority — these are full-screen)
    Contacts,
    iBooks_Clean,
    Designs,
    Shelf,
    // Biography
    profile,
    // Books
    vertex,
    Blue_Book,
    Red_Book,
    Green_Book,
    // Designs
    portfolioDesign,
    vertexDesign,
    // UI
    Gloss,
];

export function preloadImages(): void {
    imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}
