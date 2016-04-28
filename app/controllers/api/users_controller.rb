class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      puts "inside users_controller/create; user has saved"
      login(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    end
  end


private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
