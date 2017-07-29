require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame
LOCAL_DIR_NAME = "../prasann.github.io/."
js_files=['jquery.min.js','jquery-ui.min.js','jquery.magnific-popup.min.js',
  'prettify.js','headroom.min.js', 'bootstrap.min.js','prasans.js','comments.js']

namespace :post do
  desc "Will create a template for new blog post"
  task :create do
    name = ARGV.last
    d = DateTime.now
    touch "_drafts/#{d.strftime("%Y-%m-%d-")}#{name}.html"
    task name.to_sym do ; end
  end
end
namespace :site do

  desc "Concat JS files"
  task :compress do
    js = ""
    js_files.each do |js_file|
      js << File.read("assets/js/dev/#{js_file}")
    end
    File.open("assets/js/application.js","w") {|file| file.write(js)}
  end

  desc "Generate blog files"
  task :generate => [:compress] do
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site"
    })).process
  end

  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    cp_r "_site/.", LOCAL_DIR_NAME
    cp ".travis.yml", LOCAL_DIR_NAME
    pwd = Dir.pwd
    Dir.chdir LOCAL_DIR_NAME
    system "git add --all"
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git pull --rebase"
    system "git push origin master:refs/heads/master"
    Dir.chdir pwd
  end
end
