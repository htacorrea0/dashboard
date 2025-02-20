// --- ITEM SELECTED | SIDE MENU --- //
const menuItems = document.querySelectorAll('.component')

*menuItems.forEach(item =>
  item.addEventListener('click', function () {
    menuItems.forEach(item => item.classList.remove('selected'))
    this.classList.add('selected')
  })
)

// --- HIDDEN | SIDE MENU --- //
const sideMenu = document.querySelector('.nav')
const button = document.querySelector('.chevron-icon')
const container = document.querySelector('.container')

button.addEventListener('click', () => {
  sideMenu.classList.toggle('hidden')
  container.classList.toggle('changed')
})
*/
// --- BAR CHART | DEMOGRAPHIC --- //
const demographic = {
  first: 83,
  second: 27
}

const demographic_Week = {
  first: 22,
  second: 78
}

const demographic_Month = {
  first: 90,
  second: 10
}

const progressBars = document.querySelectorAll('.progress-bar-group div')

for (let progressBar of progressBars) {
  const progressBarName = progressBar.className

  progressBar.setAttribute(
    'style',
    `width: ${demographic[`${progressBarName}`]}%`
  )
}

// --- PROGRESS BAR | TOP CHANNEL --- //
const topChannels = {
  Facebook: 70,
  Instagram: 50,
  Linkedin: 90,
  Youtube: 30
}

const channels = document.querySelectorAll('.channel-name')

for (let channel of channels) {
  const channelName = channel.textContent
  const bar = channel.parentElement.childNodes[9].childNodes[1]

  bar.setAttribute('style', `width: ${topChannels[`${channelName}`]}%`)
}

// --- CHARTS.JS --- //
// Doughnut //
const doughnutChart = document.getElementById('myChart')

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
}
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
}
const dataDoughnut_Month = {
  labels: ['Amônia', 'CO2', 'Benzeno', 'Óxido Nítrico'],
  datasets: [
    {
      label: 'Ranking e Umidade',
      data: [25,25,25,25],
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
}

const configDoughnut = {
  type: 'doughnut',
  data: dataDoughnut,
  options: {
    responsive: true,

    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: "'Poppins', 'sans-serif'",
            size: 10,
            weight: 400
          },
          padding: 15,
          color: 'rgba(0, 0, 0, 1)',
          usePointStyle: true
        }
      },
      tooltip: {
        enable: false,
        position: 'average',
        external: 'abc'
      }
    }
  }
}
const configDoughnut_Week = {
  type: 'doughnut',
  data: dataDoughnut_Week,
  options: {
    responsive: true,

    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: "'Poppins', 'sans-serif'",
            size: 10,
            weight: 400
          },
          padding: 15,
          color: 'rgba(0, 0, 0, 1)',
          usePointStyle: true
        }
      },
      tooltip: {
        enable: false,
        position: 'average',
        external: 'abc'
      }
    }
  }
}
const configDoughnut_Month = {
  type: 'doughnut',
  data: dataDoughnut_Month,
  options: {
    responsive: true,

    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: "'Poppins', 'sans-serif'",
            size: 10,
            weight: 400
          },
          padding: 15,
          color: 'rgba(0, 0, 0, 1)',
          usePointStyle: true
        }
      },
      tooltip: {
        enable: false,
        position: 'average',
        external: 'abc'
      }
    }
  }
}

const myChart = new Chart(doughnutChart, configDoughnut)
//let random = Math.floor(Math.random() * (412 - 287));
// Line //
const lineChart = document.getElementById('chartMain')

const dataLine = {
  labels: [
    '0h',
    '1h',
    '2h',
    '3h',
    '4h',
    '5h',
    '6h',
    '7h',
    '8h',
    '9h',
    '10h',
    '11h',
    '12h',
    '13h',
    '14h',
    '15h',
    '16h',
    '17h',
    '18h',
    '19h',
    '20h',
    '21h',
    '22h',
    '23h'
  ],
  datasets: [
    {
      label: 'Amônia',
      data: [302, 357, 249, 299, 332, 294, 394, 249, 315, 349, 288, 401, 256, 359, 348, 254, 298, 314, 248, 375, 225, 236, 245, 225],
      backgroundColor: 'rgba(1, 126, 250, 1)',
      borderColor: 'rgba(1, 126, 250, 1)',
      borderWidth: 2
    },
    {
      label: 'CO2',
      data: [382, 257, 235, 359, 369, 410, 253, 347, 265, 235, 349, 316, 369, 298, 489, 348, 421, 235, 286, 335, 289, 359, 346, 321],
      backgroundColor: 'rgba(48, 217, 135, 1)',
      borderColor: 'rgba(48, 217, 135, 1)',
      borderWidth: 2
    },
    {
      label: 'Benzeno',
      data: [423, 367, 492, 388, 315, 458, 475, 334, 409, 311, 482, 440, 394, 328, 412, 358, 499, 468, 423, 337, 461, 375, 341, 448],
      backgroundColor: 'rgba(253, 31, 155, 1)',
      borderColor: 'rgba(253, 31, 155, 1)',
      borderWidth: 2
    },
    {
      label: 'Óxido nítrico',
      data: [187, 120, 255, 92, 174, 238, 211, 153, 276, 196, 275, 125, 184, 245, 221, 151, 265, 208, 256, 278, 124, 289, 260, 169],
      backgroundColor: 'rgba(255, 251, 10, 1)',
      borderColor: 'rgba(255, 251, 10, 1)',
      borderWidth: 2
    }
  ]
}

