# All commands

(--dry-run): runs in dry run
(--no-spec): ignore test files creation

nest new nestjs-masterclass : create a nestjs project
nest g module users: create a module
nest g module posts: create a module
nest g controller users: create a controller
nest g service posts: create a service
nest g service posts/providers/posts --flat: create a service in a particular path

## Create a auth module and connect with app

nest g module auth
nest g controller auth
nest g service auth/providers/auth --flat
