class ReallyRenameReviewerAuthorColumn < ActiveRecord::Migration
  def change
    rename_column :reviews, :author_id, :user_id
  end
end
