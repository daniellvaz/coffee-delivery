import { Minus, Plus } from "@phosphor-icons/react";

export default function InputNumber() {
  return (
    <div className="flex items-center bg-base-button rounded">
      <button className="p-2 text-brand-purple hover:text-brand-purple-dark transition-colors">
        <Plus />
      </button>
      <p>1</p>
      <button className="p-2 text-brand-purple hover:text-brand-purple-dark transition-colors">
        <Minus />
      </button>
    </div>
  );
}
