import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <div className="w-fit  px-2 py-1 bg-brand-yellow-light mb-4">
      <strong className="text-brand-yellow-dark text-xs">{children}</strong>
    </div>
  );
}
