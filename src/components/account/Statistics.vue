        <template>
                    <div class="content">
                        <div class="flexContent">
                            <div class="infoUser">
                                <div class="nameProfile">
                                    <p>Статистика</p>
                                    <a @click="backTo">Назад</a>
                                </div>
                                <div class="result_statistics">
                                    <div style="overflow-x:auto;">
                                    <table>
                                        <thead>
                                        <tr>
                                            <td style="width: 10% !important"><p style="width: 5%">N</p></td>
                                            <td><p>Код спец</p></td>
                                            <td><p>Наименование специальности</p></td>
                                            <td><p>Очная форма обучение
                                                <tr>
                                                    <td><p>На базе школы
                                                        <tr>
                                                            <td><p>на грант
                                                                </p>
                                                                <tr>
                                                                    <td><p>каз</p>
                                                                    
                                                                    </td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                            </td>
                                                            <td><p>платн обуч</p>
                                                                <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                        </td>
                                                            <td><p>условно </p>
                                                                <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                        </td>
                                                            <td><p>иностранцы </p>
                                                                <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                        </td>
                                                        </tr>
                                                </td>
                                                    <td><p>На базе колледжа </p>
                                                        <tr>
                                                            <td><p>на грант
                                                                <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                            </td>
                                                            <td><p>платн обуч </p>
                                                                <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                            </td>
                                                            <td><p>условно </p>
                                                                <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                            </td>
                                                            <td><p>иностранцы </p>
                                                                <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                            </td>
                                                        </tr>
                                                    </td>
                                                </tr>
                                            </td>
                                            <td><p>Дистанционная форма обучение </p>
                                                <tr>
                                                    <td><p>На базе школы </p>
                                                        <tr>
                                                            <td><p>дистанционно</p>
                                                            <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr></td>
                                                            <td><p>иностранцы</p>
                                                            <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                            </td>
                                                        
                                                        </tr>
                                                    </td>
                                                    <td><p>На базе ВО </p>
                                                        <tr>
                                                            <td><p>дистанционно</p>
                                                            <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                            </td>
                                                            <td><p>иностранцы</p>
                                                            <tr>
                                                                    <td><p>каз</p></td>
                                                                    <td><p>рус</p></td>
                                                                </tr>
                                                            </td>
                                                        
                                                        </tr>
                                                    </td>
                                                </tr>
                                            </td>
                                            <td><p>2019</p></td>
                                        </tr>
                                        </thead>
                                
                                    </table>
                                    <table class="result_table">
                                        <center><tr>ПЕДАГОГИЧЕСКИЙ ФАКУЛЬТЕТ</tr></center>
                                        <div v-for="(item,index) in list['Педагогика']" :key="item">
                                        <tr><td>{{index}}</td><p style="margin-left: 10px">{{item}}</p>
                                            <td v-for="i in 24" :key="i"><td>{{i}}<td></td>
                                        </tr>
                                        </div>
                                        <center><tr>Профессионально-творчесий</tr></center>
                                        <div v-for="item in list['Профессионально-творческий']" :key="item">
                                        <tr><p>{{item}}</p></tr>
                                        </div>
                                        <center><tr>ПЕДАГОГИЧЕСКИЙ ФАКУЛЬТЕТ</tr></center>
                                        <div v-for="item in list['Педагогика']" :key="item">
                                        <tr><p>{{item}}</p></tr>
                                        </div>
                                        <center><tr>ПЕДАГОГИЧЕСКИЙ ФАКУЛЬТЕТ</tr></center>
                                        <div v-for="item in list['Педагогика']" :key="item">
                                        <tr><p>{{item}}</p></tr>
                                        </div>
                                    </table>
                                    </div>
                                    <bar-chart></bar-chart>
                                    <download-excel
                                        class   = "btn btn-default"
                                        :data   = "this.result"
                                        :fields = "json_fields"
                                        name    = "Zhubanov.xls">
                                        Загрузить в excel
                                    </download-excel>
                                    <div>
                                    {{}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </template>
        <style>
            table tr {
                border: none !important;
            }
            .result_table td {
                padding: 20px !important;
                margin-left: 5px;
            }
            table p {
                white-space: nowrap;
                    border-bottom: 2px solid #123368;
            }
          
        
            table tr td {
                text-align: center;
                padding: 5px;
                font-weight: bold;
            }
            table {
                border-collapse: collapse;
                    border-spacing: 0;
                    width: 100%;
                    border: 1px solid #ddd;
            }

        </style>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
        <script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>
        <script> 
                import Header from './Header.vue';
                import Datepicker from 'vuejs-datepicker';
                import { ru } from 'vuejs-datepicker/dist/locale';
                import { Bar,mixins } from 'vue-chartjs'
            //   import PhoneInput from './PhoneInput.vue';
            export default {
            
                components: {
                        'bar-chart': Bar
                },
                mixins: [Bar],
                props: ['chartData'],
                
            
                data() {
                    return {
                        chartdata: {
                            datacollection: {
                                labels: ['January', 'February',"Js"],
                                datasets: [
                                {
                                    label: 'Data One',
                                    backgroundColor: '#f87979',
                                    data: [40, 20,60],
                                    
                                }
                                ],

                            }
                            },
                            options: {
                            responsive: true,
                            maintainAspectRatio: false
                        },
        
                        loader: false,
                        result: [],
                        json_fields: {
                                'Наименование специальности': 'first_result.specialnost', 
                                'Дневная': {
                                    "каз": "first_result.freq",
                                    "рус": ""
                                }
                        },
                            list: {
                            'Актюбинская': ["не выбран", "Айтекебийский", "Алгинский", "Байганинский", "Иргизский", "Каргалинский", "Мартукский", "Мугалжарский", "Темирский", "Уилский", "Кобдинский", "Хромтауский", "Шалкарский", "г.Актобе"],
                            'Акмолинская': ["не выбран", "Аккольский", "Аршалынский", "Астраханский", "Атбасарский", "Буландынский", "Егиндыкольский", "Ерейментауский", "Есильский", "Жаксынский", "Жаркаинский", "Коргалжынский", "Сандыктауский", "Целиноградский", "Шортандынский", "г.Степногорск", "г.Кокшетау", "Щучинский", "Енбекшильдерский", "Зерендинский"],
                            'Алматинская':["не выбран", "Аксуский", "Алакольский", "Балхашский", "Енбекшиказахский", "Жамбылский", "Илийский", "Карасайский", "Каратальский", "Кербулакский", "Коксуский", "панфиловский", "Райымбекский", "Саркандский", "Талгарский", "Ескельдинский", "Уйгурский", "г.Капчагай", "г.Талдыкорган", "г.Текели"],
                            'Атырауская': ["не выбран", "г.Атырау", "Жылыойский", "Исатайский", "Индерский", "Кзылкогинский", "Курмангазинский", "Макатский", "Махамбетский"],
                            'Восточно-Казахстанская':["не выбран", "Абайский", "Аягузский", "Бескарагайский", "Бородулихинский", "Глубоковский", "Жарминский", "Зайсанский", "Зыряновский", "Катон-Карагайский", "Кокпектинский", "Курчумский", "Тарбагатайский", "Уланский", "Урджарский", "Шемонаихинский", "г.Курчатов", "г.Риддер", "г.Семипалатинск", "г.Усть-Каменогорск"],
                            'Алматы':["не выбран", "Алмалинский", "Ауэзовский", "Бостандыкский", "Жетысуский", "Медеуский", "Турксибский", "городской", "республиканский", "военные", "Алатауский"],
                            'Астана':["не выбран", "Алматы", "Сары-Арка", "городские", "военные"],
                            
                            'Филологический': [ "5B011700 Казахский язык и литература", "5B012100 Казахский язык и литература в школах с неказахским языком обучения", "5B011800 Русский язык и литература", "5B012200 Русский язык и литература в школах с нерусским языком обучения", "5B020500 Филология"],
                            "Исторический":  [ "5B011600 География", "5B011400 История", "5B090200 Туризм", "5B020300 История", "5B050500 Регионоведение", "5B012900 География-история", "5B013000 История-Религиоведение"],
                            "Педагогика" :  [ "5B010300 педагогика и психология", "5B010100 дошкольное обучение и воспитание", "5B010500 дефектология", "5B010200 педагогика и методика начального обучения", "5B012300 Социальная педагогика и самопознание", "5B050300 психология"],
                            "Иностранных языков": [ "5B011900 Иностранный язык: два иностранных языка", "5B021000 Иностранная филология", "5B020700 переводческое дело"],
                            "Общеуниверситетские":[""],
                            "Физико-математический": [ "5B010900 Математика", "5B011100 Информатика", "5B011000 Физика", "5B060400 Физика", "5B060200 Информатика", "5B070300 Информационные системы", "5B060100 Математика", "5B070400 Вычислительная техника и программное обеспечение", "5B070500 Математическое и компьютерное моделирование", "5B012600 Математика-физика"],
                            "Естествознания": [ "5B011300 Биология", "5B011200 Химия", "5B060700 Биология", "5B060800 Экология", "5B072000 Химическая технология неорганических веществ", "5B060600 Химия", "5B072100 Химическая технология органических веществ"], 
                            "Технический": [ "5B070900 Металлургия", "5B090100 Организация перевозок, движения и эксплуатация транспорта", "5B071300 Транспорт, транспортная техника и технологии", "5B070800 нефтегазовое дело", "5B070700 Горное дело", "5B072900 Строительство"], 
                            "Экономики и права":[ "5B011500 Основы права и экономики", "5B030100 Юриспруденция", "5B051000 Государственное и местное управление", "5B051100 Маркетинг", "5B050600 Экономика", "5B050700 Менеджмент", "5B050800 Учет и аудит", "5B050900 Финансы", "5B051300 Мировая экономика"], 
                            "Профессионально-творческий":[ "5B011500 Основы права и экономики", "5B030100 Юриспруденция", "5B051000 Государственное и местное управление", "5B051100 Маркетинг", "5B050600 Экономика", "5B050700 Менеджмент", "5B050800 Учет и аудит", "5B050900 Финансы", "5B051300 Мировая экономика"],
                            "Выберите область": ["Выберите район"]
                        },
                    }
                },
                mounted () {
                    
                    this.renderChart({
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'
                    
                    ],
                    defaultFontColor :'red',
                    defaultFontSize: 16,
                    datasets: [
                        {
                        label: 'Data One',
                        labelColor: "red",
                        backgroundColor: '#f87979',
                        data: [5, 3, 2, 1, 5, 6, 7],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                        }
                    ]
                    }, {responsive: true, maintainAspectRatio: false})
                },
                beforeMount(){
                this.loader = true;
                this.$http.post('/insert_data/statistics', {},
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer '+localStorage.getItem("access_token")
                            }
                        }
                    )
                    .then(res => {
                        console.log(res.data);    
                        function groupBy(collection, property) {
                            var i = 0, val, index,
                                values = [], result = [];
                            for (; i < collection.length; i++) {
                                val = collection[i][property];
                                index = values.indexOf(val);
                                if (index > -1)
                                    result[index].push(collection[i]);
                                else {
                                    values.push(val);
                                    result.push([collection[i]]);
                                }
                            }
                            return result;
                        }
                        var obj = groupBy(res.data, "faculty");
                        
                        for(i=0; i<3; i++){
                            console.log(groupBy(obj[i], "forma_obuchenie"));
                        }
                    
                     
                    })
                    .catch(error => {   
                        this.register.info = error.response.data.error;
                        console.log('Ошибка ' + error.response.data.error);
                    });
                }
            }
        
        </script>