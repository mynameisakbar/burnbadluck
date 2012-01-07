class Submission < ActiveRecord::Base
    email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
    
    validates :name,    
              :presence => true
    validates :email,   
              :presence => true,
              :format => { :with => email_regex }        
    validates :content, 
              :presence => true,
              :length => { :maximum => 140 }
end
