import { Image } from "antd";
import { useEffect } from "react";

const ImportCard = ({ data, selected, setSelected }: any) => {
  console.log("🚀 ~ file: importCard.tsx:5 ~ ImportCard ~ selected:", selected);
  useEffect(() => {}, []);

  return (
    <div
      className={`w-40 grayscale border-blue-600 border-2 p-2 rounded ${
        selected === data.title ? "grayscale-0" : "grayscale"
      } hover:grayscale-0`}
      onClick={() => setSelected(data.title)}
    >
      <div className="flex h-10 items-center justify-center gap-2">
        <Image
          height={data.full ? 60 : 15}
          width={data.full ? 100 : 15}
          preview={false}
          src={`/assets/images/${data.logo}`}
          alt="Error Loading Image"
        />
        {data.full ? "" : data.title}
      </div>
    </div>
  );
};

export default ImportCard;