const dataLine_Week = {
  labels: [
    '0h',
    '1h',
    '2h',
    '3h',
    '4h',
    '5h',
    '6h',
    '7h',
    '8h',
    '9h',
    '10h',
    '11h',
    '12h',
    '13h',
    '14h',
    '15h',
    '16h',
    '17h',
    '18h',
    '19h',
    '20h',
    '21h',
    '22h',
    '23h'
  ],
  datasets: [
    {
      label: 'Amônia',
      data: [305, 360, 252, 122, 335, 297, 397, 252, 318, 433, 291, 404, 259, 362, 351, 257, 301, 317, 251, 378, 228, 239, 248, 228],
      backgroundColor: 'rgba(1, 126, 250, 1)',
      borderColor: 'rgba(1, 126, 250, 1)',
      borderWidth: 2
    },
    {
      label: 'CO2',
      data: [385, 260, 238, 362, 222, 413, 256, 123, 268, 238, 352, 319, 372, 301, 492, 351, 300, 238, 289, 338, 292, 362, 349, 324],
      backgroundColor: 'rgba(48, 217, 135, 1)',
      borderColor: 'rgba(48, 217, 135, 1)',
      borderWidth: 2
    },
    {
      label: 'Benzeno',
      data: [426, 370, 495, 391, 318, 461, 478, 337, 412, 314, 485, 443, 397, 331, 415, 361, 502, 471, 426, 340, 464, 378, 344, 451],
      backgroundColor: 'rgba(253, 31, 155, 1)',
      borderColor: 'rgba(253, 31, 155, 1)',
      borderWidth: 2
    },
    {
      label: 'Óxido nítrico',
      data: [190, 123, 258, 95, 177, 241, 214, 156, 279, 199, 278, 128, 187, 248, 224, 154, 268, 211, 259, 281, 127, 292, 263, 172],
      backgroundColor: 'rgba(255, 251, 10, 1)',
      borderColor: 'rgba(255, 251, 10, 1)',
      borderWidth: 2
    }
  ]
}

const dataLine_Month = {
  labels: [
    '0h',
    '1h',
    '2h',
    '3h',
    '4h',
    '5h',
    '6h',
    '7h',
    '8h',
    '9h',
    '10h',
    '11h',
    '12h',
    '13h',
    '14h',
    '15h',
    '16h',
    '17h',
    '18h',
    '19h',
    '20h',
    '21h',
    '22h',
    '23h'
  ],
  datasets: [
    {
      label: 'Amônia',
      data: [305, 360, 252, 302, 335, 297, 397, 252, 318, 352, 291, 404, 259, 362, 351, 257, 301, 317, 251, 378, 228, 239, 248, 228],
      backgroundColor: 'rgba(1, 126, 250, 1)',
      borderColor: 'rgba(1, 126, 250, 1)',
      borderWidth: 2
    },
    {
      label: 'CO2',
      data: [385, 260, 238, 362, 372, 200, 256, 350, 268, 238, 352, 319, 372, 301, 398, 351, 424, 238, 289, 338, 292, 362, 349, 324],
      backgroundColor: 'rgba(48, 217, 135, 1)',
      borderColor: 'rgba(48, 217, 135, 1)',
      borderWidth: 2
    },
    {
      label: 'Benzeno',
      data: [426, 370, 495, 391, 318, 461, 478, 337, 412, 150, 100, 443, 397, 331, 415, 361, 502, 471, 426, 340, 464, 378, 344, 451],
      backgroundColor: 'rgba(253, 31, 155, 1)',
      borderColor: 'rgba(253, 31, 155, 1)',
      borderWidth: 2
    },
    {
      label: 'Óxido nítrico',
      data: [190, 123, 258, 95, 177, 241, 214, 156, 120, 199, 278, 128, 500, 120, 224, 154, 268, 211, 259, 281, 127, 292, 263, 172],
      backgroundColor: 'rgba(255, 251, 10, 1)',
      borderColor: 'rgba(255, 251, 10, 1)',
      borderWidth: 2
    }
  ]
}

const genericOptions = {
  responsive: true,
  hoverBackgroundColor: 'white',
  hoverRadius: 7,
  hoverBorderWidth: 3,
  onHover: { mode: ['dataset', 'tooltip'] },
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
    padding: {
      bottom: 10,
      left: 15,
      right: 25
    }
  },
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      padding: 12,
      titleFont: {
        family: "'Poppins', 'sans-serif'",
        size: 12,
        weight: 'normal'
      },
      backgroundColor: 'rgba(8, 26, 81, 1)',
      bodyColor: 'rgba(255, 255, 255, 0.7)',
      bodyFont: {
        family: "'Poppins', 'sans-serif'",
        size: 11
      },
      bodySpacing: 8,
      boxHeight: 6,
      boxPadding: 8,
      usePointStyle: true,
      callbacks: {
        title: ctx => {
          return `${ctx[0].label}`
        },
        label: ctx => {
          return `${ctx.dataset.label}:  ${ctx.raw} ppm`
        }
      }
    }
  }
}

