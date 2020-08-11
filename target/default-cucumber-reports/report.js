$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ilkdosya.feature");
formatter.feature({
  "name": "Googleda arama yapma",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@googlearama"
    }
  ]
});
formatter.scenario({
  "name": "TC01_kullanici googleda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googlearama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici google sayfasindadir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.kullanici_google_sayfasindadir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kemal ozden aramasi yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.kullanici_kemal_ozden_aramasi_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "arama sayfasinin basligi dogrulanir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.arama_sayfasinin_basligi_dogrulanir()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.GoogleAramaStepDefinitions.arama_sayfasinin_basligi_dogrulanir(GoogleAramaStepDefinitions.java:26)\r\n\tat ✽.arama sayfasinin basligi dogrulanir(file:///C:/Users/isimsiz/IdeaProjects/NewCucumberFramework/src/test/resources/features/ilkdosya.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});