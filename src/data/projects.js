// Sample project data with placeholder images

export const featuredProjects = [
  {
    id: 1,
    title: "Live Edge Dining Table",
    description:
      "A stunning dining table crafted from a single slab of black walnut with hand-turned maple legs.",
    thumbnailImage:
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650051/89EFB26A-CFAB-460D-8308-BB8E3C2C1A27_nx6a9v.jpg",
    images: [
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650051/89EFB26A-CFAB-460D-8308-BB8E3C2C1A27_nx6a9v.jpg",
      "https://images.unsplash.com/photo-1604080072035-97c6842e2cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    materials: "Black Walnut, Maple",
  },
  {
    id: 2,
    title: "Modern Kitchen Cabinetry",
    description:
      "Complete kitchen renovation featuring white oak cabinets with custom dovetail drawers.",
    thumbnailImage:
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650052/5F4C9FB3-A22E-46D8-959B-BDCFD1E96E06_hhpy4n.jpg",
    images: [
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650052/5F4C9FB3-A22E-46D8-959B-BDCFD1E96E06_hhpy4n.jpg",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    materials: "White Oak, Brass Hardware",
  },
  {
    id: 3,
    title: "Sculpted Rocking Chair",
    description:
      "A comfortable rocking chair with hand-carved details, designed for ergonomic support.",
    thumbnailImage:
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650052/5F4C9FB3-A22E-46D8-959B-BDCFD1E96E06_hhpy4n.jpg",
    images: [
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650052/5F4C9FB3-A22E-46D8-959B-BDCFD1E96E06_hhpy4n.jpg",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
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
    thumbnailImage:
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650052/9C329E3F-6611-4487-BFB9-2B7FBAA14C0E_kpqss5.jpg",
    images: [
      "https://res.cloudinary.com/dwdnqjdmw/image/upload/v1741650052/9C329E3F-6611-4487-BFB9-2B7FBAA14C0E_kpqss5.jpg",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    materials: "Walnut",
  },
  {
    id: 5,
    title: "Four-Poster Bed Frame",
    description:
      "Solid maple bed frame with traditional joinery and a natural oil finish.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    materials: "Maple",
  },
  {
    id: 6,
    title: "Floating Media Console",
    description:
      "Wall-mounted media console with push-to-open drawers and cable management system.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069533cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606070813635-17f2d0a3f392?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    materials: "White Oak, Steel",
  },
  {
    id: 7,
    title: "Dining Chairs Set",
    description:
      "Set of six dining chairs with steam-bent backrests and hand-woven rush seats.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1561677978-583a8c7a4b43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
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
    thumbnailImage:
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613849925594-415a32298f54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    materials: "Maple, Marble",
  },
  {
    id: 9,
    title: "Built-in Bookcase",
    description:
      "Floor-to-ceiling bookcase with adjustable shelving and integrated lighting.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529473814998-077b4fec6770?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b485390?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    materials: "White Oak",
  },
  {
    id: 10,
    title: "Wine Cabinet",
    description:
      "Temperature-controlled wine cabinet with custom bottle racks and glass doors.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573624658129-4713a8995cc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558551649-8f6e3f155e4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    materials: "Walnut, Glass",
  },
  {
    id: 11,
    title: "Office Shelving System",
    description:
      "Modular wall-mounted shelving system for a home office with integrated desk.",
    thumbnailImage:
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    materials: "Maple, Steel",
  },
];
