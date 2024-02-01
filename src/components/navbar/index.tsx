import { MapPin } from "@phosphor-icons/react";
import Logo from "../../assets/Logo.png";

export default function Navbar() {
  return (
    <nav className="w-full py-8">
      <div className="max-w-[1120px] w-full m-auto flex itesm-center justify-between">
        <img src={Logo} alt="Coffee delivery logo" />

        <ul className="flex gap-4">
          <li>
            <button className="p-2 flex gap-1 items-center bg-brand-Purple-light rounded-sm text-brand-purple-dark text-sm">
              <MapPin fontWeight="bold" size={16} />
              Curitiba, PR
            </button>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}
