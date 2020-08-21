@youtube
  Feature: Youtubeda videonun izlenme sayısını bulma
    Scenario: TC02_kullanıcı youtubeda bir videoyu açar ve izlenme sayısını alır
      Given kullanici youtubea gider
      And kullanici techproed aramasi yapar
      And kullanici bir videoya tiklar
      Then kullanici videonun bilgilerini alir
