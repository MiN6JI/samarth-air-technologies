export interface TrustItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const trustData: TrustItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600",
    title: "Guaranteed Savings",
    description:
      "The only solar company in India with a money-back promise.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600",
    title: "Hassle-free Process",
    description:
      "Installation, subsidy and service handled directly by us.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600",
    title: "Storm-proof Structure",
    description:
      "Built to withstand extreme weather conditions.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600",
    title: "Reliable After-sales Service",
    description:
      "Regular maintenance for steady year-after-year performance.",
  },
];

export default trustData;