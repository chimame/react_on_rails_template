require 'rails_helper'

RSpec.describe "Todos", type: :request do
  describe "GET /todos" do
    subject(:get_request) {get todos_path format: :json}
    before do
      2.times{|i| Todo.create!(text: "todo#{i}", completed: false)}
      get_request
    end
    it "works! (now write some real specs)" do
      expect(response).to have_http_status(200)
    end
    it "get 2 items" do
      json = JSON.parse(response.body)
      expect(json.count).to eq 2
    end
  end

  describe "POST /todos" do
    subject(:post_request) {post todos_path, {params: params}}
    context "(when params of completed is nothing)" do
      let(:params) {{todo: {text: "aaa", completed: nil}}}
      before {post_request}
      it 'is error' do
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
    context "(when all params exsits)" do
      let(:params) {{todo: {text: 'aaa', completed: true}}}
      before {post_request}
      it 'is normal' do
        expect(response).to have_http_status(:created)
      end
    end
  end

  describe "PATCH /todos/:id/toggle" do
    subject(:patch_request) {patch toggle_todo_path(todo)}

    context "first run" do
      let(:todo) {Todo.create(text: "aaa", completed: false)}
      before {patch_request}
      it "should be completed is true" do
        expect(response).to have_http_status(:ok)
        json = JSON.parse(response.body)
        expect(json["completed"]).to be_truthy
      end
    end
    context "second run" do
      let(:todo) {Todo.create(text: "aaa", completed: true)}
      before {patch_request}
      it "should be completed is false" do
        expect(response).to have_http_status(:ok)
        json = JSON.parse(response.body)
        expect(json["completed"]).to be_falsey
      end
    end
  end
end
