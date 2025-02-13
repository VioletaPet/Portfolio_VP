import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["item"]

  connect() {
    this.observeScroll()
  }

  observeScroll() {
    const observer = new IntersectionObserver(
      (sections) => {
        sections.forEach(section => {
          if (section.isIntersecting) {
            const sectionId = section.target.id
            this.setActiveSection(sectionId)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "-20% 0px"
      }
    )

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
    })
  }

  setActiveSection(sectionID) {
    this.itemTargets.forEach(item => {
      const link = item.querySelector('a').getAttribute('href')
      const linkSection = link.replace('#', '')
      item.classList.toggle('active', linkSection === sectionID)
    })
  }
}
