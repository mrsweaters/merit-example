class UsersController < ApplicationController
  before_action :find_user, only: [:vote]

  def index
    @users = User.all
  end

  def vote
    if current_user.increment!(:votes)
      render json: @user, serializer: UserSerializer
    else
      head 500
    end
  end

private

  def find_user
    @user ||= User.find(params[:id])
  end
end
