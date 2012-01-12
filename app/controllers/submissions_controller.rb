class SubmissionsController < ApplicationController           
  http_basic_authenticate_with :name => "admin", :password => "deleteAdm", :only => :destroy 
  http_basic_authenticate_with :name => "test", :password => "test", :only => :update

  # GET /submissions
  # GET /submissions.json
  def index
    @submissions = Submission.all
    @submission = Submission.new

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @submissions }
      format.json { render json: @submission }
    end
  end

  # GET /submissions/1
  # GET /submissions/1.json
  def show
    @submission = Submission.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @submission }
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
          format.html { redirect_to submissions_url, notice: @submission.content }
          format.json { render json: @submission, status: :created, location: @submission }
          #Notifier.signup_email(@submission).deliver
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
end
