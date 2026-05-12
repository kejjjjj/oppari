
[1]: https://github.com/kejjjjj/oppari/blob/main/dokumentaation_merkitys.png?raw=true
[2]: https://github.com/kejjjjj/oppari/blob/main/markdown_example.png?raw=true
[3]: https://github.com/kejjjjj/oppari/blob/main/wordpress_tunnistus_network.png?raw=true
[4]: https://github.com/kejjjjj/oppari/blob/main/hamk_wordpress_api_rajapinta.png?raw=true
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/using_the_w3c_dom_level_1_core-doctree.jpg
[6]: https://github.com/kejjjjj/oppari/blob/main/docusaurus.png?raw=true
[7]: https://github.com/kejjjjj/oppari/blob/main/muunnos1.png?raw=true
[8]: https://github.com/kejjjjj/oppari/blob/main/muunnos2.png?raw=true
[9]: https://github.com/kejjjjj/oppari/blob/main/image.png?raw=true

# Abstrakti

Opinnäytetyön tavoitteena oli selvittää, miten Markdown soveltuu teknisen dokumentaation kirjoittamiseen ohjelmistoprojekteissa sekä millaisia etuja ja rajoituksia sillä on verrattuna perinteisiin dokumentointimenetelmiin. Työssä tarkasteltiin myös, millä tavoin Markdown tukee dokumentaation ylläpitoa versionhallintajärjestelmissä ja automatisoiduissa julkaisuprosesseissa.

Työn teoreettisessa osuudessa käsiteltiin dokumentaation merkitystä työelämässä, teknisen dokumentaation periaatteita sekä yleisimpiä dokumentointimenetelmiä. Lisäksi tarkasteltiin Markdownin syntaksia, laajennuksia ja rajoituksia sekä Docs-as-Code-ajattelumallia. Opinnäytetyö toteutettiin laadullisena tapaustutkimuksena, jossa hyödynnettiin kokeellista lähestymistapaa.

Tutkimuksen käytännön osuudessa Hämeen ammattikorkeakoulun julkista, WordPress-pohjaista verkkodokumentaatiota kerättiin ohjelmallisesti WordPressin REST API -rajapinnan kautta ja muunnettiin Markdown-muotoon automatisoidulla työnkululla. Dokumentaatio tallennettiin versionhallintaan Gitillä, julkaistiin staattisena verkkosivustona Docusauruksen avulla ja automatisoitiin GitHub Actions -työnkuluilla. Lisäksi Markdown-muotoista sisältöä muunnettiin Pandocin avulla opinnäytetyön Word-muotoon metatutkimuksellisena osiona.

Tulosten perusteella Markdown osoittautui toimivaksi ja ylläpidettäväksi ratkaisuksi teknisen dokumentaation tuottamiseen erityisesti ympäristöissä, joissa dokumentaatio on osa ohjelmistokehitysprosessia. Markdown paransi dokumentaation rakenne- ja versionhallintaa sekä mahdollisti korkean automaation tason. Keskeisimpinä rajoitteina tunnistettiin Markdownin rajallinen visuaalinen ilmaisukyky sekä Word-muunnoksen puutteellinen muotoilun automatisointi.

# Abstract

The purpose of this thesis was to examine how Markdown can be utilized in writing technical documentation in software projects and to identify its advantages and limitations compared to traditional documentation methods. The thesis also investigated how Markdown supports documentation maintenance in version control systems and automated publishing workflows.

The theoretical section discusses the role of documentation in working life, principles of technical documentation, and commonly used documentation methods. In addition, the fundamentals, extensions, and limitations of Markdown as well as the Docs-as-Code approach are introduced. The study was conducted as a qualitative case study with an experimental research approach.

In the practical part of the thesis, public WordPress-based documentation from Häme University of Applied Sciences was programmatically collected using the WordPress REST API and converted into Markdown format through an automated workflow. The documentation was managed using Git version control, published as a static website with Docusaurus, and automated using GitHub Actions. As a meta-study, Markdown-based content was also converted into a formal thesis document in Microsoft Word format using Pandoc.

The results indicate that Markdown is a suitable and maintainable solution for technical documentation, particularly in software development environments where documentation is produced collaboratively and continuously. Markdown improves structural clarity, supports version control effectively, and enables a high level of automation. The main limitations identified were its restricted visual expressiveness and the challenges related to fully automating document formatting when converting Markdown into Word format.

# Sanasto
**Markdown**	Kevyt merkintäkieli, jonka avulla voidaan tuottaa rakenteellista ja helposti        luettavaa tekstiä yksinkertaisella syntaksilla.

**Git** 	Versionhallintajärjestelmä, jonka avulla voidaan seurata tiedostojen muutoksia, 
hallita eri versioita ja mahdollistaa yhteistyö useiden käyttäjien välillä.

**Github**	Verkkopohjainen alusta, joka hyödyntää Git-versionhallintaa ja mahdollistaa projektien tallentamisen, jakamisen ja yhteistyön.

**Versionhallinta**	Menetelmä, jolla seurataan tiedostojen muutoksia ja hallitaan eri versioita järjestelmällisesti.

**Web scraping**	Menetelmä, jossa tietoa kerätään automaattisesti verkkosivuilta ohjelmallisesti.

**HTML**	Verkkosivujen rakenteen määrittelyyn käytettävä merkintäkieli.

**Markdown-muunnos**	Prosessi, jossa sisältö muunnetaan esimerkiksi HTML-muodosta Markdown-muotoon tai päinvastoin.

**Static Site Generator**	Työkalu, joka muuntaa esimerkiksi Markdown-tiedostoja valmiiksi HTML-sivuiksi ilman dynaamista palvelinpuolen käsittelyä.

**Dokumentaatio**	Kirjallinen kuvaus järjestelmästä, prosessista tai tuotteesta, jonka tarkoituksena on välittää tietoa käyttäjille tai kehittäjille.

**CI/CD**	Kehitysprosessi, jossa muutokset integroidaan ja julkaistaan automaattisesti osana ohjelmistokehitystä.

**JavaScript**	Ohjelmointikieli, jota käytetään erityisesti web-sovellusten kehittämisessä ja selaimessa suoritettavassa logiikassa.

**TypeScript**	JavaScriptiin perustuva ohjelmointikieli, joka sisältää staattisen tyyppijärjestelmän.

**Visual Studio Code**	Koodieditori, joka tukee Markdownia sekä tarjoaa lisäosia ja työkaluja dokumentaation tuottamiseen.

**Pandoc**	Työkalu, jolla voidaan muuntaa dokumentteja eri formaattien välillä, kuten Markdownista Word- tai PDF-muotoon.

**Zotero**	Viitteidenhallintatyökalu, jota käytetään lähteiden keräämiseen, hallintaan ja viittausten tuottamiseen.

**BibTeX**	Viitetiedostomuoto, jota käytetään lähteiden tallentamiseen ja hallintaan erityisesti tieteellisessä kirjoittamisessa.

**GitHub-repositorio**	Projektin tallennuspaikka GitHubissa, joka sisältää tiedostot, versionhistorian ja mahdollistaa yhteistyön.

**JSON** Kevyt, ihmisluettava ja koneluettava tiedonvaihtoformaatti.

**Wordpress** Avoimeen lähdekoodiin perustuva sisällönhallintajärjestelmä (CMS).

**REST** Arkkitehtuurimalli, jonka tarkoitus on mahdollistaa järjestelmien välinen kevyt ja standardoitu tiedonsiirto internetissä.

**API** Komponenttien ja moduulien välinen raja ohjelmoitavassa järjestelmässä.

# 1 Introduction

Digitaalisen dokumentaation merkitys on kasvanut työelämässä, jossa tiedon selkeä ja helposti ylläpidettävä esittäminen on tärkeää. Teknisessä viestinnässä ja ohjelmistokehityksessä tarvitaan ratkaisuja, jotka edesauttavat versionhallintaa ja yhteistyötä. Tästä näkökulmasta Markdown on noussut varteenotettavaksi vaihtoehdoksi perinteisille dokumentointimenetelmille, kuten tekstinkäsittelyohjelmille ja HTML-pohjaisille ratkaisuille. Kiinnostus aiheeseen pohjautuu tarpeeseen löytää yksinkertaisempi tapa tuottaa ja ylläpitää dokumentaatiota, joka on helposti muokattavissa ja siirrettävissä eri ympäristöjen välillä.

Työn lähtökohtana on tarkastella Markdownin syntaksia sekä sen tarjoamia mahdollisuuksia dokumentaation tuottamisessa. Lisäksi työssä vertaillaan Markdownin etuja ja rajoituksia suhteessa muihin yleisesti käytettyihin dokumentaatiomenetelmiin. Lähtökohtana toimii myös käytännön tarve: olemassa olevan dokumentaation muuntaminen Markdown-muotoon, jotta sen soveltuvuutta voidaan arvioida todellisessa käyttötilanteessa. Tätä varten työssä tuotetaan esimerkkitoteutus kopioimalla HAMK:n tekstipohjaisia dokumentaatiosivuja ja muokkaamalla ne Markdown-muotoon hyödyntäen ajanmukaisia työkaluja, kuten versionhallintaa ja web scraping -menetelmiä.

Työelämäyhteys näkyy erityisesti siinä, että työn tulokset tarjoavat konkreettisia keinoja dokumentaation kehittämiseen organisaatotasolla. Dokumentaation tuottaminen on oleellinen osa monien asiantuntijatehtävien arkea, ja nykyaikaisemmat työkalut voivat parantaa sekä työn laatua että tuottavuutta. Työ on suunnattu erityisesti HAMK:n henkilöstölle, mutta sen tuloksia voidaan soveltaa laajemminkin erilaisissa organisaatioissa, joissa dokumentaation hallinta on tärkeää. Vaikka työn lopputulos toimii ensisijaisesti luonnoksena ja esimerkkinä, se tarjoaa pohjan mahdolliselle Markdownin käyttöönotolle sekä auttaa arvioimaan siihen liittyviä vaatimuksia ja hyötyjä käytännön työelämässä.

Työssä haetaan vastauksia muun muassa seuraaviin kysymyksiin:

1. Miten Markdown soveltuu teknisen dokumentaation kirjoittamiseen ohjelmistoprojekteissa?
2. Mitkä ovat Markdownin edut ja rajoitukset verrattuna muihin dokumentointimenetelmiin?
3. Millä tavoin Markdown helpottaa dokumentaation ylläpitoa versionhallintajärjestelmissä?

# 2 Työn teoreettinen tausta
### 2.1 Dokumentaation merkitys työelämässä
Dokumentaatio on osa organisaation tiedonhallintaa, sillä se auttaa säilyttämään ja jakamaan tietoa tilanteissa, joissa alkuperäiset tekijät eivät enää ole mukana tai tieto ei ole helposti saatavilla. Ilman dokumentaatiota organisaatiot joutuvat usein toimimaan puutteellisen tiedon varassa, mikä voi hidastaa työskentelyä ja vaikeuttaa uusien projektien käynnistämistä. Hyvin toteutettu dokumentaatio tarjoaa sen sijaan selkeän lähtökohdan päätöksenteolle ja työn jatkamiselle, mikä tekee siitä enemmän kuin pelkän muodollisuuden. @zotero-item-12

Dokumentaatio on ohjelmistokehityksen ja tiimityön tukena koko projektin elinkaaren ajan. Sen avulla varmistetaan, että tieto esimerkiksi järjestelmän rakenteesta, käytännöistä ja toteutustavoista on kaikkien tiimin jäsenten saatavilla ja ymmärrettävissä. Tämä helpottaa erityisesti uusien työntekijöiden perehdyttämistä sekä parantaa yhteistyötä tilanteissa, joissa työ jakautuu useille henkilöille tai tiimeille. Laadukas dokumentaatio vähentää myös riippuvuutta yksittäisten henkilöiden osaamisesta ja parantaa projektin sujuvuutta. @zotero-item-13

### 2.1.1 Tekninen dokumentaatio
Tekninen dokumentaatio on kirjallista aineistoa, jonka tavoitteena on selittää, kuvata ja ohjeistaa teknisten järjestelmien, ohjelmistojen tai prosessien toimintaa. Tekninen dokumentaatio ei keskity tarinallisuuteen, vaan tarjoaa selkeitä, tarkkoja ja käytännöllisiä ohjeita sekä tietoa järjestelmän käytöstä ja rakenteesta. @zotero-item-14

