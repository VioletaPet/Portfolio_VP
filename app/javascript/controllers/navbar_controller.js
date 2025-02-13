import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navbarItem"]

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
        threshold: 0.5,
        rootMargin: "-50% 0px -50% 0px"
      }
    )

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
    })
  }

  setActiveSection(sectionID) {
    this.navbarItemTargets.forEach(item => {
      const link = item.querySelector('a').getAttribute('href')
      const linkSection = link.replace('#', '')
      item.classList.toggle('active', linkSection === sectionID)
    })
  }
}
