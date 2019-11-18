Rails.application.routes.draw do
  get 'welcome/index'

  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :articles do
    resources :comments
  end

  root 'welcome#index'
end
