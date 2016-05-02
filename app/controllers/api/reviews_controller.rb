class Api::ReviewsController < ApplicationController
  def create
    user_id = (User.find_by_username(params[:review][:username])).id
    Review.create({
      rev_content: params[:review][:rev_content],
      yepp: params[:review][:yepp],
      user_id: user_id,
      restaurant_id: params[:review][:restaurant_id]
    })
    @restaurant = Restaurant.find(params[:review][:restaurant_id])
    render :show
  end

end
