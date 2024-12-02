import chefIcon from "../assets/chefIcon2.png";

export default function Header() {
    return (
        <header>
            <h1>Chef Samrat</h1>
            <img src={chefIcon} alt="Chef Icon" className="icon" />
        </header>
    );
}
