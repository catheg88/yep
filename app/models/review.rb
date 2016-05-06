# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  rev_content   :text             not null
#  yepp          :boolean          not null
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  username      :string
#

class Review < ActiveRecord::Base
  validates :rev_content, :yepp, presence: true

  belongs_to :restaurant
  belongs_to :user


end
