// --- ITEM SELECTED | SIDE MENU --- //
const menuItems = document.querySelectorAll('.component');

menuItems.forEach(item =>
  item.addEventListener('click', function () {
    menuItems.forEach(item => item.classList.remove('selected'));
    this.classList.add('selected');
  })
);

// --- HIDDEN | SIDE MENU --- //
const sideMenu = document.querySelector('.nav');
const button = document.querySelector('.chevron-icon');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
  sideMenu.classList.toggle('hidden');
  container.classList.toggle('changed');
});

// --- BAR CHART | DEMOGRAPHIC --- //
const demographic = {
  first: 83,
  second: 27
};

const demographic_Week = {
  first: 22,
  second: 78
};

const demographic_Month = {
  first: 90,
  second: 10
};

const progressBars = document.querySelectorAll('.progress-bar-group div');

progressBars.forEach(progressBar => {
  const progressBarName = progressBar.className;
  progressBar.style.width = `${demographic[progressBarName]}%`;
});

// --- PROGRESS BAR | TOP CHANNEL --- //
const topChannels = {
  Facebook: 70,
  Instagram: 50,
  Linkedin: 90,
  Youtube: 30
};

const channels = document.querySelectorAll('.channel-name');

channels.forEach(channel => {
  const channelName = channel.textContent;
  const bar = channel.parentElement.querySelector('.progress-bar');
  bar.style.width = `${topChannels[channelName]}%`;
});

// --- CHARTS.JS --- //
// Doughnut //
const doughnutChart = document.getElementById('myChart');

const dataDoughnut = {
  labels: ['Amônia', 'CO2', 'Benzeno', 'Óxido Nítrico'],
  datasets: [
    {
      label: 'Ranking e Umidade',
      data: [33.16, 25.69, 23.68, 17.47],
      backgroundColor: [
        'rgba(253, 31, 155, 1)',
        'rgba(48, 217, 135, 1)',
        'rgba(1, 126, 250, 1)',
        'rgba(255, 251, 10, 1)'
      ],
      hoverOffset: 4,
      cutout: '60%'
    }
  ]
};

const dataDoughnut_Week = {
  labels: ['Amônia', 'CO2', 'Benzeno', 'Óxido Nítrico'],
  datasets: [
    {
      label: 'Ranking e Umidade',
      data: [10, 10, 40, 40],
      backgroundColor: [
        'rgba(253, 31, 155, 1)',
        'rgba(48, 217, 135, 1)',
        'rgba(1, 126, 250, 1)',
        'rgba(255, 251, 10, 1)'
      ],
      hoverOffset: 4,
      cutout: '60%'
    }
  ]
};

const dataDoughnut_Month = {
  labels: ['Amônia', 'CO2', 'Benzeno', 'Óxido Nítrico'],
  datasets: [
    {
      label: 'Ranking e Umidade',
      data: [25, 25, 25, 25],
      backgroundColor: [
        'rgba(253, 31, 155, 1)',
        'rgba(48, 217, 135, 1)',
        'rgba(1, 126, 250, 1)',
        'rgba(255, 251, 10, 1)'
      ],
      hoverOffset: 4,
      cutout: '60%'
    }
  ]
};

const configDoughnut = {
  type: 'doughnut',
  data: dataDoughnut,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { family: "'Poppins', 'sans-serif'", size: 10, weight: 400 },
          padding: 15,
          color: 'rgba(0, 0, 0, 1)',
          usePointStyle: true
        }
      },
      tooltip: { enable: false, position: 'average' }
    }
  }
};

const myChart = new Chart(doughnutChart, configDoughnut);

// --- LINE CHART --- //
const lineChart = document.getElementById('chartMain');

const dataLine = {
  labels: ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h'],
  datasets: [
    {
      label: 'Amônia',
      data: [302, 357, 249, 299, 332, 294, 394, 249, 315, 349, 288, 401, 256, 359, 348, 254, 298, 314, 248, 375, 225, 236, 245, 225],
      backgroundColor: 'rgba(1, 126, 250, 1)',
      borderColor: 'rgba(1, 126, 250, 1)',
      borderWidth: 2
    },
    // other datasets for CO2, Benzeno, Óxido Nítrico ...
  ]
};

const genericOptions = {
  responsive: true,
  hoverBackgroundColor: 'white',
  hoverRadius: 7,
  hoverBorderWidth: 3,
  scales: {
    x: { grid: { display: false } },
    y: {
      min: 0,
      max: 600,
      ticks: { stepSize: 100 },
      grid: { borderDash: [5, 5] }
    }
  },
  layout: {
    padding: { bottom: 10, left: 15, right: 25 }
  },
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      padding: 12,
      titleFont: { family: "'Poppins', 'sans-serif'", size: 12, weight: 'normal' },
      backgroundColor: 'rgba(8, 26, 81, 1)',
      bodyColor: 'rgba(255, 255, 255, 0.7)',
      bodyFont: { family: "'Poppins', 'sans-serif'", size: 11 },
      bodySpacing: 8,
      boxHeight: 6,
      boxPadding: 8,
      usePointStyle: true
    }
  }
};

const lineChartConfig = {
  type: 'line',
  data: dataLine,
  options: genericOptions
};

const chartMainInstance = new Chart(lineChart, lineChartConfig);

// --- FILTER FUNCTION --- //
function mudaFiltro(filtro) {
  const filtros = document.querySelectorAll(".filter");
  const titGrafico = document.querySelector(".text-reach h3");
  const titBarra = document.querySelector(".title-audience");
  const barOne = document.querySelector(".bar-1");
  const barTwo = document.querySelector(".bar-2");
  const barVal1 = document.querySelector(".barra_minimo");
  const barVal2 = document.querySelector(".barra_maximo");

  if (!filtro.classList.contains("selected")) {
    filtros.forEach(f => f.classList.remove("selected"));
    filtro.classList.add("selected");

    if (filtro.getAttribute("aria-label") == "day") {
      titGrafico.innerHTML = "Análise do dia";
      titBarra.innerHTML = "Média de umidade do dia";
      barVal1.innerHTML = "27°C";
      barVal2.innerHTML = "35°C";
      barOne.style.height = "130px";
      barTwo.style.height = "180px";

      myChart.config.data = dataDoughnut;
      myChart.update();

      chartMainInstance.config.data = dataLine;
      chartMainInstance.update();
    }

    // Similarly handle 'week' and 'month' filters...
  }
}
