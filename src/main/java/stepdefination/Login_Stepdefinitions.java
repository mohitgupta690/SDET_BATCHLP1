package stepdefination;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import common.Wrapper;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

/* normal feature file*/
/*public class Login_Stepdefinitions  {*/

 public class Login_Stepdefinitions extends Wrapper {

static WebDriver driver;
String url = "http://elearningm1.upskills.in/";

@Given("^I launch the application$")
public void i_launch_the_application() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\MohitGupta\\Downloads\\chromedriver_win32\\chromedriver.exe");
	
    driver = new ChromeDriver();
    driver.get(url);
}

@And("^I clicked signup$")
public void i_clicked_signup() throws Throwable {
 driver.findElement(By.partialLinkText("Sign up!")).click();
}   
 /* @And("^I provide first name \"([^\"]*)\"$")
 public void i_provide_first_name(String firstname) throws Throwable {
        // Write code here that turns the phrase above into concrete actions

     driver.findElement(By.name("firstname")).sendKeys(firstname);*/
     
     @And("^I provide first name$")
     public void i_provide_first_name() throws Throwable {
            // Write code here that turns the phrase above into concrete actions
         driver.findElement(By.name("firstname")).sendKeys(Wrapper.getDataFromExcel(1,0));
            
  }  
  /*@And("^I provide last name \"([^\"]*)\"$")
  public void i_provide_last_name(String lastname) throws Throwable {
         // Write code here that turns the phrase above into concrete actions

      driver.findElement(By.name("lastname")).sendKeys(lastname);*/
     
     @And("^I provide last name$")
     public void i_provide_last_name() throws Throwable {
            // Write code here that turns the phrase above into concrete actions

         driver.findElement(By.name("lastname")).sendKeys(Wrapper.getDataFromExcel(1,1));
     
   }  
    
  /*@And("^I provide email \"([^\"]*)\"$")
  public void i_provide_email(String email) throws Throwable {
         // Write code here that turns the phrase above into concrete actions

      driver.findElement(By.name("email")).sendKeys(email);*/
     
     @And("^I provide email$")
     public void i_provide_email() throws Throwable {
            // Write code here that turns the phrase above into concrete actions

         driver.findElement(By.name("email")).sendKeys(Wrapper.getDataFromExcel(1,2));
   } 
  /*@And("^I provide username \"([^\"]*)\"$")
  public void i_provide_username(String username) throws Throwable {
         // Write code here that turns the phrase above into concrete actions

      driver.findElement(By.name("username")).sendKeys(username);*/
     
     @And("^I provide username$")
     public void i_provide_username() throws Throwable {
            // Write code here that turns the phrase above into concrete actions

         driver.findElement(By.name("username")).sendKeys(Wrapper.getDataFromExcel(1,3));
     
   } 
 /* @And("^I provide password \"([^\"]*)\"$")
  public void i_provide_password(String password) throws Throwable {
         // Write code here that turns the phrase above into concrete actions

      driver.findElement(By.name("pass1")).sendKeys(password);*/
     
     @And("^I provide password$")
     public void i_provide_password() throws Throwable {
            // Write code here that turns the phrase above into concrete actions

         driver.findElement(By.name("pass1")).sendKeys(Wrapper.getDataFromExcel(1,4));
     
   } 
  /*@And("^I provide confirm password \"([^\"]*)\"$")
  public void i_provide_confirm_password(String confirmpassword) throws Throwable {
         // Write code here that turns the phrase above into concrete actions

      driver.findElement(By.name("pass2")).sendKeys(confirmpassword);*/
     
     @And("^I provide confirm password$")
     public void i_provide_confirm_password() throws Throwable {
            // Write code here that turns the phrase above into concrete actions

         driver.findElement(By.name("pass2")).sendKeys(Wrapper.getDataFromExcel(1,5));
     
   } 
 /* @And("^I provide phone \"([^\"]*)\"$")
  public void i_provide_phone(String phone) throws Throwable {
         // Write code here that turns the phrase above into concrete actions

      driver.findElement(By.name("phone")).sendKeys(phone);*/
     
     @And("^I provide phone$")
     public void i_provide_phone() throws Throwable {
            // Write code here that turns the phrase above into concrete actions

         driver.findElement(By.name("phone")).sendKeys(Wrapper.getDataFromExcel(1,6));
  }
  @And("^I clicked profile$")
  public void i_clicked_profile() throws Throwable {
	  driver.findElement(By.xpath("//input[@type='radio']//following::p[contains(text(), 'Follow courses')]")).click();
		
	   
  }
  
  @And("^I clicked profileforteacher$")
  public void i_clicked_profileforteacher() throws Throwable {
 driver.findElement(By.xpath("//input[@type='radio']//following::p[contains(text(), 'Teach courses')]")).click();
	Thread.sleep(5000);   
  }
  
  @And("^I provide language$")
  public void i_provide_language() throws Throwable {
         // Write code here that turns the phrase above into concrete actions
    Select drpdown=new Select (driver.findElement(By.name("language")));
     drpdown.selectByVisibleText("English");
      
            }
  @Then("^I clicked register$")
  public void i_clicked_register() throws Throwable {
  driver.findElement(By.name("submit")).click();
  }
         
 }