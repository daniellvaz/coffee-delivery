import { ShoppingCartSimple } from "@phosphor-icons/react";

export default function StateButton() {
  return (
    <button className="w-fit h-fit p-2 bg-brand-purple-dark rounded hover:bg-brand-purple transition-colors">
      <ShoppingCartSimple size={16} color="#fff" weight="bold" />
    </button>
  );
}
