Rails.application.routes.draw do
  namespace :api, default: {format: :json} do
    resources :greetings, only: [:index] do
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
