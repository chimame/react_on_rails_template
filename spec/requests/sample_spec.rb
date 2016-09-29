require 'rails_helper'

describe "Sample", trye: :request do
  describe '#create' do
    subject(:post_request) {post "/sample.json", {params: params}}
    context "(when params of name is nothing)" do
      let(:params) {{sample: {num: 1}}}
      before {post_request}
      it 'is error' do
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
    context "(when all params exsits)" do
      let(:params) {{sample: {name: 'aaa', num: 1}}}
      before {post_request}
      it 'is normal' do
        expect(response).to have_http_status(:created)
      end
    end
  end
end