helpers do

  def current_user
    User.find_by_id(session[:user_id])
  end

  def sign_up
    @user = User.new(name: params[:user][:name], email: params[:user][:email])
    @user.password = params[:user][:password]
    get_token if @user.save!
  end

  def authenticate
    @user = User.find_by_email(params[:email])
    if !@user.nil? && (@user.password == params[:password])
      get_token
      redirect '/'
    else
      erb :sign_in
    end
  end

  def get_token
    session[:user_id] = @user.id
  end

end
