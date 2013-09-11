helpers do
  
  def get_note_and_id
    @id = params[:id]
    @note = Note.find_by_id(@id)
  end

  def get_all_notes
    @notes = Note.all
  end

  def destory_it
    @note.destroy
  end

  def update_it
    @note.update_attributes(title: params[:title], text: params[:text])
  end

  def create_it
    @note = Note.create(title: params[:title], text: params[:text])
    @id = @note.id
  end

end