class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def create

  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :phone, :hours, :description)
  end

end
