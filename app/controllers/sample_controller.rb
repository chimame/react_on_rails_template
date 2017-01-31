# -*- coding: utf-8 -*-
class SampleController < ApplicationController

  def index
  end

  def create
    @sample = Sample.new(sample_params)
    if @sample.save
      render json: @sample, status: :created
    else
      render json: @sample.errors, status: :unprocessable_entity
    end
  end

  private
  def sample_params
    params.require(:sample).permit(:name, :num)
  end
end
