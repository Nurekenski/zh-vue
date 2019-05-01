        <!-- template -->
        <template>
                    <div class="main">

                            <div class="step_by">
                                <!-- <img class="gif" src="../../assets/images/gif2.gif"> -->
                                <div v-if="this.loader==true">
                                    <div class="loaders"><img src="../../assets/images/26.gif"></div>
                                </div>
                                <div v-if="this.inform!=''">
                                    <div class="success"><h3>{{ this.inform }}</h3></div>
                                </div>
                         
                                <div class="first_step" v-show='zero'>
                                    <h4>Создать личный кабинет</h4>
                                        <p>для входа в личный кабинет</p>
                                    <div>
                                        <div class="line">
                                                <p>Логин (напишите свой ИИН)</p>
                                                <input id="input_insert" 
                                                type="number"
                                                v-model="register.iin"
                                                placeholder="ИИН"
                                                autocomplete="false"
                                                maxlength="12"
                                                required
                                                >
                                        </div>
                                        <div class="line">
                                                <p>Пароль</p>
                                                <input id="input_insert" 
                                                type="password"
                                                v-model="register.password"
                                                placeholder="пароль"
                                                autocomplete="false"
                                                required
                                                >
                                        </div>
                        
                                    </div>
                                        <div class="arrow">
                                            <button class="next" @click="nextPage('first')">></button>
            
                                        </div>
                                        <div class="level">
                                            <span  class="static"
                                            v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                            <span class="static"
                                            v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                            <span   class="static"
                                            v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                            <span   class="static"
                                            v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        </div>
                                </div>
                                <div class="first_step" v-show='first' >
                                     <h4>Персональные данные</h4>
                                    <div>
                                   
                                    <div class="line">
                                            <p>Имя</p>
                                            <input id="input_insert" 
                                            type="text"
                                            v-model="register.name"
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
                                                v-model="register.surname"
                                                required
                                                >
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Отчество</p>
                                                <input id="input_insert" placeholder="Отчество"
                                                autocomplete="false"
                                                v-model="register.third_name"
                                                required
                                                >
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <div class="line">
                                                    <p>дата рождения</p>
                                                    <input id="input_insert" type="date"
                                                    v-model="register.date_birth"
                                                    required
                                                    >
                                                </div>
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Пол</p>
                                                <select v-model="register.gender" required>
                                                    <option>Мужской</option>
                                                    <option>Женский</option>
                                                </select>
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Гражданство</p>
                                                <div class="line-select">
                                                <multiselect 
                                                    v-model="register.citizenship"
                                                    :options="options"
                                                    :searchable="true"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Выбрать гражданство"
                                                    class="searchableSelect__"
                                                    required
                                                ></multiselect>
                                                <p>&#128269;</p>
                                                </div>
                                            
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Национальность</p>
                                                <div class="line-select">
                                            <multiselect 
                                                v-model="register.nationality"
                                                :options="nations"
                                                :searchable="true"
                                                :close-on-select="true"
                                                :show-labels="false"
                                                placeholder="Выбрать гражданство"
                                                class="searchableSelect__"
                                                required
                                            ></multiselect>
                                                <p>&#128269;</p>
                                                </div>
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Семейное положение</p>
                                                <select v-model="register.family_position" required>
                                                    <option>холостой</option>
                                                    <option>женат</option>
                                                </select>
                                    </div>
                                    
                                    </div>
                                    <div class="arrow">
                                        <button class="next" @click="prevPage('zero')">&#x3c;</button>
                                        <button class="next" @click="nextPage('second')">></button>
                                    </div>
                                    <div class="level">
                                        <span  class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                    </div>
                                </div>
                                <div class="first_step" v-show='second'>
                                    <center>
                                        <h4>Данные о документе удостверяющем личность</h4>
                                    </center>
                                
                                    <div class="line">
                                            <p>Документ удостверяющий личность</p>
                                            <select v-model="register.document_type" required>
                                                <option>удост личности</option>
                                                <option>паспорт</option>
                                            </select>
                                    </div>
                                    <!--  -->
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>номер удостверяющий личности</p>
                                                <input id="input_insert" placeholder="Номер удостверяющий личности"
                                                autocomplete="false"
                                                v-model="register.nomer"
                                                required
                                                >
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <div class="line">
                                                    <p>Кем выдан</p>
                                                    <input id="input_insert" 
                                                    placeholder="Кем выдан"
                                                    type="text"
                                                    v-model="register.kem_vidan"
                                                    required
                                                    >
                                                </div>
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Когда выдан</p>
                                                <input id="input_insert"
                                                type="date"
                                                placeholder="Кем выдан"
                                                v-model="register.kogda_vidan"
                                                required
                                                >
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Срок действия документа</p>
                                                <input id="input_insert"
                                                type="date"
                                                placeholder="Срок действия документа"
                                                v-model="register.srok_deistvie"
                                                required
                                                >
                                    </div>
                                
                                    <div class="line">
                                            <!-- <img src="../../assets/images/mail.png"> -->
                                            <p>Загрузить фото удостверяющий личности</p>
                                            <input 
                                            type="file" 
                                            id="first_path"
                                            ref="first_path"
                                            v-on:change="onChangeUpload()"
                                            >
                                    </div>
                                    <div class="arrow">
                                        <button class="next" @click="prevPage('first')">&#x3c;</button>
                                        <button class="next" @click="nextPage('third')">></button>
                                    </div>
                                    <div class="level">
                                        <span  class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                    </div>
                                </div>
                                <div class="first_step" v-show='third'>
                                    <div>
                                    <h4>Адрес и контактные данные</h4>
                                    <div class="line">
                                            <p>Страна</p>
                                            <div class="line-select">
                                                <multiselect 
                                                v-model="register.strana"
                                                :options="options"
                                                :searchable="true"
                                                :close-on-select="true"
                                                :show-labels="false"
                                                placeholder="Выбрать гражданство"
                                                class="searchableSelect__"
                                                ></multiselect>
                                                <p>&#128269;</p>
                                                </div>
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Адрес проживание</p>
                                                <input id="input_insert" type="text"
                                                v-model="register.adres_projivanie"
                                                >
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Адрес прописки</p>
                                                <input id="input_insert" type="text"
                                                v-model="register.adres_propiski"
                                                >
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Телефон</p>
                                                <input id="input_insert"
                                                    type="number"
                                                    v-model="register.contact_number"
                                                >
                                                <input id="input_insert"
                                                    type="number"
                                                    v-model="register.contact_number_2"
                                                >
                                    </div>
                                    </div>
                                    <div class="arrow">
                                        <button class="next" @click="prevPage('second')">&#x3c;</button>
                                        <button class="next" @click="nextPage('fourth')">&#x3e;</button>
                                    </div>
                                    <div class="level">
                                        <span  class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                    </div>
                                </div>
                                <div class="first_step" v-show='fourth'>
                                    <h4>Образование</h4>
                                    <div>
                                    
                                    <div class="double">
                                        <div class="first">
                                                <div class="line">
                                                    <p>Тип учебного заведения</p>
                                                    <div class="line-select">
                                                        <multiselect 
                                                        v-model="register.type_zavedenie"
                                                        :options="education"
                                                        :searchable="true"
                                                        :close-on-select="true"
                                                        :show-labels="false"
                                                        placeholder="Тип учебного заведения"
                                                        class="searchableSelect__"
                                                        ></multiselect>
                                                        <p>&#128269;</p>
                                                    </div>
                                                </div>
                                                <div class="line">
                                                            <!-- <img src="../../assets/images/mail.png"> -->
                                                        <p>Область месторасположения учебного заведения</p>
                                                        <div class="line-select">
                                                                <multiselect 
                                                                    v-model="register.oblast_zavedenie"
                                                                    :options="country"
                                                                    :searchable="true"
                                                                    :close-on-select="true"
                                                                    :show-labels="false"

                                                                    class="searchableSelect__"
                                                                ></multiselect>
                                                                <p>&#128269;</p>
                                                        </div>
                                                </div>
                                                <div class="line">
                                                        <p>Район месторасположения учебного заведения</p>
                                                        <div class="line-select" v-if="register.oblast_zavedenie!='no'">
                                                                <multiselect 
                                                                    v-model="register.raion_zavedenie"
                                                                    :options="list[register.oblast_zavedenie]"
                                                                    :searchable="true"
                                                                    :close-on-select="true"
                                                                    :show-labels="false"
                                                                    placeholder="Район месторасположения"
                                                                    class="searchableSelect__"
                                                                >
                                                                </multiselect>  
                                                                <p>&#128269;</p>  
                                                        </div>
                                                        <div class="line-select" v-else>
                                                                <multiselect 
                                                                    v-model="register.raion_zavedenie"
                                                                    :options="empty"
                                                                    :searchable="true"
                                                                    :close-on-select="true"
                                                                    :show-labels="false"
                                                                    placeholder="Тип учебного заведения"
                                                                    class="searchableSelect__"   
                                                                ></multiselect>
                                                                <p>&#128269;</p>    
                                                        </div>      
                                                </div>
                        
                                                <div class="line">
                                                        <p>Наименование учебного заведения</p>
                                                        <input id="input_insert"
                                                            type="text"
                                                            v-model="register.name_zavedenie"
                                                        >
                                                </div>
                                        </div>
                                    <div class="second">       
                                            <div class="line">
                                                    <p>Тип документа</p>
                                                    <select v-model="register.type_obrazovanie">
                                                        <option>обычный</option>
                                                        <option>с отличием</option>
                                                    </select>
                                            </div>
                                            <div class="line">
                                                    <p>Дата выдачи</p>
                                                    <input id="input_insert" 
                                                        type="date"
                                                        placeholder="дата выдачи"
                                                        v-model="register.date_vidachi_obr">
                                                    
                                            </div>
                                                <div class="line">
                                                        <p>Серия документа</p>
                                                        <input id="input_insert" 
                                                            type="number"
                                                            placeholder="Серия документа"
                                                            v-model="register.seria_document"
                                                            
                                                        >
                                                </div>
                                                <div class="line">
                                                        <p>Номер документа</p>
                                                        <input id="input_insert" 
                                                            type="number"
                                                            placeholder="Номер документа"
                                                            v-model="register.nomer_document"
                                                        >
                                                </div>
                                                <!-- <div class="line">
                                                        <p>Условно зачисленный</p>
                                                        <input id="input_insert" 
                                                            class="for_checkbox"
                                                            type="checkbox"
                                                            placeholder="дата выдачи"
                                                            v-model="register.uslovno_zachislen"
                                                        >
                                                </div> -->
                                                <div class="line">
                                                        <p>Загрузить аттестат</p>
                                                        <input 
                                                            type="file" 
                                                            id="second_path"
                                                            ref="second_path"
                                                            v-on:change="onChangeUpload()"
                                                        >
                                                </div>
                                            
                                            </div>
                                        </div>
                                        </div> 

                                        <div class="arrow">
                                            <button class="next" @click="prevPage('third')">&#x3c;</button>
                                            <button class="next" @click="nextPage('fifth')">&#x3e;</button>
                                        </div>
                                        <div class="level">
                                            <span  class="static"
                                            v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                            <span class="static"
                                            v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                            <span   class="static"
                                            v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                            <span   class="static"
                                            v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        </div>
                                </div>
                                
                                <div class="first_step" v-show='fifth'>
                                    <h4>Сертификат ЕнТ</h4>
                                    <div>
                                        <div class="line">
                                                        <p>Номер сертификата (или протокол собеседования)</p>
                                                        <input id="input_insert" 
                                                            type="text"
                                                            placeholder="Номер сертификата"
                                                            v-model="register.number_certificate"
                                                        >
                                        </div>
                                        <div class="line">
                                                        <p>Серия сертификата</p>
                                                        <input id="input_insert" 
                                                            
                                                            type="text"
                                                            placeholder="Серия сертификата"
                                                            v-model="register.seria_certificate"
                                                        >
                                        </div>
                                        <div class="line">
                                                        <p>Дата выдачи сертификата</p>
                                                        <input id="input_insert" 
                                                            type="date"
                                                            placeholder="Дата выдачи сертификата"
                                                            v-model="register.date_certificate"
                                                        >
                                        </div>
                                        <div class="line">
                                                        <p>Заргрузить сертификат</p>
                                                        <input 
                                                            type="file"
                                                            placeholder="Загрузить сертификат"
                                                            ref="third_path"
                                                            id="third_path"
                                                            v-on:change="onChangeUpload()"
                                                        >
                                        </div>
                                        <div class="line" >
                                            <p>на гранд / платное обучение / условно/ иностранцы</p>
                                            <div class="line-select">
                                            <multiselect 
                                                v-model="register.grand_platni"
                                                :options="grand_platni"
                                                :searchable="true"
                                                :close-on-select="true"
                                                :show-labels="false"
                                                placeholder="на гранд / платное обучение"
                                                class="searchableSelect__"
                                            ></multiselect>  
                                            <p>&#128269;</p> 
                                            </div>
                                        </div>
                                        <div class="line" >
                                            <p>Выберите на базе школы/колледжа/ВО</p>
                                            <div class="line-select">
                                            <multiselect 
                                                v-model="register.na_baze"
                                                :options="na_baze"
                                                :searchable="true"
                                                :close-on-select="true"
                                                :show-labels="false"
                                                placeholder="Выберите на базе школы/колледжа/ВО"
                                                class="searchableSelect__"
                                            ></multiselect>  
                                            <p>&#128269;</p> 
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div class="arrow">
                                        <button class="next" @click="prevPage('fourth')">&#x3c;</button>
                                        <button class="next" @click="nextPage('sixth')">&#x3e;</button>
                                    </div>
                                    <div class="level">
                                        <span  class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                    </div>
                                </div>
                                <div class="first_step" v-show='sixth'>
                                    <h4 style="padding-bottom: 10px">Свидетельство о гранте</h4>
                                    <div>
                                    <div class="double">
                                        <div class="first">
                                            <div class="line-check" style="padding-bottom: 10px">
                                                <p style="color:green; font-weight: bold">Номер свидетельства не обязательное поле *</p>
                                                <input id="input_insert" v-model="register.nomer_svidetelstva"
                                                required
                                                >
                                            </div>
                                            <div class="line-check">
                                                <p style="color:green; font-weight: bold">Загрузить свидетельства не обязательное поле *</p>
                                                <input
                                                     type="file"
                                                     placeholder="Загрузить свидетельства"
                                                     ref="fourth_path"
                                                     id="fourth_path"
                                                     v-on:change="onChangeUpload()"
                                                >
                                            </div>
                                            <h4>Квоты</h4>
                                            <div class="line ">
                                                    <p>Серпин</p>
                                                    <input id="input_insert"
                                                    class="for_checkbox"
                                                    type="checkbox"
                                                    v-model="register.serpin"
                                                    >
                                            </div>
                                            <div class="line">
                                                    <p>дети сироты</p>
                                                    <input id="input_insert"
                                                    class="for_checkbox"
                                                    type="checkbox"
                                                    v-model="register.deti_siroti"
                                                    >
                                            </div>
                                            <div class="line">
                                                    <p>Инвалид 1-й группа</p>
                                                    <input id="input_insert"
                                                    class="for_checkbox"
                                                    type="checkbox"
                                                    v-model="register.invalid_pervi"
                                                    >
                                            </div>
                                            
                                        <div class="line">
                                                <p>Инвалид 2-й группа</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.invalid_vtoroi"
                                                >
                                        </div>
                                        <div class="line">
                                                <p>Инвалид с детства</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.invalid_sdetstva"
                                                >
                                        </div>
                                        <div class="line">
                                                <p>Квота для лиц приравненных по льготам и </p>
                                                <p>гарантиям к участникам и инвалидам ВОВ</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.kvota_invalidam"
                                                >
                                        </div>
                                        <div class="line">
                                                <p>Сельская квота</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.selskaya_kvota"
                                                >
                                        </div>
                                        <div class="line last-line">
                                                <p>Квота для лиц казахской национальностей,</p>
                                                <p> не являющихся гражданами РК</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.kvota_negrajdan"
                                                >
                                        </div>
                                        </div>
                                    
                                    </div>
                                    
                                    </div>
                                
                                    <div class="arrow">
                                        <button class="next" @click="prevPage('fifth')">&#x3c;</button>
                                        <button class="next" @click="nextPage('seventh')">&#x3e;</button>
                                    </div>
                                    
                                    <div class="level">
                                        <span  class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                    </div>
                            
                                </div>
                                <div class="first_step" v-show='seventh'>
                                    <h4>Награды</h4>
                                    <div class="nagradi">
                                    <div class="double">
                                    <div class="first">
                                                <div class="line">
                                                <p>победитель международной олимпиады</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_mej_olimp"
                                                >
                                            </div>
                                            <div class="line">
                                                <p>победитель республиканской олимпиады</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_resp_olimp"
                                                >
                                            </div>
                                            <div class="line">
                                                <p>знак "Алтын белгi"</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.znak_altin"
                                                >
                                            </div>
                                                <div class="line">
                                                <p>аттестат особого образца</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.atestat_osobo"
                                                >
                                            </div>
                                            <div class="line">
                                                <p>победитель международного научного конкурса</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_mej_nau"
                                                >
                                            </div>
                                                <div class="line">
                                                <p>победитель республиканского научного конкурса</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_resp_nau"
                                                >
                                            </div>
                                                <div class="line">
                                                <p>победитель республиканского научного конкурса</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_mej_sport"
                                                >
                                            </div>
                                                <div class="line">
                                                <p>победитель международного спортивного соревнования</p>
                                                <p>и победитель республиканских спортивных соревнова</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_gorod_nau"
                                                >
                                            </div>
                                                <div class="line">
                                                <p>победитель городского научного конкурса</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_gorod_olimp"
                                                >
                                            </div>
                                    </div>
                                    <div class="second"> 
                                            <div class="line">
                                                <p>победитель городской олимпиады</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_gorod_olimp"
                                            >
                                            </div>
                                                <div class="line">
                                                <p>победитель областного научного конкурса</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_obl_nau_konkurs"
                                                >
                                            </div>
                                                <div class="line">
                                                <p>победитель областной олимпиады</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_obl_olimp"
                                                >
                                            </div>
                                            <div class="line">
                                                <p>побидитель международной выставки</p>
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.pob_mej_vistavki"
                                                >
                                            </div>
                                    </div>
                                        
                                    </div>
                                    </div>
                                    <div class="arrow">
                                        <button class="next" @click="prevPage('sixth')">&#x3c;</button>
                                        <button class="next" @click="nextPage('eigth')">&#x3e;</button>
                                    </div>
                                    
                                    <div class="level">
                                        <span  class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                    </div>
                                                
                                </div>
                                <div class="first_step" v-show='eigth'>
                                    <h4>Специальности</h4>
                                    <div>
                                    <div class="double">
                                        <div class="first">
                                            <div class="line">
                                                <p>Уровень обучения</p>
                                                <div class="line-select">
                                                <multiselect 
                                                    v-model="register.uroven_obuchenie"
                                                    :options="uroven_obuchenie"
                                                    :searchable="true"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Уровень обучения"
                                                    class="searchableSelect__"
                                                ></multiselect>  
                                                <p>&#128269;</p> 
                                                </div>
                                            </div>
                                            <div class="line">
                                                <p>Ступень обучения</p>
                                                <div class="line-select">
                                                <multiselect 
                                                    v-model="register.stupen_obuchenie"
                                                    :options="stupen_obuchenie"
                                                    :searchable="true"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    placeholder="Ступень обучения"
                                                    class="searchableSelect__"
                                                ></multiselect>  
                                                <p>&#128269;</p> 
                                                </div>
                                            </div>
                                            <div class="line">
                                            <p>Форма обучения</p>
                                            <div class="line-select">
                                            <multiselect 
                                                v-model="register.forma_obuchenie"
                                                :options="forma_obuchenie"
                                                :searchable="true"
                                                :close-on-select="true"
                                                :show-labels="false"
                                                placeholder="Форма обучения"
                                                class="searchableSelect__"
                                            ></multiselect>  
                                            <p>&#128269;</p> 
                                            </div>
                                            </div>
                                        
                                        </div>
                                        <div class="second">
                                            

                                        <div class="line">
                                            <p>Языковое отделение</p>
                                            <div class="line-select">
                                            <multiselect 
                                                v-model="register.language_otdelenie"
                                                :options="yazik_otdelenie"
                                                :searchable="true"
                                                :close-on-select="true"
                                                :show-labels="false"
                                                placeholder="Языковое отделение"
                                                class="searchableSelect__"
                                            ></multiselect>  
                                            <p>&#128269;</p> 
                                            </div>
                                        </div>

                                        <div class="line">     
                                            <p>Факультет</p>
                                            <div class="line-select">
                                            <multiselect 
                                                v-model="register.faculty"
                                                :options="faculty"
                                                :searchable="true"
                                                :close-on-select="true"
                                                :show-labels="false"
                                                placeholder="Факультет"
                                                class="searchableSelect__"
                                            ></multiselect>  
                                            <p>&#128269;</p> 
                                            </div>
                                        </div>
                                        
                                        <div class="line" v-if="register.faculty!='Выберите факультет'">
                                    
                                            <p>Специальность</p>
                                            <div class="line-select">
                                                <multiselect 
                                                v-model="register.specialnost"
                                                :options="list[register.faculty]"
                                                :searchable="true"
                                                :close-on-select="true"
                                                :show-labels="false"
                                                placeholder="Специальность"
                                                class="searchableSelect__"
                                                ></multiselect>  
                                                <p>&#128269;</p>     
                                            </div>
                                            
                                        </div>
                                        <div class="line" v-else>
                                        
                                            <p>Специальность</p>
                                            <div class="line-select">
                                            <multiselect 
                                                v-model="register.specialnost"
                                                :options="empty"
                                                :searchable="true"
                                                :close-on-select="true"
                                                :show-labels="false"
                                                placeholder="Специальность"
                                                class="searchableSelect__"
                                            ></multiselect>  
                                            <p>&#128269;</p> 
                                            </div>
                                        </div>
                                        
                                    
                                        </div>
                                    </div>
                                
                                    </div>
                                    
                                    <div class="arrow">
                                        <button class="next" @click="prevPage('seventh')">&#x3c;</button>
                                    </div>
                                    
                                    <div class="level">
                                        <span  class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                        <span   class="static"
                                        v-bind:class="{ disable: disable, 'enable': enable }"></span>
                                    </div>
                             
                                    <button class="sign_in" @click="confirmation"><p>Отправить</p></button>
                                
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
        </template>
    <style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

    <script> 
            import Header from './Header.vue';
            import Datepicker from 'vuejs-datepicker';
            import { ru } from 'vuejs-datepicker/dist/locale';
            import Multiselect from 'vue-multiselect'

    
        //   import PhoneInput from './PhoneInput.vue';
        export default {
            components: { Multiselect },
            data() {
            return {
                loader: false,
                first_path:'',
                second_path: '',
                third_path: '',
                fourth_path: '',
                value_2: null,
                empty: [],
                options: ['КАЗАХСТАН','АВСТРАЛИЯ','АВСТРИЯ','АЗЕРБАЙДЖАН','АЛАНДСКИЕ ОСТРОВА','АЛБАНИЯ','АЛЖИР','АМЕРИКАНСКОЕ САМОА','АНГИЛЬЯ (БРИТ.)','АНГОЛА','АНДОРРА','АНТАРКТИДА','АНТИГУА И БАРБУДА','АРГЕНТИНА','АРМЕНИЯ','АРУБА','АФГАНИСТАН','БАГАМЫ','БАНГЛАДЕШ','БАРБАДОС','БАХРЕЙН','БЕЛАРУСЬ','БЕЛИЗ','БЕЛЬГИЯ','БЕНИН','БЕРМУДЫ','БОЛГАРИЯ','БОЛИВИЯ','БОНЭЙР, СИНТ-ЭСТАТИУС И САБА','БОСНИЯ И ГЕРЦЕГОВИНА','БОТСВАНА','БРАЗИЛИЯ','БРИТАНСКАЯ ТЕРРИТОРИЯ В ИНДИЙСКОМ ОКЕАНЕ','БРУНЕЙ-ДАРУССАЛАМ','БУРКИНА-ФАСО','БУРУНДИ','БУТАН','ВАНУАТУ','ВЕНГРИЯ','ВЕНЕСУЭЛА','ВИРГИНСКИЕ ОСТРОВА (БРИТ.)','ВИРГИНСКИЕ ОСТРОВА, США','ВЬЕТНАМ','ГАБОН','ГАИТИ','ГАЙАНА','ГАМБИЯ','ГАНА','ГВАДЕЛУПА (ФР.)','ГВАТЕМАЛА','ГВИНЕЯ','ГВИНЕЯ-БИСАУ','ГЕРМАНИЯ','ГЕРНСИ','ГИБРАЛТАР (БРИТ.)','ГОНДУРАС','ГОНКОНГ','ГРЕНАДА','ГРЕНЛАНДИЯ','ГРЕЦИЯ','ГРУЗИЯ','ГУАМ (США)','ДАНИЯ','ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА КОНГО','ДЖЕРСИ','ДЖИБУТИ','ДОМИНИКА','ДОМИНИКАНСКАЯ РЕСПУБЛИКА','ЕГИПЕТ','ЗАМБИЯ','ЗАПАДНАЯ САХАРА','ЗИМБАБВЕ','ИЗРАИЛЬ','ИНДИЯ','ИНДОНЕЗИЯ','ИОРДАНИЯ','ИРАК, РЕСПУБЛИКА ИРАК','ИРАН, ИСЛАМСКАЯ РЕСПУБЛИКА','ИРЛАНДИЯ','ИСЛАНДИЯ','ИСПАНИЯ','ИТАЛИЯ','ЙЕМЕН','КАБО-ВЕРДЕ','КАМБОДЖА','КАМЕРУН','КАНАДА','КАТАР','КЕНИЯ','КИПР','КИРИБАТИ','КИТАЙ','КОКОСОВЫЕ (КИЛИНГ) ОСТРОВА','КОЛУМБИЯ','КОМОРЫ','КОНГО','КОРЕЯ, НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА','КОСТА-РИКА','КОТ-Д’ИВУАР','КУБА','КУВЕЙТ','КЫРГЫЗСТАН','КЮРАСАО','ЛАОССАЯ НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА','Латвийская РесПублика','ЛЕСОТО','ЛИБЕРИЯ','ЛИВАН','ЛИВИЙСКАЯ АРАБСКАЯ ДЖАМАХИРИЯ','ЛИТВА','ЛИХТЕНШТЕЙН','ЛЮКСЕМБУРГ','МАВРИКИЙ','МАВРИТАНИЯ','МАДАГАСКАР','МАЙОТТА','МАКАО','МАКЕДОНИЯ','МАЛАВИ','МАЛАЙЗИЯ','МАЛИ','МАЛЫЕ ТИХООКЕАНСКИЕ ОТДАЛЕННЫЕ ОСТРОВА СОЕДИНЕННЫХ ШТАТОВ','МАЛЬДИВЫ','МАЛЬТА','МАРОККО','МАРТИНИКА (ФР.)','МАРШАЛЛОВЫ ОСТРОВА','МЕКСИКА','МИКРОНЕЗИЯ, ФЕДЕРАТИВНЫЕ ШТАТЫ','МОЗАМБИК','МОЛДОВА, РЕСПУБЛИКА','МОНАКО','МОНГОЛИЯ','МОНТСЕРРАТ(БРИТ.)','МЬЯНМА','НАМИБИЯ','НАУРУ','НЕПАЛ','НИГЕР','НИГЕРИЯ','НИДЕРЛАНДЫ','НИКАРАГУА','НИУЭ','НОВАЯ ЗЕЛАНДИЯ','НОВАЯ КАЛЕДОНИЯ (ФР.)','НОРВЕГИЯ','ОБЪЕДИНЕННЫЕ АРАБСКИЕ ЭМИРАТЫ','О-В МЕН','ОМАН','ОСТРОВ БУВЕ','ОСТРОВ НОРФОЛК','ОСТРОВ РОЖДЕСТВА','ОСТРОВ СВЯТОЙ ЕЛЕНЫ','ОСТРОВ ХЕРД И ОСТРОВА МАКДОНАЛЬД','ОСТРОВА КАЙМАН','ОСТРОВА КУКА','ОСТРОВА ТЕРКС И КАЙКОС','ПАКИСТАН','ПАЛАУ(США)','ПАЛЕСТИНСКАЯ ТЕРРИТОРИЯ, ОККУПИРОВАННАЯ','ПАНАМА','ПАПСКИЙ ПРЕСТОЛ (ГОСУДАРСТВО-ГОРОД ВАТИКАН)','ПАПУА-НОВАЯ ГВИНЕЯ','ПАРАГВАЙ','ПЕРУ','ПИТКЭРН (БРИТ.)','ПОЛЬША','ПОРТУГАЛИЯ','ПУЭРТО-РИКО','РЕСПУБЛИКА КОРЕЯ','РЕСПУБЛИКА ЛАТВИЯ','РЕЮНЬОН (ФР.)','РОССИЯ','РУАНДА','РУМЫНИЯ','САМОА','САН-МАРИНО','САН-ТОМЕ И ПРИНСИПИ','САУДОВСКАЯ АРАВИЯ','СВАЗИЛЕНД','СЕВЕРНЫЕ МАРИАНСКИЕ ОСТРОВА (США)','СЕЙШЕЛЫ','СЕН-БАРТЕЛЕМИ','СЕНЕГАЛ','СЕН-МАРТЕН','СЕН-МАРТЕН (НиДерлаНДская часть)','СЕНТ-ВИНСЕНТ И ГРЕНАДИНЫ','СЕНТ-КИТС И НЕВИС','СЕНТ-ЛЮСИЯ','СЕНТ-ПЬЕР И МИКЕЛОН','СЕРБИЯ','СИНГАПУР','СИРИЙСКАЯ АРАБСКАЯ РЕСПУБЛИКА','СЛОВАКИЯ','СЛОВЕНИЯ','СОЕДИНЕННОЕ КОРОЛЕВСТВО','СОЕДИНЕННЫЕ ШТАТЫ АМЕРИКИ','СОЛОМОНОВЫ ОСТРОВА','СОМАЛИ','СУДАН','СУДАН','СУРИНАМ','СЬЕРРА-ЛЕОНЕ','ТАДЖИКИСТАН','ТАИЛАНД','ТАЙВАНЬ (КИТАЙ)','ТАНЗАНИЯ ОБЪЕДИНЕННАЯ РЕСПУБЛИКА','ТЕРРИТОРИИ, НЕ УКАЗАННЫЕ В ДРУГИХ МЕСТАХ','ТИМОР-ЛЕСТЕ','ТОГО','ТОКЕЛАУ (ЮНИОН) (Н.ЗЕЛ.)','ТОНГА','ТРИНИДАД И ТОБАГО','ТУВАЛУ','ТУНИС','ТУРКМЕНИСТАН','ТУРЦИЯ','УГАНДА','УЗБЕКИСТАН','УКРАИНА','УОЛЛИС И ФУТУНА','УРУГВАЙ','ФАРЕРСКИЕ ОСТРОВА','ФИДЖИ','ФИЛИППИНЫ','ФИНЛЯНДИЯ','ФОЛКЛЕНДСКИЕ (МАЛЬВИНСКИЕ) ОСТРОВА','ФРАНЦИЯ','ФРАНЦУЗСКАЯ ГВИАНА','ФРАНЦУЗСКАЯ ПОЛИНЕЗИЯ','ФРАНЦУЗСКИЕ ЮЖНЫЕ ТЕРРИТОРИИ','ХОРВАТИЯ','ЦЕНТРАЛЬНО-АФРИКАНСКАЯ РЕСПУБЛИКА','ЧАД','ЧЕРНОГОРИЯ','ЧЕШСКАЯ РЕСПУБЛИКА','ЧИЛИ','ШВЕЙЦАРИЯ','ШВЕЦИЯ','ШПИЦБЕРГЕН И ЯН-МАЙЕН','ШРИ-ЛАНКА','ЭКВАДОР','ЭКВАТОРИАЛЬНАЯ ГВИНЕЯ','ЭЛЬ-САЛЬВАДОР','ЭРИТРЕЯ','ЭСТОНИЯ','ЭФИОПИЯ','ЮЖНАЯ АФРИКА','ЮЖНАЯ ДЖОРДЖИЯ И ЮЖНЫЕ САНДВИЧЕВЫ ОСТРОВА','ЮЖНЫЙ СУДАН','ЯМАЙКА','ЯПОНИЯ'],
                nations: ['аpмяне','абхазцы','аварцы','австрийцы','адыгейцы','азербайджанцы','албанцы','алтайцы','американцы','англичане','арабы','армяне','ассирийцы','афганцы','балкарцы','башкиры','белорусы','болгары','болкары','буряты','венгры','вьетнамцы','гагаузы','голландцы','греки','грузины','даргинцы','датчане','др.национальности','дунгане','евреи','звены','ижорцы','ингуши','иранцы','испанцы','итальянцы','кабардинцы','Казах','калмыки','каракалпаки','карелы','киргизы','китайцы','коми','корейцы','крымчаки','кубинцы','кумыки','курды','латыши','лачки','лезгины','литовцы','манси','молдоване','монголы','мордва','мориец','нагайцы','нанайцы','нар.индии и пакест.','народности дагестана','немцы','ненец','осетины','персы','поляки','румыны','русские','сербы','словаки','таджики','татары','тувинцы','турки','туркмены','удегейцы','удмурты','узбеки','уйгуры','украинцы','финны','французы','хакас','халка-монголы','ханты','хорваты','цыгане','черкес','чехи','чеченцы','чуваши','чукчи','шорцы','эвенки','эскимосы','эстонцы','якуты','японцы'],
                education: ["ВУЗ", "Гимназия", "колледж", "лицей", "Общ.образ.школа нац.", "Общеобразоват. школа", "Общеобразовательная казахская школа", "Общеобразовательная русская школа", "пТУ на базе осн.ступ", "пШ", "ССУЗ на базе основ.ступ.", "ССУЗ на базе стар.ступ.", "школа"],
                country: ["Выбрать", "Акмолинская", "Актюбинская", "Алматинская", "Атырауская", "Восточно-Казахстанская", "Алматы", "Астана", "другая страна", "Жамбылская", "Западно-Казахстанская", "Карагандинская", "Кустанайская", "Кызылординская", "Мангыcтауская", "павлодарская", "Северо-Казахстанская", "Семипалатинская", "Южно-Казахстанская"],
                list: {
                    'Актюбинская': ["не выбран", "Айтекебийский", "Алгинский", "Байганинский", "Иргизский", "Каргалинский", "Мартукский", "Мугалжарский", "Темирский", "Уилский", "Кобдинский", "Хромтауский", "Шалкарский", "г.Актобе"],
                    'Акмолинская': ["не выбран", "Аккольский", "Аршалынский", "Астраханский", "Атбасарский", "Буландынский", "Егиндыкольский", "Ерейментауский", "Есильский", "Жаксынский", "Жаркаинский", "Коргалжынский", "Сандыктауский", "Целиноградский", "Шортандынский", "г.Степногорск", "г.Кокшетау", "Щучинский", "Енбекшильдерский", "Зерендинский"],
                    'Алматинская':["не выбран", "Аксуский", "Алакольский", "Балхашский", "Енбекшиказахский", "Жамбылский", "Илийский", "Карасайский", "Каратальский", "Кербулакский", "Коксуский", "панфиловский", "Райымбекский", "Саркандский", "Талгарский", "Ескельдинский", "Уйгурский", "г.Капчагай", "г.Талдыкорган", "г.Текели"],
                    'Атырауская': ["не выбран", "г.Атырау", "Жылыойский", "Исатайский", "Индерский", "Кзылкогинский", "Курмангазинский", "Макатский", "Махамбетский"],
                    'Восточно-Казахстанская':["не выбран", "Абайский", "Аягузский", "Бескарагайский", "Бородулихинский", "Глубоковский", "Жарминский", "Зайсанский", "Зыряновский", "Катон-Карагайский", "Кокпектинский", "Курчумский", "Тарбагатайский", "Уланский", "Урджарский", "Шемонаихинский", "г.Курчатов", "г.Риддер", "г.Семипалатинск", "г.Усть-Каменогорск"],
                    'Алматы':["не выбран", "Алмалинский", "Ауэзовский", "Бостандыкский", "Жетысуский", "Медеуский", "Турксибский", "городской", "республиканский", "военные", "Алатауский"],
                    'Астана':["не выбран", "Алматы", "Сары-Арка", "городские", "военные"],
                    
                    'Филологический': ["Выбрать", "5B011700 Казахский язык и литература", "5B012100 Казахский язык и литература в школах с неказахским языком обучения", "5B011800 Русский язык и литература", "5B012200 Русский язык и литература в школах с нерусским языком обучения", "5B020500 Филология"],
                    "Исторический":  ["Выбрать", "5B011600 География", "5B011400 История", "5B090200 Туризм", "5B020300 История", "5B050500 Регионоведение", "5B012900 География-история", "5B013000 История-Религиоведение"],
                    "педагогика" :  ["Выбрать", "5B010300 педагогика и психология", "5B010100 дошкольное обучение и воспитание", "5B010500 дефектология", "5B010200 педагогика и методика начального обучения", "5B012300 Социальная педагогика и самопознание", "5B050300 психология"],
                    "Иностранных языков": ["Выбрать", "5B011900 Иностранный язык: два иностранных языка", "5B021000 Иностранная филология", "5B020700 переводческое дело"],
                    "Общеуниверситетские":[""],
                    "Физико-математический": ["Выбрать", "5B010900 Математика", "5B011100 Информатика", "5B011000 Физика", "5B060400 Физика", "5B060200 Информатика", "5B070300 Информационные системы", "5B060100 Математика", "5B070400 Вычислительная техника и программное обеспечение", "5B070500 Математическое и компьютерное моделирование", "5B012600 Математика-физика"],
                    "Естествознания": ["Выбрать", "5B011300 Биология", "5B011200 Химия", "5B060700 Биология", "5B060800 Экология", "5B072000 Химическая технология неорганических веществ", "5B060600 Химия", "5B072100 Химическая технология органических веществ"], 
                    "Технический": ["Выбрать", "5B070900 Металлургия", "5B090100 Организация перевозок, движения и эксплуатация транспорта", "5B071300 Транспорт, транспортная техника и технологии", "5B070800 нефтегазовое дело", "5B070700 Горное дело", "5B072900 Строительство"], 
                    "Экономики и права":["Выбрать", "5B011500 Основы права и экономики", "5B030100 Юриспруденция", "5B051000 Государственное и местное управление", "5B051100 Маркетинг", "5B050600 Экономика", "5B050700 Менеджмент", "5B050800 Учет и аудит", "5B050900 Финансы", "5B051300 Мировая экономика"], 
                    "профессионально-творческий":["Выбрать", "5B011500 Основы права и экономики", "5B030100 Юриспруденция", "5B051000 Государственное и местное управление", "5B051100 Маркетинг", "5B050600 Экономика", "5B050700 Менеджмент", "5B050800 Учет и аудит", "5B050900 Финансы", "5B051300 Мировая экономика"],
                    "Выберите область": ["Выберите район"]
                },
                type_postuplenie:  ["Выбрать", "договор", "Государственный образовательный грант", "Грант Ректора", "договор (грант Акима)", "образовательный грант Сары Алпысовны", "Гос.обр.заказ нИИ 'Ғылым Ордасы'", "Государственный образовательный грант (СОп)"],
                forma_oplaty: ["по договору","государственные образовательные гранты"],
                uroven_obuchenie:  ["первое высшее образование", "Второе высшее образование", "первое высшее сокращенное образование", "научно-педагогическое направление", "профильное направление"],
                stupen_obuchenie: ["бакалавриат","магистратура","доктарантура(PhD)"],
                forma_obuchenie: ["Очная форма обучения","дистанционная",""],
                yazik_otdelenie: ["казахское","русское"],
                faculty:  ["Выбрать", "Филологический", "Исторический", "педагогика", "Иностранных языков", "Общеуниверситетские", "Физико-математический", "Естествознания", "Технический", "Экономики и права", "профессионально-творческий"],
                grand_platni : ["на гранд","платное обучение","условно","иностранцы"],
                osnovanie_dlya_postuplenie: ["не указано", "зачислен по Алтын белгi", "зачислен как призер олимпиад", "зачислен по квоте сельских школ", "зачислен по квоте диаспоры", "зачислен по квоте сиротам", "зачислен по квоте инвалидам", "зачислен как призер конкурсов и научных проектов", "зачислен по гранту акимата", "зачислен по гранту Ректора"],
                na_baze : ["на базе школы","на базе колледжа","на базе ВО"],
                //  "не выбран", "Байзакский", "Жамбылский", "Жуалынский", "Кордайский", "Луговской", "Меркенский", "Мойынкумский", "Сарысуский", "Таласский", "Шуйский", "г.Тараз", "г.Шу"
                //  "не выбран", "Акжаикский", "Бурлинский", "Жангалинский", "Жанибекский", "Зеленовский", "Казталовский", "Каратобинский", "Сырымский", "Таскалинский", "Теректинский", "Букей урдинский", "Чингирлауский", "г.Уральск"
                //  "не выбран", "Абайский", "Актогайский", "Бухар-Жырауский", "Жанааркинский", "Каркаралинский", "нуринский", "Осакаровский", "Улытауский", "Шетский", "г.Балхаш", "г.Жезказган", "г.Караганда", "г.Каражал", "г.приозерск", "г.Сарань", "г.Сатпаев", "г.Темиртау", "г.Шахтинск", "военные"
                zero: true,
                first: false,
                second: false,
                third: false,
                fourth: false,
                fifth: false,
                sixth: false,
                seventh: false,
                enable: false,
                eigth: false,
                disable: true,
            date: {
                value: '',
                ru: ru, 
                disabledDates: {
                to: new Date(1902, 1, 1),  
                from: new Date(2003, 0, 0),
                }
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
                oblast_zavedenie  : 'Выберите область', 
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
                faculty  : 'Выберите факультет',  
                specialnost  : "",  
                who_registered  : "",  
                data_about_who  : "",
                grand_platni: "",
                na_baze: ""
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
            inform: '',
            access_token: ''
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
            showAlert(word) {
                const options = {title: 'Info', size: 'sm'}
                this.$dialogs.alert(word, options)
                .then(res => {
                
                })
            },
            validIsempty(word) {
                if(word=='' || typeof word ==='undefined'){
                    return false;
                }
                else {
                    return true
                }
            },
            nextPage(number) {
                if (number=="first") {
                    this.enable = true;
                    this.disable = false;
                    if(this.validIsempty(this.register.iin)==false){
                        this.showAlert("Заполните ИИН");
                    }
                    else if((this.register.iin+"").length!=12){
                        this.showAlert("ИИН должен быть 12-значным");
                    }
                    else if(this.validIsempty(this.register.password)==false) {
                        this.showAlert("Заполните пароль");
                    }
                    else if(this.register.password.length<6){
                        this.showAlert("Длина пароля должно не менее 6");
                    }
                    else {
                        this.zero = false;
                        this.first = true;
                    }
                }
                else if (number=="second") {
                    if(this.validIsempty(this.register.name)==false){
                        this.showAlert("Заполните имю");
                    }
                    else if(this.validIsempty(this.register.surname)==false){
                        this.showAlert("Заполните фамилию");
                    }
                   
                    else if(this.validIsempty(this.register.date_birth)==false){
                        this.showAlert("Выберите дату рождение");
                    }
                    else if(this.validIsempty(this.register.gender)==false){
                        this.showAlert("Выберите пол");
                    }
                    else if(this.validIsempty(this.register.citizenship)==false){
                        this.showAlert("Выберите гражданство");
                    }
                    else if(this.validIsempty(this.register.nationality)==false) {
                        this.showAlert("Выберите национальность");
                    }
                    else if(this.validIsempty(this.register.family_position)==false) {
                        this.showAlert("Выберите семейное положение");
                    }
                 
                    else {
                        this.second = true;
                        this.first = false;
                    }
                }
                else if (number=="third"){
                   
                    if(this.validIsempty(this.register.document_type)==false){
                        this.showAlert("Выберите тип документа");
                    }
                    else if(this.validIsempty(this.register.nomer)==false){
                        this.showAlert("Заполните номер удостверяющий личности");
                    }
                    else if((this.register.nomer+"").length!=9){
                        this.showAlert("Номер удостверяющий личности должен быть 9-значным");
                    }
                    else if(this.validIsempty(this.register.kem_vidan)==false){
                        this.showAlert("Заполните кем выдан");
                    }
                    else if(this.validIsempty(this.register.kogda_vidan)==false){
                        this.showAlert("Выберите когда выдан");
                    }
                    else if(this.validIsempty(this.register.srok_deistvie)==false){
                        this.showAlert("Выберите cрок действия документа");
                    }
                    else if(this.validIsempty(this.first_path)==false) {
                         this.showAlert("Загрузите фото удостверяющий личности");
                    }
                    else {
                        this.third = true;
                        this.second = false;
                    }   
                }
                else if (number=="fourth"){
                    if(this.validIsempty(this.register.strana)==false){
                        this.showAlert("Выберите страну");
                    }
                    else if(this.validIsempty(this.register.adres_projivanie)==false){
                        this.showAlert("Заполните адрес проживание");
                    }
                    else if(this.validIsempty(this.register.adres_propiski)==false){
                        this.showAlert("Заполните адрес прописки");
                    }
                    else if(this.validIsempty(this.register.contact_number)==false){
                        this.showAlert("Заполните телефон");
                    }
                    else if(this.validIsempty(this.register.srok_deistvie)==false){
                        this.showAlert("Выберите cрок действия документа");
                    }
               
                    else {
                        this.third = false;
                        this.fourth = true;  
                    }
                }
                else if (number=="fifth"){
                    if(this.validIsempty(this.register.type_zavedenie)==false){
                        this.showAlert("Выберите тип учебного заведения");
                    }
                    else if(this.validIsempty(this.register.oblast_zavedenie)==false){
                        this.showAlert("Выберите область месторасположения учебного заведения");
                    }
                    else if(this.validIsempty(this.register.raion_zavedenie)==false){
                        this.showAlert("Выберите район месторасположения учебного заведения");
                    }
                    else if(this.validIsempty(this.register.name_zavedenie)==false){
                        this.showAlert("Заполните наименование учебного заведения");
                    }
                    else if(this.validIsempty(this.register.type_obrazovanie)==false){
                        this.showAlert("Заполните тип документа");
                    }
                    else if(this.validIsempty(this.register.date_vidachi_obr)==false){
                        this.showAlert("Выберите дата выдачи");
                    }
                    else if(this.validIsempty(this.register.seria_document)==false){
                        this.showAlert("Заполните серия документа");
                    }
                    else if(this.validIsempty(this.register.nomer_document)==false){
                        this.showAlert("Заполните номер документа");
                    }   
                    else if(this.validIsempty(this.second_path)==false) {
                         this.showAlert("Загрузитe аттестат");
                    }
                    else {
                        this.fourth = false;
                        this.fifth = true  
                    }
                    
                }
                else if (number=="sixth"){
                    if (this.validIsempty(this.register.number_certificate)==false) {
                        this.showAlert("Заполните номер сертификата (или протокол собеседования)");
                    }
                    else if(this.validIsempty(this.register.seria_certificate)==false){
                        this.showAlert("Заполните серия сертификата");
                    }
                    else if(this.validIsempty(this.register.date_certificate)==false){
                        this.showAlert("Заполните дата выдачи сертификата");
                    }
                    else if(this.validIsempty(this.third_path)==false){
                        this.showAlert("Загрузите сертификат");
                    }
                    else if(this.validIsempty(this.register.grand_platni)==false){
                        this.showAlert("Выберите на гранд / платное обучение/условно");
                    }
                    else if(this.validIsempty(this.register.na_baze)==false){
                        this.showAlert("Выберите на базе школы/колледжа/ВО");
                    }
                    else {
                        this.fifth = false;
                        this.sixth = true; 
                    } 
                }
                else if (number=="seventh"){
                        this.sixth = false;
                        this.seventh = true;
                }
                else if (number=="eigth"){
                    this.seventh = false;
                    this.eigth = true;
                }
            },
            prevPage(number) {

                if (number=="zero") 
                {
                    // this.enable = true;
                    // this.disable = false;
                    this.first = false;
                    this.zero = true;
                }
                else if (number=="first") 
                {
                    // this.enable = true;
                    // this.disable = false;

                    this.second = false;
                    this.first= true;
                }
                else if (number=="second") 
                {
                    this.third = false;
                    this.second = true;
                }
                else if (number=="third")
                {
                    this.fourth = false;
                    this.third = true;
                }
                else if (number=="fourth")
                {
                    this.fifth = false;
                    this.fourth = true;
                }
                else if (number=="fifth")
                {
                    this.sixth = false;
                    this.fifth = true;
                }
                else if (number=="sixth")
                {
                    this.sixth = true;
                    this.seventh = false;
                }
            
                else if (number=="seventh")
                {
                    this.seventh = true;
                    this.eigth = false;
                }
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
            onChangeUpload(){
                this.first_path = this.$refs.first_path.files[0];
                this.second_path = this.$refs.second_path.files[0];
                this.third_path = this.$refs.third_path.files[0];
                this.fourth_path = this.$refs.fourth_path.files[0];
            },
            confirmation(){
                if(this.validIsempty(this.register.uroven_obuchenie)==false){
                    this.showAlert("Выберите уровень обучение");
                }
                else if(this.validIsempty(this.register.stupen_obuchenie)==false){
                    this.showAlert("Выберите ступень обучение");
                }
                else if(this.validIsempty(this.register.forma_obuchenie)==false){
                    this.showAlert("Выберите форма обучение");
                }
                else if(this.validIsempty(this.register.language_otdelenie)==false){
                    this.showAlert("Выберите языковое отделение");
                }
                else if(this.validIsempty(this.register.faculty)==false){
                    this.showAlert("Выберите факультет");
                }
                else if(this.validIsempty(this.register.specialnost)==false){
                    this.showAlert("Выберите специальность");
                }
                else {
                        this.loader =  true 
                        let formData = new FormData();
                            formData.append('first', this.first_path);
                            formData.append('second', this.second_path);
                            formData.append('third', this.third_path);
                            formData.append('fourth', this.fourth_path);
                        let obj = {
                                "surname": this.register.surname,
                                "name": this.register.name,
                                "third_name":  this.register.third_name, 
                                "date_birth": this.register.date_birth,
                                "gender": this.register.gender,
                                "citizenship": this.register.citizenship, 
                                "nationality": this.register.nationality,
                                "family_position": this.register.family_position,
                                "document_type": this.register.document_type,
                                "iin": this.register.iin,
                                "nomer": this.register.nomer,
                                "kem_vidan": this.register.kem_vidan,
                                "kogda_vidan": this.register.kogda_vidan,
                                "srok_deistvie": this.register.srok_deistvie,
                                "zagruzit_udastak": this.register.zagruzit_udastak,
                                "strana": this.register.strana,
                                "adres_projivanie": this.register.adres_projivanie,
                                "adres_propiski": this.register.adres_propiski,
                                "contact_number": this.register.contact_number,
                                "type_zavedenie": this.register.type_zavedenie,
                                "oblast_zavedenie": this.register.oblast_zavedenie,
                                "raion_zavedenie": this.register.raion_zavedenie,
                                "name_zavedenie": this.register.name_zavedenie,
                                "type_obrazovanie": this.register.type_obrazovanie,
                                "date_vidachi_obr": this.register.date_vidachi_obr,
                                "seria_document": this.register.seria_document,
                                "nomer_document": this.register.nomer_document,
                                "uslovno_zachislen": this.check_true_false(this.register.uslovno_zachislen),
                                "zagruzit_obr": this.register.zagruzit_obr,
                                "number_certificate": this.register.number_certificate,
                                "seria_certificate": this.register.seria_certificate,
                                "date_certificate": this.register.date_certificate,
                                "zagruzit_certificate": this.register.zagruzit_certificate,
                                "nomer_svidetelstva": this.register.nomer_svidetelstva,
                                "zagruzit_svidetelstva": this.register.zagruzit_svidetelstva,
                                "serpin": this.check_true_false(this.register.serpin),
                                "deti_siroti": this.check_true_false(this.register.deti_siroti),
                                "invalid_pervi": this.check_true_false(this.register.invalid_pervi),
                                "invalid_vtoroi": this.check_true_false(this.register.invalid_vtoroi),
                                "invalid_sdetstva": this.check_true_false(this.register.invalid_sdetstva),
                                "kvota_invalidam": this.check_true_false(this.register.kvota_invalidam),
                                "selskaya_kvota": this.check_true_false(this.register.selskaya_kvota),
                                "kvota_negrajdan": this.check_true_false(this.register.kvota_negrajdan),
                                "pob_mej_olimp": this.check_true_false(this.register.pob_mej_olimp),
                                "pob_resp_olimp": this.check_true_false(this.register.pob_resp_olimp),
                                "znak_altin": this.check_true_false(this.register.znak_altin),
                                "atestat_osobo": this.check_true_false(this.register.atestat_osobo),
                                "pob_mej_nau": this.check_true_false(this.register.pob_mej_nau),
                                "pob_resp_nau": this.check_true_false(this.register.pob_resp_nau),
                                "pob_mej_sport": this.check_true_false(this.register.pob_mej_sport),
                                "pob_gorod_nau": this.check_true_false(this.register.pob_gorod_nau),
                                "pob_gorod_olimp": this.check_true_false(this.register.pob_gorod_olimp),
                                "pob_obl_nau_konkurs": this.check_true_false(this.register.pob_obl_nau_konkurs),
                                "pob_obl_olimp": this.check_true_false(this.register.pob_obl_olimp),
                                "pob_mej_vistavki": this.check_true_false(this.register.pob_mej_vistavki),
                                "uroven_obuchenie": this.register.uroven_obuchenie,
                                "stupen_obuchenie": this.register.stupen_obuchenie,
                                "forma_obuchenie": this.register.forma_obuchenie, 
                                "language_otdelenie": this.register.language_otdelenie,
                                "faculty": this.register.faculty,
                                "specialnost": this.register.specialnost,
                                "who_registered": "student",
                                "data_about_who": "student",
                                "grand_platni": "на гранд",
                                "proverenni": "2",
                                "unique_id": "",
                                "comment":"",
                                "na_baze": this.register.na_baze
                        };

                        this.$http.post('/insert_data/student', obj,
                            {
                                headers: {
                                        'Content-Type': 'application/json'
                                }
                            }
                        )
                        .then(res => {
                            if(res.data.message=="Inserted") 
                            {
                    
                                    let obj_2 = {
                                        "iin": this.register.iin,
                                        "password": this.register.password,
                                        "unique_id": ""
                                    }
                                    this.$http.post('/signup/student_registration', obj_2,
                                        {
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        }
                                    )
                                    .then(res => {
                                        console.log("there signup");
                                        this.access_token=res.data.access_token;
                                        console.log(this.access_token);
                                        
                                        this.$http.post('/insert_data/avatar', formData,
                                            {
                                                headers: {
                                                        'Content-Type': 'multipart/form-data',
                                                        'Authorization': 'Bearer '+this.access_token
                                                }
                                            }
                                        )
                                        .then(res => {
                                            console.log("There is avatars");
                                            console.log(res.data);
                                            this.inform = "Вы успешно зарегестрировались";
                                            this.loader=false;
                    
                                        })
                                        .catch(error => {   
                                            this.register.info = error.response.data.error;
                                            console.log('Ошибка ' + error.response.data.error);
                                                 this.loader=false;
                                        });
                                    })
                                    .catch(error => {   
                                        this.register.info = error.response.data.error;
                                        if(this.register.info){
                                             this.inform = "Ползователь существует";  
                                        }
                                        console.log('Ошибка ' + error.response.data.error);
                                             this.loader=false;
                                    });
                                
                            }
                        })
                        .catch(error => {   
                            this.register.info = error.response.data.error;
                            if(this.register.info=="User exist") {
                                this.loader = false;
                                this.inform = "Пользователь существует";
                               
                            }
                            
                            console.log('Ошибка ' + error.response.data.error);
                        }
                        );
                    }
            },
        }
        };
        </script>


        <style >
            .first_step .nagradi {
                padding: 20px;
            }
            .loaders img {
                width: 45px;
                height: 45px;
            }
            .step_by .gif {
                width: 300px;
                height: 200px;
            
                position: absolute;
                top: 0;
                right: 380px;
            }
            .success h3 {
                color: #3ab399;
            }
            
            .multiselect__tags {
                font-size: 6px !important;
            }
            .multiselect__placeholder {
                font-size: 10px;
            }
            .last-line {
                padding-bottom: 0 !important;
            }
            .for_checkbox {
                min-width: auto !important;
                width: auto !important;
            }
         
            h4 {
                padding-top: 10px;
            }
            .searchableSelect__ {
                width: 270px;
                margin-left: 20px;
            }
            .double {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }
  
            .line-select {
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .line-select p {
                
                margin-left: 5px;
            }
            @media only screen and (max-width: 600px) {
                .double {
                    flex-direction: column;
                }
                .main {
                    height: 115vh;
                }
                .second-block {
                    display: none !important;
                }
            }
            .arrow {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-bottom: 5px;
            
            }
            .next {
                height: 30px;
                width:  30px;
                margin: 0 10px !important;
                background-color: #3ab399;
                border: none;  
                border-radius: 50%;
                display: inline-block;
                opacity: 0.5; 
                color: white;
                font-weight: bold;
                outline:none; 
              
            }
        
          
            /* .second_step {
                display: none !important;
            } */
            .first_step {
                display: flex;
                flex-direction: column;  
                width: 100%;
                align-items: center;
                justify-content: center;
            }
            
            .next {
                height: 30px;
                width:  30px;
                margin: 2px 2px;
                background-color: #3ab399;
                border: none;  
                border-radius: 50%;
                display: inline-block;
                opacity: 0.5; 
                color: white;
                font-weight: bold;
                outline:none; 
            }
            .next:hover {
                  box-shadow: 0px 10px 50px #3ab399;
            }
            .enable {
                background-color: #3ab399;
                height: 15px;
                width: 15px;
                margin: 0 2px;
                border: none;  
                border-radius: 50%;
                display: inline-block;
                opacity: 0.5;
            }
            
            .step_by {
                display: flex;
                flex-direction: column;  
                width: 100%;
                align-items: center;
                justify-content: center;
            }
            .step_by #input_insert {
                width: 200px;
                border: 1px solid #e8e8e8;
                border-radius: 3px;
                padding: 8px !important;
            
                
            }
            
            .step_by p {
                font-size: 14px;
            }
            .level {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                padding-bottom: 10px;
            }
            .step_by div .disable {
                height: 15px;
                width: 15px;
                margin: 0 2px;
                background-color: #bbbbbb;
                border: none;  
                border-radius: 50%;
                display: inline-block;
                opacity: 0.5;
            }
            .form_data {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .changeData {
                margin-bottom: 20px;
                margin-left: 20px;
            }
            .changeData button {
                
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
    
        
            .nameProfile{
            width: 100%;
            padding: 10px 20px;
            border-bottom: 2px solid var(--main-border-color);
            }
            .nameProfile p {
                font-weight: bold;
            }
            .dataStudent {
                width: 200px;
                /* display: flex;
                justify-content: flex-start; */
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
                width: 150px;
                padding: 10px;
                margin-top: 5px;
                background-color:  #3ab399;

                outline: none;
                display: flex;
                align-items: center;
                justify-content: center;
                
            }
            .sign_in:hover {
                box-shadow: 0px 10px 50px rgba(48, 239, 230, 0.5)
            }
            .sign_in p {
                color: white !important;
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
            flex-direction: column !important;
            /* align-items: center; */
            justify-content: flex-start; 
            align-items: flex-start;
            padding-bottom: 3px;
            }

            .line input {
                width: 80%;
   
            }
            .line select {
                width: 80%;
              
                border: 1px solid #e8e8e8;
                border-radius: 3px;
                padding: 10px !important;
             
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