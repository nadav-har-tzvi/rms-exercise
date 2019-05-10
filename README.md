# Research Management System (RMS)

RMS is a frontend only system intended to give visual feedback for those who wish to learn how to develop server side applications.

RMS consists of the following sections:
1. Dashboard that shows recent projects, active data sources, etc.
2. Projects page is a management page for research projects, through here you can define research projects and whatever datasources are applicable.
3. One of the data sources is a survey based input, there is a section under the project page that allows building such surveys using SurveyJS.
4. User management section.
5. Settings section.

The exercise is as follows:

1. Develop a REST API that will serve as a backend for this application. The API must allow creation and retrieval of all entities expected by this application.
2. Develop background jobs that make sense (e.g. - one of the data source types is "Social", such background job could be crawling twitter/reddit/your fav social platform)
3. Connect the application to an OAuth 2.0 enabled identity provider.
4. Use cloud based PaaS and IaaS services to orchestrate on the cloud, this can be docker based containerization, serverless programming, cloud based storage and so on. 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
