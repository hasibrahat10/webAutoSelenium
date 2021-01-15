package stepDefinitions;

import io.cucumber.java.Before;
import org.junit.After;

public class Hooks extends BasePage {
    @Before
    public void setUpDriver() {
        startDriver();
        driver.manage().window().maximize();
//        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//        driver.get("http://testautomationpractice.blogspot.com/");
        driver.get(" https://thisheart.co/login");
    }

    @After
    public void tearDown() {
        stopDriver();
    }

}
