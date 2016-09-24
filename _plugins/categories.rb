module Jekyll
  class CategoryPage < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      process(@name)
      read_yaml(File.join(base, '_layouts'), 'category_index.html')
      data['category'] = category

      category_title_prefix = site.config['category_title_prefix'] || 'Category: '
      data['title'] = "#{category_title_prefix}#{category}"
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'category_index'
        dir = site.config['category_dir'] || 'categories'
        all_categories = site.categories.keys.compact.uniq.reject(&:empty?)
        all_categories.each do |category|
          if !category.nil?
            site.pages << CategoryPage.new(site, site.source, File.join(dir, category.downcase), category)
          end
        end
      end
    end
  end
end
