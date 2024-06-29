# Let's start with the configuration first #
1. First I would want to npm start and both backend and frontend will get started at the same time, so I use concurrently ```npm install concurrently --save-dev```, but since it's only for developement, hence ```--save-dev``` which indicate that it is used for developement and not needed in production
2. I decided to go with postgresql, make it in a docker
3. mikro-orm is a framework that I have experience with, so I will use it for mapping


## Backend ##
```
npm init -y
npm install express @mikro-orm/core @mikro-orm/postgresql
npm install @mikro-orm/reflection
npm install --save-dev typescript ts-node @types/node @types/express
npm install --save-dev jest @types/jest
```
1. The main class Dog should be simple enough, it have a Name and Age
2. The other table should be Program state, which hold a single attribute of latest update time, however mikro-orm require every class to have an id, and we can always get the programstate my using findOneOrFail() function