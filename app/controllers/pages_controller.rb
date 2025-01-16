class PagesController < ApplicationController
  def home
    @projects = Project.all
    @skills = Skill.all
  end
end