Teknisen dokumentaation piirteenä on sen jatkuva kehittyminen. Järjestelmät ja ohjelmistot muuttuvat jatkuvasti, joten dokumentaation on pysyttävä mukana näissä muutoksissa, jotta se säilyttää hyödyllisyytensä. Tästä syystä tekninen dokumentaatio nähdään usein elävänä kokonaisuutena, jota päivitetään ja ylläpidetään koko järjestelmän elinkaaren ajan.

### 2.1.2 Hyvän dokumentaation periaatteet
Hyvä dokumentaatio perustuu selkeisiin periaatteisiin, joiden tavoitteena on tehdä sisällöstä helposti ymmärrettävää, yhdenmukaista ja löydettävää. Dokumentaation tulisi olla ensisijaisesti käyttäjälähtöistä, eli sen sisältö ja rakenne suunnitellaan kohdeyleisön tarpeiden mukaan. Esimerkiksi tiedon esitystapa pidetään yksinkertaisena ja tarkoituksenmukaisena ilman turhaa monimutkaisuutta. @zotero-item-15

Hyvään dokumentaatioon kuuluu esimerkkien hyödyntäminen, sillä konkreettiset esimerkit auttavat ymmärtämään abstrakteja käsitteitä ja nopeuttavat oppimista. Dokumentaation tulisi myös olla johdonmukaista sekä kielen että rakenteen osalta, jotta sen käyttö olisi luontevaa eri osioiden välillä. @zotero-item-16

![Konkreettinen esimerkki][1]

*Kuva 1.* Konkreettinen esimerkki abstraktista käsitteestä

Ajantasaisuus on tärkeää, sillä vanhentunut dokumentaatio voi olla jopa haitallisempaa kuin sen puuttuminen. Tämän vuoksi dokumentaation ylläpito ja päivittäminen tulisi olla jatkuva prosessi osana kehitystyötä. Dokumentaation tulisi myös olla helposti ylläpidettävissä ja sijoitettu lähelle itse järjestelmää tai koodia, jotta sen päivittäminen olisi luonteva osa muuta työskentelyä. @zotero-item-17

## 2.2 Dokumentaatiomenetelmät ja niiden kehitys

Dokumentaatiomenetelmät ovat kehittyneet pitkälti teknologian ja työskentelytapojen muutosten mukana. Aikaisemmin dokumentaatio tuotettiin pääasiassa erillisillä tekstinkäsittelyohjelmilla, ja sitä ylläpidettiin tiedostomuotoisina dokumentteina. Tämä malli oli yksinkertainen, mutta sen haasteena oli versioiden hallinnan vaikeus sekä se, että usean henkilön samanaikainen työskentely saman dokumentin parissa oli usein hankalaa.

Tätä varten kehitettiin menetelmä nimeltä "Docs-as-Code", joka viittaa menetelmään, jossa dokumentaatiota käsitellään samoilla työkaluilla kun koodia tehdessä. Tämä menetelmä mahdollistaa yhteistyön ja versionhallinnan, sillä dokumentaatio ei ole enää yksittäinen staattinen tiedosto, vaan osa laajempaa kehitysympäristöä. Tällaisessa mallissa dokumentaatio elää yhdessä järjestelmän ja sen kehityksen kanssa, ja siihen tehtävät muutokset voidaan hallita samalla tavalla kuin ohjelmakoodia versionhallinnan avulla. Tämä vähentää ristiriitoja eri versioiden välillä ja parantaa dokumentaation ajantasaisuutta. @zotero-item-18

### 2.2.1 Perinteiset dokumentointimenetelmät (tekstinkäsittelyohjelmat)

Perinteiset dokumentointimenetelmät perustuvat pääasiassa tekstinkäsittelyohjelmien, kuten Microsoft Wordin käyttöön. Näissä työkaluissa dokumentaatio tuotetaan valmiiksi muotoiltuna tiedostona. Tekstinkäsittelyohjelmat ovat laajasti käytössä erityisesti organisaatioissa, joissa dokumentaation tuottaminen ei vaadi teknistä osaamista, ja ne soveltuvat hyvin esimerkiksi raporttien, ohjeiden ja muiden virallisten asiakirjojen laatimiseen. @zotero-item-19

### 2.2.2 HTML-pohjainen dokumentointi

HTML-pohjainen dokumentointi perustuu verkkoteknologioiden hyödyntämiseen, jossa dokumentaatio tuotetaan HyperText Markup Language (HTML) -kielellä selaimilla tarkisteltaviksi. HTML mahdollistaa linkitettävän dokumentaation, jossa sisältö jaetaan useisiin sivuihin ja yhdistetään toisiinsa hyperlinkkien avulla. HTML-dokumentaatiota hyödynnetään laajoissa kokonaisuuksissa, joissa tiedon jäsentely ja navigoitavuus on tärkeää. @zotero-item-20

HTML:n rinnalla voidaan käyttää tyylitiedostoja (CSS) ja skriptejä (Javascript), joiden avulla dokumentaation ulkoasua ja toiminnallisuutta voidaan muokata monipuolisemmin. Näiden avulla saadaan esimerkiksi responsiivista suunnittelua ja interaktiivisia elementtejä, jotka parantavat käyttäjäkokemusta erityisesti verkossa julkaistussa dokumentaatiossa. @zotero-item-20

# 3 Markdown ja dokumentaatiokäytännöt ohjelmistokehityksessä

## 3.1 Markdownin perusteet

Markdown on kevyt merkintäkieli, jonka tarkoituksena on mahdollistaa helposti kirjoitettavan tekstin tuottaminen yksinkertaisella tavalla. Sen idea on erottaa sisällön rakenne ja ulkoasu toisistaan siten, että teksti säilyy selkeänä myös ilman erillistä muotoilua. Markdown kehitettiin tavaksi kirjoittaa dokumentaatiota ilman HTML-kielen osaamista. Markdownia käytetään erityisesti teknisessä dokumentaatiossa, ohjelmistokehityksessä sekä verkkosisällön tuottamisessa sen helpon oppimiskynnyksen takia. @zotero-item-21

