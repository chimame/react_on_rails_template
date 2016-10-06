class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :destroy, :toggle]

  # GET /todos
  # GET /todos.json
  def index
    @todos = Todo.all
    render json: @todos, status: :ok
  end

  # GET /todos/1
  # GET /todos/1.json
  def show
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @todo, status: :ok }
    end
  end

  # GET /todos/new
  def new
    @todo = Todo.new
  end

  # POST /todos
  # POST /todos.json
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1/toggle
  # PATCH/PUT /todos/1/toggle.json
  def toggle
    if @todo.update({completed: !@todo.completed})
      render json: @todo, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  # DELETE /todos/1.json
  def destroy
    @todo.destroy
    respond_to do |format|
      format.html { redirect_to todos_url, notice: 'Todo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def todo_params
      params.fetch(:todo, {}).permit(:text, :completed)
    end
end
