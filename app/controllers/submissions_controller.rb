class SubmissionsController < ApplicationController
  USERS = { "admin" => "burnbabyburn" }
  before_filter :auth, :only => :index
    
  http_basic_authenticate_with :name => "admin", :password => "moderator", :only => :destroy 
  http_basic_authenticate_with :name => "admin", :password => "moderator", :only => :update

  # GET /submissions/1
  # GET /submissions/1.json
  def show
    @submission = Submission.find(params[:id])
    render :layout => "individual" and return
      
    respond_to do |format|
        format.html # show.html.erb
        #format.json { render json: @submission }
    end
  end
    
  # GET /submissions/new
  # GET /submissions/new.json
  def new
    @submission = Submission.new

    respond_to do |format|
      format.html { redirect_to submissions_url } # new.html.erb
      format.json { render json: @submission }
    end
  end

  # GET /submissions/1/edit
  def edit
    @submission = Submission.find(params[:id])
  end

  # POST /submissions
  # POST /submissions.json
  def create
    @submission = Submission.new(params[:submission])

    respond_to do |format|
      if verify_recaptcha() && @submission.save
          Notifier.signup_email(@submission).deliver
          format.html { redirect_to submissions_url, notice: @submission.content }
          format.json { render json: @submission, status: :created, location: @submission }
      else
        format.html { redirect_to submissions_url, notice: 'ERROR' }
      end
    end
  end

  # PUT /submissions/1
  # PUT /submissions/1.json
  def update
    @submission = Submission.find(params[:id])

    respond_to do |format|
      if @submission.update_attributes(params[:submission])
          format.js { render :json => @submission.content }         
      else
          format.html { render action: "edit" }
          format.json { render json: @submission.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /submissions/1
  # DELETE /submissions/1.json
  def destroy
    @submission = Submission.find(params[:id])
    @submission.destroy

    respond_to do |format|
      format.html { redirect_to request.referer }
      format.json { head :ok }
    end
  end
    
  # GET /submissions
  # GET /submissions.json
  def index
      @submissions = Submission.paginate(:page => params[:page], 
                                         :per_page => 7,
                                         :order => "created_at DESC")
      #@submissions = Submission.all
      @submission = Submission.new
      
      if request.xhr?
          sleep(3) # make request a little bit slower to see loader :-)
          render :partial => @submissions
      end
      
      #respond_to do |format|
          #format.html # index.html.erb
          #format.json { render json: @submissions }   
      #format.json { render json: @submission }
      #end
  end
    
  protected
    def auth
        #flash[:error] = request.fullpath
        @url = request.fullpath
        
        if @url == "/admin" 
            #flash[:error] = "haro"
            authenticate_or_request_with_http_digest do |username| 
                USERS[username]
                #flash[:error] = "lol"
                #reset_session
            end
        end
    end
end
