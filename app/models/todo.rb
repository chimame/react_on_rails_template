class Todo < ApplicationRecord
  validates :completed, inclusion: {in: [true, false]}
end
