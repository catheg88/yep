class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    @user = User.all
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :phone, :hours, :description)
  end

end
