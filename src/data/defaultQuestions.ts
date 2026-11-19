import { Question } from '../types';

/**
 * Generator Ilustrasi SVG Vektor Akurat untuk Soal Rasio Bergambar
 * Menggunakan elemen SVG murni agar tajam di layar maupun saat dikonversi ke PDF.
 */

function createRatioCardLayout(
  leftLabel: string,
  leftAccent: string,
  leftBg: string,
  leftItems: string,
  rightLabel: string,
  rightAccent: string,
  rightBg: string,
  rightItems: string
): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="540" height="190" viewBox="0 0 540 190">
  <rect x="0" y="0" width="540" height="190" rx="14" fill="#f8fafc"/>
  <rect x="12" y="12" width="248" height="166" rx="12" fill="${leftBg}" stroke="${leftAccent}" stroke-width="1.5"/>
  <rect x="46" y="20" width="180" height="24" rx="8" fill="#ffffff" stroke="${leftAccent}" stroke-width="1"/>
  <text x="136" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">${leftLabel}</text>
  ${leftItems}
  <rect x="280" y="12" width="248" height="166" rx="12" fill="${rightBg}" stroke="${rightAccent}" stroke-width="1.5"/>
  <rect x="314" y="20" width="180" height="24" rx="8" fill="#ffffff" stroke="${rightAccent}" stroke-width="1"/>
  <text x="404" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a">${rightLabel}</text>
  ${rightItems}
</svg>`;
}

// Gambar 1: 4 Apel Merah vs 6 Apel Hijau (Rasio 4 : 6 = 2 : 3)
function svgApelMerahVsHijau(): string {
  const drawApple = (cx: number, cy: number, fill: string, stroke: string) => `
    <g transform="translate(${cx}, ${cy})">
      <path d="M0,-12 C2,-17 6,-19 9,-17 C6,-13 3,-12 0,-12 Z" fill="#15803d"/>
      <line x1="0" y1="-11" x2="0" y2="-17" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
      <path d="M0,-11 C-10,-15 -18,-5 -15,8 C-13,16 -5,19 0,15 C5,19 13,16 15,8 C18,-5 10,-15 0,-11 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
      <ellipse cx="-6" cy="-4" rx="2.5" ry="5" fill="#ffffff" opacity="0.35" transform="rotate(-20 -6 -4)"/>
    </g>`;

  const redApples = [
    [92, 82],
    [180, 82],
    [92, 138],
    [180, 138],
  ]
    .map(([x, y]) => drawApple(x, y, '#ef4444', '#b91c1c'))
    .join('');

  const greenApples = [
    [336, 82],
    [404, 82],
    [472, 82],
    [336, 138],
    [404, 138],
    [472, 138],
  ]
    .map(([x, y]) => drawApple(x, y, '#22c55e', '#15803d'))
    .join('');

  return createRatioCardLayout(
    'Apel Merah',
    '#fca5a5',
    '#fef2f2',
    redApples,
    'Apel Hijau',
    '#86efac',
    '#f0fdf4',
    greenApples
  );
}

// Gambar 2: 6 Bintang Kuning vs 8 Lingkaran Biru (Rasio 6 : 8 = 3 : 4)
function svgBintangVsLingkaran(): string {
  const drawStar = (cx: number, cy: number) => `
    <polygon points="0,-16 4.7,-5.2 16,-3.8 7.6,4.2 9.8,15.5 0,9.8 -9.8,15.5 -7.6,4.2 -16,-3.8 -4.7,-5.2"
      transform="translate(${cx}, ${cy})" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" stroke-linejoin="round"/>`;

  const drawCircle = (cx: number, cy: number) => `
    <circle cx="${cx}" cy="${cy}" r="14" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
    <circle cx="${cx - 4}" cy="${cy - 4}" r="3.5" fill="#ffffff" opacity="0.35"/>`;

  const stars = [
    [72, 82],
    [136, 82],
    [200, 82],
    [72, 138],
    [136, 138],
    [200, 138],
  ]
    .map(([x, y]) => drawStar(x, y))
    .join('');

  const circles = [
    [318, 82],
    [375, 82],
    [432, 82],
    [489, 82],
    [318, 138],
    [375, 138],
    [432, 138],
    [489, 138],
  ]
    .map(([x, y]) => drawCircle(x, y))
    .join('');

  return createRatioCardLayout(
    'Bintang Kuning',
    '#fde047',
    '#fefce8',
    stars,
    'Lingkaran Biru',
    '#93c5fd',
    '#eff6ff',
    circles
  );
}

