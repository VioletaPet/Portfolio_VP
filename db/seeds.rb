# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Project.create!(
#   title: "StreamCaddy",
#   description: "This innovative mobile application simplifies subscription management for avid streamers, addressing the common challenges of juggling multiple services. Users can effortlessly track their subscriptions, ensuring they avoid unnecessary expenses while maximizing their viewing experience.",
#   thumbnail: "StreamCaddyThumbnail.png"
# )

# Project.create!(
#   title: "RentaPet",
#   description: "This Airbnb-style platform connects pet lovers by allowing users to rent pets from each other. With features such as detailed pet listings, location mapping and user reviews, it ensures a seamless and engaging experience. The filtering options enhance usability, making it easy to find the perfect match.",
#   thumbnail: "RentaPetThumbnail.png"
# )

Skill.create!(
  name: "HTML",
  image: "HTML_Logo.png"
)

Skill.create!(
  name: "CSS",
  image: "CSS_Logo.png"
)

Skill.create!(
  name: "JavaScript",
  image: "JavaScript_Logo.png"
)

Skill.create!(
  name: "Ruby",
  image: "Ruby_Logo.png"
)

Skill.create!(
  name: "Rails",
  image: "Rails_Logo.png"
)

Skill.create!(
  name: "SQL",
  image: "SQL_Logo.png"
)

Skill.create!(
  name: "Bootstrap",
  image: "Bootstrap_Logo.png"
)

Skill.create!(
  name: "Tailwind",
  image: "Tailwind_Logo.png"
)

Skill.create!(
  name: "PostgreSQL",
  image: "PostgreSQL_Logo.png"
)

Skill.create!(
  name: "Heroku",
  image: "Heroku_Logo.png"
)

Skill.create!(
  name: "Git",
  image: "Git_Logo.png"
)

Skill.create!(
  name: "GitHub",
  image: "GitHub_Logo.png"
)
