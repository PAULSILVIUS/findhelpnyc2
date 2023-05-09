class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :email
      t.string :firstname
      t.string :lastname
      t.string :password
      t.text :bio
      t.integer :cost
      t.boolean :sliding_scale
      t.string :specialty
      t.string :borough
      t.string :address
      t.integer :zip
      t.string :insurance

      t.timestamps
    end
  end
end
