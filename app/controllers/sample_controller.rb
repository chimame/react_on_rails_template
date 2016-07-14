# -*- coding: utf-8 -*-
class SampleController < ApplicationController
  around_filter :hypernova_render_support

  def index
  end
end
