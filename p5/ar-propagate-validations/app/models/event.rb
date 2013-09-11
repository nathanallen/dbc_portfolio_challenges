class Event < ActiveRecord::Base
  validates_uniqueness_of :title
  validates_presence_of :organizer_name, :title, :date
  validate :email_is_well_formed, :date_is_not_past, :date_is_for_real


  def email_is_well_formed
    errors.add(:organizer_email, "must be a valid email") if organizer_email !~ /(\w|\d|-|_|\.|\+)+@(\w|\d|-|_|\.)+\.\w{2,3}/
  end

  def date_is_not_past
    errors.add(:date, "must not be past") if date < Date.today
  end

  def date_is_for_real #incomplete
    # errors.add(:date, "must be for real") if date
  end

end
