
[1]: https://github.com/kejjjjj/oppari/blob/main/dokumentaation_merkitys.png?raw=true
[2]: https://github.com/kejjjjj/oppari/blob/main/markdown_example.png?raw=true
[3]: https://github.com/kejjjjj/oppari/blob/main/wordpress_tunnistus_network.png?raw=true
[4]: https://github.com/kejjjjj/oppari/blob/main/hamk_wordpress_api_rajapinta.png?raw=true
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/using_the_w3c_dom_level_1_core-doctree.jpg
[6]: https://github.com/kejjjjj/oppari/blob/main/docusaurus.png?raw=true

# Abstrakti
tekstiä tänne
# Abstract
text here

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

# 2 Introduction to the knowledge base
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

Ajantasaisuus on tärkeää, sillä vanhentunut dokumentaatio voi olla jopa haitallisempaa kuin sen puuttuminen. Tämän vuoksi dokumentaation ylläpito ja päivittäminen tulisi olla jatkuva prosessi osana kehitystyötä. Dokumentaation tulisi myös olla heposti ylläpidettävissä ja sijoitettu lähelle itse järjestelmää tai koodia, jotta sen päivittäminen olisi luonteva osa muuta työskentelyä. @zotero-item-17

## 2.2 Dokumentaatiomenetelmät ja niiden kehitys

Dokumentaatiomenetelmät ovat kehittyneet pitkälti teknologian ja työskentelytapojen muutosten mukana. Aikaisemmin dokumentaatio tuotettiin pääasiassa erillisillä tekstinkäsittelyohjelmilla, ja sitä ylläpidettiin tiedostomuotoisina dokumentteina. Tämä malli oli yksinkertainen, mutta sen haasteena oli versioiden hallinnan vaikeus sekä se, että usean henkilön samanaikainen työskentely saman dokumentin parissa oli usein hankalaa.

Tätä varten kehitettiin menetelmä nimeltä "Docs-as-Code", joka viittaa menetelmään, jossa dokumentaatiota käsitellään samoilla työkaluilla kun koodia tehdessä. Tämä menetelmä mahdollistaa yhteistyön ja versionhallinnan, sillä dokumentaatio ei ole enää yksittäinen staattinen tiedosto, vaan osa laajempaa kehitysympäristöä. Tällaisessa mallissa dokumentaatio elää yhdessä järjestelmän ja sen kehityksen kanssa, ja siihen tehtävät muutokset voidaan hallita samalla tavalla kuin ohjelmakoodia versionhallinnan avulla. Tämä vähentää ristiriitoja eri versioiden välillä ja parantaa dokumentaation ajantasaisuutta. @zotero-item-18

### 2.2.1 Perinteiset dokumentointimenetelmät (tekstinkäsittelyohjelmat)

Perinteiset dokumentointimenetelmät perustuvat pääasiassa tekstinkäsittelyohjelmien, kuten Microsoft Wordin käyttöön. Näissä työkaluissa dokumentaatio tuotetaan valmiiksi muotoiltuna tiedostona. Tekstinkäsittelyohjelmat ovat laajasti käytössä erityisesti organisaatioissa, joissa dokumentaation tuottaminen ei vaadi teknistä osaamista, ja ne soveltuvat hyvin esimerkiksi raporttien, ohjeiden ja muiden virallisten asiakirjojen laatimiseen. @zotero-item-19

### 2.2.2 HTML-pohjainen dokumentointi

HTML-pohjainen dokumentointi perustuu verkkoteknologioiden hyödyntämiseen, jossa dokumentaatio tuotetaan HyperText Markup Language (HTML) -kielellä selaimilla tarkisteltaviksi. HTML mahdollistaa linkitettävän dokumentaation, jossa sisältö jaetaan useisiin sivuihin ja yhdistetään toisiinsa hyperlinkkien avulla. HTML-dokumentaatiota hyödynnetään laajoissa kokonaisuuksissa, joissa tiedon jäsentely ja navigoitavuus on tärkeää. @zotero-item-20

HTML:n rinnalla voidaan käyttää tyylitiedostoja (CSS) ja skriptejä (Javascript), joiden avulla dokumentaation ulkoasua ja toiminnallisuutta voidaan muokata monipuolisemmin. Näiden avulla saadaan esimerkiksi responsiivista suunnittelua ja interaktiivisia elementtejä, jotka parantavat käyttäjäkokemusta erityisesti verkossa julkaistussa dokumentaatiossa. @zotero-item-20

# 3 Knowledge base advanced

## 3.1 Markdownin perusteet

Markdown on kevyt merkintäkieli, jonka tarkoituksena on mahdollistaa helposti kirjoitettavan tekstin tuottaminen yksinkertaisella tavalla. Sen idea on erottaa sisällön rakenne ja ulkoasu toisistaan siten, että teksti säilyy selkeänä myös ilman erillistä muotoilua. Markdown kehitettiin tavaksi kirjoittaa dokumentaatiota ilman HTML-kielen osaamista. Markdownia käytetään erityisesti teknisessä dokumentaatiossa, ohjelmistokehityksessä sekä verkkosisällön tuottamisessa sen helpon oppimiskynnyksen takia. @zotero-item-21

