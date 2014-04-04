require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame
LOCAL_DIR_NAME = "../prasann.github.io/."


namespace :site do
  desc "Generate blog files"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site"
    })).process
  end


  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    cp_r "_site/.", LOCAL_DIR_NAME
    pwd = Dir.pwd
    Dir.chdir LOCAL_DIR_NAME
    system "git add --all"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git push origin master:refs/heads/master"
    Dir.chdir pwd
  end
end