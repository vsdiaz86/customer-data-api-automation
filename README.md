# CodeceptJS + Playwright
A testing framework coded in CodeceptJS and Playwright.

## Setup

To run these tests, you will need the following:
* Any OS type
* Node.js 19.4.0 or later

```bash

$ cd e2e
$ npm install
$ npx playwright install 

## Get URL and configure .env file

Copy the `.env-template` file to a new file, and name it `.env`. In the `.env` file, add the server URL, so the tests will know which server to connect to.


## Running the tests with an existing server (All in one)

To run all the tests at once, use the command `npx codeceptjs run`.
(Always inside the /e2e folder)

## Running tests with an existing server (Specific test)

To run especific tests you can use @flags :

```bash
$ npx codeceptjs run --grep @flag
```

see: https://codecept.io/commands/#run-multiple to more examples of how to execute tests

### Debugging

To debug the tests, you will need to set `DEBUG=true`; if `DEBUG` receives `true`, the logs will show in the console from which we start the tests. Also, you can pass `--debug` when run a test. 

see: https://codecept.io/commands/#run-multiple

```

## Running Allure Reports

To run reports:

```
In local environment, go to main directory project path and execute the command 
to see the results:
```bash
$ allure serve output

```