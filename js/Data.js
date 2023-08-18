    
    // Graphics

	var Images = {
       
            "Video_0":document.createElement("video"),
            "Video_1":document.createElement("video"),
            "Video_2":document.createElement("video"),
            "Video_3":document.createElement("video"),
            "Video_4":document.createElement("video"),
            
            // Render 3D

            "Back_1": document.createElement("img"),
            "Back_2": document.createElement("img"),
            "Wall_1": document.createElement("img"),
            "Wall_2": document.createElement("img"),
            
            "Back_1_1": document.createElement("img"),
            "Back_2_1": document.createElement("img"),

            // Paski

            "Red": document.createElement("img"),
            "Black": document.createElement("img"),

            "Red_Build": document.createElement("img"),
            "Black_Build": document.createElement("img"),
            
            "Red_2": document.createElement("img"),
            "Red_Build_2": document.createElement("img"),
            
            // Desktop

            "Mouse_0": document.createElement("img"),
            "Mouse_1": document.createElement("img"),

            "OpenWorld_G": document.createElement("img"),
            "Render3D_G": document.createElement("img"),
            "VisualNovel_G": document.createElement("img"),

            "Album": document.createElement("img"),
            "Money": document.createElement("img"),
            "AnimationsGraphic": document.createElement("img"),
            "AnimationsGraphic2": document.createElement("img"),
            "Stars": document.createElement("img"),
            "Inter": document.createElement("img"),
            "Inter_2": document.createElement("img"),
            "Inter_3": document.createElement("img"),
            "Inter_4": document.createElement("img"),
            "Inter_5": document.createElement("img"),
            "Inter_6": document.createElement("img"),
            "Inter_7": document.createElement("img"),

            "Background_Black": document.createElement("img"),
            "Background_0": document.createElement("img"),
            "Background_1": document.createElement("img"),
            "Background_3": document.createElement("img"),
            "Background_3_T_0": document.createElement("img"),
            "Background_3_T_1": document.createElement("img"),
            "Background_5": document.createElement("img"),
            "Background_5_T": document.createElement("img"),
            "Background_6": document.createElement("img"),
            "Background_7": document.createElement("img"),
            "Background_8": document.createElement("img"),
            "Background_8_T": document.createElement("img"),
            "Background_9": document.createElement("img"),
            "Background_11": document.createElement("img"),
            "Background_12": document.createElement("img"),
            "Background_13": document.createElement("img"),
            "Background_14": document.createElement("img"),
            "Background_15": document.createElement("img"),

            "Button_1": document.createElement("img"),
            "Button_2": document.createElement("img"),
            "Button_3": document.createElement("img"),
            "Button_4": document.createElement("img"),
            "Button_5": document.createElement("img"),
            "Button_6": document.createElement("img"),
            "Button_7": document.createElement("img"),
            "Button_8": document.createElement("img"),
            "Button_9": document.createElement("img"),
            "Button_10": document.createElement("img"),
            "Button_11": document.createElement("img"),
            "Button_12": document.createElement("img"),
            "Button_13": document.createElement("img"),
            "Button_14": document.createElement("img"),
            "Button_15": document.createElement("img"),
            "Button_16": document.createElement("img"),
            "Button_17": document.createElement("img"),
            "Button_18": document.createElement("img"),
            "Button_19": document.createElement("img"),
            "Button_20": document.createElement("img"),
            "Button_21": document.createElement("img"),

            "ListButton": document.createElement("img"),
            "ListButton_2": document.createElement("img"),
            "ListLU": document.createElement("img"),
            "List_1": document.createElement("img"),
            "List_2": document.createElement("img"),
            "List_3": document.createElement("img"),
            "List_4_1": document.createElement("img"),
            "List_4_2": document.createElement("img"),
            "List_5": document.createElement("img"),
            "List_6": document.createElement("img"),
            
            "LockTrophy": document.createElement("img"),
            "Achiv_0": document.createElement("img"),
            "Achiv_1": document.createElement("img"),
            "Achiv_2": document.createElement("img"),
            "Achiv_3": document.createElement("img"),

            // Interfejs Open World Window

            "OP_0": document.createElement("img"),
            "OP_1": document.createElement("img"),
            "OP_2": document.createElement("img"),
            "OP_3": document.createElement("img"),
            "OP_4": document.createElement("img"),
            "OP_5": document.createElement("img"),
            "OP_6": document.createElement("img"),
            "OP_7": document.createElement("img"),
            "OP_8": document.createElement("img"),
            "OP_9": document.createElement("img"),
            "OP_10": document.createElement("img"),

            // Tower

            "Tower_Anim": document.createElement("img"),
            "Tower_Build": document.createElement("img"),
            "Tower_Destroy": document.createElement("img"),
            "Tower_Prepare": document.createElement("img"),
            "Tower_Shoot": document.createElement("img"),
            "Tower_Shoot2": document.createElement("img"),
            "Tower_Wait": document.createElement("img"),
            
            // Bullets
            
            "Ball": document.createElement("img"),
            "Ball_Boom": document.createElement("img"),

            // Enemy

            "Enemy_Die_Down": document.createElement("img"),
            "Enemy_Die_Up": document.createElement("img"),
            "Enemy_Move_Down": document.createElement("img"),
            "Enemy_Move_Up": document.createElement("img"),

            // Open World

            "Floor_1": document.createElement("img"),
            "Floor_2": document.createElement("img"),
            "Floor_3": document.createElement("img"),
        
            "Obelisk_1":document.createElement("img"),
            "Obelisk_2":document.createElement("img"),
            "Obelisk_3":document.createElement("img"),
            "Obelisk_4":document.createElement("img"),
            "Obelisk_5":document.createElement("img"),
            "Obelisk_6":document.createElement("img"),
    
            "Obelisk_P_1":document.createElement("img"),
            "Obelisk_P_2":document.createElement("img"),
            "Obelisk_P_3":document.createElement("img"),
            "Obelisk_P_4":document.createElement("img"),
            "Obelisk_P_5":document.createElement("img"),
            "Obelisk_P_6":document.createElement("img"),
            
            // Hero

            "Hero_MoveF_Down": document.createElement("img"),
            "Hero_MoveF_Up": document.createElement("img"),
            "Hero_Stay_Up": document.createElement("img"),
            "Hero_Stay_Down": document.createElement("img"),
            
            "Hero_MoveF_Down_M": document.createElement("img"),
            "Hero_MoveF_Up_M": document.createElement("img"),
            "Hero_Stay_Up_M": document.createElement("img"),
            "Hero_Stay_Down_M": document.createElement("img"),
        
            // Rain

            "RainF":document.createElement("img"),
            "RainD":document.createElement("img"),
            
            // Energy

            "Energi":document.createElement("img"),
            "WaterFMirr":document.createElement("img"),
            "EnergiDie":document.createElement("img"),
           
            // Novel

            "Unit_1":document.createElement("img"),
            "Unit_1_100":document.createElement("img"),
            "Unit_2":document.createElement("img"),
            "Unit_2_100":document.createElement("img"),
            "Unit_3":document.createElement("img"),
            "Unit_3_100":document.createElement("img"),
            "Unit_6":document.createElement("img"),
            "Unit_6_100":document.createElement("img"),
            
        };
     
        Images.Video_0.src = "video/Test_Wideo.mp4";
        Images.Video_1.src = "video/Test_Wideo.mp4";
        Images.Video_2.src = "video/Test_Wideo.mp4";
        Images.Video_3.src = "video/Test_Wideo.mp4";
        Images.Video_4.src = "video/Test_Wideo.mp4";

        // Render 3D

        Images.Back_1.src = "img/Render3D/Back_1.png";
        Images.Back_2.src = "img/Render3D/Back_2.png";
        Images.Wall_1.src = "img/Render3D/Wall_1.png";
        Images.Wall_2.src = "img/Render3D/Wall_2.png";

        Images.Back_1_1.src = "img/Render3D/Back_1_1.png";
        Images.Back_2_1.src = "img/Render3D/Back_2_1.png";

        // Paski

        Images.Red.src = "img/Red.png";
        Images.Black.src = "img/Black.png";

        Images.Red_Build.src = "img/Red_Build.png";
        Images.Black_Build.src = "img/Black_Build.png";

        Images.Red_2.src = "img/Red_2.png";
        Images.Red_Build_2.src = "img/Red_Build_2.png";

        // Desktop

        Images.Mouse_0.src = "img/Mouse/Mouse_0.png";
        Images.Mouse_1.src = "img/Mouse/Mouse_1.png";

        Images.OpenWorld_G.src = "img/OpenWorld_G.png";
        Images.Render3D_G.src = "img/Render3D_G.png";
        Images.VisualNovel_G.src = "img/VisualNovel_G.png";

        Images.Album.src = "img/Album.png";
        Images.Money.src = "img/Money.png";
        Images.AnimationsGraphic.src = "img/AnimationsGraphic.png";
        Images.AnimationsGraphic2.src = "img/AnimationsGraphic2.png";
        Images.Stars.src = "img/Stars.png";
        Images.Inter.src = "img/Inter.png";
        Images.Inter_2.src = "img/Inter_2.png";
        Images.Inter_3.src = "img/Inter_3.png";
        Images.Inter_4.src = "img/Inter_4.png";
        Images.Inter_5.src = "img/Inter_5.png";
        Images.Inter_6.src = "img/Inter_6.png";
        Images.Inter_7.src = "img/Inter_7.png";

        Images.ListLU.src = "img/Lists/ListLU.png";
        Images.ListButton.src = "img/Lists/ListButton.png";
        Images.ListButton_2.src = "img/Lists/ListButton_2.png";
        Images.List_1.src = "img/Lists/List_1.png";
        Images.List_2.src = "img/Lists/List_2.png";
        Images.List_3.src = "img/Lists/List_3.png";
        Images.List_4_1.src = "img/Lists/List_4_1.png";
        Images.List_4_2.src = "img/Lists/List_4_2.png";
        Images.List_5.src = "img/Lists/List_5.png";
        Images.List_6.src = "img/Lists/List_6.png";

        Images.Background_Black.src = "img/Backgrounds/Background_Black.png";
        Images.Background_0.src = "img/Backgrounds/Background_0.png";
        Images.Background_1.src = "img/Backgrounds/Background_1.png";
        Images.Background_3.src = "img/Backgrounds/Background_3.png";
        Images.Background_3_T_0.src = "img/Backgrounds/Background_3_T_0.png";
        Images.Background_3_T_1.src = "img/Backgrounds/Background_3_T_1.png";
        Images.Background_5.src = "img/Backgrounds/Background_5.png";
        Images.Background_5_T.src = "img/Backgrounds/Background_5_T.png";
        Images.Background_6.src = "img/Backgrounds/Background_6.png";
        Images.Background_7.src = "img/Backgrounds/Background_7.png";
        Images.Background_8.src = "img/Backgrounds/Background_8.png";
        Images.Background_8_T.src = "img/Backgrounds/Background_8_T.png";
        Images.Background_9.src = "img/Backgrounds/Background_9.png";
        Images.Background_11.src = "img/Backgrounds/Background_11.png";
        Images.Background_12.src = "img/Backgrounds/Background_12.png";
        Images.Background_13.src = "img/Backgrounds/Background_13.png";
        Images.Background_14.src = "img/Backgrounds/Background_14.png";
        Images.Background_15.src = "img/Backgrounds/Background_15.png";

        Images.Button_1.src = "img/Buttons/Button_1.png";
        Images.Button_2.src = "img/Buttons/Button_2.png";
        Images.Button_3.src = "img/Buttons/Button_3.png";
        Images.Button_4.src = "img/Buttons/Button_4.png";
        Images.Button_5.src = "img/Buttons/Button_5.png";
        Images.Button_6.src = "img/Buttons/Button_6.png";
        Images.Button_7.src = "img/Buttons/Button_7.png";
        Images.Button_8.src = "img/Buttons/Button_8.png";
        Images.Button_9.src = "img/Buttons/Button_9.png";
        Images.Button_10.src = "img/Buttons/Button_10.png";
        Images.Button_11.src = "img/Buttons/Button_11.png";
        Images.Button_12.src = "img/Buttons/Button_12.png";
        Images.Button_13.src = "img/Buttons/Button_13.png";
        Images.Button_14.src = "img/Buttons/Button_14.png";
        Images.Button_15.src = "img/Buttons/Button_15.png";
        Images.Button_16.src = "img/Buttons/Button_16.png";
        Images.Button_17.src = "img/Buttons/Button_17.png";
        Images.Button_18.src = "img/Buttons/Button_18.png";
        Images.Button_19.src = "img/Buttons/Button_19.png";
        Images.Button_20.src = "img/Buttons/Button_20.png";
        Images.Button_21.src = "img/Buttons/Button_21.png";

        Images.LockTrophy.src = "img/Achievments/LockTrophy.png";
        Images.Achiv_0.src = "img/Achievments/Achiv_0.png";
        Images.Achiv_1.src = "img/Achievments/Achiv_1.png";
        Images.Achiv_2.src = "img/Achievments/Achiv_2.png";
        Images.Achiv_3.src = "img/Achievments/Achiv_3.png";

        // Interfejs Open World Window

        Images.OP_0.src = "img/Buttons/OP_0.png";
        Images.OP_1.src = "img/Buttons/OP_1.png";
        Images.OP_2.src = "img/Buttons/OP_2.png";
        Images.OP_3.src = "img/Buttons/OP_3.png";
        Images.OP_4.src = "img/Buttons/OP_4.png";
        Images.OP_5.src = "img/Buttons/OP_5.png";
        Images.OP_6.src = "img/Buttons/OP_6.png";
        Images.OP_7.src = "img/Buttons/OP_7.png";
        Images.OP_8.src = "img/Buttons/OP_8.png";
        Images.OP_9.src = "img/Buttons/OP_9.png";
        Images.OP_10.src = "img/Buttons/OP_10.png";

        // Tower

        Images.Tower_Anim.src = "img/Tower/Tower_1_Anim.png";
        Images.Tower_Build.src = "img/Tower/Tower_1_Build.png";
        Images.Tower_Destroy.src = "img/Tower/Tower_1_Destroy.png";
        Images.Tower_Prepare.src = "img/Tower/Tower_1_Prepare.png";
        Images.Tower_Shoot.src = "img/Tower/Tower_1_Shoot.png";
        Images.Tower_Shoot2.src = "img/Tower/Tower_1_Shoot2.png";
        Images.Tower_Wait.src = "img/Tower/Tower_1_Wait.png";
        
        // Pociski i Inne
        
        Images.Ball.src = "img/Bullet/Ball.png";
        Images.Ball_Boom.src = "img/Bullet/Ball_Boom.png";
        
        // Przeciwnicy

        Images.Enemy_Die_Down.src = "img/Enemy/Enemy_Die_Down.png";
        Images.Enemy_Die_Up.src = "img/Enemy/Enemy_Die_Down.png";
        Images.Enemy_Move_Down.src = "img/Enemy/Enemy_Move_Down.png";
        Images.Enemy_Move_Up.src = "img/Enemy/Enemy_Move_Up.png";

        // Open World

        Images.Floor_1.src = "img/OpenWorld/Floor/Floor_1.png";
        Images.Floor_2.src = "img/OpenWorld/Floor/Floor_2.png";
        Images.Floor_3.src = "img/OpenWorld/Floor/Floor_3.png";

        Images.Obelisk_1.src = "img/OpenWorld/Obelisk/Obelisk_1.png";
        Images.Obelisk_2.src = "img/OpenWorld/Obelisk/Obelisk_2.png";
        Images.Obelisk_3.src = "img/OpenWorld/Obelisk/Obelisk_3.png";
        Images.Obelisk_4.src = "img/OpenWorld/Obelisk/Obelisk_4.png";
        Images.Obelisk_5.src = "img/OpenWorld/Obelisk/Obelisk_5.png";
        Images.Obelisk_6.src = "img/OpenWorld/Obelisk/Obelisk_6.png";

        Images.Obelisk_P_1.src = "img/OpenWorld/Obelisk/Obelisk_P_1.png";
        Images.Obelisk_P_2.src = "img/OpenWorld/Obelisk/Obelisk_P_2.png";
        Images.Obelisk_P_3.src = "img/OpenWorld/Obelisk/Obelisk_P_3.png";
        Images.Obelisk_P_4.src = "img/OpenWorld/Obelisk/Obelisk_P_4.png";
        Images.Obelisk_P_5.src = "img/OpenWorld/Obelisk/Obelisk_P_5.png";
        Images.Obelisk_P_6.src = "img/OpenWorld/Obelisk/Obelisk_P_6.png";

        // Hero

        Images.Hero_MoveF_Down.src = "img/OpenWorld/Hero/Hero_MoveF_Down.png";
        Images.Hero_MoveF_Up.src = "img/OpenWorld/Hero/Hero_MoveF_Up.png";
        Images.Hero_Stay_Up.src = "img/OpenWorld/Hero/Hero_Stay_Down.png";
        Images.Hero_Stay_Down.src = "img/OpenWorld/Hero/Hero_Stay_Down.png";

        Images.Hero_MoveF_Down_M.src = "img/OpenWorld/Hero/Hero_MoveF_Down_M.png";
        Images.Hero_MoveF_Up_M.src = "img/OpenWorld/Hero/Hero_MoveF_Up_M.png";
        Images.Hero_Stay_Up_M.src = "img/OpenWorld/Hero/Hero_Stay_Down_M.png";
        Images.Hero_Stay_Down_M.src = "img/OpenWorld/Hero/Hero_Stay_Down_M.png";

        // Rain

        Images.RainF.src = "img/OpenWorld/RainF.png";
        Images.RainD.src = "img/OpenWorld/RainD.png";

        // Energy

        Images.Energi.src = "img/OpenWorld/Energii_G/Energi.png";
        Images.EnergiDie.src = "img/OpenWorld/Energii_G/EnergiDie.png";
        Images.WaterFMirr.src = "img/OpenWorld/Energii_G/WaterFMirr.png";

        // Novel

        Images.Unit_1.src = "img/VNovel/Unit_1.png";
        Images.Unit_1_100.src = "img/VNovel/Unit_1_100.png";
        Images.Unit_2.src = "img/VNovel/Unit_2.png";
        Images.Unit_2_100.src = "img/VNovel/Unit_2_100.png";
        Images.Unit_3.src = "img/VNovel/Unit_3.png";
        Images.Unit_3_100.src = "img/VNovel/Unit_3_100.png";
        Images.Unit_6.src = "img/VNovel/Unit_6.png";
        Images.Unit_6_100.src = "img/VNovel/Unit_6_100.png";

        // Special Text

        var TextFile = {

            "Alphabet_1":{

                "Fun": function TextNumber(TextNumber,Split){  
    
                    if(TextNumber == ' ') return ["_",0.7,0];
                    
                    if(TextNumber == '0') return ["_0",0.95,0];
                    if(TextNumber == '1') return ["_1",0.7,0];
                    if(TextNumber == '2') return ["_2",1,0];
                    if(TextNumber == '3') return ["_3",1,0];
                    if(TextNumber == '4') return ["_4",1,0];
                    if(TextNumber == '5') return ["_5",1,0];
                    if(TextNumber == '6') return ["_6",1,0];
                    if(TextNumber == '7') return ["_7",1,0];
                    if(TextNumber == '8') return ["_8",1,0];
                    if(TextNumber == '9') return ["_9",1,0];
            
                    if(TextNumber == ':') return ["S5",1,0]; // ' : '
                    if(TextNumber == '%') return ["S7",1,0]; // %
                    
                    return ["_",0.7,0];

                },

                "_": document.createElement("img"),

                "_0": document.createElement("img"),
                "_1": document.createElement("img"),
                "_2": document.createElement("img"),
                "_3": document.createElement("img"),
                "_4": document.createElement("img"),
                "_5": document.createElement("img"),
                "_6": document.createElement("img"),
                "_7": document.createElement("img"),
                "_8": document.createElement("img"),
                "_9": document.createElement("img"),

                "S5": document.createElement("img"),
                "S7": document.createElement("img"),

            }

        };

        TextFile.Alphabet_1._.src = "img/Alphabet_1/_.png";
        TextFile.Alphabet_1._0.src = "img/Alphabet_1/0.png";
        TextFile.Alphabet_1._1.src = "img/Alphabet_1/1.png";
        TextFile.Alphabet_1._2.src = "img/Alphabet_1/2.png";
        TextFile.Alphabet_1._3.src = "img/Alphabet_1/3.png";
        TextFile.Alphabet_1._4.src = "img/Alphabet_1/4.png";
        TextFile.Alphabet_1._5.src = "img/Alphabet_1/5.png";
        TextFile.Alphabet_1._6.src = "img/Alphabet_1/6.png";
        TextFile.Alphabet_1._7.src = "img/Alphabet_1/7.png";
        TextFile.Alphabet_1._8.src = "img/Alphabet_1/8.png";
        TextFile.Alphabet_1._9.src = "img/Alphabet_1/9.png";
        TextFile.Alphabet_1.S5.src = "img/Alphabet_1/S5.png";
        TextFile.Alphabet_1.S7.src = "img/Alphabet_1/S7.png";
            
        var SpecialTextData = { 
        
                "length": 2,

                0:{ 
                    
                    "File": "Alphabet_1",
                    "TW": 60,
                    "TH": 83,
                    "Size": 0.3,
                    "Width": 0,
                    "Height": 0,
    
                },

                1:{ 
                    
                    "File": "Alphabet_1",
                    "TW": 60,
                    "TH": 83,
                    "Size": 0.25,
                    "Width": 0,
                    "Height": 0,
    
                },

            };
        
        // Main Engine

        var CopyList = [],
            AlertList = [],
            WindowList = [],
            WindowDrawList = [],
            TimeInter = { },
            Resize,
            
            Time = {

                "Today": new Date(),
                "A0": 0,  // Minute
                "A1": 0,  // Seconds
                "A2": 0   // Hour

            },
            
            SoundBase = {
                
                "KillSounds":{ // Which copy sound for which npc kill

                    "length": 3,
            
                     0: 3,
                     1: 3,
                     2: 3,

                },

                "ShootSounds":{ // What sound from the copy for the launch of the building

                    "Tower": 4,

                },

                "OpenWorld":{

                    "NPC_Foot": 5,

                },

                "Other":{

                    "Money": 0,

                },

                "Soundtracks":{ // Soudtracks - will not fire if the window does not list any sound

                    "length": 1,

                    "SoundBuff": null,
                    "ActSound": null,
                    "Sound": null,

                    0: {
                        
                        "S": "sound/Loop_Sound.m4a",
                        "Buffor": 80.00,
                        "Volume": 0.02,
                        "Windows":{ // By window names - if the window does not change from the list the soundtrack continues to play

                            "length": 1,

                             0: "W15",

                        }
                    
                    },

                },

                "Copy":{ // Copying and reproducing sounds

                    "length": 6,

                    0: {
                       
                        "S": "sound/Copy_Sound.mp3",
                        "MaxList": 15, // max sounds in the list
                        "Volume": 1, // starting volume
                        "Volm": 0.05, // turning down the volume
                        "minVol": 0.05, // after leaving max how many sounds they have 
                        "Rand": 4, // every how many times sounds appear after exiting max
                        "List": [],
                        "Stop": true, // whether to stop at the pause
                 
                    },

                    1: {
                       
                        "S": "sound/Button_Click.ogg",
                        "MaxList": 100, // max sounds in the list
                        "Volume": 0.3, // starting volume
                        "Volm": 0, // turning down the volume
                        "minVol": 1, // after leaving max how many sounds they have 
                        "Rand": 1, // every how many times sounds appear after exiting max
                        "List": [],
                        "Stop": true, // whether to stop at the pause
                 
                    },

                    2: {
                       
                        "S": "sound/Button_Hover.wav",
                        "MaxList": 100, // max sounds in the list
                        "Volume": 0.05, // starting volume
                        "Volm": 0, // turning down the volume
                        "minVol": 1, // after leaving max how many sounds they have 
                        "Rand": 1, // every how many times sounds appear after exiting max
                        "List": [],
                        "Stop": true, // whether to stop at the pause
                 
                    },

                    3: {
                       
                        "S": "sound/Dead_Enemy.mp3",
                        "MaxList": 100, // max sounds in the list
                        "Volume": 0.03, // starting volume
                        "Volm": 0, // turning down the volume
                        "minVol": 1, // after leaving max how many sounds they have 
                        "Rand": 1, // every how many times sounds appear after exiting max
                        "List": [],
                        "Stop": true, // whether to stop at the pause
                 
                    },

                    4: {
                       
                        "S": "sound/Tower_Attack.mp3",
                        "MaxList": 100, // max sounds in the list
                        "Volume": 0.02, // starting volume
                        "Volm": 0, // turning down the volume
                        "minVol": 1, // after leaving max how many sounds they have 
                        "Rand": 1, // every how many times sounds appear after exiting max
                        "List": [],
                        "Stop": true, // whether to stop at the pause
                 
                    },

                    5: {
                       
                        "S": "sound/Water_Move.mp3",
                        "MaxList": 100, // max sounds in the list
                        "Volume": 0.01, // starting volume
                        "Volm": 0, // turning down the volume
                        "minVol": 1, // after leaving max how many sounds they have 
                        "Rand": 1, // every how many times sounds appear after exiting max
                        "List": [],
                        "Stop": true, // whether to stop at the pause
                 
                    },
    
                }

            },
            
            MainData = {

                "LogoWindow": true,
                "Mobile": false,
                "StartWindow": 0, // 20
                "Orientation": "Landscape", //Landscape Portrait
                "AppVersion": "1.0.1",
                "EngineVersion": "1.0.1",
                "ScreenType": "16:9", // 16:9 liczy jako 16:8
                "BlockRClick": true,
                "SystemPaused": false,

                "Soundtrack": false,
                "VideoLen": 5, // number of videos in the files
                "VideoStop":[],

                "RightMouse": false,
                "ActWindowN": null,
                "InfoWindow": null,

                "Mouse": 0,

                "Width": 0,
                "Height": 0,
                "PxW": 0,
                "PxH": 0,
                "TouchX": 0,
                "TouchY": 0,
                "PointZeroY": 0,
                "PointZeroX": 0,
                "DiffY": 0, 
                "DiffX": 0, 

                "LanNumber": 2,
                "Language": 1,  // 0 - Polski  1 - Angielski

                "Fullscreen": 0,
                "Desktop": 0,

                "Interfejs": false,
                "InterNum": null,
                "OnInter": false,

                "OnWindow": false,
                "OnWindowNum": 0,
                "WindowMove": false,

                "Alert": false,
                "AlertNum": 0,
                
                "CurrentButton": null,
                "ButtonWork": true,

                "HelpValue": {

                    "P0": "",
                    "Sound": "",
                    "Form": null,
                    "T0": null,

                },

            },
            
            Window = {
		        
                "S":{ // Start-up Information Window
    
                    "Fullscreen": true,
                    "Desktop": true,
                    "Inter": false,

                    "Name": "LogoStart",
                    "ObjectNumber": 0,
                    "WindowType": 0,
                    "Spec": "LogoStart",

                    "PX": 0,
                    "PY": 0,

                    "ScaleData":{

                        "ScaleSim": 0, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },
        
                    "SpecText": {},

                },

                "length": 14,
          
                0: { // Start-up Information Window
                    
                    "Desktop": true,

                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W0",
                    "ObjectNumber": 20,
                    "WindowType": 0,
                    
                    "PX": 0,
                    "PY": 0,

                    "ScaleData":{

                        "ScaleSim": 0, // 0 = brak, 1 = scalowanie w gore, 2 = w dol
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,

                    },

                    "SpecText": { 
                        
                        0:{

                            "Num": 1,
    
                            0: {
                                "Text": 54,
                                "Data": {

                                    0: {

                                        "PX": 1920/2,
                                        "PY": 160,
                                        "Align": "center",
                                        "Data": 11,
    
                                    },

                                    1: {

                                        "PX": 1920/2,
                                        "PY": 160,
                                        "Align": "center",
                                        "Data": 11,
    
                                    },

                                },
                            },

                        },

                        1: {

                            "Num": 1,
    
                            0: {
                                "Text": 1,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            } 

                        },

                        2: {

                            "Num": 1,
    
                            0: {
                                "Text": 8,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        3: {

                            "Num": 1,
    
                            0: {
                                "Text": 9,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        4: {

                            "Num": 1,
    
                            0: {
                                "Text": 10,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        5: {

                            "Num": 1,
    
                            0: {
                                "Text": 26,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        6: {

                            "Num": 1,
    
                            0: {
                                "Text": 53,
                                "Data": {
 
                                    0: {
 
                                        "PX": 202,
                                        "PY": 233,
                                        "Align": "center",
                                        "Data": 11,
    
                                    },
 
                                    1: {
 
                                        "PX": 202,
                                        "PY": 233,
                                        "Align": "center",
                                        "Data": 11,
    
                                    }
 
                                },
                            }   

                        },


                        7: {

                            "Num": 1,
    
                            0: {
                                "Text": 11,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        8: {

                            "Num": 1,
    
                            0: {
                                "Text": 13,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        9: {

                            "Num": 1,
    
                            0: {
                                "Text": 14,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },


                        10: {

                            "Num": 1,
    
                            0: {
                                "Text": 0,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 30,
                                        "Align": "normal",
                                        "Data": 20,
    
                                    }
 
                                },
                            }   

                        },

                        11: {

                            "Num": 1,
    
                            0: {
                                "Text": 32,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        12: {

                            "Num": 1,
    
                            0: {
                                "Text": 12,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        13: {

                            "Num": 1,
    
                            0: {
                                "Text": 29,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        14: {

                            "Num": 1,
    
                            0: {
                                "Text": 30,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        15: {

                            "Num": 1,
    
                            0: {
                                "Text": 31,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        16: {

                            "Num": 1,
    
                            0: {
                                "Text": 47,
                                "Data": {
 
                                    0: {

                                        "PX": 202,
                                        "PY": 233,
                                        "Align": "center",
                                        "Data": 11,
    
                                    },
 
                                    1: {
 
                                        "PX": 202,
                                        "PY": 233,
                                        "Align": "center",
                                        "Data": 11,
    
                                    }
 
                                },
                            }   

                        },

                        17: {

                            "Num": 2,
        
                            0: {
                                "Spec": "N5",
                                "Data": {
    
                                    0: {
    
                                        "PX": 25,
                                        "PY": 65,
                                        "Align": "normal",
                                        "Data": 12,
    
                                    },
    
                                    1: {
    
                                        "PX": 25,
                                        "PY": 65,
                                        "Align": "normal",
                                        "Data": 12,
    
                                    }
    
                                },
                            },

                            1: {
                                "Text": 42,
                                "Data": {
    
                                    0: {
    
                                        "PX": 25,
                                        "PY": 30,
                                        "Align": "normal",
                                        "Data": 16,
    
                                    },
    
                                    1: {
    
                                        "PX": 25,
                                        "PY": 30,
                                        "Align": "normal",
                                        "Data": 16,
    
                                    }
    
                                },
                            },

                        },

                        18: {

                            "Num": 1,
        
                            0: {
                                "Text": 52,
                                "Data": {
 
                                    0: {
 
                                        "PX": 202,
                                        "PY": 233,
                                        "Align": "center",
                                        "Data": 11,
    
                                    },
 
                                    1: {
 
                                        "PX": 202,
                                        "PY": 233,
                                        "Align": "center",
                                        "Data": 11,
    
                                    }
 
                                },
                            },

                        },

                        19: {

                            "Num": 1,
    
                            0: {
                                "Text": 61,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },
                    
                    },

                },

                1: { // Ordinary list with moving to 14 by changing data such as supported video and text
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W1",
                    "ObjectNumber": 4,
                    "WindowType": 2,
                    
                    "PX": 629,
                    "PY": 335,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "ListSpecial":{

                        "DifferenceY": 0,
                        "StopList": 0,
                        "Sort": false,
                        "ListFilter": false,
                        "ListTag": "",

                    },

                    "List": {
                        
                        "ListNum": 0,
                        "ObjectType": "List",
                        "TypeList": "Normal",
                        "PX": 19,
                        "PY": 95,
                        "StopListX":1,
                        "StopListY": 3, 
        
                        "SpecData": { },
                     
                        "Ram":{
        
                            "Height": 396,
                            "Width": 642,
                            "PX": 10,
                            "PY": 86
        
                        },
    
                        "DrawRam":{
        
                            "Height": 396,
                            "Width": 642,
                            "PX": 10,
                            "PY": 86
        
                        },

                        "Objects":{
                       
                            "length": 10,
                
                            0:{
                
                                "Num": 0,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,
                                
                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N0",
                                        "Data": {
        
                                            0: {
        
                                                "PX": 25,
                                                "PY": 70,
                                                "Align": "normal",
                                                "Data": 3,
            
                                            },
        
                                            1: {
        
                                                "PX": 25,
                                                "PY": 70,
                                                "Align": "normal",
                                                "Data": 3,
            
                                            }
        
                                        },

                                    }  
        
                                 },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_0"
            
                                    }
        
                                },
                                
                            },
                
                            1:{
                
                                "Num": 1,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N1",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_1"
            
                                    }
        
                                },
                                
                            },
                
                            2:{
                
                                "Num": 2,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N2",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_2"
            
                                    }
        
                                },

                            
                            },
                
                            3:{
                
                                "Num": 3,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N3",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_3"
            
                                    }
        
                                }
                                
                            },
                
                            4:{
                
                                "Num": 4,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N4",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_4"
            
                                    }
        
                                },
                                
                            },
                
                            5:{
                
                                "Num": 5,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N5",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_0"
            
                                    }
        
                                }
                                
                            },
                
                            6:{
                
                                "Num": 6,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N6",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_1"
            
                                    }
        
                                },
                                
                            },
                
                            7:{
                
                                "Num": 7,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N7",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_2"
            
                                    }
        
                                },
                                
                                
                            },
                
                            8:{
                
                                "Num": 8,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N8",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_3"
            
                                    }
        
                                },
                            
                            },
                
                            9:{
                
                                "Num": 9,

                                "File": "List_1",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N9",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                },

                                "Buttons":{

                                    "length": 1,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":521,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "Href": 14,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Video": "Video_4"
            
                                    }
        
                                },
                                
                            },
                        
                        },

                    },
        
                    "SpecText": { 

                        3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 1,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                        }

                    },

                },

                2: { // Level list
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W2",
                    "ObjectNumber": 5,
                    "WindowType": 2,
                    
                    "PX": 629,
                    "PY": 335,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "ListSpecial":{

                        "DifferenceY": 0,
                        "StopList": 0,
                        "Sort": false,
                        "ListFilter": false,
                        "ListTag": "",

                    },

                    "List": {
                        
                        "ListNum": 0,
                        "SpecList": 0,
                        "TypeList": "Level",
                        "PX": 19,
                        "PY": 95,
                        "StopListX":2,
                        "StopListY": 4, 
        
                        "Ram":{
        
                            "Height": 396,
                            "Width": 642,
                            "PX": 10,
                            "PY": 86
        
                        },
    
                        "DrawRam":{
        
                            "Height": 396,
                            "Width": 642,
                            "PX": 10,
                            "PY": 86
        
                        },

                        "SpecData":{
            
                            "Points":{
                                
                                "File": "Stars",
                                "TMX":89,
                                "TMY":0,
                                "Height": 86,
                                "Width": 89,
                                "PX": 0,
                                "PY": 0,
            
                            },
            
                        },
        
                        "Objects":{ 	
                    
                            "length": 4,
                
                            0:{
        
                                "Num":0,

                                "File": "ListLU",
                                "Height": 0,
                                "Width": 0,
                                "PH": 93,
                                "PW": 288,

                                "Buttons":{

                                    "length": 3,
        
                                    0:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":0,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 5,
            
                                        "SNum": 0,
                                        "Lock": 86
            
                                    },

                                    1:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":96,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 10,
            
                                        "SNum": 1,
                                        "Lock": 86
            
                                    },

                                    2:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":192,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 15,
            
                                        "SNum": 2,
                                        "Lock": 86
            
                                    },
        
                                },
                
                            },
        
                            1:{
        
                                "Num":1,

                                "File": "ListLU",
                                "Height": 0,
                                "Width": 0,
                                "PH": 93,
                                "PW": 288,

                                "Buttons":{

                                    "length": 3,
        
                                    0:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":0,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 20,
            
                                        "SNum": 3,
                                        "Lock": 86
            
                                    },

                                    1:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":96,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 25,
            
                                        "SNum": 4,
                                        "Lock": 86
            
                                    },

                                    2:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":192,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 30,
            
                                        "SNum": 5,
                                        "Lock": 86
            
                                    },
        
                                },

                            },
        
                            2:{
                               
                                "Num":2,

                                "File": "ListLU",
                                "Height": 0,
                                "Width": 0,
                                "PH": 93,
                                "PW": 288,

                                "Buttons":{

                                    "length": 3,
        
                                    0:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":0,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 35,
            
                                        "SNum": 6,
                                        "Lock": 86
            
                                    },

                                    1:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":96,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 40,
            
                                        "SNum": 7,
                                        "Lock": 86
            
                                    },

                                    2:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":192,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 45,
            
                                        "SNum": 8,
                                        "Lock": 86
            
                                    },
        
                                },

                            },
        
                            3:{
        
                                "Num":3,

                                "File": "ListLU",
                                "Height": 0,
                                "Width": 0,
                                "PH": 93,
                                "PW": 288,

                                "Buttons":{

                                    "length": 3,
        
                                    0:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":0,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 50,
            
                                        "SNum": 9,
                                        "Lock": 86
            
                                    },

                                    1:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":96,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 55,
            
                                        "SNum": 10,
                                        "Lock": 86
            
                                    },

                                    2:{
        
                                        "File": "ListLU",
                                        "TMX": 89,
                                        "TMY": 0,
                                        "PX":192,
                                        "PY":0,
                                        "Height": 86,
                                        "Width": 89,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                                        "Money": 60,
            
                                        "SNum": 11,
                                        "Lock": 86
            
                                    },
        
                                },

                            },
        
                        },

                        "SpecText": {

                            "TData": 3,
                            "PX": 0,
                            "PY": 30,
                            "Width": 86,
    
                        },

                    },
        
                    "SpecText": { 

                        3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 8,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                         },

                        4:{

                            "Num": 1,
                            
                            0:{

                                "Spec": "N1",
                                "Data": {
        
                                    0: {
        
                                        "PX": 65/2,
                                        "PY": 50,
                                        "Align": "center",
                                        "Data": 10,
        
                                    },
        
                                    1: {
        
                                        "PX": 65/2,
                                        "PY": 50,
                                        "Align": "center",
                                        "Data": 10,
        
                                    }
        
                                },
        

                            }
    
                       }

                    },

                },

                3: { // Achievements list with progress bar + Coin creation
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W3",
                    "ObjectNumber": 8,
                    "WindowType": 17,
                    
                    "PX": 629,
                    "PY": 335,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "ListSpecial":{

                        "DifferenceY": 0,
                        "StopList": 0,
                        "Sort": false,
                        "ListFilter": false,
                        "ListTag": "",

                    },

                    "List": {
                        
                        "ListNum": 0,
                        "TypeList": "Achievement",
                        "PX": 19,
                        "PY": 95,
                        "StopListX":1,
                        "StopListY": 3, 
        
                        "SpecData": {
                        
                            "LockTrophy": "LockTrophy",
                            "Width":90,
                            "Height":90,
                            "PX":7,
                            "PY":7,
                            "Text":{
                             
                                "Num": 1,
        
                                0: {
                                    "Text": 3,
                                    "Data": {
     
                                        0: {
     
                                            "PX": 110,
                                            "PY": 40,
                                            "Align": "normal",
                                            "Data": 17,
        
                                        },
     
                                        1: {
     
                                            "PX": 110,
                                            "PY": 40,
                                            "Align": "normal",
                                            "Data": 17,
        
                                        }
     
                                    },
                                }  
    
                             }
                            
                        },
    
                        "Ram":{
        
                            "Height": 396,
                            "Width": 642,
                            "PX": 10,
                            "PY": 86
        
                        },
    
                        "DrawRam":{
        
                            "Height": 396,
                            "Width": 642,
                            "PX": 10,
                            "PY": 86
        
                        },
        
                        "PBData":{
                            
                            "Type": "Percent",
                            "File": "Red_2",

                            "TMW": 517,
                            "TMH": 27,
                            
                            "Height": 27,
                            "Width": 517,

                            "PX": 100,
                            "PY": 70,
                            
                            "BarC":{

                                "TMW": 517,
                                "TMH": 27,
                                
                                "File": "Red_Build_2",
                                "PX": 0,
                                "PY": 0,

                                "MaxWidth": 517,
                                "Height": 27

                            }
                            
                        },

                        "Objects":{
                   
                            "length": 4,
                           
                            0:{

                                "Num":0,

                                "File": "List_2",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Trophy": "Achiv_0",
                                "Bar": false,
                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": 4,
                                        "Data": {
         
                                            0: {
         
                                                "PX": 110,
                                                "PY": 40,
                                                "Align": "normal",
                                                "Data": 17,
            
                                            },
         
                                            1: {
         
                                                "PX": 110,
                                                "PY": 40,
                                                "Align": "normal",
                                                "Data": 17,
            
                                            }
         
                                        },
                                    }  
        
                                }

                            },
                
                            1:{

                                "Num":1,

                                "File": "List_2",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Trophy": "Achiv_1",
                                "Bar": false,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": 5,
                                        "Data": {
         
                                            0: {
         
                                                "PX": 110,
                                                "PY": 40,
                                                "Align": "normal",
                                                "Data": 17,
            
                                            },
         
                                            1: {
         
                                                "PX": 110,
                                                "PY": 40,
                                                "Align": "normal",
                                                "Data": 17,
            
                                            }
         
                                        },
                                    }  
        
                                }

                            },
                
                            2:{

                                "Num":2,

                                "File": "List_2",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Trophy": "Achiv_2",
                                "Bar": true,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": 6,
                                        "Data": {
         
                                            0: {
         
                                                "PX": 110,
                                                "PY": 40,
                                                "Align": "normal",
                                                "Data": 17,
            
                                            },
         
                                            1: {
         
                                                "PX": 110,
                                                "PY": 40,
                                                "Align": "normal",
                                                "Data": 17,
            
                                            }
         
                                        },
                                    }  
        
                                }

                            },
                
                            3:{

                                "Num":3,

                                "File": "List_2",
                                "PH": 111,
                                "PW": 631,
                                "Height": 104,
                                "Width": 624,

                                "Trophy": "Achiv_3",
                                "Bar": true,

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": 7,
                                        "Data": {
         
                                            0: {
         
                                                "PX": 110,
                                                "PY": 40,
                                                "Align": "normal",
                                                "Data": 17,

                                            },
         
                                            1: {
         
                                                "PX": 110,
                                                "PY": 40,
                                                "Align": "normal",
                                                "Data": 17,
            
                                            }
         
                                        },
                                    }  
        
                                }

                            }
        
                        },

                    },
        
                    "SpecText": { 

                        3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 9,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                        }

                    },

                },

                4: { // Filtered and sorted list
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W4",
                    "ObjectNumber": 11,
                    "WindowType": 4,
                    
                    "PX": 340,
                    "PY": 115,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "ListSpecial":{

                        "DifferenceY": 0,
                        "StopList": 0,
                        "Sort": false,
                        "SortMax": false,
                        "ListFilter": false,
                        "ListTag": "", 

                    },

                    "List": {
                        
                        "ListNum": 0,
                        "TypeList": "Normal",
                        "PX": 24,
                        "PY": 100,
                        "StopListX":4,
                        "StopListY": 3,

                        "SpecText": {

                            "Num": 1,
    
                            0: {
                                
                                "SText": true,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 190,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 190,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }
 
                                },
                                
                            },

                        },
        
                        "SpecData": {
                            
                            "Image": true,
                            "ImageNumber": 1,
    
                            "Width":256,
                            "Height":206,
                            "PX":6,
                            "PY":6,
                                
                        },
                         
                        "Ram":{
        
                            "Height": 756,
                            "Width": 1122,
                            "PX": 10,
                            "PY": 86
        
                        },
    
                        "DrawRam":{
        
                            "Height": 756,
                            "Width": 1122,
                            "PX": 10,
                            "PY": 86
        
                        },

                        "Objects":{ 
                       
                            "length": 20,
                
                            0:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 0,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":0,
                                    "TMY":0
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Other" },
                                    1: { 0: "Other" }	 
                                }
                
                            },
                
                            1:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 1,
                                "Points": Math.floor((Math.random() * 3000)),
            
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":256,
                                    "TMY":0
                                
                                },	
            
                                "TagsNumber": 1,
                                "Tags":{
                    
                                        0: { 0: "Weapon" },
                                        1: { 0: "Weapon" }	 	
                
                                }
                
                            },
                
                            2:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 2,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":512,
                                    "TMY":0
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Weapon" },
                                    1: { 0: "Weapon" }	 			
                                
                                }
                
                            },
                
                            3:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 3,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":768,
                                    "TMY":0
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Weapon" },
                                    1: { 0: "Weapon" }	 			
                                
                                }
                
                            },
                
                            4:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 4,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":1024,
                                    "TMY":0
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Armor" },
                                    1: { 0: "Armor" }	 			
                                
                                }
                
                            },
                
                            5:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 5,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":0,
                                    "TMY":206
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Other" },
                                    1: { 0: "Other" }			
                                
                                }
                
                            },
                
                            6:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 6,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":256,
                                    "TMY":206
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Weapon" },
                                    1: { 0: "Weapon" }		
                                
                                }
                
                            },
                
                            7:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 7,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":512,
                                    "TMY":206
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Other" },
                                    1: { 0: "Other" }		
                                
                                }
                
                            },
                
                            8:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 8,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":768,
                                    "TMY":206
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Weapon" },
                                    1: { 0: "Weapon" }		
                                
                                }
                
                            },
                
                            9:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 9,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":1024,
                                    "TMY":206
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Weapon" },
                                    1: { 0: "Weapon" }		
                                
                                }
                
                            },
                
                            10:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 10,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":0,
                                    "TMY":412
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Weapon" },
                                    1: { 0: "Weapon" }		
                                
                                }
                
                            },
                
                            11:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 11,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":256,
                                    "TMY":412
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Weapon" },
                                    1: { 0: "Weapon" }		
                                
                                }
                
                            },
                
                            12:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 12,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":512,
                                    "TMY":412
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Other" },
                                    1: { 0: "Other" }	
                                
                                }
                
                            },
                
                            13:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 13,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":768,
                                    "TMY":412
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Armor" },
                                    1: { 0: "Armor" }	
                                
                                }
                
                            },
                
                            14:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 14,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":1024,
                                    "TMY":412
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Weapon" },
                                    1: { 0: "Weapon" }		
                                
                                }
                
                            },
                
                            15:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 15,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":0,
                                    "TMY":618
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Other" }	,
                                    1: { 0: "Other" }	
                                
                                }
                
                            },
                
                            16:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 16,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":256,
                                    "TMY":618
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Armor" }	,
                                    1: { 0: "Armor" }	
                                
                                }
                                
                            },
                
                            17:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 17,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":512,
                                    "TMY":618
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Other" }	,
                                    1: { 0: "Other" }	
                                
                                }	
                                
                            },
                
                            18:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 18,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":768,
                                    "TMY":618
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Other" }	,
                                    1: { 0: "Other" }	
                                
                                }	
                                
                            },
                
                            19:{
                
                                "File": "List_3",
                                "PH": 224,
                                "PW": 274,
                                "Height": 218,
                                "Width": 268,
                                "Num": 19,
                                "Points": Math.floor((Math.random() * 3000)),
                
                                "N0": {
                                        
                                    "File_Image": "Album",
                                    "TMX":1024,
                                    "TMY":618
                                
                                },	
                
                                "TagsNumber": 1,
                                "Tags":{
                
                                    0: { 0: "Other" }	,
                                    1: { 0: "Other" }	
                                
                                }	
                                
                            }
                                    
                        },

                    },

                    "SpecText": {  

                        3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 10,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                        }

                    },

                },

                5: { // A list with several buttons, different sizes of objects and starting from the bottom of the list
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W5",
                    "ObjectNumber": 4,
                    "WindowType": 11,
                    
                    "PX": 629,
                    "PY": 245,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "ListSpecial":{
                        
                        "StartDown": true,
                        "DifferenceY": 0,
                        "StopList": 0,
                        "Sort": false,
                        "ListFilter": false,
                        "ListTag": "",

                    },

                    "List": {
                        
                        "ListNum": 0,
                        "ObjectType": "List",
                        "TypeList": "Normal",
                        "PX": 20,
                        "PY": 96,
                        "StopListX":1,
                        "StopListY": 2, 
        
                        "SpecData": { },
                     
                        "Ram":{
        
                            "Height": 664,
                            "Width": 638,
                            "PX": 12,
                            "PY": 88
        
                        },
    
                        "DrawRam":{
        
                            "Height": 664,
                            "Width": 638,
                            "PX": 12,
                            "PY": 88
        
                        },

                        "Objects":{
                       
                            "length": 5,
                
                            0:{
                
                                "Num": 0,

                                "File": "List_4_1",
                                "PH": 241,
                                "PW": 622,
                                "Height": 241,
                                "Width": 622,

                                "Buttons":{

                                    "length": 2,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":321,
                                        "PY":39,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    },

                                    1:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":100,
                                        "PY":109,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    }
        
                                },
                                
                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N0",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                }
                                
                            },
                
                            1:{
                
                                "Num": 1,

                                "File": "List_4_2",
                                "PH": 374,
                                "PW": 622,
                                "Height": 374,
                                "Width": 622,

                                "Buttons":{

                                    "length": 4,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":271,
                                        "PY":29,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    },

                                    1:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":300,
                                        "PY":129,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    },

                                    2:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":21,
                                        "PY":210,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    },

                                    3:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":450,
                                        "PY":230,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    }
        
                                },
                                
                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N1",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                }
                
                            },
                
                            2:{
                                "Num": 2,

                                "File": "List_4_2",
                                "PH": 374,
                                "PW": 622,
                                "Height": 374,
                                "Width": 622,

                                "Buttons":{

                                    "length": 2,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":421,
                                        "PY":109,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    },

                                    1:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":200,
                                        "PY":229,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    }
        
                                },
                                
                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N2",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                }
                            
                            },
                
                            3:{
                                "Num": 3,

                                "File": "List_4_1",
                                "PH": 241,
                                "PW": 622,
                                "Height": 241,
                                "Width": 622,

                                "Buttons":{

                                    "length": 2,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":321,
                                        "PY":9,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    },

                                    1:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":200,
                                        "PY":100,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    }
        
                                },

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N3",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                }
                                
                            },
                
                            4:{
                                "Num": 4,
                
                                "File": "List_4_1",
                                "PH": 241,
                                "PW": 622,
                                "Height": 241,
                                "Width": 622,

                                "Buttons":{

                                    "length": 2,
        
                                    0:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":321,
                                        "PY":120,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    },

                                    1:{
        
                                        "File": "ListButton",
                                        "TMX": 94,
                                        "TMY": 0,
                                        "PX":400,
                                        "PY":29,
                                        "Width": 94,
                                        "Height": 86,
                                        "CHData": true,
                                        "AnX": 0, 
                                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
            
                                    }
        
                                },

                                "Text":{
                                 
                                    "Num": 1,
            
                                    0: {
                                        "Text": "N4",
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 70,
                                        "Align": "normal",
                                        "Data": 3,
    
                                    }
 
                                },
                                    }  
        
                                }
                                
                            },
                
                        },

                    },

                    "SpecText": {  

                        3:{
                         
                            "Num": 2,
    
                            0: {
                                "Text": 26,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }, 

                            1: {
                                "Spec": "N3",
                                "Data": {

                                    0: {

                                        "PX": 390,
                                        "PY": 50,
                                        "Align": "center",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 390,
                                        "PY": 50,
                                        "Align": "center",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                        },
                      
                    },
        
                },

                6: { // Visual Novel
    
                    "Fullscreen": false,

                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W6",
                    "Spec": "VisualNovel",
                    "ObjectNumber": 5,
                    "WindowType": 10,
                    "SpecialFun": 0,
                    "DrawNovel": 0,

                    "PX": 490,
                    "PY": 115,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },
        
                    "SpecText": {  

                        0:{
                        
                            "Num": 1,
    
                            0: {
                                "Spec": "VisNovel",
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 610,
                                        "Align": "normal",
                                        "Data": 9,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 610,
                                        "Align": "normal",
                                        "Data": 9,
    
                                    }

                                },
                            }, 
                        },

                        3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 39,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            },

                        },

                        4:{
                        
                            "Num": 5,
    
                            0: {
                                "Spec": "VS0",
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 40,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 40,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    }

                                },
                            }, 

                            1: {
                                "Spec": "VS1",
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 140,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 140,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    }

                                },
                            }, 

                            2: {
                                "Spec": "VS2",
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 240,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 240,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    }

                                },
                            }, 

                            3: {
                                "Spec": "VS3",
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 340,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 340,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    }

                                },
                            },  

                            4: {
                                "Spec": "VS8",
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 440,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 440,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    }

                                },
                            },    

                        }

                    },

                    "ListSpecial":{

                        "DifferenceY": 0,
                        "StopList": 0,
                        "Sort": false,
                        "ListFilter": false,
                        "ListTag": "", 

                    },

                    "List": {
                        
                        "ListNum": 1,
                        "ObjectType": "List",
                        "TypeList": "Normal",
                        "PX": 17,
                        "PY": 656,
                        "StopListX": 2,
                        "StopListY": 2,
        
                        "SpecData": { },
                     
                        "Ram":{
        
                            "Height": 900,
                            "Width": 1920,
                            "PX": 0,
                            "PY": 0
        
                        },
    
                        "DrawRam":{
        
                            "Height": 900,
                            "Width": 1920,
                            "PX": 0,
                            "PY": 0
        
                        },

                        "Objects":[],

                    },

                },

                7: { // Animations
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W7",
                    "ObjectNumber": 6,
                    "WindowType": 3,
                    
                    "PX": 629,
                    "PY": 335,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },
        
                    "Animations": {
                        
                        "AnimationsNum": 3,
                        
                        0: {
                            
                            "ObjectNumber": 3,
                            "Type": "LoadStay",
                            "MaxFrame": 14, 
                            "Speed": 30, 
                            "List": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
                            "FL": 0,
                            "Work": false,
                            "Direction": true,

                        },
        
                        1: {
                            
                            "ObjectNumber": 4,
                            "Type": "InfiniteLoop",
                            "MaxFrame": 14, 
                            "Speed": 30, 
                            "List": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
                            "FL": 0,
                            "Work": true,
  
                        },
        
                        2: {
                            
                            "ObjectNumber": 5,
                            "Type": "InfiniteLoop",
                            "MaxFrame": 27, 
                            "Speed": 30, 
                            "List": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
                            "FL": 0,
                            "Work": true,
                        },
        
                    },
        
                    "SpecText": {  

                        2:{
                        
                            "Num": 1,
    
                            0: {
                                "Text": 11,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  
 
                        },
 
                    },

                },

                8: { // Alerts
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W8",
                    "ObjectNumber": 5,
                    "WindowType": 7,
                    
                    "PX": 629,
                    "PY": 335,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },
        
                    "SpecText": {  

                        2:{
                        
                           "Num": 1,
   
                           0: {
                               "Text": 13,
                               "Data": {

                                   0: {

                                       "PX": 25,
                                       "PY": 50,
                                       "Align": "normal",
                                       "Data": 4,
   
                                   },

                                   1: {

                                       "PX": 25,
                                       "PY": 50,
                                       "Align": "normal",
                                       "Data": 4,
   
                                   }

                               },
                           }  

                        },

                        3:{
                        
                           "Num": 1,
   
                           0: {
                               "Text": 16,
                               "Data": {

                                   0: {

                                       "PX": 25,
                                       "PY": 32,
                                       "Align": "normal",
                                       "Data": 5,
   
                                   },

                                   1: {

                                       "PX": 25,
                                       "PY": 32,
                                       "Align": "normal",
                                       "Data": 5,
   
                                   }

                               },
                           }  

                        },

                        4:{
                        
                           "Num": 1,
   
                           0: {
                               "Text": 17,
                               "Data": {

                                   0: {

                                       "PX": 25,
                                       "PY": 32,
                                       "Align": "normal",
                                       "Data": 5,
   
                                   },

                                   1: {

                                       "PX": 25,
                                       "PY": 32,
                                       "Align": "normal",
                                       "Data": 5,
   
                                   }

                               },
                           }  

                        }

                    },

                },

                9: { // Settings
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W9",
                    "ObjectNumber": 6,
                    "WindowType": 8,
                    
                    "PX": 629,
                    "PY": 335,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },
        
                    "SpecText": { 

                         2:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 14,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }
 
                                },
                            }  

                         },

                         3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 18,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }  

                         },

                         4:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 19,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }  

                         },

                         5:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 50,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }  

                         }

                    },
        
                },

                10: { // Fullscreen + Background 
    
                    "Background": {
                        
                        "File": "Background_Black",
                        "TMH": 1080,
                        "TMW": 1920,
                        "Height": 1080,
                        "Width": 1920,

                    },
        
                    "Fullscreen": true,

                    "Name": "W10",
                    "ObjectNumber": 3,
                    "WindowType": 5,
                    
                    "PX": 340,
                    "PY": 115,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "SpecText": { 

                         2:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 0,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                         }

                    },
        
                },

                11: { // Desktop, Fullscreen i Interface (false) 
    
                    "Fullscreen": true, 
                    "Desktop": true, 

                    "Name": "W11",
                    "ObjectNumber": 2,
                    "WindowType": 1,
                    
                    "PX": 0,
                    "PY": 0,

                    "ScaleData":{

                        "ScaleSim": 0, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "SpecText": { 

                         0:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 32,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                         },

                    },
        
                },

                12: { // ChangeWindow to 13 + interface change (true,1)
    
                    "Inter": true,
                    "InterNum": 1,

                    "Name": "W12",
                    "ObjectNumber": 4,
                    "WindowType": 5,
                    
                    "PX": 340,
                    "PY": 115,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },
        
                    "SpecText": { 

                         2:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 12,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                         },
                         
                         3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 28,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }  

                         }

                    },
        
                },

                13: { // Special Text
    
                    "Inter": true,
                    "InterNum": 0,
                    
                    "Name": "W13",
                    "Spec": "SpecialText",
                    "ObjectNumber": 4,
                    "WindowType": 2,
                    
                    "PX": 629,
                    "PY": 335,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "SpecText": { 

                         3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 29,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                         },

                    },
                   
                    "ID": { // Na ten moment nie działa Enter i następne wiersze w tekstach Dynamicznych

                        0:{
                        
                           "Num": 3,
   
                           0: {
                               "Text": 22,
                               "Data": {

                                   0: {

                                       "TData": 0,
                                       "Middle": false, 
                                       "PX": 50,
                                       "PY": 160,
                                       "Enter": 15,
                                       "List": []
   
                                   },

                                   1: {

                                       "TData": 0,
                                       "Middle": false,
                                       "PX": 50,
                                       "PY": 160,
                                       "Enter": 15,
                                       "List": []
   
                                   }

                               },
                           }, 

                           1: {
                                "Text": 60,
                                "Data": {

                                    0: {

                                        "TData": 1,
                                        "Middle": false,
                                        "PX": 50,
                                        "PY": 190,
                                        "Enter": 30,
                                        "List": []

                                    },

                                    1: {

                                        "TData": 1,
                                        "Middle": false,
                                        "PX": 50,
                                        "PY": 190,
                                        "Enter": 30,
                                        "List": []

                                    }

                                },
                           }, 

                           2: {
                                "Spec": "N0",
                                "Data": {

                                    0: {

                                        "TData": 1,
                                        "Middle": true,
                                        "PX": 662/2,
                                        "PY": 110,
                                        "Enter": 30,
                                        "List": []

                                    },

                                    1: {

                                        "TData": 1,
                                        "Middle": false,
                                        "PX": 662/2,
                                        "PY": 110,
                                        "Enter": 30,
                                        "List": []

                                    }

                                },
                           }  

                        },

                    },

                },

                14: { // Video + can be used as the most recently played video in the list.
    
                    "Inter": true,
                    "InterNum": 0,
                    
                    "Name": "Video_0",
                    "ObjectNumber": 8,
                    "WindowType": 9,
                    "Copy": true,

                    "PX": 340,
                    "PY": 115,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "SpecText": { 

                        2:{
                        
                           "Num": 1,
   
                           0: {
                               "Text": "RandomV",
                               "Data": {

                                   0: {

                                       "PX": 25,
                                       "PY": 50,
                                       "Align": "normal",
                                       "Data": 4,
   
                                   },

                                   1: {

                                       "PX": 25,
                                       "PY": 50,
                                       "Align": "normal",
                                       "Data": 4,
   
                                   }

                               },
                           }  

                        },

                        3: {

                            "Num": 1,
    
                            0: {
                                "Text": 33,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        5: {

                            "Num": 1,
    
                            0: {
                                "Text": 34,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        6: {

                            "Num": 1,
    
                            0: {
                                "Text": 35,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                        7: {

                            "Num": 1,
    
                            0: {
                                "Text": 36,
                                "Data": {
 
                                    0: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    },
 
                                    1: {
 
                                        "PX": 25,
                                        "PY": 32,
                                        "Align": "normal",
                                        "Data": 5,
    
                                    }
 
                                },
                            }   

                        },

                    },

                },

                15: { // Sound
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W15",
                    "ObjectNumber": 4,
                    "WindowType": 2,
                    
                    "PX": 629,
                    "PY": 335,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },
        
                    "SpecText": { 

                        3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 31,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            }  

                        }

                    },
        
                },

                17: { // 3D Render
    
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "W18",
                    "Spec": "Render3D",
                    "ObjectNumber": 5,
                    "WindowType": 12,

                    "Draw3D": 0,
                    
                    "PX": 490,
                    "PY": 115,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },
        
                    "SpecText": { 

                        3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 49,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            },

                        },

                        4:{
                         
                            "Num": 1,
    
                            0: {
                                "Spec": "InfoRender",
                                "Data": {

                                    0: {

                                        "PX": 20,
                                        "PY": 40,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    },

                                    1: {

                                        "PX": 20,
                                        "PY": 40,
                                        "Align": "normal",
                                        "Data": 18,
    
                                    }

                                },
                            }  

                        }

                    },
        
                },

                18:{ // Open World System

                    "Fullscreen": false,
                    "Desktop": false,

                    "Copy": true,
                    "Inter": true,
                    "InterNum": 0,

                    "Name": "OP2",
                    "Spec": "OpenWorld",
                    "ObjectNumber": 15,
                    "WindowType": 18,
                    "SpecialFun": 1,
                    
                    "PX": 490,
                    "PY": 115,
                    
                    "DrawWorld": 0,

                    "ScaleData":{

                        "ScaleSim": 1, 
                        "SPX": 0,
                        "SPY": 0,
                        "Alpha": 1,
                        "Scale": 1,
                        "Xmove": 0,
                        "Ymove": 0,
                        "Speed": 0.2,
                        "Divider": 5

                    },

                    "SpecText": { 

                        3:{
                         
                            "Num": 1,
    
                            0: {
                                "Text": 64,
                                "Data": {

                                    0: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    },

                                    1: {

                                        "PX": 25,
                                        "PY": 50,
                                        "Align": "normal",
                                        "Data": 4,
    
                                    }

                                },
                            },

                        },

                        14:{
                         
                            "Num": 2,
    
                            0: {

                                "Spec": "InfoOpen",
                                "Data": {

                                    0: {

                                        "PX": 20,
                                        "PY": 40,
                                        "Align": "normal",
                                        "Data": 18,

                                    },

                                    1: {

                                        "PX": 20,
                                        "PY": 40,
                                        "Align": "normal",
                                        "Data": 18,

                                    }

                                },
                            
                            },

                            1: {

                                "Spec": "InfoOpenBuilding",
                                "Data": {

                                    0: {

                                        "PX": 20,
                                        "PY": 620,
                                        "Align": "normal",
                                        "Data": 18,

                                    },

                                    1: {

                                        "PX": 20,
                                        "PY": 620,
                                        "Align": "normal",
                                        "Data": 18,

                                    }

                                },
                            
                            } 

                        }
                        
                    },
        
                },
                
            },
            
            WindowObjects = {
                
                0:{

                    0: { 
                        "File": "Background_0",
                        "TMH": 1080,
                        "TMW": 1920,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 1080,
                        "Width": 1920,
                        "PX": 0,
                        "PY": 0,

                        "InfoW": 0,
                        "InfoWNumber": 1,
                    },
        
                    // Lists

                    1: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 1146,
                        "PY": 827,
                        "Href": 1,
                        "BAnim": true,
                        
                        "CSound": 1,
                        "HoverCSound": 2,

                    },
                    
                    2: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 1146,
                        "PY": 929,
                        
                        "Href": 2,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,

                        "InfoW": 0,
                        "InfoWNumber": 3,

                    },
        
                    3: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 1445,
                        "PY": 725,
                        
                        "Href": 3,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,

                        "InfoW": 0,
                        "InfoWNumber": 4,

                    },
        
                    4: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 1445,
                        "PY": 827,
                        
                        "Href": 4,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },
        
                    5: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 1445,
                        "PY": 929,
                        
                        "Href": 5,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },

                    6: { // Visual Novel

                        "File": "VisualNovel_G",
                        "TMH": 253,
                        "TMW": 405,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":405,
                        "TMY":0,
                        "Height": 253,
                        "Width": 405,
                        "PX": 249,
                        "PY": 276,
                        
                        "Href": 6,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },
        
                    // Animations Alerts Settings 

                    7: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 249,
                        "PY": 725,
                        
                        "Href": 7,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },
        
                    8: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 249,
                        "PY": 827,
                        
                        "Href": 8,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },
        
                    9: {
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 1146,
                        "PY": 725,
                        
                        "Href": 9,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },

                    // Other Windows

                    10: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 249,
                        "PY": 929,
                        
                        "Href": 10,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },
        
                    11: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 549,
                        "PY": 725,
                        
                        "Href": 11,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,

                        "InfoW": 0,
                        "InfoWNumber": 5,

                    },
        
                    12: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 549,
                        "PY": 827,
                        
                        "Href": 12,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },
        
                    13: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 549,
                        "PY": 929,
                        
                        "Href": 13,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },
        
                    14: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 847,
                        "PY": 725,
                        
                        "Href": 14,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },
        
                    15: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 847,
                        "PY": 827,
                        
                        "Href": 15,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,

                        "InfoW": 0,
                        "InfoWNumber": 6,

                    },
        
                    16: { // Render 3D

                        "File": "Render3D_G",
                        "TMH": 253,
                        "TMW": 405,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":405,
                        "TMY":0,
                        "Height": 253,
                        "Width": 405,
                        "PX": 752,
                        "PY": 276,
                        
                        "Href": 17,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },

                    18: { // Open World

                        "File": "OpenWorld_G",
                        "TMH": 253,
                        "TMW": 405,
                        "Type": "WindowOpen",
                        "AnX": 0,
                        "TMX":405,
                        "TMY":0,
                        "Height": 253,
                        "Width": 405,
                        "PX": 1264,
                        "PY": 276,
                        
                        "Href": 18,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2

                    },

                    // Form
        
                    17: { 
                        "File": "Inter_6",
                        "Type": "Form",
                        "TMH": 30,
                        "TMW": 473,
                        "AnX": 0,
                        "TMX": 473,
                        "TMY": 0,
                        "Height": 30*3,
                        "Width": 473*3,
                        "PX": 249,
                        "PY": 582,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "ST": "N5"
                    },
        
                    // WWW
        
                    19: { 
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "Type": "CUTFUJIgames",
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 847,
                        "PY": 929,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,

                    },

                },

                1:{  

                    0:{
                        "File": "Background_13",
                        "TMH": 1080,
                        "TMW": 1920,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 1080,
                        "Width": 1920,
                        "PX": 0,
                        "PY": 0		
                    },

                    1:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 1920-64-8,
                        "PY": 6,	
                        "Type": "Exit",
                    }

                },

                2:{ 
                    0:{
                        "File": "Background_5_T",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    1:{
                        "File": "Background_5",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        "Type": "Exit"		
                    },
                    3:{
                        "File": "Inter_3",
                        "TMH": 77,
                        "TMW": 587,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 587,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                    4: {

                        "File": "Button_2",
                        "TMH": 65,
                        "TMW": 65,
                        "Type": "Points",
                        "AnX": 0,
                        "TMX": 65,
                        "TMY": 0,
                        "Height": 65,
                        "Width": 65,
                        "PX": 578-65,
                        "PY": 7,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,

                    },

                },

                3:{ 
                    0:{
                        "File": "Background_7",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    1:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    2:{
                        "File": "Inter_3",
                        "TMH": 77,
                        "TMW": 587,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 587,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },
        
                    3: { 
                        "File": "AnimationsGraphic",
                        "TMH": 400,
                        "TMW": 150,
                        "Type": "StartAnim",
                        "AnimN": 0,
                        "BAnim": false,
                        "AnX": 0,	
                        "TMX":150,
                        "TMY":0,
                        "Height": 400,
                        "Width": 150,
                        "PX": 6,
                        "PY": 85
                    },
                    4: { 
                        "BAnim": false,	
                        "File": "AnimationsGraphic",
                        "TMH": 400,
                        "TMW": 150,
                        "Type": "StartAnim",
                        "AnimN": 1,
                        "AnX": 0,	
                        "TMX":150,
                        "TMY":0,
                        "Height": 400,
                        "Width": 150,
                        "PX": 161,
                        "PY": 85
                    },
                    5: { 
                        "BAnim": false,
                        "File": "AnimationsGraphic",
                        "TMH": 400,
                        "TMW": 150,
                        "Type": "StartAnim",
                        "AnimN": 2,
                        "AnX": 0,	
                        "TMX":150,
                        "TMY":0,
                        "Height": 400,
                        "Width": 150,
                        "PX": 316,
                        "PY": 85
                    }
                },

                4:{ 
                    0:{
                        "File": "Background_8_T",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },
                    1:{
                        "File": "Background_8",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },
                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 1170,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    3:{
                        "File": "Inter_4",
                        "TMH": 77,
                        "TMW": 1165,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 1165,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                    4:{
                        "File": "Button_6",
                        "TMH": 85,
                        "TMW": 85,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":85,
                        "TMY":0,
                        "Height": 85,
                        "Width": 85,
                        "PX": 1147,
                        "PY": 95,		
                        "Type": "StopFilter"	
                    },

                    5:{
                        "File": "Button_7",
                        "TMH": 85,
                        "TMW": 85,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":85,
                        "TMY":0,
                        "Height": 85,
                        "Width": 85,
                        "PX": 1147,
                        "PY": 187,
                        "Filtr": "Other",		
                        "Type": "Filter"	
                    },

                    6:{
                        "File": "Button_8",
                        "TMH": 85,
                        "TMW": 85,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":85,
                        "TMY":0,
                        "Height": 85,
                        "Width": 85,
                        "PX": 1147,
                        "PY": 279,	
                        "Filtr": "Weapon",
                        "Type": "Filter"	
                    },

                    7:{
                        "File": "Button_9",
                        "TMH": 85,
                        "TMW": 85,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":85,
                        "TMY":0,
                        "Height": 85,
                        "Width": 85,
                        "PX": 1147,
                        "PY": 371,	
                        "Filtr": "Armor",	
                        "Type": "Filter"	
                    },

                    8:{
                        "File": "Button_17",
                        "TMH": 69,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX": 64,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 64,
                        "PX": 1147,
                        "PY": 470,		
                        "Type": "StopSort"	
                    },

                    9:{
                        "File": "Button_15",
                        "TMH": 69,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX": 64,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 64,
                        "PX": 1147,
                        "PY": 561,	
                        "Sort": true,	
                        "Type": "Sort"	
                    },

                    10:{
                        "File": "Button_16",
                        "TMH": 69,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX": 64,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 64,
                        "PX": 1147,
                        "PY": 652,	
                        "Sort": false,	
                        "Type": "Sort"	
                    }
                    
                },

                5:{ 
                    0:{
                        "File": "Background_9",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },
                    1:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 1170,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    2:{
                        "File": "Inter_4",
                        "TMH": 77,
                        "TMW": 1165,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 1165,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                    3:{
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 45,
                        "PY": 119,	
                        "Href": 13,
                        "Type": "ChangeWindow"		
                    }
                    
                },

                6:{ 
                    0:{
                        "File": "Background_9",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },
                    1:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 1170,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    2:{
                        "File": "Inter_4",
                        "TMH": 77,
                        "TMW": 1165,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 1165,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    }
                    
                },

                7:{ 

                    0:{
                        "File": "Background_7",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },

                    1:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    2:{
                        "File": "Inter_3",
                        "TMH": 77,
                        "TMW": 587,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 587,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                    3:{
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 45,
                        "PY": 119,	
                        "Type": "Alert_1"		
                    },

                    4:{
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 45,
                        "PY": 190,
                        "Type": "Alert_2"		
                    }

                },

                8:{ 

                    0:{
                        "File": "Background_7",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },

                    1:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    2:{
                        "File": "Inter_3",
                        "TMH": 77,
                        "TMW": 587,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 587,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                    3:{
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 45,
                        "PY": 119,	
                        "Type": "LanguageChange"		
                    },

                    4:{
                        "File": "Inter_7",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 45,
                        "PY": 190,
                        "Type": "ScreenSettings"		
                    },

                    5:{
                        "File": "Inter_7",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 45,
                        "PY": 190+71,
                        "Type": "Mute"		
                    },

                },

                9:{  

                    0:{
                        "File": "Background_9",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },

                    1:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 1170,
                        "PY": 6,	
                        "Type": "Exit",
                        "Stop": "Video_0"
                    },

                    2:{
                        "File": "Inter_4",
                        "TMH": 77,
                        "TMW": 1165,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 1165,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                    3:{
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 45,
                        "PY": 775,	
                        "Type": "PlayVideoOther",
                        "Play": "Video_0",
                    },

                    4:{
                        "File": "Video_0",
                        "Type": "PlayVideo",
                        "TMH": 1080,
                        "TMW": 1920,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 1080/1.75,
                        "Width": 1920/1.75,
                        "PX": 45,
                        "PY": 120	
                    },

                    5:{
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 300+40,
                        "PY": 775,	
                        "Type": "CurrentTime",
                        "Add": false,
                        "Play": "Video_0",
                    },

                    6:{
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 550+40+40,
                        "PY": 775,	
                        "Type": "CurrentTime",
                        "Add": true,
                        "Play": "Video_0",
                    },

                    7:{
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 800+40+40+40,
                        "PY": 775,	
                        "Type": "Muted",
                        "Play": "Video_0",
                    },

                },
        
                10:{ 

                    0:{
                        "File": "Background_8_T",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },

                    1:{
                        "File": "Background_12",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },

                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 1170,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    3:{
                        "File": "Inter_4",
                        "TMH": 77,
                        "TMW": 1165,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 1165,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                    4:{
                        "File": "Background_14",
                        "TMH": 850,
                        "TMW": 300,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX": 0,
                        "TMY": 0,
                        "Height": 850,
                        "Width": 300,
                        "PX": -300,
                        "PY": 0,	
                    },

                },

                11:{

                    0:{
                        "File": "Background_5_T",
                        "TMH": 764,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 764,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    
                    1:{
                        "File": "Background_6",
                        "TMH": 764,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 764,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },

                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    3:{
                        "File": "Inter_3",
                        "TMH": 77,
                        "TMW": 587,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 587,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                },

                12:{ 

                    0:{
                        "File": "Background_8_T",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },

                    1:{
                        "File": "Background_12",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },

                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 1170,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    3:{
                        "File": "Inter_4",
                        "TMH": 77,
                        "TMW": 1165,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 1165,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                    4:{
                        "File": "Background_14",
                        "TMH": 850,
                        "TMW": 300,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX": 0,
                        "TMY": 0,
                        "Height": 850,
                        "Width": 300,
                        "PX": -300,
                        "PY": 0,	
                    },
                         
                },

                13:{
                    0:{
                        "File": "Background_5_T",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    1:{
                        "File": "Background_5",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        "Type": "Exit"		
                    },
                    3:{
                        "File": "Inter_3",
                        "TMH": 77,
                        "TMW": 587,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 587,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                },

                14:{
                    0:{
                        "File": "Background_5_T",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    1:{
                        "File": "Background_5",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        "Type": "Exit"		
                    },
                    3:{
                        "File": "Inter_3",
                        "TMH": 77,
                        "TMW": 587,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 587,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },
                    4:{
                        "File": "Button_21",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 20,
                        "PY": 95,	
                        "Type": "AddNPC"		
                    },

                },

                15:{

                    0:{
                        "File": "Background_5_T",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },

                    1:{
                        "File": "Background_5",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },

                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        //"Type": "Exit"		
                    },

                },

                16:{ 
                    0:{
                        "File": "Background_7",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    1:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    2:{
                        "File": "Inter_3",
                        "TMH": 77,
                        "TMW": 587,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 587,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },

                    3:{
                        "File": "Inter_2",
                        "TMH": 49,
                        "TMW": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":224,
                        "TMY":0,
                        "Height": 49,
                        "Width": 224,
                        "PX": 45,
                        "PY": 119,	
                        "Type": "ExitApp"		
                    },

                },

                17:{ 
                    0:{
                        "File": "Background_5_T",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    1:{
                        "File": "Background_5",
                        "TMH": 492,
                        "TMW": 662,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 492,
                        "Width": 662,
                        "PX": 0,
                        "PY": 0		
                    },
                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 592,
                        "PY": 6,	
                        "Type": "Exit"		
                    },
                    3:{
                        "File": "Inter_3",
                        "TMH": 77,
                        "TMW": 587,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 587,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },
                    4: {

                        "File": "Button_5",
                        "TMH": 65,
                        "TMW": 65,
                        "Type": "Hour",
                        "AnX": 0,
                        "TMX": 65,
                        "TMY": 0,
                        "Height": 65,
                        "Width": 65,
                        "PX": 578-65-8-65-8-65-8-65,
                        "PY": 7,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,

                    },
    
                    5: {

                        "File": "Button_13",
                        "TMH": 65,
                        "TMW": 65,
                        "Type": "Achiv_0",
                        "AnX": 0,
                        "TMX": 65,
                        "TMY": 0,
                        "Height": 65,
                        "Width": 65,
                        "PX": 578-65-8-65-8-65,
                        "PY": 7,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2
                    },

                    6: {

                        "File": "Button_11",
                        "TMH": 65,
                        "TMW": 65,
                        "Type": "Achiv_1",
                        "AnX": 0,
                        "TMX": 65,
                        "TMY": 0,
                        "Height": 65,
                        "Width": 65,
                        "PX": 578-65-8-65,
                        "PY": 7,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2
                    },
    
                    7: {

                        "File": "Button_14",
                        "TMH": 65,
                        "TMW": 65,
                        "Type": "Platyna",
                        "AnX": 0,
                        "TMX": 65,
                        "TMY": 0,
                        "Height": 65,
                        "Width": 65,
                        "PX": 578-65,
                        "PY": 7,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2
                    },

                },

                18:{ 

                    0:{
                        "File": "Background_8_T",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0,

                        "Heightw": 750,
                        "Widthw": 1116,
                        "PXw": 12,
                        "PYw": 88	

                    },

                    1:{
                        "File": "Background_12",
                        "TMH": 850,
                        "TMW": 1240,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 850,
                        "Width": 1240,
                        "PX": 0,
                        "PY": 0		
                    },

                    2:{
                        "File": "Button_1",
                        "TMH": 65,
                        "TMW": 64,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "AnX": 0,
                        "TMX":64,
                        "TMY":0,
                        "Height": 65,
                        "Width": 64,
                        "PX": 1170,
                        "PY": 6,	
                        "Type": "Exit"		
                    },

                    3:{
                        "File": "Inter_4",
                        "TMH": 77,
                        "TMW": 1165,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX":0,
                        "TMY":0,
                        "Height": 77,
                        "Width": 1165,
                        "PX": 0,
                        "PY": 0,		
                        "Type": "WindowMove"	
                    },
    
                    4: {

                        "File": "OP_0",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 80,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "OPControl",

                    },

                    5: {

                        "File": "OP_1",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 152,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "OPFollow",

                    },

                    7: {

                        "File": "OP_4",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 224,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "CameraControl",

                    },

                    8: {

                        "File": "OP_5",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 296,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "CameraAutoMove",

                    },

                    12: {

                        "File": "OP_6",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 368,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "NPCCType",

                    },

                    9: {

                        "File": "OP_7",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 440,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "NPCmove",

                    },

                    10: {

                        "File": "OP_8",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 512,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "AddBuildM",

                    },

                    11: {

                        "File": "OP_9",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 584,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "SellBuilding",

                    },

                    13: {

                        "File": "OP_10",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 656,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "Build_1",

                    },

                    6:{ 
                        "File": "OP_2",
                        "TMH": 69,
                        "TMW": 69,
                        "AnX": 0,
                        "TMX": 69,
                        "TMY": 0,
                        "Height": 69,
                        "Width": 69,
                        "PX": 1167,
                        "PY": 728,
                        "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
                        "Type": "RainWork"	
                    },

                    14:{
                        "File": "Background_14",
                        "TMH": 850,
                        "TMW": 300,
                        "BAnim": false,
                        "AnX": 0,
                        "TMX": 0,
                        "TMY": 0,
                        "Height": 850,
                        "Width": 300,
                        "PX": -300,
                        "PY": 0,	
                    },
                    
                },
                
            },
            
            InfoWindowsData = {

                0:{

                    "Width_1": 0,
                    "Height_1": 100,

                    "Width_2": 200,
                    "Height_2": 100,

                    "Alpha": 0.7,
                    
                    "length": 1,
            
                    0:{
                        "File": "Background_1",
                        "TMH": 100,
                        "TMW": 200,
                        "TMX": 0,
                        "TMY": 0,
                        "Height": 100,
                        "Width": 200,
                        "PX": 0,
                        "PY": 0,
    
                        "SpecText": {
                            
                            "Num": 1,
    
                            0: {
                                "Spec": "N0",
                                "Data": {
    
                                    0: {
    
                                        "PX": 100,
                                        "PY": 65,
                                        "Align": "center",
                                        "Data": 0,
    
                                    },
    
                                    1: {
    
                                        "PX": 100,
                                        "PY": 65,
                                        "Align": "center",
                                        "Data": 0,
    
                                    }
    
                                },
                                
                            }
    
                        }

                    }
                   
                }

            },
            
            InterfejsData = {
                
                "AnimationList": null,

                0:{

                    "Animations": {
                        
                        "AnimationsNum": 3,
                        
                        0: {
                            
                            "ObjectNumber": 2,
                            "Type": "LoadStay",
                            "MaxFrame": 6, 
                            "Speed": 70, 
                            "List": [0,1,2,3,4,5,6],
                            "FL": 0,
                            "Work": false,
                            "Direction": true,

                        },
        
                        1: {
                            
                            "ObjectNumber": 3,
                            "Type": "InfiniteLoop",
                            "MaxFrame": 6, 
                            "Speed": 60, 
                            "List": [0,1,2,3,4,5,6],
                            "FL": 0,
                            "Work": true,
  
                        },
        
                        2: {
                            
                            "ObjectNumber": 4,
                            "Type": "InfiniteLoop",
                            "MaxFrame": 11, 
                            "Speed": 60, 
                            "List": [0,1,2,3,4,5,6,5,4,3,2,1],
                            "FL": 0,
                            "Work": true,
                        },
        
                    },
        
                    "Objects":{

                        "length": 6,
    
                        0: {
    
                            "File": "Inter",
                            "TMH": 82,
                            "TMW": 1920,
                            "AnX": 0,
                            "TMX": 0,
                            "TMY": 0,
                            "Height": 82,
                            "Width": 1920,
                            "PX": 0,
                            "PY": 0,
                            "BAnim": false,

                            "SpecText": {
                                
                                "Num": 1,
    
                                0: {
                                    "Spec": "Game_Ver",
                                    "Data": {
    
                                        0: {
    
                                            "PX": 1920/2,
                                            "PY": 60,
                                            "Align": "center",
                                            "Data": 0,
        
                                        },
    
                                        1: {
    
                                            "PX": 1920/2,
                                            "PY": 60,
                                            "Align": "center",
                                            "Data": 0,
        
                                        }
    
                                    },
                                    
                                } 

                            }
                        
                        },
    
                        1: {
    
                            "File": "Button_12",
                            "TMH": 65,
                            "TMW": 65,
                            "Type": "WindowOpen",
                            "Href": 9,
                            "AnX": 0,
                            "TMX": 65,
                            "TMY": 0,
                            "Height": 65,
                            "Width": 65,
                            "PX": 1920-8-65,
                            "PY": 8,
                            "BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2
                        },
    
                        2: {
    
                            "File": "AnimationsGraphic2",
                            "TMH": 65,
                            "TMW": 65,
                            "AnX": 0,
                            "TMX": 65,
                            "TMY": 0,
                            "Height": 65,
                            "Width": 65,
                            "PX": 8,
                            "PY": 8,
                            "BAnim": false,
                            "AnimN": 0,
                            "Type": "StartAnim"

                        },
    
                        3: {
    
                            "File": "AnimationsGraphic2",
                            "TMH": 65,
                            "TMW": 65,
                            "AnX": 0,
                            "TMX": 65,
                            "TMY": 0,
                            "Height": 65,
                            "Width": 65,
                            "PX": 8+8+65+8+65,
                            "PY": 8,
                            "BAnim": false,
                            "AnimN": 1,
                            "Type": "StartAnim"
                        },
    
                        4: {
    
                            "File": "AnimationsGraphic2",
                            "TMH": 65,
                            "TMW": 65,
                            "AnX": 0,
                            "TMX": 65,
                            "TMY": 0,
                            "Height": 65,
                            "Width": 65,
                            "PX": 8+8+65,
                            "PY": 8,
                            "BAnim": false,
                            "AnimN": 2,
                            "Type": "StartAnim"
                        },
    
                        5: {
    
                            "File": "Button_20",
                            "TMH": 65,
                            "TMW": 65,
                            "AnX": 0,
                            "TMX": 65,
                            "TMY": 0,
                            "Height": 65,
                            "Width": 65,
                            "PX": 1920-8-65-8-65,
                            "PY": 8,
    
                            "SpecText": {
                               
                                "Num": 1,

                               0:{

                                    "Spec": "N4",
                                    "Data": {
    
                                        0: {
    
                                            "PX": 65/2,
                                            "PY": 50,
                                            "Align": "center",
                                            "Data": 10,
        
                                        },
    
                                        1: {
    
                                            "PX": 65/2,
                                            "PY": 50,
                                            "Align": "center",
                                            "Data": 10,
        
                                        }
    
                                    },

                               }
                               
                            }

                        },

                    }

                },

                1:{

                    "Animations": {
                        
                        "AnimationsNum": 3,
                        
                        0: {
                            
                            "ObjectNumber": 1,
                            "Type": "LoadStay",
                            "MaxFrame": 6, 
                            "Speed": 70, 
                            "List": [0,1,2,3,4,5,6],
                            "FL": 0,
                            "Work": false,
                            "Direction": true,

                        },
        
                        1: {
                            
                            "ObjectNumber": 2,
                            "Type": "InfiniteLoop",
                            "MaxFrame": 6, 
                            "Speed": 60, 
                            "List": [0,1,2,3,4,5,6],
                            "FL": 0,
                            "Work": true,
  
                        },
        
                        2: {
                            
                            "ObjectNumber": 3,
                            "Type": "InfiniteLoop",
                            "MaxFrame": 11, 
                            "Speed": 60, 
                            "List": [0,1,2,3,4,5,6,5,4,3,2,1],
                            "FL": 0,
                            "Work": true,
                        },
        
                    },
        
                    "Objects":{

                        "length": 4,
    
                        0: {
    
                            "File": "Inter",
                            "TMH": 82,
                            "TMW": 1920,
                            "AnX": 0,
                            "TMX": 0,
                            "TMY": 0,
                            "Height": 82,
                            "Width": 1920,
                            "PX": 0,
                            "PY": 0,
                            "BAnim": false,

                            "SpecText": {
                                
                                "Num": 1,
    
                                0: {
                                    "Spec": "N0",
                                    "Data": {
    
                                        0: {
    
                                            "PX": 1920/2,
                                            "PY": 60,
                                            "Align": "center",
                                            "Data": 0,
        
                                        },
    
                                        1: {
    
                                            "PX": 1920/2,
                                            "PY": 60,
                                            "Align": "center",
                                            "Data": 0,
        
                                        }
    
                                    },
                                    
                                } 

                            }
                        
                        },
    
                        1: {
    
                            "File": "AnimationsGraphic2",
                            "TMH": 65,
                            "TMW": 65,
                            "AnX": 0,
                            "TMX": 65,
                            "TMY": 0,
                            "Height": 65,
                            "Width": 65,
                            "PX": 8,
                            "PY": 8,
                            "BAnim": false,
                            "AnimN": 0,
                            "Type": "StartAnim"

                        },
    
                        2: {
    
                            "File": "AnimationsGraphic2",
                            "TMH": 65,
                            "TMW": 65,
                            "AnX": 0,
                            "TMX": 65,
                            "TMY": 0,
                            "Height": 65,
                            "Width": 65,
                            "PX": 8+8+65+8+65,
                            "PY": 8,
                            "BAnim": false,
                            "AnimN": 1,
                            "Type": "StartAnim"
                        },
    
                        3: {
    
                            "File": "AnimationsGraphic2",
                            "TMH": 65,
                            "TMW": 65,
                            "AnX": 0,
                            "TMX": 65,
                            "TMY": 0,
                            "Height": 65,
                            "Width": 65,
                            "PX": 8+8+65,
                            "PY": 8,
                            "BAnim": false,
                            "AnimN": 2,
                            "Type": "StartAnim"
                        },
    
                    }

                },

            },
            
            MouseData = {

                "Counter": 0,
                "MCounter": 5,

                "AnF": 0,
                "AnX": 0,
                "AnY": 0,

                "PX": 0,
                "PY": 0,

                0:{

                    0: {

                        "File": "Mouse_0",
                        "TMW": 12,
                        "TMH": 22,
                        "Width": 12,
                        "Height": 22,
                        "PX": 0,
                        "PY": 0,
                        "MAnX": 3,
    
                    },
    
                    1: {
    
                        "File": "Mouse_1",
                        "TMW": 12,
                        "TMH": 22,
                        "Width": 12,
                        "Height": 22,
                        "PX": 0,
                        "PY": 0,
                        "MAnX": 0,
    
                    }

                },

            },
            
            Text = {
        
                0: {
                    
                    "SpecPause": ["Wciśnij Spacje lub kliknij Myszkę żeby kontynuować"],

                    "D0": [["Neque porro quisquam est qui dolorem ipsum quia dolor sit "],["amet, consectetur, adipisci velit..."]],
                    "D1": ["Neque porro quisquam est qui dolorem ipsum quia dolor sit "],
                    "D2": ["amet, consectetur, adipisci velit..."],
                    "D3": ["Nick 25","Judy -25"],
                    "D4": ["Nick -25","Judy 25"],
                    "D5": ["Neque porro quisquam est"],
                    "D6": ["qui dolorem ipsum quia dolor sit"],
                    "D7": ["amet, consectetur,"],
                    "D8": ["adipisci velit..."],
                    "D9": ["Nick 50","Judy -50"],
                    "D10": ["Nick -50","Judy 50","Catherine 150"],
                    "D11": ["---"],

                    "N0": ["Tekst Nr.0"],
                    "N1": ["Tekst Nr.1"],
                    "N2": ["Tekst Nr.2"],
                    "N3": ["Tekst Nr.3"],
                    "N4": ["Tekst Nr.4"],
                    "N5": ["Tekst Nr.5"],
                    "N6": ["Tekst Nr.6"],
                    "N7": ["Tekst Nr.7"],
                    "N8": ["Tekst Nr.8"],
                    "N9": ["Tekst Nr.9"],
                    "RandomV": ["Wideo"],

                    0: ["Pełny Ekran + Tło"],
                    1: ["Lista Zwykła"],
                    3: ["UKRYTE"],
                    4: ["OSIAGNIĘCIE 1"],
                    5: ["OSIAGNIĘCIE 2"],
                    6: ["1 godz działania Silnika"],
                    7: ["10 godz działania Silnika"],
                    8: ["Lista Poziomy"],
                    9: ["Lista Osiągnięcia"],
                    10: ["Lista Filtr i Sort"],
                    11: ["Animacje"],
                    12: ["Zmiana Okna"],
                    13: ["Komunikaty"],
                    14: ["Ustawienia"],
                    16: ["Wysuwany"],
                    17: ["Przezroczysty"],
                    18: ["Język Polski"],
                    19: ["Ekran"],
                    21: [""],
                    22: ["1: 111111111 @2: 22222222"],
                    24: ["FROSTengine Ver "],
                    26: ["Lista Podróż"],
                    27: ["Lista Dialogowa"],
                    28: ["Zmień Okno"],
                    29: ["Specjalny Tekst"],
                    30: ["Wideo"],
                    31: ["Dzwięk"],
                    32: ["Inny Pulpit"],
                    33: ["Start/Pauza"],
                    34: ["Sekunda -"],
                    35: ["Sekunda +"],
                    36: ["Dzwięk Włącz/Wyłącz"],
                    37: [""],
                    38: ["Muzyka"],
                    39: ["Visual Novel - Obszar Testowy"],     
                    40: ["Pętla"],     
                    41: ["Włącz/Wyłącz"],     
                    42: ["Formularz - Lewa Myszka Start / Enter Stop"],     
                    43: ["Dzwięk +"],      
                    46: ["---"],      
                    47: ["Render 3D Ver 0.20"],   
                    49: ["Render 3D - Obszar Testowy"],    
                    50: ["Dzwięk"],     
                    51: ["Test tekstów z kilkoma wierszami","1. Wiersz Pierwszy", "2. Wiersz Drugi"], 
                    52: ["Otwarty Świat Ver 0.80"],                 
                    53: ["Visual Novel Ver 0.90"],                  
                    54: [["Pulpit / Okna Ver 1.21"],["Pulpit / Okna Mobilne Ver 0.70"]],  
                    55: ["Zamknij Aplikacje"],               
                    56: ["Opis Wieży Nr 3"],               
                    57: ["Brak Materiałów"],             
                    58: ["Złe miejsce"],               
                    59: ["Max Magazyn"],   
                    60: ["Testowy Komunikat"],   
                    61: ["Otwórz Stronę WWW"],                   

                    62: [["Hej,"], 
                        ["witaj w moim autorskim silniku FROSTengine."], 
                        [""], 
                        ["FROSTengine został napisany w JavaScript bez żadnych wtyczek i "], 
                        ["rozszerzeń, w przygotowanej pokazówce możesz zobaczyć możliwości silnika."], 
                        ["Nie ma żadnej dokumentacji, możesz napotkać błędy w kodzie jak i "], 
                        ["językowe, silnik powstawał przez ponad cztery lata i nie był planowany"], 
                        ["do sprzedaży itd. dlatego nie spodziewaj się aktualizacji i poprawek."], 
                        [" "],
                        ["Do tej pory na silniku powstało kilka gier (na różnych wersjach silnika):"], 
                        [" - Rainy Day: Pixel Art Edition"],
                        [" - Rainy Day"],
                        [" - Laser Island"],
                        [" - Swarm Defense: Planetary Invasion"],
                        [" - Swarm Defense"],
                        [" - Swarm Defense Classic"],
                        [" - Swarm Clicker"],
                        [""],
                        ["Jeżeli znajdziesz tutaj coś dla siebie to czuj się wolny do "],
                        ["użycia kodu dopóki nie jest to produkt komercyjny."], 
                        [""],
                        ["Z wyrazami szacunku "], 
                        ["CUTFUJI games "], 
                    ],

                    63: ["Lewa Myszka lub Spacja żeby Kontynuować","Zmiana Języka / Language Change - e"],

                    64: ["Otwarty Świat - Obszar Testowy"],
                    
                    "S0": ["Imię"],
                    "S1": ["Nastawienie"],
                    "S2": ["Nastawienie Punkty"],

                    "S3": ["Aktualny Dialog"],
                    "S4": ["Dialog do Ciebie"],
                    "S5": ["Drzewko Dialogowe"],

                    "B0": ["Energia - "],
                    "B1": ["[WSAD/ Strzałki] Ruch Postaci"],
                    "B2": ["[e] Użycie Obelisku- "],
                    "B3": ["[1] WŁ / WYŁ Wieża"],
                    "B4": ["[2] Kontrola NPC - "],
                    "B5": ["[3] Śledź NPC - "],
                    "B6": ["[4] Sterowanie Kamerą - "],
                    "B7": ["[5] Auto ruch Kamery - "],
                    "B8": ["[6] Hitbox - "],
                    "B9": ["[7] Sterowanie Myszą - "],

                    "B10": ["[q] Auto-ruch NPC - "],
                    "B11": ["[r] Zniszcz Wieżę"],
                    "B12": ["[t] Deszcz - "],
                    "B13": ["[y] OP Optim System - "],
                    "B14": ["[u] Stwórz Energia"],
                    "B15": ["[i] Stwórz Psy"],

                    "B16": ["NPCs - "],
                    "B17": ["Sort/Rys NPCs/Budynki - "],
                    "B18": ["Rysowanie Obiektów - "],

                    "B19": ["Życie Wieży - "],
                    "B20": ["[z] Auto Atak Życia - "],
                    "B21": ["[x] Typ pocisku - "],
                    "B22": ["[c,v] Prędkość animacji - "],
                    "B23": ["[b,n] Zasięg - "],

                    "Re0": ["[WSAD/ Strzałki] Ruch Kamery"],

                    "Re1": ["[e] Auto Kamera - "],
                    "Re2": ["[r] Niebo i Podłoga - "],
                    "Re3": ["[t] Tekstury - "],
                    "Re4": ["[y] Alpha noTexture - "],
                    "Re5": ["[u] TopDownControl - "],
                    "Re6": ["[i] 2D Render - "],
                    "Re7": ["[o] 3D Render - "],

                    "Re8": ["[] Kamera X - "],
                    "Re9": ["[] Kamera Y - "],
                    "Re10": ["[f,g] Kamera Z - "],
                    "Re11": ["[h,j] Stopień Kamery - "],
                    "Re12": ["[k,l] Wysokość Kamery Ś - "],
                    "Re13": ["[n,m] Wysokość Nieba - "],

                    "Re14": ["[] Szybkość Kamery - "],
                    "Re15": ["[z,x] Jakość Kamery - "],
                    "Re16": ["[1,2] Zasięg Kamery - "],
                    "Re17": ["[3,4] Precyzja Kamery - "],
                    "Re18": ["[] SWyskość Kamery - "],
                    "Re19": ["[] SSzerkość Kamery - "],

                    "Re20": ["[] Kamera S Rysuj X - "],
                    "Re21": ["[] Kamera S Rysuj Y - "],
                    "Re22": ["[v,b] Kamera S Rysuj Z - "],

                },
                
                1: {

                    "Re0": ["[WSAD / Arrows] Move"],

                    "Re1": ["[e] Auto Camera - "],
                    "Re2": ["[r] Sky & Floor - "],
                    "Re3": ["[t] Texture - "],
                    "Re4": ["[y] Alpha noTexture - "],
                    "Re5": ["[u] TopDownControl - "],
                    "Re6": ["[i] 2D Render - "],
                    "Re7": ["[o] 3D Render - "],

                    "Re8": ["[] Camera X - "],
                    "Re9": ["[] Camera Y - "],
                    "Re10": ["[f,g] Camera Z - "],
                    "Re11": ["[h,j] Camera View - "],
                    "Re12": ["[k,l] Camera W Height - "],
                    "Re13": ["[n,m] Camera Sky Height - "],

                    "Re14": ["[] Camera Speed - "],
                    "Re15": ["[z,x] Camera Quality - "],
                    "Re16": ["[1,2] Camera Distance - "],
                    "Re17": ["[3,4] Camera Accuracy - "],
                    "Re18": ["[] Camera SHeight - "],
                    "Re19": ["[] Camera SWidth - "],

                    "Re20": ["[] Camera S Draw X - "],
                    "Re21": ["[] Camera S Draw Y - "],
                    "Re22": ["[v,b] Camera S Draw Z - "],
                    
                    "B0": ["Energy - "],
                    "B1": ["[WSAD / Arrows] Move"],
                    "B2": ["[e] Hero Obelisk Use - "],
                    "B3": ["[1] ON / OFF Tower"],
                    "B4": ["[2] NPC Control - "],
                    "B5": ["[3] NPC Follow - "],
                    "B6": ["[4] Camera Control - "],
                    "B7": ["[5] Camera Auto Move - "],
                    "B8": ["[6] Hitbox - "],
                    "B9": ["[7] NPC Mouse Control - "],

                    "B10": ["[q] NPC Auto Move - "],
                    "B11": ["[r] Destroy Tower"],
                    "B12": ["[t] Rain - "],
                    "B13": ["[y] OP Optim System - "],
                    "B14": ["[u] Spawn Energy"],
                    "B15": ["[i] Spawn Dogs"],

                    "B16": ["NPCs - "],
                    "B17": ["Sort/Draw NPCs/Building - "],
                    "B18": ["Draw Objects - "],

                    "B19": ["Tower Life - "],
                    "B20": ["[z] AutoAtc Tower Life - "],
                    "B21": ["[x] Bullet Type - "],
                    "B22": ["[c,v] Anim Speed - "],
                    "B23": ["[b,n] Range - "],

                    "S0": ["Name"],
                    "S1": ["Attitude"],
                    "S2": ["Attitude Points"],

                    "S3": ["Actual Dialog"],
                    "S4": ["Dialog to You"],
                    "S5": ["Tree"],

                    "SpecPause": ["Space or Mouse Click to Continue"],

                    "D0": [["Neque porro quisquam est qui dolorem ipsum quia dolor sit "],["amet, consectetur, adipisci velit..."]],
                    "D1": ["Neque porro quisquam est qui dolorem ipsum quia dolor sit "],
                    "D2": ["amet, consectetur, adipisci velit..."],
                    "D3": ["Nick 25","Judy -25"],
                    "D4": ["Nick -25","Judy 25"],
                    "D5": ["Neque porro quisquam est"],
                    "D6": ["qui dolorem ipsum quia dolor sit"],
                    "D7": ["amet, consectetur,"],
                    "D8": ["adipisci velit..."],
                    "D9": ["Nick 50","Judy -50"],
                    "D10": ["Nick -50","Judy 50","Catherine 150"],
                    "D11": ["---"],

                    "N0": ["Text No.0"],
                    "N1": ["Text No.1"],
                    "N2": ["Text No.2"],
                    "N3": ["Text No.3"],
                    "N4": ["Text No.4"],
                    "N5": ["Text No.5"],
                    "N6": ["Text No.6"],
                    "N7": ["Text No.7"],
                    "N8": ["Text No.8"],
                    "N9": ["Text No.9"],
                    "RandomV": ["Video"],

                    0: ["Full Screen + Background"],
                    1: ["Regular List"],
                    3: ["HIDDEN"],
                    4: ["ACHIEVEMENT 1"],
                    5: ["ACHIEVEMENT 2"],
                    6: ["1 hour of Engine running"],
                    7: ["10 hour of Engine running"],
                    8: ["Levels List"],
                    9: ["Achievements List"],
                    10: ["Filter and Sort List"],
                    11: ["Animations"],
                    12: ["Change Window"],
                    13: ["Alerts"],
                    14: ["Settings"],
                    16: ["Slide Out"],
                    17: ["Transparent"],
                    18: ["English Language"],
                    19: ["Screen"],
                    21: [""],
                    22: ["1: 111111111 @2: 22222222"],
                    24: ["FROSTengine Ver "],
                    26: ["Journey List"],
                    27: ["Dialogue List"],
                    28: ["Change Window"],
                    29: ["Special Text"],
                    30: ["Video"],
                    31: ["Sound"],
                    32: ["Other Desktop"],
                    33: ["Start/Pause"],
                    34: ["Second -"],
                    35: ["Second +"],
                    36: ["Sound ON/OFF"],
                    37: [""],
                    38: ["Music"],
                    39: ["Visual Novel - Test Area"],     
                    40: ["Loop"],     
                    41: ["ON/OFF"],     
                    42: ["Form - Left Mouse Start / Enter Stop"],     
                    43: ["Sound +"],      
                    46: ["---"],      
                    47: ["Render 3D Ver 0.20"],   
                    49: ["Render 3D - Test Area"],    
                    50: ["Sound"],     
                    51: ["Multi-line text test", "1st Line First", "2nd Line Second"], 
                    52: ["Open World Ver 0.80"],                 
                    53: ["Visual Novel Ver 0.90"],                  
                    54: [["Desktop / Windows Ver 1.21"],["Desktop / Windows Mobile Ver 0.70"]],  
                    55: ["Close Applications"], 
                    60: ["Test Alert"],   
                    61: ["Open Web Page"],                   

                    62: [["Hi,"], 
                        ["welcome to my custom engine FROSTengine."], 
                        [""], 
                        ["FROSTengine was written in JavaScript without any plugins or extensions, in "], 
                        ["the prepared demonstration you can see the functions of the engine."], 
                        ["There is no documentation, you may encounter bugs in"], 
                        ["the code as well as in the english language, the engine was"], 
                        ["developed for more than four years and was not planned"],
                        ["for sale etc. so don't expect updates and fixes."], 
                        [" "],
                        ["Several games have been developed on the engine (on various engine versions):"],
                        [" - Rainy Day: Pixel Art Edition"],
                        [" - Rainy Day"],
                        [" - Laser Island"],
                        [" - Swarm Defense: Planetary Invasion"],
                        [" - Swarm Defense"],
                        [" - Swarm Defense Classic"],
                        [" - Swarm Clicker"],
                        [""],
                        ["If you find something here for you then feel free to use"],
                        ["the code as long as it is not a commercial product."],
                        [""], 
                        ["With best regards "], 
                        ["CUTFUJI games "], 
                    ],
                    63: ["Click or Space to Continue","Zmiana Języka / Language Change - e"],

                    64: ["Open World - Test Area"],  

                },
        
            },
            
            SpecText = {
               
                "Game_Ver": ["FROSTengine Ver 1.0.0"],

                // ---- Test ----

                "N0": ["0"],
                "N1": [0],
                "N3": ["<-- [0] -->"], // Points
                "N4": [0], // Monets
                "N5": [""],

                // ---- Visual Novel ----

                "VisNovel": [0],
                "VisNovelT": null,

                // ---- Render 3D ----

                "InfoRender": [" "],

                // ---- Open World ----

                "InfoOpen": [" "],
                "InfoOpenBuilding": [" "],

                "RD0": ["0/6"], // Ignited Obelisks
                "RD1": ["0"], // Points Collected

                // Visual Novel
          
                "VS0": [0], // Character information 0
                "VS1": [0], // Character information 1
                "VS2": [0], // Character information 2
                "VS3": [0], // Character information 3

                "VS4": [0], // About the answer 0
                "VS5": [0], // About the answer 1
                "VS6": [0], // About the answer 2
                "VS7": [0], // About the answer 3
                
                "VS8": [0], // Main data

            },

            TextData = {

                0:{
                    "Size": 40,
                    "Enter": 44,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",
                    "SColor": "black",
                    "LineJoin": "round",
                    "LWidth": 9,
                    "SPY": 0,
                },

                1:{
                    "Size": 60,
                    "Enter": 65,
                    "Spec": "normal",
                    "Color": "red",
                    "Font": "Yellowtail-Regular",
                },

                2:{
                    "Size": 16,
                    "Enter": 19,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Arial",
                },

                3:{
                    "Size": 45,
                    "Enter": 13,
                    "Spec": "bold",
                    "Color": "black",
                },

                4:{
                    "Size": 25,
                    "Enter": 28,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",
                    "OffsetX": 0,
                    "OffsetY": 3,
                    "ShadowColor": "#092546",
                    "ShadowBlur": 3,
                },

                5:{
                    "Size": 18,
                    "Enter": 28,
                    "Spec": "normal",
                    "Color": "black",
                    "Font": "Roboto-Medium",
                },

                6:{
                    "Size": 25,
                    "Enter": 28,
                    "Spec": "normal",
                    "Color": "black",
                    "Font": "Roboto-Medium",
                    "OffsetX": 0,
                    "OffsetY": 3,
                    "ShadowColor": "red",
                    "ShadowBlur": 5,
                },

                7:{
                    "Size": 15,
                    "Enter": 18,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",
                },

                8:{
                    "Size": 20,
                    "Enter": 23,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",
                    "OffsetX": 0,
                    "OffsetY": 3,
                    "ShadowColor": "#092546",
                    "ShadowBlur": 3,
                },

                9:{
                    "Size": 25,
                    "Enter": 28,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",
                },

                10:{
                    "Size": 20,
                    "Enter": 28,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",
                    "OffsetX": 0,
                    "OffsetY": 3,
                    "ShadowColor": "#092546",
                    "ShadowBlur": 3,
                },

                11:{
                    "Size": 23,
                    "Enter": 28,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",
                    "OffsetX": 0,
                    "OffsetY": 3,
                    "ShadowColor": "#092546",
                    "ShadowBlur": 3,
                },

                12:{
                    "Size": 35,
                    "Enter": 28,
                    "Spec": "normal",
                    "Color": "black",
                    "Font": "Roboto-Medium",
                },

                "Pause":{

                    "Size": 40,
                    "Enter": 17,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",

                },

                "Ver":{

                    "Size": 15,
                    "Enter": 18,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",

                },

                13:{

                    "Size": 30,
                    "Enter": 33,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Arial",

                },

                14:{

                    "Size": 28,
                    "Enter": 32,
                    "Spec": "normal",
                    "Color": "red",
                    "Font": "Arial",

                },

                15:{
                    "Size": 30,
                    "Enter": 18,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",
                },

                16:{
                    "Size": 16,
                    "Enter": 19,
                    "Spec": "normal",
                    "Color": "black",
                    "Font": "Arial",
                },

                17:{
                    "Size": 25,
                    "Enter": 28,
                    "Spec": "normal",
                    "Color": "black",
                    "Font": "Roboto-Medium",
                },

                18:{
                    "Size": 20,
                    "Enter": 24,
                    "Spec": "normal",
                    "Color": "white",
                    "Font": "Roboto-Medium",
                },

                19:{
                    "Size": 18,
                    "Enter": 21,
                    "Spec": "normal",
                    "Color": "white",
                },

                20:{
                    "Size": 16,
                    "Enter": 28,
                    "Spec": "normal",
                    "Color": "black",
                    "Font": "Roboto-Medium",
                },

            },

            SpecListData = {

                0:{
                    
                    0:{

                        "Unlock": true,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
        
                    },

                    1:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    2:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    3:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    4:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    5:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    6:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    7:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    8:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    9:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    10:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    },

                    11:{

                        "Unlock": false,

                        "Points": 0,
                        "Mission_0": false,
                        "Mission_1": false,
                        "Mission_2": false,
    
                    }

                }

            },
            
            Alerts = {

                "Reset":{

                    "Width": 0,
                    "Height": 0,
                    "TMX": 0,
                    "TMY": 0,

                    0:{

                        "Text":{
                            
                            "Num": 1,

                            0:{
                                "Text": 60,
                                "Data": {

                                    0: {

                                        "PX": 310,
                                        "PY": 45,
                                        "Align": "right",
                                        "Data": 15,
    
                                    },

                                    1: {

                                        "PX": 270,
                                        "PY": 45,
                                        "Align": "right",
                                        "Data": 15,
    
                                    }

                                },
                            }
                            
                         }
                       
                    }

                },

                0: {

                    "Num": "Alert_1",
                    "File": "Button_4",
                    "Time": 1700,
                    "TMX": 0,
                    "TMY": 0,
                    "Height": 69,
                    "Width": 394,
                    "PX": -394,
                    "PY": 90

                },

                1: {

                    "Num": "Alert_2",
                    "File": "Button_3",
                    "Time": 1000,
                    "TMX": 0,
                    "TMY": 0,
                    "Height": 69,
                    "Width": 394,
                    "PX": 1540,
                    "PY": 90,

                    "Spec":{

                        "Height": 55,
                        "Width": 55,
                        "PX": 137,
                        "PY": 7,

                    }

                },

            },
            
            Achievements = {

                "Plat": false,

                "length": 0,
                "UnlockN": 0, // number of unlocked achievements

                "Height": 90,
                "Width": 90,
                "TMX":0,
                "TMY":0,            
        
                "PlayTimeH": 0, // playing time
                "PlayTimeM": 0,
                "PlayTimeS": 0,

                "List": { 

                    "Time": {
                        
                        "ActL": 0,
                        "MaxL": 2,
                        
                        "List": {
                            
                            0: 2,
                            1: 3,
    
                        },
                        
                    },

                },
               
                0: {
                    "Name": "FinishGame", 
                    "Prize": 60,
                    "Type": "FinishGame",
                    "Unlock": false,
                    "Hidden": false,   
                    "File": "Achiv_0",            
                },
        
                1: {
                    "Name": "OdblokujSkille", 
                    "Prize": 50,
                    "Type": "AllSkill",
                    "Unlock": false,
                    "Hidden": true,   
                    "File": "Achiv_1",          
                },
        
                2: {
                    "Name": "time", 
                    "Prize": 10,
                    "Type": "time",
                    "CTF": 1,
                    "Unlock": false,
                    "Hidden": false,   
                    "File": "Achiv_2",          
                },
        
                3: {
                    "Name": "time", 
                    "Prize": 15,
                    "Type": "time",
                    "CTF": 10,
                    "Unlock": false,
                    "Hidden": true,   
                    "File": "Achiv_3", 
                },

            },
            
            StartAnimation = {

                "Start": false,
                "Timer": 0,
                "MaxTimer": 10,

                "Alpha": 0,
                "AddAlpha": 0,

                "length": 1,
        
                "MainGraphic":{

                    "File": "Background_3",
                    "Height": 1080,
                    "Width": 1920,
                    "PX": 0,
                    "PY": 0,
                    "TMH": 1080,
                    "TMW": 1920,
                    "TMX": 0,
                    "TMY": 0,

                    "SpecText": {
            
                        "Num": 2,
    
                        0:{
    
                            "Text": 62,
                            "Data": {

                                0: {

                                    "PX": 100,
                                    "PY": 120,
                                    "Align": "left",
                                    "Data": 13,

                                },

                                1: {

                                    "PX": 100,
                                    "PY": 120,
                                    "Align": "left",
                                    "Data": 13,

                                }

                            },
    
                        },

                        1:{
    
                            "Text": 63,
                            "Data": {

                                0: {

                                    "PX": 100,
                                    "PY": 1080-90,
                                    "Align": "left",
                                    "Data": 14,

                                },

                                1: {

                                    "PX": 100,
                                    "PY": 1080-90,
                                    "Align": "left",
                                    "Data": 14,

                                }

                            },
    
                        },
    
                    }

                },

                "TransGraphic":{

                    "File": "Background_3_T",
                    "Height": 1080,
                    "Width": 1920,
                    "PX": 0,
                    "PY": 0,
                    "TMH": 1080,
                    "TMW": 1920,
                    "TMX": 0,
                    "TMY": 0,

                }

            },
            
            AddData = {

                // Open World //

                "ObeliskCounter": 0,
                "Obelisk_P_Counter": 0,

                "ActualObelisk": null,
                "Obelisks":{

                    "Gate": 8,
                    "Max": 6,

                    0: {
                        
                        "N": 0,
                        "T": false

                    },
                    1: {
                        
                        "N": 0,
                        "T": false

                    },
                    2: {
                        
                        "N": 0,
                        "T": false

                    },
                    3: {
                        
                        "N": 0,
                        "T": false

                    },
                    4: {
                        
                        "N": 0,
                        "T": false

                    },
                    5: {
                        
                        "N": 0,
                        "T": false

                    },

                },

                "Zoom": false,
                "RD_HitBox": false,
                "PointsRD": 0,
                "Build": false,

                // --- Test ---

                "SpecText": {

                    "Num": 1,

                    0: {
                        
                        "SText": true,
                        "Data": {

                            0: {

                                "PX": 400,
                                "PY": 45,
                                "Align": "normal",
                                "Data": 4,

                            },

                            1: {

                                "PX": 400,
                                "PY": 45,
                                "Align": "normal",
                                "Data": 4,

                            }

                        },
                        
                    },

                },

                "Coins": 0,
                "Points": 0,
                "Money": [],
                "TextList": [],

            },
            
            GameData = {
                
                // Open World

                "WaveGroup": null, // Fall Group
                "Wave": null, // Current Wave
                "WTime": 0, // Current wave time
                "WPlace": 0, // at what point in the wave are we
                "NumberD": 0, // How many times in the loop

            };

            // Open World
            
            var OpenWorldData = {

                0:{

                    "WinPause": false,
                    "Pause": false,
                    "Move": false, // if - Do you want the button to work with mouse movement
                    "Work": false,
    
                    "ActBuilding": null, // Object currently in work
                    "PointOn": null, // Which object the mouse/pointer is on
    
                    "RainList": [],
                    "RainFall": [],

                    "NPCRain": [],
                    "Count_Rain": 0,
    
                }
               
            },
           
            OPCamera = {
                
                "MapNum":{

                    "OP2": 0

                },

                "AMap": 0, // Current map number

                0:{

                    "MapBuild": false,
                    "SortList": [],
                    "NPCDrawL": [], // Drawing list of flying npc

                    "NPCList": [], // List of npcs
                    "SBuildList": [],
                    "ObjectList": [],

                    "InChX": 0, // current middle chunk x
                    "InChY": 0, // current middle chunk y
                    "PX": 0, // px camera
                    "PY": 0, // py camera

                    "NPCNumC": 0, // Currently controlled npc - 0
                    "NPCCType": true, // Type of npc control if we control
                    "Follow": 0, // Currently followed npc - 0
                    "Control": true, // Camera control
    
                    "CamMove": { // If we do not control the camera then the auto motion type for the camera
                        
                        "Move": null,
                        "Counter": 0,
                        "Num":0
    
                    }, 
    
                    "Net": { // Current grid
                       
                        "NetN": [],
                        "Block": false, // is there a building blockade
    
                        "SizeX": 0, // the width of the current grid
                        "SizeY": 0, // height of current grid
    
                        "PX": 0, // px hitbox building
                        "PY": 0, // py hitbox building
    
                    }, 

                    "Build": null, // Which object we are building
    
                }

            },
            
            Maps_Data = {
                
                0:{

                    "NormalSpawn": false, // Spawn of all npc at one point at the start of the world
                    "StartWave": 0, // which wave starts the system and whether there are to be waves

                    "NoFrameRefresh": false,

                    "CameraDiff":{
                       
                        "XL": 0,
                        "XR": 0,

                        "YL": -140,
                        "YR": 0,

                    },

                    "Reset": false, // Always creating the world again

                    "CPX": 0,
                    "CPY": 0,

                    "Map": [
                            ["Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_2","Floor_1","Floor_2","Floor_1","Floor_2","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1"],
                            ["Floor_1","Floor_2","Floor_3","Floor_1","Floor_3","Floor_2","Floor_2","Floor_2","Floor_3","Floor_1","Floor_1","Floor_1","Floor_1","Floor_2","Floor_2"],
                            ["Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_2","Floor_2","Floor_1","Floor_1","Floor_2","Floor_2","Floor_1","Floor_1","Floor_1","Floor_2"],
                            ["Floor_1","Floor_3","Floor_2","Floor_2","Floor_1","Floor_1","Floor_2","Floor_1","Floor_3","Floor_2","Floor_1","Floor_1","Floor_3","Floor_2","Floor_1"],
                            ["Floor_2","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1","Floor_1","Floor_3","Floor_1","Floor_3","Floor_1","Floor_2","Floor_1","Floor_1","Floor_2"],
                            ["Floor_2","Floor_2","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1","Floor_2","Floor_2"],
                            ["Floor_1","Floor_2","Floor_2","Floor_2","Floor_1","Floor_3","Floor_2","Floor_2","Floor_3","Floor_2","Floor_2","Floor_1","Floor_3","Floor_1","Floor_1"],
                            ["Floor_2","Floor_2","Floor_1","Floor_2","Floor_3","Floor_1","Floor_2","Floor_2","Floor_1","Floor_3","Floor_1","Floor_3","Floor_1","Floor_1","Floor_2"],
                            ["Floor_1","Floor_1","Floor_3","Floor_1","Floor_2","Floor_1","Floor_3","Floor_1","Floor_1","Floor_2","Floor_3","Floor_1","Floor_1","Floor_2","Floor_2"],
                            ["Floor_3","Floor_1","Floor_1","Floor_2","Floor_2","Floor_3","Floor_1","Floor_3","Floor_2","Floor_1","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1"],
                            ["Floor_1","Floor_2","Floor_2","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1","Floor_3","Floor_2","Floor_1","Floor_1"],
                            ["Floor_2","Floor_1","Floor_3","Floor_3","Floor_2","Floor_2","Floor_3","Floor_1","Floor_2","Floor_1","Floor_1","Floor_1","Floor_2","Floor_3","Floor_1"],
                            ["Floor_1","Floor_2","Floor_1","Floor_1","Floor_1","Floor_2","Floor_1","Floor_3","Floor_1","Floor_2","Floor_1","Floor_2","Floor_1","Floor_2","Floor_1"],
                            ["Floor_1","Floor_1","Floor_2","Floor_3","Floor_1","Floor_1","Floor_1","Floor_3","Floor_1","Floor_1","Floor_2","Floor_1","Floor_3","Floor_1","Floor_1"],
                            ["Floor_1","Floor_3","Floor_1","Floor_1","Floor_3","Floor_1","Floor_2","Floor_1","Floor_1","Floor_3","Floor_1","Floor_1","Floor_1","Floor_1","Floor_2"],
                            ["Floor_2","Floor_2","Floor_3","Floor_2","Floor_3","Floor_1","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1","Floor_3","Floor_2","Floor_1","Floor_1"],
                            ["Floor_1","Floor_2","Floor_2","Floor_1","Floor_3","Floor_2","Floor_1","Floor_2","Floor_1","Floor_1","Floor_2","Floor_2","Floor_1","Floor_2","Floor_1"],
                            ["Floor_1","Floor_2","Floor_1","Floor_2","Floor_1","Floor_1","Floor_1","Floor_3","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_2","Floor_2"],
                            ["Floor_1","Floor_3","Floor_1","Floor_1","Floor_1","Floor_1","Floor_2","Floor_1","Floor_1","Floor_2","Floor_1","Floor_3","Floor_2","Floor_1","Floor_1"],
                            ["Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1","Floor_1"]
                    ],

                    "NetBlocade": [
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
                    ],

                    "Buildings": {

                        "length": 12,

                        // Obelisks

                        0:{
                            
                            "BuildN": 5,
                            "Chunk": 96,
                            "Net": 2,

                        },

                        1:{
                            
                            "BuildN": 6,
                            "Chunk": 98,
                            "Net": 2,

                        },

                        2:{
                            
                            "BuildN": 7,
                            "Chunk": 111,
                            "Net": 2,

                        },

                        3:{
                            
                            "BuildN": 8,
                            "Chunk": 113,
                            "Net": 2,

                        },

                        4:{
                            
                            "BuildN": 9,
                            "Chunk": 126,
                            "Net": 2,

                        },

                        5:{
                            
                            "BuildN": 10,
                            "Chunk": 128,
                            "Net": 2,

                        },

                        6:{
                            
                            "BuildN": 11,
                            "Chunk": 2,
                            "Net": 1,

                        },

                        7:{
                            
                            "BuildN": 12,
                            "Chunk": 12,
                            "Net": 1,

                        },

                        8:{
                            
                            "BuildN": 13,
                            "Chunk": 212,
                            "Net": 1,

                        },

                        9:{
                            
                            "BuildN": 14,
                            "Chunk": 102,
                            "Net": 1,

                        },

                        10:{
                            
                            "BuildN": 15,
                            "Chunk": 270,
                            "Net": 1,

                        },

                        11:{
                            
                            "BuildN": 16,
                            "Chunk": 284,
                            "Net": 1,

                        },

                    },

                    "Weather":{

                        "RainWork": true,
                        "Rain": {
                            
                            "SpeedRain": 15,
                            "SpeedFall": 100,
                            "Count_Rain_Max": 1,

                            "Up":{
                  
                                "File": "RainF",
            
                                "TMW": 15,
                                "TMH": 45,
            
                                "Width": 15,
                                "Height": 45,
            
                                "Alp_0": 1,
                                "Alp_1": 0.3,
            
                            },
            
                            "Down":{
                              
                                "MAnX": 4,
            
                                "File": "RainD",
            
                                "TMW": 20,
                                "TMH": 20,
            
                                "TMX":20,
                                "TMY":0,
            
                                "Width": 30,
                                "Height": 30,
            
                            },
            
                            "NPC":{
                              
                                "File": "RainD",
            
                                "TMW": 20,
                                "TMH": 20,
            
                                "TMX":20,
                                "TMY":0,
            
                                "Width": 40,
                                "Height": 40,
                                
                                "MAnX": 4,
                                "PY": 40,
            
                                "PX_0": 0,
                                "PX_1": 0,
                                "PX_3": 0,
                                "PX_4": 0,
                                "PX_6": 0,
            
                            },
            
                        }

                    },

                    "LiveB":{

                        "Type": "Live",
                        "File": "Black_Build",

                        "TMH": 7,
                        "TMW": 30,

                        "PX": -15,
                        "PY": 35,

                        "Height": 7,
                        "Width": 30,
                        
                        "BarC":{
                            
                            "File": "Red_Build",
                            "TMH": 7,
                            "TMW": 30,
                            "PX": 0,
                            "PY": 0,
                            "Height": 7,
                            "Width": 30,
                            "MaxWidth": 30

                        }
                        
                    },

                    "LiveNPC":{

                        "Type": "Live",
                        "File": "Black",
                        "TMH": 10,
                        "TMW": 50,
                        "PX": -10,
                        "PY": 10,
                        "Height": 5,
                        "Width": 20,
                        
                        "BarC":{
                            
                            "File": "Red",
                            "TMH": 10,
                            "TMW": 50,
                            "PX": 0,
                            "PY": 0,
                            "Width": 20,
                            "MaxWidth": 20,
                            "Height": 5
                        }
                        
                    },

                    "AnimSpeed": 140,
                    "ObjectAnimSpeed": 100,
                    "Sort": true,
                    "NPCT": 0, // Type of npc setting
                    "Size": 220, // chunk size
                    
                    "CHSizeX": null, // Locking camera x
                    "CHSizeY": null, // Locking camera y
                    "CHX": 1116/2, // Half screen x // 1100 // 960
                    "CHY": 750/2, // Half screen y // 800 // 540

                    "MapSizeX": 15, // map size x // 15
                    "MapSizeY": 20, // map size y // 20
                    "Speed": 30, // speed of movement on the map - camera

                    "DChunksX": 3, // number of chunks drawn x
                    "DChunksY": 2, // number of chunks drawn y
                    
                    "Net": 2, // size of net for chunk
                    "NetSize": null, // grid size in pixels
                  
                    "NetLook": { // General grid
                        
                        "Color": "White", // Main grid
                        "Width": 1,

                        "pColor": "Black", // subGrid
                        "pWidth": 0.5,
                        "pPY": 3,

                    },

                    "HitBox":{ // Looking Mouse

                        "Color": "White", // Main Square
                        "Alpha": 0.6,

                        "nColor": "Black", // subGeneral Square
                        "nAlpha": 0.4,
                        "nPY": 3,

                        "RColor": "White", // Colour of the main wheel
                        
                        "nRColor": "Black", // Black Circle
                        "nRpy": 3,
                        "nRWidth": 5,

                    },

                    "ActB":{ // Clicked Building

                        "Color": "White", // Main Square
                        "Alpha": 0.4,

                        "nColor": "Black", // subGeneral Square
                        "nAlpha": 0.4,
                        "nPY": 3,

                        "RColor": "White", // Colour of the main wheel
                        
                        "nRColor": "Black",  // Black Circle
                        "nRpy": 3,
                        "nRWidth": 5,

                    },

                    "BuildLook":{ // Building being created

                        "BColor": "Black", // Square cannot be built
                        "BWidth": 2,
                        "BAlpha": 0.2,

                        "nBColor": "White", // Square can be built
                        "nBWidth": 3,
                        "nBAlpha": 0.7,

                        "lnBColor": "Black", // sub-square can be built
                        "lnBWidth": 3,
                        "lnPY": 3,

                        "RColor": "White", // White Circle
                        "RWidth": 2,
                        
                        "nRColor": "Black", // Black Circle
                        "nRpy": 3,
                        "nRWidth": 5,
                    },

                    "All":[], // Map of the chunk distribution table
                    "Chunks":[] // the chunk list
                    
                },
                
            },
            
            CameraMoves = { 

                0:{

                    "length": 4,
                    "loop": true,

                    0:{

                        "Counter": 50,
                        "Xm": 10,
                        "Ym": 0
    
                    },
    
                    1:{
    
                        "Counter": 50,
                        "Xm": 0,
                        "Ym": 10
    
                    },
    
                    2:{
    
                        "Counter": 50,
                        "Xm": -10,
                        "Ym": 0
    
                    },
    
                    3:{
    
                        "Counter": 50,
                        "Xm": 0,
                        "Ym": -10
    
                    }

                }

            },
            
            MapObjects = {

                "HotKeys":{

                    "1": 0,

                },
                
                0:{ // Tower
    
                    "Build":{

                        "NetSX": 1, // grid size for the building x
                        "NetSY": 1, // grid size for the building y
                        "PX": 55-28, // px grid building
                        "PY": 55-32, // py grid building

                    },

                    "Spec":{
                        
                        "Spec": 0,
                        "Live": 1000,
                        "Attack": 3,

                    },

                    "Data":{
                        
                        "DyingA": true,

                        "Script": 0,
                        "SpeedC": 0, // Zwiększenie szybkości animacji

                        "Replaceable": false,
                        "Name": "Tower",
                        "Solid": true,
                        "Collision": true,
                        
                        "Range": 200,
                        "Bullet": 1,

                        "ShootPX": 0, 
                        "ShootPY": -15, 
        
                        "File": "Tower_Wait",
    
                        "TMH": 65,
                        "TMW": 56,
                        "AnX": 0,
                        "TMY": 0,
                        "TMX": 56,
    
                        "Height": 65,
                        "Width": 56,
        
                        "Blur": true,
                        "MHeight": 65,
        
                        "HitBox":{
                                
                            "PX": -28,
                            "PY": -12,
                            "Height": 45,
                            "Width": 56
        
                        }
        
                    }
 
                },

                1: { // Tower - Bullet Target Follow
    
                    "Spec":{

                        "Type": 0,

                    },

                    "Data":{

                        "Name": "Ball",
                        "File": "Ball",
    
                        "AnX": 0,

                        "TMY":15,
                        "TMX":15,
                        "TMH": 15,
                        "TMW": 15,
                        "Height": 27,
                        "Width": 27,
        
                    }

                },

                2:{ // Enemy
                   
                    "Spec":{
                        
                        "Type": 0, // set of character moves
                        "Up": 0,
                        "Blocade": 2,

                    },

                    "Data":{
                       
                        "Live": 50,

                        "NPCT": 0,
                        "Type": 0, // NPC number for killa counter

                        "Name": "Enemy",
                        "Solid": false, 
        
                        "Blur": true,
                        "MHeight": 85,

                        "File": "Enemy_Stay_Down",
    
                        "TMH": 95,
                        "TMW": 115,
                        "AnX": 0,
                        "TMY":95,
                        "TMX":115,
                        
                        "Height": 95*0.8,
                        "Width": 115*0.8,
                       
                    }

                },

                3:{ // Hero
                   
                    "Spec":{

                        "Type": 1,
                        "Up": 0,
                        "Blocade": 1,

                    },

                    "Data":{
                        
                        "NPCT": 0,
                        "Hero": true,

                        "Name": "Hero",
                        "Solid": false, 
                        "Collision": true,

                        "Blur": true,
                        "MHeight": 123,
        
                        "File": "Hero_Stay_Down",
    
                        "TMH": 123,
                        "TMW": 123,
                        "AnX": 0,
                        "TMY": 123,
                        "TMX": 123,
                        
                        "Height": 123,
                        "Width": 123,
        
                        "HitBox":{
                                
                            "PX": -25,
                            "PY": 25*1.3,
                            "Height": 20*1.3,
                            "Width": 43
        
                        }
        
                    }

                },

                4: { // Energy
    
                    "Spec":{

                        "Type": 2,
                        "Up": 0,
                        "Blocade": 0,

                    },

                    "Data":{

                        "NPCT": 1,
                        "Name": "Energi",
                        "Solid": false, 
                        "Collision": false,
        
                        "Blur": false,
                        "Mirr": {
                            
                            "File": "WaterFMirr",

                            "TMH": 60,
                            "TMW": 60,
                            
                            "TMY":60,
                            "TMX":60,

                            "Height": 60,
                            "Width": 60,
                            
                        },
                        
                        "File": "Energi",
    
                        "TMH": 100,
                        "TMW": 60,
                        "AnX": 0,
                        "TMY":100,
                        "TMX":60,
    
                        "Height": 100,
                        "Width": 60,

                        "MHeight": -25,
        
                    }

                },

                // Obelisks

                5: { // Obelisk
    
                    "Spec":{


                    },

                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": 75, 
                        "PY": 0, 

                    },

                    "Data":{

                        "Obelisk": true,

                        "Replaceable": false,
                        "Name": "Obelisk_1",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_1",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 220,
                        "Width": 80,

                        "MHeight": 200,
    
                        "HitBox":{
                                
                            "PX": -35,
                            "PY": 60,
                            "Height": 50,
                            "Width": 70
        
                        }
        
                    }

                },

                6: {
    
                    "Spec":{


                    },

                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": 75, 
                        "PY": 0, 

                    },

                    "Data":{

                        "Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_2",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_2",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 220,
                        "Width": 80,

                        "MHeight": 200,
    
                        "HitBox":{
                                
                            "PX": -35,
                            "PY": 60,
                            "Height": 50,
                            "Width": 70
        
                        }
        
                    }

                },

                7: { 
    
                    "Spec":{


                    },
                    
                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": 35, 
                        "PY": 0, 

                    },

                    "Data":{

                        "Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_3",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_3",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 220,
                        "Width": 80,

                        "MHeight": 200,
    
                        "HitBox":{
                                
                            "PX": -35,
                            "PY": 60,
                            "Height": 50,
                            "Width": 70
        
                        }
        
                    }

                },

                8: {
    
                    "Spec":{


                    },
                    
                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": 115, 
                        "PY": 0, 

                    },

                    "Data":{

                        "Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_4",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_4",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 220,
                        "Width": 80,

                        "MHeight": 200,
    
                        "HitBox":{
                                
                            "PX": -35,
                            "PY": 60,
                            "Height": 50,
                            "Width": 70
        
                        }
        
                    }

                },

                9: { 
    
                    "Spec":{


                    },
                    
                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": 75, 
                        "PY": 0, 

                    },

                    "Data":{

                        "Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_5",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_5",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 220,
                        "Width": 80,

                        "MHeight": 200,
    
                        "HitBox":{
                                
                            "PX": -35,
                            "PY": 60,
                            "Height": 50,
                            "Width": 70
        
                        }
        
                    }

                },

                10: {
    
                    "Spec":{


                    },
                    
                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": 75, 
                        "PY": 0, 

                    },

                    "Data":{

                        "Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_6",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_6",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 220,
                        "Width": 80,

                        "MHeight": 200,
    
                        "HitBox":{
                                
                            "PX": -35,
                            "PY": 60,
                            "Height": 50,
                            "Width": 70
        
                        }
        
                    }

                },

                11: { // Obelisk 2
    
                    "Spec":{
                       
                        "Spec": 1,

                    },

                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": -20, 
                        "PY": 80, 

                    },

                    "Data":{

                        "P_Obelisk": true,

                        "Replaceable": false,
                        "Name": "Obelisk_P_1",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_P_1",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 165,
                        "Width": 60,

                        "MHeight": 160,
    
                        "HitBox":{
                                
                            "PX": -25,
                            "PY": 30,
                            "Height": 50,
                            "Width": 50
        
                        }
        
                    }

                },

                12: { 
    
                    "Spec":{

                        "Spec": 1

                    },

                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": -20, 
                        "PY": 80, 

                    },

                    "Data":{

                        "P_Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_P_2",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_P_2",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 165,
                        "Width": 60,

                        "MHeight": 160,
    
                        "HitBox":{
                                
                            "PX": -25,
                            "PY": 30,
                            "Height": 50,
                            "Width": 50
        
                        }
        
                    }

                },

                13: { 
    
                    "Spec":{

                        "Spec": 1

                    },
                    
                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": -20, 
                        "PY": 80, 

                    },

                    "Data":{

                        "P_Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_P_3",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_P_3",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 165,
                        "Width": 60,

                        "MHeight": 160,
    
                        "HitBox":{
                                
                            "PX": -25,
                            "PY": 30,
                            "Height": 50,
                            "Width": 50
        
                        }
        
                    }

                },

                14: { 
    
                    "Spec":{

                        "Spec": 1

                    },
                    
                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": -23, 
                        "PY": 130, 

                    },

                    "Data":{

                        "P_Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_P_4",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_P_4",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 165,
                        "Width": 60,

                        "MHeight": 160,
    
                        "HitBox":{
                                
                            "PX": -25,
                            "PY": 30,
                            "Height": 50,
                            "Width": 50
        
                        }
        
                    }

                },

                15: { 
    
                    "Spec":{

                        "Spec": 1

                    },
                    
                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": -20, 
                        "PY": 80, 

                    },

                    "Data":{

                        "P_Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_P_5",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_P_5",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 165,
                        "Width": 60,

                        "MHeight": 160,
    
                        "HitBox":{
                                
                            "PX": -25,
                            "PY": 30,
                            "Height": 50,
                            "Width": 50
        
                        }
        
                    }

                },

                16: {
    
                    "Spec":{

                        "Spec": 1

                    },
                    
                    "Build":{

                        "NetSX": 1, 
                        "NetSY": 1, 
                        "PX": -20, 
                        "PY": 80, 

                    },

                    "Data":{

                        "P_Obelisk": true,
                        "Replaceable": false,
                        "Name": "Obelisk_P_6",
                        "Solid": true, // For non-moving objects
                        "Collision": true, // Only between fixed objects and npc
        
                        "Blur": true,

                        "File": "Obelisk_P_6",
    
                        "TMH": 220,
                        "TMW": 80,
                        "AnX": 0,
                        "TMY": 220,
                        "TMX": 80,

                        "Height": 165,
                        "Width": 60,

                        "MHeight": 160,
    
                        "HitBox":{
                                
                            "PX": -25,
                            "PY": 30,
                            "Height": 50,
                            "Width": 50
        
                        }
        
                    }

                },

                17: { // Tower - Bullet Line Shot
    
                    "Spec":{

                        "Type": 1,

                    },

                    "Data":{

                        "Name": "Ball",
                        "File": "Ball",
    
                        "AnX": 0,

                        "TMY":15,
                        "TMX":15,
                        "TMH": 15,
                        "TMW": 15,
                        "Height": 27,
                        "Width": 27,
        
                    }

                },

            },
            
            Moves = {

                0:{ // Enemy

                    "Die": 1,

                    "length": 1,

                    0:{ // Move

                        "File": "Move",
                        "Speed": 3,
                        "Move": 1,

                        "AnimType": 0,
                        "MAnX": 1,

                    },
                    
                    1:{ // Die

                        "File": "Die",
                        "Speed": 0,
                        "Counter": null,
                        "Move": null,

                        "AnimType": 3,
                        "MAnX": 4,

                        "DieCounter": [1,1,10,30,30],

                    },

                },

                1:{ // Hero

                    "length": 1,

                    0:{ // Stay

                        "File": "Stay",
                        "Speed": 0,
                        "Counter": 6,
                        "Move": 0,

                        "AnimType": 0,
                        "MAnX": 6,

                    },

                    1:{ // Move

                        "File": "MoveF",
                        "Speed": 7,
                        "Move": 1,

                        "AnimType": 2,
                        "MAnX": 5,

                    },

                },

                2:{ // Energy

                    "length": 1,

                    0:{ // "Stay"

                        "File": "Energi",
                        "Speed": 0,
                        "Counter": 3000,
                        "Move": 4,

                        "AnimType": 0,
                        "MAnX": 7,

                    },

                    1:{ // "Move"

                        "File": "Energi",
                        "Speed": 5,
                        "Counter": 30,
                        "Move": 3,

                        "AnimType": 0,
                        "MAnX": 7,

                    },

                    2:{ // "ToHero"

                        "File": "EnergiDie",
                        "Speed": 10,
                        "Counter": 30,
                        "Move": 2,

                        "AnimType": 1,
                        "MAnX": 2,

                    }

                },

            },
            
            BuildAnimF = {
                
                "Tower":{ 

                    "Destroy": 5,

                    0: {
                        
                        "AnimCounter": 20,
                        "AnimType": 0,
                        "MAnX": 5,
                        "File": "Tower_Build",
                        "Next": 1,

                    },

                    1: {
                        
                        "AnimCounter": 20,
                        "AnimType": 0,
                        "MAnX": 5,
                        "File": "Tower_Prepare",
                        "Next": 2,

                    },

                    2: {
                        
                        "AnimCounter": 20,
                        "AnimType": 0,
                        "MAnX": 5,
                        "File": "Tower_Shoot",
                        "Next": 3,

                    },

                    3: {
                        
                        "AnimCounter": 20,
                        "AnimType": 1,
                        "MAnX": 5,
                        "File": "Tower_Wait",
                        "Next": 4,

                    },

                    4: {
                        
                        "AnimCounter": 20,
                        "AnimType": 0,
                        "MAnX": 5,
                        "File": "Tower_Shoot2",
                        "Next": 1,

                    },

                    5:{

                        "AnimCounter": 10,
                        "AnimType": 2,
                        "MAnX": 5,
                        "File": "Tower_Destroy",

                    }

                },

                "Obelisk_1":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_1",
                        "Next": 0,

                    },

                },

                "Obelisk_2":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_2",
                        "Next": 0,

                    },

                },
                
                "Obelisk_3":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_3",
                        "Next": 0,

                    },

                },
                
                "Obelisk_4":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_4",
                        "Next": 0,

                    },

                },
                
                "Obelisk_5":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_5",
                        "Next": 0,

                    },

                },
                
                "Obelisk_6":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_6",
                        "Next": 0,

                    },

                },

                "Obelisk_P_1":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_P_1",
                        "Next": 0,

                    },

                },

                "Obelisk_P_2":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_P_2",
                        "Next": 0,

                    },

                },
                
                "Obelisk_P_3":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_P_3",
                        "Next": 0,

                    },

                },
                
                "Obelisk_P_4":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_P_4",
                        "Next": 0,

                    },

                },
                
                "Obelisk_P_5":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_P_5",
                        "Next": 0,

                    },

                },
                
                "Obelisk_P_6":{ 

                    "DeathN": null,

                    0: {
                        
                        "AnimCounter": 10,
                        "AnimType": null,
                        "MAnX": 1,
                        "File": "Obelisk_P_6",
                        "Next": 0,

                    },

                },

            },

            ObjMoves = {

                0:{ // Tower - Bullet Target

                    0:{

                        "Spec": 0,
                        "AnimType": 0,
                        "File": "Ball",
                        "Speed": 8,
                        "Move": 1,
                        "MAnX": 3,

                    },

                    1:{

                        "Spec": 0,
                        "AnimType": 1,
                        "File": "Ball_Boom",
                        "Speed": 0,
                        "Move": null,
                        "MAnX": 3,

                    },

                },

                1:{ // Tower - Bullet Line

                    0:{

                        "Spec": 0,
                        "AnimType": 0,
                        "File": "Ball",
                        "Speed": 8,
                        "Move": 0,
                        "MAnX": 3,

                    },

                    1:{

                        "Spec": 0,
                        "AnimType": 1,
                        "File": "Ball_Boom",
                        "Speed": 0,
                        "Move": null,
                        "MAnX": 3,

                    },

                },

            },

            MovesList = {

                0:{ // Hero - Start

                    "length": 1,
                    "loop": false,
                    "position": false,

                    0:{

                        "Xm": 0,
                        "Ym": 0,
                        "Move": 0,
    
                    },

                },

                1:{ // Hero - Test Move

                    "length": 4,
                    "loop": true,
                    "position": false,

                    0:{

                        "Move": 1,
                        "Xm": 100,
                        "Ym": 0
    
                    },
    
                    1:{
    
                        "Move": 1,
                        "Xm": 0,
                        "Ym": 100
    
                    },
    
                    2:{
    
                        "Move": 1,
                        "Xm": -100,
                        "Ym": 0
    
                    },
    
                    3:{
    
                        "Move": 1,
                        "Xm": 0,
                        "Ym": -100
    
                    }

                },

                2:{ // Enemy - Move

                    "length": 4,
                    "loop": true,
                    "position": false,

                    0:{

                        "Move": 0,
                        "Xm": 100,
                        "Ym": 0
    
                    },
    
                    1:{
    
                        "Move": 0,
                        "Xm": 0,
                        "Ym": 100
    
                    },
    
                    2:{
    
                        "Move": 0,
                        "Xm": -100,
                        "Ym": 0
    
                    },
    
                    3:{
    
                        "Move": 0,
                        "Xm": 0,
                        "Ym": -100
    
                    }

                },

            },
            
            ControlWaves = {

                0:{

                    0:[],
                    1:[],
                    2:[],
                    3:[],
                    4:[],

                }

            },
            
            NPCSpawnList = {

                0:{

                    "Unlock": true,

                    "length": 3,

                    0:{ // Hero
    
                        "Number": 1, // How many to appear 
                        "Range": 0, // On what radius should they appear
                        "PX": 1650, // On which x they should appear
                        "PY": 1600, // On which y they should appear
                        "Time": 0, // At which point in the wave it should appear
                        "Type": 3, // What type of npc to appear
                        "Path": 0, // What path will the npc use
    
                    },

                    1:{ // Energy

                        "Number": 30, // How many to appear 
                        "Range": 1500, // On what radius should they appear
                        "PX": 1650, // On which x they should appear
                        "PY": 2200, // On which y they should appear
                        "Time": 0, // At which point in the wave it should appear
                        "Type": 4, // What type of npc to appear
                        "Path": null, // What path will the npc use
                        "Loop":{ // It must not overtake the next wave in order not to delay it

                            "Time": 0.5, // How much time delay
                            "Number": 5, // How many times 

                        }

                    },

                    2:{ // Enemy
    
                        "Number": 25, // How many to appear 
                        "Range": 500, // On what radius should they appear
                        "PX": 1650, // On which x they should appear
                        "PY": 1900, // On which y they should appear
                        "Time": 1, // At which point in the wave it should appear
                        "Type": 2, // What type of npc to appear
                        "Path": 2, // What path will the npc use
    
                    },

                },

            },

            NPCNormalSpawn = {

                0:{

                    "length": 2,

                    0:{ // Hero
            
                        "PX": 1650, // On which x they should appear
                        "PY": 2900, // On which y they should appear
                        "Type": 3, // What type of npc to appear
                        "Path": 0, // What path will the npc use

                    },

                    1:{

                        "PX": 1800, // On which x they should appear
                        "PY": 2700, // On which y they should appear
                        "Type": 4, // What type of npc to appear
                        "Path": null, // What path will the npc use

                    }, 

                }
                
            };

            // Render 3D
            
        var Camera3D = {

                "Sky": 450,

                "Rays":[], // List of rays to be rendered

                "Speed": 10, // camera speed
                "WorldHeight": 500, // Overall height by distance indicator

                "Quality": 300, // quality of field of view (number of rays) in X // 250

                "Distance": 850, // distance of field of view (accuracy dependent)
                "Accuracy": 0.5, // accuracy of field of view
                "Degree": 60, // radius

                "cZ": 45, // z camera
                "cX": 0, // x camera
                "cY": 0, // y camera
                "cAngle": 0, // angle camera (Only FPS control mode)

                "SHeight": 750, // height of the displayed image
                "SWidth": 1116, // width of the displayed image

                "SPX": 12, // beginning of x image drawing
                "SPY": 88, // beginning of y image drawing
                "SPZ": 340, // beginning of z image drawing
                
                "TopDownControl": false, // Top Down control - true, FPS control mode - false
                "Player_Speed": 5, // Player speed

            },
            
            RenderObjects = {

                "Black":{

                    "Data":{

                        "Width": 5000,
                        "Height": 5000,
                        "PX": 5000,
                        "PY": 5000,

                    },

                    "Render":{

                        "File": "Back_2",
                        "TMW": 27,
                        "TMW_2": 27,
                        "TMH": 630,
                        "TMH_2": 630,
    
                    }

                },

                0:{

                    0:{

                        "File": "Back_2",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 630,
                        "TMH_2": 630,

                    },

                    1:{

                        "File": "Back_1",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 630,
                        "TMH_2": 630,

                    },

                    2:{

                        "File": "Back_2",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 630,
                        "TMH_2": 630,

                    },

                    3:{

                        "File": "Back_1",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 630,
                        "TMH_2": 630,

                    },

                },

                1:{ 

                    0:{

                        "File": "Back_1",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 630,
                        "TMH_2": 630,

                    },

                    1:{

                        "File": "Back_2",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 630,
                        "TMH_2": 630,

                    },

                    2:{

                        "File": "Back_1",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 630,
                        "TMH_2": 630,

                    },

                    3:{

                        "File": "Back_2",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 630,
                        "TMH_2": 630,

                    },

                },

                2:{ 

                    0:{

                        "File": "Back_1_1",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 1260,
                        "TMH_2": 1260,

                    },

                    1:{

                        "File": "Back_2_1",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 1260,
                        "TMH_2": 1260,

                    },

                    2:{

                        "File": "Back_1_1",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 1260,
                        "TMH_2": 1260,

                    },

                    3:{

                        "File": "Back_2_1",
                        "TMW": 710,
                        "TMW_2": 710,
                        "TMH": 1260,
                        "TMH_2": 1260,

                    },

                },

            },
            
            Render3DTD = {

                "Look2D": false,
                "Look3D": true,

                "AlphaNoTexture": true,
                "Texture": true,
                "AutoCam": false,

                "Sky": true,
                "Floor": true,

                "Path":{

                    "Start": [210,540],

                    "length": 12,

                    0: [210,540,2],
                    1: [130,430,1],
                    2: [250,350,3],
                    3: [220,140,2],
                    4: [300,80,1],
                    5: [380,150,3],
                    6: [420,320,2],
                    7: [390,400,1],
                    8: [60,380,3],
                    9: [140,140,2],
                    10: [250,180,1],
                    11: [150,500,1],

                },

                "TestCamera":{

                    "Num": 0,
                    "Counter": -1,
                    
                    "List": [],

                    "XMove": 0,
                    "YMove": 0,

                    "PX": 210,
                    "PY": 540,

                },

                "Objects": { // Test objects

                    "length": 27,

                    0:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 75,
                        "PY": 490,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    1:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 210,
                        "PY": 430,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    2:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 430,
                        "PY": 450,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    3:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 80,
                        "PY": 315,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    4:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 320,
                        "PY": 320,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    5:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 460,
                        "PY": 215,

                        "Render": 2,
                        "RHeight": 220,
                        "RPZ": 0,
                        
                        "Wall": true, // dont render behind object, stop rays
    
                    },

                    6:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 140,
                        "PY": 180,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    7:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 270,
                        "PY": 150,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    8:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 70,
                        "PY": 65,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    9:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 200,
                        "PY": 40,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    10:{

                        "File": "Wall_1",
                        "TMH": 52,
                        "TMW": 52,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 52,
                        "Width": 52,

                        "PX": 390,
                        "PY": 60,

                        "Render": 0,
                        "RHeight": 110,
                        "RPZ": 0,
    
                    },

                    11:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 290,
                        "PY": 520,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    12:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 35,
                        "PY": 415,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    13:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 245,
                        "PY": 415,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    14:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 415,
                        "PY": 440,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    15:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 110,
                        "PY": 310,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    16:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 350,
                        "PY": 310,
                        
                        "Render": 1,
                        "RHeight": 50,
                        "RPZ": -20,
    
                    },

                    17:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 490,
                        "PY": 335,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    18:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 30,
                        "PY": 210,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    19:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 170,
                        "PY": 205,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    20:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 300,
                        "PY": 245,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    21:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 445,
                        "PY": 205,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    22:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 265,
                        "PY": 160,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    23:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 60,
                        "PY": 95,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    24:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 200,
                        "PY": 70,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    25:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 335,
                        "PY": 40,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                    26:{

                        "File": "Wall_2",
                        "TMH": 32,
                        "TMW": 32,
                        "TMX": 0,
                        "TMY": 0,

                        "Height": 32,
                        "Width": 32,

                        "PX": 415,
                        "PY": 100,
                        
                        "Render": 1,
                        "RHeight": 90,
                        "RPZ": 0,
    
                    },

                },

                "Height": 750, // Block window test data
                "Width": 1116,

            };

            // Visual Novel System
            
        var VisualNovelD = {

                "Speed": 50,
                "ADialog": 0, // Current Dialogue
                "Tree": 0, // Current place in the Dialogue Tree
                "ToYou": 0, // Place in ToYou

            },
            
            DialogsData = {

                0:{  // Dialogue number

                    "Tree":{ // Conversation Tree

                        0:{

                            "Background" : 0,

                            "ToYou": { // Dialogues Addressed to the Hero

                                "length": 3,

                                0: {
                                
                                   "Text": "D0", // Text to be displayed
                                   "People":{
               
                                      "length": 2,
    
                                       0: {
                                          
                                            "Per": 0,
                                            "Talk": 1,
                                            "PX": 14,
                                            "PY": 374,

                                       },
                                       1: {
                                          
                                            "Per": 1,
                                            "Talk": 0,
                                            "PX": 927,
                                            "PY": 374,

                                       },
               
                                   },
               
                                
                                }, 

                                1: {
                                
                                   "Text": "D1", // Text to be displayed
                                   "People":{
               
                                      "length": 2,
    
                                       0: {
                                          
                                        "Per": 0,
                                        "Talk": 0,
                                        "PX": 927,
                                        "PY": 374,

                                       },
                                       1: {
                                          
                                        "Per": 1,
                                        "Talk": 1,
                                        "PX": 14,
                                        "PY": 374,

                                       },
               
                                   },
                                
                                }, 

                                2: {
                                
                                   "Text": "D2", // Text to be displayed
                                   "People":{
               
                                      "length": 2,
    
                                       0: {
                                          
                                        "Per": 0,
                                        "Talk": 1,
                                        "PX": 927,
                                        "PY": 374,

                                       },
                                       1: {
                                          
                                        "Per": 1,
                                        "Talk": 0,
                                        "PX": 14,
                                        "PY": 374,

                                       },
               
                                   },
                                
                                },  

                            },

                            "FromYou":{ // Dialogues Coming from the Hero - only after finishing ToYou are fired up

                                "length": 2,

                                0:{

                                    "Text": "D3", // Text of the dialogue

                                    "GoToT": 0, // Which part of the tree next in the dialogue
                                    "GoToD": 0, // General Dialogue Number
                                    "Spec": 0, // Spec

                                    "State": { // Person number and +/- attitude points, can be several at once
                                       
                                        "length": 2, 

                                        0: [0,25],
                                        1: [1,-25],

                                    }, 

                                    "Attitude": { // Dialogue availability for a specific attitude
                                    
                                        "P": 0, // For which person the dialogue should appear

                                        0: false,
                                        1: true,
                                        2: true
    
                                    },

                                },

                                1:{

                                    "Text": "D4", // Text of the dialogue

                                    "GoToT": 1, // Which part of the tree next in the dialogue
                                    "GoToD": 0, // General Dialogue Number
                                    "Spec": null, // Spec

                                    "State": { // Person number and +/- attitude points, can be several at once
                                       
                                        "length": 2, 

                                        0: [0,-25],
                                        1: [1,25],

                                    }, 

                                    "Attitude": { // Dialogue availability for a specific attitude
                                    
                                        "P": 0, // For which person the dialogue should appear

                                        0: true,
                                        1: true,
                                        2: false
    
                                    },

                                }

                            }

                        },

                        1:{

                            "Background" : 0,

                            "ToYou": { // Dialogues Addressed to the Hero

                                "length": 4,

                                0: {
                                
                                   "Text": "D5", // Text to be displayed
                                   "People":{
               
                                      "length": 2,
    
                                       0: {
                                          
                                        "Per": 3,
                                        "Talk": 1,
                                        "PX": 927,
                                        "PY": 374,

                                       },
                                       1: {
                                          
                                        "Per": 1,
                                        "Talk": 0,
                                        "PX": 14,
                                        "PY": 374,

                                       },
               
                                   },
                                
                                }, 

                                1: {
                                
                                   "Text": "D6", // Text to be displayed
                                   "People":{
               
                                      "length": 2,
    
                                       0: {
                                          
                                        "Per": 0,
                                        "Talk": 0,
                                        "PX": 927,
                                        "PY": 374,

                                       },
                                       1: {
                                          
                                        "Per": 2,
                                        "Talk": 1,
                                        "PX": 14,
                                        "PY": 374,

                                       },
               
                                   },
                                
                                },  

                                2: {
                                
                                   "Text": "D7", // Text to be displayed
                                   "People":{
               
                                      "length": 2,
    
                                       0: {
                                          
                                        "Per": 3,
                                        "Talk": 1,
                                        "PX": 927,
                                        "PY": 374,

                                       },
                                       1: {
                                          
                                        "Per": 1,
                                        "Talk": 0,
                                        "PX": 14,
                                        "PY": 374,

                                       },
               
                                   },
                                
                                },  

                                3: {
                                
                                   "Text": "D8", // Text to be displayed
                                   "People":{
               
                                      "length": 2,
    
                                       0: {
                                          
                                        "Per": 0,
                                        "Talk": 0,
                                        "PX": 927,
                                        "PY": 374,

                                       },
                                       1: {
                                          
                                        "Per": 2,
                                        "Talk": 1,
                                        "PX": 14,
                                        "PY": 374,

                                       },
               
                                   },
                                
                                }, 

                            },

                            "FromYou":{ // Dialogues Coming from the Hero - only after finishing ToYou are fired up

                                "length": 3,

                                0:{

                                    "Text": "D9", // Text of the dialogue

                                    "GoToT": 0, // Which part of the tree next in the dialogue
                                    "GoToD": 0, // General Dialogue Number
                                    "Spec": null, // Spec

                                    "State": { // Person number and +/- attitude points, can be several at once
                                       
                                        "length": 2, 

                                        0: [0,50],
                                        1: [1,-50],

                                    }, 

                                    "Attitude": { // Dialogue availability for a specific attitude
                                    
                                        "P": 0, // For which person the dialogue should appear

                                        0: true,
                                        1: true,
                                        2: false
    
                                    },

                                },

                                1:{

                                    "Text": "D10", // Text of the dialogue

                                    "GoToT": 1, // Which part of the tree next in the dialogue
                                    "GoToD": 0, // General Dialogue Number
                                    "Spec": null, // Spec

                                    "State": { // Person number and +/- attitude points, can be several at once
                                       
                                        "length": 3, 

                                        0: [0,-50],
                                        1: [1,50],
                                        2: [2,150],

                                    }, 

                                    "Attitude": { // Dialogue availability for a specific attitude
                                    
                                        "P": 0, // For which person the dialogue should appear

                                        0: false,
                                        1: true,
                                        2: true
    
                                    },

                                },

                                2:{

                                    "Text": "D11", // Text of the dialogue

                                    "GoToT": 0, // Which part of the tree next in the dialogue
                                    "GoToD": 0, // General Dialogue Number
                                    "Spec": null, // Spec

                                    "State": { // Person number and +/- attitude points, can be several at once
                                       
                                        "length": 1, 

                                        0: [0,0],

                                    }, 

                                    "Attitude": { // Dialogue availability for a specific attitude
                                    
                                        "P": 0, // For which person the dialogue should appear

                                        0: true,
                                        1: true,
                                        2: true
    
                                    },

                                }

                            }

                        }
                    }

                },

            },
            
            People = {
                
                "Anim":{

                     // Animation types for characters

                },

                0:{
                  
                    "Name": "Nick",
                    "Attitude": 1, // 0 (negative attitude) , 1 (neuntral attitude), 2 (peaceful attitude)
                    "State": 150, // the set points change according to the number of set points 0 - 150 - 300
                    
                    "StateLimits": {
                        
                        0: 50, // limit of neuntral attitude -- between 0 - 1 is neutral , below negative
                        1: 250, // limit of peace attitude

                    },

                    "Data" : {
                        
                        "File_0": "Unit_1",
                        "File_1": "Unit_1_100",
                        "TMH": 199,
                        "TMW": 199,
                        "TMX":199,
                        "TMY":0,
                        "Height": 199,
                        "Width": 199,
                        "AnX": 0,
                    
                    },

                },

                1:{
                  
                    "Name": "Judy",
                    "Attitude": 1,
                    "State": 150,
                    
                    "StateLimits": {
                        
                        0: 100,
                        1: 200,

                    },
                    
                    "Data" : {
                        
                        "File_0": "Unit_2",
                        "File_1": "Unit_2_100",
                        "TMH": 199,
                        "TMW": 199,
                        "TMX":199,
                        "TMY":0,
                        "Height": 199,
                        "Width": 199,
                        "AnX": 0,
                    
                    },

                },

                2:{
                  
                    "Name": "Catherine",
                    "Attitude": 2, // 0 (negative attitude) , 1 (neuntral attitude), 2 (peaceful attitude)
                    "State": 150, // the set points change according to the number of set points 0 - 150 - 300
                    
                    "StateLimits": {
                        
                        0: 25, // limit of neuntral attitude -- between 0 - 1 is neutral , below negative
                        1: 100, // limit of peace attitude

                    },
                    
                    "Data" : {
                        
                        "File_0": "Unit_3",
                        "File_1": "Unit_3_100",
                        "TMH": 199,
                        "TMW": 199,
                        "TMX":199,
                        "TMY":0,
                        "Height": 199,
                        "Width": 199,
                        "AnX": 0,
                    
                    },

                },
               
                3:{
                  
                    "Name": "Holo",
                    "Attitude": 1, // 0 (negative attitude) , 1 (neuntral attitude), 2 (peaceful attitude)
                    "State": 100, // the set points change according to the number of set points 0 - 150 - 300
                    
                    "StateLimits": {
                        
                        0: 25, // limit of neuntral attitude -- between 0 - 1 is neutral , below negative
                        1: 200, // limit of peace attitude

                    },
                    
                    "Data" : {
                        
                        "File_0": "Unit_6",
                        "File_1": "Unit_6_100",
                        "TMH": 199,
                        "TMW": 199,
                        "TMX":199,
                        "TMY":0,
                        "Height": 199,
                        "Width": 199,
                        "AnX": 0,
                    
                    },

                },

            },
            
            VNBackgrounds = {

                "PX": 0,
                "PY": 0,

                "Anim":{

                    // Typy animacji dla Całego tła

                },

                0:{

                    "length": 1,
    
                    0:{
                      
                        "AnX": 0,

                        "File": "Background_15",
                        "TMH": 750,
                        "TMW": 1116,
                        "TMX":0,
                        "TMY":0,
                        "Height": 750,
                        "Width": 1116,
                        "PX": 12,
                        "PY": 88,
    
                    }
                  
                }

            };

