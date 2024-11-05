# InitialProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## TODO
- add form with dialog to enter exercise weight and rep


## startup
Server: npm run start:server

if request to mongo db is not working go to mongo db console and add current ip adress
https://cloud.mongodb.com/v2/6719fa9188a3032342123427#/overview?connectCluster=mean-workout


to access data via CLI: 
with terminal head to mongosh location (webprojekte/mongosh/bin)

./mongosh "mongodb+srv://mean-workout.pxedv.mongodb.net/" --apiVersion 1 --username bernhardwhy

show collections
db.<collection>.find()

db.exercises.insertMany([{data}])


