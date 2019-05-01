    <!-- template -->
    <template>
            <div class="content">
                <div class="nameMenu">
                            <p>Получить данные/Поиск</p>
                </div>
                <div class="flexInputs">
                    <form  class="form_data"> 
                        <div class="title"><h4>Персональные данные</h4>  <img src="../../assets/images/up-arrow.png"></div>

                        <div class="line-div">
                                    <div class="data_person">
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
                                    </div>
                                    <div class="data_person">
                                        <div class="line">
                                                <p>Дата рождения</p>
                                                <input id="input_insert" type="date"
                                                v-model="register.date_birth"
                                                required
                                                >
                                                
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
                                                        v-model="register.nationality"
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
                                                    <select v-model="register.family_position" required>
                                                        <option>холостой</option>
                                                        <option>женат</option>
                                                    </select>
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
                                            <select v-model="register.document_type" required>
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
                                                v-model="register.iin"
                                                required
                                                >
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Номер удостверяющий личности</p>
                                                <input id="input_insert" placeholder="Номер удостверяющий личности"
                                                autocomplete="false"
                                                v-model="register.nomer"
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
                                        
                                            v-model="register.kem_vidan"
                                            required
                                            > 
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
                                                v-model="register.strana"
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
                                </div>
                                <div class="data_person">
                                    <div class="line">
                                        <p>Телефон</p>
                                        <input id="input_insert"
                                            type="number"
                                            v-model="register.contact_number"
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
                                                    v-model="register.type_zavedenie"
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
                                                                v-model="register.oblast_zavedenie"
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
                                                    <div class="line-select" v-if="register.oblast_zavedenie!=''">
                                                            <multiselect 
                                                                v-model="register.raion_zavedenie"
                                                                :options="list[register.oblast_zavedenie]"
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
                                                                v-model="register.raion_zavedenie"
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
                                                        v-model="register.name_zavedenie"
                                                    >
                                                </div>
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
                                                        placeholder="Дата выдачи"
                                                        v-model="register.date_vidachi_obr"
                                                    >
                                                </div>
                                             
                                            </div>
                                <div class="data_person">
                                                <div class="line">
                                                    <p>Серия документа</p>
                                                    <input id="input_insert" 
                                                        type="text"
                                                        placeholder="Серия документа"
                                                        v-model="register.seria_document"
                                                    >
                                                </div>
                                                <div class="line">
                                                    <p>Номер документа</p>
                                                    <input id="input_insert" 
                                                        type="number"
                                                        placeholder="Дата выдачи"
                                                        v-model="register.nomer_document"
                                                    >
                                                </div>
                                                <div class="line">
                                                    <p>Условно зачисленный</p>
                                                    <input id="input_insert" 
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        placeholder="Дата выдачи"
                                                        v-model="register.uslovno_zachislen"
                                                    >
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
                                                v-model="register.number_certificate"
                                            >
                                    </div>
                                    <div class="line">
                                                <p>Серия сертификата</p>
                                                <input id="input_insert" 
                                                    
                                                    type="text"
                                                    placeholder="Дата выдачи"
                                                    v-model="register.seria_certificate"
                                                >
                                    </div>
                                    <div class="line">
                                                    <p>Дата выдачи сертификата</p>
                                                    <input id="input_insert" 
                                                        
                                                        type="date"
                                                        placeholder="Дата выдачи"
                                                        v-model="register.date_certificate"
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
                                                v-model="register.nomer_svidetelstva"
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
                                                <input id="input_insert"
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.serpin"
                                                >
                                        </div>
                                        <div class="line">
                                                <p>Дети сироты</p>
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
                                            class="for_checkbo  x"
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
                                            
                                 </div>
                                 <div class="data_person">
                                     <div class="line">
                                            <p>Победитель международного спортивного соревнования</p>
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
                                     <div class="line">
                                            <p>победитель республиканского научного конкурса</p>
                                            <input id="input_insert"
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.pob_mej_sport"
                                            >
                                           </div>
                                            <div class="line">
                                            <p>Победитель международного спортивного соревнования</p>
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
                                                v-model="register.uroven_obuchenie"
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
                                                v-model="register.stupen_obuchenie"
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
                                            v-model="register.forma_obuchenie"
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
                                            v-model="register.language_otdelenie"
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
                                            v-model="register.faculty"
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

                                    
                                    <div class="line" v-if="register.faculty!=''">
                                        <p>Специальность</p>
                                        <div class="line-select">
                                            <multiselect 
                                            v-model="register.specialnost"
                                            :options="list[register.faculty]"
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
                                            v-model="register.specialnost"
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
                                            v-model="register.grand_platni"
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
                        

                    </form>
                
                            
                </div>
                <div class="changeData">
                        <button @click="confirmation">Поиск</button>
                </div>
                    
                <div class="result_of_search">
                    <div class="result_title"><h3>Результат поиска</h3></div>
                    <download-excel
                    class   = "btn btn-default "
                    :data   = "this.items"
                    :fields = "json_fields"
                    name    = "Zhubanov.xls">
                    Загрузить в excel
                    </download-excel>
                    <div class="title">
                        <h4>Персональные даные</h4>
                        <div v-on:click="table_first=!table_first">
                            <img v-show="table_first" src="../../assets/images/up-arrow.png" >
                            <img  src="../../assets/images/down-arrow.png" v-show="!table_first" >
                        </div>
                    </div>
                    <center>
                         <div v-if="this.loader==true" class="loader_align_self">
                                <div class="loaders"><img src="../../assets/images/26.gif"></div>
                        </div>
                    </center>
                    <table >
                        <tr>
                            <td>И.Ф.О</td>
                            <td>Дата рождения</td>
                            <td>Пол</td>
                            <td>Гражданство</td>
                            <td>Национальность</td>
                            <td>Семейное положение</td>
                        </tr>
                        <tr  v-for="(item, index) in this.items">
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
                            <td>{{item.uslovno_zachislen}}</td>
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

              
                <!-- <div class="changeData">
                    <button>Изменить данные</button>
                </div> -->
        
            </div>                   
    </template>

    <!-- scripts -->
    <script>
        import Datepicker from 'vuejs-datepicker';
        import { ru } from 'vuejs-datepicker/dist/locale';
        import Multiselect from 'vue-multiselect'
        export default {
            components: {
                Datepicker,
                Multiselect
            },
            data() {
                return {
                    loader: false,
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
                    items: [],
                    json_fields: {
                            'Фамилия':'surname',
                            'Имя':'name',
                            'Отчество':'third_name',
                            'Датарождения':'date_birth',
                            'Пол':'gender',
                            'Гражданство':'citizenship',
                            'Национальность':'nationality',
                            'Семейноеположение':'family_position',
                            'Документудостверяющийличность':'document_type',
                            'ИИН':'iin',
                            'Номерудостверяющийличности':'nomer',
                            'Кемвыдан':'kem_vidan',
                            'Когдавыдан':'kogda_vidan',
                            'Срокдействиядокумента':'srok_deistvie',
                            'Удаст.':'zagruzit_udastak',
                            'Страна':'strana',
                            'Адреспроживание':'adres_projivanie',
                            'Адреспрописки':'adres_propiski',
                            'Телефон':'contact_number',
                            'Типучебногозаведения':'type_zavedenie',
                            'Областьместорасположенияучебногозаведения':'oblast_zavedenie',
                            'Районместорасположенияучебногозаведения':'raion_zavedenie',
                            'Наименованиеучебногозаведения':'name_zavedenie',
                            'Типдокумента':'type_obrazovanie',
                            'Датавыдачи':'date_vidachi_obr',
                            'Сериядокумента':'seria_document',
                            'Номердокумента':'nomer_document',
                            'Условнозачисленный':'uslovno_zachislen',
                            'Загрузитьаттестат':'zagruzit_obr',
                            'Номерсертификата':'number_certificate',
                            'Сериясертификата':'seria_certificate',
                            'Датавыдачисертификата':'date_certificate',
                            'Заргрузитьсертификат':'zagruzit_certificate',
                            'Номерсвидетельства':'nomer_svidetelstva',
                            'Загрузитьсвидетельствоогранте':'zagruzit_svidetelstva',
                            'Серпин':'serpin',
                            'Дети-сироты':'deti_siroti',
                            'Инвалид1-йгруппы':'invalid_pervi',
                            'Инвалид2-йгруппы':'invalid_vtoroi',
                            'Инвалидсдетства':'invalid_sdetstva',
                            'КвотадлялицприравненныхпольготамигарантиямкучастникамиинвалидамВОВ(галочка)':'kvota_invalidam',
                            'Сельскаяквота':'selskaya_kvota',
                            'Квотадлялицказахскойнациональностей,неявляющихсягражданамиРК':'kvota_negrajdan',
                            'победительмеждународнойолимпиады':'pob_mej_olimp',
                            'победительреспубликанскойолимпиады':'pob_resp_olimp',
                            'знакАлтынбелгi':'znak_altin',
                            'аттестатособогообразца':'atestat_osobo',
                            'победительмеждународногонаучногоконкурса':'pob_mej_nau',
                            'победительреспубликанскогонаучногоконкурса':'pob_resp_nau',
                            'Победительмеждународногоспортивногосоревнования':'pob_mej_sport',
                            'победительгородскогонаучногоконкурса':'pob_gorod_nau',
                            'победительгородскойолимпиады':'pob_gorod_olimp',
                            'победительобластногонаучногоконкурса':'pob_obl_nau_konkurs',
                            'победительобластнойолимпиады':'pob_obl_olimp',
                            'Побидительмеждународнойвыставки':'pob_mej_vistavki',
                            'Уровеньобучения':'uroven_obuchenie',
                            'Ступеньобучения':'stupen_obuchenie',
                            'Формаобучения':'forma_obuchenie',
                            'Языковоеотделение':'language_otdelenie',
                            'факультет':'faculty',
                            'специальность':'specialnost',
                            'Кторегистрировал':'who_registered',
                            'Кторегистрировал':'data_about_who',
                            'Грандник/Платник':'grand_platni'
                    },
                    json_data: [
                        {
                            'name': 'Tony Peña',
                            'city': 'New York',
                            'country': 'United States',
                            'birthdate': '1978-03-15',
                            'phone': {
                                'mobile': '1-541-754-3010',
                                'landline': '(541) 754-3010'
                            }
                        },
                        {
                            'name': 'Thessaloniki',
                            'city': 'Athens',
                            'country': 'Greece',
                            'birthdate': '1987-11-23',
                            'phone': {
                                'mobile': '+1 855 275 5071',
                                'landline': '(2741) 2621-244'
                            }
                        }
                    ],
                    json_meta: [
                        [
                            {
                                'key': 'charset',
                                'value': 'utf-8'
                            }
                        ]
                    ],
                }
            },
            methods: {
                checkempty(word) 
                {
                    if(word=="" || word=="") {
                        word = 'empty';
                        return word;
                    }
                    else {
                        word = word;
                        return word;
                    }
                },
                check_true_false(word) {
                    if(word==true){
                        word = '1';
                        return word;
                    }
                    else {
                        word = '0';
                        return word;
                    }
                },
                confirmation() 
                {
                    this.loader = true;
                    this.$http.get('/insert_data/search_all', 
                        {
                            params: {
                                "surname": this.checkempty(this.register.surname),
                                "name": this.checkempty(this.register.name),
                                "third_name": this.checkempty(this.register.third_name), 
                                "date_birth": this.checkempty(this.register.date_birth),
                                "gender": this.checkempty(this.register.gender),
                                "citizenship": this.checkempty(this.register.citizenship),  
                                "nationality": this.checkempty(this.register.nationality),
                                "family_position": this.checkempty(this.register.family_position),
                                "document_type": this.checkempty(this.register.document_type),
                                "iin": this.checkempty(this.register.iin),
                                "nomer": this.checkempty(this.register.nomer),
                                "kem_vidan": this.checkempty(this.register.kem_vidan),
                                "kogda_vidan": this.checkempty(this.register.kogda_vidan),
                                "srok_deistvie": this.checkempty(this.register.srok_deistvie),
                                "zagruzit_udastak": this.checkempty(this.register.zagruzit_udastak),
                                "strana": this.checkempty(this.register.strana),
                                "adres_projivanie": this.checkempty(this.register.adres_projivanie),
                                "adres_propiski": this.checkempty(this.register.adres_propiski),
                                "contact_number": this.checkempty(this.register.contact_number),
                                "type_zavedenie": this.checkempty(this.register.type_zavedenie),
                                "oblast_zavedenie": this.checkempty(this.register.oblast_zavedenie),
                                "raion_zavedenie": this.checkempty(this.register.raion_zavedenie),
                                "name_zavedenie": this.checkempty(this.register.name_zavedenie),
                                "type_obrazovanie": this.checkempty(this.register.type_obrazovanie),
                                "date_vidachi_obr": this.checkempty(this.register.date_vidachi_obr),
                                "seria_document": this.checkempty(this.register.seria_document),
                                "nomer_document": this.checkempty(this.register.nomer_document),
                                "uslovno_zachislen":  this.checkempty(this.check_true_false(this.register.uslovno_zachislen)),
                                "zagruzit_obr": this.checkempty(this.register.zagruzit_obr),
                                "number_certificate": this.checkempty(this.register.number_certificate),
                                "seria_certificate": this.checkempty(this.register.seria_certificate),
                                "date_certificate": this.checkempty(this.register.date_certificate),
                                "zagruzit_certificate": this.checkempty(this.register.zagruzit_certificate),
                                "nomer_svidetelstva":  this.checkempty(this.register.nomer_svidetelstva),
                                "zagruzit_svidetelstva": this.checkempty(this.register.zagruzit_svidetelstva),
                                "serpin": this.checkempty(this.check_true_false(this.register.serpin)),
                                "deti_siroti": this.checkempty(this.check_true_false(this.register.deti_siroti)),
                                "invalid_pervi": this.checkempty(this.check_true_false(this.register.invalid_pervi)),
                                "invalid_vtoroi": this.checkempty(this.check_true_false(this.register.invalid_vtoroi)),
                                "invalid_sdetstva": this.checkempty(this.check_true_false(this.register.invalid_sdetstva)),
                                "kvota_invalidam": this.checkempty(this.check_true_false(this.register.kvota_invalidam)),
                                "selskaya_kvota": this.checkempty(this.check_true_false(this.register.selskaya_kvota)),
                                "kvota_negrajdan": this.checkempty(this.check_true_false(this.register.kvota_negrajdan)),
                                "pob_mej_olimp": this.checkempty(this.check_true_false(this.register.pob_mej_olimp)),
                                "pob_resp_olimp": this.checkempty(this.check_true_false(this.register.pob_resp_olimp)),
                                "znak_altin": this.checkempty(this.check_true_false(this.register.znak_altin)),
                                "atestat_osobo": this.checkempty(this.check_true_false(this.register.atestat_osobo)),
                                "pob_mej_nau": this.checkempty(this.check_true_false(this.register.pob_mej_nau)),
                                "pob_resp_nau": this.checkempty(this.check_true_false(this.register.pob_resp_nau)),
                                "pob_mej_sport": this.checkempty(this.check_true_false(this.register.pob_mej_sport)),
                                "pob_gorod_nau": this.checkempty(this.check_true_false(this.register.pob_gorod_nau)),
                                "pob_gorod_olimp": this.checkempty(this.check_true_false(this.register.pob_gorod_olimp)),
                                "pob_obl_nau_konkurs": this.checkempty(this.check_true_false(this.register.pob_obl_nau_konkurs)),
                                "pob_obl_olimp": this.checkempty(this.check_true_false(this.register.pob_obl_olimp)),
                                "pob_mej_vistavki": this.checkempty(this.check_true_false(this.register.pob_mej_vistavki)),
                                "uroven_obuchenie": this.checkempty(this.register.uroven_obuchenie),
                                "stupen_obuchenie": this.checkempty(this.register.stupen_obuchenie),
                                "forma_obuchenie": this.checkempty(this.register.forma_obuchenie), 
                                "language_otdelenie": this.checkempty(this.register.language_otdelenie),
                                "faculty": this.checkempty(this.register.faculty),
                                "specialnost": this.checkempty(this.register.specialnost),
                                "who_registered": this.checkempty(this.register.who_registered),
                                "data_about_who": this.checkempty(this.register.data_about_who),
                                "grand_platni": this.checkempty(this.register.grand_platni),
                                "proverenni": "empty"
                            }

                        } 
                    )
                    .then(res => {
                        this.register.login= "",
                        this.register.password= "",
                        this.register.surname  = "", 
                        this.register.name  = "", 
                        this.register.third_name  = "",  
                        this.register.date_birth  = "", 
                        this.register.gender  = "", 
                        this.register.citizenship  = "",  
                        this.register.nationality  = "", 
                        this.register.family_position  = "", 
                        this.register.document_type  = "",  
                        this.register.iin  = "", 
                        this.register.nomer  = "", 
                        this.register.kem_vidan  = "", 
                        this.register.kogda_vidan  = "", 
                        this.register.srok_deistvie  = "", 
                        this.register.zagruzit_udastak  = "",  
                        this.register.strana  = "", 
                        this.register.adres_projivanie  = "",  
                        this.register.adres_propiski  = "",  
                        this.register.contact_number  = "",  
                        this.register.contact_number_2= "",
                        this.register.type_zavedenie  = "",  
                        this.register.oblast_zavedenie  = '', 
                        this.register.raion_zavedenie  = "",  
                        this.register.name_zavedenie  = "",  
                        this.register.type_obrazovanie  = "", 
                        this.register.date_vidachi_obr  = "",
                        this.register.seria_document  = "",  
                        this.register.nomer_document  = "",  
                        this.register.uslovno_zachislen  = "", 
                        this.register.zagruzit_obr  = "",  
                        this.register.number_certificate  = "", 
                        this.register.seria_certificate  = "",  
                        this.register.date_certificate  = "",  
                        this.register.zagruzit_certificate  = "",  
                        this.register.nomer_svidetelstva  = "", 
                        this.register.zagruzit_svidetelstva  = "",  
                        this.register.serpin  = "", 
                        this.register.deti_siroti  = "", 
                        this.register.invalid_pervi  = "",  
                        this.register.invalid_vtoroi  = "",  
                        this.register.invalid_sdetstva  = "", 
                        this.register.kvota_invalidam  = "",  
                        this.register.selskaya_kvota  = "", 
                        this.register.kvota_negrajdan  = "",  
                        this.register.pob_mej_olimp  = "",  
                        this.register.pob_resp_olimp  = "",  
                        this.register.znak_altin  = "", 
                        this.register.atestat_osobo  = "",  
                        this.register.pob_mej_nau  = "",  
                        this.register.pob_resp_nau  = "",  
                        this.register.pob_mej_sport  = "",  
                        this.register.pob_gorod_nau  = "",  
                        this.register.pob_gorod_olimp  = "",  
                        this.register.pob_obl_nau_konkurs  = "", 
                        this.register.pob_obl_olimp  = "",  
                        this.register.pob_mej_vistavki  = "", 
                        this.register.uroven_obuchenie  = "",  
                        this.register.stupen_obuchenie  = "",  
                        this.register.forma_obuchenie  = "",  
                        this.register.language_otdelenie  = "",  
                        this.register.faculty  = '',  
                        this.register.specialnost  = "",  
                        this.register.who_registered  = "",  
                        this.register.data_about_who  = "",
                        this.register.grand_platni= "" 

                        this.items = res.data
                        
                        console.log(this.items);
                        this.loader = false;
                       
                    })
                    .catch(error => {   
                        if(error.response.data.error) {
                            
                        }
                    });
                }
            }
        };
    </script>

    <!-- style -->

    <style scoped lang="scss"> 
        .line-select {
            width: 290px !important;
        }
         #input_insert {
                width: 200px;
                border: 1px solid #e8e8e8;
                border-radius: 3px;
                padding: 8px !important;
            
                
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
        .title h4 {
            padding: 0;
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

    </style>