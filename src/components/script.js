import './ascii-art.js'

window.showSection = function showSection(name) {
  document.querySelectorAll('section').forEach((section) => {
    section.classList.remove('active')
  })

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.classList.remove('active')
  })

  const sectionEl = document.getElementById(name)
  if (sectionEl) {
    sectionEl.classList.remove('active')
    void sectionEl.offsetWidth
    sectionEl.classList.add('active')
  }

  const links = document.querySelectorAll('.nav-links a')
  const order = ['home', 'about', 'projects', 'contact']
  const activeLink = links[order.indexOf(name)]
  if (activeLink) {
    activeLink.classList.add('active')
  }

  if (typeof window.closeMenu === 'function') {
    window.closeMenu()
  }

  window.scrollTo({ top: 0, behavior: 'auto' })

  if (sectionEl) {
    window.playReveal(sectionEl)
  }

  if (name === 'home') {
    window.fitAsciiArt()
  }
}

window.toggleMenu = function toggleMenu() {
  const hamburger = document.getElementById('hamburger')
  const navLinks = document.getElementById('navLinks')

  if (hamburger) {
    hamburger.classList.toggle('active')
  }

  if (navLinks) {
    navLinks.classList.toggle('active')
  }
}

window.closeMenu = function closeMenu() {
  const hamburger = document.getElementById('hamburger')
  const navLinks = document.getElementById('navLinks')

  if (hamburger) {
    hamburger.classList.remove('active')
  }

  if (navLinks) {
    navLinks.classList.remove('active')
  }
}

window.playReveal = function playReveal(sectionEl) {
  if (!sectionEl) return

  const items = sectionEl.querySelectorAll('.reveal-item')
  items.forEach((el, index) => {
    el.style.transition = 'none'
    el.classList.remove('show')
    void el.offsetWidth
    el.style.transitionDelay = `${index * 90}ms`
    el.style.transition = ''
    requestAnimationFrame(() => el.classList.add('show'))
  })
}

window.fitAsciiArt = function fitAsciiArt() {
  const pre = document.getElementById('asciiArt')
  if (!pre || typeof window.CUSTOM_ASCII_ART === 'undefined') return

  const box = pre.parentElement
  if (!box) return

  const raw = window.CUSTOM_ASCII_ART.replace(/^\n+|\n+$/g, '')
  pre.textContent = raw

  const lines = raw.split('\n')
  const lineCount = lines.length || 1
  const maxChars = Math.max(1, ...lines.map((line) => line.length))

  const boxW = box.clientWidth
  const boxH = box.clientHeight

  const CHAR_ASPECT = 0.6
  const LINE_HEIGHT = 1.15

  const sizeByWidth = boxW / (maxChars * CHAR_ASPECT)
  const sizeByHeight = boxH / (lineCount * LINE_HEIGHT)

  let fontSize = Math.min(sizeByWidth, sizeByHeight)
  fontSize = Math.max(2, Math.min(fontSize, 42))

  pre.style.fontSize = `${fontSize}px`
  pre.style.lineHeight = String(LINE_HEIGHT)
}

window.addEventListener('scroll', function () {
  const fab = document.getElementById('fab')
  if (!fab) return
  fab.style.display = window.scrollY > 300 ? 'flex' : 'none'
})

window.addEventListener('load', function () {
  window.fitAsciiArt()
  window.playReveal(document.getElementById('home'))
})

window.addEventListener('resize', window.fitAsciiArt)

export default {}
