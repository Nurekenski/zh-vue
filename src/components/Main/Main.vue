  <template>
         
          <div>
            <form @submit.prevent="confirmation"  novalidate="true">
            <div class="first_block">
                <h2>Добавление абитуриента</h2>
                <div class="all">
                    <div class="right_side">
                        <div class="line">
                                <p>Имя</p>
                                <input 
                                type="text"
                                v-model="register.n"
                                placeholder="Имя"
                                autocomplete="false"
                               
                                >
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Фамилия</p>
                                    <input 
                                     type="text"
                                    placeholder="Фамилия"
                                    autocomplete="false"
                                    v-model="register.s"
                                    >
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Отчество</p>
                                    <input placeholder="Отчество"
                                    autocomplete="false"
                                    v-model="register.t"
                                    >
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Уровень обучения</p>
                                    <select v-model="register.uroven">
                                        <option>Первое высшее образование</option>
                                        <option>Второе высшее образование</option>
                                    </select>
                        </div>
                    </div>
                    <div class="left_side">  
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Ступень обучения</p>
                                    <select v-model="register.stupen">
                                        <option>Бакалавриат</option>
                                        <option>Магистрант</option>
                                    </select>
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Форма обучения</p>
                                    <select  v-model="register.forma">
                                        <option>Дневная</option>
                                        <option>Ночная</option>
                                    </select>
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Языковые сдачи</p>
                                    <select  v-model="register.language">
                                        <option>казахское</option>
                                        <option>руское</option>
                                    </select>
                        </div>
                         <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Факультет</p>
                                    <select v-model="register.faculty">
                                        <option>Инженер</option>
                                        <option>2</option>
                                    </select>
                        </div> 
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Специальность</p>
                                    <select v-model="register.specialization">
                                        <option>Выбрать</option>
                                        <option>2</option>
                                    </select>
                        </div> 
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Специализация</p>
                                    <select  v-model="register.spec">
                                        <option>Без специализации</option>
                                        <option>2</option>
                                    </select>
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Основание для поступление</p>
                                    <select v-model="register.osnovnie"> 
                                        <option>зачислен по гранту</option>
                                        <option>2</option>
                                    </select>
                        </div>
                     
                    </div>
                </div>
                    <button class="sign_in"><p>ЕНГІЗУ</p></button>
                    
            </div>
          
            </form>
            <div class="second_block">
                <h2>1-7</h2>
                <div class="all">
                    <div class="right_side">
                        <div class="line">
                                <p>Дата рождения</p>
                                <datepicker 
                                
                                id="date"
                                v-model="date.value"
                                @opened="opened"
                                :language="date.ru" 
                                input-class="inputDate">
                                </datepicker>
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Документ удостоверяюший личность</p>
                                    <select>
                                        <option>Документ удостоверяюший личность</option>
                                        <option>Документ удостоверяюший личность</option>
                                    </select>       
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Номер</p>
                                    <input placeholder="номер"
                                    autocomplete="false"
                                    >
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Когда выдан</p>
                                    <input placeholder="Когда выдан"
                                    autocomplete="false"
                                    >
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Когда выдан</p>
                                    <input placeholder="Срок действия удостоверения"
                                    autocomplete="false"
                                    >
                        </div>
                         <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Кем выдан</p>
                                    <input placeholder="Кем выдан"
                                    autocomplete="false"
                                    >
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>ИИН</p>
                                    <input placeholder="ИИН"
                                    autocomplete="false"
                                    >
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Номер РНН</p>
                                    <input placeholder="Номер РНН"
                                    autocomplete="false"
                                    >
                        </div>
                    </div>
                    <div class="left_side">  
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Служба в армии</p>
                                    <select>
                                        <option>Военное положение</option>
                                        <option>Не военнообязанный</option>
                                    </select>
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Сколько лет служил</p>
                                    <input>
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Пол</p>
                                    <select>
                                        <option>Мужской</option>
                                        <option>Женский</option>
                                    </select>
                        </div>
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Гражданство</p>
                                    <input>
                        </div> 
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Национальность</p>
                                    <input>
                        </div> 
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Семейное положение</p>
                                    <select>
                                        <option>Женат/Замужем</option>
                                        <option>Холост /Не замужем</option>
                                    </select>
                        </div> 
                        <div class="line">
                                    <!-- <img src="../../assets/images/mail.png"> -->
                                    <p>Количество несов, детей или студентов</p>
                                    <select>
                                        <option>Женат/Замужем</option>
                                        <option>Холост /Не замужем</option>
                                    </select>
                        </div> 
                    </div>
                </div>
            </div>
          </div>
  </template>


<style>
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
        padding-top: 20px;
    }

</style>

<script> 
    import Header from './Header.vue';
    import Datepicker from 'vuejs-datepicker';
    import { ru } from 'vuejs-datepicker/dist/locale';
//   import PhoneInput from './PhoneInput.vue';
export default {
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
      register: {
                n: '',
                s: '',
                t: '',
                uroven: '',
                stupen: '',
                forma: '',
                language: '',
                faculty: '',
                specialization: '',
                spec: '',
                osnovanie: '',
                who: ''
        },
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
    };
  },
  computed: {
    loginValidateChange() {
      return {
        borderBottom: this.loginValidate.login ? '1px solid var(--color-primary-notific)' : '',
      };
    }
  },
  methods: {
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
        let obj = {
            name: this.register.n,
            surname: this.register.s,
            third_name: this.register.t,
            uroven_knowledge: this.register.uroven,
            stupen_obuchenie: this.register.stupen,
            forma_obuchenie: this.register.forma,
            language_sdachi: this.register.language,
            faculty: this.register,
            specialization: this.register.specialization,
            spec: this.register.spec,
            osnovanie_dlya_postuplenie: "22",
            who_registered: '1'        
        };

        this.$http.post('/insert_data/all', obj,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDgxNzMyNDQsImlzcyI6InRva2VuLmFjY291bnQudG1wIiwiZXhwIjoxNTQ4Mzg5MjQ0LCJ1c2VyX2lkIjoiMzAiLCJwaG9uZSI6Ijc3MDA0NTUyNTU1In0.90V86wGWnnURXbuXueKGeF47CrNgcQKkAG_qaY9fg7g' 
            }
        }
        )
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {   
            this.register.info = error.response.data.error;
            console.log('Ошибка ' + error.response.data.error);
        });

      }
  },
};
</script>

