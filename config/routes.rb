Rails.application.routes.draw do
  root 'static#index'

  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
end

# Rails.application.routes.draw do
#   root 'static#index'
#
#   # get 'welcome/index'
#
#   namespace :v1, defaults: { format: 'json' } do
#     get 'things', to: 'things#index'
#   end
#
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#   resources :articles do
#     resources :comments
#   end
#
#   # Comment other root declarations in the file and uncomment the following for
#   # the rails only app:
#   #
#   # root 'welcome#index'
# end
