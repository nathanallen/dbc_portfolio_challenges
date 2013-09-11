class User < ActiveRecord::Base
  has_many :proficiencies
  has_many :skills, through: :proficiencies

  def proficiency_for(skill)
    self.proficiencies.find_by_skill_id(skill).rating
  end

  def set_proficiency_for(skill, rating)
    self.proficiencies.find_by_skill_id(skill).update_attributes(rating: rating)
  end

end
