class Notifier < ActionMailer::Base
    #default :from => "info@burnbadluck.com"
    
    # send a signup email to the user, pass in the user object that contains the user's email address
    def signup_email(user)
        mail
        ( 
            :to => user.email, 
            :subject => "Thanks for burning with us!" 
        )
    end
end