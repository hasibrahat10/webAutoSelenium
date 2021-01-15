$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Home.feature");
formatter.feature({
  "name": "Homepage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login thisheart Dashboard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test-04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click on advance button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.clickOnAdvanceButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on back to safe button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.clickOnBackToSafeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.enterUserDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.clickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Skip",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.clickOnSkip()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title should be \"ThisHeart- Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.HomeSteps.titleShouldBe(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[ThisHeart- Dashboard]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.HomeSteps.titleShouldBe(HomeSteps.java:156)\r\n\tat ✽.Title should be \"ThisHeart- Dashboard\"(file:///F:/webAutoSelenium/src/test/java/features/Home.feature:42)\r\n",
  "status": "failed"
});
});