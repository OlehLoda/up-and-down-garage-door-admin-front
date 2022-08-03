export interface DataBlock {
  id: number;
  name: string;
}
interface Column {
  headline: string;
  items: DataBlock[];
}

const data: DataBlock[] = [
  {
    id: 0,
    name: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 1,
    name: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    name: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    name: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 5,
    name: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 6,
    name: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 7,
    name: "Lorem ipsum dolor sit amet.",
  },
];
const columns: Column[] = [
  {
    headline: "Created blogs",
    items: [],
  },
  {
    headline: "Published blogs",
    items: [],
  },
];
data.map((dataBlock: DataBlock) => {
  return columns[0].items.push({ ...dataBlock });
});

export default columns;
