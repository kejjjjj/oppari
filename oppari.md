
[1]: https://github.com/kejjjjj/oppari/blob/main/dokumentaation_merkitys.png?raw=true
[2]: https://github.com/kejjjjj/oppari/blob/main/markdown_example.png?raw=true

# Abstrakti
tekstiä tänne
# Abstract
text here

# 1 Introduction

Digitaalisen dokumentaation merkitys on kasvanut työelämässä, jossa tiedon selkeä ja helposti ylläpidettävä esittäminen on tärkeää. Teknisessä viestinnässä ja ohjelmistokehityksessä tarvitaan ratkaisuja, jotka edesauttavat versionhallintaa ja yhteistyötä. Tästä näkökulmasta Markdown on noussut varteenotettavaksi vaihtoehdoksi perinteisille dokumentointimenetelmille, kuten tekstinkäsittelyohjelmille ja HTML-pohjaisille ratkaisuille. Kiinnostus aiheeseen pohjautuu tarpeeseen löytää yksinkertaisempi ja tehokkaampi tapa tuottaa ja ylläpitää dokumentaatiota, joka on helposti muokattavissa ja siirrettävissä eri ympäristöjen välillä.

Työn lähtökohtana on tarkastella Markdownin syntaksia sekä sen tarjoamia mahdollisuuksia dokumentaation tuottamisessa. Lisäksi työssä vertaillaan Markdownin etuja ja rajoituksia suhteessa muihin yleisesti käytettyihin dokumentaatiomenetelmiin. Lähtökohtana toimii myös käytännön tarve: olemassa olevan dokumentaation muuntaminen Markdown-muotoon, jotta sen soveltuvuutta voidaan arvioida todellisessa käyttötilanteessa. Tätä varten työssä tuotetaan esimerkkitoteutus kopioimalla HAMK:n tekstipohjaisia dokumentaatiosivuja ja muokkaamalla ne Markdown-muotoon hyödyntäen ajanmukaisia työkaluja, kuten versionhallintaa ja web scraping -menetelmiä.

Työelämäyhteys näkyy erityisesti siinä, että työn tulokset tarjoavat konkreettisia keinoja dokumentaation kehittämiseen organisaatotasolla. Dokumentaation tuottaminen on oleellinen osa monien asiantuntijatehtävien arkea, ja tehokkaammat työkalut voivat parantaa sekä työn laatua että tuottavuutta. Työ on suunnattu erityisesti HAMK:n henkilöstölle, mutta sen tuloksia voidaan soveltaa laajemminkin erilaisissa organisaatioissa, joissa dokumentaation hallinta on tärkeää. Vaikka työn lopputulos toimii ensisijaisesti luonnoksena ja esimerkkinä, se tarjoaa pohjan mahdolliselle Markdownin käyttöönotolle sekä auttaa arvioimaan siihen liittyviä vaatimuksia ja hyötyjä käytännön työelämässä.

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

Lisäksi monet Markdown-laajennukset tukevat automaattista linkkien tunnistamista, sisällysluetteloiden muodostamista sekä erilaisten lisäelementtien, kuten huomautuslaatikoiden käyttöä. Näiden ansiosta Markdownin käyttöä saa sovellettua entistä laajemmin dokumentaatiokokonaisuuksien tuottamiseen ja ylläpitoon. Laajennusten käyttö kuitenkin riippuu käytetystä työkalusta tai alustasta, mikä voi vaikuttaa dokumentaation yhteensopviuuteen eri ympäristöissä. @zotero-item-27

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

Onnistunut käyttöönotto edellyttää myös yhteisten käytäntöjen ja ohjeistusten luomista. Näihin kuuluvat esimerkiksi dokumentaation rakenne, nimeämiskäytännöt sekä kirjoitustyyli. Yhtenäiset toimintamallit parantavat dokumentaation laatua ja tekevät siitä helpommin ymmärrettävää kaikille käyttäjille. Lisäksi henkilöstön koulutus on tärkeää, jotta kaikki osaavat hyödyntää Markdownia ja siihen liittyviä työkaluja tehokkaasti. @zotero-item-50

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
# 6 Results
# 7 Conclusions
# 8 Further research?