# frozen_string_literal: true

class User < ApplicationRecord
  has_merit

  def to_s
    email
  end
end
