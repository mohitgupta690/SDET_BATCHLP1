@CourseRegistration
Feature: This feature is to register the Application
    I want to use this template for my feature file

 

@SignupCheck
Scenario: To verify that user is able to signup and register the course as student
    Given I launch the application
    And I clicked signup
    And I provide first name "mohit"
    And I provide last name "gupta"
    And I provide email "abc_11@gmail.com"
    And I provide username "mohit123"
    And I provide password "Password@123"
    And I provide confirm password "Password@123"
    And I provide phone "1234567890"
    And I clicked profile
    And I provide language
    Then I clicked register
   
    
    @SignupCheckasteacher
Scenario: To verify that user is able to signup and register the course as teacher
    Given I launch the application
    And I clicked signup
    And I provide first name "raj"
    And I provide last name "raman"
    And I provide email "raj_11@gmail.com"
    And I provide username "raj123"
    And I provide password "Password@123"
    And I provide confirm password "Password@123"
    And I provide phone "1234567890"
    And I clicked profileforteacher
    And I provide language
    Then I clicked register 
   