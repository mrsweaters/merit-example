# frozen_string_literal: true

module Merit
  class BadgeRules
    include Merit::BadgeRulesMethods

    def initialize
      grant_on 'users#vote', badge: 'best-unicorn', multiple: true do |user|
        user.votes % 5 == 0
      end
    end
  end
end
