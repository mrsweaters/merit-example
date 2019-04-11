class AddVotesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :votes, :integer, default: 0, null: false
  end
end
