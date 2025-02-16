import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["item"]

  connect() {
    console.log("Navbar controller connected")
    this.projectType = this.element.dataset.navbarProjectType;
    console.log("Project Type detected:", this.projectType);
    this.observeScroll()
  }

  observeScroll() {
    const isRentaPet = this.projectType === 'rentapet'
    console.log("Is RentaPet:", isRentaPet);

    // selecting sections based on project type
    const sectionSelector = isRentaPet ? 'section[id$="-rp"]' : 'section:not([id$="-rp"])'
    const sections = document.querySelectorAll(sectionSelector)
    console.log("Found sections:", sections.length);

    // fetch the deep-dive section separately
    const deepDiveId = isRentaPet ? 'deep-dive-rp' : 'deep-dive'
    const deepDiveSection = document.getElementById(deepDiveId)
    console.log("Deep dive section found:", !!deepDiveSection);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          console.log("Section intersecting:", entry.target.id, entry.isIntersecting);
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
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

    // separate deep-dive observer
    const deepDiveObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const baseId = "deep-dive"
            this.setActiveSection(baseId)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: "-10% 0px"
      }
    )

    // Observer for regular sections
    sections.forEach(section => {
      if (section) {
        const sectionId = section.id
        // part to skip deep-dive section as it has its own
        if (sectionId !== deepDiveId) {
          console.log("Observing section:", sectionId);
          observer.observe(section)
        }
      }
    })

    if (deepDiveSection) {
      console.log("Observing deep dive section:", deepDiveSection.id);
      deepDiveObserver.observe(deepDiveSection)
    } else {
      console.warn("Deep dive section not found with ID:", deepDiveId);
    }
  }

  setActiveSection(sectionID) {
    console.log("Setting active section:", sectionID);
    this.itemTargets.forEach(item => {
      const link = item.querySelector('a')
      if (link) {
        const href = link.getAttribute('href')
        if (href) {
          const linkSection = href.replace('#', '')
          const baseSection = linkSection.endsWith('-rp') ? linkSection.replace('-rp', '') : linkSection
          item.classList.toggle('active', baseSection === sectionID)
        }
      }
    })
  }
}
