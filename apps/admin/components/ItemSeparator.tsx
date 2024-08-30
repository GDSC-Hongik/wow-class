import Image from "next/image";

const ItemSeparator = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <Image
    alt="item separator"
    height={height}
    src="/images/dot.svg"
    width={width}
  />
);

export default ItemSeparator;
