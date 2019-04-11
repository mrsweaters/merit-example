users = 10.times.map do |count|
 {
  first_name: Faker::Name.unique.first_name,
  last_name: Faker::Name.unique.last_name,
  email: Faker::Internet.unique.email
 }
end

users.each do |user|
  u = User.find_or_initialize_by(email: user[:email])
  u.assign_attributes(user)
  u.save
end
