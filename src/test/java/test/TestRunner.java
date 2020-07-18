package test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

 @RunWith(Cucumber.class)
/* for normal data from feature file
 @CucumberOptions(features="feature_files", glue= "stepdefination",  
 */
 /* for excel */
@CucumberOptions(features="feature_files", glue= "stepdefination",tags= "@CourseRegistrationusingexcel",
format=
{"pretty",
"html:target/cucumber-reports/cucumber-pretty",
"json:target/cucumber-reports/CucumberTestReport.json"})

 

public class TestRunner {

 

}