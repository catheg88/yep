Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :restaurants, only: [:create, :index, :show]
    resources :reviews, only: [:create, :update]

  end

end
