# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Burnbadluck::Application.initialize!

ActionMailer::Base.smtp_settings = {
    :user_name => "app2379554@heroku.com",
    :password => "g5fpcxgh",
    :domain => "burnbadluck.com",
    :address => "smtp.sendgrid.net",
    :port => 587,
    :authentication => :plain,
    :enable_starttls_auto => true
}