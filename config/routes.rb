Rails.application.routes.draw do
  resources :todos, only: [:index, :show, :new, :create, :destory] do
    member do
      patch :toggle
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :sample, only: [:index, :create]
end
