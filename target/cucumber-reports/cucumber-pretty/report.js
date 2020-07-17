$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("project.feature");
formatter.feature({
  "line": 2,
  "name": "This feature is to register the Application",
  "description": "  I want to use this template for my feature file",
  "id": "this-feature-is-to-register-the-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CourseRegistration"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "To verify that user is able to signup and register the course as student",
  "description": "",
  "id": "this-feature-is-to-register-the-application;to-verify-that-user-is-able-to-signup-and-register-the-course-as-student",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SignupCheck"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I clicked signup",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I provide first name \"mohit\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I provide last name \"gupta\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I provide email \"abc_11@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I provide username \"mohit123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I provide password \"Password@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I provide confirm password \"Password@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I provide phone \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I clicked profile",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I provide language",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I clicked register",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Stepdefinitions.i_launch_the_application()"
});
formatter.result({
  "duration": 12750734800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_signup()"
});
formatter.result({
  "duration": 4447070900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohit",
      "offset": 22
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_first_name(String)"
});
formatter.result({
  "duration": 173298500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gupta",
      "offset": 21
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_last_name(String)"
});
formatter.result({
  "duration": 145518600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc_11@gmail.com",
      "offset": 17
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_email(String)"
});
formatter.result({
  "duration": 213291600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohit123",
      "offset": 20
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_username(String)"
});
formatter.result({
  "duration": 114052800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 20
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_password(String)"
});
formatter.result({
  "duration": 220334300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 28
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_confirm_password(String)"
});
formatter.result({
  "duration": 143394300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 17
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_phone(String)"
});
formatter.result({
  "duration": 170197900,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_profile()"
});
formatter.result({
  "duration": 81081600,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_provide_language()"
});
formatter.result({
  "duration": 131921000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_register()"
});
formatter.result({
  "duration": 1036449200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To verify that user is able to signup and register the course as teacher",
  "description": "",
  "id": "this-feature-is-to-register-the-application;to-verify-that-user-is-able-to-signup-and-register-the-course-as-teacher",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@SignupCheckasteacher"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I clicked signup",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I provide first name \"raj\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I provide last name \"raman\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I provide email \"raj_11@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I provide username \"raj123\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I provide password \"Password@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I provide confirm password \"Password@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I provide phone \"1234567890\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I clicked profileforteacher",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I provide language",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I clicked register",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Stepdefinitions.i_launch_the_application()"
});
formatter.result({
  "duration": 10289923700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_signup()"
});
formatter.result({
  "duration": 4008865300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raj",
      "offset": 22
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_first_name(String)"
});
formatter.result({
  "duration": 151590300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raman",
      "offset": 21
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_last_name(String)"
});
formatter.result({
  "duration": 141588000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raj_11@gmail.com",
      "offset": 17
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_email(String)"
});
formatter.result({
  "duration": 208937000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raj123",
      "offset": 20
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_username(String)"
});
formatter.result({
  "duration": 127374500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 20
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_password(String)"
});
formatter.result({
  "duration": 207709100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password@123",
      "offset": 28
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_confirm_password(String)"
});
formatter.result({
  "duration": 143861300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 17
    }
  ],
  "location": "Login_Stepdefinitions.i_provide_phone(String)"
});
formatter.result({
  "duration": 180446800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_profileforteacher()"
});
formatter.result({
  "duration": 5101806000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_provide_language()"
});
formatter.result({
  "duration": 80405800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Stepdefinitions.i_clicked_register()"
});
formatter.result({
  "duration": 1130702800,
  "status": "passed"
});
});