Markdownin syntaksi koostuu yksinkertaisista merkeistä, kuten risuaidoista (#) otsikoiden merkitsemisessä, tähdistä (*) tai alaviivoista (_) korostuksissa sekä listoissa. Tämän ansiosta dokumentaatio voidaan kirjoittaa pelkkänä tekstinä ilman erillisiä muotoilutyökaluja, ja se on helposti luettavissa myös raakamuodossa. Markdown-tiedostot ovat kevyitä ja yhteensopivia useiden eri järjestelmien kanssa, mikä tekee niistä järkevän vaihtoehdon versionhallinnassa. @zotero-item-23

Markdownin etu on sen muunneltavuus. Sama sisältö voidaan muuntaa automaattisesti esimerkiksi HTML-, PDF- tai muihin formaatteihin erilaisten formatointityökalujen avulla. Tämän ansiosta sisältö voidaan uudelleenkäyttää eri ympäristöissä ilman, että sitä tarvitsee kirjoittaa uudelleen. Markdown toimii siltana yksinkertaisen tekstin ja monipuolisten julkaisumuotojen välillä, mikä tekee siitä työkalun nykyaikaisessa dokumentaatiotyössä. @zotero-item-22

### 3.1.1 Markdownin historia ja kehitystausta

Markdown kehitettiin vuonna 2004, kun John Gruver loi kielen yhteistyössä Aaron Swartz kanssa. Sen taustalla olivat aiemmat tavat merkitä tekstiä esimerkiksi sähköposteissa ja keskustelupalstoilla sekä varhaisemmat merkintäkielet, kuten setext ja reStructuredText. @zotero-item-24

Markdownin tavoitteena oli mahdollistaa helposti luettavan ja kirjoitettavan pelkän tekstin tuottaminen, jota voidaan tarvittaessa muuntaa rakenteellisesti oikeaksi HTML- tai XHTML-muotoiseksi dokumentiksi. Erityistä huomiota kiinnitettiin luettavuuteen, sillä tekstin tuli olla ymmärrettävää myös ilman muotoilun tulkintaa, toisin kuin monimutkaisemmissa merkintäkielissä.

Markdownin tueksi kehitettiin myös työkaluja, kuten ohjelma, joka muuntaa merkityn tekstin automaattisesti HTML-muotoon. Tämä mahdollisti sisällön julkaisemisen verkossa ilman, että kirjoittajan tarvitsee hallita HTML-kieltä. @zotero-item-24

### 3.1.2 Markdownin perussyntaksi ja rakenteet

Markdownin perussyntaksi perustuu yksinkertaisiin ja helposti muistettaviin merkintätapohin, joiden avulla tekstiä voidaan jäsentää ilman monimutkaisia komentoja. Otsikot merkitään risuaidoilla (#), jolloin otsikkotaso määräytyy käytettyjen merkkien lukumäärän mukaan. Tekstin **korostamiseen** käytetään esimerkiksiä tähtiä (\*) tai alaviivoja (\_), joilla voidaan ilmaista _kursivointi_ tai **lihavointi**. Listat voidaan toteuttaa joko järjestämättöminä viivojen (-) tai tähtien (*) avulla tai järjestettyinä numeroiden avulla. @zotero-item-25

Markdown mahdollistaa myös linkkien ja kuvien lisäämisen selkeällä syntaksilla, jossa linkkiteksti ja osoite eroitetaan toisistaan hakasulkeiden [] ja sulkujen avulla (). Koodin esittämiseen voidaan käyttää yksittäisi tai kolmoistakaperäisiä heittomerkkejä (\`), mikä tekeee siitä erityisen hyödyllisen ohjelmistokehityksessä. Näiden rakenteiden ansiosta Markdown soveltuu hyvin tekniseen dokumentointiin. @zotero-item-25

![Markdown esimerkki][2]

*Kuva 2.* Havainnollistaa Markdownin syntaksia.

### 3.1.3 Markdownin laajennukset

Markdownin perussyntaksia on laajennettu useilla tavoilla, jotta se vastaisi nykyaikaista dokumentaatiotasoa. Näitä laajennuksia kutsutaan usein nimellä "flavors", ja ne tuovat lisäominaisuuksia, joita alkuperäinen Markdown ei sisällä. Tunnetuin esimerkki on Github Flavored Markdown (GFM), jota käytetään ohjelmistokehityksessä ja versionhallintaympäristöissä (Github). @zotero-item-26

Github Flavored Markdown laajentaa perussyntaksia muun muassa taulukoiden, tehtävälistojen (checkbox-listat) sekä korostettujen koodilohkojen tuella. Näiden avulla dokumentaation havainnollistamista helpotetaan vaikeuttamatta syntaksia ja saadaan siitä samalla rakenteellisesti monipuolisempaa. @zotero-item-26

Lisäksi monet Markdown-laajennukset tukevat automaattista linkkien tunnistamista, sisällysluetteloiden muodostamista sekä erilaisten lisäelementtien, kuten huomautuslaatikoiden käyttöä. Näiden ansiosta Markdownin käyttöä saa sovellettua entistä laajemmin dokumentaatiokokonaisuuksien tuottamiseen ja ylläpitoon. Laajennusten käyttö kuitenkin riippuu käytetystä työkalusta tai alustasta, mikä voi vaikuttaa dokumentaation yhteensopivuuteen eri ympäristöissä. @zotero-item-27

### 3.1.4 Markdownin rajoitukset ja haasteet

Vaikka Markdown on kevyt ja helppokäyttöinen, siihen liittyy myös rajoituksia, jotka voivat vaikuttaa sen soveltuvuuteen tietyissä käyttötapauksissa. Yksi haaste on sen rajallinen ilmaisuvoima verrattuna esimerkiksi puhtaaseen HTML-koodiin. Markdownin perussyntaksi ei tue kaikki monimutkaisia rakenteita tai visuaalisia elementtejä, minkä vuoksi käyttäjät joutuvat välillä turvautumaan HTML-koodiin tai käyttäämään virityksiä saadaakseen haluamansa lopputuloksen. @zotero-item-28

Rajoituksia liittyy myös eri Markdown-versioiden välisiin eroihin. Koska Markdownista on olemassa useita laajennuksia ja toteutuksia, kuten GitHub Flavored Markdown, kaikki ominaisuudet eivät ole yhteensopivia eri alustojen välillä. Tämä saattaa aiheuttaa ongelmia dokumentaation siirrettävyydessä ja yhtenäisyydessä, jos sama sisältö ei toimi odotetusti eri ympäristöissä. @zotero-item-27

Markdown ei tarjoa itsessään valmiita ratkaisuja visuaaliseen ulkoasuun tai käyttöliittymään, vaan lopullinen esitysmuoto riippuu käytetystä alustasta tai muunnostyökalusta. Tämä saattaa johtaa tilanteisiin, joissa sama dokumentti näyttää erilaiselta eri ympäristöissä. Näistä rajoituksista huolimatta Markdown on edelleen tehokas työkalu, kun sen käyttöä tuetaan sopivilla työkaluilla. @zotero-item-30

## 3.2 Dokumentaation hallinta ja yhteistyö

Dokumentaation hallinta ja yhteistyö ovat nykyisessä työelämässä tärkeitä, sillä usein monen eri ihmisen pitää osallistua saman tiedon tuottamiseen ja ylläpitämiseen. Tehokas dokumentaation hallinta tarkoittaa sitä, että tieto on ajantasaista ja helposti löydettävissä. Tämä edellyttää työkaluja sekä vastuunjakoa dokumentaation tuottamisessa ja ylläpidossa. @zotero-item-31

Yhteistyön näkökulmasta dokumentaation merkitys näkyy erityisesti hajautetuissa työympäristöissä ja tiimityössä. Useat käyttäjät voivat osallistua dokumentaation kirjoittamiseen, kommentointiin ja kehittämiseen samanaikaisesti, mikä parantaa tiedon laatua ja kattavuutta. Versionhallintajärjestelmät, kuten Git, tukevat tätä mahdollistamalla muutosten seurannan, versioiden vertailun sekä aiempien versioiden palauttamisen tarvittaessa. @zotero-item-32

Dokumentaation hallintaan liittyy sen elinkaaren huomioiminen. Dokumentaatio on dynaaminen tuote, jota tulee päivittää ja kehittää jatkuvasti vastaamaan muuttuvia tarpeita. Tämä vaatii organisaatiolta sitoutumista ylläpitoon sekä toimintamalleja, joissa dokumentointi on osa päivittäistä työskentelyä. @zotero-item-33


### 3.2.1 Dokumentaation ylläpidettävyys

Dokumentaation ylläpidettävyys tarkoittaa sitä, kuinka helposti dokumentaatiota voidaan päivittää, muokata ja pitää ajan tasalla järjestelmien ja toimintatapojen muuttuessa. Hyvin ylläpidettävä dokumentaatio on loogisesti rakennettua ja helposti muokattavissa ilman, että muutokset aiheuttavat ristiriitoja tai virheitä muihin osiin. Tämä on tärkeää teknisessä ympäristössä, jossa muutoksia tapahtuu usein ja dokumentaation tulee pysyä kehityksen mukana. @zotero-item-35

Ylläpidettävyyttä parantaa se, että dokumentaatio on pilkottu pienempiin, itsenäisiin osiin, joita voidaan päivittää erikseen. Tällöin yksittäisen muutoksen tekeminen ei vaadi koko dokumentaation läpikäyntiä. Yhteiset kirjoitustyylit, rakenteet ja nimeämiskäytännöt helpottavat dokumentaation hallintaa ja vähentävät virheiden mahdollisuutta. @zotero-item-35

Teknologisesta näkökulmasta ylläpidettävyyttä parantavat työkalut, kuten versionhallintajärjestelmät. Niiden avulla voidaan seurata muutoksia, hallita eri versioita sekä palauttaa tarvittaessa aiempia versioita. Tämä tekee dokumentaatiosta luotettavampaa ja helpottaa useiden käyttäjien samanaikaista työskentelyä. @zotero-item-37

Markdownin kaltaiset kevyet merkintäkielet edistävät tätä toimintaa, sillä ne mahdollistavat sisällön käsittelyn yksinkertaisessa tekstimuodossa. Tämä tekee dokumentaatiosta helposti muokattavaa ja jaettavaa. Näin dokumentaatio voidaan pitää ajantasaisena ja hyödyllisenä koko organisaation näkökulmasta. @zotero-item-34

### 3.2.2 Dokumentaatiomenetelmien vertailu

Dokumentaatiomenetelmien vertailu auttaa ymmärtämään eri lähestymistapojen vahvuuksia ja heikkouksia sekä valitsemaan tarkoitukseen sopivimman ratkaisun. Perinteiset tekstinkäsittelyohjelmat ovat helppokäyttöisiä ja soveltuvat hyvin yksinkertaiseen dokumentointiin, mutta niiden heikkoutena on rajallinen tuki versionhallinnalle ja yhteistyölle. Dokumentit ovat usein erillisiä tiedostoja, mikä voi johtaa useisiin rinnakkaisiin versioihin ja vaikeuttaa ajantaisaisen tiedon hallintaa. @zotero-item-19

HTML-pohjainen dokumentointi mahdollistaa laajojen, verkossa julkaistavien dokumentaatiokokonaisuuksien rakentamisen. Sen etuna on hyvä rakenteellisuus ja laajat muokkausmahdollisuudet, mutta samalla se vaatii enemmän teknistä osaamista, mikä voi hidastaa dokumentaation tuottamista erityisesti ei-teknisille käyttäjille. @zotero-item-20

Markdown yhdistää näiden menetelmien etuja tarjoamalla kevyen ja helposti opittavan syntaksin, joka edesauttaa rakennetta ja luettavuutta. Se mahdollistaa myös dokumentaation hallinnan versionhallintajärjestelmien avulla sekä sisällön muuntamisen eri formaatteihin, kuten HTML- ja PDF-muotoon. Tämä tekee siitä hyvän vaihtoehdon erityisesti ympäristöissä, joissa dokumentaatiota tuotetaan jatkuvasti ja useiden käyttäjien toimesta. @zotero-item-30

## 3.3 Dokumentaation automaatio ja työkalut

Dokumentaation automaatio tarkoittaa työkaluja ja prosesseja, joiden avulla dokumentaation tuottamista, päivittämistä ja julkaisemista voidaan tehostaa. Nykyaikaisessa työelämässä automaatiolla pyritään vähentämään manuaalista työtä. Tämä on tärkeää ympäristöissä, joissa dokumentaatio muuttuu usein ja sitä tuotetaan useiden henkilöiden toimesta. @zotero-item-38

### 3.3.1 Markdown-editorit

Dokumentaation tuottamista auttavat monet työkalut, kuten tekstieditorit, versionhallintajärjestelmät sekä erilaiset julkaisualustat. Esimerkiksi koodieditorit tarjoavat ominaisuuksia, kuten esikatselun, syntaksin korostuksen ja lisäosat, jotka helpottavat Markdown-dokumentaation kirjoittamista. Versionhallintatyökalut puolestaan mahdollistavat muutosten seurannan ja yhteistyön, mikä tekee dokumentaatiosta hallittavampaa. Yksi yleisimmin käytetyistä työkaluista tätä järjestelmää varten on Visual Studio Code. @zotero-item-40

Lisäksi dokumentaation automaatio voidaan yhdistää osaksi laajempia kehitysprosesseja, kuten jatkuvaa integraatiota ja jatkuvaa toimitusta (CI/CD). Tällöin dokumentaatio päivittyy automaattisesti esimerkiksi koodimuutosten yhteydessä, mikä varmistaa sen ajantasaisuuden. Automaatio voi myös sisältää dokumentaation automaattisen testauksen, linkkien tarkistuksen sekä julkaisun eri ympäristöihin ilman manuaalisia vaiheita. @zotero-item-41

### 3.3.2 Dokumentaation muunnostyökalut

Yksi osa dokumentaation automaatiota on sisällön muuntaminen eri formaatteihin. Esimerkiksi Markdown-muotoista sisältöä voidaan automaattisesti muuntaa HTML- tai PDF-muotoon erilaisten työkalujen avulla. Tämä mahdollistaa saman sisällön julkaisemisen useissa eri kanavissa ilman, että sitä tarvitsee kirjoittaa uudelleen. Yksi yleisimmistä työkaluista tätä prosessia varten on Pandoc. Automaatio auttaa myös dokumentaation julkaisuprosessissa, koska muutokset voidaan viedä suoraan näkyviin esimerkiksi verkkosivuille. @zotero-item-39

### 3.3.3 JavaScript ja TypeScript dokumentaation käsittelyssä

Javascript ja Typescript tarjoavat monipuolisia mahdollisuuksia dokumentaation käsittelyyn ja automatisointiin erityisesti web-pohjaisissa ympäristöissä. Niiden avulla voidaan kehittää työkaluja, jotka esimerkiksi lukevat ja muuntavat Markdown-muotoista sisältöä eri formaatteihin. Tämä mahdollistaa dokumentaation käsittelyn osana samaa teknologista ympäristöä kuin muu ohjelmistokehitys, mikä vähentää erillisten työkalujen tarvetta. @zotero-item-42

Yksi käyttökohde on dokumentaation automaattinen generointi ja muokkaaminen. Javascript- ja Typescript-pohjaisilla ratkaisuilla voidaan esimerkiksi hakea sisältöä eri lähteistä, käsitellä sitä ohjelmallisesti ja tuottaa siitä yhtenäistä dokumentaatiota. Tämä on hyödyllistä tilanteissa, joissa dokumentaatio perustuu osittain dynaamiseen sisältöön tai sitä halutaan päivittää automaattisesti. @zotero-item-43

Näitä kieliä voidaan hyödyntää dokumentaation julkaisemissa ja esittämisessä. Esimerkiksi staattisten sivustojen generaattorit ja muut dokumentaatioalustat käyttävät usein Javascriptiä sisällön piirtämiseen ja toiminnallisuuksien toteuttamiseen. Typescript puolestaan tuo lisää luotettavuttaa tyyppitarkistuksen avulla, mikä helpottaa laajempien ja monimutkaisempien dokumentaatiotyökalujen rakentamista. @zotero-item-44

## 3.4 Web scraping dokumentaation tuottamisessa

Web scraping tarkoittaa menetelmää, jossa tietoa kerätään automaattisesti verkkosivuilta ohjelmallisesti. Sitä voidaan hyödyntää dokumentaation tuottamisessa esimerkiksi tilanteissa, joissa olemassa olevaa sisältöä halutaan siirtää tai muuntaa uuteen muotoon. Web scraping tekniikalla mahdollistetaan suurten tietomäärien kerääminen ilman manuaalista työtä, mikä tekee siitä hyvän työkalun laajojen dokumentaatiokokonaisuuksien käsittelyssä. @zotero-item-45

### 3.4.1 Web scraping -menetelmän perusteet

Prosessi perustuu siihen, että ohjelma hakee verkkosivun HTML-sisällön ja jäsentää siitä halutut tiedot, kuten tekstin tai rakenteelliset elementit. Tämän avulla vältetään manuaalista kopiointia ja nopeutetaan tiedon poimimista. @zotero-item-46

Tyypillisesti web scraping koostuu useista vaiheista, kuten verkkosivun hakemisesta, sisällön analysoinnista sekä halutun datan erottelusta ja tallentamisesta. Tiedon jäsentämisessä hyödynnetään usein HTML-rakennetta, esimerkiksi tageja ja luokkia, joiden avulla ohjelma tunnistaa, mitä osia sivusta halutaan kerätä. Näin voidaan poimia vain relevantti sisältö ja jättää muu sivun rakenne huomiotta. @zotero-item-45

### 3.4.3 Eettiset ja tietoturvaan liittyvät näkökulmat

Web scrapingiin liittyy useita eettisiä ja juridisia näkökulmia, jotka tulee huomioida ennen menetelmän käyttöä. Vaikka automaattinen tiedonkeruu verkkosivuilta on teknisesti mahdollista, sen laillisuus riippuu pitkälti siitä, miten kerättyä tietoa käytetään. Yleisesti ottaen datan kerääminen henkilökohtaiseen käyttöön ja kohtuullisen käytön puitteissa on sallittua, mutta ongelmia voi syntyä, jos sisältöä julkaistaan uudelleen, rikotaan palvelun käyttöehtoja tai käsitellään tekijänoikdeun alaista materiaalia ilman lupaa. @zotero-item-45

Pelkkien faktojen käerääminen ei välttämättä riko tekijänoikeuksia, mutta sisältö, jolla on tunnistettava tekijä tai luova panos, voi olla suojattua. Lisäksi tapauksissa on todettu, että uutis- ja muun suojatun sisällön uudelleenkäyttö ilman lupaa voi rikkoa tekijänouikeuslakeja. Toisaalta tietyissä tilanteissa, kuten verkkosivujen indeksoinnissa ja linkittämisessä, automaattinen tiedonkeruu on katsottu sallituksi, kunhan se ei riko muita ehtoja. @zotero-item-45

Eettisestä näkökulmasta on tärkeää huomioida myös scrapinging vaikutus kohdejärjestelmiin. Liiallinen tai aggressiivinen tiedonkeruu voi kuormittaa verkkosivua ja heikentää sen toimintaa, mikä voi johtaa palvelun häiriöihin. Vaikka kaikki tällainen toiminta ei välttämättä ole lainvastaista, sitä voidaan pitää epäeettisenä. Tämän vuoksi web scrapingia tulisi toteuttaa vastuullisesti, huomioiden sekä tekniset rajoitteet että palveluntarjoajien ehdot ja oikeudet. @zotero-item-45

## 3.5 Markdown-työnkulku työelämässä

Markdown on vakiinnuttanut asemansa osana nykyaikaista työelämää teknisessä dokumentaatiossa ja ohjelmistokehityksessä. Sen yksinkertainen syntaksi ja yhteensopivuus erilaisten työkalujen kanssa tekevät siitä sopivan ratkaisun organisaatioille, joissa dokumentaatiota tuotetaan jatkuvasti ja useiden käyttäjien toimesta. Markdown mahdollistaa dokumentaation integroimisen osaksi kehitysprosesseja, mikä parantaa tiedon ajantasaisuutta. @zotero-item-23

Työelämässä Markdownin käyttö liittyy usein versionhallintaan, yhteistyöhön sekä automaatioon. Dokumentaatio voidaan tallentaa samaan ympäristöön kuin ohjelmakoodi, jolloin muutokset ovat helposti seurattavissa ja hallittavissa. Tämä parantaa tiimityötä ja vähentää tiedon siiloutumista, kun dokumentaatio on kaikkien saatavilla yhtenäisessä muodossa. @zotero-item-48

Markdownin käyttöönotto organisaatiossa vaatii sekä teknisiä ratkaisuja että toimintatapojen muutosta. On tärkeää määritellä miten dokumentaatiota tuotetaan, missä sitä säilytetään ja millä työkaluilla sitä hallitaan. Usein käyttöönotto liittyy versionhallintajärjestelmien, kuten Gitin, sekä yhteisten alustojen, kuten GitHubin, hyödyntämiseen, jolloin dokumentaatio voidaan integroida osaksi muuta kehitystyötä. @zotero-item-49

Onnistunut käyttöönotto edellyttää myös yhteisten käytäntöjen ja ohjeistusten luomista. Näihin kuuluvat esimerkiksi dokumentaation rakenne, nimeämiskäytännöt sekä kirjoitustyyli. Yhtenäiset toimintamallit parantavat dokumentaation laatua ja tekevät siitä helpommin ymmärrettävää kaikille käyttäjille. Lisäksi henkilöstön koulutus on tärkeää, jotta kaikki osaavat hyödyntää Markdownia ja siihen liittyviä työkaluja. @zotero-item-50

Käyttöönottoon liittyy myös haasteita, kuten muutosvastarinta ja uuden työskentelytavan opettelu. Erityisesti organisaatioissa, joissa on totuttu perinteisiin dokumentointimenetelmiin, siirtyminen tekstipohjaiseen ratkaisuun voi vaatia aikaa ja tukea. Näitä haasteita voidaan kuitenkin vähentää tarjoamalla selkeitä ohjeita, esimerkkejä ja käytännön hyötyjä, jotka konkretisoivat Markdownin edut. @zotero-item-50

# 4 Tutkimusmenetelmät

## 4.1 Tutkimusstrategia: tapaustutkimus

Tässä opinnäytetyössä tutkimusstrategiana käytetään laadullista tapaustutkimusta. Tapaustutkimus soveltuu erityisesti tilanteisiin, joissa tarkastelun kohteena on rajattu ilmiö sen luonnollisessa toimintaympäristössä ja tavoitteena on tuottaa syvällistä, kontekstisidonnaista ymmärrystä yksittäisestä tapauksesta. Tässä tutkimuksessa tapaus muodostuu kokeellisesta Markdown-pohjaisen dokumentaatiotyönkulun toteutuksesta, jonka tarkoituksena on arvioida Markdownin soveltuvuutta teknisen dokumentaation tuottamiseen ja hallintaan organisaatiomaisessa, monialaisten asiantuntijoiden työympäristössä.

Tutkimuksessa tarkasteltava tapaus edustaa organisaatiokontekstia, jossa dokumentaatiota tuotetaan erilaisten roolien ja osaamistaustojen toimesta, eikä kaikilla osallistujilla voida olettaa olevan syvällistä teknistä koulutusta. Tästä näkökulmasta tutkimus ei keskity henkilöstön osaamisen tai koulutustason mittaamiseen, vaan käytännönläheisesti siihen, millainen dokumentaatiotyönkulku on ylipäätään mahdollista toteuttaa Markdownin ja siihen liittyvien työkalujen avulla.

Tutkimuksen tavoitteena ei ole tuottaa tilastollisesti yleistettävää tietoa Markdownin käytöstä organisaatioissa, vaan arvioida käytännön toteutuksen kautta, millä tavoin Markdowniin perustuva dokumentaatiomalli voi toimia teknisessä dokumentaatiossa. Tarkastelu asettuu “miten”-näkökulmaan: tutkimuksessa selvitetään, miten dokumentaation kerääminen, muuntaminen, ylläpito ja julkaiseminen voidaan toteuttaa Markdown-pohjaisesti, sekä millaisia mahdollisuuksia ja rajoitteita tähän liittyy.

Tutkimuksellinen lähestymistapa on luonteeltaan kokeellinen. Työssä ei oleteta etukäteen, että toteutettu työnkulku on toimiva tai tarkoituksenmukainen, vaan työnkulun toimivuutta arvioidaan kriittisesti tapaustutkimuksen avulla. Tämä korostaa tutkimuksen luonnetta, jossa tarkoituksena on tutkia ja testata erilaisia vaihtoehtoisia työskulkuja ennen mahdollisempaa laajempaa käyttöönottoa.

## 4.2 Aineisto ja rajaus

Tutkimuksen aineistona käytetään Hämeen ammattikorkeakoulun (HAMK) julkista, verkkopohjaista dokumentaatiosisältöä. Aineisto koostuu tekstipohjaisista dokumentaatiosivuista, jotka on toteutettu WordPress-sisällönhallintajärjestelmällä ja jotka ovat vapaasti saatavilla ilman kirjautumista. Aineisto haettiin ohjelmallisesti WordPressin REST API -rajapinnan kautta, mikä mahdollisti rakenteisen ja toistettavan tiedonkeruun.

Aineiston rajaus tehtiin tarkoituksellisesti kokeellisen tutkimusasetelman ehdoilla. Tutkimuksen tavoitteena oli selvittää, onko Markdowniin perustuvan dokumentaatiotyönkulun toteuttaminen ylipäätään mahdollista ja millä edellytyksillä se voisi toimia käytännössä. Tällainen lähestymistapa vastaa proof of concept -ajattelua, jossa teknistä ratkaisua testataan rajatussa mittakaavassa ennen mahdollisia organisatorisia investointeja.

Tästä syystä tutkimuksessa keskityttiin vain tekstipohjaiseen sisältöön, kuten otsikoihin, kappaleisiin, listoihin ja linkkeihin. Visuaalisesti painottuneet elementit, interaktiiviset komponentit, lomakkeet ja dynaamiset sisällöt rajattiin tarkastelun ulkopuolelle. Rajauksella pyrittiin minimoimaan muuttujien määrä ja keskittymään nimenomaan Markdownin soveltuvuuden arviointiin dokumentaation perusrakenteiden näkökulmasta.

Organisaation näkökulmasta Markdown-pohjaisen dokumentaatiomallin käyttöönottoa ei ole tarkoituksenmukaista arvioida täydellisenä tuotantoratkaisuna ennen kuin on osoitettu, että perusperiaatteet ja työkulut ovat toteutettavissa. Tässä tutkimuksessa toteutettu ratkaisu toimii siten kokeellisena esimerkkinä ja osoituksena mahdollisuudesta, ei valmiina tai lopullisena järjestelmänä.

## 4.3 Menetelmät ja työkalut

Tutkimuksessa hyödynnettiin useita nykyaikaisia menetelmiä ja työkaluja, jotka mahdollistivat dokumentaation keräämisen, muuntamisen, hallinnan ja julkaisemisen automatisoidusti. Menetelmien ja työkalujen valinnat perustuivat tavoitteeseen rakentaa toistettava ja versionhallintaa tukeva työnkulku.

Tiedonkeruussa hyödynnettiin WordPress REST API -rajapintaa perinteisen web scrapingin sijaan. Tämä valinta tehtiin, koska rajapinta mahdollisti sisällön hakemisen suoraan rakenteisessa JSON-muodossa, mikä vähensi HTML-jäsentämisen tarvetta ja paransi tiedon luotettavuutta. Keräys toteutettiin TypeScript-kielellä Node.js-ympäristössä. TypeScript valittiin staattisen tyypityksen ansiosta, joka parantaa koodin ylläpidettävyyttä ja virheiden havaitsemista.

HTML-sisällön muuntamiseen Markdown-muotoon käytettiin Turndown-kirjastoa. Kirjasto valittiin sen kyvyn vuoksi muuntaa yleisimmät HTML-elementit (otsikot, kappaleet, listat ja linkit) puhtaaksi Markdown-syntaksiksi. Muunnoksen jälkeen sisältö tallennettiin tiedostorakenteeseen, joka vastasi alkuperäisen sivuston loogista hierarkiaa.

Dokumentaation versionhallintaan ja yhteistyöhön otettiin käyttöön Git sekä GitHub-repositorio. Staattisen dokumentaatiokokonaisuuden generointiin ja julkaisemiseen käytettiin Docusaurus-staattisten sivustojen generaattoria. Docusaurus valittiin, koska se tukee Markdown-tiedostoja suoraan, tarjoaa automaattisen sivupalkin ja navigaation sekä integroituu hyvin GitHub Actions -automaatioon.

Opinnäytetyön lopullisen raporttimuodon tuottamista varten hyödynnettiin Pandoc-dokumenttikonvertteria yhdessä Zotero-viitteidenhallintatyökalun kanssa. Pandoc mahdollisti Markdown-muotoisen sisällön muuntamisen Microsoft Word -dokumentiksi (.docx) siten, että rakenteellinen informaatio, kuten otsikkotasot, kappalejako ja sisällysluettelo, säilyi muunnoksessa. Zoteroa käytettiin lähteiden hallintaan sekä BibTeX-muotoisten viitetiedostojen tuottamiseen, joiden avulla viittaukset ja lähdeluettelo voitiin käsitellä automaattisesti Pandoc-muunnoksen yhteydessä.

Pandocin ja Zoteron yhdistelmä valittiin, koska se mahdollisti koko opinnäytetyöprosessin toteuttamisen Markdown-lähdeformaatissa aina lopulliseen, muodolliseen raporttimuotoon asti. Työkalut tukivat tutkimuksen metatutkimuksellista tavoitetta arvioida Markdownin soveltuvuutta myös akateemiseen kirjoittamiseen, ei pelkästään tekniseen dokumentaatioon.

Työkalukokonaisuus muodostaa yhtenäisen, automatisoidun putken, joka ulottuu tiedonkeruusta aina dokumentaation julkaisemiseen saakka. Kaikki vaiheet on integroitu versionhallintaan ja jatkuvan integraation (CI/CD) periaatteiden mukaisesti GitHub Actions -työnkulkujen avulla.

## 4.4 Arviointikriteerit

Opinnäytetyön käytännön toteutuksen ja tulosten arvioimiseksi määriteltiin neljä arviointikriteeriä. Näitä kriteerejä käytettiin sekä prosessin että lopputuloksen systemaattiseen tarkasteluun. Arviointikriteerit valittiin siten, että ne heijastavat sekä teknisen dokumentaation että opinnäytetyön kirjoittamisen laatuvaatimuksia nykyaikaisessa työympäristössä.

Ylläpidettävyys kuvaa sitä, kuinka helposti dokumentaatiota voidaan päivittää, muokata ja kehittää ajan kuluessa. Hyvin ylläpidettävä dokumentaatio on loogisesti jaettu osiin, käyttää yhdenmukaista rakennetta ja on helposti versionhallittavissa. Tässä työssä ylläpidettävyyttä arvioitiin erityisesti sen perusteella, miten helposti sisältöä voi muuttaa ilman, että muutokset aiheuttavat virheitä muualla dokumentaatiossa.

Luettavuus arvioi sekä raakatekstin että lopullisen esitysmuodon helppolukuisuutta. Markdown-muotoisen tekstin tulisi olla selkeää myös ilman muotoilua, ja generoidun sivuston tulisi olla käyttäjäystävällinen ja visuaalisesti miellyttävä. Luettavuutta tarkasteltiin sekä teknisestä että sisällöllisestä näkökulmasta.

Siirrettävyys tarkoittaa dokumentaation kykyä toimia eri alustoilla ja ympäristöissä ilman merkittäviä muutoksia. Hyvä siirrettävyys mahdollistaa sisällön muuntamisen esimerkiksi Word-dokumentiksi, PDF:ksi tai toisenlaisen julkaisujärjestelmän käyttöön. Tätä kriteeriä korostettiin erityisesti metatutkimuksessa, jossa testattiin Markdownin yhteensopivuutta HAMKin opinnäytetyöpohjan kanssa.

Automaation taso kuvaa sitä, kuinka suuri osa dokumentaation keräämisestä, muuntamisesta, julkaisemisesta ja ylläpidosta voidaan hoitaa automaattisesti. Korkea automaation taso vähentää manuaalista työtä ja parantaa dokumentaation ajantasaisuutta. Tässä työssä automaatiota arvioitiin koko työnkulun osalta aina sisällön keräämisestä GitHub Actions -pohjaiseen julkaisuun asti.

Näiden kriteerien avulla työn tuloksia voidaan arvioida monipuolisesti sekä laadullisesti että käytännön hyötyjen näkökulmasta. Arviointikriteerit toimivat myös jatkokehityksen perustana, kun Markdown-pohjaista dokumentaatiota mahdollisesti otetaan laajempaan käyttöön organisaatiossa.

## 4.5 Toteutusprosessi

Tutkimuksen käytännön toteutus rakentui systemaattiselle työnkululle, jossa web scraping -menetelmää ja automaattista muunnosta hyödynnettiin olemassa olevan dokumentaation siirtämisessä Markdown-muotoon.

Web scrapingin avulla kerätty sisältö muunnettiin Markdown-muotoon, jolloin siitä saatiin helposti luettavaa, muokattavaa ja versionhallintaan soveltuvaa dokumentaatiota. Prosessi alkoi verkkosivun HTML-rakenteen hakemisella, minkä jälkeen sisältö jäsennettiin ja suodatettiin siten, että vain oleelliset elementit kuten otsikot, kappaleet, linkit ja listat säilytettiin. HTML-otsikot muutettiin Markdownin risuaitamerkinnöiksi ja muut rakenteet vastaaviksi Markdown-elementeiksi. Muuntaminen toteutettiin automaattisesti valmiiden kirjastojen avulla, mikä mahdollisti suurten sisältömäärien käsittelyn ilman raskasta manuaalista työtä.

Prosessi alkoi kohdesivuston teknologian tunnistamisella. HAMK:n sivuston toteutusteknologia varmistettiin analysoimalla sivun lähdekoodia ja HTTP-liikennettä, minkä perusteella todettiin sivuston käyttävän WordPress 6.9.4 -julkaisujärjestelmää. Tämän jälkeen siirryttiin tiedonkeruuvaiheeseen, jossa WordPressin REST API -rajapintaa (`/wp-json/wp/v2/pages`) hyödynnettiin sivujen hakemiseen sivutetusti (pagination). Keräys toteutettiin TypeScriptillä, ja prosessissa huomioitiin duplikaattien esto sekä palvelimen kuormituksen minimointi.

Seuraavassa vaiheessa kerätty HTML-sisältö jäsennettiin ja suodatettiin. Epäolennaiset elementit, kuten navigaatio, breadcrumbit, metatiedot ja visuaaliset koristeet poistettiin. Jäljelle jäänyt sisältö muunnettiin Markdown-muotoon Turndown-kirjaston avulla. Muunnoksen jälkeen sisäiset linkit päivitettiin vastaamaan uutta dokumentaatiokokonaisuutta.

Markdown-tiedostot tallennettiin loogiseen hakemistorakenteeseen, joka säilytti alkuperäisen sivuston hierarkian. Tämän jälkeen dokumentaatio siirrettiin Docusaurus-projektiin, jossa se generoitiin staattiseksi verkkosivustoksi. Lopuksi koko projekti siirrettiin versionhallintaan Gitillä ja julkaistiin automaattisesti GitHub Pages -palveluun GitHub Actions -työnkulun avulla. Automaatio sisältää koko prosessin tiedonkeruusta sivuston generointiin ja julkaisuun.

Erillisenä metatutkimuksena toteutettiin Markdown-muotoisen sisällön muuntaminen opinnäytetyön Word-muotoon. Tämä tehtiin Pandoc-työkalulla hyödyntäen HAMKin opinnäytetyöpohjaa referenssidokumenttina sekä Zoteroa viitteiden hallintaan.

Toteutusprosessi suunniteltiin siten, että se on toistettava ja automaattinen, mahdollistaen dokumentaation helpon päivittämisen tulevaisuudessa.

## 4.5 Luotettavuus, eettisyys ja rajoitteet

Tutkimuksen rajoitteisiin kuuluu, että Markdown-muotoisen sisällön muuntaminen muihin formaatteihin ei ole täysin yksiselitteinen tai vakiintunut prosessi. Vaikka tässä työssä hyödynnettiin Pandocia Markdown-Word-muunnokseen, olemassa on myös muita kehittyviä työkaluja, kuten Microsoftin ylläpitämä markitdown-projekti, joka mahdollistaa erilaisten tiedostojen ja Office-dokumenttien muuntamisen Markdown-muotoon Python-pohjaisesti.

Markitdown-työkalun olemassaolo osoittaa, että Markdowniin perustuvat dokumentaatiotyönkulut kehittyvät aktiivisesti ja että vaihtoehtoisia teknisiä ratkaisuja on saatavilla. Tässä tutkimuksessa markitdownia ei kuitenkaan otettu käyttöön, koska se ei ollut työn toteutushetkellä vakiintunut osa käytössä olevaa dokumentaatioprosessia, eikä sen integroiminen osaksi työnkulkuja ollut perusteltua tutkimuksen rajauksen ja proof of concept -luonteen huomioiden.

Tämä rajoite tarkoittaa, että tutkimuksessa esitetty Markdown-Word-muunnos ei edusta ainoaa mahdollista teknistä ratkaisua, vaan pikemminkin yhtä tarkoituksenmukaista toteutusta tutkimushetkellä käytettävissä olleilla työkaluilla. Tuloksia tulee siten tarkastella ajallisessa kontekstissaan, ja on mahdollista, että tulevaisuudessa kehittyneemmät muunnostyökalut voivat vähentää tai poistaa osan tässä työssä tunnistetuista haasteista.


# 5 Markdown-pohjaisen dokumentaatiotyönkulun toteutus
## 5.1 Kohdesivuston teknologian tunnistaminen

Ensimmäisenä konkreettisena toimenpiteenä tutkimuksessa selvitettiin kohdesivuston teknistä toteutusta. Tavoitteena oli ymmärtää, millä alustalla HAMK:n julkinen sivusto https://www.hamk.fi on rakennettu, jotta tiedonkeruu voitaisiin toteuttaa mahdollisimman tehokkaasti ja luotettavasti.

Tunnistustyö tehtiin manuaalisesti useita eri menetelmiä yhdistäen. Avattiin sivusto selaimessa ja tarkasteltiin sen lähdekoodia sekä "Näytä sivun lähdekoodi" -toiminnolla että selaimen kehitystyökaluilla (DevTools). Erityistä huomiota kiinnitettiin rakenteisiin, jotka viittaavat tiettyyn sisällönhallintajärjestelmään. Lisäksi Network-välilehdeltä seurattiin, mistä lähteistä sivusto lataa tyylitiedostoja, skriptejä ja muita resursseja.

Analyysin tuloksena havaittiin useita selviä viitteitä WordPress-järjestelmään. Lähdekoodista löytyi muun muassa `wp-content`- ja `wp-includes`-hakemistoihin viittaavia polkuja sekä WordPress-versiota suoraan ilmaiseva metatag:

*Ohjelmakoodi 1.* Havainnollistaa WordPress-julkaisujärjestelmään viittaavista rakenteista HTML-lähdekoodissa.

```html
<meta name="generator" content="WordPress 6.9.4" />
<link rel='stylesheet' id='wp-components-css' href='https://www.hamk.fi/wp-includes/css/dist/components/style.min.css?ver=6.9.4' />
```


Myös sivuston tyylitiedostot ja skriptit latautuivat tyypillisistä WordPress-polkuista. Network-välilehden avulla voitiin lisäksi vahvistaa, että sivusto hakee sisältöä ja resursseja WordPressin omista hakemistoista. Näiden havaintojen perusteella voitiin luotettavasti päätellä, että kohdesivusto on toteutettu WordPress 6.9.4 -julkaisujärjestelmällä.

Tämä teknologian kartoitus osoittautui erittäin tärkeäksi vaiheeksi, sillä se mahdollisti siirtymisen manuaalisesta web scrapingista suoraan WordPressin tarjoaman REST API -rajapinnan käyttöön. Ilman tätä tunnistustyötä tiedonkeruu olisi ollut huomattavasti työläämpää ja virhealtista.

## 5.2 Kohdesivuston teknologian hyödyntäminen

Kun sivuston toteutusteknologiaksi varmistui WordPress, voitiin tiedonkeruussa siirtyä perinteisestä HTML-scrapingista tehokkaampaan vaihtoehtoon. Hyödynnettiin WordPressin sisäänrakennettua REST API -rajapintaa, joka mahdollistaa sivuston sisällön hakemisen suoraan rakenteisessa JSON-muodossa.

Käytännössä hyödynnettiin erityisesti `/wp-json/wp/v2/pages`-päätepistettä, joka palauttaa sivujen tiedot sisältäen otsikon, slugin, HTML-muotoisen sisällön (`content.rendered`), vanhemman sivun tiedot (`parent`) sekä muita metatietoja. Rajapinnan saatavuus testattiin tekemällä suora HTTP-pyyntö osoitteeseen: https://www.hamk.fi/wp-json/wp/v2/pages

Testi vahvisti, että HAMK:n sivusto sallii REST API -rajapinnan käytön julkisesti, mikä avasi mahdollisuuden automatisoidulle ja luotettavalle tiedonkeruulle.

Tämän rajapinnan käyttö tarjosi merkittäviä etuja verrattuna perinteiseen web scrapingiin: sisältö saatiin puhtaana ilman tarvetta jäsentää koko sivun HTML-rakennetta, ja hierarkkiset tiedot (sivujen vanhemmuus) säilyivät luonnollisesti. Näin pystyttiin paremmin säilyttämään alkuperäinen sivuston rakenne myös Markdown-muotoon siirrettäessä.

## 5.3 Tietojen kerääminen verkkosivuilta

Tiedonkeruu toteutettiin TypeScript-kielellä Node.js-ympäristössä. Kehitin skriptin, joka hakee sivut WordPress REST API:sta sivutetusti (pagination). Koska sivuja oli satoja, haku toteutettiin iteratiivisesti: ensimmäinen pyyntö haettiin parametreilla `page=1` ja `per_page=100`, minkä jälkeen vastauksen otsakkeista (`X-WP-Total` ja `X-WP-TotalPages`) luettiin, montako sivua on vielä haettavana.

Jokaisen haetun sivun jälkeen tarkistettiin, oliko sivu jo käsitelty, jotta vältettiin duplikaatit. Pyyntöjen väliin lisättiin pieni viive, jotta palvelimen kuormitus pysyi kohtuullisena. Kerätty data tallennettiin väliaikaiseen tietorakenteeseen, jossa avaimena käytettiin sivun URL-polun perusteella muodostettua yksilöivää tunnistetta.

*Ohjelmakoodi 2.* Tiedonkeruuprosessin peruslogiikka pseudokoodina.

```
hae sivu (page = 1)
toista niin kauan kuin sivuja on jäljellä:
    tallenna uudet sivut (vältä duplikaatit)
    siirry seuraavaan sivuun
    odota hetki (rate limiting)
palauta kaikki sivut
```


Tämän vaiheen lopputuloksena saatiin kattava JSON-aineisto kaikista haetuista sivuista, sisältäen sekä metatiedot että varsinaisen HTML-sisällön kentässä `content.rendered`. Keräysprosessi oli täysin automaattinen ja toistettavissa, mikä oli tavoite koko työnkululle.

## 5.4 HTML-sisällön jäsentäminen ja datan parsiminen

Kun sivut oli haettu REST API:n kautta, siirryttiin kerätyn HTML-sisällön käsittelyyn. Jokaisen sivun content.rendered-kentässä oleva HTML-materiaali jäsennettiin DOM-puuksi, jotta siitä voitiin poimia ja suodattaa oleellinen sisältö.

Prosessissa poistettiin ensin dokumentaation kannalta epäolennaiset osat, kuten navigointielementit, breadcrumb-polut, sivupalkit, metatiedot, SVG-kuvat sekä muu visuaalinen "kohina". Tämän jälkeen keskityttiin säilyttämään keskeiset rakenteelliset elementit: otsikot (`<h1>-<h6>`), kappaleet (`<p>`), listat (`<ul>`, `<ol>`, `<li>`), hyperlinkit (`<a>`) sekä taulukot mahdollisuuksien mukaan.

Suodatus toteutettiin systemaattisesti sallittujen HTML-tagejen avulla, jolloin lopputuloksena oli puhdistettu HTML-rakenne, joka oli valmis muunnettavaksi Markdown-muotoon. Tämä vaihe oli kriittinen, sillä se vaikutti suoraan lopullisen dokumentaation luettavuuteen ja ylläpidettävyyteen. Liiallinen puhdistus olisi kadottanut sisältöä, kun taas liian löyhä suodatus olisi jättänyt paljon turhaa koodia Markdown-tiedostoihin.

## 5.5 Sisällön muuntaminen Markdown-muotoon

Puhdistetun HTML-sisällön jälkeen siirryttiin varsinaiseen muunnosvaiheeseen. Jokainen suodatettu HTML-kokonaisuus muunnettiin Markdown-muotoon käyttämällä Turndown-kirjastoa TypeScript-ympäristössä.

Kirjasto muunsi automaattisesti HTML-elementit vastaaviksi Markdown-rakenteiksi: otsikot (`<h1>`-`<h6>`) muuttuivat risuaitamerkinnöiksi, kappaleet säilyivät luonnollisena tekstinä, listat muuttuivat Markdown-listoiksi ja hyperlinkit säilyttivät linkkitekstin sekä osoitteen.

Muunnoksen etuna oli se, että Markdown säilytti dokumentin rakenteen kevyessä ja helposti luettavassa muodossa. HTML-otsikot muunnettiin Markdown-otsikoiksi (#, ##), kappaleet säilyivät tekstinä ja listat muuttuivat Markdown-listoiksi. Lisäksi muunnosvaihe toimi eräänlaisena normalisointivaiheena, jossa eri sivuilta kerätty sisältö yhtenäistyi samaan formaattiin. Tämä helpotti dokumentaation jatkokäsittelyä, versionhallintaa sekä julkaisemista eri alustoilla.

Tämän vaiheen jälkeen jokaisesta sivusta oli olemassa oma Markdown-versio, joka oli sekä ihmisluettava että helposti versionhallittavissa. Muunnos toimi myös normalisointivaiheena, sillä eri lähteistä tuleva sisältö yhtenäistyi samaan Markdown-syntaksiin. Lopputuloksena saatiin Markdown-muotoinen dokumentaatio, joka voitiin tallentaa tiedostoiksi ja siirtää versionhallintaan.

## 5.6 Dokumentaation rakenteen muuntaminen tiedostorakenteeksi

Markdown-muotoon muunnettu sisältö tallennettiin lopuksi tiedostojärjestelmään siten, että se muodosti loogisen ja navigoitavan dokumentaatiokokonaisuuden. Tässä vaiheessa yksittäiset Markdown-sisällöt yhdistettiin tiedostorakenteeksi, joka vastasi mahdollisimman hyvin alkuperäisen verkkosivuston rakennetta.

Prosessi alkoi muodostamalla jokaiselle sivulle yksilöllinen tunniste, joka perustui sivun URL-osoitteen polkuosaan. Alku- ja loppuviivat poistettiin, ja tyhjä polku nimettiin oletuksena `_index`. Tämän jälkeen jokaisen sivun Markdown-sisältö tallennettiin tietorakenteeseen, jossa avaimena toimi muodostettu tunniste.

Yksi oleellisimmista vaiheista oli sisäisten linkkien päivittäminen. Alkuperäiset linkit viittasivat HAMKin sivustoon, joten ne korvattiin uusilla osoitteilla, jotka vastaavat uutta dokumentaatiokokonaisuutta (esimerkiksi GitHub Pages -ympäristössä). Linkkien päivitys tehtiin etsimällä Markdown-sisällöstä kaikki alkuperäiseen osoitteeseen viittaavat URL:t ja korvaamalla ne tarvittaessa.

Lopuksi muodostettiin varsinainen tiedostorakenne. Mahdollinen vanha output-kansio poistettiin ensin, minkä jälkeen jokainen Markdown-tiedosto kirjoitettiin levylle oikeaan hakemistopolkuun. Tiedostonimet normalisoitiin poistamalla erikoismerkit, ja tarvittavat hakemistot luotiin automaattisesti. Tämän vaiheen lopputuloksena syntyi selkeä, hierarkkinen tiedostopohjainen dokumentaatiorakenne, joka vastasi alkuperäisen sivuston loogista rakennetta ja oli valmis versionhallintaan sekä julkaisemiseen.

## 5.7 Static site generatorin käyttöönotto (Docusaurus)

Kun dokumentaatio oli muunnettu Markdown-muotoon ja tallennettu oikeaan tiedostorakenteeseen, seuraava vaihe oli sen julkaiseminen staattisena verkkosivustona. Tähän tarkoitukseen valittiin Docusaurus, joka on Node.js-pohjainen staattisten sivustojen generaattori ja sopii erinomaisesti Markdown-pohjaiselle dokumentaatiolle. @zotero-item-60

Docusauruksen käyttöönotto oli suoraviivaista: kaikki tuotetut Markdown-tiedostot siirrettiin projektin `docs`-hakemistoon. Koska aiemmin luotu tiedostorakenne vastasi dokumentaation loogista hierarkiaa, Docusaurus pystyi automaattisesti muodostamaan navigoinnin ja sivupalkin tiedostorakenteen perusteella.

Docusaurus generoi Markdown-tiedostoista staattiset HTML-sivut, tarjoten samalla moderneja ominaisuuksia kuten versionhallintatuen, hakutoiminnon ja responsiivisen ulkoasun. Käyttöönoton yhteydessä havaittiin kuitenkin joitakin alkuperäisestä aineistosta peräisin olevia ongelmia. Osa linkeistä oli rikkinäisiä tai viittasi virheellisiin kohteisiin, ja englanninkielisillä sivuilla oli linkkejä suomenkielisiin sivuihin. Nämä ongelmat korjattiin manuaalisesti ennen lopullista julkaisua.

*Kuva 6.* Havainnollistaa valmista Docusaurus-sivustoa.

![Docusaurus][6]

Lopputuloksena saatiin toimiva, selkeä ja käyttäjäystävällinen dokumentaatiosivusto, jossa muunnettu sisältö oli esitettävissä ammattimaisessa muodossa.

## 5.8 Versionhallintaan siirtäminen (Git)

Kun dokumentaatio oli muunnettu Markdown-muotoon ja järjestetty sopivaan tiedostorakenteeseen, se siirrettiin versionhallintaan. Projektille alustettiin uusi Git-repositorio, minkä jälkeen kaikki tuotetut tiedostot lisättiin versionhallintaan. Tehtiin ensimmäinen commit ja repositorio yhdistettiin GitHubin etärepositorioon, jonka jälkeen muutokset siirrettiin etäpalvelimelle.

GitHub-repositorio mahdollisti dokumentaation helpon jakamisen, tarkastelun ja jatkokehityksen. Versionhallinnan avulla pystyttiin seuraamaan kaikki tehdyt muutokset, vertailemaan eri versioita keskenään sekä palauttamaan tarvittaessa aiempia versioita. Git toimi tässä työssä sekä käytännön työkaluna että osana tutkimusmenetelmää, sillä se edustaa nykyaikaista tapaa hallita dokumentaatiota samalla tavalla kuin ohjelmistokehityksessä yleensä.

## 5.9 Dokumentaation automatisoitu julkaisu (GitHub Actions)

Versionhallintaan siirtämisen jälkeen dokumentaation julkaisu automatisoitiin hyödyntämällä GitHub Actions -työnkulkuja. Tavoitteena oli poistaa manuaaliset vaiheet tiedonkeruusta julkaisemiseen ja varmistaa, että sivusto päivittyy automaattisesti aina kun muutoksia pushataan repositorioon.

Työnkulku käynnistyy automaattisesti, kun `main`-haaraan tehdään push tai kun määritettyihin hakemistoihin tulee muutoksia. Ensimmäisessä vaiheessa haetaan repositorio, asetetaan Node.js-ympäristö ja asennetaan scraper-työkalun riippuvuudet. Sen jälkeen suoritetaan scraper, joka kerää ajantasaisen sisällön WordPressistä ja muuntaa sen Markdown-muotoon.

Kun dokumentaatio on generoitu, se siirretään Docusaurus-projektin `docs`-hakemistoon. Tämän jälkeen asennetaan Docusauruksen riippuvuudet ja rakennetaan staattinen sivusto. Lopuksi valmis sivusto deployataan automaattisesti GitHub Pages -palveluun. Koko prosessi yhdistää tiedonkeruun, muuntamisen, sivuston generoinnin ja julkaisun yhdeksi jatkuvaksi putkeksi ilman manuaalista väliintuloa.

## 5.10 Markdownin muuntaminen opinnäytetyömuotoon (metatutkimus)

Erillisenä metatutkimuksena tarkasteltiin, miten Markdown-muotoinen sisältö voidaan muuntaa HAMKin opinnäytetyövaatimusten mukaiseen Word-muotoon. Tämä osa oli tärkeä, sillä se testasi Markdownin soveltuvuutta myös akateemiseen kirjoittamiseen ja muodolliseen raportointiin.

Muunnosprosessi toteutettiin Pandoc-dokumenttikonvertterilla. Koko opinnäytetyön sisältö kirjoitettiin Markdown-tiedostoon, minkä jälkeen se muunnettiin yhdellä komentorivikomennolla Word-dokumentiksi (.docx). Pandocia käytettiin yhdessä `--reference-doc`-parametrin kanssa, joka sovelsi muunnoksessa HAMKin virallista opinnäytetyöpohjaa.

Viittausten hallintaan hyödynnettiin Zoteroa. Lähteet vietiin BibTeX-muotoon, ja Markdown-tekstissä viitattiin lähteisiin avaimilla. Pandoc käsitteli viitteet automaattisesti `--citeproc`-komennon avulla ja muodosti sekä tekstiviitteet että lähdeluettelon.

Käytännön kokeilussa havaittiin, että rakenne (otsikot, kappaleet, listat) siirtyi pääosin hyvin, mutta opinnäytetyöpohjan tarkat muotoiluvaatimukset (kuten ylätunnisteet, sivunumerointi ja otsikoiden automaattinen numerointi) eivät täysin säilyneet. Tämän vuoksi lopullinen Word-dokumentti vaati vielä manuaalista viimeistelyä.

### 5.10.1 Muunnos Pandocilla

Markdown-muotoisen opinnäytetyön muuntaminen Word-dokumentiksi toteutettiin Pandoc-työkalulla. Prosessi oli teknisesti yksinkertainen: koko työ kirjoitettiin yhteen tai useampaan Markdown-tiedostoon, minkä jälkeen muunnos suoritettiin komentoriviltä yhdellä tai useammalla komennolla.

*Ohjelmakoodi 3.* Havainnollistaa Pandocin peruskomentoa Markdownin muuntamiseksi Word-muotoon.

```
pandoc oppari.md -o oppari.docx
```

Tämä komento tuotti toimivan Word-dokumentin, jossa otsikkotasot, kappaleet ja listat siirtyivät pääosin oikein. Jotta tulos vastaisi paremmin HAMKin opinnäytetyöpohjan vaatimuksia, komentoa laajennettiin seuraavasti:

*Ohjelmakoodi 4.* Havainnollistaa Pandoc-muunnosta sisällysluettelolla ja mallipohjalla.

```
pandoc oppari.md -o oppari.docx
```

Käytännön kokeilujen perusteella Pandoc hoiti rakenteellisen muunnoksen varsin hyvin. Kuitenkin tietyt Wordin muotoiluominaisuudet, kuten osioiden erilaiset ylätunnisteet, sivunumerointi ja otsikoiden automaattinen numerointi, eivät siirtyneet täysin ongelmitta. Tämän vuoksi lopullinen dokumentti vaati vielä manuaalista viimeistelyä Word-ympäristössä.

### 5.10.2 Viittausten ja lähteiden käsittely Zoterolla

Viittausten ja lähteiden hallinta oli olennainen osa metatutkimusta. Lähteiden keräämiseen, organisointiin ja hallintaan käytettiin Zotero-viitteidenhallintatyökalua. Zoterosta lähteet vietiin BibTeX-muotoon (`.bib`-tiedosto), jota Pandoc pystyy hyödyntämään muunnosvaiheessa.

*Ohjelmakoodi 5.* Havainnollistaa Markdown-muotoista viittausta viiteavaimen avulla.

```
Tämä on esimerkkiviite @{zotero-item-22}.
```

Muunnosvaiheessa Pandoc käsittelee nämä viitteet automaattisesti. Tämä edellyttää, että muunnoskomennossa määritellään sekä viitetiedosto että viittausten käsittelyyn tarvittavat asetukset.

*Ohjelmakoodi 6.* Havainnollistaa Pandoc-muunnosta viitteiden kanssa.

```
pandoc oppari.md -o oppari.docx --toc --citeproc --bibliography=references.bib --csl=apa.csl
```

Pandoc muodosti automaattisesti sekä tekstiviitteet että lähdeluettelon dokumentin loppuun. Menetelmä toimi teknisesti hyvin ja mahdollisti viitteiden hallinnan kokonaan Markdown-ympäristössä. Käytännössä havaittiin kuitenkin, että muunnoksen jälkeen viitteet muuttuivat staattisiksi, eikä Wordin Zotero-lisäosaa voinut enää käyttää niiden muokkaamiseen. Tämän vuoksi kaikki viittaukset tuli viimeistellä jo Markdown-vaiheessa ennen lopullista muunnosta.

### 5.10.3 Muotoilun sovittaminen opinnäytetyöpohjaan

Vaikka Pandoc hoiti rakenteellisen muunnoksen (otsikot, kappaleet, listat) pääosin onnistuneesti, opinnäytetyön lopullinen ulkoasu vaatii tarkkaa sovittamista HAMKin viralliseen Word-mallipohjaan. Tässä vaiheessa hyödynnettiin Pandocin `--reference-doc`-parametria, jonka avulla muunnoksessa käytettiin valmista HAMKin opinnäytetyöpohjaa tyylimallina.

*Ohjelmakoodi 7.* Pandoc-muunnos HAMKin mallipohjaa käyttäen
```
pandoc oppari.md -o oppari.docx --toc --reference-doc=hamk_pohja.docx
```

Käytännön kokeilussa havaittiin useita haasteita. Ensinnäkin Pandoc ei säilyttänyt oikein Wordin osioiden (sections) erilaisia ylätunnisteita ja alatunnisteita. Esimerkiksi ensimmäisen sivun erilainen alatunniste kopioitui kaikille sivuille, mikä rikkoi opinnäytetyöpohjan vaatimukset. Lisäksi otsikoiden automaattinen numerointi Wordissa aktivoitui muunnoksen yhteydessä, vaikka Markdown-tiedostossa rakenne oli jo valmiiksi numeroitu. Tämä aiheutti epäjohdonmukaisuuksia otsikkotasoissa.

Muita ongelmia olivat mm. rivivälien, marginaalien ja fonttien tarkka sovittaminen sekä taulukoiden ja kuvien sijoittelu. Vaikka suuri osa sisällöstä siirtyi oikein, lopullinen Word-dokumentti vaati aina manuaalista viimeistelyä.

# 6 Tulokset

Tässä luvussa analysoidaan opinnäytetyössä toteutetun Markdown-pohjaisen dokumentaatiotyönkulun tuloksia. Analyysi kytkeytyy suoraan tutkimusmetodologiaan ja luvussa 4.4 määriteltyihin arviointikriteereihin. Tarkastelu perustuu käytännön toteutukseen, syntyneeseen dokumentaatiokokonaisuuteen sekä metatutkimuksena toteutettuun Markdown-Word-muunnokseen.

Analyysi toteutetaan laadullisena tapaustutkimuksena. Tavoitteena ei ole tilastollinen yleistettävyys, vaan syvällisen ja kontekstisidonnaisen ymmärryksen tuottaminen yhdestä konkreettisesta dokumentaatiototeutuksesta. Arvioinnin kohteena on tässä työssä rakennettu Markdown-työnkulku, joka kattaa dokumentaation keräämisen, muuntamisen, versionhallinnan, julkaisemisen sekä sisällön hyödyntämisen eri formaateissa.

Analyysi etenee neljän arviointikriteerin mukaisesti. Näitä ovat ylläpidettävyys, luettavuus, siirrettävyys ja automaation taso. Rakenne noudattaa suoraan tutkimusmenetelmässä määriteltyä kriteeristöä, mikä varmistaa analyysin metodologisen johdonmukaisuuden.

## 6.1 Analyysin lähtökohdat

Analyysin kohteena on Markdown-pohjainen dokumentaatiokokonaisuus sekä sitä tukeva tekninen työnkulku. Tarkastelu kohdistuu sekä dokumentaation sisältöön että sitä tuottaneeseen prosessiin. Sisällöllisestä näkökulmasta arvioidaan Markdown-muotoisen dokumentaation rakennetta, muokattavuutta ja luettavuutta sekä raakatekstinä että julkaistussa muodossa. Prosessin osalta analyysi kattaa koko toteutetun työnkulun WordPressin REST API -rajapinnan hyödyntämisestä Markdown-muunnokseen, versionhallintaan, staattisen sivuston generointiin ja Pandocin avulla tehtyyn Word-muunnokseen.

Arviointi perustuu luvussa 4.4 määriteltyihin kriteereihin, jotka ohjaavat analyysiä systemaattisesti. Kriteerit sitovat analyysin suoraan tutkimusmenetelmään ja varmistavat, että tulokset ovat johdonmukaisia suhteessa asetettuihin tavoitteisiin. Näin analyysi muodostaa selkeän jatkumon tapaustutkimukselle, jossa käytännön toteutusta tarkastellaan laadullisesti.

## 6.2 Ylläpidettävyys

### 6.2.1 Rakenteellinen ylläpidettävyys

Markdownin käyttö osoittautui rakenteellisesti ylläpidettäväksi ratkaisuksi. Dokumentaatio oli jaettu yksittäisiin Markdown-tiedostoihin, jotka oli sijoitettu loogiseen ja hierarkkiseen kansiorakenteeseen alkuperäisen sivuston rakennetta mukaillen. Tällainen tiedostopohjainen rakenne mahdollisti sen, että yksittäisiä sivuja voitiin muokata, poistaa tai lisätä ilman, että muutokset vaikuttivat koko dokumentaatiokokonaisuuteen. Tämä paransi dokumentaation hallittavuutta erityisesti laajassa ja monisivuisessa kokonaisuudessa.

Sivukohtainen muokattavuus osoittautui selkeäksi eduksi verrattuna monoliittisiin dokumentteihin, joissa yksittäinen muutos edellyttää usein koko asiakirjan avaamista ja läpikäyntiä. Lisäksi alkuperäisen hierarkian säilyminen helpotti sekä tiedostorakenteessa navigointia että julkaistun dokumentaation hahmottamista Docusaurus-ympäristössä.

### 6.2.2 Versionhallinnan vaikutus

Versionhallinnan integrointi dokumentaatioon oli ylläpidettävyyttä parantava tekijä. Gitin käyttö mahdollisti dokumentaation muutosten yksityiskohtaisen seurannan, eri versioiden vertailun sekä aiempiin tiloihin palaamisen tarvittaessa. Tämä vähensi riskiä pysyvistä virheistä ja paransi dokumentaation luotettavuutta.

Markdownin tekstipohjainen muoto soveltui erinomaisesti versionhallintaan, sillä muutokset olivat helposti havaittavissa diff-näkymissä ilman, että taustalla oleva rakenne tai muotoilu vaikeutti vertailua. Tämä tuki Docs-as-Code-ajattelua, jossa dokumentaatiota käsitellään samalla tavoin kuin ohjelmakoodia osana kehitysprosessia.

### 6.2.3 Haasteet

Ylläpidettävyyden näkökulmasta tunnistettiin kuitenkin myös rajoitteita. Osa sisäisistä linkeistä rikkoutui muunnosvaiheessa, mikä vaati manuaalista korjausta. Lisäksi dokumentaation rakenne oli vahvasti sidoksissa alkuperäisen WordPress-sivuston hierarkiaan. Tämä tarkoittaa, että merkittävät muutokset lähdesivuston rakenteessa heijastuisivat suoraan Markdown-kokonaisuuden ylläpitoon.

Yhteenvetona voidaan todeta, että Markdown parantaa ylläpidettävyyttä erityisesti rakenteellisen selkeyden ja versionhallinnan näkökulmasta, mutta sen hyödyt ovat sidoksissa lähderakenteen laatuun ja pysyvyyteen.

## 6.3 Luettavuus

### 6.3.1 Raakatekstin luettavuus

Raakatekstinä tarkasteltuna Markdown osoittautui selkeämmäksi ja helpommin hahmotettavaksi kuin HTML. Otsikot, kappalerakenteet, listat ja korostukset olivat luettavissa suoraan tekstieditorissa ilman erillistä renderöintiä. Tämä tukee Markdownin käyttöä erityisesti teknisissä ympäristöissä, joissa sisältöä tarkastellaan ja muokataan usein pelkkänä tekstinä.

Markdownin syntaksin yksinkertaisuus paransi tekstin luettavuutta ja vähensi kognitiivista kuormitusta verrattuna HTML-tagien runsaaseen käyttöön. Sisällön rakenne oli helposti tunnistettavissa, mikä helpotti sekä kirjoittamista että sisällön arviointia.

### 6.3.2 Julkaistun sivuston luettavuus

Julkaistussa muodossa luettavuus parani edelleen Docusauruksen tarjoamien rakenteellisten ominaisuuksien ansiosta. Staattinen sivustogeneraattori muodosti automaattisesti navigaation, sivupalkin ja yhtenäisen ulkoasun tiedostorakenteen perusteella. Tämä teki laajasta dokumentaatiokokonaisuudesta helposti selattavan ja käyttäjäystävällisen.

Julkaistun dokumentaation rakenne tuki lukijan orientaatiota ja sisällön löytämistä, mikä on oleellinen luettavuuden osa-alue erityisesti teknisessä dokumentaatiossa.

### 6.3.3 Luettavuuden heikkeneminen

Luettavuus heikkeni niissä kohdissa, joissa alkuperäisen HTML-sisällön visuaaliset ja rakenteelliset elementit eivät siirtyneet Markdown-muotoon. Monipalstaiset asettelut, visuaaliset korostuslaatikot ja muut käyttöliittymälähtöiset ratkaisut yksinkertaistuivat tekstipohjaiseen esitysmuotoon. Tämän seurauksena osa sisällön visuaalisesta selkeydestä ja painotuksista menetettiin.

Tämä korostaa Markdownin rajoituksia tilanteissa, joissa luettavuus perustuu voimakkaasti visuaalisiin elementteihin eikä pelkästään rakenteeseen ja kielelliseen selkeyteen.

Yhteenvetona voidaan todeta, että Markdown parantaa luettavuutta erityisesti raakatekstinä ja rakenteellisena sisältönä, mutta sen ilmaisukyky on rajallinen monimutkaisissa visuaalisissa esitysmuodoissa.

## 6.4 Siirrettävyys

### 6.4.1 Formaattien välinen muunnos

Siirrettävyyden näkökulmasta Markdown osoittautui vahvaksi lähdeformaatiksi. Sama sisältö voitiin hyödyntää useissa eri yhteyksissä muuntamalla se Markdownista HTML-muotoon Docusauruksen avulla sekä Word-muotoon Pandocin avulla. Erityisesti HTML-julkaisussa dokumentin rakenne säilyi hyvin ja vastasi pitkälti alkuperäistä Markdown-sisältöä.

### 6.4.2 Alustariippumattomuus

Markdown-muotoinen dokumentaatio ei ollut sidottu tiettyyn ohjelmistoon tai käyttöympäristöön. Tiedostot olivat hyödynnettävissä suoraan versionhallintaympäristössä, erilaisissa tekstieditoreissa sekä useilla dokumentaatioalustoilla. Tämä lisäsi dokumentaation joustavuutta ja uudelleenkäytettävyyttä.

### 6.4.3 Rajoitteet

Metatutkimuksen yhteydessä havaittiin kuitenkin selkeitä rajoitteita erityisesti Word-muunnoksessa. Vaikka Pandoc säilytti dokumentin rakenteen pääosin oikein, kaikkia opinnäytetyöpohjan edellyttämiä muotoiluja ei voitu automatisoida. Lisäksi Markdown-murteiden väliset erot vaikuttivat siihen, miten tietyt rakenteet toimivat eri ympäristöissä.

Yhteenvetona voidaan todeta, että Markdown toimii hyvin siirrettävänä lähdeformaatina, mutta täydellinen visuaalisen muotoilun säilyminen ei ole mahdollista kaikissa kohdeympäristöissä.

## 6.5 Automaation taso

### 6.5.1 Automatisoidut vaiheet

Toteutettu dokumentaatiotyönkulku sisälsi useita pitkälle automatisoituja vaiheita. Sisällön kerääminen toteutettiin WordPressin REST API -rajapinnan avulla, HTML-sisältö muunnettiin Markdown-muotoon Turndown-kirjastolla ja lopullinen sivusto rakennettiin Docusauruksella. Julkaisu suoritettiin automaattisesti GitHub Actions -työnkulun avulla.

### 6.5.2 Manuaaliset vaiheet

Täydellisestä automaatiosta huolimatta osa työvaiheista edellytti edelleen manuaalista puuttumista. Näitä olivat erityisesti sisäisten linkkien korjaaminen muunnoksen jälkeen sekä lopullisen Word-dokumentin viimeistely opinnäytetyövaatimuksia vastaavaksi.

### 6.5.3 Automaation hyödyt

Automaation hyötynä oli dokumentaation ajantasaisuus. Kun työnkulku oli toistettava ja automatisoitu, dokumentaatio voitiin päivittää nopeasti ilman laajaa manuaalista työskentelyä. Tämä paransi myös prosessin skaalautuvuutta, sillä samaa työnkulkua voitiin soveltaa suuriin sisältömääriin.

### 6.5.4 Automaation rajoitteet

Automaation rajoitteet liittyivät erityisesti virheiden kertautumiseen sekä ulkoisiin riippuvuuksiin. Mikäli virhe syntyi tiedonkeruu- tai muunnosvaiheessa, se saattoi levitä koko dokumentaatiokokonaisuuteen. Lisäksi työnkulku oli sidoksissa useisiin ulkoisiin järjestelmiin ja rajapintoihin, mikä lisää haavoittuvuutta muutostilanteissa.

## 6.6 Yhteenveto analyysista

Analyysin perusteella Markdown-pohjainen dokumentaatiotyönkulku osoittautui kokonaisuutena toimivaksi ja nykyaikaiseksi ratkaisuksi teknisen dokumentaation tuottamiseen. Sen vahvuudet liittyivät rakenteelliseen ylläpidettävyyteen, versionhallinnan hyödyntämiseen, hyvään luettavuuteen raakatekstinä sekä korkeaan automaation tasoon erityisesti verkkopohjaisessa julkaisemisessa.

Heikkoudet liittyivät ennen kaikkea visuaalisen ilmaisun rajoituksiin, linkkirakenteiden haavoittuvuuteen sekä Word-muunnoksen epätäydelliseen automatisointiin. Näistä huolimatta Markdown soveltuu erinomaisesti ympäristöihin, joissa dokumentaatio on osa jatkuvaa kehitysprosessia, tuotetaan versionhallinnan piirissä ja julkaistaan ensisijaisesti verkossa. Sen käyttö ei kuitenkaan ole optimaalista tilanteissa, joissa vaaditaan tarkkaa ja muuttumatonta visuaalista muotoilua.

# 7 Johtopäätökset

Tässä alaluvussa vastataan opinnäytetyössä asetettuihin tutkimuskysymyksiin tutkimuksen tulosten ja analyysin perusteella.

## 7.1 Miten Markdown soveltuu teknisen dokumentaation kirjoittamiseen ohjelmistoprojekteissa?

Tutkimuksen perusteella Markdown soveltuu teknisen dokumentaation kirjoittamiseen erityisesti ympäristöissä, joissa dokumentaatio tuotetaan ja ylläpidetään osana ohjelmistokehitystä. Markdownin kevyt ja rakenteinen syntaksi tukee selkeää sisällön jäsentelyä sekä mahdollistaa dokumentaation kirjoittamisen ilman raskaita muotoilutyökaluja. Tekstipohjaisuutensa ansiosta Markdown on helposti luettavissa myös raakamuodossa ja integroitavissa kehittäjien päivittäisiin työkaluihin, kuten koodieditoreihin ja versionhallintajärjestelmiin. Tulokset osoittavat, että Markdown tukee tehokkaasti niin dokumentaation kirjoittamista, ylläpitoa kuin julkaisemistakin, kun sitä täydennetään sopivilla työkaluilla, kuten staattisilla sivustogeneraattoreilla.

## 7.2 Mitkä ovat Markdownin edut ja rajoitukset verrattuna muihin dokumentointimenetelmiin?

Markdownin merkittävimmät edut verrattuna perinteisiin tekstinkäsittelyohjelmiin ja suoraan HTML-pohjaiseen dokumentointiin liittyvät ylläpidettävyyteen, siirrettävyyteen ja versionhallinnan tukeen. Markdown mahdollistaa dokumentaation käsittelyn samalla tavalla kuin ohjelmakoodin, mikä parantaa yhteistyötä ja muutosten hallintaa. Lisäksi sama Markdown-lähdemateriaali voidaan muuntaa useisiin eri formaatteihin, kuten HTML- ja Word-muotoon, ilman että sisältöä tarvitsee kirjoittaa uudelleen.

Rajoituksina tutkimuksessa tunnistettiin Markdownin rajallinen visuaalinen ilmaisukyky sekä eri Markdown-laajennusten väliset yhteensopivuusongelmat. Erityisesti tarkkaa muotoilua vaativissa käyttötapauksissa, kuten muodollisissa Word-dokumenteissa, täysin automatisoitu lopputulos ei ollut saavutettavissa ilman manuaalista viimeistelyä. Näin ollen Markdown ei kaikissa tilanteissa korvaa perinteisiä dokumentointimenetelmiä, vaan toimii parhaiten osana työkaluketjua.

## 7.3 Millä tavoin Markdown helpottaa dokumentaation ylläpitoa versionhallintajärjestelmissä?

Markdownin tekstipohjainen luonne tekee siitä erityisen hyvin yhteensopivan versionhallintajärjestelmien, kuten Gitin, kanssa. Tutkimuksessa havaittiin, että dokumentaation muutokset olivat selkeästi seurattavissa versionhallinnassa, ja eri versioiden vertailu oli yksiselitteistä ilman häiritsevää muotoilutietoa. Tämä paransi dokumentaation luotettavuutta ja mahdollisti virheellisten muutosten helpon palauttamisen.

Lisäksi Docs-as-Code-lähestymistavan mukainen Markdown-pohjainen dokumentaatio mahdollisti dokumentaation integroinnin osaksi automatisoitua julkaisuprosessia. Dokumentaation päivittäminen voitiin siten kytkeä suoraan muutoksiin lähdejärjestelmässä, mikä edisti sisällön ajantasaisuutta ja vähensi manuaalisen työn määrää. Tutkimuksen perusteella Markdown tukee tehokkaasti versionhallintaan perustuvaa dokumentaation ylläpitomallia erityisesti teknisissä ja organisaatiomaisissa ympäristöissä.

## 7.4 Menetelmän arviointi

Tutkimuksessa sovellettu menetelmä osoittautui kokonaisuutena toimivaksi ja toistettavaksi ratkaisuksi. Erityisesti WordPress REST API:n hyödyntäminen paransi tiedonkeruun luotettavuutta ja rakenteellisuutta verrattuna perinteisiin web scraping -menetelmiin. Samalla automatisoitu työnkulku tehosti dokumentaation käsittelyprosessia merkittävästi. Menetelmän rajoitteena voidaan pitää sen vahvaa riippuvuutta kohdesivuston teknisestä rakenteesta ja hyödynnetyistä teknologioista. Lisäksi on huomioitava, ettei HTML-muotoisen aineiston muuntaminen Markdown-muotoon ollut teknisesti täydellistä, mikä asetti haasteita lopputuloksen laadulliselle tasolle.

# 8 Jatkotutkimuksen mahdollisuudet

Tämän opinnäytetyön tarkoituksena oli selvittää Markdownin soveltuvuutta teknisen dokumentaation tuottamiseen ja ylläpitoon sekä tutkia sen käyttöä sekä käytännön dokumentaatiossa että opinnäytetyön kirjoittamisessa. Työ toteutettiin tapaustutkimuksena, jossa HAMKin julkiset verkkosivut muunnettiin Markdown-muotoon automatisoidulla prosessilla.

Tämän työn kautta opin paljon enemmän kuin pelkästään Markdownin syntaksia. Opin, miten tärkeää on suunnitella dokumentaatioprosesseja koko elinkaaren ajattelulla tiedonkeruusta ylläpitoon ja julkaisemiseen asti.

Opin myös konkreettisesti, miten "Docs as Code" -ajattelu toimii käytännössä ja miten voimakas työkaluyhdistelmä TypeScript, Git, Docusaurus ja GitHub Actions voi olla. Samalla havaitsin, miten paljon manuaalista työtä ja säätämistä liittyy vielä näennäisen automaattisiin prosesseihin. Metatutkimus opetti nöyryyttä muotoilun ja akateemisten vaatimusten kanssa, sillä tekninen ratkaisu ei aina suoraan sovi valmiiseen muottiin.

Markdown-pohjainen dokumentaatio näyttää vahvalta vaihtoehdolta perinteisille menetelmille, ja sen käyttö tulee todennäköisesti yleistymään entisestään organisaatioissa. Tulevaisuudessa nähdään todennäköisesti entistä parempia integraatioita eri järjestelmien välillä sekä kehittyneempiä automaatiota ja tekoälyavusteista dokumentaation generointia.

Työ osoitti kuitenkin myös, että Markdown ei täysin korvaa kaikkia muita dokumentaatiomuotoja. Erityisesti tarkkaa muotoilua vaativissa käyttötapauksissa tarvitaan lisätyökaluja tai manuaalista viimeistelyä.

HAMKilla ja muilla ammattikorkeakouluilla olisi mahdollisuus ottaa merkittävä askel eteenpäin siirtymällä kohti moderneja dokumentaatiokäytäntöjä. Tämän työn tulokset tarjoavat jonkinlaisen pohjan pilotoinnille ja laajemmalle käyttöönotolle.

Jatkokehityksen näkökulmasta olisi hyödyllistä tutkia Markdownin käyttöä laajemmin eri organisaatioissa sekä vertailla sitä muihin dokumentaatiotyökaluihin empiirisesti. Lisäksi automaation ja muunnostyökalujen kehittäminen voisi vähentää manuaalisen työn tarvetta entisestään.