const annotationLine = {
  id: 'annotationLine',
  beforeDraw: chart => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx
      ctx.save()
      const activePoint = chart.tooltip._active[0]
      const display = lineChart.getContext('2d')

      const gradient = display.createLinearGradient(0, 0, 0, 330)

      gradient.addColorStop(0, 'rgba(37, 75, 209, 0)')
      gradient.addColorStop(1, 'rgba(37, 75, 209, 0.1)')

      ctx.beginPath()
      ctx.moveTo(activePoint.element.x, chart.chartArea.top)
      ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
      ctx.lineWidth = 40
      ctx.strokeStyle = gradient
      // ctx.strokeStyle = 'rgba(37, 75, 209, 0.2)'
      ctx.strokeRect(activePoint.element.x, chart.chartArea.top, 0, 282)
      ctx.restore()
    }
  }
}

const lineDash = {
  id: 'lineDash',
  beforeDraw: chart => {
    if (chart.tooltip._active && chart.tooltip._active.length) {
      const ctx = chart.ctx
      ctx.save()
      const activePoint = chart.tooltip._active[0]

      ctx.beginPath()
      ctx.setLineDash([5, 5])
      ctx.moveTo(activePoint.element.x, chart.chartArea.top)
      ctx.lineTo(activePoint.element.x, chart.chartArea.bottom)
      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(1, 126, 250, 0.8)'
      ctx.stroke()
      ctx.restore()
    }
  }
}

const configLine = {
  type: 'line',
  data: dataLine,
  options: genericOptions,
  plugins: [annotationLine, lineDash]
}

const configLine_Week = {
  type: 'line',
  data: dataLine_Week,
  options: genericOptions,
  plugins: [annotationLine, lineDash]
}

const configLine_Month = {
  type: 'line',
  data: dataLine_Month,
  options: genericOptions,
  plugins: [annotationLine, lineDash]
}

const chartMain = new Chart(lineChart, configLine)

function mudaFiltro(filtro) {
  const filtros = document.querySelectorAll(".filter");
  const titGrafico = document.querySelector(".text-reach h3");
  const titBarra = document.querySelector(".title-audience");
  const barOne = document.querySelector(".bar-1");
  const barTwo = document.querySelector(".bar-2");
  const barVal1 = document.querySelector(".barra_minimo");
  const barVal2 = document.querySelector(".barra_maximo");

  if(!filtro.classList.contains("selected")){

    for(let i=0;i < filtros.length;i++){
      if(filtros[i].classList.contains("selected")){
        filtros[i].classList.remove("selected");
      }
    }

    filtro.classList.add("selected");
    if(filtro.getAttribute("aria-label") == "day"){
      titGrafico.innerHTML = "Análise do dia";
      titBarra.innerHTML = "Média de umidade do dia";
      barVal1.innerHTML = "27°C";
      barVal2.innerHTML = "35°C";
      barOne.style.height = "130px";
      barTwo.style.height = "180px";

      myChart.config.data = dataDoughnut;
      myChart.update();

      chartMain.config.data = dataLine;
      chartMain.update();

      for (let progressBar of progressBars) {
        const progressBarName = progressBar.className
      
        progressBar.setAttribute(
          'style',
          `width: ${demographic[`${progressBarName}`]}%`
        )
      }
    }

    if(filtro.getAttribute("aria-label") == "week"){
      titGrafico.innerHTML = "Análise da semana";
      titBarra.innerHTML = "Média de umidade da semana";
      barVal1.innerHTML = "25°C";
      barVal2.innerHTML = "38°C";
      barOne.style.height = "100px";
      barTwo.style.height = "170px";

      myChart.config.data = dataDoughnut_Week;
      myChart.update();

      chartMain.config.data = dataLine_Week;
      chartMain.update();

      for (let progressBar of progressBars) {
        const progressBarName = progressBar.className
      
        progressBar.setAttribute(
          'style',
          `width: ${demographic_Week[`${progressBarName}`]}%`
        )
      }
    }

    if(filtro.getAttribute("aria-label") == "month"){
      titGrafico.innerHTML = "Análise do mês";
      titBarra.innerHTML = "Média de umidade do mês";
      barVal1.innerHTML = "30°C";
      barVal2.innerHTML = "32°C";
      barOne.style.height = "140px";
      barTwo.style.height = "150px";

      myChart.config.data = dataDoughnut_Month;
      myChart.update();

      chartMain.config.data = dataLine_Month;
      chartMain.update();

      for (let progressBar of progressBars) {
        const progressBarName = progressBar.className
      
        progressBar.setAttribute(
          'style',
          `width: ${demographic_Month[`${progressBarName}`]}%`
        )
      }
    }
  }
  
}
