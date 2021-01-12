package stepDefinitions;

import io.cucumber.java.Before;
import org.junit.After;

import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {
    @Before
    public void setUpDriver() {
        startDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.get("http://testautomationpractice.blogspot.com/");
    }

    @After
    public void tearDown() {
        stopDriver();
    }

}
