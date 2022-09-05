const products = [
  {
    name: "Men Paisley Print Loose Fit Jeans",
    price: "$35",
    href: 1,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/mens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269097cb91d8ca3188289a4a66b2fb915f2f82_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269100f2af8499b5c5d074b08f0a4fa8884703_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269104e035e6af94ebe45fd28d208a8fe38d10_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/162726910228fdbfef7994fd35f2be784dec8e9b12_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "mens-pants",
    cetagory : "mens"
  },
  {
    name: "Men Patched Pocket Polo Shirt",
    price: "$35",
    href: 2,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/mens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/07/29/16590607432a71e21c9791a4799757b6daf4303b3a_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/07/25/1658747375c21b84ead3151ef13d639d90a49fe1ef_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/07/25/16587473795095f9f76bae544874da29e607c0f0dd_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/07/25/165874737789b16ffcfd84145e4a38fe307884ff2d_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "mens-shirts",
    cetagory : "mens"
  },
  {
    name: "Men Lace Up Front Sneakers",
    price: "$35",
    href: 3,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/mens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/06/28/1624875324f8f7187b64170bff4703b4bbe664a665_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/06/28/162487533042ec84c44159ebb95f30f387354fba76_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/06/28/16248753323052c32a220d759b79579f6b0bcc7f44_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/06/28/1624875334bf4c9114898f7c3a7c9de137d79bcee1_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "mens-shoes",
    cetagory : "mens"
  },
  {
    name: "Men Letter Graphic Laptop Backpack",
    price: "$35",
    href: 4,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/mens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/03/21/16478324320955b7d0264d75f55080ef0684a9caf2_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/03/21/16478324320955b7d0264d75f55080ef0684a9caf2_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/03/21/1647832443ccc92c1ad9d0110671c2baa7378dd5dc_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/03/21/164783243886471b8dda2d4bdf4d7244527e551d0c_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "mens-begs",
    cetagory : "mens"
  },
  {
    name: "Men Patch Detail Drop Shoulder Sweatshirt",
    price: "$35",
    href: 5,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/mens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/08/05/1628129651a42911726c21a319fd202de0cd12457a_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/08/05/16281296529fd74627a0fd00d7c4878df9601cc0a6_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/08/05/16281296546068f50c99ff72785c440e860553a7c8_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/08/05/1628129651a42911726c21a319fd202de0cd12457a_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "mens-hoddies",
    cetagory : "mens"
  },
  {
    name: "Men Patch Detail Drop Shoulder Sweatshirt",
    price: "$35",
    href: 6,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/mens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/08/05/1628129651a42911726c21a319fd202de0cd12457a_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/08/05/16281296529fd74627a0fd00d7c4878df9601cc0a6_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/08/05/16281296546068f50c99ff72785c440e860553a7c8_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/08/05/1628129651a42911726c21a319fd202de0cd12457a_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "mens-hoddies",
    cetagory : "mens"
  },
  {
    name: "Argyle Print Bodycon Dress",
    price: "$13.00",
    href: 7,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/womens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/03/15/16157876781b5971ef9da5efda9d563e9c4fc16148_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/03/15/16157876803ef23a84d9623f235323be54c50fd4dd_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/03/15/161578768697a9bb8169be5e3ddf32a97dccd07187_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2021/03/15/161578768992aedc0c154356355ece46b4a1a97147_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "womens-dress",
    cetagory : "womens"
  },
  {
    name: "Mini Quilted Embossed Scarf Decor Satchel Bag",
    price: "$40",
    href: 2,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/womens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/07/20/1658316779c0cd2a360488943d26d1d8ca2d5b0b1f_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/07/20/1658316779c0cd2a360488943d26d1d8ca2d5b0b1f_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/07/20/1658316779c0cd2a360488943d26d1d8ca2d5b0b1f_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/07/20/16583167862090d84f4cb6a987735138b93f7f019b_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "womens-beg",
    cetagory : "womens"
  },
  {
    name: "White Trendy Shoes",
    price: "$35",
    href: 3,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/womens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/03/02/16462098514ab209f65516695788879f095867f89b_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/03/02/1646209856f356e60d98e7eddd3da2aee0a17b29dc_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/03/02/16462098595fde825b4172acb946116067bc2bdb91_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/03/02/16462098661a619e238788ae7ca23e491702342a76_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "womens-shoes",
    cetagory : "womens"
  },
  {
    name: "10pcs Faux Pearl Decor Ring",
    price: "$35",
    href: 4,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/womens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/05/16/16526794171b8b66ad3a1e5bc5a6ca9552a2b09116_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/05/16/16526794210ce1018a46c9bd42ec2086a5710f4853_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/05/16/16526794199c869841aef749c0f29ef0d2e7db15ab_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/05/16/16526794210ce1018a46c9bd42ec2086a5710f4853_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "womens-jewelry",
    cetagory : "womens"
  },
  {
    name: "1pc Round Pointer Quartz Watch & 5pcs Bracelet",
    price: "$500",
    href: 5,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 1, name: "Men", href: "/womens" },
    ],
    images: [
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/06/27/1656293624e2fddb253d8da414b40b62e9945542ba_thumbnail_600x.webp",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/06/30/1656571396fd73d0703f73c0cd48b28354bf40f108_thumbnail_600x.webp",
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/06/30/1656571397974ba290c92018bcc972a799c841ba34_thumbnail_600x.webp",
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: "https://img.ltwebstatic.com/images3_pi/2022/06/27/1656293628f58e53b7fd17b7058b40158e7b9a1682_thumbnail_600x.webp",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description: "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    slug : "womens-watch",
    cetagory : "womens"
  }

];


export default products;