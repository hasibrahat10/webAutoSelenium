package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import stepDefinitions.BasePage;

import java.util.List;

public class HomePage extends BasePage {

    @FindBy(xpath = "//h1[@class='title']")
    WebElement expectedText;

    @FindBy(id = "Wikipedia1_wikipedia-search-input")
    WebElement srcItem;

    @FindBy(xpath = "//input[@class='wikipedia-search-button']")
    WebElement srcButton;

    @FindBy(xpath = "//*[@id='wikipedia-search-result-link']/a")
    List<WebElement> srcResult;

    @FindBy(xpath = "//input[@id='RESULT_TextField-1']")
    WebElement firstName;

    @FindBy(id = "RESULT_TextField-2")
    WebElement lastName;


    @FindBy(id = "RESULT_TextField-3")
    WebElement phone;


    @FindBy(id = "RESULT_TextField-4")
    WebElement country;

    @FindBy(id = "RESULT_TextField-5")
    WebElement city;

    @FindBy(id = "RESULT_TextField-6")
    WebElement email;

    @FindBy(id = "FSsubmit")
    WebElement btnSubmit;


    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    public String checkTextDisplay() {

        return expectedText.getText();
    }

    public void srchText(String text) {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        srcItem.clear();
        srcItem.sendKeys(text);
    }

    public void clickSearch() {
        srcButton.click();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public String searchResultDisplay() {
        String results = srcResult.get(0).getText();
        for (WebElement webElement : srcResult) {
            System.out.println(webElement.getText());
        }
        return results;
    }

    public void setFirstName(String fname) {
        firstName.clear();
        firstName.sendKeys(fname);
    }


    public void setLastName(String lname) {
        lastName.clear();
        System.out.println("Last Name");
        lastName.sendKeys(lname);
    }

    public void setPhoneNumber(String phoneNum) {
        phone.clear();
        phone.sendKeys(phoneNum);
    }


    public void setCountry(String countryName) {
        country.clear();
        country.sendKeys(countryName);
    }


    public void setCity(String cityName) {
        city.clear();
        city.sendKeys(cityName);
    }

    public void setEmail(String emailName) {
        email.clear();
        email.sendKeys(emailName);
    }


    public void clickSubmit() {
        btnSubmit.click();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


}
