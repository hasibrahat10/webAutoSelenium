$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Home.feature");
formatter.feature({
  "name": "Homepage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Volunteer Sign up",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test-03"
    }
  ]
});
formatter.step({
  "name": "Enter Firstname as \"\u003cfirstName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Lastname as \"\u003clastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Phonenumber as \"\u003cphone\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Country name as \"\u003ccountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter City name as \"\u003ccity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Email name as \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Select the Gender as \"\u003cgender\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Select the Days of the week as \"Sunday, Monday, Tuesday, Friday\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Select best time to contact",
  "keyword": "Then "
});
formatter.step({
  "name": "Upload a file",
  "keyword": "Then "
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "phone",
        "country",
        "city",
        "email"
      ]
    },
    {
      "cells": [
        "Hasib",
        "Rahat",
        "019892342",
        "Bangladesh",
        "Dhaka",
        "hhrahat@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Volunteer Sign up",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test-03"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter Firstname as \"Hasib\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterFirstnameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Lastname as \"Rahat\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterLastnameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Phonenumber as \"019892342\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterPhonenumberAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Country name as \"Bangladesh\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterCountryNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter City name as \"Dhaka\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterCityNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Email name as \"hhrahat@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterEmailNameAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the Gender as \"\u003cgender\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.selectTheGenderAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the Days of the week as \"Sunday, Monday, Tuesday, Friday\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.selectTheDaysOfTheWeekAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select best time to contact",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.selectBestTimeToContact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Upload a file",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.uploadAFile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.clickOnSubmitButton()"
});
formatter.result({
  "status": "passed"
});
});