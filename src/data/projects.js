// Sample project data with placeholder images

export const featuredProjects = [
  {
    id: 1,
    title: "Live Edge Dining Table",
    description:
      "A stunning dining table crafted from a single slab of black walnut with hand-turned maple legs.",
    image:
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650051/89EFB26A-CFAB-460D-8308-BB8E3C2C1A27_nx6a9v.jpg",
    materials: "Black Walnut, Maple",
  },
  {
    id: 2,
    title: "Modern Kitchen Cabinetry",
    description:
      "Complete kitchen renovation featuring white oak cabinets with custom dovetail drawers.",
    image:
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650052/5F4C9FB3-A22E-46D8-959B-BDCFD1E96E06_hhpy4n.jpg",
    materials: "White Oak, Brass Hardware",
  },
  {
    id: 3,
    title: "Sculpted Rocking Chair",
    description:
      "A comfortable rocking chair with hand-carved details, designed for ergonomic support.",
    image:
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650052/5F4C9FB3-A22E-46D8-959B-BDCFD1E96E06_hhpy4n.jpg",
    materials: "Cherry, Leather",
  },
];

export const furnitureProjects = [
  ...featuredProjects.filter((p) => p.id === 1 || p.id === 3),
  {
    id: 4,
    title: "Bookmatched Coffee Table",
    description:
      "A mid-century inspired coffee table with bookmatched walnut top and tapered legs.",
    image:
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650052/9C329E3F-6611-4487-BFB9-2B7FBAA14C0E_kpqss5.jpg",
    materials: "Walnut",
  },
  {
    id: 5,
    title: "Four-Poster Bed Frame",
    description:
      "Solid maple bed frame with traditional joinery and a natural oil finish.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    materials: "Maple",
  },
  {
    id: 6,
    title: "Floating Media Console",
    description:
      "Wall-mounted media console with push-to-open drawers and cable management system.",
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    materials: "White Oak, Steel",
  },
  {
    id: 7,
    title: "Dining Chairs Set",
    description:
      "Set of six dining chairs with steam-bent backrests and hand-woven rush seats.",
    image:
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    materials: "Cherry, Rush",
  },
];

export const cabinetryProjects = [
  featuredProjects.find((p) => p.id === 2),
  {
    id: 8,
    title: "Bathroom Vanity",
    description:
      "Custom bathroom vanity with integrated sink and soft-close drawers.",
    image:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    materials: "Maple, Marble",
  },
  {
    id: 9,
    title: "Built-in Bookcase",
    description:
      "Floor-to-ceiling bookcase with adjustable shelving and integrated lighting.",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    materials: "White Oak",
  },
  {
    id: 10,
    title: "Wine Cabinet",
    description:
      "Temperature-controlled wine cabinet with custom bottle racks and glass doors.",
    image:
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    materials: "Walnut, Glass",
  },
  {
    id: 11,
    title: "Office Shelving System",
    description:
      "Modular wall-mounted shelving system for a home office with integrated desk.",
    image:
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    materials: "Maple, Steel",
  },
];
