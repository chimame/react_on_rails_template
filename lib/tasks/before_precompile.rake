task :build_frontend do
  cd "frontend" do
    sh "yarn install"
    sh "yarn run build:#{Rails.env}"
  end
end

Rake::Task["assets:precompile"].enhance(%i(build_frontend))
