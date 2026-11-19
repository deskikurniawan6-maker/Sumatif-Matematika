import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Matematika
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 40 butir soal Kurikulum Merdeka (Perkalian Pecahan, Pembagian Pecahan, dan Rasio)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi perkalian pecahan biasa dengan pecahan biasa.',
    indikatorSoal: 'Disajikan operasi perkalian dua pecahan biasa sederhana, peserta didik dapat menentukan hasilnya secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi perkalian pecahan biasa dan menyederhanakan hasilnya.',
    indikatorSoal: 'Disajikan operasi perkalian dua pecahan biasa, peserta didik dapat menentukan hasil dalam bentuk paling sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengalikan bilangan asli dengan pecahan biasa.',
    indikatorSoal: 'Disajikan operasi perkalian bilangan asli dengan pecahan biasa, peserta didik dapat menentukan hasilnya dalam bentuk pecahan campuran paling sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengalikan pecahan biasa dengan penyederhanaan silang.',
    indikatorSoal: 'Disajikan perkalian dua pecahan biasa dengan faktor persekutuan pada pembilang dan penyebut, peserta didik dapat menentukan bentuk paling sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi perkalian pecahan campuran dengan pecahan campuran.',
    indikatorSoal: 'Disajikan operasi perkalian dua pecahan campuran, peserta didik dapat mengonversi dan menentukan hasilnya dalam bentuk paling sederhana.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan perkalian beruntun berbagai bentuk pecahan (campuran, desimal, biasa).',
    indikatorSoal: 'Disajikan perkalian tiga bilangan yang terdiri atas pecahan campuran, desimal, dan pecahan biasa, peserta didik dapat menentukan hasil akhirnya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis bilangan pecahan yang belum diketahui dalam kalimat matematika perkalian pecahan.',
    indikatorSoal: 'Disajikan persamaan perkalian pecahan campuran dengan satu variabel belum diketahui, peserta didik dapat menentukan nilai pecahan tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan operasi perkalian campuran antara pecahan campuran dan persen.',
    indikatorSoal: 'Disajikan operasi perkalian dua pecahan campuran yang dikalikan kembali dengan bilangan persen, peserta didik dapat menentukan hasil dalam bentuk pecahan campuran.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi pembagian pecahan biasa dengan pecahan biasa.',
    indikatorSoal: 'Disajikan pembagian dua pecahan biasa sederhana, peserta didik dapat menentukan hasilnya dalam bentuk pecahan campuran.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi pembagian pecahan biasa oleh bilangan asli.',
    indikatorSoal: 'Disajikan pembagian pecahan biasa dengan bilangan bulat, peserta didik dapat menentukan hasilnya dalam bentuk paling sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi pembagian bilangan asli oleh pecahan biasa.',
    indikatorSoal: 'Disajikan pembagian bilangan asli dengan pecahan biasa, peserta didik dapat menentukan hasilnya secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat membagi dua pecahan biasa yang menghasilkan bilangan bulat.',
    indikatorSoal: 'Disajikan pembagian dua pecahan biasa dengan penyebut berkelipatan, peserta didik dapat menghitung hasilnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan operasi pembagian pecahan campuran dengan pecahan campuran.',
    indikatorSoal: 'Disajikan pembagian dua pecahan campuran, peserta didik dapat mengonversi dan menentukan hasil pembagiannya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan pembagian beruntun antara pecahan campuran dan desimal.',
    indikatorSoal: 'Disajikan pembagian tiga bilangan yang memuat pecahan campuran dan desimal, peserta didik dapat menentukan hasil akhirnya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menentukan nilai pembagi dalam kalimat matematika pembagian pecahan campuran.',
    indikatorSoal: 'Disajikan persamaan pembagian pecahan campuran dengan pembagi belum diketahui, peserta didik dapat menentukan nilai pembagi tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan operasi pembagian pecahan bertingkat dengan tanda kurung.',
    indikatorSoal: 'Disajikan operasi pembagian pecahan campuran dan pecahan biasa dengan pengelompokan tanda kurung, peserta didik dapat menentukan hasil akhirnya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan masalah kontekstual sehari-hari yang melibatkan perkalian pecahan.',
    indikatorSoal: 'Disajikan soal cerita pembelian tepung terigu dalam pecahan campuran yang dipakai sebagian (pecahan biasa), peserta didik dapat menghitung berat tepung yang terpakai.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan perkalian pecahan campuran untuk menghitung luas bangun datar dalam soal cerita.',
    indikatorSoal: 'Disajikan soal cerita ukuran panjang dan lebar kebun sekolah dalam pecahan campuran, peserta didik dapat menentukan luas kebun tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan masalah kontekstual yang melibatkan pembagian pecahan.',
    indikatorSoal: 'Disajikan soal cerita pengemasan madu dalam pecahan campuran ke dalam botol berukuran pecahan biasa, peserta didik dapat menghitung jumlah botol yang dibutuhkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan pembagian pecahan campuran untuk menyelesaikan masalah pemotongan benda.',
    indikatorSoal: 'Disajikan soal cerita panjang pita total dan panjang tiap potongan dalam pecahan campuran, peserta didik dapat menentukan banyak potongan pita.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan rasio dua kelompok benda berdasarkan gambar visual.',
    indikatorSoal: 'Disajikan gambar kumpulan apel merah dan apel hijau, peserta didik dapat menentukan rasio paling sederhana dari kedua kelompok buah tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menafsirkan perbandingan jumlah dua jenis bangun dari ilustrasi gambar.',
    indikatorSoal: 'Disajikan gambar bintang kuning dan lingkaran biru, peserta didik dapat menentukan rasio paling sederhana antara keduanya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyatakan perbandingan dua kelompok alat tulis melalui gambar.',
    indikatorSoal: 'Disajikan gambar pensil dan buku tulis, peserta didik dapat menentukan perbandingan paling sederhana antara banyak pensil dan buku tulis.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyederhanakan rasio dua kelompok benda yang disajikan secara visual.',
    indikatorSoal: 'Disajikan gambar balon merah dan balon biru, peserta didik dapat menentukan bentuk perbandingan paling sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan rasio dua jenis bangun datar berdasarkan ilustrasi gambar.',
    indikatorSoal: 'Disajikan gambar persegi hijau dan segitiga oranye, peserta didik dapat menentukan rasio paling sederhana antara banyak persegi dan segitiga.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyederhanakan bentuk rasio dua bilangan cacah.',
    indikatorSoal: 'Disajikan suatu rasio dua bilangan cacah, peserta didik dapat menentukan bentuk paling sederhananya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan perbandingan sederhana dari dua besaran sejenis.',
    indikatorSoal: 'Disajikan banyak buah jeruk dan buah mangga di dalam keranjang, peserta didik dapat menentukan rasio paling sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan nilai satu besaran jika diketahui nilai besaran lainnya dan rasionya.',
    indikatorSoal: 'Disajikan rasio panjang pita merah dan pita putih serta panjang pita merah, peserta didik dapat menghitung panjang pita putih.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan rasio bagian terhadap keseluruhan (part-to-whole).',
    indikatorSoal: 'Disajikan jumlah siswa laki-laki dan perempuan di kelas VI, peserta didik dapat menentukan rasio siswa laki-laki terhadap seluruh siswa.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyederhanakan rasio dua besaran dengan satuan waktu yang berbeda.',
    indikatorSoal: 'Disajikan perbandingan waktu dalam satuan menit dan jam, peserta didik dapat menyamakan satuan dan menyederhanakan rasionya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis dan menggabungkan dua rasio bertingkat (A:B dan B:C).',
    indikatorSoal: 'Disajikan dua rasio yang saling berkaitan dan nilai salah satu unsur, peserta didik dapat menentukan nilai unsur ketiga.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat memecahkan masalah rasio tiga besaran yang diketahui selisih dua unsurnya.',
    indikatorSoal: 'Disajikan perbandingan uang tiga orang beserta selisih uang dua orang, peserta didik dapat menghitung jumlah uang ketiganya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis perubahan rasio akibat penambahan kuantitas pada salah satu unsur.',
    indikatorSoal: 'Disajikan rasio awal dua kelompok kelereng dan informasi penambahan yang membuat keduanya sama banyak, peserta didik dapat menentukan jumlah awal.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan masalah perbandingan berbalik nilai dalam konteks pekerjaan.',
    indikatorSoal: 'Disajikan jumlah pekerja dan waktu penyelesaian awal, peserta didik dapat menghitung jumlah pekerja tambahan jika waktu dipercepat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyederhanakan rasio yang melibatkan pecahan campuran dan bilangan desimal.',
    indikatorSoal: 'Disajikan rasio antara pecahan campuran dan bilangan desimal, peserta didik dapat menentukan bentuk perbandingan bilangan bulat paling sederhana.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan rasio senilai dalam resep atau takaran campuran minuman.',
    indikatorSoal: 'Disajikan soal cerita takaran rasio sirup dan air matang, peserta didik dapat menentukan banyak air matang jika takaran sirup diperbanyak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan soal cerita rasio umur yang diketahui jumlahnya.',
    indikatorSoal: 'Disajikan perbandingan umur dua orang dan jumlah umur keduanya, peserta didik dapat menentukan umur salah satu orang.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan konsep rasio skala peta untuk menghitung jarak sebenarnya.',
    indikatorSoal: 'Disajikan soal cerita skala peta dan jarak dua tempat pada peta, peserta didik dapat menghitung jarak sebenarnya dalam satuan kilometer.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan soal cerita perbandingan senilai tentang konsumsi bahan bakar dan jarak tempuh.',
    indikatorSoal: 'Disajikan jarak tempuh kendaraan untuk sejumlah liter bensin, peserta didik dapat menentukan jarak terjauh untuk volume bensin tertentu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan soal cerita rasio untuk menentukan selisih dua besaran.',
    indikatorSoal: 'Disajikan perbandingan bola merah dan bola biru serta banyak bola biru, peserta didik dapat menghitung selisih kedua jenis bola.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('bilangan') || t.includes('pecahan') || t.includes('fpb') || t.includes('kpk') || t.includes('pangkat')) {
    return 'Bilangan';
  }
  if (t.includes('lingkaran') || t.includes('bangun datar') || t.includes('kubus') || t.includes('geometri') || t.includes('layang')) {
    return 'Geometri';
  }
  if (t.includes('debit') || t.includes('volume') || t.includes('kecepatan') || t.includes('jarak')) {
    return 'Pengukuran';
  }
  if (t.includes('skala') || t.includes('perbandingan') || t.includes('rasio') || t.includes('diskon') || t.includes('bruto') || t.includes('aritmatika')) {
    return 'Aljabar';
  }
  if (t.includes('statistika') || t.includes('diagram') || t.includes('mean') || t.includes('modus') || t.includes('median')) {
    return 'Analisis Data dan Peluang';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