Markdownin syntaksi koostuu yksinkertaisista merkeistä, kuten risuaidoista (#) otsikoiden merkitsemisessä, tähdistä (*) tai alaviivoista (_) korostuksissa sekä listoissa. Tämän ansiosta dokumentaatio voidaan kirjoittaa pelkkänä tekstinä ilman erillisiä muotoilutyökaluja, ja se on helposti luettavisa myös raakamuodossa. Markdown-tiedostot ovat kevyitä ja yhteensopivia useiden eri järjestelmien kanssa, mikä tekee niistä järkevän vaihtoehdon versionhallinnassa. @zotero-item-23

Markdownin etu on sen muunneltavuus. Sama sisältö voidaan muuntaa automaattisesti esimerkiksi HTML-, PDF- tai muihin formaatteihin erilaisten formatointityökalujen avulla. Tämän ansiosta sisältö voidaan uudelleenkäyttää eri ympäristöissä ilman, että sitä tarvitsee kirjoittaa uudelleen. Markdown toimii siltana yksinkertaisen tekstin ja monipuolisten julkaisumuotojen välillä, mikä tekee siitä työkalun nykyaikaisessa dokumentaatiotyössä. @zotero-item-22

### 3.1.1 Markdownin historia ja kehitystausta

Markdown kehitettiin vuonna 2004, kun John Gruver loi kielen yhteistyössä Aaron Swartz kanssa. Sen taustalla olivat aiemmat tavat merkitä tekstiä esimerkiksi sähköposteissa ja keskustelupalstoilla sekä varhaisemmat merkintäkielet, kuten setext ja reStructuredText. @zotero-item-24

Markdownin tavoitteena oli mahdollistaa helposti luettavan ja kirjoitettavan pelkän tekstin tuottaminen, jota voidaan tarvittaessa muuntaa rakenteellisesti oikeaksi HTML- tai XHTML-muotoiseksi dokumentiksi. Erityistä huomiota kiinnitettiin luettavuuteen, sillä tekstin tuli olla ymmärrettävää myös ilman muotoilun tulkintaa, toisin kuin monimutkaisemmissa merkintäkielissä.

Markdownin tueksi kehitettiin myös työkaluja, kuten ohjelma, joka muuntaa merkityn tekstin automaattisesti HTML-muotoon. Tämä mahdollisti sisällön julkaisemisen verkossa ilman, että kirjoittajan tarvitsee hallita HTML-kieltä. @zotero-item-24

### 3.1.2 Markdownin perussyntaksi ja rakenteet

Markdownin perussyntaksi perustuu yksinkertaisiin ja helposti muistettaviin merkintätapohin, joiden avulla tekstiä voidaan jäsentää ilman monimutkaisia komentoja. Otsikot merkitään risuaidoilla (#), jolloin otsikkotaso määräytyy käytettyjen merkkien lukumäärän mukaan. Tekstin **korostamiseen** käytetään esimerkiksiä tähtiä (\*) tai alaviivoja (\_), joilla voidaan ilmaista _kursivointi_ tai **lihavointi**. Listat voidaan toteuttaa joko järjestämättöminä viivojen (-) tai tähtien (*) avulla tai järjestettyinä numeroiden avulla. @zotero-item-25

Markdown mahdollistaa myös linkkien ja kuvien lisäämisen selkeällä syntaksilla, jossa linkkiteksti ja osoite eroitetaan toisistaan hakasulkeiden [] ja sulkujen avulla (). Koodin esittämiseen voidaan käyttää yksittäisi tai kolmoistakaperäisiä heittomerkkejä (\`), mikä tekeee siitä erityisen hyödyllisen ohjelmistokehityksessä. Näiden rakenteiden ansiosta Markdown soveltuu hyvin tekniseen dokuemntointiin. @zotero-item-25

![Markdown esimerkki][2]

*Kuva 2.* Havainnollistaa Markdownin syntaksia.

### 3.1.3 Markdownin laajennukset

Markdownin perussyntaksia on laajennettu useilla tavoilla, jotta se vastaisi nykyaikaista dokumentaatiotasoa. Näitä laajennuksia kutsutaan usein nimellä "flavors", ja ne tuovat lisäominaisuuksia, joita alkuperäinen Markdown ei sisällä. Tunnetuin esimerkki on Github Flavored Markdown (GFM), jota käytetään ohjelmistokehityksessä ja versionhallintaympäristöissä (Github). @zotero-item-26

Github Flavored Markdown laajentaa perussyntaksia muun muassa taulukoiden, tehtävälistojen (checkbox-listat) sekä korostettujen koodilohkojen tuella. Näiden avulla dokumentaation havainnollistamista helpotetaan vaikeuttamatta syntaksia ja saadaan siitä samalla rakenteellisesti monipuolisempaa. @zotero-item-26

Lisäksi monet Markdown-laajennukset tukevat automaattista linkkien tunnistamista, sisällysluetteloiden muodostamista sekä erilaisten lisäelementtien, kuten huomautuslaatikoiden käyttöä. Näiden ansiosta Markdownin käyttöä saa sovellettua entistä laajemmin dokumentaatiokokonaisuuksien tuottamiseen ja ylläpitoon. Laajennusten käyttö kuitenkin riippuu käytetystä työkalusta tai alustasta, mikä voi vaikuttaa dokumentaation yhteensopivuuteen eri ympäristöissä. @zotero-item-27

### 3.1.4 Markdownin rajoitukset ja haasteet

Vaikka Markdown on kevyt ja helppokäyttöinen, siihen liittyy myös rajoituksia, jotka voivat vaikuttaa sen soveltuvuuteen tietyissä käyttötapauksissa. Yksi haaste on sen rajallinen ilmaisuvoima verrattuna esimerkiksi puhtaaseen HTML-koodiin. Markdownin perussyntaksi ei tue kaikki monimutkaisia rakenteita tai visuaalisia elementtejä, minkä vuoksi käyttäjät joutuvat välillä turvautumaan HTML-koodiin tai käyttäämään virityksiä saadaakseen haluamansa lopputuloksen. @zotero-item-28

Rajoituksia liittyy myös eri Markdown-versioiden välisiin eroihin. Koska Markdownista on olemassa useita laajennuksia ja toteutuksia, kuten GitHub Flavored Markdown, kaikki ominaisuudet eivät ole yhteensopivia eri alustuojen välillä. Tämä saattaa aiheuttaa ongelmia dokumentaation siirrettävyydessä ja yhtenäisyydessä, jos sama sisältö ei toimi odotetusti eri ympäristöissä. @zotero-item-27

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

Dokumentaatiomenetelmien vertailu auttaa ymmärtämään eri lähestymistapojen vahvuuksia ja heikkouksia sekä valitsemaan tarkoitkseen sopivimman ratkaisun. Perinteiset tekstinkäsittelyohjelmat ovat helppokäyttöisiä ja soveltuvat hyvin yksinkertaiseen dokumentointiin, mutta niiden heikkoutena on rajallinen tuki versionhallinnalle ja yhteistyölle. Dokumentit ovat usein erillisiä tiedostoja, mikä voi johtaa useisiin rinnakkaisiin versioihin ja vaikeuttaa ajantaisaisen tiedon hallintaa. @zotero-item-19

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

### 3.4.2 Sisällön kerääminen ja muuntaminen Markdown-muotoon

Web scrapingin avulla kerätty sisältö voidaan muuntaa Markdown-muotoon, jolloin siitä saadaan helposti luettavaa ja ylläpidettävää dokumentaatiota. Prosessi alkaa yleensä verkkosivun HTML-rakenteen hakemisella, jonka jälkeen sisältö jäsennetään ja suodatetaan siten, että vain oleellinen tieto, kuten otsikot, kappaleet ja linkit, säilytetään. Tämän jälkeen sisältö muunnetaan Markdown-syntaksia vastaavaan muotoon, esimerkiksi HTML-otsikot muutetaan risuaitamerkinnöiksi (#) ja listat vastaaviksi Markdown-listoiksi. @zotero-item-46

Muuntaminen voidaan toteuttaa automaattisesti erilaisten työkalujen ja kirjastojen avulla. Näiden avulla HTML-rakenteesta voidaan muodostaa Markdown-dokumentti ilman, että sisältöä tarvitsee käsitellä manuaalisesti. Tämä nopeuttaa merkittävästi dokumentaation tuottamista erityisesti silloin, kun käsitellään suuria määriä verkkosisältöä tai olemassa olevaa dokumentaatiota halutaan siirtää uuteen formaattiin. @zotero-item-47

### 3.4.3 Eettiset ja tietoturvaan liittyvät näkökulmat

Web scrapingiin liittyy useita eettisiä ja juridisia näkökulmia, jotka tulee huomioida ennen menetelmän käyttöä. Vaikka automaattinen tiedonkeruu verkkosivuilta on teknisesti mahdollista, sen laillisuus riippuu pitkälti siitä, miten kerättyä tietoa käytetään. Yleisesti ottaen datan kerääminen henkilökohtaiseen käyttöön ja kohtuullisen käytön puitteissa on sallittua, mutta ongelmia voi syntyä, jos sisältöä julkaistaan uudelleen, rikotaan palvelun käyttöehtoja tai käsitellään tekijänoikdeun alaista materiaalia ilman lupaa. @zotero-item-45

Pelkkien faktojen käerääminen ei välttämättä riko tekijänoikeuksia, mutta sisältö, jolla on tunnistettava tekijä tai luova panos, voi olla suojattua. Lisäksi tapauksissa on todettu, että uutis- ja muun suojatun sisällön uudelleenkäyttö ilman lupaa voi rikkoa tekijänouikeuslakeja. Toisaalta tietyissä tilanteissa, kuten verkkosivujen indeksoinnissa ja linkittämisessä, automaattinen tiedonkeruu on katsottu sallituksi, kunhan se ei riko muita ehtoja. @zotero-item-45

Eettisestä näkökulmasta on tärkeää huomioida myös scrapinging vaikutus kohdejärjestelmiin. Liiallinen tai aggressiivinen tiedonkeruu voi kuormittaa verkkosivua ja heikentää sen toimintaa, mikä voi johtaa palvelun häiriöihin. Vaikka kaikki tällainen toiminta ei välttämättä ole lainvastaista, sitä voidaan pitää epäeettisenä. Tämän vuoksi web scrapingia tulisi toteuttaa vastuullisesti, huomioiden sekä tekniset rajoitteet että palveluntarjoajien ehdot ja oikeudet. @zotero-item-45

## 3.5 Markdown työelämässä

Markdown on vakiinnuttanut asemansa osana nykyaikaista työelämää teknisessä dokumentaatiossa ja ohjelmistokehityksessä. Sen yksinkertainen syntaksi ja yhteensopivuus erilaisten työkalujen kanssa tekevät siitä sopivan ratkaisun organisaatioille, joissa dokumentaatiota tuotetaan jatkuvasti ja useiden käyttäjien toimesta. Markdown mahdollistaa dokumentaation integroimisen osaksi kehitysprosesseja, mikä parantaa tiedon ajantasaisuutta. @zotero-item-23

Työelämässä Markdownin käyttö liittyy usein versionhallintaan, yhteistyöhön sekä automaatioon. Dokumentaatio voidaan tallentaa samaan ympäristöön kuin ohjelmakoodi, jolloin muutokset ovat helposti seurattavissa ja hallittavissa. Tämä parantaa tiimityötä ja vähentää tiedon siiloutumista, kun dokumentaatio on kaikkien saatavilla yhtenäisessä muodossa. @zotero-item-48

Markdownin käyttöönotto organisaatiossa vaatii sekä teknisiä ratkaisuja että toimintatapojen muutosta. On tärkeää määritellä miten dokumentaatiota tuotetaan, missä sitä säilytetään ja millä työkaluilla sitä hallitaan. Usein käyttöönotto liittyy versionhallintajärjestelmien, kuten Gitin, sekä yhteisten alustojen, kuten GitHubin, hyödyntämiseen, jolloin dokumentaatio voidaan integroida osaksi muuta kehitystyötä. @zotero-item-49

Onnistunut käyttöönotto edellyttää myös yhteisten käytäntöjen ja ohjeistusten luomista. Näihin kuuluvat esimerkiksi dokumentaation rakenne, nimeämiskäytännöt sekä kirjoitustyyli. Yhtenäiset toimintamallit parantavat dokumentaation laatua ja tekevät siitä helpommin ymmärrettävää kaikille käyttäjille. Lisäksi henkilöstön koulutus on tärkeää, jotta kaikki osaavat hyödyntää Markdownia ja siihen liittyviä työkaluja. @zotero-item-50

Käyttöönottoon liittyy myös haasteita, kuten muutosvastarinta ja uuden työskentelytavan opettelu. Erityisesti organisaatioissa, joissa on totuttu perinteisiin dokumentointimenetelmiin, siirtyminen tekstipohjaiseen ratkaisuun voi vaatia aikaa ja tukea. Näitä haasteita voidaan kuitenkin vähentää tarjoamalla selkeitä ohjeita, esimerkkejä ja käytännön hyötyjä, jotka konkretisoivat Markdownin edut. @zotero-item-50

# 4 Research method

## 4.1 Käytännön toteutukseen perustuva tapaustutkimusmenetelmä

Tämän työn tutkimusmenetelmänä käytetään käytännönläheistä ja soveltavaa lähestymistapaa, jossa teoreettista tarkastelua täydennetään konkreettisella toteutuksella. Menetelmä perustuu tapaustutkimuksen kaltaiseen lähestymistapaan, jossa Markdownin soveltuvuutta arvioidaan todellisessa käyttötilanteessa muuntamalla olemassa olevaa dokumentaatiota uuteen muotoon.

Tutkimuksen käytännön osuus toteutetaan vaiheittain. Ensin valitaan kohteeksi HAMK:n tekstipohjaiset dokumentaatiosivut, joiden sisältö kerätään web scraping -menetelmällä. Tiedonkeruu toteutetaan TypeScript-pohjaisilla työkaluilla, joiden avulla verkkosivujen HTML-rakenne haetaan ja siitä erotellaan oleellinen sisältö. Tämän jälkeen kerätty sisältö muokataan ohjelmallisesti Markdown-muotoon hyödyntäen muunnostyökaluja ja skriptejä.

Muokattu dokumentaatio tallennetaan versionhallintaan Gitin avulla ja julkaistaan GitHub-repositoriossa. Tämä mahdollistaa dokumentaation hallinnan, muutosten seurannan sekä yhteistyön simuloinnin käytännön tasolla. Versionhallinnan käyttö on osa tutkimusmenetelmää, sillä se vastaa nykyaikaisia dokumentaatiokäytäntöjä.

Menetelmän tavoitteena on arvioida Markdownin soveltuvuutta dokumentaation tuottamiseen ja ylläpitoon käytännön toteutuksen kautta. Tutkimuksessa tarkastellaan erityisesti prosessin toimivuutta, työkalujen käytettävyyttä sekä lopputuloksen laatua suhteessa alkuperäiseen dokumentaatioon.

## 4.2 Metatutkimus: Markdownin muuntaminen opinnäytetyömuotoon

Tutkimusmenetelmään sisältyy myös metatasoinen tarkastelu, jossa arvioidaan Markdown-muotoisen dokumentaation muuntamista HAMK:n viralliseen opinnäytetyömuotoon. Tässä työssä tarkastelun kohteena on Markdown-dokumentin muuntaminen HAMK:n opinnäytetyöpohjan mukaiseen Microsoft Word -muotoon sekä viitteidenhallinnan (Zotero) integrointi osaksi prosessia.

Muunnosprosessi perustuu työkaluihin, jotka mahdollistavat Markdown-tiedostojen konvertoinnin Word-muotoon (.docx). Tällaiset työkalut, kuten Pandoc, pystyvät säilyttämään dokumentin rakenteen (otsikot, kappaleet, listat) ja muuntamaan sen Word-yhteensopivaan muotoon. Tämän jälkeen dokumentti voidaan sovittaa HAMK:n viralliseen opinnäytetyöpohjaan, jossa huomioidaan esimerkiksi tyylit, otsikkotasot ja sivuasetukset.

Metatutkimuksen tavoitteena on arvioida kuinka hyvin Markdown-pohjainen kirjoitusprosessi soveltuu opinnäytetyön kaltaiseen formaaliin dokumentointiin. Erityisesti tarkastellaan muunnosprosessin toimivuutta, rakenteen säilymistä sekä viitteidenhallinnan yhteensopivuutta. Tämä näkökulma täydentää varsinaista tutkimusta tuomalla esiin Markdownin käytettävyyden myös akateemisessa kontekstissa.

# 5 Research
tekstiä tänne?
## 5.1 HAMKin julkisten sivujen muuntaminen Markdown-muotoon
tekstiä tänne?
### 5.1.1 Tutkimuksen suunnittelu ja rajaus
tekstiä tänne?
### 5.1.2 Kohdesivuston teknologian tunnistaminen
Tutkimuksen ensimmäisessä vaiheessa tarkastellaan kohdesivuston rakennetta ja toteutusteknologiaa, jotta tiedonkeruu voidaan toteuttaa systemaattisesti ja tarkoituksenmukaisesti. Koska sivuston toteutustapaa ei ole ennalta tiedossa, sen taustateknologia selvitetään hyödyntämällä useita rinnakkaisia tunnistusmenetelmiä. Näihin kuuluvat HTML-lähdekoodin analysointi, HTTP-otsakkeiden tarkastelu sekä selaimen kehitystyökalujen (DevTools) käyttö. Tavoitteena on tunnistaa mahdollisia viitteitä käytetystä sisällönhallintajärjestelmästä, kuten tiedostopolkuja, skriptejä ja meta-tietoja, jotka voivat viitata esimerkiksi WordPressiin tai muuhun vastaavaan järjestelmään.

Sivuston taustateknologian tunnistaminen toteutetaan useiden teknisten tarkastelumenetelmien avulla, koska sivuston toteutustapa ei ole aluksi tiedossa. Lähdekoodin analysointi toteutetaan avaamalla kohdesivusto selaimessa (https://hamk.fi) ja tarkastelemalla sen HTML-rakennetta joko “Näytä sivun lähdekoodi” -toiminnolla tai selaimen kehitystyökaluilla. @zotero-item-52

Yleisin sisällönhallintajärjestelmä on Wordpress, joten lähdekoodista etsimme ensin sille tyypillisiä rakenteita, kuten viittauksia `wp-content`- ja `wp-includes`-hakemistoihin, jotka näkyvät esimerkiksi linkkeinä CSS- ja JavaScript-tiedostoihin. Lisäksi tarkastelemme, sisältääkö koodi meta-tagin kuten `<meta name="generator" content="WordPress">`, joka suoraan kertoo käytetystä julkaisujärjestelmästä. @zotero-item-51

Käytännössä kun lähdekoodia selaa, niin sieltä löytyy monia eri vihjeitä, jotka vihjaavat Wordpressin olemassaoloon.

```html
Rivi 66: <meta property="og:image" content="https://www.hamk.fi/wp-content/uploads/2023/11/HAMK_2023_CarlBergman_4G4A7614web.jpg" />
Rivi 316: <link rel='stylesheet' id='wp-components-css' href='https://www.hamk.fi/wp-includes/css/dist/components/style.min.css?ver=6.9.4' type='text/css' media='all' />
Rivi 367: <meta name="generator" content="WordPress 6.9.4" />
```
*Ohjelmakoodi 1.* Havainnollistaa WordPress-julkaisujärjestelmään viittaavista rakenteista HTML-lähdekoodissa.

Lähdekoodianalyysin lisäksi hyödynnetään selaimen kehitystyökaluja verkkoliikenteen tarkasteluun. Network-välilehden kautta voidaan analysoida sivun lataamia resursseja ja havaita, mistä lähteistä sisältöä haetaan. Tarkastelun perusteella havaitaan, että sivusto hyödyntää `wp-content`-hakemistoa resurssien lataamiseen, mikä tukee oletusta WordPress-pohjaisesta toteutuksesta. @zotero-item-53

![Wordpress network tab][3]

*Kuva 3.* Paljastaa, että sivut hakevat tietoa aiemmin mainitusta "wp-content" nimisestä sijainnista, joka viittaa Wordpress-järjestelmään. 

Näiden havaintojen perusteella voidaan päätellä, että kohdesivusto on toteutettu WordPress-sisällönhallintajärjestelmällä, ja käytössä oleva versio on 6.9.4. Tämä tieto ohjaa tutkimuksen seuraavia vaiheita, erityisesti tiedonkeruumenetelmien valintaa.

### 5.1.3 Kohdesivuston teknologian hyödyntäminen

Kun kohdesivuston toteutusteknologiaksi on tunnistettu WordPress, voidaan tiedonkeruussa hyödyntää sen tarjoamia rajapintoja perinteisen HTML-pohjaisen web scrapingin sijaan. WordPress sisältää REST API -rajapinnan, jonka avulla sivuston sisältöä voidaan hakea ohjelmallisesti rakenteisessa muodossa. Tämä mahdollistaa luotettavamman tavan kerätä dokumentaatiota verrattuna pelkkään HTML-rakenteen parsimiseen. @zotero-item-54

Tässä tutkimuksessa hyödynnetään erityisesti WordPressin Pages-päätepistettä, jonka kautta voidaan hakea sivuston sivusisältö JSON-muodossa. Pages-päätepiste palauttaa kullekin sivulle tiedot, kuten otsikon, sisällön, tunnisteen (ID), julkaisutilan sekä mahdolliset viittaukset yläsivuihin (parent). Näiden tietojen avulla voidaan muodostaa kokonaiskuva sivuston rakenteesta ja sisällöstä ilman, että HTML-koodia tarvitsee erikseen jäsentää. @zotero-item-55

Kohdesivuston osalta varmistetaan käytännössä, että kyseinen rajapinta on käytettävissä. Tämä voidaan todeta tekemällä HTTP-pyyntö osoitteeseen https://www.hamk.fi/wp-json/wp/v2/pages, joka palauttaa sivuston sivuja JSON-muodossa. Vastauksen perusteella voidaan todeta, että HAMK:n sivusto tukee WordPressin REST API -rajapintaa, mikä mahdollistaa sen hyödyntämisen tiedonkeruussa.

![Wordpress rajapinta][4]

*Kuva 4.* Paljastaa, että https://www.hamk.fi sallii Wordpress REST API -rajapinnan käytön.

Tiedonkeruu toteutetaan siten, että Pages-päätepisteestä haetaan kaikki saatavilla olevat sivut. Koska WordPress-sivut voivat muodostaa hierarkkisen rakenteen, aineisto käsitellään rekursiivisesti siten, että myös alasivut ja niiden suhteet otetaan huomioon. Näin voidaan säilyttää alkuperäinen sivurakenne ja siirtää se edelleen Markdown-muotoiseen dokumentaatioon. @zotero-item-55

### 5.1.4 Työkalujen valinta

Työkalut valitaan työn tavoitteiden perusteella. Tavoitteena on rakentaa mahdollisimman automaattinen ja toistettava prosessi, jolla verkkosivujen sisältö haetaan, käsitellään ja muutetaan Markdown-muotoon. Samalla halutaan varmistaa, että kaikki sopii yhteen nykyisten kehityskäytäntöjen kanssa.

Tiedonkeruuseen valitaan TypeScript. Se tuo mukanaan staattisen tyypityksen, mikä tekee koodista selkeämpää ja helpompaa ylläpitää verrattuna tavalliseen JavaScriptiin. TypeScript sopii hyvin myös HTTP-pyyntöjen tekemiseen sekä JSON-datan käsittelyyn - molemmat ovat oleellisia, kun haetaan sisältöä WordPressin REST API:sta @zotero-item-56. Skriptit ajetaan Node.js-ympäristössä, joten ne voi käynnistää suoraan komentoriviltä. @zotero-item-57

HTML:n muuntamiseen Markdowniksi käytetään valmiita kirjastoja ja työkaluja, jotka osaavat käsitellä HTML-rakennetta ja tuottaa siitä toimivaa Markdown-syntaksia. Näiden avulla suurin osa muunnosprosessista automatisoituu, vaikka joissain tapauksissa sisältö vaatii vielä pientä manuaalista viilausta lopputuloksen viimeistelemiseksi.

Dokumentaation versionhallintaan otetaan käyttöön Git. Sen avulla muutoksia voi seurata, eri versioita hallita ja työtä jatkaa myöhemmin ilman ongelmia. Valmis dokumentaatio tallennetaan GitHub-repositorioon, jossa sitä on helppo jakaa, tarkastella ja kehittää yhdessä muiden kanssa.

Itse dokumentaation kirjoittamiseen ja lukemiseen käytetään Visual Studio Codea. Se tarjoaa hyvän tuen Markdownille, live-esikatselun sekä erilaisia laajennuksia, jotka helpottavat työskentelyä. @zotero-item-40

### 5.1.5 Tietojen kerääminen verkkosivuilta

Tietojen kerääminen toteutetaan hyödyntämällä WordPressin REST API -rajapintaa ohjelmallisesti TypeScriptin avulla. Toteutuksessa rakennetaan aliohjelma, joka muodostaa HTTP-pyynnön Pages-päätepisteeseen (`/wp-json/wp/v2/pages`) ja hakee sivujen sisällön JSON-muodossa. Pyyntöön liitetään parametreja, kuten sivunumero (page) ja haettavien tulosten määrä (per_page), joiden avulla voidaan hallita hakuprosessia ja käsitellä suuria tietomääriä vaiheittain. @zotero-item-55

```
https://www.hamk.fi/wp-json/wp/v2/Pages?page=1&per_page=10
```

*Ohjelmakoodi 2.* Havainnollistaa hakuprosessin yhtenä osoitteena.

Keräysprosessi on toteutettu sivutettuna (pagination), mikä tarkoittaa, että sisältö haetaan useassa osassa yksittäisten pyyntöjen sijaan. Jokaisen pyynnön jälkeen tarkastellaan vastausotsakkeita (`X-WP-Total` ja `X-WP-TotalPages`), joiden avulla saadaan tieto kokonaissivumäärästä sekä siitä, kuinka monta sivua on vielä käsittelemättä @zotero-item-58. Tämän perusteella ohjelma jatkaa pyyntöjen tekemistä, kunnes kaikki sivut on haettu.

Tiedonkeruussa huomioidaan myös duplikaattien välttäminen tallentamalla jo käsitellyt sivut tietorakenteeseen, jossa ne yksilöidään esimerkiksi URL-osoitteen perusteella. Lisäksi pyyntöjen väliin lisätään viive, jotta palvelimen kuormitus pysyy kohtuullisena.

```
hae sivu (page = 1)
toista niin kauan kuin sivuja on jäljellä:
    tallenna uudet sivut (vältä duplikaatit)
    siirry seuraavaan sivuun
    odota hetki (rate limiting)
palauta kaikki sivut
```

*Ohjelmakoodi 3.* Tiedonkeruuprosessin peruslogiikka pseudokoodina.

### 5.1.6 HTML-sisällön jäsentäminen ja datan parsiminen

Kerätyn aineiston jatkokäsittelyssä keskitytään HTML-sisällön jäsentämiseen ja olennaisen datan erotteluun. WordPressin REST API:n kautta haettu sisältö sisältää sivujen varsinaisen sisällön HTML-muodossa, tyypillisesti `content.rendered`-kentässä (@zotero-item-55). Tämän ansiosta HTML-koodiin päästään suoraan käsiksi ilman erillistä sivun lataamista selaimen kautta, mikä helpottaa tiedon käsittelyä ja mahdollistaa täysin ohjelmallisen lähestymistavan.

```
syöte = page.content.rendered
```

*Ohjelmakoodi 4.* Luo "syöte" nimisen muuttujan, jonka arvoksi asetetaan sivun HTML-rakenne.

Jokaisen haetun sivun HTML-sisältö käydään systemaattisesti läpi analysoimalla sen rakenne. Tavoitteena on tunnistaa ja poimia dokumentaation kannalta oleelliset elementit, kuten otsikot, kappaleet, linkit ja kuvat. Jäsentäminen toteutetaan ohjelmallisesti siten, että HTML-koodista tunnistetaan eri elementtejä vastaavat tagit, kuten otsikkotasot (`<h1>-<h6>`), kappaleet (`<p>`), hyperlinkit (`<a>`) sekä kuvat (`<img>`).

Näiden elementtien sisältö ja attribuutit, kuten linkkien URL-osoitteet tai kuvien lähdepolut, erotellaan jatkokäsittelyä varten. Prosessin tavoitteena on muuntaa HTML-muotoinen sisältö jäsennellyksi tietorakenteeksi, jota voidaan hyödyntää myöhemmässä vaiheessa Markdown-muotoon konvertoinnissa. Samalla pyritään säilyttämään alkuperäinen dokumenttirakenne mahdollisimman tarkasti.

Ensimmäisessä vaiheessa HTML jäsennetään DOM-puuksi, jonka jälkeen sisältöalue käsitellään yhtenä kokonaisuutena. Tässä tutkimuksessa oletetaan, että varsinainen sisältö sijaitsee juurielementissä, mutta rakenteen vaihtelun vuoksi käytetään lähestymistapaa, jossa koko DOM-puu toimii lähtöpisteenä.

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

*Ohjelmakoodi 5.* Havainnollistaa DOM-rakennetta koodimuodossa.

![DOM-tree][5]

*Kuva 5.* Havainnollistaa ylläolevaa HTML-koodia kuvana @zotero-item-59.

```
sisältöJuuri = jäsennäHTML(syöte)
```

*Ohjelmakoodi 6.* Havainnollistaa DOM-puun jäsentämistä

Seuraavaksi sisältöä siistitään poistamalla dokumentaation kannalta epäolennaiset elementit. Tällaisia ovat esimerkiksi navigaatioon ja visuaalisiin tehosteisiin liittyvät elementit, kuten breadcrumb-polut, SVG-grafiikka, kuvat sekä metatiedot. Tämän vaiheen tarkoituksena on vähentää kohinaa ja varmistaa, että lopullinen data sisältää vain dokumentaation kannalta relevantin sisällön.

```
poista sisältöJuuresta:
    breadcrumbit
    svg-elementit
    kuvat
    metatiedot
```

*Ohjelmakoodi 7.* Havainnollistaa epäollenaisten elementtien poistamista DOM-puusta. 

Tämän jälkeen DOM-puusta suodatetaan vain Markdown-muunnoksen kannalta olennaiset HTML-elementit, kuten otsikot, kappaleet, listat ja rivinvaihdot. Näin muodostetaan rajattu ja hallittu rakenne, joka voidaan muuntaa edelleen tekstipohjaiseen muotoon.

```
sallitutTagit = [otsikot, kappale, lista, li, rivinvaihto]
suodatetutSolmut = hae sisältöJuuresta vain sallitutTagit
```

*Ohjelmakoodi 8.* Avulla suodatetaan pois turhat tagit. 

Prosessin lopuksi jäljelle jääneet elementit serialisoidaan yhtenäiseksi HTML-rakenteeksi, joka toimii välivaiheena Markdown-muunnoksessa. Serialisointi säilyttää dokumentin rakenteen, mutta poistaa ylimääräiset elementit ja normalisoi sisällön käsittelyä varten.

```
tulos = ""
jokaiselle solmulle suodatetuissaSolmuissa:
    tulos += muunnaHTML(solmu)
palauta tulos
```

*Ohjelmakoodi 9.* Havainnollistaa tuloksen luomista suodatetuista solmuista. 

### 5.1.7 Sisällön muuntaminen Markdown-muotoon

Kun HTML-sisältö on jäsennetty ja suodatettu edellisessä vaiheessa, se muunnetaan Markdown-muotoon jatkokäyttöä varten. Muunnos toteutetaan ohjelmallisesti siten, että jokaisen sivun käsitelty HTML syötetään muunnostyökalulle, joka tuottaa vastaavan Markdown-esityksen. Tämä vaihe mahdollistaa dokumentaation siirtämisen tekstipohjaiseen ja helposti versionhallittavaan muotoon.

```
funktio muunnaMarkdowniksi(html):
    luo turndown-olio
    palauta turndown.muunna(html)

markdown = muunnaMarkdowniksi(tulos)
```

*Ohjelmakoodi 10.* Havainnollistaa tuloksen muuntamista markdown-muotoon.

Markdown-muunnos toteutetaan käyttämällä valmista kirjastoa, joka osaa muuntaa HTML-rakenteet vastaaviksi Markdown-rakenteiksi. Tässä työssä hyödynnetään Turndown-kirjastoa, joka on TypeScript-ympäristössä yleisesti käytetty työkalu HTML / Markdown -muunnokseen. Kirjasto käsittelee automaattisesti yleisimmät HTML-elementit, kuten otsikot, kappaleet, listat ja linkit, ja muuntaa ne Markdown-syntaksia vastaavaan muotoon. @zotero-item-47

```html
<h1>Turndown Demo</h1>

<p>This demonstrates <a href="https://github.com/mixmark-io/turndown">turndown</a> - an HTML to Markdown converter in JavaScript.</p>

<h2>Usage</h2>

<pre><code class="language-js">var turndownService = new TurndownService()
console.log(turndownService.turndown('&lt;h1&gt;Hello world&lt;/h1&gt;'))</code></pre>

<p>It aims to be <a href="http://commonmark.org/">CommonMark</a>
 compliant, and includes options to style the output. These options include:</p>

<ul>
  <li>headingStyle (setext or atx)</li>
</ul>
```

*Ohjelmakoodi 11.* Esimerkki muunnettavasta HTML-koodista.

```markdown
Turndown Demo
=============

This demonstrates [turndown](https://github.com/mixmark-io/turndown) - an HTML to Markdown converter in JavaScript.

Usage
-----

    var turndownService = new TurndownService()
    console.log(turndownService.turndown('<h1>Hello world</h1>'))

It aims to be [CommonMark](http://commonmark.org/) compliant, and includes options to style the output. These options include:

*   headingStyle (setext or atx)
```

*Ohjelmakoodi 12.* Havainnollistaa muunnettua koodia.

Muunnoksen etuna on se, että Markdown säilyttää dokumentin rakenteen kevyessä ja helposti luettavassa muodossa. Esimerkiksi HTML-otsikot muunnetaan Markdown-otsikoiksi (#, ##), kappaleet säilyvät tekstinä ja listat muuttuvat Markdown-listoiksi. Näin alkuperäinen sisältö pysyy ymmärrettävänä, mutta sen esitysmuoto yksinkertaistuu merkittävästi.

Lisäksi muunnosvaihe toimii eräänlaisena normalisointivaiheena, jossa eri sivuilta kerätty sisältö yhtenäistyy samaan formaattiin. Tämä helpottaa dokumentaation jatkokäsittelyä, versionhallintaa sekä julkaisemista eri alustoilla. Markdown-muotoinen sisältö voidaan esimerkiksi tallentaa suoraan GitHub-repositorioon tai muuntaa edelleen muihin formaatteihin, kuten HTML- tai PDF-muotoon.

Lopputuloksena saadaan Markdown-muotoinen dokumentaatio, joka voidaan tallentaa tiedostoiksi ja siirtää versionhallintaan. Tämä mahdollistaa dokumentaation jatkokäsittelyn, julkaisemisen sekä integroinnin muihin työkaluihin, kuten staattisiin sivustogeneraattoreihin tai dokumentaatioalustoihin.

### 5.1.8 Dokumentaation rakenteen muuntaminen tiedostorakenteeksi

Markdown-muotoon muunnettu sisältö tallennetaan lopuksi tiedostojärjestelmään siten, että se muodostaa loogisen ja navigoitavan dokumentaatiokokonaisuuden. Tässä vaiheessa yksittäiset Markdown-sisällöt yhdistetään tiedostorakenteeksi, joka vastaa mahdollisimman hyvin alkuperäisen verkkosivuston rakennetta.

Prosessi alkaa muodostamalla jokaiselle sivulle yksilöllinen tunniste (key), joka perustuu sivun URL-osoitteeseen. URL:n polkuosasta poistetaan alku- ja loppuviivat, jolloin saadaan tiedostonimiä vastaava rakenne. Mikäli polku on tyhjä, käytetään oletuksena nimeä _index_, mikä vastaa tyypillistä verkkosivujen etusivurakennetta.

```
jokaiselle sivulle:
    urlPolku = hae URL:n polkuosa
    key = poista alun ja lopun kauttaviivat
    jos key on tyhjä:
        key = "index"
```

*Ohjelmakoodi 13.* Havainnollistaa tiedostonimen luontia.

Seuraavaksi jokaisen sivun HTML muunnetaan Markdown-muotoon ja tallennetaan tietorakenteeseen, jossa avaimena toimii edellä muodostettu key. Tämä mahdollistaa sisällön käsittelyn ennen varsinaista tallennusta, esimerkiksi linkkien päivittämisen.

Yksi oleellinen vaihe on sisäisten linkkien päivittäminen. Koska alkuperäiset linkit viittaavat lähdesivustoon, ne muunnetaan osoittamaan uuteen kohteeseen (esimerkiksi GitHub Pages -ympäristöön). Tämä tehdään etsimällä Markdown-sisällöstä kaikki alkuperäiseen osoitteeseen viittaavat URL-osoitteet ja korvaamalla ne vastaavilla uusilla osoitteilla, mikäli kohdesivu löytyy kerätystä aineistosta.

```
jokaiselle (key, markdown):
    etsi kaikki linkit jotka viittaavat alkuperäiseen sivustoon
    jos linkin kohde löytyy kerätystä datasta:
        korvaa linkki uudella URL-osoitteella
    tallenna päivitetty markdown
```

*Ohjelmakoodi 14.* Havainnollistaa URL-osoitteiden muuntamista.

Lopuksi muodostetaan varsinainen tiedostorakenne ja kirjoitetaan Markdown-tiedostot levylle. Ennen tallennusta mahdollinen vanha hakemisto poistetaan, jotta vältetään vanhentuneen datan jääminen järjestelmään. Tiedostonimet normalisoidaan poistamalla mahdolliset erikoismerkit, ja tarvittavat hakemistot luodaan automaattisesti.

```
jos output-kansio on olemassa:
    poista kansio

jokaiselle (key, markdown):
    tiedostonimi = key + ".md"
    varmista että hakemisto on olemassa
    kirjoita tiedosto levylle
```

*Ohjelmakoodi 15.* Havainnollistaa kansioiden ja tiedostojen luomista.

Tämän vaiheen lopputuloksena syntyy selkeä tiedostopohjainen dokumentaatiorakenne, joka vastaa alkuperäisen sivuston loogista rakennetta. Rakennetta voidaan hyödyntää suoraan versionhallinnassa sekä julkaista esimerkiksi staattisena verkkosivustona.

### 5.1.9 Static site generatorin käyttöönotto (Docusaurus)

Kun dokumentaatio on muunnettu Markdown-muotoon ja tallennettu tiedostorakenteeksi, seuraava vaihe on sen julkaiseminen staattisena verkkosivustona. Tässä työssä tähän tarkoitukseen valitaan Docusaurus, joka on Node.js-ympäristössä toimiva staattisten sivustojen generaattori ja tukee Markdown-pohjaista dokumentaatiota suoraan. @zotero-item-60

Docusauruksen käyttöönotto perustuu siihen, että kaikki tuotettu Markdown-sisältö sijoitetaan projektin `docs`-hakemistoon. Koska aiemmassa vaiheessa muodostettu tiedostorakenne vastaa loogisesti dokumentaation rakennetta, se voidaan siirtää sellaisenaan tähän hakemistoon ilman merkittäviä muutoksia. Näin dokumentaation hierarkia säilyy ja Docusaurus pystyy automaattisesti muodostamaan navigaation tiedostorakenteen perusteella.

Kun tiedostot on siirretty, Docusaurus generoi automaattisesti staattisen sivuston Markdown-tiedostojen perusteella. Jokainen `.md`-tiedosto muunnetaan HTML-sivuksi, ja hakemistorakenne määrittää sivujen välisen navigaation. Lisäksi Docusaurus tarjoaa valmiita ominaisuuksia, kuten sivupalkit (sidebar), hakutoiminnallisuuden sekä versionhallinnan tuen.

Käyttöönoton yhteydessä havaittiin kuitenkin joitakin alkuperäisestä aineistosta peräisin olevia ongelmia. Osa URL-linkeistä oli rikkinäisiä tai viittasi virheellisiin kohteisiin, minkä vuoksi niitä jouduttiin korjaamaan manuaalisesti. Lisäksi englanninkielisillä sivuilla esiintyi linkkejä suomenkielisiin sivuihin, mikä heikentää dokumentaation johdonmukaisuutta ja käyttäjäkokemusta. Nämä virheet eivät syntyneet muunnosprosessissa, vaan olivat jo osa alkuperäistä verkkosivustoa.

Tämän vaiheen lopputuloksena syntyy toimiva dokumentaatiosivusto, jossa aiemmin kerätty ja muunnettu sisältö on esitettävissä selkeässä ja käyttäjäystävällisessä muodossa.

![Docusaurus][6]

*Kuva 6.* Havainnollistaa valmista Docusaurus-sivustoa.

### 5.1.9 Versionhallintaan siirtäminen (Git)

Kun dokumentaatio on muunnettu Markdown-muotoon ja järjestetty tiedostorakenteeksi, se siirretään versionhallintaan Gitin avulla. Versionhallinnan tarkoituksena on mahdollistaa muutosten seuranta, hallinta sekä dokumentaation kehittäminen hallitusti ajan kuluessa.

Ensimmäisessä vaiheessa projektille alustetaan Git-repositorio, jonka jälkeen kaikki tuotetut tiedostot lisätään versionhallintaan. Tämä sisältää sekä Markdown-dokumentaation että mahdolliset konfiguraatiotiedostot, kuten Docusauruksen asetukset.

```
alusta git-repositorio
lisää kaikki tiedostot (git add .)
tee ensimmäinen commit (git commit)
```

*Ohjelmakoodi 15.* Havainnollistaa Git-repositorion alustamista.

Tämän jälkeen projekti voidaan yhdistää etärepositorioon, kuten GitHubiin, mikä mahdollistaa dokumentaation jakamisen ja julkaisemisen verkossa. Etärepositorion avulla dokumentaatio voidaan myös integroida muihin työkaluihin, kuten jatkuvan integraation ja toimituksen (CI/CD) prosesseihin.

```
yhdistä etärepositorioon
lähetä tiedostot (git push)
```

*Ohjelmakoodi 15.* Havainnollistaa yhdistämistä etärepositorioon.

Versionhallinnan avulla dokumentaation muutokset tallentuvat selkeästi versiohistoriaan. Tämä mahdollistaa esimerkiksi aiempien versioiden tarkastelun, virheiden korjaamisen sekä muutosten vertailun eri versioiden välillä. Lisäksi Git tukee haarautumista (branching), mikä mahdollistaa uusien ominaisuuksien tai muutosten kehittämisen erillään pääversiosta. Tässä työssä Git toimii sekä teknisenä työkaluna että osana tutkimusmenetelmää, koska se heijastaa nykyaikaisia dokumentaatiokäytäntöjä ohjelmistokehityksessä.

### 5.1.10 Dokumentaation automatisoitu julkaisu (GitHub Actions)

Versionhallintaan siirtämisen jälkeen dokumentaation julkaisu automatisoidaan hyödyntämällä GitHub Actions -työnkulkuja. Automatisoinnin tavoitteena on poistaa manuaaliset vaiheet dokumentaation generoinnista ja julkaisemisesta sekä varmistaa, että sivusto päivittyy automaattisesti aina, kun lähdekoodiin tehdään muutoksia. @zotero-item-61

Työnkulku käynnistyy automaattisesti, kun repositorion `main`-haaraan tehdään päivityksiä tai kun määritettyihin hakemistoihin tulee muutoksia. Tämä mahdollistaa sen, että dokumentaation päivitysprosessi on sidottu suoraan versionhallintaan.

```yml
on:
  push:
    branches:
      - main 
    paths:
      - 'toteutus/**'
      - '.github/workflows/deploy.yml'
```

*Ohjelmakoodi 15.* Havainnollistaa workflown aktivoitumista.

Ensimmäisessä vaiheessa työnkulku hakee projektin lähdekoodin ja asettaa käyttöön tarvittavan Node.js-ympäristön. Tämän jälkeen suoritetaan scraper-työkalun riippuvuuksien asennus, käännös sekä varsinainen suoritus, jonka tuloksena syntyy ajantasainen Markdown-dokumentaatio.

```
hae repositorio
asenna node-ympäristö

asenna scraper-riippuvuudet
rakenna scraper
suorita scraper
```

*Ohjelmakoodi 16.* Havainnollistaa työnkulun ensimmäistä vaihetta.

Kun dokumentaatio on generoitu, se siirretään automaattisesti Docusaurus-projektin `docs`-hakemistoon. Tämä vaihe yhdistää datankeruun ja dokumentaation esityskerrokseen, mahdollistaen päivitysprosessin.

Seuraavaksi asennetaan Docusauruksen riippuvuudet ja rakennetaan staattinen sivusto. Rakennusvaiheessa Markdown-tiedostot muunnetaan HTML-sivuiksi, ja lopputuloksena syntyy valmis julkaistava sivusto.

Lopuksi rakennettu sivusto siirretään GitHub Pages -palveluun, jossa se julkaistaan automaattisesti. Tämä mahdollistaa dokumentaation jatkuvan saatavuuden verkossa ilman erillisiä julkaisutoimenpiteitä.

```yml
  deploy:
    needs: build
    runs-on: ubuntu-latest

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

*Ohjelmakoodi 16.* Havainnollistaa sivuston julkaisemista Github Pages -palveluun.

Automatisoitu työnkulku yhdistää koko prosessin yhdeksi jatkuvaksi putkeksi, jossa tiedonkeruu, muokkaus ja julkaisu tapahtuvat ilman manuaalista väliintuloa. Tämä vastaa nykyaikaisia DevOps-käytäntöjä ja tekee dokumentaation ylläpidosta tehokkaampaa.

# 6 Results
## 6.1 Markdown-muunnosprosessin arviointi ja kehityskohteiden tunnistaminen

Tutkimuksessa toteutettu prosessi osoittaa, että WordPress-pohjainen dokumentaatio voidaan muuntaa onnistuneesti Markdown-muotoon ja julkaista staattisena sivustona automatisoidun työkaluketjun avulla. Prosessi on kokonaisuudessaan toistettavissa ja skaalautuva, mikä tekee siitä soveltuvan myös laajempien dokumentaatiokokonaisuuksien käsittelyyn. Erityisesti web scrapingin, HTML-jäsentämisen ja Markdown-muunnoksen yhdistäminen osoittautui toimivaksi ratkaisuksi dokumentaation siirtämisessä uuteen ympäristöön.

Tutkimuksen lopuksi tuotettua Docusaurus-pohjaista dokumentaatiosivustoa verrataan alkuperäiseen WordPress-pohjaiseen sivustoon. Vertailun tavoitteena on arvioida, kuinka hyvin Markdown-pohjainen ja staattinen ratkaisu vastaa alkuperäistä toteutusta sekä millaisia etuja ja rajoitteita siihen liittyy.

Docusaurus-pohjaisen ratkaisun vahvuus on sen yksinkertaisuus ja hallittavuus. Markdown-muotoinen sisältö on helposti luettavaa ja muokattavaa, ja versionhallinnan avulla muutoksia voidaan seurata tarkasti. Lisäksi staattinen sivusto on suorituskykyinen ja turvallinen, koska se ei vaadi palvelinpuolen logiikkaa tai tietokantaa. Myös automaattinen julkaisu GitHub Actionsin avulla tekee päivitysprosessista tehokkaan ja toistettavan.

Toisaalta Docusaurus-ratkaisussa on myös rajoitteita. Dynaamiset ominaisuudet, kuten sisällön hallinta käyttöliittymän kautta, puuttuvat kokonaan. Kaikki muutokset vaativat tiedostojen muokkaamista ja versionhallinnan käyttöä, mikä voi olla haaste käyttäjille, joilla ei ole teknistä taustaa. Lisäksi alkuperäisen sivuston visuaaliset elementit ja monimutkaisemmat rakenteet eivät aina siirry täydellisesti Markdown-muotoon.

WordPress-pohjaisen sivuston vahvuutena puolestaan on sen käyttäjäystävällisyys ja monipuolisuus. Sisältöä voidaan muokata graafisen käyttöliittymän kautta ilman ohjelmointiosaamista, ja järjestelmä tukee laajasti erilaisia lisäosia sekä dynaamisia toiminnallisuuksia. Tämä tekee siitä joustavan ratkaisun erityisesti ei-teknisille käyttäjille.

WordPressin heikkoutena on kuitenkin monimutkaisuus ja ylläpidon haasteet. Versionhallinta ei ole sisäänrakennettu samalla tavalla kuin Git-pohjaisessa ratkaisussa, ja muutosten seuraaminen voi olla vaikeampaa. Lisäksi suorituskyky ja tietoturva voivat kärsiä, erityisesti jos käytössä on paljon lisäosia. Dokumentaation rakenteen hallinta voi myös olla vähemmän läpinäkyvää verrattuna tiedostopohjaiseen lähestymistapaan.

Vertailun perusteella voidaan todeta, että Docusaurus soveltuu hyvin tekniseen dokumentaatioon, jossa oleellisimmat asiat ovat versionhallinta ja automaatio. WordPress puolestaan soveltuu paremmin tilanteisiin, joissa tarvitaan helppokäyttöinen sisällönhallintajärjestelmä ja monipuolisia dynaamisia ominaisuuksia.

Prosessin aikana havaittiin, että alkuperäisessä aineistossa esiintyi virheitä, kuten rikkinäisiä linkkejä ja epäjohdonmukaisuuksia kieliversioiden välillä. Näiden tunnistaminen ja korjaaminen jäi osittain manuaaliseksi työksi, mikä heikentää prosessin tehokkuutta.

Kokonaisuutena prosessi toimii hyvin perustana dokumentaation modernisoinnille, mutta sen kehittäminen edelleen parantaisi lopputuloksen laatua, automaation tasoa sekä käytettävyyttä erityisesti laajemmissa ja monimutkaisemmissa dokumentaatiokokonaisuuksissa.

Linkki Markdown-versioon löytyy [tästä](https://kejjjjj.github.io/oppari/docs/).

# 7 Conclusions
# 8 Further research?