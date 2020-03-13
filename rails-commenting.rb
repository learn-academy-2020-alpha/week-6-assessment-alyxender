# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) This is the class of our model, specifically the controller class of our model. 
class BlogPostsController < ApplicationController
  def index
    # 2) Declaring a instance variable @posts that when called will display all information in our BlogPost table. 
    @posts = BlogPost.all
  end

  def show
    # 3) Delcaring a  instance variable @post that will take in a param of id. When called it will display a single row of our BlogPost model by the id of that row. 
    @post = BlogPost.find(params[:id])
  end

  # 4)Definition of the 'new' route.  Will keep rails from losing its mind when the view is called. 
  def new
  end

  def create
    # 5) Declaring the instance variable @post that when called will create a new row of data within the BlogPost model. It also takes in strong params in its argument.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) This will force the page to reload the page if the destruction of the row attempt fails. 
      redirect_to blog_post_path(@post)
    end
  end

  # 7) From this point forward the private tag will keep this information from being easily accessed/displayed by the consumer. 
  private
  def blog_post_params
    # 8)Our strong parameters that will be used in the above definitions to allow only these specific params found within the .permit to be passed to it. Helpful for keeping injection attacks out. Not the best way, but it'll do as a simple and cheap insurance.
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) Opening and start of our BlogPost model class. 
class BlogPost < ApplicationRecord
  # 10) Relational model declaring. This is allowing us to link this model to our secondary model Comment as a parent. Additionally, we will find a 'belongs_to' inside of our models/comment.rb model class linking it back here. 
  has_many :comments
end
