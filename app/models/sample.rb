class Sample < ApplicationRecord
  validates :name,  presence: true
  validates :num,   presence: true
end
