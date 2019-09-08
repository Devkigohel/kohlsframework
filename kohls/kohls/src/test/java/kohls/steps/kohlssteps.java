package kohls.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class kohlssteps {
	WebDriver driver;
	@Before()
	public void setup()  {
		System.setProperty("webdriver.gecko.driver","C:\\Users\\n\\Desktop\\kohls\\kohls\\src\\test\\java\\kohls\\resources\\geckodriver.exe");
		 this.driver=new FirefoxDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60,TimeUnit.SECONDS);
	}
	@After()
	public void tearDown() throws Throwable {
		Thread.sleep(3000);
		driver.manage().deleteAllCookies();
		//driver.close();
		//driver.quit();
	}
	@Given("^user navigates to \"([^\"]*)\"$")
	public void user_navigates_to(String url) throws Throwable {
		 driver.get(url);
	}

	@Given("^user clicks on Account button$")
	public void user_clicks_on_Account_button() throws Throwable {
	   driver.findElement(By.cssSelector("#utility-nav")).click();
		 Thread.sleep(2000);
	}

	@Given("^user clicks on signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
	    driver.findElement(By.className("sign-in-link")).click();
	    Thread.sleep(2000);
	}

	@Given("^user enters the \"([^\"]*)\" email address$")
	public void user_enters_the_email_address(String emailaddress) throws Throwable {
		for(String winHandle : driver.getWindowHandles()) {
	    	driver.switchTo().window(winHandle);
	    }
	    Thread.sleep(2000);
	    driver.findElement(By.name("loginEmail")).sendKeys(emailaddress);
	}

	@Given("^user enters the \"([^\"]*)\"$")
	public void user_enters_the(String password) throws Throwable {
		driver.findElement(By.name("loginPassword")).sendKeys(password);
	}

	@When("^user clicks on sign in button$")
	public void user_clicks_on_sign_in_button() throws Throwable {
	   driver.findElement(By.id("Profilelogin")).click();
	}

	@Then("^the user should be presented with the following pompt alert \"([^\"]*)\"$")
	public void the_user_should_be_presented_with_the_following_pompt_alert(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}



}
