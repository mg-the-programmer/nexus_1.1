export const subCategories = [
  { name: "Full-Stack Developer", href: "#" },
  { name: "Android Developer", href: "#" },
  { name: "Blockchain Developer", href: "#" },
  { name: "Web3 Developer", href: "#" },
  { name: "JavaScript Development", href: "#" },
];

export const filters = [
  {
    id: "amount",
    name: "Amount",
    options: [
      {
        value: "Any Amount Earned",
        label: "Any Amount Earned",
        checked: false,
      },
      { value: "₹10k+ Earned", label: "₹10k Earned", checked: false },
      { value: "₹50k+ Earned", label: "₹50k+ Earned", checked: true },
      { value: "₹100k+ Earned", label: "₹100k+ Earned", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      {
        value: "Full-Stack Developer",
        label: "Full-Stack Developer",
        checked: false,
      },
      {
        value: "Android Developer",
        label: "Android Developer",
        checked: false,
      },
      {
        value: "Blockchain Developer",
        label: "Blockchain Developer",
        checked: true,
      },
      { value: "Web3 Developer", label: "Web3 Developer", checked: false },
      {
        value: "JavaScript Development",
        label: "JavaScript Development",
        checked: false,
      },
    ],
  },
  {
    id: "employement",
    name: "Employement",
    options: [
      { value: "full-time", label: "Full Time", checked: false },
      { value: "Senior Level", label: "Senior Level", checked: false },
      { value: "Remote", label: "Remote", checked: false },
      { value: "Contract", label: "Contract", checked: false },
    ],
  },
];

export const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
