const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
const tempDisplay = document.getElementById('currentTemp');
const humidityDisplay = document.getElementById('currentHumidity');
const ctx = document.getElementById('sensorChart').getContext('2d');

const dataPoints = {
  labels: [],
  suhu: [],
  kelembaban: []
};

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dataPoints.labels,
    datasets: [
      {
        label: 'Suhu (°C)',
        data: dataPoints.suhu,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        fill: false,
        tension: 0.3
      },
      {
        label: 'Kelembaban (%)',
        data: dataPoints.kelembaban,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        fill: false,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#ccc'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ccc'
        }
      }
    }
  }
});

// Tombol "Kirim ke Blockchain"
document.getElementById("sendToBlockchain").addEventListener("click", () => {
  const status = document.getElementById("blockchainStatus");
  status.textContent = "📡 Mengirim data ke Blockchain...";
  status.style.color = "#ff0";

  setTimeout(() => {
    status.textContent = "✅ Data berhasil dikirim ke Blockchain!";
    status.style.color = "#0f0";
  }, 1500);
});
