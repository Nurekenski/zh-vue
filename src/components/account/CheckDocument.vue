    <!-- template -->
    <template>
            <div class="content">
                <div class="flexContent">
                    <div class="infoUser">
                        <div class="nameProfile">
                            <p>Проверка документов</p>
                        </div>
                       <div class="title"><h4>Персональные данные</h4>  <img src="../../assets/images/up-arrow.png"></div>

                        <div class="line-div">
                                    <div class="data_person">
                                        <div class="line">
                                                <p>Имя</p>
                                                <input 
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
                                                    <input 
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
                                                    <input placeholder="Отчество"
                                                    autocomplete="false"
                                                    v-model="register.third_name"
                                                    required
                                                    >
                                        </div>
                                    </div>
                                    <div class="data_person">
                                        <div class="line">
                                                <p>Дата рождения</p>
                                                <input type="date"
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
                                                <input 
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
                                                <input placeholder="Номер удостверяющий личности"
                                                autocomplete="false"
                                                v-model="register.nomer"
                                                required
                                                >
                                    </div>
                                </div>
                                <div class="data_person">
                                    <div class="line">
                                            <p>Кем выдан</p>
                                            <input 
                                            placeholder="Кем выдан"
                                            type="text"
                                        
                                            v-model="register.kem_vidan"
                                            required
                                            > 
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Когда выдан</p>
                                                <input
                                                type="date"
                                                placeholder="Кем выдан"
                                                v-model="register.kogda_vidan"
                                                required
                                                >
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Срок действия документа</p>
                                                <input
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
                                                <input type="text"
                                                v-model="register.adres_projivanie"
                                                >
                                    </div>
                                    <div class="line">
                                                <!-- <img src="../../assets/images/mail.png"> -->
                                                <p>Адрес прописки</p>
                                                <input type="text"
                                                v-model="register.adres_propiski"
                                                >
                                    </div>
                                </div>
                                <div class="data_person">
                                    <div class="line">
                                        <p>Телефон</p>
                                        <input
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
                                                    <input
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
                                                    <input 
                                                        type="date"
                                                        placeholder="Дата выдачи"
                                                        v-model="register.date_vidachi_obr"
                                                    >
                                                </div>
                                             
                                            </div>
                                <div class="data_person">
                                                <div class="line">
                                                    <p>Серия документа</p>
                                                    <input 
                                                        type="text"
                                                        placeholder="Серия документа"
                                                        v-model="register.seria_document"
                                                    >
                                                </div>
                                                <div class="line">
                                                    <p>Номер документа</p>
                                                    <input 
                                                        type="number"
                                                        placeholder="Дата выдачи"
                                                        v-model="register.nomer_document"
                                                    >
                                                </div>
                                                <!-- <div class="line">
                                                    <p>Условно зачисленный</p>
                                                    <input 
                                                        class="for_checkbox"
                                                        type="checkbox"
                                                        placeholder="Дата выдачи"
                                                        v-model="register.uslovno_zachislen"
                                                    >
                                                </div> -->
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
                                            <input 
                                                
                                                type="text"
                                                placeholder="Дата выдачи"
                                                v-model="register.number_certificate"
                                            >
                                    </div>
                                    <div class="line">
                                                <p>Серия сертификата</p>
                                                <input 
                                                    
                                                    type="text"
                                                    placeholder="Дата выдачи"
                                                    v-model="register.seria_certificate"
                                                >
                                    </div>
                                    <div class="line">
                                                    <p>Дата выдачи сертификата</p>
                                                    <input 
                                                        
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
                                            <input
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
                                                <input
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.serpin"
                                                >
                                        </div>
                                        <div class="line">
                                                <p>Дети сироты</p>
                                                <input
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.deti_siroti"
                                                >
                                        </div>
                                        <div class="line">
                                                <p>Инвалид 1-й группа</p>
                                                <input
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.invalid_pervi"
                                                >
                                        </div>
                                            
                                        <div class="line">
                                                <p>Инвалид 2-й группа</p>
                                                <input
                                                class="for_checkbox"
                                                type="checkbox"
                                                v-model="register.invalid_vtoroi"
                                                >
                                        </div>
                                        <div class="line">
                                            <p>Инвалид с детства</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.invalid_sdetstva"
                                            >
                                    </div>
                                    <div class="line">
                                            <p>Квота для лиц приравненных по льготам и </p>
                                            <p>гарантиям к участникам и инвалидам ВОВ</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.kvota_invalidam"
                                            >
                                    </div>
                                    <div class="line">
                                            <p>Сельская квота</p>
                                            <input
                                            class="for_checkbo  x"
                                            type="checkbox"
                                            v-model="register.selskaya_kvota"
                                            >
                                    </div>
                                    <div class="line last-line">
                                            <p>Квота для лиц казахской национальностей,</p>
                                            <p> не являющихся гражданами РК</p>
                                            <input
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
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.pob_mej_olimp"
                                            >
                                           </div>
                                           <div class="line">
                                            <p>победитель республиканской олимпиады</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.pob_resp_olimp"
                                            >
                                           </div>
                                           <div class="line">
                                            <p>знак "Алтын белгi"</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.znak_altin"
                                            >
                                           </div>
                                            <div class="line">
                                            <p>аттестат особого образца</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.atestat_osobo"
                                            >
                                           </div>
                                           <div class="line">
                                            <p>победитель международного научного конкурса</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.pob_mej_nau"
                                            >
                                           </div>
                                            <div class="line">
                                            <p>победитель республиканского научного конкурса</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.pob_resp_nau"
                                            >
                                           </div>
                                            <div class="line">
                                            <p>победитель республиканского научного конкурса</p>
                                            <input
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
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.pob_gorod_nau"
                                            >
                                           </div>
                                            <div class="line">
                                            <p>победитель городского научного конкурса</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.pob_gorod_olimp"
                                            >
                                           </div>
                                     <div class="line">
                                            <p>победитель республиканского научного конкурса</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.pob_mej_sport"
                                            >
                                           </div>
                                            <div class="line">
                                            <p>Победитель международного спортивного соревнования</p>
                                            <p>и победитель республиканских спортивных соревнова</p>
                                            <input
                                            class="for_checkbox"
                                            type="checkbox"
                                            v-model="register.pob_gorod_nau"
                                            >
                                           </div>
                                            <div class="line">
                                            <p>победитель городского научного конкурса</p>
                                            <input
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
                    </div>
                </div>   
            </div>                   
    </template>

    <!-- scripts -->
    <script>
        // imports scripts
        import Datepicker from 'vuejs-datepicker';
        import VueGallery from 'vue-gallery';
        
        export default {
            data() {
                return {
                    images: [
                        'https://dummyimage.com/800/ffffff/000000',
                        'https://dummyimage.com/1600/ffffff/000000',
                        'https://dummyimage.com/1280/000000/ffffff',
                        'https://dummyimage.com/400/000000/ffffff',
                    ],
                    index: null,
                    checked: true
                }
            },
            components: {
                'gallery': VueGallery
            },
        };
    </script>

    <!-- style -->


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
            // let obj = {
            //     name: this.register.n,
            //     surname: this.register.s,
            //     third_name: this.register.t,
            //     uroven_knowledge: this.register.uroven,
            //     stupen_obuchenie: this.register.stupen,
            //     forma_obuchenie: this.register.forma,
            //     language_sdachi: this.register.language,
            //     faculty: this.register.faculty,
            //     specialization: this.register.specialization,
            //     spec: this.register.spec,
            //     osnovanie_dlya_postuplenie: "22",
            //     who_registered: '1'        
            // };

            this.$http.post('/insert_data/get_data',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+localStorage.getItem('access_token')
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
    beforeMount(){
        this.$http.post('/insert_data/get_data/', {},
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+localStorage.getItem('access_token')
            }
        }
        )
        .then(res => {
            this.items = res.data;
        })
        .catch(error => {   
            this.register.info = error.response.data.error;
            console.log('Ошибка ' + error.response.data.error);
        });
    },
    };
    </script>


    <style > 

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
        .title h4 {
            padding: 0 !important;
        }

    </style>