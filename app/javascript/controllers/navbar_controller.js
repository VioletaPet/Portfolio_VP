import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["item"]

  connect() {
    console.log("Navbar controller connected")
    this.projectType = this.element.dataset.navbarProjectType;
    this.observeScroll()
  }

  observeScroll() {
    const isRentaPet = this.projectType === 'rentapet'
    console.log("Project Type:", this.projectType);

    // Select sections based on project type
    const sectionSelector = isRentaPet ? 'section[id$="-rp"]' : 'section:not([id$="-rp"])'
    const sections = document.querySelectorAll(sectionSelector)

    // Get the deep dive section based on project type
    const deepDiveId = isRentaPet ? 'deep-dive-rp' : 'deep-dive'
    const deepDiveSection = document.querySelector(`#${deepDiveId}`)

    const observer = new IntersectionObserver(
      (sections) => {
        sections.forEach(section => {
          console.log("IntersectionObserver section", section); // Debug
          if (section.isIntersecting) {
            const sectionId = section.target.id
            const baseId = isRentaPet ? sectionId.replace('-rp', '') : sectionId
            this.setActiveSection(baseId)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "-20% 0px"
      }
    )

    // additional code for deep-dive section
    // rootMargin can't be applied as section is too long
    const deepDiveObserver = new IntersectionObserver(
      (sections) => {
        sections.forEach(section => {
          if (section.isIntersecting) {
            this.setActiveSection("deep-dive")
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: "-10% 0px"
      }
    )

    // observer for sections
    sections.forEach(section => {
      const sectionId = section.id
      const baseId = isRentaPet ? sectionId.replace('-rp', '') : sectionId

      if (baseId !== "deep-dive") {
        observer.observe(section)
      }
    })

    // observer for deep-dive
    if (deepDiveSection) {
      deepDiveObserver.observe(deepDiveSection)
    }
  }

  setActiveSection(sectionID) {
    this.itemTargets.forEach(item => {
      const link = item.querySelector('a').getAttribute('href')
      const linkSection = link.replace('#', '')
      item.classList.toggle('active', linkSection === sectionID)
    })
  }
}