// Gambar 3: 9 Pensil vs 6 Buku Tulis (Rasio 9 : 6 = 3 : 2)
function svgPensilVsBuku(): string {
  const drawPencil = (x: number, y: number) => `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="16" width="11" height="58" rx="1.5" fill="#f59e0b" stroke="#b45309" stroke-width="1.2"/>
      <rect x="0" y="74" width="11" height="9" rx="2" fill="#f43f5e" stroke="#be123c" stroke-width="1.2"/>
      <rect x="0" y="70" width="11" height="5" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
      <polygon points="0,16 11,16 5.5,3" fill="#fde68a" stroke="#b45309" stroke-width="1.2"/>
      <polygon points="3.5,8 7.5,8 5.5,2" fill="#1e293b"/>
    </g>`;

  const drawBook = (x: number, y: number) => `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="36" height="44" rx="4" fill="#2563eb" stroke="#1e40af" stroke-width="1.4"/>
      <rect x="0" y="0" width="7" height="44" rx="2" fill="#1d4ed8"/>
      <rect x="12" y="9" width="18" height="9" rx="2" fill="#ffffff"/>
      <line x1="12" y1="26" x2="29" y2="26" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
      <line x1="12" y1="32" x2="25" y2="32" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
    </g>`;

  const pencils = Array.from({ length: 9 }, (_, i) => drawPencil(36 + i * 23, 66)).join('');

  const books = [
    [318, 60],
    [386, 60],
    [454, 60],
    [318, 116],
    [386, 116],
    [454, 116],
  ]
    .map(([x, y]) => drawBook(x, y))
    .join('');

  return createRatioCardLayout(
    'Pensil',
    '#fcd34d',
    '#fffbeb',
    pencils,
    'Buku Tulis',
    '#93c5fd',
    '#eff6ff',
    books
  );
}

// Gambar 4: 5 Balon Merah vs 10 Balon Biru (Rasio 5 : 10 = 1 : 2)
function svgBalonMerahVsBiru(): string {
  const drawBalloon = (cx: number, cy: number, fill: string, stroke: string) => `
    <g transform="translate(${cx}, ${cy})">
      <path d="M0,16 Q-3,22 2,28" fill="none" stroke="#64748b" stroke-width="1.3"/>
      <polygon points="-3,15 3,15 0,12" fill="${stroke}"/>
      <ellipse cx="0" cy="0" rx="12" ry="15" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>
      <ellipse cx="-4" cy="-5" rx="2.5" ry="4.5" fill="#ffffff" opacity="0.4" transform="rotate(-20 -4 -5)"/>
    </g>`;

  const redBalloons = [
    [72, 78],
    [136, 78],
    [200, 78],
    [104, 134],
    [168, 134],
  ]
    .map(([x, y]) => drawBalloon(x, y, '#f43f5e', '#be123c'))
    .join('');

  const blueBalloons = [
    [314, 78],
    [359, 78],
    [404, 78],
    [449, 78],
    [494, 78],
    [314, 134],
    [359, 134],
    [404, 134],
    [449, 134],
    [494, 134],
  ]
    .map(([x, y]) => drawBalloon(x, y, '#0ea5e9', '#0369a1'))
    .join('');

  return createRatioCardLayout(
    'Balon Merah',
    '#fda4af',
    '#fff1f2',
    redBalloons,
    'Balon Biru',
    '#7dd3fc',
    '#f0f9ff',
    blueBalloons
  );
}

