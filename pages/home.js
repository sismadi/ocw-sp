pages.home = [
    // 1. HERO
    {
        section: 'hero',
        title: 'Open Courseware Simulasi & Pemodelan',
        tagline: 'Dari Terminologi hingga Simulasi Antrean Terpadu — Satu Semester, Satu SimLab.',
        description: 'Platform belajar terbuka untuk mata kuliah Simulasi & Pemodelan. 16 modul terstruktur memandu mahasiswa membangun SimLab — simulasi Discrete Event berbasis JavaScript untuk sistem antrean dan produksi nyata.',
        badges: [
            'JavaScript',
            'Discrete Event Simulation',
            'Random Number Generator',
            '16 Modul',
            'SimLab',
            'License: MIT'
        ],
        cta: {
            text: 'Mulai Belajar',
            link: 'learn'
        },
        imgClass: 'di-donat'
    },

    // 2. KEY FEATURES — diambil dari 4 bagian kurikulum sp.js
    {
        section: 'features',
        items: [
            {
                icon: 'di-code',
                title: 'Fondasi & Prinsip DES',
                content: 'Terminologi pemodelan, siklus hidup simulasi, prinsip Discrete Event Simulation, single server queue, multiserver, dan job shop. 4 pertemuan untuk membangun kerangka simulasi.',
                linkText: 'Mulai Bagian 1 &raquo;',
                linkTarget: 'learn/modul01'
            },
            {
                icon: 'di-web',
                title: 'Random, Distribusi & UTS',
                content: 'Random Number Generator (LCG), uji kualitas RNG, transformasi random variate (inverse, Box-Muller), distribusi diskrit dan kontinu, serta fitting data. Diuji di UTS dengan hitungan manual.',
                linkText: 'Mulai Bagian 2 &raquo;',
                linkTarget: 'learn/modul05'
            },
            {
                icon: 'di-setting',
                title: 'Analisis, Verifikasi & Pemodelan',
                content: 'Analisis input data, uji chi-square, verifikasi dengan trace, validasi statistik dan uji t, pemodelan sistem nyata, jaringan antrean, dan analisis bottleneck.',
                linkText: 'Mulai Bagian 3 &raquo;',
                linkTarget: 'learn/modul09'
            }
        ]
    },

    // 3. KURIKULUM + CARA SITASI
    {
        section: 'article',
        leftCol: {
            subtitle: 'Kurikulum 16 Modul',
            lines: [
                '### Bagian 1: Fondasi Pemodelan & Simulasi',
                '**P1** — Kontrak Kuliah & Pengantar Simulasi & Pemodelan',
                '**P2** — Konsep & Terminologi Pemodelan dan Simulasi',
                '**P3** — Langkah-langkah Simulasi & Jenis Model',
                '**P4** — Prinsip DES, Single Server Queue, Multiserver',
                '---',
                '### Bagian 2: Random, Distribusi & UTS',
                '**P5** — Random Number Generator & Random Variate',
                '**P6** — Distribusi Diskrit & Distribusi Kontinu',
                '**P7** — Review & Integrasi P2–P6',
                '**P8** — UTS: Evaluasi Tengah Semester',
                '---',
                '### Bagian 3: Analisis, Verifikasi & Pemodelan',
                '**P9** — Dasar Pemodelan & Random Discrete Simulation',
                '**P10** — Analisis Input Data & Teknik Verifikasi',
                '**P11** — Analisis Hasil & Validasi',
                '**P12** — Pemodelan',
                '---',
                '### Bagian 4: Pemodelan Lanjut, Simulasi & Evaluasi Akhir',
                '**P13** — Pemodelan Lanjut',
                '**P14** — Simulasi',
                '**P15** — Final Review & Demo P9–P14',
                '**P16/UAS** — Demo Terpadu SimLab'
            ]
        },
        rightCol: {
            subtitle: 'Target Proyek & Cara Sitasi',
            lines: [
                '### Target Proyek Akhir Semester',
                'Mahasiswa membangun **SimLab** — simulasi Discrete Event berbasis JavaScript untuk sistem antrean dan produksi:',
                '```javascript',
                '// Fitur yang wajib berfungsi di UAS:\n// ✅ Model DES: entitas, event, antrean, server\n// ✅ RNG (LCG) + uji rata-rata, varians, chi-square\n// ✅ Distribusi diskrit & kontinu (eksponensial, normal, Poisson)\n// ✅ Simulasi single server & multiserver\n// ✅ Jaringan antrean & analisis bottleneck\n// ✅ Interval kepercayaan & uji t validasi\n// ✅ Visualisasi grafik & laporan analisis\n// ✅ Dokumentasi model, asumsi, dan seed',
                '```',
                '---',
                '### Bobot Penilaian UAS',
                'skill:25%:Fungsionalitas simulasi (DES + RNG + distribusi):Utama',
                'skill:25%:Kualitas analisis & validasi (CI, uji t):Teknis',
                'skill:20%:Inovasi & kedalaman (jaringan, bottleneck):Inovasi',
                'skill:15%:Dokumentasi & repo (model, asumsi):Profesional',
                'skill:15%:Presentasi & demo simulasi:Presentasi',
                '---',
                '### How to Cite This Courseware',
                '**Yogi Kristiyanto.** (2026). *OCW-SP: Open Courseware Simulasi & Pemodelan*. Figshare.'
            ]
        }
    }
];
