    <!-- template -->
    <template>
            <div class="content">
                <div class="flexContent">
                <div class="infoUser">
                    <div class="nameProfile">
                        <p>Проверка данных  &nbsp; &nbsp;&nbsp;{{this.all_name}}</p>
                         
                    </div>
                 
                    <center>
                        <div v-if="this.inform_success!=''">
                            <div class="success"><h3>{{ this.inform_success }}</h3></div>
                        </div>
                        <div v-if="this.inform_warning!=''">
                            <div class="success_warning"><h3>{{ this.inform_warning }}</h3></div>
                        </div>
                        <div v-if="this.inform_obrabotka!=''">
                            <div class="success_obrabotka"><h3>{{ this.inform_obrabotka }}</h3></div>
                        </div>
                        <div v-if="this.result!=''">
                            <div class="success"><h3>{{ this.result }}</h3></div>
                        </div>
                        <div v-if="this.loader==true">
                            <div class="loaders"><img src="../../assets/images/26.gif"></div>
                        </div>
                    </center>
      
                      <div v-if=" this.inform_warning!=''">
                                          <div class="title"><h4>Персональные данные</h4>  <img src="../../assets/images/up-arrow.png"></div>
                                           <div class="line_zagruzit">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>{{this.inform_photo_first}}</p>
                                                <div>
                                                    <p>Загрузить фото удостверяющий личности</p>
                                                    <input 
                                                    type="file" 
                                                    id="first_path"
                                                    ref="first_path"
                                                    v-on:change="onChangeUpload()"
                                                    >
                                                </div>
                                                <div v-if="this.loader_first==true">
                                                    <div class="loaders"><img src="../../assets/images/26.gif"></div>
                                                </div>
                                             
                                                <button @click="zagruzit_udastak_function">Загрузить</button>
                                            </div>
                                            <div class="line_zagruzit">
                                                 <p>{{this.inform_photo_second}}</p>
                                                    <div>
                                                        <p>Загрузить аттестат</p>
                                                        <input 
                                                            type="file" 
                                                            id="second_path"
                                                            ref="second_path"
                                                            v-on:change="onChangeUpload()"
                                                        >
                                                    </div>
                                                    <div v-if="this.loader_second==true">
                                                      <div class="loaders"><img src="../../assets/images/26.gif"></div>
                                                    </div>
                                                    <button @click="zagruzit_atestat_function">Загрузить</button>
                                            </div>
                                            <div class="line_zagruzit">
                                                 <p>{{this.inform_photo_third}}</p>
                                                <div>
                                                    <p>Заргрузить сертификат</p>
                                                    <input 
                                                        type="file"
                                                        placeholder="Загрузить сертификат"
                                                        ref="third_path"
                                                        id="third_path"
                                                        v-on:change="onChangeUpload()"
                                                    >
                                                    </div>
                                                    <div v-if="this.loader_third==true">
                                                       <div class="loaders"><img src="../../assets/images/26.gif"></div>
                                                    </div>
                                                    <button @click="zagruzit_certificate_function">Загрузить</button>
                                            </div>
                                              <div class="line_zagruzit">
                                                   <p>{{this.inform_photo_fourth}}</p>
                                                <div>
                                                    <p style="color:green; font-weight: bold">Загрузить свидетельства не обязательное поле *</p>
                                                    <input
                                                        type="file"
                                                        placeholder="Загрузить свидетельства"
                                                        ref="fourth_path"
                                                        id="fourth_path"
                                                        v-on:change="onChangeUpload()"
                                                    >
                                                </div>
                                                <div v-if="this.loader_fourth==true">
                                                    <div class="loaders"><img src="../../assets/images/26.gif"></div>
                                                </div>
                                                <button @click="zagruzit_stidetelstvo_function">Загрузить</button>
                                            </div>
                                            <div class="line-div">
                                <div class="__images"> 
                                    <div class="div_image">  
                                         <a>Удостоверение личности</a>
                                         <img v-bind:src="this.zagruzit_udastak">
                                    </div>
                                    <div class="div_image">
                                          <a>Аттестат</a>
                                         <img  v-bind:src="this.zagruzit_obr">
                                    </div>
                                    <div class="div_image">
                                          <a>Сертификат ЕНТ </a>
                                          <img v-bind:src="this.zagruzit_certificate">
                                    </div>
                                    <div class="div_image">
                                          <a>Свидетельство о гранте</a>
                                          <img v-bind:src="this.zagruzit_svidetelstva">
                                    </div>
                                   
    
                                </div>
                            </div>
                                    <div class="line-div">
                                            <div class="data_person">
                                                <div class="line">
                                                        <p>Имя</p>
                                                        <input id="input_insert" 
                                                        type="text"
                                                
                                                        v-model="items.name"
                                                        placeholder="Имя"
                                                        autocomplete="false"
                                                        required
                                                        >
                                                </div>
                                                <div class="line">
                                                            <!-- <img src="../../assets/images/mail.png"> -->
                                                            <p>Фамилия</p>
                                                            <input id="input_insert" 
                                                            type="text"
                                                            placeholder="Фамилия"
                                                            autocomplete="false"
                                                            v-model="items.surname"
                                                            required
                                                            >
                                                </div>
                                                <div class="line">
                                                            <!-- <img src="../../assets/images/mail.png"> -->
                                                            <p>Отчество</p>
                                                            <input id="input_insert" placeholder="Отчество"
                                                            autocomplete="false"
                                                            v-model="items.third_name"
                                                            required
                                                            >
                                                </div>
                                            </div>
                                            <div class="data_person">
                                                <div class="line">
                                                        <p>Дата рождения</p>
                                                        <input id="input_insert" type="date"
                                                        v-model="items.date_birth"
                                                        required
                                                        >
                                                        
                                                </div>
                                                <div class="line">
                                                            <!-- <img src="../../assets/images/mail.png"> -->
                                                            <p>Пол</p>
                                                            <multiselect 
                                                            v-model="items.gender"
                                                            :options="gender"
                                                            :searchable="true"
                                                            :close-on-select="true"
                                                            :show-labels="false"
                                                            placeholder="Пол"
                                                            class="searchableSelect"
                                                            ></multiselect>
                                                </div>
                                                <div class="line">
                                                            <!-- <img src="../../assets/images/mail.png"> -->
                                                            <p>Гражданство</p>
                                                            <div class="line-select">
                                                            <multiselect 
                                                                v-model="items.citizenship"
                                                                :options="options"
                                                                :searchable="true"
                                                                :close-on-select="true"
                                                                :show-labels="false"
                                                                placeholder="Выбрать гражданство"
                                                                class="searchableSelect"
                                                                required
                                                            ></multiselect>
                                                            <p>&#128269;</p>
                                                            </div>
                                                        
                                                </div>
                                            </div>
                                            <div class="data_person">
                                                <div class="line">
                                                
                                                        <p>Национальность</p>
                                                        <div class="line-select">
                                                            <multiselect 
                                                                v-model="items.nationality"
                                                                :options="nations"
                                                                :searchable="true"
                                                                :close-on-select="true"
                                                                :show-labels="false"
                                                                placeholder="Выбрать гражданство"
                                                                class="searchableSelect"
                                                                required
                                                            ></multiselect>
                                                            <p>&#128269;</p>
                                                        </div>
                                                </div>
                                                <div class="line">
                                                
                                                            <p>Семейное положение</p>
                                                            <multiselect 
                                                            v-model="items.family_position"
                                                            :options="family_position"
                                                            :searchable="true"
                                                            :close-on-select="true"
                                                            :show-labels="false"
                                                            placeholder="Семейное положение"
                                                            class="searchableSelect"
                                                            ></multiselect>
                                                </div> 
                                            </div>
                                            
                                    </div>
                                    <div class="title">
                                        <h4>Данные о документе удостверяющем личность</h4>
                                            <div v-on:click="isShow_first=!isShow_first">
                                                <img v-show="isShow_first" src="../../assets/images/up-arrow.png" >
                                                <img  src="../../assets/images/down-arrow.png" v-show="!isShow_first" >
                                            </div>
                                    </div>
                                    <div class="line-div" v-show="isShow_first" >
                                        <div class="data_person">
                                            <div class="line">
                                                    <p>Документ удостверяющий личность</p>
                                                    <select v-model="items.document_type" required>
                                                        <option>удост личности</option>
                                                        <option>паспорт</option>
                                                    </select>
                                            </div>
                                            <div class="line">
                                                        <!-- <img src="../../assets/images/mail.png"> -->
                                                        <p>ИИН</p>
                                                        <input id="input_insert" 
                                                        type="text"
                                                        placeholder="ИИН"
                                                        autocomplete="false"
                                                        v-model="items.iin"
                                                        required
                                                        >
                                            </div>
                                            <div class="line">
                                                        <!-- <img src="../../assets/images/mail.png"> -->
                                                        <p>Номер удостверяющий личности</p>
                                                        <input id="input_insert" placeholder="Номер удостверяющий личности"
                                                        autocomplete="false"
                                                        v-model="items.nomer"
                                                        required
                                                        >
                                            </div>
                                        </div>
                                        <div class="data_person">
                                            <div class="line">
                                                    <p>Кем выдан</p>
                                                    <input id="input_insert" 
                                                    placeholder="Кем выдан"
                                                    type="text"
                                                
                                                    v-model="items.kem_vidan"
                                                    required
                                                    > 
                                            </div>
                                            <div class="line">
                                                        <!-- <img src="../../assets/images/mail.png"> -->
                                                        <p>Когда выдан</p>
                                                        <input id="input_insert"
                                                        type="date"
                                                        placeholder="Кем выдан"
                                                        v-model="items.kogda_vidan"
                                                        required
                                                        >
                                            </div>
                                            <div class="line">
                                                        <!-- <img src="../../assets/images/mail.png"> -->
                                                        <p>Срок действия документа</p>
                                                        <input id="input_insert"
                                                        type="date"
                                                        placeholder="Срок действия документа"
                                                        v-model="items.srok_deistvie"
                                                        required
                                                        >
                                            </div>
                                        </div>        
                                    </div>
                                    <div class="title">
                                        <h4>Адрес и контактные данные</h4>
                                        <div v-on:click="isShow_second=!isShow_second">
                                                    <img v-show="isShow_second" src="../../assets/images/up-arrow.png" >
                                                    <img  src="../../assets/images/down-arrow.png" v-show="!isShow_second" >
                                        </div>
                                    </div>
                                    <div class="line-div" v-show="isShow_second">
                                        <div class="data_person">
                                            <div class="line">
                                                    <p>Страна</p>
                                                    <div class="line-select">
                                                        <multiselect 
                                                            v-model="items.strana"
                                                            :options="options"
                                                            :searchable="true"
                                                            :close-on-select="true"
                                                            :show-labels="false"
                                                            placeholder="Выбрать гражданство"
                                                            class="searchableSelect"
                                                        ></multiselect>
                                                        <p>&#128269;</p>
                                                        </div>
                                            </div>
                                            <div class="line">
                                                        <!-- <img src="../../assets/images/mail.png"> -->
                                                        <p>Адрес проживание</p>
                                                        <input id="input_insert" type="text"
                                                        v-model="items.adres_projivanie"
                                                        >
                                            </div>
                                            <div class="line">
                                                        <!-- <img src="../../assets/images/mail.png"> -->
                                                        <p>Адрес прописки</p>
                                                        <input id="input_insert" type="text"
                                                        v-model="items.adres_propiski"
                                                        >
                                            </div>
                                        </div>
                                        <div class="data_person">
                                            <div class="line">
                                                <p>Телефон</p>
                                                <input id="input_insert"
                                                    type="number"
                                                    v-model="items.contact_number"
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="title">
                                        <h4>Образование</h4>
                                        <div v-on:click="isShow_third=!isShow_third">
                                                    <img v-show="isShow_third" src="../../assets/images/up-arrow.png" >
                                                    <img  src="../../assets/images/down-arrow.png" v-show="!isShow_third" >
                                        </div>
                                    </div>
                                    <div class="line-div" v-show="isShow_third">
                                        <div class="data_person">
                                                    <div class="line">
                                                        <p>Тип учебного заведения</p>
                                                        <div class="line-select">
                                                            <multiselect 
                                                                v-model="items.type_zavedenie"
                                                                :options="education"
                                                                :searchable="true"
                                                                :close-on-select="true"
                                                                :show-labels="false"
                                                                placeholder="Тип учебного заведения"
                                                                class="searchableSelect"
                                                            ></multiselect>
                                                            <p>&#128269;</p>
                                                        </div>
                                                    </div>
                                                    <div class="line">
                                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                            <p>Область мест. учебного заведения</p>
                                                            <div class="line-select">
                                                                    <multiselect 
                                                                        v-model="items.oblast_zavedenie"
                                                                        :options="country"
                                                                        :searchable="true"
                                                                        :close-on-select="true"
                                                                        :show-labels="false"
                                                                        class="searchableSelect"
                                                                    ></multiselect>
                                                                    <p>&#128269;</p>
                                                            </div>
                                                    </div>
                                                    <div class="line">
                                                            <p>Район мест. учебного заведения</p>
                                                            <div class="line-select" v-if="items.oblast_zavedenie!=''">
                                                                    <multiselect 
                                                                        v-model="items.raion_zavedenie"
                                                                        :options="list[items.oblast_zavedenie]"
                                                                        :searchable="true"
                                                                        :close-on-select="true"
                                                                        :show-labels="false"
                                                                        placeholder="Район месторасположения"
                                                                        class="searchableSelect"
                                                                    >
                                                                    </multiselect>  
                                                                    <p>&#128269;</p>  
                                                            </div>
                                                            <div class="line-select" v-else>
                                                                    <multiselect 
                                                                        v-model="items.raion_zavedenie"
                                                                        :options="empty"
                                                                        :searchable="true"
                                                                        :close-on-select="true"
                                                                        :show-labels="false"
                                                                        placeholder="Тип учебного заведения"
                                                                        class="searchableSelect"   
                                                                    ></multiselect>
                                                                    <p>&#128269;</p>    
                                                            </div>      
                                                    </div>
                                                
                                        </div>
                                        <div class="data_person">
                                                        <div class="line">
                                                            <p>Наименование учебного заведения</p>
                                                            <input id="input_insert"
                                                                type="text"
                                                                v-model="items.name_zavedenie"
                                                            >
                                                        </div>
                                                        <div class="line">
                                                            <p>Тип документа</p>
                                                            <select v-model="items.type_obrazovanie">
                                                                <option>обычный</option>
                                                                <option>с отличием</option>
                                                            </select>
                                                        </div>
                                                        <div class="line">
                                                            <p>Дата выдачи</p>
                                                            <input id="input_insert" 
                                                                type="date"
                                                                placeholder="Дата выдачи"
                                                                v-model="items.date_vidachi_obr"
                                                            >
                                                        </div>
                                                    
                                                    </div>
                                        <div class="data_person">
                                                        <div class="line">
                                                            <p>Серия документа</p>
                                                            <input id="input_insert" 
                                                                type="text"
                                                                placeholder="Серия документа"
                                                                v-model="items.seria_document"
                                                            
                                                            >
                                                        </div>
                                                        <div class="line">
                                                            <p>Номер документа</p>
                                                            <input id="input_insert" 
                                                                type="number"
                                                                placeholder="Дата выдачи"
                                                                v-model="items.nomer_document"
                                                            >
                                                        </div>
                                                        <div class="line">
                                                            <p>Условно зачисленный </p>
                                                            <div v-if="items.uslovno_zachislen=='1'">
                                                                <input id="input_insert" 
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                placeholder="Дата выдачи"
                                                                v-model="items.uslovno_zachislen"
                                                                :checked="true"
                                                            >
                                                            </div>
                                                            <div v-else>
                                                                <input id="input_insert" 
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                placeholder="Дата выдачи"
                                                                v-model="items.uslovno_zachislen"
                                                                :checked="false"
                                                            >
                                                            </div>
                                                            <div>
                                                            </div>
                                                        
                                                        </div>
                                        </div>
                                    
                                    </div>
                                    <div class="title">
                                        <h4>Сертификат ЕНТ</h4>
                                        <div v-on:click="isShow_eigth=!isShow_eigth">
                                                    <img v-show="isShow_eigth" src="../../assets/images/up-arrow.png" >
                                                    <img  src="../../assets/images/down-arrow.png" v-show="!isShow_eigth" >
                                        </div>
                                    </div>
                                    <div class="line-div" v-show="isShow_eigth">
                                        <div class="data_person"> 
                                            <div class="line">
                                                    <p>Номер сертификата (или протокол собеседования)</p>
                                                    <input id="input_insert" 
                                                        
                                                        type="text"
                                                        placeholder="Дата выдачи"
                                                        v-model="items.number_certificate"
                                                    >
                                            </div>
                                            <div class="line">
                                                        <p>Серия сертификата</p>
                                                        <input id="input_insert" 
                                                            
                                                            type="text"
                                                            placeholder="Дата выдачи"
                                                            v-model="items.seria_certificate"
                                                        >
                                            </div>
                                            <div class="line">
                                                            <p>Дата выдачи сертификата</p>
                                                            <input id="input_insert" 
                                                                
                                                                type="date"
                                                                placeholder="Дата выдачи"
                                                                v-model="items.date_certificate"
                                                            >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="title">
                                        <h4>Свидетельство о гранте</h4>
                                        <div v-on:click="isShow_fourth=!isShow_fourth">
                                                    <img v-show="isShow_fourth" src="../../assets/images/up-arrow.png" >
                                                    <img  src="../../assets/images/down-arrow.png" v-show="!isShow_fourth" >
                                        </div>
                                    </div>
                                    <div class="line-div" v-show="isShow_fourth">
                                        <div class="data_person">
                                            <div class="line-check">
                                                    <p>Номер свидетельства</p>
                                                    <input id="input_insert"
                                                        v-model="items.nomer_svidetelstva"
                                                        required
                                                    >
                                            </div>
                                            
                                        </div>
                            
                                    </div>
                                    <div class="title" >
                                        <h4>Квоты</h4>
                                        <div v-on:click="isShow_fifth=!isShow_fifth">
                                                    <img v-show="isShow_fifth" src="../../assets/images/up-arrow.png" >
                                                    <img  src="../../assets/images/down-arrow.png" v-show="!isShow_fifth" >
                                        </div>
                                    </div>
                                    <div class="line-div" v-show="isShow_fifth">
                                        <div class="data_person"> 
                                            <div class="line ">
                                                        <p>Серпин</p>
                                                        <div v-if="items.serpin=='1'">
                                                        
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                v-model="items.serpin"
                                                                :checked='true'
                                                            >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                v-model="items.serpin"
                                                                
                                                            >
                                                        </div>
                                                        
                                                </div>
                                                <div class="line">
                                                        <p>Дети сироты</p>
                                                        <div v-if="items.deti_siroti=='1'">
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                v-model="items.deti_siroti"
                                                                :checked='true'
                                                            
                                                            >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                v-model="items.deti_siroti"
                                                            
                                                            >
                                                        </div>
                                                </div>
                                                <div class="line">
                                                        <p>Инвалид 1-й группа</p>
                                                        <div v-if="items.invalid_pervi=='1'">
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.invalid_pervi"
                                                            :checked="true"
                                                            >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.invalid_pervi"
                                                            :checked="false"
                                                            >
                                                        </div>
                                                </div>
                                                    
                                                <div class="line">
                                                        <p>Инвалид 2-й группа</p>
                                                        <div v-if="items.invalid_vtoroi=='1'">
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                v-model="items.invalid_vtoroi"
                                                                :checked="true"
                                                                >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                :value="items.invalid_vtoroi"
                                                                
                                                                >
                                                        </div>
                                                    
                                                </div>
                                                <div class="line">
                                                    <p>Инвалид с детства</p>
                                                    <div v-if="items.invalid_sdetstva=='1'">
                                                        <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.invalid_sdetstva"
                                                            :checked="true"
                                                            >
                                                    </div>
                                                    <div>
                                                        <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.invalid_sdetstva"
                                                        
                                                            >
                                                    </div>
                                                
                                            </div>
                                            <div class="line">
                                                    <p>Квота для лиц приравненных по льготам и </p>
                                                    <p>гарантиям к участникам и инвалидам ВОВ</p>
                                                    <div v-if="items.kvota_invalidam=='1'">
                                                    
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                    
                                                        v-model="items.kvota_invalidam"
                                                        :checked='true'
                                                        >
                                                    </div>
                                                    <div v-else>
                                                    
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.kvota_invalidam"
                                                
                                                        >
                                                    </div>
                                            </div>
                                            <div class="line">
                                                    <p>Сельская квота</p>
                                                    <div v-if="items.selskaya_kvota=='1'">
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.selskaya_kvota"
                                                        :checked='true'
                                                        >
                                                    </div>
                                                    <div v-else>
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.selskaya_kvota"
                                                    
                                                        >
                                                    </div>
                                            </div>
                                            <div class="line last-line">
                                                    <p>Квота для лиц казахской национальностей,</p>
                                                    <p> не являющихся гражданами РК</p>
                                                    <div  v-if="items.kvota_negrajdan=='1'">
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                v-model="items.kvota_negrajdan"
                                                                :checked="true"
                                                                >
                                                    </div>
                                                    <div v-else>
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                v-model="items.kvota_negrajdan"
                                                                
                                                            >
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="title">
                                        <h4>Награды</h4>
                                        <div v-on:click="isShow_sixth=!isShow_sixth">
                                                    <img v-show="isShow_sixth" src="../../assets/images/up-arrow.png" >
                                                    <img  src="../../assets/images/down-arrow.png" v-show="!isShow_sixth" >
                                        </div>
                                    </div>
                                    <div class="line-div" v-show="isShow_sixth">
                                        <div class="data_person"> 
                                                <div class="line">
                                                    <p>победитель международной олимпиады</p>
                                                    <div  v-if="items.pob_mej_olimp=='1'">
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.pob_mej_olimp"
                                                        :checked="true"
                                                        >
                                                    </div>
                                                    <div v-else>
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.pob_mej_olimp"
                                                    
                                                        >
                                                    </div>
                                                </div>
                                                <div class="line">
                                                    <p>победитель республиканской олимпиады</p>
                                                    <div  v-if="items.pob_resp_olimp=='1'">
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.pob_resp_olimp"
                                                        :checked="true"
                                                        >
                                                    </div>
                                                    <div v-else>
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.pob_resp_olimp"
                                                    
                                                        >
                                                    </div>
                                                </div>
                                                <div class="line">
                                                    <p>знак "Алтын белгi"</p>
                                                    <div  v-if="items.znak_altin=='1'">
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.znak_altin"
                                                        :checked="true"
                                                        >
                                                    </div>
                                                    <div v-else>
                                                        <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.znak_altin"
                                                        >
                                                    </div>
                                                </div>
                                                    <div class="line">
                                                    <p>аттестат особого образца</p>
                                                    <div  v-if="items.atestat_osobo=='1'">
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.atestat_osobo"
                                                        :checked="true"
                                                        >
                                                    </div>
                                                    <div v-else>
                                                        <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.atestat_osobo"
                                                        
                                                        >
                                                    </div> 
                                                </div>
                                                <div class="line">
                                                    <p>победитель международного научного конкурса</p>
                                                    <div  v-if="items.pob_mej_nau=='1'">
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_mej_nau"
                                                            :checked="true"
                                                            >
                                                    </div>
                                                    <div v-else>
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_mej_nau"
                                                            
                                                            >
                                                    </div>
                                                </div>
                                                    <div class="line">
                                                    <p>победитель республиканского научного конкурса</p>
                                                    <div  v-if="items.pob_resp_nau=='1'">
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.pob_resp_nau"
                                                        :checked="true"
                                                        >
                                                    </div>
                                                    <div v-else>
                                                        <input id="input_insert"
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        v-model="items.pob_resp_nau"
                                                    
                                                        >
                                                    </div>
                                                </div>
                                            
                                    
                                        </div>
                                        <div class="data_person">
                                                    <div class="line">
                                                    <p>Победитель международного спортивного соревнования</p>
                                                    <p>и победитель республиканских спортивных соревнова</p>
                                                        <div v-if="items.pob_mej_sport=='1'">
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_mej_sport"
                                                            :checked="true"
                                                            >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_mej_sport"
                                                    
                                                            >
                                                        </div>
                                                </div>
                                                    <div class="line">
                                                    <p>победитель городского научного конкурса</p>
                                                        <div v-if="items.pob_gorod_nau=='1'">
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_gorod_nau"
                                                            :checked="true"
                                                            >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_gorod_nau"
                                                        
                                                            >
                                                        </div>
                                                    
                                                </div>
                                                <div class="line">
                                                        <p>победитель городской олимпиады</p>
                                                        <div v-if="items.pob_gorod_olimp=='1'">
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_gorod_olimp"
                                                            :checked="true"
                                                            >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_gorod_olimp"
                                                            
                                                            >
                                                        </div>
                                                </div>
                                                    <div class="line">
                                                        <p>победитель областного научного конкурса</p>
                                                        <div v-if="items.pob_obl_nau_konkurs=='1'">
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_obl_nau_konkurs"
                                                            :checked="true"
                                                            >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_obl_nau_konkurs"
                                                        
                                                            >
                                                        </div>
                                                </div>
                                                    <div class="line">
                                                        <p>победитель областной олимпиады</p>
                                                        <div v-if="items.pob_obl_olimp=='1'">
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_obl_olimp"
                                                            :checked="true"
                                                            >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            v-model="items.pob_obl_olimp"
                                                            
                                                            >
                                                        </div>
                                                </div>
                                                <div class="line">
                                                        <p>Побидитель международной выставки</p>
                                                        <div v-if="items.pob_mej_vistavki=='1'">
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                v-model="items.pob_mej_vistavki"
                                                                :checked="true"
                                                            >
                                                        </div>
                                                        <div v-else>
                                                            <input id="input_insert"
                                                                class="for_checkbox"
                                                                type="checkbox"
                                                                v-model="items.pob_mej_vistavki"
                                                            
                                                            >
                                                        </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="title">
                                        <h4>Специальности</h4>
                                        <div v-on:click="isShow_seventh=!isShow_seventh">
                                                    <img v-show="isShow_seventh" src="../../assets/images/up-arrow.png" >
                                                    <img  src="../../assets/images/down-arrow.png" v-show="!isShow_seventh" >
                                        </div>
                                    </div>
                                    <div class="line-div" v-show="isShow_seventh">
                                        <div class="data_person">
                                                <div class="line">
                                                    <p>Уровень обучения</p>
                                                    <div class="line-select">
                                                    <multiselect 
                                                        v-model="items.uroven_obuchenie"
                                                        :options="uroven_obuchenie"
                                                        :searchable="true"
                                                        :close-on-select="true"
                                                        :show-labels="false"
                                                        placeholder="Уровень обучения"
                                                        class="searchableSelect"
                                                    ></multiselect>  
                                                    <p>&#128269;</p> 
                                                    </div>
                                                </div>
                                                <div class="line">
                                                    <p>Ступень обучения</p>
                                                    <div class="line-select">
                                                    <multiselect 
                                                        v-model="items.stupen_obuchenie"
                                                        :options="stupen_obuchenie"
                                                        :searchable="true"
                                                        :close-on-select="true"
                                                        :show-labels="false"
                                                        placeholder="Ступень обучения"
                                                        class="searchableSelect"
                                                    ></multiselect>  
                                                    <p>&#128269;</p> 
                                                    </div>
                                                </div>
                                                <div class="line">
                                                <p>Форма обучения</p>
                                                <div class="line-select">
                                                <multiselect 
                                                    v-model="items.forma_obuchenie"
                                                    :options="forma_obuchenie"
                                                    :searchable="true"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Форма обучения"
                                                    class="searchableSelect"
                                                ></multiselect>  
                                                <p>&#128269;</p> 
                                                </div>
                                                </div>
                                        </div>
                                        <div class="data_person">
                                            <div class="line">
                                                <p>Языковое отделение</p>
                                                <div class="line-select">
                                                <multiselect 
                                                    v-model="items.language_otdelenie"
                                                    :options="yazik_otdelenie"
                                                    :searchable="true"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Языковое отделение"
                                                    class="searchableSelect"
                                                ></multiselect>  
                                                <p>&#128269;</p> 
                                                </div>
                                            </div>
                                            <div class="line">     
                                                <p>Факультет</p>
                                                <div class="line-select">
                                                <multiselect 
                                                    v-model="items.faculty"
                                                    :options="faculty"
                                                    :searchable="true"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Факультет"
                                                    class="searchableSelect"
                                                ></multiselect>  
                                                <p>&#128269;</p> 
                                                </div>
                                            </div>

                                            
                                            <div class="line" v-if="items.faculty!=''">
                                                <p>Специальность</p>
                                                <div class="line-select">
                                                    <multiselect 
                                                    v-model="items.specialnost"
                                                    :options="list[items.faculty]"
                                                    :searchable="true"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Специальность"
                                                    class="searchableSelect"
                                                    ></multiselect>  
                                                    <p>&#128269;</p>     
                                                </div>
                                            </div>
                                            <div class="line" v-else>
                                                <p>Специальность</p>
                                                <div class="line-select">
                                                <multiselect 
                                                    v-model="items.specialnost"
                                                    :options="empty"
                                                    :searchable="true"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Специальность"
                                                    class="searchableSelect"
                                                ></multiselect>  
                                                <p>&#128269;</p> 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="data_person">
                                            <div class="line" >
                                                <p>На гранд / Платное обучение</p>
                                                <div class="line-select">
                                                <multiselect 
                                                    v-model="items.grand_platni"
                                                    :options="grand_platni"
                                                    :searchable="true"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Специальность"
                                                    class="searchableSelect"
                                                ></multiselect>  
                                                <p>&#128269;</p> 
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                    <div class="check_all_data">
                            
                        <div class="changeData" @click="confirmation">
                                <button>Отправить</button>
                        </div>         
                    </div>
                      </div>
                     
            </div>
            
            </div> 
                        
            </div>                   
    </template>

    <!-- scripts -->
    <script>
       
        import Multiselect from 'vue-multiselect'
        export default {
            data() {
                return {
                    zagruzit_obr :"",
                    zagruzit_certificate: "",
                    zagruzit_udastak: "",
                    zagruzit_svidetelstva: "",
                    images: [
                        'https://dummyimage.com/800/ffffff/000000',
                        'https://dummyimage.com/1600/ffffff/000000',
                        'https://dummyimage.com/1280/000000/ffffff',
                        'https://dummyimage.com/400/000000/ffffff',
                    ],
                    all_name: localStorage.all_name,
                    loader: false,
                    loader_first: false,
                    loader_second: false,
                    loader_third: false,
                    loader_fourth: false,
                    items:{},
                    index: null,
                    selected: "",
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
                        empty: ["Не выбран"],
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
                            "Профессионально-творческий":["Выбрать", "5B011500 Основы права и экономики", "5B030100 Юриспруденция", "5B051000 Государственное и местное управление", "5B051100 Маркетинг", "5B050600 Экономика", "5B050700 Менеджмент", "5B050800 Учет и аудит", "5B050900 Финансы", "5B051300 Мировая экономика"],
                            "no": ["Не выбран"],
                            "Data": ["Не выбран"],
                            "Data ": ["Не выбран"]

                        },
                        family_position: ["Холостой","Женат"],
                        gender: ["Мужской","Женский"],
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
                  
                    register: {
                        login: "",
                        password: "",
                        surname  : "", 
                        name  : this.$route.query.name, 
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
                        serpin  :  "", 
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
                        pob_obl_olimp  :"",  
                        pob_mej_vistavki  : "", 
                        uroven_obuchenie  : "",  
                        stupen_obuchenie  : "",  
                        forma_obuchenie  : "",  
                        language_otdelenie  : "",  
                        faculty  : '',  
                        specialnost  : "",  
                        who_registered  : "",  
                        data_about_who  : "",
                        grand_platni: "" ,
                        proverenni: "",
                        ne_pravilno: "",
                        comment: ""
                    },
                    inform_photo_first: '',
                    inform_photo_second: '',
                    inform_photo_third: '',
                    inform_photo_fourth: '',
                    inform_success: '',
                    inform_warning: '',
                    inform_obrabotka: '',
                    result: ""
                }
            },
            components: {
                Multiselect
            },
            beforeMount(){
                this.loader = true;
                this.$http.post('/signup/get_all', {},
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer '+localStorage.getItem('access_token_student')
                        }
                    }
                )
                .then(res => {
                    if(res.data.proverenni=='0') {
                        this.inform_warning = "Ваши данные не правильно заполнено  "+res.data.comment;
                    
                        this.inform_success = '';
                        this.inform_obrabotka = '';
                        this.loader = false;
                        this.items = res.data;
                        this.items.serpin  =  this.for_checkbox(this.items.serpin); 
                        this.items.deti_siroti  = this.for_checkbox(this.items.deti_siroti); 
                        this.items.invalid_pervi  = this.for_checkbox(this.items.invalid_pervi);  
                        this.items.invalid_vtoroi  = this.for_checkbox(this.items.invalid_vtoroi);  
                        this.items.invalid_sdetstva  = this.for_checkbox(this.items.invalid_sdetstva); 
                        this.items.kvota_invalidam  = this.for_checkbox(this.items.kvota_invalidam);  
                        this.items.selskaya_kvota  = this.for_checkbox(this.items.selskaya_kvota); 
                        this.items.kvota_negrajdan  = this.for_checkbox(this.items.kvota_negrajdan);  
                        this.items.pob_mej_olimp  = this.for_checkbox(this.items.pob_mej_olimp);  
                        this.items.pob_resp_olimp  = this.for_checkbox(this.items.pob_resp_olimp);
                        this.items.znak_altin  = this.for_checkbox(this.items.znak_altin); 
                        this.items.atestat_osobo  = this.for_checkbox(this.items.atestat_osobo);  
                        this.items.pob_mej_nau  = this.for_checkbox(this.items.pob_mej_nau);  
                        this.items.pob_resp_nau  = this.for_checkbox(this.items.pob_resp_nau);  
                        this.items.pob_mej_sport  = this.for_checkbox(this.items.pob_mej_sport);  
                        this.items.pob_gorod_nau  = this.for_checkbox(this.items.pob_gorod_nau);  
                        this.items.pob_gorod_olimp  = this.for_checkbox(this.items.pob_gorod_olimp);  
                        this.items.pob_obl_nau_konkurs  = this.for_checkbox(this.items.pob_obl_nau_konkurs); 
                        this.items.pob_obl_olimp  =this.for_checkbox(this.items.pob_obl_olimp);  
                        this.items.pob_mej_vistavki  = this.for_checkbox(this.items.pob_mej_vistavki);

                            this.$http.get('/insert_data/avatar/?unique_id='+this.items.unique_id,
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                    // 'Authorization': 'Bearer '+localStorage.getItem('access_tokens')
                                }
                            }
                            ).then(res => {
                                console.log("avatar path");
                                    this.zagruzit_udastak =res.data.first_path,
                                    this.zagruzit_certificate=res.data.second_path,
                                    this.zagruzit_obr= res.data.third_path,
                                    this.zagruzit_svidetelstva=res.data.fourth_path
                            })
                            .catch(error => {   
                                // this.this.items.info = error.response.data.error;
                                console.log('Ошибка ' + error.response.data.error);
                            });
                    }
                    else if(res.data.proverenni=='1') {
                        this.inform_success = "Ваши данные правильно заполнено";
                        this.inform_warning = '';
                        this.inform_obrabotka = '';
                        this.loader = false;
                    }
                    else if (res.data.proverenni=='2') {
                          this.inform_obrabotka = "Ваши данные в обработке";
                          this.inform_warning = '';
                          this.inform_success = '';
                          this.loader = false;
                    }
                    
                
            })
            .catch(error => {   
                // this.this.items.info = error.response.data.error;
                console.log('Ошибка ' + error.response.data.error);
            });


           
        },
            methods: {
                onChangeUpload(){
                    this.first_path = this.$refs.first_path.files[0];
                    this.second_path = this.$refs.second_path.files[0];
                    this.third_path = this.$refs.third_path.files[0];
                    this.fourth_path = this.$refs.fourth_path.files[0];
                },
                zagruzit_udastak_function(){
                    this.loader_first = true;
                    let formData = new FormData();
                    formData.append('first', this.first_path);
                    this.$http.post('/insert_data/avatar_update', formData,
                        {
                            headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'Authorization': 'Bearer '+localStorage.access_token_student
                            }
                        }
                    )
                    .then(res => {
                        console.log("result there");
                        console.log(res.data);
                        this.inform_photo = "Успешно изменен";
                        this.loader_first=false;

                    })
                    .catch(error => {   
                        this.register.info = error.response.data.error;
                        console.log('Ошибка ' + error.response.data.error);
                        this.loader_first=false;
                    }); 
                },
                zagruzit_atestat_function() {
                    this.loader_second = true;
                    let formData = new FormData();
                    formData.append('second', this.second_path);
                      this.$http.post('/insert_data/avatar_update', formData,
                        {
                            headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'Authorization': 'Bearer '+localStorage.access_token_student
                            }
                        }
                    )
                    .then(res => {
                        console.log("result there");
                        console.log(res.data);
                        this.inform_photo = "Успешно изменен";
                        this.loader_second=false;

                    })
                    .catch(error => {   
                        this.register.info = error.response.data.error;
                        console.log('Ошибка ' + error.response.data.error);
                        this.loader_second=false;
                    }); 
                            
                },
                zagruzit_certificate_function(){
                    this.loader_third = true;
                    let formData = new FormData();
                    alert(this.third_path);
                    formData.append('third', this.third_path);
                      this.$http.post('/insert_data/avatar_update', formData,
                        {
                            headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'Authorization': 'Bearer '+localStorage.access_token_student
                            }
                        }
                    )
                    .then(res => {
                        console.log("result there");
                        console.log(res.data);
                        this.inform_photo = "Успешно изменен";
                        this.loader_third=false;

                    })
                    .catch(error => {   
                        this.register.info = error.response.data.error;
                        console.log('Ошибка ' + error.response.data.error);
                        this.loader_third=false;
                    }); 
                        
                },
                zagruzit_stidetelstvo_function(){
                    this.loader_fourth = true;
                    let formData = new FormData();
                    formData.append('fourth', this.fourth_path);
                      this.$http.post('/insert_data/avatar_update', formData,
                        {
                            headers: {
                                    'Content-Type': 'multipart/form-data',
                                    'Authorization': 'Bearer '+localStorage.access_token_student
                            }
                        }
                    )
                    .then(res => {
                        console.log("result there");
                        console.log(res.data);
                        this.inform_photo = "Успешно изменен";
                        this.loader_fourth=false;

                    })
                    .catch(error => {   
                        this.register.info = error.response.data.error;
                        console.log('Ошибка ' + error.response.data.error);
                                this.loader_fourth=false;
                    }); 
                },
                check_true_false(word) {
                    if(word==true){
                        word = "1";
                        return word;
                    }
                    else {
                        word = "0";
                        return word;
                    }
                },
                for_checkbox(word) {
                    if(word==0){
                        word = "";
                        return word;
                    }
                    else {
                       
                        return word;
                    }
                },
                confirmation() {               
                            let obj = {
                                "surname": this.items.name,
                                "name": this.items.surname,
                                "third_name":  this.items.third_name, 
                                "date_birth": this.items.date_birth,
                                "gender": this.items.gender,
                                "citizenship": this.items.citizenship, 
                                "nationality": this.items.nationality,
                                "family_position": this.items.family_position,
                                "document_type": this.items.document_type,
                                "iin": this.items.iin,
                                "nomer": this.items.nomer,
                                "kem_vidan": this.items.kem_vidan,
                                "kogda_vidan": this.items.kogda_vidan,
                                "srok_deistvie": this.items.srok_deistvie,
                                "zagruzit_udastak": this.items.zagruzit_udastak,
                                "strana": this.items.strana,
                                "adres_projivanie": this.items.adres_projivanie,
                                "adres_propiski": this.items.adres_propiski,
                                "contact_number": this.items.contact_number,
                                "type_zavedenie": this.items.type_zavedenie,
                                "oblast_zavedenie": this.items.oblast_zavedenie,
                                "raion_zavedenie": this.items.raion_zavedenie,
                                "name_zavedenie": this.items.name_zavedenie,
                                "type_obrazovanie": this.items.type_obrazovanie,
                                "date_vidachi_obr": this.items.date_vidachi_obr,
                                "seria_document": this.items.seria_document,
                                "nomer_document": this.items.nomer_document,
                                "uslovno_zachislen": this.check_true_false(this.items.uslovno_zachislen),
                                "zagruzit_obr": this.items.zagruzit_obr,
                                "number_certificate": this.items.number_certificate,
                                "seria_certificate": this.items.seria_certificate,
                                "date_certificate": this.items.date_certificate,
                                "zagruzit_certificate": this.items.zagruzit_certificate,
                                "nomer_svidetelstva": this.items.nomer_svidetelstva,
                                "zagruzit_svidetelstva": this.items.zagruzit_svidetelstva,
                                "serpin": this.check_true_false(this.items.serpin),
                                "deti_siroti": this.check_true_false(this.items.deti_siroti),
                                "invalid_pervi": this.check_true_false(this.items.invalid_pervi),
                                "invalid_vtoroi": this.check_true_false(this.items.invalid_vtoroi),
                                "invalid_sdetstva": this.check_true_false(this.items.invalid_sdetstva),
                                "kvota_invalidam": this.check_true_false(this.items.kvota_invalidam),
                                "selskaya_kvota": this.check_true_false(this.items.selskaya_kvota),
                                "kvota_negrajdan": this.check_true_false(this.items.kvota_negrajdan),
                                "pob_mej_olimp": this.check_true_false(this.items.pob_mej_olimp),
                                "pob_resp_olimp": this.check_true_false(this.items.pob_resp_olimp),
                                "znak_altin": this.check_true_false(this.items.znak_altin),
                                "atestat_osobo": this.check_true_false(this.items.atestat_osobo),
                                "pob_mej_nau": this.check_true_false(this.items.pob_mej_nau),
                                "pob_resp_nau": this.check_true_false(this.items.pob_resp_nau),
                                "pob_mej_sport": this.check_true_false(this.items.pob_mej_sport),
                                "pob_gorod_nau": this.check_true_false(this.items.pob_gorod_nau),
                                "pob_gorod_olimp": this.check_true_false(this.items.pob_gorod_olimp),
                                "pob_obl_nau_konkurs": this.check_true_false(this.items.pob_obl_nau_konkurs),
                                "pob_obl_olimp": this.check_true_false(this.items.pob_obl_olimp),
                                "pob_mej_vistavki": this.check_true_false(this.items.pob_mej_vistavki),
                                "uroven_obuchenie": this.items.uroven_obuchenie,
                                "stupen_obuchenie": this.items.stupen_obuchenie,
                                "forma_obuchenie": this.items.forma_obuchenie, 
                                "language_otdelenie": this.items.language_otdelenie,
                                "faculty": this.items.faculty,
                                "specialnost": "Data ",
                                "who_itemsed": "student",
                                "data_about_who": "Data ",
                                "grand_platni": "Гранд",
                                "proverenni": "2",
                                "unique_id": this.items.unique_id,
                                "comment": this.items.comment
                            };
                    this.$http.post('/insert_data/student_update/', obj,
                        {
                            headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer '+localStorage.getItem('access_tokens')
                            }
                        }
                    )
                    .then(res => {
                        console.log(res.data);
                        if(res.data.message=="Updated") {
                            this.result = "Успешно отправлено на проверку";
                        }
                    })
                    .catch(error => {   
                        this.register.info = error.response.data.error;
                        console.log('Ошибка ' + error.response.data.error);
                    });
                }
            }
        };
    </script>

    <!-- style -->
    <style scoped lang="scss"> 
      .div_image {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
        }
        .div_image a {
            text-decoration: underline !important;
            font-weight: bold;
        }
      .line-div img {
            width: 70%;
        }
 
            @media only screen and (max-width: 640px) {
                .data_person {
                    flex-direction: column !important;
                    
                }
                .line-div {
                    flex-wrap: nowrap;
                    flex-direction: column;
                }
            }
      .line_zagruzit div{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
      }
      .line_zagruzit button {
          background-color: var(--main-project-color);
          border-radius: 5px;
          padding: 5px;
          color: white;
          border:none;
          outline: none;
          margin-left: 10px;
      }
      .line_zagruzit {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          
          padding: 20px;
      }
      #input_insert {
                width: 200px;
                border: 1px solid #e8e8e8;
                border-radius: 3px;
                padding: 8px !important;
            
                
        }
    .line-select {
        width: 290px !important;
    }
    .line {
        width: 290px !important;
    }
        .success {
            display: flex;
            justify-content: center;
            align-self: center;
            padding: 20px;
            color: #4F8A10;
            background-color: #DFF2BF
        
        }
        .success h3 {
            color: #4F8A10;
        }
        .success_obrabotka {
            display: flex;
            justify-content: center;
            align-self: center;
            padding: 20px;
            color: #9F6000;
            background-color: #FEEFB3;
        }
        .success_obrabotka h3 {
            color: #9F6000;
        }

        .success_warning {
            display: flex;
            justify-content: center;
            align-self: center;
            padding: 20px;
            color: #D8000C;
            background-color: #FFBABA;
        }
        .success_warning h3 {
            color: #D8000C;
        }


        .check_all_data {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-self: center;
        }
        .check_all_data .correct{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
        }
        .check_all_data .not_correct{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
        }
        textarea {
            width: 300px;
            height: 150px;
            border-radius: 5px;
            padding: 10px;
        }
        .not_correct div {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .check_all_data div input{
            margin-left: 5px;
        }


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
        .line_checkbox {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
        }
        .line_checkbox input {
            margin-left: 10px;
            width: 20px;
            height: 20px;
        }
        .changeData {
            margin-bottom: 20px;
            margin-left: 20px;
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
        display: flex;
        flex-direction: row;
       

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