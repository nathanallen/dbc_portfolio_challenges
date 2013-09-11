get '/' do
  get_all_notes
  erb :notes
end

get '/note/:id/' do
  get_note_and_id
  erb :note_by_id
end

delete '/note/:id/' do
  get_note_and_id
  destroy_it
  erb :note_by_id
end

get '/note/:id/edit/' do
  get_note_and_id
  erb :edit
end

put '/note/:id/edit/' do
  get_note_and_id
  update_it
  redirect '/'
end

get '/create/new/' do
  erb :add_note
end

put '/submit/' do
  create_it
  redirect "/note/#{@id}/"
end
  