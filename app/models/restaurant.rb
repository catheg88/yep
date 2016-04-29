# == Schema Information
#
# Table name: restaurants
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  cuisine     :string           not null
#  address     :string           not null
#  phone       :string           not null
#  hours       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Restaurant < ActiveRecord::Base
  validates :name, :cuisine, :address, :phone, :hours, :description, presence: true;
  validates :name, uniqueness: true

  
end
