require 'faker'

10.times do
  Note.create!(title: Faker::Company.catch_phrase, text: Faker::Company.bs)
end