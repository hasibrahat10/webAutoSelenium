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
        System.out.println(firstName);
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


    @And("click on submit button")
    public void clickOnSubmitButton() {
        new HomePage().clickSubmit();
    }
}
