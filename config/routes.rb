Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]

    # resources :benches, only: [:index, :create]
    # resources :reviews, only: [:create]
  end

end
