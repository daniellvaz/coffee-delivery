import StateButton from "../buttons/state";
import InputNumber from "../inputs/input-number";
import Price from "../price";
import Tag from "../tag";

interface CatalogProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export default function Catalog({
  title,
  description,
  tags,
  image,
}: CatalogProps) {
  return (
    <div className="max-w-[256px] bg-base-card rounded-tr-[36px] rounded-bl-[36px] w-fit mt-8 flex flex-col items-center">
      <div className="p-5 flex flex-col items-center">
        <img src={image} alt="Coffee" className="mb-4 -mt-10" />
        <div>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <div className="w-full flex flex-col item-center">
          <strong className="text-[20px] text-base-subtitle text-center">
            {title}
          </strong>
          <p className="text-sm text-base-label text-center">{description}</p>
        </div>
      </div>

      <div className="w-full p-5 flex items-center justify-between">
        <Price />
        <div className="flex gap-2">
          <InputNumber />

          <StateButton />
        </div>
      </div>
    </div>
  );
}
