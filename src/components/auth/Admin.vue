        <template>
            <div class="mainer">
                <div class="main">
                     <!-- @submit.prevent="confirmation"  -->
                    <!-- <form novalidate="true" class="form_data">
                         -->
                    <div class="form_data">
                        <div class="first-block">
                            <div class="first"><img src="../../assets/images/logo_arsu.png"></div>
                         
                         <div class="signPage" v-if="signPage==true">
                             <div v-if="this.loader==true">
                                <div class="loaders"><img src="../../assets/images/26.gif"></div>
                            </div>
                             <center>
                                <h4>Вход в личный кабинет</h4>
                             </center>                           
                            <p class="success">{{ this.register.success }}</p>
                            <p class="error">{{this.register.info}}</p>
                            <div class="line">
                                <!-- <img src="../../assets/images/mail.png"> -->
                                <input placeholder="ИИН"
                                 autocomplete="false"
                                 v-model.trim="register.login"
                                >
                            </div>
                            <div class="line">
                                <!-- <img src="../../assets/images/lock.png"> -->
                                <input placeholder="Пароль"
                                 v-model.trim="register.password"
                                 type="password"
                                >
                            </div>
                            <!-- <p class="text">Құпия сөз ұмыттыңыз ба?</p> -->
                            <button class="sign_in" @click="confirmationTeacher"><p>Войти</p></button>
                            <!-- <button class="sign_in" @click="forgotPasswordPage"><p>Забыли пароль?</p></button> -->
                         </div>
               
                        </div>
                     </div>

                    <div class="second-block">
                        <div class="second">
                            <center>
                                    <h1>Абитуриенттерді тіркеу</h1>
                                    <h4>Қ.Жұбанов атындағы Ақтөбе өңірлік мемлекеттік университеті</h4>
                            </center>
                        </div>   
                    </div>
                </div>
            </div>

        </template>


        <script>
        import Datepicker from 'vuejs-datepicker';
        import { ru } from 'vuejs-datepicker/dist/locale';
        export default {
        name: 'AccountPage' ,
            data() {
                return {
                        date: {
                        value: '',
                        ru: ru, 
                        disabledDates: {
                        to: new Date(1902, 1, 1),  
                        from: new Date(2003, 0, 0),
                        }
                    },
                    object: {
                        ru: 'Россия',
                        kaz: 'Қазақстан',
                        en: 'United States',
                    },
                    languages: {
                        ru: require('../../assets/images/ru.png'),
                        kaz: require('../../assets/images/kaz.png'),
                        en: require('../../assets/images/en.png'),
                    },
                    link: require('../../assets/images/kaz.png'),
                    register: {
                        login: '',
                        password: '',
                        phone: '',
                        info: '',
                        success: ''
                    },
                    signPage: true,
                    forgotPage: false,
                    loader: false
                    
                }
            },
            components: {
            },
            methods: {
                forgotPasswordPage() {
     
                    this.signPage = false,
                    this.forgotPage= true
                },
                backButton() {
                    this.signPage = true;
                    this.forgotPage = false
                },
                onChange:function(event){
                    this.link = this.languages[event.target.value];
                },
                confirmationTeacher() {
                     this.loader =true;
                      let obj = {
                            phone: this.register.login,
                            password: this.register.password
                        };

                        this.$http.post('/login', obj)
                        .then(res => {
                            
                            if(res.data.access_token!='') {
                                localStorage.setItem("access_token",res.data.access_token);
                                localStorage.setItem("phone_number", this.register.login);
                                this.$router.push('/user');
                                this.loader = false;
                            }

                            // localStorage.setItem("access_token",res.data.access_token);
                        })
                        .catch(error => {
                            if(error.response.data.error=="phone must not contain whitespace") {
                                    this.register.info = "логин не правильно";
                            }
                        });
                } 
            },
        }
        </script>
        <style>
                  .success  {
                    color: #3ab399 !important;
                  }
                  .signPage {
                      display: flex;
                      flex-direction: column !important;
                      justify-content: center;
                      align-items: center;
                  }
               
                   .form_data {
                       width: 100%;
                   }
                    .error {
                        font-size: 12px;
                        color: red;
                        font-weight: bold;
                    }
                    .main {
                        border-radius: 20;
                        background-color: white;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        
                    }
                    .first img {
                        position: absolute;
                        left: 0;
                        top: 0;
                        padding: 15px;
                  
                    }

                    .first-block {
                        display: flex;
                        font-size: 20px;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 50px;
                        justify-content: flex-start;
                    }
                    .first-block .text {
                        margin-bottom: 10px;
                    }
                    .first-block .first img {
                        width: 70px;
                        height: 60px;
                        margin-bottom: 20px;
                    }
                    .first-block h4{
                        color: #3ab399;
                        padding-bottom: 20px;
                    }
                    .first-block input {
                   
                        width: 200px;
                        border: 1px solid #e8e8e8;
                        border-radius: 3px;
                        padding: 12px !important;
                        margin-bottom: 20px;
                    }
                    .first-block button {
                        
                        border: none;
                        border-radius: 40px;
                        color: white;
                        padding: 10px;
                        background-color:  #3ab399;
                        width: 160px;
                       
                        outline: none;
                        display: flex;
                         align-items: center;
                        justify-content: center;
                        margin-bottom: 10px;

                    }
                  
                     .first-block button:hover {
                         background-color: #3c9683;
                     }
                    .first-block button p {
                        color: white;

                    }
                    .first-block div {
                        flex-direction: row;
                        justify-content: flex-start;
                    }
                    .first-block p {
                        font-size: 14px;
                    }
                    .first-block div input {
                        
                        color: black;
                        margin-bottom: 10px;

                    }
                    .line {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: flex-start; 
                    }
                    .line img {
                        width: 25px;
                        height: 25px;
                    }
                    /* .line input {
                        margin-left: 10px;
                    } */
                    .second-block  {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        justify-content: center;
                        padding-top: 20px;
                        width: 40%;
                        background-color: #3ab399;  
                        height: 100vh;   
                    }
                    .second-block .second {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 20px 20px 20px;
                    
                    }
                    .second-block h4 {
                        color: white;
                    }
                    .second-block h1 {
                        color: white;
                        margin-bottom: 20px;
                    }
               
                    .second-block img {
                        width: 80px;
                        height: 50px;
                    }
        </style>
