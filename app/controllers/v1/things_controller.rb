class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'some-thing',
        :guid => '426-46754-34-253'
      }
    ]}.to_json
  end
end
