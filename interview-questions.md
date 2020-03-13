# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:
  The foreign_key would live inside the Sightings(belongs_to Animal) model as a column. 
  The foreign_key would be "animal_id"
  Researched answer:
  Didnt really do an on the spot research here. But relational models work somewhat similar to the parent-child hiarchy- where the parent would be Animal, which would be defined as a "has_many" of the child Sightings which "belongs_to" Animal(parent). The foreign_key would need to belong inside of the child model so that it can relate back to its parent model, Animal. The general structure of the foreign_key would be "parent_id", so in this instance we would have it as "animal_id"


2. Which routes must always be passed params and why?

  Your answer:
  Show - Requires an id param to be able to pick out the specific row/entry you are looking for. 
  Update - Requires the id param to be able to pick out the specific row/entry you are looking to update/modify
  Delete - Requires the id param to be able to pick out the specific row/entry you are looking to DESTROY (muahaha.)
  
  And honestly, if you're doing anything somewhat custom in your controller, you might be needing to create a route that will require a param passed to it, but the shown examples above are just three of the basics I can think of at this time when using something like "generate resource" that creates a set of defaults for you.  

  Researched answer:
  This would be a huge wall of text, if I were to copy paste directly in, so I'm not going to do that. However the best resource is directly from Rails guide documentation itself. So heres a link! https://guides.rubyonrails.org/routing.html



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:
  In the situation of a interview, I'd be asking a few more questions- such as what the model name is and what is goin' on in the controller. So, to the best of my abilities I'm working only with what I have here. 
get '/game/:guess', to: 'main#game'
  



4. Name three rails generator commands. What is created by each?

  Your answer:
  rails generate migration add_froody_column
  - This command will create a migration file that will allow me to modify the shape(schema) of my model. Its also allowing me to communicate my intent as well.
  
  rails generate model Frood name:string
  - This command will generate a new model/table with a single column that takes in a string as its data-type

  rails generate resource Frood name:string
  -This command DOES A LOT for us here, infact, it would nearly be a wall of text if I went through all of it. But, some of the basic things it will generate are as follows:
  -A model (table)
  -A migration file
  -A view folder 
  -A routes file (with some default routes set up, such as index and show, etc)
  -A controller
  -A scss file
  -A helper folder
  -An asset folder. 
  -Much more! :O
  

  Researched answer:
  Again, if I put down everything I researched here, it would be a giant wall of text. But Rails documentation is super dope and also heres a dope medium article on generate resource if you're interested to hear more: https://medium.com/@yongnicholasakim/ruby-on-rails-resource-generator-instant-full-stack-mvc-framework-crud-not-included-4967b4d3e3bb



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"
-This will be our INDEX. It's responsible for accessing and displaying the entire table/model.

/users/1      method="GET"  
-This will be our SHOW. It has a param passed to it, in this case an ID (1) that will allow it to display a single row in the users table based upon its unique identifier id of 1. 

/users/new    method="GET"  
-This is the first step of our creation process. In this case it would more than likely allow us to display a way (lets say a form) that will allow our user to easily type in information that will then utilize the next route below...

/users/       method="POST"   
- This is the magic. REAL MAGIC. It can coincide with the above route (new) that will take in a new entry of data and POST it to our table (users) as a new row. 
- In other words, POST is responsible for the creation of new rows to a specific model. 

/users/1      method="PUT"
-This is our UPDATE with a specific param (1) passed to it that will allow us to update/patch our specific row/entry with modified information. 

/users/1      method="DELETE"
-This is our DESTROY (.. muahah) with a specific param (1) passed to it that will allow us to identify which row of the model/table we are looking to delete/destroy. 
