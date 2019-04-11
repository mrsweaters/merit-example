# frozen_string_literal: true

class UserSerializer < ApplicationSerializer
  attributes :id, :first_name, :last_name, :email, :votes, :badges

  def badges
    object.badges
  end
end
