class Api::SessionsController < ApplicationController

  def create
		@user = User.find_by_credentials(params[:user][:username], params[:user][:password])
		if @user
			login(@user)
			render "api/users/show"
		else
			@errors = ['invalid credentials']
			render "api/shared/error", status: 401
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			@errors = ['no one logged in']
			render "api/shared/error", status: 404
		end
	end

	def show
    if current_user
			@user = current_user
			render "api/users/show"
		else
			render json: nil, status: 204
		end
	end

end