// Gambar 5: 4 Persegi Hijau vs 12 Segitiga Oranye (Rasio 4 : 12 = 1 : 3)
function svgPersegiVsSegitiga(): string {
  const drawSquare = (x: number, y: number) => `
    <rect x="${x}" y="${y}" width="32" height="32" rx="4" fill="#10b981" stroke="#047857" stroke-width="1.6"/>`;

  const drawTriangle = (cx: number, cy: number) => `
    <polygon points="0,-13 13,11 -13,11" transform="translate(${cx}, ${cy})" fill="#f97316" stroke="#c2410c" stroke-width="1.5" stroke-linejoin="round"/>`;

  const squares = [
    [78, 66],
    [162, 66],
    [78, 122],
    [162, 122],
  ]
    .map(([x, y]) => drawSquare(x, y))
    .join('');

  const triangles = [
    [318, 72],
    [375, 72],
    [432, 72],
    [489, 72],
    [318, 110],
    [375, 110],
    [432, 110],
    [489, 110],
    [318, 148],
    [375, 148],
    [432, 148],
    [489, 148],
  ]
    .map(([x, y]) => drawTriangle(x, y))
    .join('');

  return createRatioCardLayout(
    'Persegi Hijau',
    '#6ee7b7',
    '#ecfdf5',
    squares,
    'Segitiga Oranye',
    '#fdba74',
    '#fff7ed',
    triangles
  );
}

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // 1. 4 SOAL PILIHAN GANDA BIASA & MUDAH — PERKALIAN PECAHAN (No. 1 - 4)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    elemen: 'Bilangan',
    levelKognitif: 'L1',
    text: 'Hasil dari 2/3 × 4/5 adalah...',
    options: [
      { id: 'A', text: '6/8' },
      { id: 'B', text: '8/15' },
      { id: 'C', text: '8/8' },
      { id: 'D', text: '10/12' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada perkalian pecahan, kalikan pembilang dengan pembilang dan penyebut dengan penyebut:\n2/3 × 4/5 = (2 × 4) / (3 × 5) = 8/15.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    elemen: 'Bilangan',
    levelKognitif: 'L1',
    text: 'Hasil perkalian dari 3/4 × 2/9 dalam bentuk paling sederhana adalah...',
    options: [
      { id: 'A', text: '1/6' },
      { id: 'B', text: '1/4' },
      { id: 'C', text: '2/9' },
      { id: 'D', text: '5/13' },
    ],
    correctAnswer: 'A',
    explanation:
      '3/4 × 2/9 = (3 × 2) / (4 × 9) = 6/36.\nSederhanakan dengan membagi pembilang dan penyebut dengan 6:\n6/36 = 1/6.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    elemen: 'Bilangan',
    levelKognitif: 'L1',
    text: 'Hasil dari 5 × 3/10 dalam bentuk pecahan campuran paling sederhana adalah...',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1 1/4' },
      { id: 'C', text: '1 1/2' },
      { id: 'D', text: '2 1/2' },
    ],
    correctAnswer: 'C',
    explanation:
      '5 × 3/10 = (5 × 3) / 10 = 15/10.\nSederhanakan dengan membagi 5: 15/10 = 3/2 = 1 1/2.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    elemen: 'Bilangan',
    levelKognitif: 'L1',
    text: 'Hasil dari 4/7 × 7/8 dalam bentuk paling sederhana adalah...',
    options: [
      { id: 'A', text: '1/4' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '4/7' },
      { id: 'D', text: '7/8' },
    ],
    correctAnswer: 'B',
    explanation:
      '4/7 × 7/8 = (4 × 7) / (7 × 8) = 28/56.\nAtau coret bilangan 7 pada pembilang dan penyebut sehingga tersisa 4/8 = 1/2.',
  },

  // =========================================================================
  // 2. 4 SOAL PILIHAN GANDA BIASA & SULIT — PERKALIAN PECAHAN (No. 5 - 8)
  // =========================================================================
  {
    id: 5,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sukar',
    elemen: 'Bilangan',
    levelKognitif: 'L3',
    text: 'Hasil dari 2 1/4 × 1 3/5 adalah...',
    options: [
      { id: 'A', text: '2 3/5' },
      { id: 'B', text: '3 1/5' },
      { id: 'C', text: '3 3/5' },
      { id: 'D', text: '4 1/5' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ubah terlebih dahulu menjadi pecahan biasa:\n2 1/4 = 9/4 dan 1 3/5 = 8/5.\n9/4 × 8/5 = 72/20 = 18/5 = 3 3/5.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sukar',
    elemen: 'Bilangan',
    levelKognitif: 'L3',
    text: 'Hasil dari 1 2/3 × 0,45 × 4/5 adalah...',
    options: [
      { id: 'A', text: '2/5' },
      { id: 'B', text: '3/5' },
      { id: 'C', text: '4/5' },
      { id: 'D', text: '3/4' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ubah semua ke pecahan biasa:\n1 2/3 = 5/3 dan 0,45 = 45/100 = 9/20.\n5/3 × 9/20 × 4/5 = (5 × 9 × 4) / (3 × 20 × 5) = 180/300 = 3/5.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sukar',
    elemen: 'Bilangan',
    levelKognitif: 'L3',
    text: 'Diketahui 3 1/3 × n = 2 1/2. Nilai pecahan n dalam bentuk paling sederhana adalah...',
    options: [
      { id: 'A', text: '2/3' },
      { id: 'B', text: '3/4' },
      { id: 'C', text: '4/5' },
      { id: 'D', text: '5/6' },
    ],
    correctAnswer: 'B',
    explanation:
      '3 1/3 = 10/3 dan 2 1/2 = 5/2.\n(10/3) × n = 5/2\nn = (5/2) ÷ (10/3) = (5/2) × (3/10) = 15/20 = 3/4.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sukar',
    elemen: 'Bilangan',
    levelKognitif: 'L3',
    text: 'Hasil dari (2 1/2 × 1 1/5) × 75% dalam bentuk pecahan campuran adalah...',
    options: [
      { id: 'A', text: '1 3/4' },
      { id: 'B', text: '2 1/4' },
      { id: 'C', text: '2 1/2' },
      { id: 'D', text: '2 3/4' },
    ],
    correctAnswer: 'B',
    explanation:
      '2 1/2 × 1 1/5 = 5/2 × 6/5 = 30/10 = 3.\n75% = 75/100 = 3/4.\n3 × 3/4 = 9/4 = 2 1/4.',
  },

  // =========================================================================
  // 3. 4 SOAL PILIHAN GANDA BIASA & MUDAH — PEMBAGIAN PECAHAN (No. 9 - 12)
  // =========================================================================
  {
    id: 9,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    elemen: 'Bilangan',
    levelKognitif: 'L1',
    text: 'Hasil dari 3/4 ÷ 1/2 adalah...',
    options: [
      { id: 'A', text: '3/8' },
      { id: 'B', text: '1 1/4' },
      { id: 'C', text: '1 1/2' },
      { id: 'D', text: '2 1/2' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada pembagian pecahan, ubah tanda bagi menjadi kali dan balik pecahan pembaginya:\n3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2 = 1 1/2.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    elemen: 'Bilangan',
    levelKognitif: 'L1',
    text: 'Hasil dari 4/5 ÷ 2 dalam bentuk paling sederhana adalah...',
    options: [
      { id: 'A', text: '1/5' },
      { id: 'B', text: '2/5' },
      { id: 'C', text: '3/5' },
      { id: 'D', text: '8/5' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bilangan bulat 2 sama dengan 2/1.\n4/5 ÷ 2/1 = 4/5 × 1/2 = 4/10 = 2/5.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    elemen: 'Bilangan',
    levelKognitif: 'L1',
    text: 'Hasil dari 6 ÷ 3/4 adalah...',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctAnswer: 'C',
    explanation:
      '6 ÷ 3/4 = 6 × 4/3 = 24/3 = 8.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    elemen: 'Bilangan',
    levelKognitif: 'L1',
    text: 'Hasil dari 5/6 ÷ 5/12 adalah...',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '6' },
    ],
    correctAnswer: 'B',
    explanation:
      '5/6 ÷ 5/12 = 5/6 × 12/5 = 60/30 = 2.',
  },

  // =========================================================================
  // 4. 4 SOAL PILIHAN GANDA BIASA & SULIT — PEMBAGIAN PECAHAN (No. 13 - 16)
  // =========================================================================
  {
    id: 13,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sukar',
    elemen: 'Bilangan',
    levelKognitif: 'L3',
    text: 'Hasil dari 4 1/2 ÷ 1 4/5 adalah...',
    options: [
      { id: 'A', text: '1 1/2' },
      { id: 'B', text: '2 1/4' },
      { id: 'C', text: '2 1/2' },
      { id: 'D', text: '3 1/2' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ubah ke pecahan biasa: 4 1/2 = 9/2 dan 1 4/5 = 9/5.\n(9/2) ÷ (9/5) = (9/2) × (5/9) = 5/2 = 2 1/2.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sukar',
    elemen: 'Bilangan',
    levelKognitif: 'L3',
    text: 'Hasil dari 3 3/4 ÷ 0,25 ÷ 1 1/2 adalah...',
    options: [
      { id: 'A', text: '5' },
      { id: 'B', text: '8' },
      { id: 'C', text: '10' },
      { id: 'D', text: '12' },
    ],
    correctAnswer: 'C',
    explanation:
      '3 3/4 = 15/4, 0,25 = 1/4, dan 1 1/2 = 3/2.\nLangkah 1: (15/4) ÷ (1/4) = 15/4 × 4/1 = 15.\nLangkah 2: 15 ÷ (3/2) = 15 × 2/3 = 10.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sukar',
    elemen: 'Bilangan',
    levelKognitif: 'L3',
    text: 'Jika 5 1/4 ÷ p = 2 1/3, maka nilai p yang memenuhi adalah...',
    options: [
      { id: 'A', text: '1 3/4' },
      { id: 'B', text: '2 1/4' },
      { id: 'C', text: '2 1/2' },
      { id: 'D', text: '3 1/4' },
    ],
    correctAnswer: 'B',
    explanation:
      '5 1/4 = 21/4 dan 2 1/3 = 7/3.\np = (21/4) ÷ (7/3) = (21/4) × (3/7) = (3 × 3) / 4 = 9/4 = 2 1/4.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sukar',
    elemen: 'Bilangan',
    levelKognitif: 'L3',
    text: 'Hasil dari (3 1/5 ÷ 4/5) ÷ 1 3/5 adalah...',
    options: [
      { id: 'A', text: '2 1/2' },
      { id: 'B', text: '3 1/5' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5/8' },
    ],
    correctAnswer: 'A',
    explanation:
      '3 1/5 = 16/5 dan 1 3/5 = 8/5.\nDalam kurung: (16/5) ÷ (4/5) = (16/5) × (5/4) = 4.\nSelanjutnya: 4 ÷ (8/5) = 4 × (5/8) = 20/8 = 5/2 = 2 1/2.',
  },

  // =========================================================================
  // 5. 2 SOAL CERITA — PERKALIAN PECAHAN (No. 17 - 18)
  // =========================================================================
  {
    id: 17,
    type: 'pg',
    topic: 'Soal Cerita Perkalian Pecahan',
    difficulty: 'Sedang',
    elemen: 'Bilangan',
    levelKognitif: 'L2',
    text: 'Ibu membeli 3 1/2 kg tepung terigu untuk membuat kue. Sebanyak 3/5 bagian dari seluruh tepung tersebut digunakan untuk membuat bolu kukus. Berapa kilogram tepung terigu yang digunakan untuk membuat bolu kukus?',
    options: [
      { id: 'A', text: '1 2/5 kg' },
      { id: 'B', text: '2 1/10 kg' },
      { id: 'C', text: '2 3/10 kg' },
      { id: 'D', text: '2 1/2 kg' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tepung yang digunakan = 3/5 × 3 1/2 kg\n= 3/5 × 7/2\n= 21/10 kg = 2 1/10 kg.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Soal Cerita Perkalian Pecahan',
    difficulty: 'Sedang',
    elemen: 'Bilangan',
    levelKognitif: 'L2',
    text: 'Sebuah kebun sekolah berbentuk persegi panjang dengan ukuran panjang 12 1/2 meter dan lebar 6 2/5 meter. Berapakah luas kebun sekolah tersebut?',
    options: [
      { id: 'A', text: '72 m²' },
      { id: 'B', text: '75 m²' },
      { id: 'C', text: '80 m²' },
      { id: 'D', text: '84 m²' },
    ],
    correctAnswer: 'C',
    explanation:
      'Luas persegi panjang = panjang × lebar\n= 12 1/2 × 6 2/5\n= 25/2 × 32/5 = (25 ÷ 5) × (32 ÷ 2) = 5 × 16 = 80 m².',
  },

  // =========================================================================
  // 6. 2 SOAL CERITA — PEMBAGIAN PECAHAN (No. 19 - 20)
  // =========================================================================
  {
    id: 19,
    type: 'pg',
    topic: 'Soal Cerita Pembagian Pecahan',
    difficulty: 'Sedang',
    elemen: 'Bilangan',
    levelKognitif: 'L2',
    text: 'Pak Budi memiliki persediaan 7 1/2 liter madu hutan. Seluruh madu tersebut akan dikemas ke dalam botol-botol kecil berukuran 3/8 liter. Berapa banyak botol kecil yang dibutuhkan Pak Budi?',
    options: [
      { id: 'A', text: '15 botol' },
      { id: 'B', text: '18 botol' },
      { id: 'C', text: '20 botol' },
      { id: 'D', text: '24 botol' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak botol = Total madu ÷ Isi tiap botol\n= 7 1/2 ÷ 3/8\n= 15/2 × 8/3 = (15 ÷ 3) × (8 ÷ 2) = 5 × 4 = 20 botol.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Soal Cerita Pembagian Pecahan',
    difficulty: 'Sedang',
    elemen: 'Bilangan',
    levelKognitif: 'L2',
    text: 'Sebuah pita sepanjang 9 3/4 meter dipotong menjadi beberapa bagian yang sama panjang. Jika panjang setiap potongan pita adalah 1 5/8 meter, berapa banyak potongan pita yang dihasilkan?',
    options: [
      { id: 'A', text: '4 potongan' },
      { id: 'B', text: '5 potongan' },
      { id: 'C', text: '6 potongan' },
      { id: 'D', text: '8 potongan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak potongan = 9 3/4 ÷ 1 5/8\n= 39/4 ÷ 13/8\n= 39/4 × 8/13 = (39 ÷ 13) × (8 ÷ 4) = 3 × 2 = 6 potongan.',
  },

  // =========================================================================
  // 7. 10 SOAL RASIO MUDAH (5 BERGAMBAR + 5 TANPA GAMBAR) (No. 21 - 30)
  // =========================================================================
  {
    id: 21,
    type: 'pg',
    topic: 'Rasio (Bergambar)',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    imageSvg: svgApelMerahVsHijau(),
    text: 'Perhatikan gambar kumpulan buah apel berikut! Perbandingan paling sederhana antara banyak apel merah dan banyak apel hijau adalah...',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '2 : 3' },
      { id: 'C', text: '3 : 2' },
      { id: 'D', text: '4 : 5' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak apel merah pada gambar = 4 buah.\nBanyak apel hijau pada gambar = 6 buah.\nPerbandingan = 4 : 6. Sederhanakan dengan membagi 2 menjadi 2 : 3.',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Rasio (Bergambar)',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    imageSvg: svgBintangVsLingkaran(),
    text: 'Amati gambar bangun berikut! Rasio banyak bintang kuning terhadap banyak lingkaran biru dalam bentuk paling sederhana adalah...',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 4' },
      { id: 'C', text: '4 : 3' },
      { id: 'D', text: '3 : 5' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak bintang kuning = 6 buah.\nBanyak lingkaran biru = 8 buah.\nRasio = 6 : 8. Sederhanakan dengan membagi 2 menjadi 3 : 4.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Rasio (Bergambar)',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    imageSvg: svgPensilVsBuku(),
    text: 'Perhatikan gambar alat tulis di atas! Perbandingan banyak pensil terhadap banyak buku tulis dalam bentuk paling sederhana adalah...',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '3 : 4' },
      { id: 'D', text: '4 : 3' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak pensil = 9 buah.\nBanyak buku tulis = 6 buah.\nPerbandingan = 9 : 6. Sederhanakan dengan membagi 3 menjadi 3 : 2.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Rasio (Bergambar)',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    imageSvg: svgBalonMerahVsBiru(),
    text: 'Perhatikan gambar balon di atas! Perbandingan paling sederhana antara banyak balon merah dan banyak balon biru adalah...',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '1 : 3' },
      { id: 'C', text: '2 : 1' },
      { id: 'D', text: '5 : 8' },
    ],
    correctAnswer: 'A',
    explanation:
      'Banyak balon merah = 5 buah.\nBanyak balon biru = 10 buah.\nPerbandingan = 5 : 10. Sederhanakan dengan membagi 5 menjadi 1 : 2.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Rasio (Bergambar)',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    imageSvg: svgPersegiVsSegitiga(),
    text: 'Amati gambar bangun datar berikut! Perbandingan banyak persegi hijau terhadap banyak segitiga oranye dalam bentuk paling sederhana adalah...',
    options: [
      { id: 'A', text: '1 : 3' },
      { id: 'B', text: '1 : 4' },
      { id: 'C', text: '3 : 1' },
      { id: 'D', text: '2 : 3' },
    ],
    correctAnswer: 'A',
    explanation:
      'Banyak persegi hijau = 4 buah.\nBanyak segitiga oranye = 12 buah.\nPerbandingan = 4 : 12. Sederhanakan dengan membagi 4 menjadi 1 : 3.',
  },
  {
    id: 26,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    text: 'Bentuk paling sederhana dari rasio 15 : 25 adalah...',
    options: [
      { id: 'A', text: '2 : 5' },
      { id: 'B', text: '3 : 5' },
      { id: 'C', text: '5 : 3' },
      { id: 'D', text: '3 : 4' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bagi kedua bilangan dengan FPB-nya yaitu 5:\n15 ÷ 5 = 3 dan 25 ÷ 5 = 5.\nJadi bentuk paling sederhananya adalah 3 : 5.',
  },
  {
    id: 27,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    text: 'Di dalam sebuah keranjang terdapat 12 buah jeruk dan 16 buah mangga. Perbandingan paling sederhana antara banyak jeruk dan mangga adalah...',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 4' },
      { id: 'C', text: '4 : 3' },
      { id: 'D', text: '3 : 5' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jeruk : Mangga = 12 : 16.\nBagi keduanya dengan 4 menjadi 3 : 4.',
  },
  {
    id: 28,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    text: 'Perbandingan panjang pita merah dan pita putih adalah 2 : 5. Jika panjang pita merah adalah 10 cm, maka panjang pita putih adalah...',
    options: [
      { id: 'A', text: '15 cm' },
      { id: 'B', text: '20 cm' },
      { id: 'C', text: '25 cm' },
      { id: 'D', text: '30 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pita merah = 2 bagian = 10 cm, maka 1 bagian = 10 ÷ 2 = 5 cm.\nPita putih = 5 bagian = 5 × 5 cm = 25 cm.',
  },
  {
    id: 29,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    text: 'Di kelas VI terdapat 14 siswa laki-laki dan 21 siswa perempuan. Rasio banyak siswa laki-laki terhadap seluruh siswa di kelas VI adalah...',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '2 : 5' },
      { id: 'C', text: '3 : 5' },
      { id: 'D', text: '3 : 7' },
    ],
    correctAnswer: 'B',
    explanation:
      'Total seluruh siswa = 14 + 21 = 35 siswa.\nRasio laki-laki : seluruh siswa = 14 : 35.\nSederhanakan dengan membagi 7 menjadi 2 : 5.',
  },
  {
    id: 30,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Mudah',
    elemen: 'Aljabar',
    levelKognitif: 'L1',
    text: 'Bentuk paling sederhana dari rasio 30 menit : 2 jam adalah...',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '1 : 3' },
      { id: 'C', text: '1 : 4' },
      { id: 'D', text: '3 : 2' },
    ],
    correctAnswer: 'C',
    explanation:
      'Samakan satuan ke menit: 2 jam = 2 × 60 = 120 menit.\nRasio = 30 : 120. Bagi keduanya dengan 30 menjadi 1 : 4.',
  },

  // =========================================================================
  // 8. 5 SOAL RASIO SULIT (No. 31 - 35)
  // =========================================================================
  {
    id: 31,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Sukar',
    elemen: 'Aljabar',
    levelKognitif: 'L3',
    text: 'Diketahui perbandingan A : B = 2 : 3 dan B : C = 4 : 5. Jika nilai A adalah 16, maka nilai C adalah...',
    options: [
      { id: 'A', text: '24' },
      { id: 'B', text: '28' },
      { id: 'C', text: '30' },
      { id: 'D', text: '36' },
    ],
    correctAnswer: 'C',
    explanation:
      'Samakan perbandingan B dengan KPK(3, 4) = 12:\nA : B = 2 : 3 = 8 : 12\nB : C = 4 : 5 = 12 : 15\nSehingga A : B : C = 8 : 12 : 15.\nJika A = 16, maka 1 bagian = 16 ÷ 8 = 2.\nNilai C = 15 × 2 = 30.',
  },
  {
    id: 32,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Sukar',
    elemen: 'Aljabar',
    levelKognitif: 'L3',
    text: 'Perbandingan uang Raka, Sinta, dan Tino adalah 3 : 5 : 7. Jika selisih uang Tino dan Raka adalah Rp48.000,00, berapakah jumlah uang mereka bertiga seluruhnya?',
    options: [
      { id: 'A', text: 'Rp144.000,00' },
      { id: 'B', text: 'Rp160.000,00' },
      { id: 'C', text: 'Rp180.000,00' },
      { id: 'D', text: 'Rp192.000,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Selisih bagian Tino dan Raka = 7 - 3 = 4 bagian = Rp48.000,00.\nNilai 1 bagian = Rp48.000,00 ÷ 4 = Rp12.000,00.\nJumlah bagian seluruhnya = 3 + 5 + 7 = 15 bagian.\nTotal uang = 15 × Rp12.000,00 = Rp180.000,00.',
  },
  {
    id: 33,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Sukar',
    elemen: 'Aljabar',
    levelKognitif: 'L3',
    text: 'Perbandingan banyak kelereng Arman dan Beni mula-mula adalah 2 : 5. Setelah Arman diberi 18 kelereng lagi oleh kakaknya, banyak kelereng Arman menjadi sama dengan banyak kelereng Beni. Berapakah jumlah kelereng mereka berdua mula-mula?',
    options: [
      { id: 'A', text: '36 kelereng' },
      { id: 'B', text: '42 kelereng' },
      { id: 'C', text: '48 kelereng' },
      { id: 'D', text: '54 kelereng' },
    ],
    correctAnswer: 'B',
    explanation:
      'Selisih perbandingan awal = 5 - 2 = 3 bagian.\nKarena tambahan 18 kelereng membuat jumlah keduanya sama, maka 3 bagian = 18 kelereng, sehingga 1 bagian = 6 kelereng.\nJumlah mula-mula = (2 + 5) × 6 = 7 × 6 = 42 kelereng.',
  },
  {
    id: 34,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Sukar',
    elemen: 'Aljabar',
    levelKognitif: 'L3',
    text: 'Pekerjaan mengecat pagar sekolah dapat diselesaikan oleh 6 orang pekerja dalam waktu 12 hari. Jika pekerjaan tersebut ingin dipercepat menjadi 8 hari, berapa orang pekerja tambahan yang dibutuhkan?',
    options: [
      { id: 'A', text: '2 orang' },
      { id: 'B', text: '3 orang' },
      { id: 'C', text: '4 orang' },
      { id: 'D', text: '9 orang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Gunakan perbandingan berbalik nilai:\n6 pekerja × 12 hari = n pekerja × 8 hari\n72 = 8 × n → n = 72 ÷ 8 = 9 pekerja total.\nPekerja tambahan = 9 - 6 = 3 orang.',
  },
  {
    id: 35,
    type: 'pg',
    topic: 'Rasio',
    difficulty: 'Sukar',
    elemen: 'Aljabar',
    levelKognitif: 'L3',
    text: 'Bentuk paling sederhana dari rasio 1 1/2 : 2,25 adalah...',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '2 : 3' },
      { id: 'C', text: '3 : 4' },
      { id: 'D', text: '3 : 5' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ubah ke bentuk pecahan berpenyebut sama atau desimal:\n1 1/2 = 3/2 = 6/4 dan 2,25 = 2 1/4 = 9/4.\nRasio = (6/4) : (9/4) = 6 : 9.\nSederhanakan dengan membagi 3 menjadi 2 : 3.',
  },

  // =========================================================================
  // 9. 5 SOAL CERITA RASIO (No. 36 - 40)
  // =========================================================================
  {
    id: 36,
    type: 'pg',
    topic: 'Soal Cerita Rasio',
    difficulty: 'Sedang',
    elemen: 'Aljabar',
    levelKognitif: 'L2',
    text: 'Untuk membuat sirup jeruk yang segar, Ibu mencampurkan 2 gelas sirup dengan 5 gelas air matang. Jika Ibu ingin membuat minuman dengan menggunakan 6 gelas sirup, berapa gelas air matang yang diperlukan agar rasanya tetap sama?',
    options: [
      { id: 'A', text: '10 gelas' },
      { id: 'B', text: '12 gelas' },
      { id: 'C', text: '15 gelas' },
      { id: 'D', text: '18 gelas' },
    ],
    correctAnswer: 'C',
    explanation:
      'Perbandingan sirup : air = 2 : 5.\nBanyak sirup menjadi 6 gelas (3 kali lipat dari 2 gelas).\nMaka air matang yang diperlukan = 3 × 5 = 15 gelas.',
  },
  {
    id: 37,
    type: 'pg',
    topic: 'Soal Cerita Rasio',
    difficulty: 'Sedang',
    elemen: 'Aljabar',
    levelKognitif: 'L2',
    text: 'Perbandingan umur Kakek dan umur Edo saat ini adalah 9 : 2. Jika jumlah umur mereka berdua adalah 77 tahun, berapakah umur Edo saat ini?',
    options: [
      { id: 'A', text: '12 tahun' },
      { id: 'B', text: '14 tahun' },
      { id: 'C', text: '16 tahun' },
      { id: 'D', text: '18 tahun' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jumlah perbandingan = 9 + 2 = 11 bagian.\nUmur Edo = (2 / 11) × 77 tahun = 2 × 7 = 14 tahun.',
  },
  {
    id: 38,
    type: 'pg',
    topic: 'Soal Cerita Rasio',
    difficulty: 'Sedang',
    elemen: 'Aljabar',
    levelKognitif: 'L2',
    text: 'Sebuah peta Kabupaten Jembrana memiliki skala 1 : 250.000. Jika jarak antara SD Negeri 2 Loloan Timur dan Pantai Delod Berawah pada peta adalah 4 cm, berapakah jarak sebenarnya kedua tempat tersebut?',
    options: [
      { id: 'A', text: '1 km' },
      { id: 'B', text: '10 km' },
      { id: 'C', text: '25 km' },
      { id: 'D', text: '100 km' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jarak sebenarnya = Jarak pada peta × Penyebut skala\n= 4 cm × 250.000 = 1.000.000 cm.\nUbah cm ke km (dibagi 100.000): 1.000.000 ÷ 100.000 = 10 km.',
  },
  {
    id: 39,
    type: 'pg',
    topic: 'Soal Cerita Rasio',
    difficulty: 'Sedang',
    elemen: 'Aljabar',
    levelKognitif: 'L2',
    text: 'Sebuah mobil membutuhkan 6 liter bensin untuk menempuh jarak 72 km. Jika di dalam tangki mobil tersebut tersedia 10 liter bensin, berapa jarak terjauh yang dapat ditempuh?',
    options: [
      { id: 'A', text: '108 km' },
      { id: 'B', text: '112 km' },
      { id: 'C', text: '120 km' },
      { id: 'D', text: '144 km' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jarak per 1 liter bensin = 72 km ÷ 6 liter = 12 km/liter.\nDengan 10 liter bensin, jarak tempuh = 10 × 12 km = 120 km.',
  },
  {
    id: 40,
    type: 'pg',
    topic: 'Soal Cerita Rasio',
    difficulty: 'Sedang',
    elemen: 'Aljabar',
    levelKognitif: 'L2',
    text: 'Dalam sebuah kotak terdapat bola merah dan bola biru dengan perbandingan 4 : 7. Jika banyak bola biru adalah 28 buah, berapakah selisih banyak bola biru dan bola merah di dalam kotak tersebut?',
    options: [
      { id: 'A', text: '12 buah' },
      { id: 'B', text: '14 buah' },
      { id: 'C', text: '16 buah' },
      { id: 'D', text: '20 buah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bola biru = 7 bagian = 28 buah → 1 bagian = 28 ÷ 7 = 4 buah.\nSelisih perbandingan = 7 - 4 = 3 bagian.\nSelisih banyak bola = 3 × 4 = 12 buah.',
  },
];
