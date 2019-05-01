<!-- template -->
<template>
     
           <div>
               <p>12121</p>
               <p>12121</p>
            </div>
     
</template>

<!-- style -->
<style scoped lang="scss"> 
   
    // menu icons
    .menuIcon {
           display: none;
    }
    header {
        width: 100%;
        background: var(--main-white-color);
        border-bottom: 1px solid var(--main-border-color);
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        margin-bottom: 20px;
  
        .leftHeader{
            width: 50%;
            display: flex;
            align-items: center;
            margin-left: 20px;

            .logoImg{
                height: 25px;
                width: 169px;
            }
            
        }
        .rightHeader{
            width: 50%;
            margin-right: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .icons{
                width: 24px;
                height: 24px;
                cursor: pointer;
            }

            .notif{
                margin-right: 20px;
                position: relative;

                .notifOpen {
                    width: 240px;
                    height: 200px;
                    position: absolute;
                    top: 60px;
                    left: -110px;
                    color: var(--main-project-color);
                    background: var(--main-white-color);  
                    box-shadow: 0 2px 10px var(--main-border-shadow-notif);
                    border: 1px solid var(--main-border-color-notif);      
                    border-radius: 5px;   
                    z-index: 100;


                    &:before {
                        content: "";
                        position: absolute;
                        background: var(--main-white-color);
                        left: 115px;
                        top: -6px;
                        width: 10px;
                        height: 10px;
                        border-left: 1px solid var(---main-border-color-notif);
                        border-top: 1px solid var(--main-border-color-notif);
                        box-shadow: none;
                        z-index: 1;
                        -webkit-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                }
            }

            .apps{
                margin-right: 50px;
                position: relative;

                .appsOpen {
                    width: 240px;
                    height: auto;
                    position: absolute;
                    top: 60px;
                    left: -110px;
                    color: var(--main-project-color);
                    background: var(--main-white-color);  
                    box-shadow: 0 2px 10px var(--main-border-shadow-notif);
                    border: 1px solid var(--main-border-color-notif);      
                    border-radius: 5px; 
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: wrap;
                    z-index: 100;
                    
                    .blocksApps {
                        width: 76px;
                        overflow: hidden;
                        cursor: pointer;
                        height: 76px;
                        margin: 1px;
                        border: 1px solid transparent;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-wrap: wrap;
                        
                        &:hover {
                            transition: 0.7s;
                            border: 1px solid var(--main-border-shadow-notif);
                        }
                        p {
                            font-size: 14px;
                            margin-top: 5px;
                            font-weight: bold;
                        }
                        img {
                            width: 50px;
                            height: 50px;
                        }
                    }

                    &:before {
                        content: "";
                        position: absolute;
                        background: var(--main-white-color);
                        left: 115px;
                        top: -6px;
                        width: 10px;
                        height: 10px;
                        border-left: 1px solid var(---main-border-color-notif);
                        border-top: 1px solid var(--main-border-color-notif);
                        box-shadow: none;
                        z-index: 1;
                        -webkit-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                }
            }

            .userProfile{
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                position: relative;
                
                p{
                    margin-right: 10px;  
                    font-weight: bold;
                    font-size: 14px;
                }

                .avatarHeader{
                    width: 33px;
                    height: 33px;
                    border-radius: 50%;
                    background: #ccc;
                }

                .logout {
                    position: absolute;
                    top: 60px;
                    color: var(--main-project-color);
                    background: var(--main-white-color);  
                    box-shadow: 0 2px 10px var(--main-border-shadow-notif);
                    border: 1px solid var(--main-border-color-notif);      
                    border-radius: 5px; 
                    width: 142px;
                    display: flex;
                    justify-content: center;
                    padding-top: 10px;
                    padding-bottom: 10px;                    
                    right: -1px;
                    z-index: 100;

                    p {
                        margin-right: 0;
                    }

                     &:before {
                        content: "";
                        position: absolute;
                        background: var(--main-white-color);
                        left: 120px;
                        top: -6px;
                        width: 10px;
                        height: 10px;
                        border-left: 1px solid var(---main-border-color-notif);
                        border-top: 1px solid var(--main-border-color-notif);
                        box-shadow: none;
                        z-index: 1;
                        -webkit-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }
                }
            }
            
        }
    }

    // media request
    $bp-small: 930px;
    
    @media only screen and (max-width: $bp-small){
             .logo {
                 display: none;
             }  
             .menuIcon {
                display: block;

                img {
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                }
             }    
    }

</style>