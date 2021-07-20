function animateValue(obj, start, end, duration) {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    obj.innerHTML = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}

function initNumberAnimation() {
  const clients = document.querySelector('.StatCard__Number--clients')
  animateValue(clients, 0, 1054, 5000)
  const projects = document.querySelector('.StatCard__Number--projects')
  animateValue(projects, 0, 154, 5000)
  const awards = document.querySelector('.StatCard__Number--awards')
  animateValue(awards, 0, 59, 5000)
  const teams = document.querySelector('.StatCard__Number--teams')
  animateValue(teams, 0, 34, 5000)
}

window.addEventListener('DOMContentLoaded', function () {
  const statSection = document.querySelector('#Stats')
  const windowHeight = window.innerHeight * 0.75

  let started = false
  
  window.onscroll = () => {
    if (statSection.getBoundingClientRect().top <= windowHeight) {
      if (started) return
      started = true
      initNumberAnimation()
    }
  }

  window.onscroll()
})
