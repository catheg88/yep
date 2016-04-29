# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  rev_content   :text             not null
#  yepp          :boolean          not null
#  author_id     :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
