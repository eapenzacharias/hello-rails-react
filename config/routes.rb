Rails.application.routes.draw do
  get 'static/index'
  namespace :api, default: {format: :json} do
    resources :greetings, only: [:index] do
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '*path', to: 'static#index'
  # Defines the root path route ("/")
  root "static#index"
end
