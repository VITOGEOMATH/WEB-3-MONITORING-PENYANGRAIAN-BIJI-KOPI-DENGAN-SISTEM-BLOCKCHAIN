# ☕ WEB 3 MONITORING PENYANGRAIAN BIJI KOPI DENGAN SENSOR DAN BLOCKCHAIN
INTERKONEKSI SISTEM INSTRUMENTASI - INSTITUT TEKNOLOGI SEPULUH NOPEMBER
![alt text](https://github.com/VITOGEOMATH/WEB-3-MONITORING-PENYANGRAIAN-BIJI-KOPI-DENGAN-SISTEM-BLOCKCHAIN/blob/main/GUI%20Monitoring%20WEB%203)
![alt text](https://github.com/VITOGEOMATH/WEB-3-MONITORING-PENYANGRAIAN-BIJI-KOPI-DENGAN-SISTEM-BLOCKCHAIN/blob/main/GUI%20WEB%203%20(2))

## Nama Kelompok : 8

1. **Supervisor** : Ahmad Radhy S.Si. M.Si.  
2. Ahmad Rafli Al Adzani (2042231001)  
3. Muhammad Jidan Baraja (2042231009)  
4. Muhammad Rif'al Faiz Arivito (2042231067)

## LINK PROJECT :
### https://drive.google.com/file/d/15U2q3P6YobHmFJ7lcaOzDBl9Wc-OlSt_/view

## LINK LAPORAN :
### https://docs.google.com/document/d/1uh34bTYC3HWArDAOALmnJyHT0UnrbRa1HvfrBOI-CYI/edit?usp=sharing

## PPT PROJECT :
### https://www.canva.com/design/DAGqucA_gGY/wmv-t1jH3IysHDXTQOUMVw/edit?utm_content=DAGqucA_gGY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## LINK GitHub Py QT Dashboard :
### https://github.com/VITOGEOMATH/SISTEM-MONITORING-dan-KELEMBABAN-UNTUK-GUDANG-FERMENTASI-KOPI

![alt text](https://github.com/VITOGEOMATH/WEB-3-MONITORING-PENYANGRAIAN-BIJI-KOPI-DENGAN-SISTEM-BLOCKCHAIN/blob/main/Plant%20Fermentasi)

Sistem ini dirancang untuk memantau proses **penyangraian biji kopi** secara real-time menggunakan sensor suhu dan kelembaban berbasis Modbus RTU. Data yang diperoleh tidak hanya disimpan di InfluxDB namun juga dicatat di jaringan blockchain Ethereum sebagai bentuk transparansi dan keamanan data.

Inspirasi sistem diambil dari proses penyangraian kopi sebagaimana dijelaskan oleh [CCTCID](https://www.cctcid.com/2018/10/25/penyangraian-biji-kopi/), di mana suhu dan waktu memegang peran penting dalam menghasilkan cita rasa terbaik dari biji kopi.

Proses penyangraian dibagi menjadi 3 tahap utama:
1. **Pengeringan Awal** (drying) → suhu meningkat secara bertahap hingga ±165°C.
2. **Pengembangan** (development) → suhu menuju 185–210°C, terjadi first crack.
3. **Penyangraian Penuh** → suhu puncak 210–220°C tergantung jenis sangrai (light, medium, dark).

---

## 📦 Instalasi & Setup

### 1. Install Python Dependencies

```bash
pip install tokio-modbus tokio-serial matplotlib requests chrono influxdb-client tkinter serde reqwest
```

### 2. Siapkan InfluxDB

- Jalankan atau instal **InfluxDB v2** di localhost.
- Buat konfigurasi berikut:
  - **Organization**
  - **Bucket**
  - **Token**
- Catat nama bucket dan token untuk konfigurasi aplikasi.

### 3. Setup Dashboard Grafana

- Install **Grafana** di lokal atau server.
- Tambahkan data source dari **InfluxDB v2**:
  - URL: `http://localhost:8086`
  - Organization: sesuai konfigurasi
  - Token: token yang dibuat
  - Bucket: nama bucket
- Import dashboard atau buat panel baru:
  - Gunakan query untuk memantau `temperature` dan `humidity`
  - Tambahkan panel gauge dan time series untuk visualisasi realtime

### 4. Konfigurasi Sensor Modbus RTU

- Hubungkan sensor melalui USB ke komputer (gunakan USB-to-RS485 converter).
- Pastikan:
  - Sensor terdeteksi sebagai port serial (misalnya `/dev/ttyUSB0` atau `COM3`)
  - Sensor dapat membaca data dari:
    - **Input Register 1** → Suhu (°C)
    - **Input Register 2** → Kelembaban (%RH)

### 5. Jalankan Server TCP (Rust)

```bash
cargo run --bin tcp_server
# atau
cargo build && ./target/debug/tcp_server
```

### 6. Jalankan Client Pembaca Sensor (Rust)

```bash
cargo run --bin modbus_client
```

---

## 🖥️ Penggunaan Aplikasi GUI (Python)

Jalankan antarmuka monitoring real-time berbasis **Tkinter**:

```bash
python gui.py
```

### 🔧 Fitur GUI:

- ✅ Menampilkan data suhu dan kelembaban secara **real-time** dari **InfluxDB**.
- 📈 Menampilkan **grafik historis** berdasarkan input waktu pengguna.
- 🔔 Peringatan otomatis jika suhu/kelembaban melebihi set-point.
- 💰 Informasi biaya monitoring: Rp. 50 per data.
- ⏰ Input waktu menggunakan format **RFC3339**  
  Contoh: `2025-05-30T08:00:00Z`

---

## 🌐 Integrasi Web 3.0: Monitoring Berbasis Ethereum

Sebagai bentuk inovasi berbasis teknologi **Web 3.0**, sistem ini dilengkapi dengan dashboard web interaktif yang membaca data dari smart contract Ethereum menggunakan **JavaScript** dan **ethers.js**.

### 🔨 Komponen Web:

- **HTML**: Membuat kerangka dashboard, tabel data, dan grafik pemantauan.
- **JavaScript**: Mengakses smart contract Ethereum, membaca event `DataStored`, memproses data suhu dan kelembaban secara dinamis, dan mengupdate DOM dan grafik Chart.js.
- **CSS**: Menyediakan tampilan modern dengan dukungan **dark mode**, responsive layout, dan komponen visual intuitif.

### 🧩 Penjelasan Fungsionalitas:

- Web akan terkoneksi ke Ganache/Metamask melalui **ethers.js**.
- Setelah koneksi berhasil, tombol “Load Sensor Data” akan menampilkan hingga 20 data terakhir dari blockchain.
- Data suhu dan kelembaban disajikan dalam bentuk **grafik interaktif** dan **tabel data**.
- Fitur peringatan otomatis akan muncul jika suhu/kelembaban melampaui ambang batas (set-point) yang dapat dikonfigurasi oleh pengguna.
- Tabel juga menampilkan biaya operasional pemantauan sebesar **Rp. 50 per data** sebagai simulasi model ekonomi.

Dashboard Web3 ini mendemonstrasikan bagaimana **teknologi blockchain** dapat dimanfaatkan dalam **industri pertanian** untuk mencatat data penting secara terdesentralisasi dan tidak dapat dimanipulasi.

---

## 📁 Struktur Proyek

```
proyek-monitoring-sensor/
├── tcp_server.rs         # Server TCP (menggunakan Tokio dan Reqwest)
├── modbus_client.rs      # Client pembaca sensor (Modbus RTU)
├── gui.py                # GUI Python (Tkinter + Matplotlib)
├── index.html            # Web 3 Dashboard
├── script.js             # Ethers.js + Chart.js Logic
├── style.css             # Styling untuk dashboard web
├── Cargo.toml            # Konfigurasi proyek Rust
└── README.md             # Dokumentasi proyek
```

---

## 🚀 Rencana Pengembangan

- ✅ Logging lokal untuk semua data sensor.
- ✅ Validasi waktu input dan format.
- 🔒 Proteksi koneksi TCP melalui autentikasi.
- 📄 Fitur export ke CSV dari grafik historis.
- 🌐 Dukungan konfigurasi melalui file `.env`.
- 📲 Dashboard web berbasis React/Chart.js.
- 🪙 Simulasi tokenisasi data untuk biaya akses.

---

## 📃 Lisensi

Proyek ini dikembangkan untuk keperluan riset dan akademik oleh Kelompok 8.  
Gunakan dengan bijak dan konsultasikan sebelum digunakan dalam produksi.

---

> “Suhu adalah nyawa dari penyangraian kopi. Sedikit salah, rasa kopi pun berubah.”

Referensi: https://www.cctcid.com/2018/10/25/penyangraian-biji-kopi/

