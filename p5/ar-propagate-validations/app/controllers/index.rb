get '/' do
  @events = Event.all
  erb :index
end

get '/events/:id/show' do |id|
  @event = Event.find(id)
  erb :event_show
end

get '/events/new' do
  @errors = nil
  erb :event_create
end

post '/events/create' do
  # p params
  e = Event.create(params)
  @errors = e.errors
  erb :event_create
end
