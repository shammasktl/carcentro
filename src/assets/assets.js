import browse from './browse.png';
import carHero from './car-hero.jpg';
import carInterior from './car-interior.jpg';
import corvetteStingray from './Corvette Stingray.jpg';
import customize from './customize.png';
import pontiacFirebird from './Pontiac Firebird.jpg';
import purchase from './purchase.png';
import miniCooper from './Mini Cooper Clubman.jpg';

export const assets = {
    browse,
    carHero,
    carInterior,
    corvetteStingray,
    customize,
    pontiacFirebird,
    purchase,
    miniCooper
}

export const steps= [
    {
        count: 1,
        img: browse,
        title: "Browse & Explore",
        description: "Discover an extensive and meticulously curated inventory of top-quality vehicles, ranging from the latest models to timeless classics, equipped with advanced features, exceptional performance, and stylish designs. Browse effortlessly and explore detailed specifications, pricing, and images—all from the comfort and convenience of your own home, ensuring a seamless and enjoyable car shopping experience.",
        color: "#0e5b63"
    },
    {
        count: 2,
        img: customize,
        title: "Choose & Customize",
        description: "Craft your ideal driving experience by selecting features that match your preferences, exploring a variety of optional upgrades for added luxury and performance, and enjoying flexible financing options tailored to meet your unique needs, ensuring a smooth and hassle-free purchase journey.",
        color: "#0a3438"
    },
    {
        count: 3,
        img: purchase,
        title: "Purchase & Enjoy",
        description: "Indulge in a seamless and stress-free car-buying experience with effortless transactions that save you time and energy. Benefit from a range of secure and reliable payment options, ensuring that your financial transactions are safe and protected. Enjoy the simplicity of straightforward and transparent paperwork, eliminating any confusion and making the entire process faster and more efficient.",
        color: "#0e5b63"
    },
]

export const cars = [
    {
        img: miniCooper,
        title: "2024 Dodge Charger",
        top: "NEW CAR",
    },
    {
        img: pontiacFirebird,
        title: "2024 Pontiac Firebird",
        top: "QUICK HATCHBACK",
    },
    {
        img: corvetteStingray,
        title: "2022 Corvette Stingray",
        top: "EVERLASTING",
    }
]