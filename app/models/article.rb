class Article < ApplicationRecord
  has_many :comments, depenbdent: :destroy
  validates :title, presence: true, length: { minimum: 5 }
end
