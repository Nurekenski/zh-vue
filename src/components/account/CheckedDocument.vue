    <!-- template -->
    <template>
            <div class="content">
                <div class="flexContent">
                    <div class="infoUser">
                        <div class="nameProfile">
                            <p>Проверенные данные</p>
                        </div>
                     <div class="title">
                        <h4>Персональные даные</h4>
                        <div v-on:click="table_first=!table_first">
                            <img v-show="table_first" src="../../assets/images/up-arrow.png" >
                            <img  src="../../assets/images/down-arrow.png" v-show="!table_first" >
                        </div>
                    </div>
                    <center>
                         <div v-if="this.loading==true" class="loader_align_self">
                                <div class="loaders"><img src="../../assets/images/26.gif"></div>
                        </div>
                    </center>
                    <!-- v-show="table_first" -->
                    <table >

                        <tr>
                            <td>И.Ф.О</td>
                            <td>Дата рождения</td>
                            <td>Пол</td>
                            <td>Гражданство</td>
                            <td>Национальность</td>
                            <td>Семейное положение</td>
                        </tr>
                        <tr  v-for="(item) in this.items" :key="item" @click="Select(item)" >
                            <td>{{item.name +"  "+ item.surname+"  "+item.third_name}}</td>
                            <td>{{item.date_birth}}</td><td>{{item.gender}}</td>
                            <td>{{item.citizenship}}</td>
                            <td>{{item.nationality}}</td>
                            <td>{{item.family_position}}</td>
                        </tr>
                    </table>
                    
                    <div class="title">
                        <h4>Данные о документе удостверяющем личность</h4>
                        <div v-on:click="table_second=!table_second">
                            <img v-show="table_second" src="../../assets/images/up-arrow.png" >
                            <img  src="../../assets/images/down-arrow.png" v-show="!table_second" >
                        </div>
                    </div>
                    <table v-show="table_second">
                        <tr>
                            <td>Документ удостверяющий личность</td>
                            <td>ИИН</td>
                            <td>Номер удостверяющий личности</td>
                            <td>Кем выдан</td>
                            <td>Когда выдан</td>
                            <td>Срок действия документа</td>
                        </tr>
                        <tr  v-for="(item, index) in this.items">
                            <td>{{item.document_type}}</td>
                            <td>{{item.iin}}</td>
                            <td>{{item.nomer}}</td>
                            <td>{{item.kem_vidan}}</td>
                            <td>{{item.kogda_vidan}}</td>
                            <td>{{item.srok_deistvie}}</td>
                        </tr>
                    </table>
                    

                    <div class="title">
                        <h4>Адрес и контактные данные</h4>
                        <div v-on:click="table_third=!table_third">
                            <img v-show="table_third" src="../../assets/images/up-arrow.png" >
                            <img  src="../../assets/images/down-arrow.png" v-show="!table_third" >
                        </div>
                    </div>
                    <table v-show="table_third">
                        <tr>
                            <td>Страна</td>
                            <td>Адрес проживание</td>
                            <td>Адрес прописки</td>
                            <td>Телефон</td>
                          
                        </tr>
                        <tr  v-for="(item, index) in this.items">
                            <td>{{item.strana}}</td>
                            <td>{{item.adres_projivanie}}</td>
                            <td>{{item.contact_number}}</td>
                        
                        </tr>
                    </table>
                    <div class="title">
                        <h4>Образование</h4>
                        <div v-on:click="table_fourth=!table_fourth">
                            <img v-show="table_fourth" src="../../assets/images/up-arrow.png" >
                            <img  src="../../assets/images/down-arrow.png" v-show="!table_fourth" >
                        </div>
                    </div>
                    <table v-show="table_fourth">
                        <tr>
                            <td>Тип учебного заведения</td>
                            <td>Область месторасположения учебного заведения</td>
                            <td>Район месторасположения учебного заведения</td>
                            <td>Наименование учебного заведения</td>
                            <td>Тип документа</td>
                            <td>Дата выдачи</td>
                            <td>Серия документа</td>
                            <td>Номер документа</td>
                            <td>Условно зачисленный</td>
                          
                        </tr>
                        <tr  v-for="(item, index) in this.items">
                            <td>{{item.type_zavedenie}}</td>
                            <td>{{item.oblast_zavedenie}}</td>
                            <td>{{item.raion_zavedenie}}</td>
                            <td>{{item.name_zavedenie}}</td>
                            <td>{{item.type_obrazovanie}}</td>
                            <td>{{item.date_vidachi_obr}}</td>
                            <td>{{item.seria_document}}</td>
                            <td>{{item.nomer_document}}</td>
                            <!-- <td>{{item.uslovno_zachislen}}</td> -->
                            <td>{{item.zagruzit_obr}}</td>
                        
                        </tr>
                    </table>

                    <div class="title">
                        <h4>Свидетельство о гранте</h4>
                        <div v-on:click="table_fifth=!table_fifth">
                            <img v-show="table_fifth" src="../../assets/images/up-arrow.png" >
                            <img  src="../../assets/images/down-arrow.png" v-show="!table_fifth" >
                        </div>
                    </div>
                    <table v-show="table_fifth">
                        <tr>
                            <td>Номер свидетельства</td>
                            <td>Свидетельство</td>
                          
                        </tr>
                        <tr  v-for="(item, index) in this.items">
                            <td>{{item.nomer_svidetelstva}}</td>
                            <td>{{item.zagruzit_svidetelstva}}</td>
                           
                        </tr>
                    </table>
                    
                    <div class="title">
                        <h4>Квоты</h4>
                        <div v-on:click="table_sixth=!table_sixth">
                            <img v-show="table_sixth" src="../../assets/images/up-arrow.png" >
                            <img  src="../../assets/images/down-arrow.png" v-show="!table_sixth" >
                        </div>
                    </div>
                    <table v-show="table_sixth">
                        <tr>
                            <td>Серпин</td>
                            <td>Дети сироты</td>
                            <td>Инвалид 1-й группа</td>
                            <td>Инвалид 2-й группа</td>
                            <td>Инвалид с детства</td>
                            <td>Квота для лиц приравненных по льготам и
                             гарантиям к участникам и инвалидам ВОВ</td>
                            <td>Сельская квота</td>
                            <td>Квота для лиц казахской национальностей,не являющихся гражданами РК</td>
                        </tr>
                        <tr  v-for="(item, index) in this.items">
                            <td>{{item.serpin}}</td>
                            <td>{{item.deti_siroti}}</td>
                            <td>{{item.invalid_pervi}}</td>
                            <td>{{item.invalid_vtoroi}}</td>
                            <td>{{item.invalid_sdetstva}}</td>
                            <td>{{item.kvota_invalidam}}</td>
                            <td>{{item.selskaya_kvota}}</td>
                            <td>{{item.kvota_negrajdan}}</td>
                           
                        </tr>
                    </table>

                    
                    <div class="title">
                        <h4>Награды</h4>
                        <div v-on:click="table_seventh=!table_seventh">
                            <img v-show="table_seventh" src="../../assets/images/up-arrow.png" >
                            <img  src="../../assets/images/down-arrow.png" v-show="!table_seventh" >
                        </div>
                    </div>
                    <table v-show="table_seventh">
                        <tr>
                            <td>победитель международной олимпиады</td>
                            <td>победитель республиканской олимпиады</td>
                            <td>знак "Алтын белгi"</td>
                            <td>аттестат особого образца</td>
                            <td>победитель международного научного конкурса</td>
                            <td>победитель республиканского научного конкурса</td>
                            <td>Победитель международного спортивного соревнования и победитель республиканских спортивных соревнова</td>
                            <td>победитель городского научного конкурса</td>
                            <td>победитель городской олимпиады</td>
                            <td>победитель областного научного конкурса</td>
                            <td>победитель областной олимпиады</td>
                            <td>Побидитель международной выставки</td>
                        </tr>
                        <tr  v-for="(item, index) in this.items">
                            <td>{{item.pob_mej_olimp}}</td>
                            <td>{{item.pob_resp_olimp}}</td>
                            <td>{{item.znak_altin}}</td>
                            <td>{{item.atestat_osobo}}</td>
                            <td>{{item.pob_mej_nau}}</td>
                            <td>{{item.pob_resp_nau}}</td>
                            <td>{{item.pob_mej_sport}}</td>
                            <td>{{item.pob_gorod_nau}}</td>
                            <td>{{item.pob_gorod_olimp}}</td>
                            <td>{{item.pob_obl_nau_konkurs}}</td>
                            <td>{{item.pob_obl_olimp}}</td>
                            <td>{{item.pob_mej_vistavki}}</td>
                        </tr>
                    </table>


                    
                    <div class="title">
                        <h4>Специальности</h4>
                        <div v-on:click="table_eighth=!table_eighth">
                            <img v-show="table_eighth" src="../../assets/images/up-arrow.png" >
                            <img  src="../../assets/images/down-arrow.png" v-show="!table_eighth" >
                        </div>
                    </div>
                    <table v-show="table_eighth">
                        <tr>
                            <td>Уровень обучения</td>
                            <td>Ступень обучения</td>
                            <td>Форма обучения</td>
                            <td>Языковое отделение</td>
                            <td>Факультет</td>
                            <td>Специальность</td>
                            <td>На гранд / Платное обучение</td>
                        </tr>
                        <tr  v-for="(item, index) in this.items">
                            <td>{{item.uroven_obuchenie}}</td>
                            <td>{{item.stupen_obuchenie}}</td>
                            <td>{{item.forma_obuchenie}}</td>
                            <td>{{item.language_otdelenie}}</td>
                            <td>{{item.faculty}}</td>
                            <td>{{item.specialnost}}</td>
                            <td>{{item.grand_platni}}</td>
                           
                        </tr>
                    </table>
                   
                    </div>
                    
                </div>   
            </div>                   
    </template>

    
    <script> 
        import Header from './Header.vue';
        import Datepicker from 'vuejs-datepicker';
        import { ru } from 'vuejs-datepicker/dist/locale';
    //   import PhoneInput from './PhoneInput.vue';
    export default {
    data() {
        return {
        loading: false,
        date: {
            value: '',
            ru: ru, 
            disabledDates: {
            to: new Date(1902, 1, 1),  
            from: new Date(2003, 0, 0),
            }
        },
        
          error: "",
                    success: "",
                    isShow_first: false,
                    isShow_second: false,
                    isShow_third: false,
                    isShow_fourth: false,
                    isShow_fifth: false,
                    isShow_sixth: false,
                    isShow_seventh: false,
                    isShow_eigth: false,
                    table_first: false,
                    table_second: false,
                    table_third: false,
                    table_fourth: false,
                    table_fifth: false,
                    table_sixth: false,
                    table_seventh: false,
                    table_eighth: false,
                    value_2: null,
                        empty: [],
                        options: ['КАЗАХСТАН','АВСТРАЛИЯ','АВСТРИЯ','АЗЕРБАЙДЖАН','АЛАНДСКИЕ ОСТРОВА','АЛБАНИЯ','АЛЖИР','АМЕРИКАНСКОЕ САМОА','АНГИЛЬЯ (БРИТ.)','АНГОЛА','АНДОРРА','АНТАРКТИДА','АНТИГУА И БАРБУДА','АРГЕНТИНА','АРМЕНИЯ','АРУБА','АФГАНИСТАН','БАГАМЫ','БАНГЛАДЕШ','БАРБАДОС','БАХРЕЙН','БЕЛАРУСЬ','БЕЛИЗ','БЕЛЬГИЯ','БЕНИН','БЕРМУДЫ','БОЛГАРИЯ','БОЛИВИЯ','БОНЭЙР, СИНТ-ЭСТАТИУС И САБА','БОСНИЯ И ГЕРЦЕГОВИНА','БОТСВАНА','БРАЗИЛИЯ','БРИТАНСКАЯ ТЕРРИТОРИЯ В ИНДИЙСКОМ ОКЕАНЕ','БРУНЕЙ-ДАРУССАЛАМ','БУРКИНА-ФАСО','БУРУНДИ','БУТАН','ВАНУАТУ','ВЕНГРИЯ','ВЕНЕСУЭЛА','ВИРГИНСКИЕ ОСТРОВА (БРИТ.)','ВИРГИНСКИЕ ОСТРОВА, США','ВЬЕТНАМ','ГАБОН','ГАИТИ','ГАЙАНА','ГАМБИЯ','ГАНА','ГВАДЕЛУПА (ФР.)','ГВАТЕМАЛА','ГВИНЕЯ','ГВИНЕЯ-БИСАУ','ГЕРМАНИЯ','ГЕРНСИ','ГИБРАЛТАР (БРИТ.)','ГОНДУРАС','ГОНКОНГ','ГРЕНАДА','ГРЕНЛАНДИЯ','ГРЕЦИЯ','ГРУЗИЯ','ГУАМ (США)','ДАНИЯ','ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА КОНГО','ДЖЕРСИ','ДЖИБУТИ','ДОМИНИКА','ДОМИНИКАНСКАЯ РЕСПУБЛИКА','ЕГИПЕТ','ЗАМБИЯ','ЗАПАДНАЯ САХАРА','ЗИМБАБВЕ','ИЗРАИЛЬ','ИНДИЯ','ИНДОНЕЗИЯ','ИОРДАНИЯ','ИРАК, РЕСПУБЛИКА ИРАК','ИРАН, ИСЛАМСКАЯ РЕСПУБЛИКА','ИРЛАНДИЯ','ИСЛАНДИЯ','ИСПАНИЯ','ИТАЛИЯ','ЙЕМЕН','КАБО-ВЕРДЕ','КАМБОДЖА','КАМЕРУН','КАНАДА','КАТАР','КЕНИЯ','КИПР','КИРИБАТИ','КИТАЙ','КОКОСОВЫЕ (КИЛИНГ) ОСТРОВА','КОЛУМБИЯ','КОМОРЫ','КОНГО','КОРЕЯ, НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА','КОСТА-РИКА','КОТ-Д’ИВУАР','КУБА','КУВЕЙТ','КЫРГЫЗСТАН','КЮРАСАО','ЛАОССАЯ НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА','Латвийская Республика','ЛЕСОТО','ЛИБЕРИЯ','ЛИВАН','ЛИВИЙСКАЯ АРАБСКАЯ ДЖАМАХИРИЯ','ЛИТВА','ЛИХТЕНШТЕЙН','ЛЮКСЕМБУРГ','МАВРИКИЙ','МАВРИТАНИЯ','МАДАГАСКАР','МАЙОТТА','МАКАО','МАКЕДОНИЯ','МАЛАВИ','МАЛАЙЗИЯ','МАЛИ','МАЛЫЕ ТИХООКЕАНСКИЕ ОТДАЛЕННЫЕ ОСТРОВА СОЕДИНЕННЫХ ШТАТОВ','МАЛЬДИВЫ','МАЛЬТА','МАРОККО','МАРТИНИКА (ФР.)','МАРШАЛЛОВЫ ОСТРОВА','МЕКСИКА','МИКРОНЕЗИЯ, ФЕДЕРАТИВНЫЕ ШТАТЫ','МОЗАМБИК','МОЛДОВА, РЕСПУБЛИКА','МОНАКО','МОНГОЛИЯ','МОНТСЕРРАТ(БРИТ.)','МЬЯНМА','НАМИБИЯ','НАУРУ','НЕПАЛ','НИГЕР','НИГЕРИЯ','НИДЕРЛАНДЫ','НИКАРАГУА','НИУЭ','НОВАЯ ЗЕЛАНДИЯ','НОВАЯ КАЛЕДОНИЯ (ФР.)','НОРВЕГИЯ','ОБЪЕДИНЕННЫЕ АРАБСКИЕ ЭМИРАТЫ','О-В МЕН','ОМАН','ОСТРОВ БУВЕ','ОСТРОВ НОРФОЛК','ОСТРОВ РОЖДЕСТВА','ОСТРОВ СВЯТОЙ ЕЛЕНЫ','ОСТРОВ ХЕРД И ОСТРОВА МАКДОНАЛЬД','ОСТРОВА КАЙМАН','ОСТРОВА КУКА','ОСТРОВА ТЕРКС И КАЙКОС','ПАКИСТАН','ПАЛАУ(США)','ПАЛЕСТИНСКАЯ ТЕРРИТОРИЯ, ОККУПИРОВАННАЯ','ПАНАМА','ПАПСКИЙ ПРЕСТОЛ (ГОСУДАРСТВО-ГОРОД ВАТИКАН)','ПАПУА-НОВАЯ ГВИНЕЯ','ПАРАГВАЙ','ПЕРУ','ПИТКЭРН (БРИТ.)','ПОЛЬША','ПОРТУГАЛИЯ','ПУЭРТО-РИКО','РЕСПУБЛИКА КОРЕЯ','РЕСПУБЛИКА ЛАТВИЯ','РЕЮНЬОН (ФР.)','РОССИЯ','РУАНДА','РУМЫНИЯ','САМОА','САН-МАРИНО','САН-ТОМЕ И ПРИНСИПИ','САУДОВСКАЯ АРАВИЯ','СВАЗИЛЕНД','СЕВЕРНЫЕ МАРИАНСКИЕ ОСТРОВА (США)','СЕЙШЕЛЫ','СЕН-БАРТЕЛЕМИ','СЕНЕГАЛ','СЕН-МАРТЕН','СЕН-МАРТЕН (нидерландская часть)','СЕНТ-ВИНСЕНТ И ГРЕНАДИНЫ','СЕНТ-КИТС И НЕВИС','СЕНТ-ЛЮСИЯ','СЕНТ-ПЬЕР И МИКЕЛОН','СЕРБИЯ','СИНГАПУР','СИРИЙСКАЯ АРАБСКАЯ РЕСПУБЛИКА','СЛОВАКИЯ','СЛОВЕНИЯ','СОЕДИНЕННОЕ КОРОЛЕВСТВО','СОЕДИНЕННЫЕ ШТАТЫ АМЕРИКИ','СОЛОМОНОВЫ ОСТРОВА','СОМАЛИ','СУДАН','СУДАН','СУРИНАМ','СЬЕРРА-ЛЕОНЕ','ТАДЖИКИСТАН','ТАИЛАНД','ТАЙВАНЬ (КИТАЙ)','ТАНЗАНИЯ ОБЪЕДИНЕННАЯ РЕСПУБЛИКА','ТЕРРИТОРИИ, НЕ УКАЗАННЫЕ В ДРУГИХ МЕСТАХ','ТИМОР-ЛЕСТЕ','ТОГО','ТОКЕЛАУ (ЮНИОН) (Н.ЗЕЛ.)','ТОНГА','ТРИНИДАД И ТОБАГО','ТУВАЛУ','ТУНИС','ТУРКМЕНИСТАН','ТУРЦИЯ','УГАНДА','УЗБЕКИСТАН','УКРАИНА','УОЛЛИС И ФУТУНА','УРУГВАЙ','ФАРЕРСКИЕ ОСТРОВА','ФИДЖИ','ФИЛИППИНЫ','ФИНЛЯНДИЯ','ФОЛКЛЕНДСКИЕ (МАЛЬВИНСКИЕ) ОСТРОВА','ФРАНЦИЯ','ФРАНЦУЗСКАЯ ГВИАНА','ФРАНЦУЗСКАЯ ПОЛИНЕЗИЯ','ФРАНЦУЗСКИЕ ЮЖНЫЕ ТЕРРИТОРИИ','ХОРВАТИЯ','ЦЕНТРАЛЬНО-АФРИКАНСКАЯ РЕСПУБЛИКА','ЧАД','ЧЕРНОГОРИЯ','ЧЕШСКАЯ РЕСПУБЛИКА','ЧИЛИ','ШВЕЙЦАРИЯ','ШВЕЦИЯ','ШПИЦБЕРГЕН И ЯН-МАЙЕН','ШРИ-ЛАНКА','ЭКВАДОР','ЭКВАТОРИАЛЬНАЯ ГВИНЕЯ','ЭЛЬ-САЛЬВАДОР','ЭРИТРЕЯ','ЭСТОНИЯ','ЭФИОПИЯ','ЮЖНАЯ АФРИКА','ЮЖНАЯ ДЖОРДЖИЯ И ЮЖНЫЕ САНДВИЧЕВЫ ОСТРОВА','ЮЖНЫЙ СУДАН','ЯМАЙКА','ЯПОНИЯ'],
                        nations: ['аpмяне','абхазцы','аварцы','австрийцы','адыгейцы','азербайджанцы','албанцы','алтайцы','американцы','англичане','арабы','армяне','ассирийцы','афганцы','балкарцы','башкиры','белорусы','болгары','болкары','буряты','венгры','вьетнамцы','гагаузы','голландцы','греки','грузины','даргинцы','датчане','др.национальности','дунгане','евреи','звены','ижорцы','ингуши','иранцы','испанцы','итальянцы','кабардинцы','Казах','калмыки','каракалпаки','карелы','киргизы','китайцы','коми','корейцы','крымчаки','кубинцы','кумыки','курды','латыши','лачки','лезгины','литовцы','манси','молдоване','монголы','мордва','мориец','нагайцы','нанайцы','нар.индии и пакест.','народности дагестана','немцы','ненец','осетины','персы','поляки','румыны','русские','сербы','словаки','таджики','татары','тувинцы','турки','туркмены','удегейцы','удмурты','узбеки','уйгуры','украинцы','финны','французы','хакас','халка-монголы','ханты','хорваты','цыгане','черкес','чехи','чеченцы','чуваши','чукчи','шорцы','эвенки','эскимосы','эстонцы','якуты','японцы'],
                        education: ["ВУЗ", "Гимназия", "колледж", "лицей", "Общ.образ.школа нац.", "Общеобразоват. школа", "Общеобразовательная казахская школа", "Общеобразовательная русская школа", "ПТУ на базе осн.ступ", "ПШ", "ССУЗ на базе основ.ступ.", "ССУЗ на базе стар.ступ.", "школа"],
                        country: ["Выбрать", "Акмолинская", "Актюбинская", "Алматинская", "Атырауская", "Восточно-Казахстанская", "Алматы", "Астана", "Другая страна", "Жамбылская", "Западно-Казахстанская", "Карагандинская", "Кустанайская", "Кызылординская", "Мангыcтауская", "Павлодарская", "Северо-Казахстанская", "Семипалатинская", "Южно-Казахстанская"],
                        list: {
                            'Актюбинская': ["Не выбран", "Айтекебийский", "Алгинский", "Байганинский", "Иргизский", "Каргалинский", "Мартукский", "Мугалжарский", "Темирский", "Уилский", "Кобдинский", "Хромтауский", "Шалкарский", "г.Актобе"],
                            'Акмолинская': ["Не выбран", "Аккольский", "Аршалынский", "Астраханский", "Атбасарский", "Буландынский", "Егиндыкольский", "Ерейментауский", "Есильский", "Жаксынский", "Жаркаинский", "Коргалжынский", "Сандыктауский", "Целиноградский", "Шортандынский", "г.Степногорск", "г.Кокшетау", "Щучинский", "Енбекшильдерский", "Зерендинский"],
                            'Алматинская':["Не выбран", "Аксуский", "Алакольский", "Балхашский", "Енбекшиказахский", "Жамбылский", "Илийский", "Карасайский", "Каратальский", "Кербулакский", "Коксуский", "Панфиловский", "Райымбекский", "Саркандский", "Талгарский", "Ескельдинский", "Уйгурский", "г.Капчагай", "г.Талдыкорган", "г.Текели"],
                            'Атырауская': ["Не выбран", "г.Атырау", "Жылыойский", "Исатайский", "Индерский", "Кзылкогинский", "Курмангазинский", "Макатский", "Махамбетский"],
                            'Восточно-Казахстанская':["Не выбран", "Абайский", "Аягузский", "Бескарагайский", "Бородулихинский", "Глубоковский", "Жарминский", "Зайсанский", "Зыряновский", "Катон-Карагайский", "Кокпектинский", "Курчумский", "Тарбагатайский", "Уланский", "Урджарский", "Шемонаихинский", "г.Курчатов", "г.Риддер", "г.Семипалатинск", "г.Усть-Каменогорск"],
                            'Алматы':["Не выбран", "Алмалинский", "Ауэзовский", "Бостандыкский", "Жетысуский", "Медеуский", "Турксибский", "городской", "республиканский", "военные", "Алатауский"],
                            'Астана':["Не выбран", "Алматы", "Сары-Арка", "городские", "военные"],
                            
                            'Филологический': ["Выбрать", "5B011700 Казахский язык и литература", "5B012100 Казахский язык и литература в школах с неказахским языком обучения", "5B011800 Русский язык и литература", "5B012200 Русский язык и литература в школах с нерусским языком обучения", "5B020500 Филология"],
                            "Исторический":  ["Выбрать", "5B011600 География", "5B011400 История", "5B090200 Туризм", "5B020300 История", "5B050500 Регионоведение", "5B012900 География-история", "5B013000 История-Религиоведение"],
                            "Педагогика" :  ["Выбрать", "5B010300 Педагогика и психология", "5B010100 Дошкольное обучение и воспитание", "5B010500 Дефектология", "5B010200 Педагогика и методика начального обучения", "5B012300 Социальная педагогика и самопознание", "5B050300 Психология"],
                            "Иностранных языков": ["Выбрать", "5B011900 Иностранный язык: два иностранных языка", "5B021000 Иностранная филология", "5B020700 Переводческое дело"],
                            "Общеуниверситетские":[""],
                            "Физико-математический": ["Выбрать", "5B010900 Математика", "5B011100 Информатика", "5B011000 Физика", "5B060400 Физика", "5B060200 Информатика", "5B070300 Информационные системы", "5B060100 Математика", "5B070400 Вычислительная техника и программное обеспечение", "5B070500 Математическое и компьютерное моделирование", "5B012600 Математика-физика"],
                            "Естествознания": ["Выбрать", "5B011300 Биология", "5B011200 Химия", "5B060700 Биология", "5B060800 Экология", "5B072000 Химическая технология неорганических веществ", "5B060600 Химия", "5B072100 Химическая технология органических веществ"], 
                            "Технический": ["Выбрать", "5B070900 Металлургия", "5B090100 Организация перевозок, движения и эксплуатация транспорта", "5B071300 Транспорт, транспортная техника и технологии", "5B070800 Нефтегазовое дело", "5B070700 Горное дело", "5B072900 Строительство"], 
                            "Экономики и права":["Выбрать", "5B011500 Основы права и экономики", "5B030100 Юриспруденция", "5B051000 Государственное и местное управление", "5B051100 Маркетинг", "5B050600 Экономика", "5B050700 Менеджмент", "5B050800 Учет и аудит", "5B050900 Финансы", "5B051300 Мировая экономика"], 
                            "Профессионально-творческий":["Выбрать", "5B011500 Основы права и экономики", "5B030100 Юриспруденция", "5B051000 Государственное и местное управление", "5B051100 Маркетинг", "5B050600 Экономика", "5B050700 Менеджмент", "5B050800 Учет и аудит", "5B050900 Финансы", "5B051300 Мировая экономика"]

                        },
                        type_postuplenie:  ["Выбрать", "Договор", "Государственный образовательный грант", "Грант Ректора", "Договор (грант Акима)", "образовательный грант Сары Алпысовны", "Гос.обр.заказ НИИ 'Ғылым Ордасы'", "Государственный образовательный грант (СОП)"],
                        forma_oplaty: ["по договору","государственные образовательные гранты"],
                        uroven_obuchenie:  ["Первое высшее образование", "Второе высшее образование", "Первое высшее сокращенное образование", "Научно-педагогическое направление", "Профильное направление"],
                        stupen_obuchenie: ["бакалавриат","магистратура","доктарантура(PhD)"],
                        forma_obuchenie: ["дневная","дистанционная","заочная"],
                        yazik_otdelenie: ["казахское","русское"],
                        faculty:  ["Выбрать", "Филологический", "Исторический", "Педагогика", "Иностранных языков", "Общеуниверситетские", "Физико-математический", "Естествознания", "Технический", "Экономики и права", "Профессионально-творческий"],
                        grand_platni : ["На гранд","Платное обучение"],
                        osnovanie_dlya_postuplenie: ["Не указано", "зачислен по Алтын белгi", "зачислен как призер олимпиад", "зачислен по квоте сельских школ", "зачислен по квоте диаспоры", "зачислен по квоте сиротам", "зачислен по квоте инвалидам", "зачислен как призер конкурсов и научных проектов", "зачислен по гранту акимата", "зачислен по гранту Ректора"],
                        //  "Не выбран", "Байзакский", "Жамбылский", "Жуалынский", "Кордайский", "Луговской", "Меркенский", "Мойынкумский", "Сарысуский", "Таласский", "Шуйский", "г.Тараз", "г.Шу"
                        //  "Не выбран", "Акжаикский", "Бурлинский", "Жангалинский", "Жанибекский", "Зеленовский", "Казталовский", "Каратобинский", "Сырымский", "Таскалинский", "Теректинский", "Букей урдинский", "Чингирлауский", "г.Уральск"
                        //  "Не выбран", "Абайский", "Актогайский", "Бухар-Жырауский", "Жанааркинский", "Каркаралинский", "Нуринский", "Осакаровский", "Улытауский", "Шетский", "г.Балхаш", "г.Жезказган", "г.Караганда", "г.Каражал", "г.Приозерск", "г.Сарань", "г.Сатпаев", "г.Темиртау", "г.Шахтинск", "военные"
                        zero: true,
                        first: false,
                        second: false,
                        third: false,
                        fourth: false,
                        fifth: false,
                        sixth: false,
                        seventh: false,
                        enable: false,
                        disable: true,
                    date: {
                        value: '',
                        ru: ru,
                        disabledDates: {
                        to: new Date(1902, 1, 1),  
                        from: new Date(2003, 0, 0),
                        },
                    },
                    register: {
                        login: "",
                        password: "",
                        surname  : "", 
                        name  : "", 
                        third_name  : "",  
                        date_birth  : "", 
                        gender  : "", 
                        citizenship  : "",  
                        nationality  : "", 
                        family_position  : "", 
                        document_type  : "",  
                        iin  : "", 
                        nomer  : "", 
                        kem_vidan  : "", 
                        kogda_vidan  : "", 
                        srok_deistvie  : "", 
                        zagruzit_udastak  : "",  
                        strana  : "", 
                        adres_projivanie  : "",  
                        adres_propiski  : "",  
                        contact_number  : "",  
                        contact_number_2: "",
                        type_zavedenie  : "",  
                        oblast_zavedenie  : '', 
                        raion_zavedenie  : "",  
                        name_zavedenie  : "",  
                        type_obrazovanie  : "", 
                        date_vidachi_obr  : "",
                        seria_document  : "",  
                        nomer_document  : "",  
                        uslovno_zachislen  : "", 
                        zagruzit_obr  : "",  
                        number_certificate  : "", 
                        seria_certificate  : "",  
                        date_certificate  : "",  
                        zagruzit_certificate  : "",  
                        nomer_svidetelstva  : "", 
                        zagruzit_svidetelstva  : "",  
                        serpin  : "", 
                        deti_siroti  : "", 
                        invalid_pervi  : "",  
                        invalid_vtoroi  : "",  
                        invalid_sdetstva  : "", 
                        kvota_invalidam  : "",  
                        selskaya_kvota  : "", 
                        kvota_negrajdan  : "",  
                        pob_mej_olimp  : "",  
                        pob_resp_olimp  : "",  
                        znak_altin  : "", 
                        atestat_osobo  : "",  
                        pob_mej_nau  : "",  
                        pob_resp_nau  : "",  
                        pob_mej_sport  : "",  
                        pob_gorod_nau  : "",  
                        pob_gorod_olimp  : "",  
                        pob_obl_nau_konkurs  : "", 
                        pob_obl_olimp  : "",  
                        pob_mej_vistavki  : "", 
                        uroven_obuchenie  : "",  
                        stupen_obuchenie  : "",  
                        forma_obuchenie  : "",  
                        language_otdelenie  : "",  
                        faculty  : '',  
                        specialnost  : "",  
                        who_registered  : "",  
                        data_about_who  : "",
                        grand_platni: ""  
                    },
                    inform : '',
        phone: {
            code: '',
            number: ''
        },
        info: null,
        checkHome: true,
        login: '',
        password: '',
        phoneFixPreload: false,
        isValid: false,
        loginValidate: {
            login: false,
        },
        validate: {
            phone: false,
            phoneFull: false,
            codeSms: false,
            phoneGet: false,
        },
        inform: '',
        items: {},


        phone: {
            code: '',
            number: ''
        },
        info: null,
        checkHome: true,
       
        phoneFixPreload: false,
        isValid: false,
        loginValidate: {
            login: false,
        },
        validate: {
            phone: false,
            phoneFull: false,
            codeSms: false,
            phoneGet: false,
        },
        inform: '',
        items: {}
        };
    },
    computed: {    
        loginValidateChange() {
        return {
            borderBottom: this.loginValidate.login ? '1px solid var(--color-primary-notific)' : '',
        };
        }
    },
    beforeMount(){
           this.loading = true;
            this.$http.post('/insert_data/get_data/', {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+localStorage.getItem("access_token")
                }
            }
            )
            .then(res => {
                for (var property in res.data) {
                    if (res.data.hasOwnProperty(property)) {
                    
                        if(res.data[property].proverenni =='1') {
                            this.items[property] = res.data[property];
                        }
                    }
                }
                    
                this.loading = false;
            
            })
            .catch(error => {   
                this.register.info = error.response.data.error;
                console.log('Ошибка ' + error.response.data.error);
            });
    },
    methods: {
        Select(item) {
         
            this.$router.push({ 
                path: 'edit', query: item 
            });
        },
        toLogin() { 
            this.isLogin = 'login';
        },
        onInput(e) {
        if (isValid) {
            this.isValid = isValid;
        }
        },
        loginPhoneChange(){
        this.loginValidate.login = false;
        this.$modal.hide('dialog');

        if (this.login[0] !== '+') {
            this.login = '+' + this.login;
        }

        if (!Number(this.login.slice(1))) {
            const first = Number(this.login.slice(1));
            if (first === 0) {
            return;
            }

            this.loginValidate.login = true;

            this.$modal.show('dialog', {
            text: 'Введите номер телефона!',
            buttons: [{ title: 'Закрыть' }],
            });
        }
        },
        confirmation(){
     

            // this.$http.post('/insert_data/get_data/', {},
            // {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTI4NTM0MTcsImlzcyI6ImFjY291bnQub3RhdS5vcmciLCJleHAiOjE1NTU0NDU0MTcsInVzZXJfaWQiOiI0IiwicGhvbmUiOiI3NzAxNzQxODcwNSIsInBhc3N3b3JkIjoiJDJ5JDEwJERveG9sSWw5OWdRVXBPZm1PNHk3RE9QMTFPV0UybFVDWjhDUkdnRHFhUU8wei5GRlYwZVIyIn0.XcVjgL7P0tMijnGgg5BWvXnbabZeCuCP4rm8v6GnY8w'
            //     }
            // }
            // )
            // .then(res => {
            //     console.log(res.data);
            // })
            // .catch(error => {   
            //     this.register.info = error.response.data.error;
            //     console.log('Ошибка ' + error.response.data.error);
            // });
        }
    },

    };
    </script>


    <style scoped lang="scss"> 

     .content {
            display: flex;
            justify-content: center;
        }
        .result_of_search {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 20px;
        }
        .title {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .title img {
            width: 18px;
            height: 18px;
            margin-left: 5px;
        }
        .data_person {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
        }
        .line {
            align-items: flex-start;
        }

        .btn-default {
           
            cursor: pointer;
            color: white;
            background-color: var(--main-project-color);
            width: 140px;
            padding: 20px;
            border-radius: 5px;
            align-self: flex-start;

        }
        table {
            padding: 20px;
            width: 100%;
        
        }
        table tr {
            
            border: 2px solid var(--main-project-color);
        }
        table td {
            padding: 8px;
            padding-left: 0;
   
        }
        .line-div {
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            padding-top: 0;
            align-items: flex-start;
        }
        .line {
            margin-left: 5px;
        }
        .content {
            width: 100%;
            background: var(--main-white-color);
            flex-wrap: wrap;

            .changeData {
                // margin-left: 20px;
                // margin-bottom: 20px;

                button {
                    width: 620px;
                    color: var(--main-white-color);
                    height: 35px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                    background: var(--main-project-color);
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 16px;

                    &:hover {
                        background: var(--main-hover-btn-color);
                        transition: 0.3s;
                    }
                }
            }
            .nameMenu {
                    width: 100%;
                    padding: 10px 20px;
                    border-bottom: 2px solid var(--main-border-color);

                    p {
                        font-weight: bold;
                    }
            }

        .flexInputs {
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            display: flex;
            justify-content: flex-start;

            .flexInputsLeft {
                width: 320px;
                margin-left: 20px;
                
                .formGroup {
                        display: flex;
                        flex-direction: column;
                        margin-bottom:10px;
                        width: 300px;   
    
                        input {
                            padding: 6px 7px;
                            border-radius: 5px;
                            outline: none;
                            border: 1px solid var(--main-input-border-color);
                        }
                    
                        select {
                            background: #fff;
                            border: 1px solid var(--main-input-border-color);
                            padding: 7px 7px;
                            border-radius: 5px;
                            outline: none;
                        }
                        label {
                            margin-bottom: 5px;
                            font-size: 14px;
                            font-weight: bold;
                        }
                }
            }

            .flexInputsRight {
                width: 320px;
                margin-right: 20px;
                
                .formGroup {
                        display: flex;
                        flex-direction: column;
                        margin-bottom:10px;
                        width: 300px;   
                        
                        input {
                            padding: 6px 7px;
                            border-radius: 5px;
                            outline: none;
                            border: 1px solid var(--main-input-border-color);
                        }
                        
                        label {
                            margin-bottom: 5px;
                            font-size: 14px;
                            font-weight: bold;
                        }
                }
            }
        }
        }

        // media request
        $bp-normal: 730px;
        $bp-small: 400px;
        
        @media only screen and (max-width: $bp-normal) {
                .content {
                    .flexInputs {
                        justify-content: center;
                        flex-wrap: wrap;

                        .flexInputsLeft {
                            width: 100%;
                            margin-left: 20px;
                            margin-right: 20px;
                        }

                        .flexInputsRight {
                            width: 100%;
                            margin-left: 20px;
                            margin-right: 20px;
                        }
                    }
                    .changeData {
                        button {
                            width: 300px;
                        }
                    }
                }
        }

        @media only screen and (max-width: $bp-small) {
                .content {
                    .flexInputs {
                        
                        .flexInputsLeft {
                            width: 100%;
                            margin-left: 20px;
                            margin-right: 20px;

                            .formGroup {
                                width: 100%;
                            }
                        }

                        .flexInputsRight {
                            width: 100%;
                            margin-left: 20px;
                            margin-right: 20px;
                            .formGroup {
                                width: 100%;
                            }
                        }
                    }
                    .changeData {
                        margin-right: 20px;
                        width: 100%;
                        
                        button {
                            width: 100%;
                        }
                    }
                }
        }
        table {
            padding: 20px;
        }
        tr {
            cursor: pointer;
            
        }
        tr:hover {
            background-color: #afe5ff;
        }
        .changeData {
            margin-bottom: 20px;
        }
        .changeData button {
            width: 620px;
            color: var(--main-white-color);
            height: 35px;
            border-radius: 5px;
            border: none;
            outline: none;
            background: var(--main-project-color);
            cursor: pointer;
            font-weight: bold;
            font-size: 16px;
        }
        .changeData button:hover {
            background: var(--main-hover-btn-color);
            transition: 0.3s;
        }
        form {
            width: unset;
            display: block;
            
        }
        .infoUser {
            width: 100%;
            background: white;
            /* margin-left: 20px; */
        }
        
        .nameProfile{
        width: 100%;
        padding: 10px 20px;
        border-bottom: 2px solid var(--main-border-color);
        }
        .nameProfile p {
            font-weight: bold;
        }
        .dataStudent {
            display: flex;
            justify-content: flex-start;
            /* margin: 20px; */
        }
        .content {
            width: 100%;
        }
            
        .flexContent {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 20px;

        }
        .sign_in {        
            border: none;
            border-radius: 40px;
            color: white !important;
            padding: 10px;
            background-color:  #3ab399;
            width: 100%;
            outline: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .first_block {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding:  20px;
        }
        .inputDate {
            width: 270px
        }
        .second_block {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding:  20px;
            border-top-style: dotted solid;
            border-top-color: blue;
        }
        .line {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: flex-end; 
        align-items: flex-start;
        padding-bottom: 10px;
        }

        .line input {
            min-width: 250px;

            margin-left: 0;
        }
        .line select {
            min-width: 270px;
                padding: 10px;
        }
        .right_side {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        .left_side {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-left: 80px;
        }
        .all {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            padding-top: 0 !important;
        }

    </style>