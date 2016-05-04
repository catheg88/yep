class Api::ReviewsController < ApplicationController

  def create
    user_id = (User.find_by_username(params[:review][:username])).id
    review = Review.new({
      rev_content: params[:review][:rev_content],
      yepp: params[:review][:yepp],
      user_id: user_id,
      restaurant_id: params[:review][:restaurant_id],
      username: params[:review][:username]
    })

    if review.save
      # puts "saved to db"
    else
      # puts "didn't save to db"
    end

    @restaurant = Restaurant.find(params[:review][:restaurant_id])
    render :show
  end

  def update
    user_id = (User.find_by_username(params[:review][:username])).id
    rev_id = (params[:id]).to_i
    review = Review.find(rev_id)
    review.update_attributes({
      rev_content: params[:review][:rev_content],
      yepp: params[:review][:yepp],
      user_id: user_id,
      restaurant_id: params[:review][:restaurant_id],
      username: params[:review][:username]
    })

    if review.save
      # puts "saved to db"
    else
      # puts "didn't save to db"
    end

    @restaurant = Restaurant.find(params[:review][:restaurant_id])
    puts @restaurant.name

    render :show
  end

  def destroy
    review = Review.find((params[:id]).to_i)
    @restaurant = Restaurant.find(review.restaurant_id)
    review.destroy
    render :show
  end

end
