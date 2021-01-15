package stepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.HomePage;

public class HomeSteps extends BasePage {

    @Given("User already in landing page")
    public void user_already_in_landing_page() {

    }

    @Then("Text displayed with {string}")
    public void textDisplayedWith(String actualText) {
        Assert.assertEquals(actualText, new HomePage().checkTextDisplay());
    }

    @Then("Enter a text input {string} in the search box")
    public void enter_a_text_input_in_the_search_box(String text) {
        new HomePage().srchText(text);
    }

    @Then("click on search button")
    public void click_on_search_button() {
        new HomePage().clickSearch();
    }


    @And("Search result will be listed as {string}")
    public void searchResultWillBeListedAs(String result) {
        Assert.assertEquals(result, new HomePage().searchResultDisplay());
    }


    @Then("Enter Firstname as {string}")
    public void enterFirstnameAs(String firstName) {
        new HomePage().enterIframe();

        new HomePage().setFirstName(firstName);
    }

    @Then("Enter Lastname as {string}")
    public void enterLastnameAs(String lastName) {
        new HomePage().setLastName(lastName);
    }

    @Then("Enter Phonenumber as {string}")
    public void enterPhonenumberAs(String phone) {
        new HomePage().setPhoneNumber(phone);

    }

    @Then("Enter Country name as {string}")
    public void enterCountryNameAs(String country) {
        new HomePage().setCountry(country);

    }

    @Then("Enter City name as {string}")
    public void enterCityNameAs(String city) {
        new HomePage().setCity(city);

    }

    @Then("Enter Email name as {string}")
    public void enterEmailNameAs(String email) {
        new HomePage().setEmail(email);
    }

    @Then("Select the Gender as {string}")
    public void selectTheGenderAs(String gender) {

        new HomePage().setGender(gender);

    }


    @Then("Select the Days of the week as {string}")
    public void selectTheDaysOfTheWeekAs(String days) {
        new HomePage().selectDayWeek(days);
    }


    @Then("Select best time to contact as {string}")
    public void selectBestTimeToContactAs(String time) {
        new HomePage().setMeetTime(time);

    }

    @Then("Upload a file")
    public void uploadAFile() {
        new HomePage().uploadFile();
    }


    @And("click on submit button")
    public void clickOnSubmitButton() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        new HomePage().clickSubmit();
        new HomePage().exitIframe();
        driver.quit();
    }


    @Then("Click on the copy text button")
    public void clickOnTheCopyTextButton() {
        new HomePage().copyText();
    }

    @Then("Drag the item to drop")
    public void dragTheItemToDrop() {
        new HomePage().dragDrop();
    }

    @Then("Pick the date")
    public void pickTheDate() {

    }

    @Then("click on advance button")
    public void clickOnAdvanceButton() {
        new HomePage().advDetails();
    }

    @Then("click on back to safe button")
    public void clickOnBackToSafeButton() {
        new HomePage().proceedToLogin();

    }

    @Then("Enter user details")
    public void enterUserDetails() {
        new HomePage().userInfo();

    }

    @And("Click on login")
    public void clickOnLogin() {
        new HomePage().clickLogin();
    }

    @Then("Click on Skip")
    public void clickOnSkip() {
        new HomePage().clickSkip();
    }

    @Then("Title should be {string}")
    public void titleShouldBe(String actualText) {
        Assert.assertEquals(actualText, new HomePage().dashboardTitle());
        driver.quit();

    }
}
