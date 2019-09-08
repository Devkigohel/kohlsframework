$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("kohlslogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login into kohls account",
  "description": "",
  "id": "login-into-kohls-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-kohls-account;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters the \"\u003cemailaddress\u003e\" email address",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user should be presented with the following pompt alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-into-kohls-account;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "emailaddress",
        "password",
        "message"
      ],
      "line": 16,
      "id": "login-into-kohls-account;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "https://www.kohls.com/",
        "ng842002@gmail.com",
        "webdriver123",
        "validation failed"
      ],
      "line": 17,
      "id": "login-into-kohls-account;login-to-account-with-credentials;;2"
    },
    {
      "cells": [
        "https://www.kohls.com/",
        "ng842002@gmail.com",
        "Sushila1984",
        "validation succeeded"
      ],
      "line": 18,
      "id": "login-into-kohls-account;login-to-account-with-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3664081900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-kohls-account;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"https://www.kohls.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters the \"ng842002@gmail.com\" email address",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"webdriver123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user should be presented with the following pompt alert \"validation failed\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.kohls.com/",
      "offset": 19
    }
  ],
  "location": "kohlssteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 606130600,
  "status": "passed"
});
formatter.match({
  "location": "kohlssteps.user_clicks_on_Account_button()"
});
formatter.result({
  "duration": 2298881600,
  "status": "passed"
});
formatter.match({
  "location": "kohlssteps.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 3178294100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ng842002@gmail.com",
      "offset": 17
    }
  ],
  "location": "kohlssteps.user_enters_the_email_address(String)"
});
formatter.result({
  "duration": 2187353900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver123",
      "offset": 17
    }
  ],
  "location": "kohlssteps.user_enters_the(String)"
});
formatter.result({
  "duration": 64047700,
  "status": "passed"
});
formatter.match({
  "location": "kohlssteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 283804800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation failed",
      "offset": 61
    }
  ],
  "location": "kohlssteps.the_user_should_be_presented_with_the_following_pompt_alert(String)"
});
formatter.result({
  "duration": 3309400,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat kohls.steps.kohlssteps.the_user_should_be_presented_with_the_following_pompt_alert(kohlssteps.java:71)\r\n\tat ✽.Then the user should be presented with the following pompt alert \"validation failed\"(kohlslogin.feature:12)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 3010899800,
  "status": "passed"
});
formatter.before({
  "duration": 3015484300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-kohls-account;login-to-account-with-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user navigates to \"https://www.kohls.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters the \"ng842002@gmail.com\" email address",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters the \"Sushila1984\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user should be presented with the following pompt alert \"validation succeeded\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.kohls.com/",
      "offset": 19
    }
  ],
  "location": "kohlssteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 573540800,
  "status": "passed"
});
formatter.match({
  "location": "kohlssteps.user_clicks_on_Account_button()"
});
formatter.result({
  "duration": 2383611100,
  "status": "passed"
});
formatter.match({
  "location": "kohlssteps.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 3106847100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ng842002@gmail.com",
      "offset": 17
    }
  ],
  "location": "kohlssteps.user_enters_the_email_address(String)"
});
formatter.result({
  "duration": 2118699600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sushila1984",
      "offset": 17
    }
  ],
  "location": "kohlssteps.user_enters_the(String)"
});
formatter.result({
  "duration": 58681400,
  "status": "passed"
});
formatter.match({
  "location": "kohlssteps.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 292839200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded",
      "offset": 61
    }
  ],
  "location": "kohlssteps.the_user_should_be_presented_with_the_following_pompt_alert(String)"
});
formatter.result({
  "duration": 555000,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat kohls.steps.kohlssteps.the_user_should_be_presented_with_the_following_pompt_alert(kohlssteps.java:71)\r\n\tat ✽.Then the user should be presented with the following pompt alert \"validation succeeded\"(kohlslogin.feature:12)\r\n",
  "status": "pending"
});
formatter.after({
  "duration": 3008335300,
  "status": "passed"
});
});