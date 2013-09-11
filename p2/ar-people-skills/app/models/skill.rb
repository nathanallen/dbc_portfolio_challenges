class Skill < ActiveRecord::Base
  has_many :proficiencies
  has_many :users, through: :proficiencies
  validates :name, uniqueness: true

  def user_with_proficiency(rating)
    self.proficiencies.find_by_rating(rating).user
  end

end
