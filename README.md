# React on Rails template
This is a template combining Rails with React.  
There is also Server Side Rendering.

# Using gem and package
* gems
  * [react_on_rails](https://github.com/shakacode/react_on_rails)
* packages
  * [React](https://github.com/facebook/react)
  * [Redux](https://github.com/reactjs/redux)
  * [React-Router](https://github.com/ReactTraining/react-router)
  * [Immutable-js](https://github.com/facebook/immutable-js)

# Usage
```sh
# install gems in vender/bundle
$ bundle install --path vendor/bundle -j4

# install packages in client/node_module
$ yarn install

# create database
$ bin/rails db:create
$ bin/rails db:migrate

# start
$ bin/foreman s
```
