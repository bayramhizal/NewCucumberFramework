package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.YouTube;
import utilities.Driver;

public class YoutubeVideoBilgileriStepDefinitions {

    private YouTube youTube = new YouTube();

    @Given("kullanici youtubea gider")
    public void kullanici_youtubea_gider() {
        Driver.getDriver().get("https://youtube.com");
    }

    @Given("kullanici techproed aramasi yapar")
    public void kullanici_techproed_aramasi_yapar() {
        /*try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {

        }*/
        youTube.aramaKutusu.sendKeys("techproed" + Keys.ENTER);
        // youTube.aramaKutusu.submit()
    }

    @Given("kullanici bir videoya tiklar")
    public void kullanici_bir_videoya_tiklar() {
        youTube.tiklayacagimizVideo.click();

    }

    @Then("kullanici videonun bilgilerini alir")
    public void kullanici_videonun_bilgilerini_alir() {
        String goruntulenmeSayisi = youTube.videoGoruntulenmeSayisi.getText();
        System.out.println(goruntulenmeSayisi);

        String yuklenmeTarihi = youTube.videoYuklenmeTarihi.getText();
        System.out.println(yuklenmeTarihi);
    }

}
