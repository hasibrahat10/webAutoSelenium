package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
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

    //Name Input
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

    //Gender select Radio Button
    @FindBy(xpath = "//label[contains(text(),'Male')] ")
    WebElement gndMale;

    @FindBy(xpath = "//label[contains(text(),'Female')] ")
    WebElement gndFemale;

//Days of the Week MultiSelect

    @FindBy(xpath = "//*[@name='RESULT_CheckBox-8']/following-sibling::label")
    List<WebElement> allDay;

    //Select the time

    @FindBy(id = "RESULT_RadioButton-9")
    WebElement time;

    //file upload

    @FindBy(id="RESULT_FileUpload-10")
    WebElement fileUpload;


// Final Submit for the Form

    @FindBy(id = "FSsubmit")
    WebElement btnSubmit;

    //Method Declare to the Elements

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

        }
        return results;
    }

    public void enterIframe() {
        driver.switchTo().frame("frame-one1434677811");
    }

    public void exitIframe() {
        driver.switchTo().defaultContent();
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

    public void setGender(String gender) {

        if (gender.equals("Male")) {
            gndMale.click();
        } else if (gender.equals("Female")) {
            gndFemale.click();
        } else {
            gndMale.click(); //Default select Gender
        }

    }

    public void selectDayWeek(String days) {
        String[] dayArray = days.split(", ");
        for (int i = 0; i < dayArray.length; i++) {
            sleepFor(1);
            for (WebElement day : allDay) {
                if (dayArray[i].equals(day.getText()))
                    if (!day.isSelected()) {
                        day.click();
                        sleepFor(1);
                    }
            }
        }
    }

    public void setMeetTime(String mtime) {
        Select dropdown = new Select(time);

        dropdown.selectByVisibleText("Afternoon");
        sleepFor(2);

    }

    public void uploadFile(){
        fileUpload.sendKeys("C:\\Users\\rootnext\\Downloads\\x.jpg");
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
