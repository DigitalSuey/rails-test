Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end

  # Forward all requests to StaticController#index but requests must be non-Ajax
  # (!req.xhr?) and HTML Mime tyoe (req.format.html?)
  # This does not inclyde the root ('/') path.
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  # Forward root to StaticController#index
  root 'static#index'
end

# Rails.application.routes.draw do
#   get 'welcome/index'
#
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#   resources :articles do
#     resources :comments
#   end
#
#   root 'welcome#index'
# end
