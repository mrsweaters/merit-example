class ApplicationController < ActionController::Base
  def current_user
    @user
  end
end
