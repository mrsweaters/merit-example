Rails.application.routes.draw do
  root to: 'users#index'
  resources :users do
    member do
      post :vote
    end
  end
end
