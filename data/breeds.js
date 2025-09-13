const CATTLE_BREEDS = [
  {
    id: '1',
    name: 'Alambadi',
    origin: 'Tamil Nadu, India',
    image: 'https://i.ibb.co/1YKhyVDQ/Alambadi.png',
    description:
      'A robust draught breed from the hilly regions of Tamil Nadu, known for its strength and endurance in ploughing and pulling carts in rough terrain.',
    stats: {
      weight: 'Male: 350-400 kg',
      height: '1.2 - 1.3 m',
      use: 'Draught / Work',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Long, sharp, curving upward and backward.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Typically grey or dark grey with white markings.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Compact, muscular, and exceptionally hardy for hill work.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '2',
    name: 'Amritmahal',
    origin: 'Karnataka, India',
    image:
      'https://i.ibb.co/qFyxwSSY/Gemini-Generated-Image-cq1qv5cq1qv5cq1q-1-removebg-preview.png',
    description:
      'A majestic draught breed from Karnataka, famous for its power, endurance, and historical use in warfare for transporting armament.',
    stats: {
      weight: 'Male: 350 kg',
      height: '1.2 - 1.4 m',
      use: 'Draught / Transport',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Long, sharp horns that emerge from the top of the poll.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Varies from grey to almost black.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Known for its distinctive long head and powerful legs.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '3',
    name: 'Ayrshire',
    origin: 'Ayrshire, Scotland',
    image:
      'https://i.ibb.co/v4cwfghT/Gemini-Generated-Image-m1dmi6m1dmi6m1dm-removebg-preview.png',
    description:
      'A Scottish dairy breed, recognized for its distinctive red and white coat, efficiency as a grazer, and high-quality milk.',
    stats: { weight: 'Female: 600 kg', height: '1.3 - 1.4 m', use: 'Dairy' },
    characteristics: [
      {
        key: 'Horns',
        value: 'Typically dehorned in modern farming.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Distinctive red, brown, and white coat patterns.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Hardy and well-adapted for milk production in various climates.',
        icon: 'sunny',
      },
      {
        key: 'Conservation Status',
        value: 'Not at Risk / Global',
        icon: 'sync-circle',
      },
    ],
  },
  {
    id: '4',
    name: 'Banni',
    origin: 'Gujarat, India',
    image:
      'https://i.ibb.co/gZh5PWSn/Gemini-Generated-Image-kino5ukino5ukino-removebg-preview.png',
    description:
      'A resilient buffalo breed from the Kutch region of Gujarat, highly adapted to arid conditions and known for its high milk yield.',
    stats: {
      weight: 'Female: 400-500 kg',
      height: '1.3 - 1.5 m',
      use: 'Dairy (Buffalo)',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Medium-sized and tightly curled.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Usually black, but can be copper-colored.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Well-adapted to arid and saline environments, can survive on sparse grazing.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '5',
    name: 'Bargur',
    origin: 'Tamil Nadu, India',
    image:
      'https://i.ibb.co/XrsJ6b7m/Gemini-Generated-Image-y1cbr1y1cbr1y1cb-removebg-preview.png',
    description:
      'Compact and spirited draught cattle from the Bargur hills of Tamil Nadu, known for their incredible speed and agility.',
    stats: {
      weight: 'Male: 340 kg',
      height: '1.1 - 1.2 m',
      use: 'Draught / Farm Work',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Closely set, growing upward and backward.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Brown with white markings is most common.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Fiercely protective and semi-wild in temperament.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Vulnerable', icon: 'sync-circle' },
    ],
  },
  {
    id: '6',
    name: 'Bhadawari',
    origin: 'Uttar Pradesh, India',
    image:
      'https://i.ibb.co/1Jr9q6NB/Gemini-Generated-Image-x0izrx0izrx0izrx-removebg-preview.png',
    description:
      'A water buffalo breed from Uttar Pradesh, famed for the exceptionally high butterfat content of its milk, often exceeding 12%.',
    stats: {
      weight: 'Male: 425 kg',
      height: '1.3 - 1.4 m',
      use: 'Dairy (Buffalo)',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Curled backward, downward, then upward.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Coppery brown with two white lines on the lower neck.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Medium-sized, wedge-shaped body, efficient converter of coarse feed.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '7',
    name: 'Brown Swiss',
    origin: 'Switzerland',
    image:
      'https://i.ibb.co/mCcXVfvB/Gemini-Generated-Image-d1guq5d1guq5d1gu-removebg-preview.png',
    description:
      'A popular dairy breed from the Swiss Alps, known for its docile nature, longevity, and high-protein milk ideal for cheese making.',
    stats: {
      weight: 'Female: 600-700 kg',
      height: '1.4 - 1.5 m',
      use: 'Dairy',
    },
    characteristics: [
      { key: 'Horns', value: 'Generally dehorned.', icon: 'flash' },
      {
        key: 'Color',
        value: 'Varies from light grayish-brown to very dark brown.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Large frame, strong legs, and a calm temperament.',
        icon: 'sunny',
      },
      {
        key: 'Conservation Status',
        value: 'Not at Risk / Global',
        icon: 'sync-circle',
      },
    ],
  },
  {
    id: '8',
    name: 'Dangi',
    origin: 'Maharashtra, India',
    image:
      'https://i.ibb.co/qLJBNwXN/Gemini-Generated-Image-8wx1748wx1748wx1-removebg-preview.png',
    description:
      'A hardy draught breed from the Dangs district of Maharashtra, perfectly adapted for work in heavy rainfall and rice cultivation areas.',
    stats: {
      weight: 'Male: 350-450 kg',
      height: '1.2 - 1.3 m',
      use: 'Draught',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Short and thick horns, often with a distinctive outward curve.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Red or black with white spots, creating a unique pattern.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Possesses an oily skin secretion that protects it from heavy rains.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '9',
    name: 'Deoni',
    origin: 'Maharashtra, India',
    image:
      'https://i.ibb.co/rR0c7Mw4/Gemini-Generated-Image-syheyqsyheyqsyhe-removebg-preview.png',
    description:
      'A popular dual-purpose breed from Maharashtra, valued for both its draught power and good milk production, often resembling the Gir breed.',
    stats: {
      weight: 'Male: 500-600 kg',
      height: '1.4 - 1.5 m',
      use: 'Dual-purpose',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Short, stumpy horns that emerge from the side of the poll.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Irregularly spotted black and white.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Known for its drooping ears and prominent, slightly bulging forehead.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '10',
    name: 'Gir',
    origin: 'Gujarat, India',
    image:
      'https://i.ibb.co/1JRKtjJn/Gemini-Generated-Image-cgs2ovcgs2ovcgs2-removebg-preview.png',
    description:
      'A world-famous dairy breed from the Gir forests of Gujarat, known for its high milk yield, heat tolerance, and distinctive appearance.',
    stats: { weight: 'Male: 550-650 kg', height: '1.3 - 1.4 m', use: 'Dairy' },
    characteristics: [
      {
        key: 'Horns',
        value: 'Peculiar horns that curve, turning back at the tip.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Ranges from pure red to speckled red and white.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Characterized by its domed forehead and long, pendulous ears.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '11',
    name: 'Guernsey',
    origin: 'Guernsey, Channel Islands',
    image:
      'https://i.ibb.co/xt07K550/Gemini-Generated-Image-2vma5y2vma5y2vma-removebg-preview.png',
    description:
      'A dairy breed famous for its rich, golden-colored milk, which is high in beta-carotene and butterfat.',
    stats: {
      weight: 'Female: 450-500 kg',
      height: '1.2 - 1.3 m',
      use: 'Dairy',
    },
    characteristics: [
      { key: 'Horns', value: 'Usually dehorned.', icon: 'flash' },
      {
        key: 'Color',
        value: 'Shades of fawn or red with white markings.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Docile and an efficient producer of milk from grass.',
        icon: 'sunny',
      },
      {
        key: 'Conservation Status',
        value: 'At Risk / Rare',
        icon: 'sync-circle',
      },
    ],
  },
  {
    id: '12',
    name: 'Hallikar',
    origin: 'Karnataka, India',
    image:
      'https://i.ibb.co/Q3qp9GMv/Gemini-Generated-Image-v5gl2iv5gl2iv5gl-removebg-preview.png',
    description:
      'A prominent draught breed from Karnataka, characterized by its long, sharp horns and used in the traditional sport of bullock-cart racing.',
    stats: {
      weight: 'Male: 340 kg',
      height: '1.2 - 1.4 m',
      use: 'Draught / Sport',
    },
    characteristics: [
      {
        key: 'Horns',
        value:
          'Long, sharp horns that emerge close together and are carried vertically.',
        icon: 'flash',
      },
      { key: 'Color', value: 'Commonly grey or white.', icon: 'color-palette' },
      {
        key: 'Build',
        value: 'Muscular, compact body with a majestic and elegant gait.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '13',
    name: 'Hariana',
    origin: 'Haryana, India',
    image: 'https://i.ibb.co/kg3x73KH/1000128269-removebg-preview.png',
    description:
      'A popular dual-purpose breed from North India, valued for both its capacity as a powerful work animal and its good milk production.',
    stats: {
      weight: 'Male: 500 kg',
      height: '1.4 - 1.5 m',
      use: 'Dual-purpose',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Short horns that curve upwards and inwards.',
        icon: 'flash',
      },
      { key: 'Color', value: 'White or light grey.', icon: 'color-palette' },
      {
        key: 'Build',
        value: 'Large, powerful frame suitable for both milk and work.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '14',
    name: 'Holstein Friesian',
    origin: 'Netherlands',
    image: 'https://i.ibb.co/zVZMJYxT/1000128272-removebg-preview.png',
    description:
      "The world's highest-production dairy animal, recognized by its classic black-and-white or red-and-white coat, dominating the global dairy industry.",
    stats: {
      weight: 'Female: 680-770 kg',
      height: '1.45 - 1.65 m',
      use: 'Dairy',
    },
    characteristics: [
      { key: 'Horns', value: 'Dehorned at a young age.', icon: 'flash' },
      {
        key: 'Color',
        value: 'Distinctive black-and-white or red-and-white patches.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Large, stylish dairy frame bred specifically for maximum milk output.',
        icon: 'sunny',
      },
      {
        key: 'Conservation Status',
        value: 'Not at Risk / Global',
        icon: 'sync-circle',
      },
    ],
  },
  {
    id: '15',
    name: 'Jaffrabadi',
    origin: 'Gujarat, India',
    image: 'https://i.ibb.co/C3zJsR1Q/1000128275-removebg-preview.pngi',
    description:
      'A massive river buffalo breed from the Gir forests of Gujarat, known for its heavy build, high milk yield, and prominent forehead.',
    stats: {
      weight: 'Male: 600-700 kg',
      height: '1.4 - 1.6 m',
      use: 'Dairy (Buffalo)',
    },
    characteristics: [
      {
        key: 'Horns',
        value:
          'Heavy horns that droop on each side of the neck and curl up at the point.',
        icon: 'flash',
      },
      { key: 'Color', value: 'Usually black.', icon: 'color-palette' },
      {
        key: 'Build',
        value: 'One of the heaviest buffalo breeds, with a calm temperament.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '16',
    name: 'Jersey',
    origin: 'Jersey, Channel Islands',
    image: 'https://i.ibb.co/HfkTJCnK/1000128292-removebg-preview.png',
    description:
      'A small, highly efficient dairy breed prized for the extremely high butterfat and protein content of its milk, relative to its body size.',
    stats: {
      weight: 'Female: 400-500 kg',
      height: '1.15 - 1.25 m',
      use: 'Dairy',
    },
    characteristics: [
      { key: 'Horns', value: 'Typically dehorned.', icon: 'flash' },
      {
        key: 'Color',
        value: 'Varies from light fawn to a dark, almost black shade.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Small, refined frame with a gentle disposition and high feed efficiency.',
        icon: 'sunny',
      },
      {
        key: 'Conservation Status',
        value: 'Not at Risk / Global',
        icon: 'sync-circle',
      },
    ],
  },
  {
    id: '17',
    name: 'Kangayam',
    origin: 'Tamil Nadu, India',
    image: 'https://i.ibb.co/HDNSTws2/1000128295-removebg-preview.png',
    description:
      'A powerful and popular draught breed from Tamil Nadu, known for its superior strength and active temperament.',
    stats: {
      weight: 'Male: 480-550 kg',
      height: '1.4 - 1.6 m',
      use: 'Draught / Work',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Long, strong horns that curve outwards and backwards.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Grey or white, with bulls being darker.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Muscular build, known for being very active and less docile.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '18',
    name: 'Kankrej',
    origin: 'Gujarat, India',
    image: 'https://i.ibb.co/N20gpYKD/1000128298-removebg-preview.png',
    description:
      'A dual-purpose Zebu breed from Gujarat, easily identified by its large, lyre-shaped horns and valued for both work and milk.',
    stats: {
      weight: 'Male: 550-570 kg',
      height: '1.4 - 1.6 m',
      use: 'Dual-purpose',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Very characteristic large, lyre-shaped horns.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Varies from silver-grey to iron-grey or steel black.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Known for its unique "1 ¼ pace" gait (Sawaai chal).',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '19',
    name: 'Kasargod',
    origin: 'Kerala, India',
    image:
      'https://i.ibb.co/zV0qf54S/Gemini-Generated-Image-fah2m4fah2m4fah2-removebg-preview.png',
    description:
      'A dwarf cattle breed from Kerala, one of the smallest in the world, well adapted to humid climates and producing high-fat milk.',
    stats: {
      weight: 'Avg: 100-150 kg',
      height: '0.8 - 1.0 m',
      use: 'Milk / Manure',
    },
    characteristics: [
      { key: 'Horns', value: 'Short and curving forward.', icon: 'flash' },
      {
        key: 'Color',
        value: 'Typically black or dark brown.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Extremely small and compact, requiring minimal feed.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Vulnerable', icon: 'sync-circle' },
    ],
  },
  {
    id: '20',
    name: 'Kenkatha',
    origin: 'Uttar Pradesh, India',
    image: 'https://i.ibb.co/sppwLqCb/kenkatha-1-removebg-preview.png',
    description:
      'A small draught breed from the Bundelkhand region, known for its agility and hardiness in agricultural work.',
    stats: {
      weight: 'Male: 300-350 kg',
      height: '1.1 - 1.2 m',
      use: 'Draught',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Small horns that emerge from the outer angles of the poll.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Grey on the barrel, darkening on the rest of the body.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Small but strong and well-suited for light farming tasks.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '21',
    name: 'Kherigarh',
    origin: 'Uttar Pradesh, India',
    image:
      'https://i.ibb.co/kR4wmvq/4714idea99kherigarh-male-cow-breeds-removebg-preview.png',
    description:
      'A large draught breed from Uttar Pradesh, characterized by its white coat and swift movement, making it ideal for transport.',
    stats: {
      weight: 'Male: 450-500 kg',
      height: '1.3 - 1.5 m',
      use: 'Draught / Transport',
    },
    characteristics: [
      { key: 'Horns', value: 'Long, upward-pointing horns.', icon: 'flash' },
      { key: 'Color', value: 'Almost entirely white.', icon: 'color-palette' },
      {
        key: 'Build',
        value: 'Known for being very active and alert.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '22',
    name: 'Khillari',
    origin: 'Maharashtra, India',
    image:
      'https://i.ibb.co/KxLT2HLV/86cf34b6-d439-4c51-b237-7e673226ba77-removebg-preview.png',
    description:
      'An agile and powerful draught breed from Maharashtra, known for its speed and trotting ability, resembling the Hallikar breed.',
    stats: {
      weight: 'Male: 450-500 kg',
      height: '1.4 - 1.5 m',
      use: 'Draught / Transport',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Long, elegant horns that sweep back and then upwards.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Greyish-white is common.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Compact, muscular, with a distinctive long, narrow head.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '23',
    name: 'Krishna Valley',
    origin: 'Karnataka, India',
    image: 'https://i.ibb.co/KxYhW4RF/generated-image-removebg-preview.png',
    description:
      'A large draught breed from Karnataka, valued for its immense strength in farming the heavy black cotton soil of the region.',
    stats: {
      weight: 'Male: 500-600 kg',
      height: '1.4 - 1.6 m',
      use: 'Draught (Heavy)',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Small horns that curve upwards and inwards.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value:
          'Greyish-white with a darker shade on the fore and hind quarters.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Massive frame with a large hump and loose, pendulous dewlap.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'At Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '24',
    name: 'Malnad gidda',
    origin: 'Karnataka, India',
    image: 'https://i.ibb.co/MDSnBgH5/image-removebg-preview.png',
    description:
      'A dwarf cattle breed from the hilly regions of Karnataka, known for its exceptional disease resistance and low maintenance needs.',
    stats: {
      weight: 'Avg: 80-120 kg',
      height: '0.8 - 0.9 m',
      use: 'Milk / Manure',
    },
    characteristics: [
      { key: 'Horns', value: 'Short and straight.', icon: 'flash' },
      {
        key: 'Color',
        value: 'Black is most common, but can be red or brown.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Very small and hardy, thrives in the local hilly environment.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '25',
    name: 'Mehsana',
    origin: 'Gujarat, India',
    image: 'https://i.ibb.co/8n9qNs1P/image-removebg-preview-1.png',
    description:
      'A high-yield dairy buffalo breed from Gujarat, developed from Murrah and Surti breeds, known for its long lactation period.',
    stats: {
      weight: 'Female: 400-500 kg',
      height: '1.3 - 1.5 m',
      use: 'Dairy (Buffalo)',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Longer and less curled than Murrah horns.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Mostly black, with some animals being brown.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Combines the bulk of the Murrah with the dairy characteristics of the Surti.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '26',
    name: 'Murrah',
    origin: 'Punjab, India',
    image: 'https://i.ibb.co/nMD7jfHW/image-removebg-preview-3.png',
    description:
      'A premier dairy buffalo breed, known as the "black gold" of India for its exceptionally high milk production and tightly curled horns.',
    stats: {
      weight: 'Male: 550-650 kg',
      height: '1.3 - 1.5 m',
      use: 'Dairy (Buffalo)',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Distinctive short, tightly curled horns.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Jet-black, sometimes with white markings on the tail or face.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Stocky, well-built body ideal for high milk yield.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '27',
    name: 'Nagori',
    origin: 'Rajasthan, India',
    image: 'https://i.ibb.co/FLC6Cnyt/image-removebg-preview-2.png',
    description:
      'A fine trotting draught breed from Rajasthan, famous for its speed, stamina, and suitability for agricultural work and transport.',
    stats: {
      weight: 'Male: 400-500 kg',
      height: '1.3 - 1.5 m',
      use: 'Draught / Transport',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Moderate length, curving outwards and upwards.',
        icon: 'flash',
      },
      { key: 'Color', value: 'Mainly white or grey.', icon: 'color-palette' },
      {
        key: 'Build',
        value: 'Long, deep, and powerful frame, known for its active gait.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '28',
    name: 'Nili Ravi',
    origin: 'Punjab, India',
    image: 'https://i.ibb.co/W4JG6r3D/image-removebg-preview-4.png',
    description:
      'A dairy buffalo breed from the Punjab region, easily characterized by its wall eyes (white irises) and white facial markings.',
    stats: {
      weight: 'Male: 600-700 kg',
      height: '1.3 - 1.5 m',
      use: 'Dairy (Buffalo)',
    },
    characteristics: [
      { key: 'Horns', value: 'Small and tightly coiled.', icon: 'flash' },
      {
        key: 'Color',
        value: 'Black with white markings on the forehead, muzzle, and legs.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Deep, medium-sized frame with a characteristic wedge shape.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '29',
    name: 'Nimari',
    origin: 'Madhya Pradesh, India',
    image: 'https://i.ibb.co/BHC8zmkQ/image-removebg-preview-5.png',
    description:
      'A hardy draught breed from Madhya Pradesh, known for its agility, resilience, and suitability for working in rugged terrains.',
    stats: {
      weight: 'Male: 350-450 kg',
      height: '1.2 - 1.3 m',
      use: 'Draught',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Horns are usually curved outwards and upwards.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Red with large splashes of white.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Resembles the Gir breed but is more muscular and less focused on dairy.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '30',
    name: 'Ongole',
    origin: 'Andhra Pradesh, India',
    image: 'https://i.ibb.co/0jzLPR1p/image-removebg-preview-6.png',
    description:
      'A large Zebu breed from Andhra Pradesh, known for its strength, endurance, and global influence, having been exported worldwide.',
    stats: {
      weight: 'Male: 500-600 kg',
      height: '1.5 - 1.7 m',
      use: 'Draught / Dual-purpose',
    },
    characteristics: [
      { key: 'Horns', value: 'Short and stumpy horns.', icon: 'flash' },
      {
        key: 'Color',
        value:
          'Typically white or light grey, with bulls having darker markings.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Large, muscular build with a prominent hump and a majestic appearance.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '31',
    name: 'Rathi',
    origin: 'Rajasthan, India',
    image: 'https://i.ibb.co/qMFLc5X8/image-removebg-preview-7.png',
    description:
      'A respected dual-purpose milch breed from the arid regions of Rajasthan, known for its efficient milk production on minimal forage.',
    stats: {
      weight: 'Male: 300-350 kg',
      height: '1.1 - 1.3 m',
      use: 'Dual-purpose',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Short to medium horns, curving outwards and upwards.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Brown with white patches is most common.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Medium-sized and well-proportioned for both milk and light work.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '32',
    name: 'Red Sindhi',
    origin: 'Sindh, Pakistan',
    image: 'https://i.ibb.co/B20TQQpx/image-removebg-preview-8.png',
    description:
      'A popular heat-tolerant dairy breed, prized for its high milk yield in tropical climates and widely used in crossbreeding programs globally.',
    stats: { weight: 'Male: 400-500 kg', height: '1.2 - 1.4 m', use: 'Dairy' },
    characteristics: [
      {
        key: 'Horns',
        value: 'Thick horns that emerge sideways and curve upwards.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Deep, rich red, with some variations.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value: 'Medium-sized, compact dairy frame with a docile temperament.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '33',
    name: 'Toda',
    origin: 'Tamil Nadu, India',
    image: 'https://i.ibb.co/Y49HRB75/image-removebg-preview-9.png',
    description:
      'A hardy buffalo breed maintained by the Toda tribal community in the Nilgiri Hills, known for its long, crescent-shaped horns.',
    stats: {
      weight: 'Avg: 350-400 kg',
      height: '1.1 - 1.3 m',
      use: 'Milk / Cultural',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Distinctive long, sweeping horns forming a crescent shape.',
        icon: 'flash',
      },
      { key: 'Color', value: 'Fawn or ash-grey coat.', icon: 'color-palette' },
      {
        key: 'Build',
        value:
          'Semi-wild in nature, well-adapted to the high-altitude hilly terrain.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Vulnerable', icon: 'sync-circle' },
    ],
  },
  {
    id: '34',
    name: 'Umblachery',
    origin: 'Tamil Nadu, India',
    image: 'https://i.ibb.co/PzVGDgtX/image-removebg-preview-10.png',
    description:
      'A compact draught breed from the coastal regions of Tamil Nadu, known for its suitability for work in marshy rice fields.',
    stats: {
      weight: 'Male: 300-350 kg',
      height: '1.0 - 1.2 m',
      use: 'Draught',
    },
    characteristics: [
      {
        key: 'Horns',
        value: 'Relatively small horns that spread apart.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Calves are born red, which changes to grey as they mature.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Short legs and a strong build, perfect for wetland agriculture.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Not at Risk', icon: 'sync-circle' },
    ],
  },
  {
    id: '35',
    name: 'Vechur',
    origin: 'Kerala, India',
    image: 'https://i.ibb.co/0yK2kNrD/image-removebg-preview-11.png',
    description:
      'A rare dwarf cattle breed from Kerala, holding the Guinness World Record for the smallest cattle breed, known for its medicinal milk.',
    stats: { weight: 'Avg: 130-170 kg', height: '0.8 - 0.9 m', use: 'Milk' },
    characteristics: [
      {
        key: 'Horns',
        value: 'Small horns that are forward and downward curving.',
        icon: 'flash',
      },
      {
        key: 'Color',
        value: 'Light red, black, or fawn with a white switch.',
        icon: 'color-palette',
      },
      {
        key: 'Build',
        value:
          'Extremely small body, highly disease resistant, and requires very little food.',
        icon: 'sunny',
      },
      { key: 'Conservation Status', value: 'Critical', icon: 'sync-circle' },
    ],
  },
];

export default CATTLE_BREEDS;
