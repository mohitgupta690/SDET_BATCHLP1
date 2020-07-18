@CourseRegistrationusingexcel
Feature: This feature is to register the Application
    I want to use this template for my feature file

 

 @SignupCheck
 Scenario: To verify that user is able to signup and register the course as student
   Given I launch the application
    And I clicked signup
    And I provide first name 
    And I provide last name 
    And I provide email 
    And I provide username 
    And I provide password 
    And I provide confirm password 
    And I provide phone 
    And I clicked profile
    And I provide language
    Then I clicked register
   
    
    @SignupCheckasteacher
Scenario: To verify that user is able to signup and register the course as teacher
    Given I launch the application
    And I clicked signup
    And I provide first name 
    And I provide last name 
    And I provide email 
    And I provide username 
    And I provide password 
    And I provide confirm password 
    And I provide phone 
    And I clicked profileforteacher
    And I provide language
    Then I clicked register 
   