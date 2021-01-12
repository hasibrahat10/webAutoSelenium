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
  "name": "Enter Firstname as \u003cfirstName\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Lastname as \u003clastName\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Phonenumber as \u003cphone\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Country name as\u003ccountry\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter City name as \u003ccity\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter Email name as \u003cemail\u003e",
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
        "\"Hasib\"",
        "\"Rahat\"",
        "\"019892342\"",
        "\"Bangladesh\"",
        "\"Dhaka\"",
        "\"hhrahat@gmail.com\""
      ]
    }
  ]
});
formatter.background({
  "name": "User already in landing page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
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
formatter.step({
  "name": "Enter Firstname as \"Hasib\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterFirstnameAs(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#RESULT_TextField\\-1\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-DPJK7M8\u0027, ip: \u0027172.18.106.145\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rootnext\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53701}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2f934d3d34fa334e911e6de36d77018b\n*** Element info: {Using\u003did, value\u003dRESULT_TextField-1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.clear(Unknown Source)\r\n\tat pages.HomePage.setFirstName(HomePage.java:91)\r\n\tat stepDefinitions.HomeSteps.enterFirstnameAs(HomeSteps.java:40)\r\n\tat ✽.Enter Firstname as \"Hasib\"(file:///F:/webAutoSelenium/src/test/java/features/Home.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter Lastname as \"Rahat\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterLastnameAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Phonenumber as \"019892342\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterPhonenumberAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Country name as\"Bangladesh\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterCountryNameAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter City name as \"Dhaka\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterCityNameAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter Email name as \"hhrahat@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterEmailNameAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.clickOnSubmitButton()"
});
formatter.result({
  "status": "skipped"
});
});