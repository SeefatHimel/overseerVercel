import { Image } from "antd";

const ImportCard = ({ data, selected, setSelected }: any) => {
  return (
    <div
      className={`w-40 grayscale border-blue-600 border-2 p-2 rounded ${
        selected ? "grayscale-0" : "grayscale"
      } hover:grayscale-0`}
      onClick={() => setSelected(data.title)}
    >
      <div className="flex h-10 items-center justify-center gap-2">
        {data.full ? (
          <Image
            height={60}
            width={100}
            preview={false}
            src={`/assets/images/${data.logo}`}
            alt="Error Loading Image"
          />
        ) : (
          <Image
            height={15}
            width={15}
            preview={false}
            src={`/assets/images/${data.logo}`}
            alt="Error Loading Image"
          />
        )}
        {data.full ? "" : data.title}
      </div>
    </div>
  );
};

export default ImportCard;
