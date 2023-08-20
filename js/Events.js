   
    window.addEventListener("load", function(){ 
        
        LoadEngine();

        if(navigator.userAgent.match(/mobile/i) || navigator.userAgent.match(/iPad|Android|Touch/i)){
           
            MainData.Mobile = true;

            window.addEventListener('touchmove', function(e){
            
                e.preventDefault();

                if(e.targetTouches.length == 1){
        
                    MainData.TouchX = e.targetTouches[0].pageX* pixelRatio;
                    MainData.TouchY = e.targetTouches[0].pageY* pixelRatio;
                    
                    var ActWin = WindowDrawList[WindowDrawList.length-1];
                        
                    if(WindowList[ActWin].Window.List && !MainData.OnInter){
                        
                        var ActWin_ = WindowList[WindowDrawList[WindowDrawList.length-1]];
                    
                        var ObjectList = ActWin_.Window;
                    
                        if( MainData.TouchX > MainData.DiffX+(ObjectList.PX+ObjectList.List.Ram.PX)* MainData.PxW && 
                            MainData.TouchY > MainData.DiffY+(ObjectList.PY+ObjectList.List.Ram.PY)* MainData.PxH && 
                            MainData.TouchX < MainData.DiffX+(ObjectList.PX+ObjectList.List.Ram.PX+ObjectList.List.Ram.Width)* MainData.PxW && 
                            MainData.TouchY < MainData.DiffY+(ObjectList.PY+ObjectList.List.Ram.PY+ObjectList.List.Ram.Height)* MainData.PxH){
                
                            if(ObjectList.List.PY > MainData.TouchY-(ObjectList.ListSpecial.PointZeroList-ObjectList.List.PY)){

                                if( Math.abs(ObjectList.ListSpecial.DifferenceY) < ObjectList.ListSpecial.StopList || 
                                    Math.abs(MainData.TouchY-ObjectList.List.PY-(ObjectList.ListSpecial.PointZeroList-ObjectList.List.PY)) < ObjectList.ListSpecial.StopList)
                                    ObjectList.ListSpecial.DifferenceY = MainData.TouchY-ObjectList.List.PY-(ObjectList.ListSpecial.PointZeroList-ObjectList.List.PY);
                                else 
                                    ObjectList.ListSpecial.DifferenceY = -ObjectList.ListSpecial.StopList;
                                
                            } else ObjectList.ListSpecial.DifferenceY = 0;
    
                        }   
                            
                    }
    
                    if(MainData.WindowMove){
                        
                        InterfejsCheck(MainData.TouchX,MainData.TouchY);
    
                        if( MainData.TouchX > MainData.DiffX && MainData.TouchY > MainData.DiffY && MainData.TouchX < MainData.DiffX+MainData.Width && MainData.TouchY < MainData.DiffY+MainData.Height){
                        
                            WindowList[ActWin].Window.PX = (MainData.TouchX-MainData.DiffX)/MainData.PxW-WindowList[ActWin].Window.MPX;
                            WindowList[ActWin].Window.PY = (MainData.TouchY-MainData.DiffY)/MainData.PxH-WindowList[ActWin].Window.MPY;
                            
                        } else MainData.WindowMove = false;
                        
                    } else
        
                    if(!(MainData.DiffY+MainData.PointZeroY-(10* MainData.PxH) < MainData.TouchY && MainData.DiffY+MainData.PointZeroY+(10* MainData.PxH) > MainData.TouchY)
                    || !(MainData.DiffX+MainData.PointZeroX-(10* MainData.PxW) < MainData.TouchX && MainData.DiffX+MainData.PointZeroX+(10* MainData.PxW) > MainData.TouchX))
                    ButtonClean(); 

                    SpecialMoveEvents(e);

                }	
        
            }, {passive:false})
            
            window.addEventListener('touchstart', function(e){
        
                if(e.targetTouches.length == 1) {
                   
                    MainData.TouchX = e.targetTouches[0].pageX* pixelRatio;
                    MainData.TouchY = e.targetTouches[0].pageY* pixelRatio;
                    
                    MainData.PointZeroY = MainData.TouchY;
                    MainData.PointZeroX = MainData.TouchX;
                
                    if(MainData.Interfejs) ButtonHBInterfejs(MainData.TouchX,MainData.TouchY);

                    if(WindowDrawList.length) ButtonHBWindow(MainData.TouchX,MainData.TouchY); else MainData.OnWindow = false;
                    
                    if(MainData.OnWindow){
                    
                        NewDrawList(MainData.OnWindowNum);
                        
                        var ActWin = WindowList[WindowDrawList[WindowDrawList.length-1]];
                        
                        if(ActWin.Window.List)
                        ActWin.Window.ListSpecial.PointZeroList = MainData.TouchY-ActWin.Window.ListSpecial.DifferenceY;

                        if(MainData.CurrentButton != null) 
                        if(MainData.CurrentButton.Object.Type == "WindowMove"){

                            MainData.WindowMove = true;

                            ActWin.Window.MPX = Math.abs(ActWin.Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW);
                            ActWin.Window.MPY = Math.abs(ActWin.Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH);

                        }

                    }

                    SpecialDownEvents(e);

                }
        
            }, false)
        
            window.addEventListener('touchend', function(e){
                
                if(e.targetTouches.length == 0){
                   
                    SpecialUpEvents(e);

                    MainData.WindowMove = false;
                    OpenWorldData[OPCamera.AMap].Move = false;

                    if(MainData.CurrentButton != null) {

                        ButtonScriptsLinks(MainData.CurrentButton);
                        ButtonScripts(MainData.CurrentButton);	

                    }
        
                    ButtonClean();
                   
                } 
        
            },false)
        
        } else {
           
            MainData.Mobile = false;
            
            window.addEventListener('mousemove', function(e){
               
                MainData.TouchX = e.clientX * pixelRatio;
                MainData.TouchY = e.clientY * pixelRatio;
               
                MouseData.PX = MainData.TouchX;
                MouseData.PY = MainData.TouchY;

                var ActWin = WindowDrawList[WindowDrawList.length-1];
                
                if(MainData.Interfejs) ButtonHBInterfejs(MainData.TouchX,MainData.TouchY);

                if(!MainData.WindowMove){

                    if(WindowDrawList.length) ButtonHBWindow(MainData.TouchX,MainData.TouchY); else MainData.OnWindow = false;
                    
                } else {

                    if( MainData.TouchX > MainData.DiffX && MainData.TouchY > MainData.DiffY && MainData.TouchX < MainData.DiffX+MainData.Width && MainData.TouchY < MainData.DiffY+MainData.Height){
                        
                            WindowList[ActWin].Window.PX = (MainData.TouchX-MainData.DiffX)/MainData.PxW-WindowList[ActWin].Window.MPX;
                            WindowList[ActWin].Window.PY = (MainData.TouchY-MainData.DiffY)/MainData.PxH-WindowList[ActWin].Window.MPY;
                            
                    } else MainData.WindowMove = false;
                        
                }

                if(!MainData.OnInter) SpecialMoveEvents(e);
               
                if(MainData.CurrentButton)
                if(MainData.CurrentButton.Object.InfoW != null){

                    MainData.InfoWindow = MainData.CurrentButton.Object.InfoW;

                    InfoWindowSpec();

                } else MainData.InfoWindow = null; else MainData.InfoWindow = null;
 
                if(MainData.SystemPaused)
                NoUpdateScreen();

            }, false)
    
            window.addEventListener('mousedown', function(e){
               
                MouseData.AnX = 0;
                MouseData.AnF = 1;

               if(e.button == 0){

                MainData.HelpValue.Form = null;
               
                MainData.TouchX = e.clientX * pixelRatio;
                MainData.TouchY = e.clientY * pixelRatio;
            
                if(!MainData.WindowMove){

                    OpenWorldData[OPCamera.AMap].Move = true;

                    if(MainData.CurrentButton != null) if(MainData.CurrentButton.Object.BAnim) 
                    MainData.CurrentButton.Object.AnX = 2;
                
                    MainData.ButtonWork = true;

                    MainData.PointZeroY = MainData.TouchY;
                    MainData.PointZeroX = MainData.TouchX;
                
                    if(MainData.OnWindow) NewDrawList(MainData.OnWindowNum);

                    if(MainData.CurrentButton != null) if(MainData.CurrentButton.Object.Type == "WindowMove"){

                        var ActWin = WindowList[WindowDrawList[WindowDrawList.length-1]];
                    
                        MainData.WindowMove = true;

                        ActWin.Window.MPX = Math.abs(ActWin.Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW);
                        ActWin.Window.MPY = Math.abs(ActWin.Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH);

                    } 

                    window.onmousemove = function(e) {
                        
                        if(!(MainData.PointZeroY-(30* MainData.PxH) < MainData.TouchY && MainData.PointZeroY+(30* MainData.PxH) > MainData.TouchY) || !(MainData.PointZeroX-(30* MainData.PxW) < MainData.TouchX && MainData.PointZeroX+(30* MainData.PxW) > MainData.TouchX))
                        ButtonClean();

                    }

                } 
    
                SpecialDownEvents(e);

               } else if(e.button == 2) 
               SpecialRightMDownEvents(e);

            }, false)

            window.addEventListener('mouseup', function(e){
               
                MouseData.AnX = 0;
                MouseData.AnF = 0;

                if(e.button == 0){
                
                    if(!MainData.OnInter) SpecialUpEvents(e);
                    
                    MainData.WindowMove = false;
                    OpenWorldData[OPCamera.AMap].Move = false;

                    if(MainData.CurrentButton != null && MainData.ButtonWork) {
    
                        ButtonScriptsLinks(MainData.CurrentButton);
                        ButtonScripts(MainData.CurrentButton);
                       
                    }
    
                    MainData.TouchX = e.clientX * pixelRatio;
                    MainData.TouchY = e.clientY * pixelRatio;
                    
                    ButtonClean();
    
                } else if(e.button == 2) 
                SpecialRightUpEvents(e)
                
            }, false)

            window.addEventListener("wheel", function (e) {
                
                var y = e.deltaY;
                
                if(MainData.OnWindow && !MainData.WindowMove){
                
                    if(MainData.OnWindowNum != WindowDrawList[WindowDrawList.length-1]) 
                    NewDrawList(MainData.OnWindowNum);

                    var ActWin = WindowList[WindowDrawList[WindowDrawList.length-1]];
                        
                    if(ActWin.Window.List){

                        var ObjectList = ActWin.Window;
                        
                        if(MainData.TouchX > MainData.DiffX+(ObjectList.PX+ObjectList.List.Ram.PX)* MainData.PxW && 
                            MainData.TouchY > MainData.DiffY+(ObjectList.PY+ObjectList.List.Ram.PY)* MainData.PxH && 
                            MainData.TouchX < MainData.DiffX+(ObjectList.PX+ObjectList.List.Ram.PX+ObjectList.List.Ram.Width)* MainData.PxW && 
                            MainData.TouchY < MainData.DiffY+(ObjectList.PY+ObjectList.List.Ram.PY+ObjectList.List.Ram.Height)* MainData.PxH){
                        
                            if(ObjectList.ListSpecial.DifferenceY-y < 0 && ActWin.CopyList.length > ObjectList.List.StopListX){

                                if(Math.abs(ObjectList.ListSpecial.DifferenceY-y) < ObjectList.ListSpecial.StopList)
                                    ObjectList.ListSpecial.DifferenceY -= y;
                                else 
                                    ObjectList.ListSpecial.DifferenceY = -ObjectList.ListSpecial.StopList;
                            
                            } else ObjectList.ListSpecial.DifferenceY = 0;
                            
                            ButtonClean();
                            
                        }

                    }
                        
                }

            });

        }
      
        window.oncontextmenu = function (e) { if(MainData.BlockRClick) return false; }
            
        window.addEventListener('blur', onPause);
        window.addEventListener('focus', onResume);
        
    });

    window.addEventListener("resize", function (event) {

        clearTimeout(Resize);
		Resize = setTimeout(PixelRatio, 500);

    });

	function UpdateScreen(){  
       
        StartTime();

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.save();	
           
            ctx.beginPath();
           
                ctx.translate(MainData.DiffX,MainData.DiffY); 
            
                ctx.rect(0, 0,  MainData.Width, MainData.Height);
                ctx.clip();

                for (var x = MainData.Desktop; x < WindowDrawList.length; x++) 
                WindowList[WindowDrawList[x]].Function();

                if(MainData.Interfejs) Interfejs();
                
                if (AlertList[MainData.AlertNum]) AlertList[MainData.AlertNum].Function();
            
            ctx.closePath();
            
        ctx.restore();
        
        if(!MainData.Mobile && MainData.DrawMouse) DrawMouse();
        
        TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen);
       
        MainData.Mouse_Vectors = [0,0];

	}

	function NoUpdateScreen(){  
       
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.save();	
           
            ctx.beginPath();
           
                ctx.translate(MainData.DiffX,MainData.DiffY); 
 
                ctx.rect(0, 0,  MainData.Width, MainData.Height);
                ctx.clip();

                for (var x = MainData.Desktop; x < WindowDrawList.length; x++) 
                WindowList[WindowDrawList[x]].Function();

                if(MainData.Interfejs) Interfejs();
                
                StopSign();

            ctx.closePath();
            
        ctx.restore();
    
        if(!MainData.Mobile) DrawMouse();
           
	}

    function StopSign(){

		ctx.save();	
           
			ctx.beginPath();
            ctx.globalAlpha = 0.45;
            ctx.fillStyle = "black";
            ctx.fillRect(0,0,1920* MainData.PxW, 1080* MainData.PxH);
            ctx.stroke();

            ctx.translate(0 * MainData.PxW, (1080/2-100) * MainData.PxH);

            ctx.beginPath();
            ctx.globalAlpha = 0.95;
            ctx.fillStyle = "white";
            ctx.fillRect(0,-5* MainData.PxH,1920* MainData.PxW, 110* MainData.PxH);
            ctx.stroke();

            ctx.beginPath();
            ctx.globalAlpha = 0.95;
            ctx.fillStyle = "black";
            ctx.fillRect(0,0,1920* MainData.PxW, 100* MainData.PxH);
            ctx.stroke();

            FontDraw(Text[MainData.Language]["SpecPause"],{

                "Data": "Pause",
                "PX": 1920/2,
                "PY": 60,
                "Align": "center",

            },TextData["Pause"]);
            
        ctx.restore();
      
    }

	function ButtonClean(){
        
        if(MainData.Mobile){

            if(MainData.CurrentButton != null)
            if(MainData.CurrentButton.Object.BAnim) 
            MainData.CurrentButton.Object.AnX = 0;
            
            OpenWorldData[OPCamera.AMap].Move = false;
            MainData.CurrentButton = null;
         
        } else {

            if(MainData.CurrentButton != null) if(MainData.CurrentButton.Object.BAnim) 
            MainData.CurrentButton.Object.AnX = 1;
    
            OpenWorldData[OPCamera.AMap].Move = false;
            MainData.ButtonWork = false; 
            MainData.CurrentButton = null;
         
            if(MainData.Interfejs) ButtonHBInterfejs(MainData.TouchX,MainData.TouchY);
    
            if(WindowDrawList.length) 
            ButtonHBWindow(MainData.TouchX,MainData.TouchY); else MainData.OnWindow = false;
    
        }
      
    }

    function ButtonHBWindow(Button_x, Button_y) {
        
        if(MainData.Mobile){

            var Check = false, Check2 = false, Check3 = true;
       
            for (var y = MainData.Fullscreen; y < WindowDrawList.length; y++) {
    
                var WinList = WindowList[WindowDrawList[y]];
    
                for(var x = 0; x < WinList.Window.ObjectNumber; x++){
    
                    var WObject = WinList.WindowObjects[x];
        
                    if( Button_x > MainData.DiffX+(WinList.Window.PX+WObject.PX)*MainData.PxW &&  !MainData.OnInter && 
                        Button_y > MainData.DiffY+(WinList.Window.PY+WObject.PY)*MainData.PxH &&  
                        Button_x < MainData.DiffX+(WinList.Window.PX+WObject.PX)*MainData.PxW+WObject.Width*MainData.PxW && 
                        Button_y < MainData.DiffY+(WinList.Window.PY+WObject.PY)*MainData.PxH+WObject.Height*MainData.PxH){
                       
                        if(!MainData.WindowMove){
    
                            for (var u = 0; u < WindowDrawList.length; u++) {
                            
                                var WObject_2 = WindowList[WindowDrawList[u]].WindowObjects[0];
            
                                if(y != u &&
                                Button_x > MainData.DiffX+(WindowList[WindowDrawList[u]].Window.PX+WObject_2.PX)*MainData.PxW && 
                                Button_y > MainData.DiffY+(WindowList[WindowDrawList[u]].Window.PY+WObject_2.PY)*MainData.PxH && 
                                Button_x < MainData.DiffX+(WindowList[WindowDrawList[u]].Window.PX+WObject_2.PX)*MainData.PxW+WObject_2.Width*MainData.PxW && 
                                Button_y < MainData.DiffY+(WindowList[WindowDrawList[u]].Window.PY+WObject_2.PY)*MainData.PxH+WObject_2.Height*MainData.PxH){
                                    
                                    Check3 = false;
        
                                    if(y > u) Check3 = true;
        
                                }
        
                            }
    
                        } else Check3 = false;
    
                        Check = true;
                        
                        if(Check3) MainData.OnWindowNum = WindowDrawList[y];
    
                        if(WObject.Type && Check3){
                        
                            Check2 = true;
    
                            if(WObject.BAnim) WObject.AnX = 1; 
                            
                            MainData.CurrentButton = {
    
                                "Name": "Window",
                                "Object": WObject,
                                "Num": x
            
                            };
                            
                        }
    
                    } else if(WObject.BAnim) WObject.AnX = 0; 
                   
                }
    
                if(WinList.Window.List && !MainData.WindowMove) 
                ButtonHBWinList(Button_x,Button_y,WinList,WindowDrawList[y]);
        
                if(MainData.CurrentButton != null)
                if(!Check2 && MainData.CurrentButton.Name == "Window")
                MainData.CurrentButton = null;
        
            } 
            
            if(Check) MainData.OnWindow = true; 
            else { MainData.OnWindow = false;}
           
        } else {

            var Check = false, Check2 = false, Check3 = true;
    
            for (var y = 0; y < WindowDrawList.length; y++) {
    
                var WinList = WindowList[WindowDrawList[y]];
    
                for(var x = 0; x < WinList.Window.ObjectNumber; x++){
    
                    var WObject = WinList.WindowObjects[x];
                    
                    if(y >= MainData.Fullscreen) {
    
                        if( Button_x > MainData.DiffX+(WinList.Window.PX+WObject.PX)*MainData.PxW &&  !MainData.OnInter &&
                            Button_y > MainData.DiffY+(WinList.Window.PY+WObject.PY)*MainData.PxH &&  
                            Button_x < MainData.DiffX+(WinList.Window.PX+WObject.PX)*MainData.PxW+WObject.Width*MainData.PxW && 
                            Button_y < MainData.DiffY+(WinList.Window.PY+WObject.PY)*MainData.PxH+WObject.Height*MainData.PxH){
                        
                            if(!MainData.WindowMove){
    
                                for (var u = 0; u < WindowDrawList.length; u++) {
                                
                                    var WObject_2 = WindowList[WindowDrawList[u]].WindowObjects[0];
                
                                    if(y != u &&
                                    Button_x > MainData.DiffX+(WindowList[WindowDrawList[u]].Window.PX+WObject_2.PX)*MainData.PxW && 
                                    Button_y > MainData.DiffY+(WindowList[WindowDrawList[u]].Window.PY+WObject_2.PY)*MainData.PxH && 
                                    Button_x < MainData.DiffX+(WindowList[WindowDrawList[u]].Window.PX+WObject_2.PX)*MainData.PxW+WObject_2.Width*MainData.PxW && 
                                    Button_y < MainData.DiffY+(WindowList[WindowDrawList[u]].Window.PY+WObject_2.PY)*MainData.PxH+WObject_2.Height*MainData.PxH){
                                        
                                        Check3 = false;
            
                                        if(y > u) Check3 = true;
            
                                    }
            
                                }
    
                            } else Check3 = false;
    
                            Check = true;
                            
                            if(Check3) MainData.OnWindowNum = WindowDrawList[y];
    
                            if(WObject.Type && Check3){
                            
                                Check2 = true;
    
                                if(WObject.BAnim) if(WObject.AnX == 0) { 
                                
                                    if(WObject.HoverCSound != null)
                                    PlaySound("Copy",WObject.HoverCSound);
    
                                }

                                if(WObject.BAnim) if(WObject.AnX != 2) WObject.AnX = 1; 
                                
                                MainData.CurrentButton = {
    
                                    "Name": "Window",
                                    "Object": WObject,
                                    "Num": x
                
                                };
                                
                            } else if(WObject.BAnim) WObject.AnX = 0; 
    
                        } else if(WObject.BAnim) WObject.AnX = 0;
                
                    } else if(WObject.BAnim) WObject.AnX = 0; 
                    
                }
    
                if(WinList.Window.List && !MainData.WindowMove) 
                ButtonHBWinList(Button_x,Button_y,WinList,WindowDrawList[y]);
        
                if(MainData.CurrentButton != null)
                if(!Check2 && MainData.CurrentButton.Name == "Window")
                MainData.CurrentButton = null;
        
            } 
            
            if(Check) MainData.OnWindow = true; 
            else { MainData.OnWindow = false;}
           
        }
      
	}

	function ButtonHBInterfejs(Button_x,Button_y){
        
        if(MainData.Mobile){

            var Check = false;

            MainData.OnInter = false;
    
            for(var y = 0; y < InterfejsData[MainData.InterNum].Objects.length; y++) {
    
                var MObject = InterfejsData[MainData.InterNum].Objects[y];
    
                if (Button_x > MainData.DiffX+MObject.PX * MainData.PxW && 
                    Button_y > MainData.DiffY+MObject.PY * MainData.PxH && 
                    Button_x < MainData.DiffX+MObject.PX * MainData.PxW + MObject.Width * MainData.PxW && 
                    Button_y < MainData.DiffY+MObject.PY * MainData.PxH + MObject.Height * MainData.PxH) {
                    
                    MainData.OnInter = true;
                    
                    if(!MainData.WindowMove && MObject.Type){
    
                        Check = true;
    
                        MainData.CurrentButton = {
    
                            "Name": "Inter",
                            "Object": MObject,
                            "Num": y,
        
                        };
        
                        if (MObject.BAnim) if(MObject.AnX != 2) MObject.AnX = 1;
                    
                    }
    
                } else  if(MObject.BAnim) MObject.AnX = 0;
    
            }
    
            if(MainData.CurrentButton != null)
            if(!Check && MainData.CurrentButton.Name == "Inter")
            MainData.CurrentButton = null;
    
        } else {

            var Check = false;

            MainData.OnInter = false;
    
            for(var y = 0; y < InterfejsData[MainData.InterNum].Objects.length; y++) {
    
                var MObject = InterfejsData[MainData.InterNum].Objects[y];
    
                if (Button_x > MainData.DiffX+MObject.PX * MainData.PxW && 
                    Button_y > MainData.DiffY+MObject.PY * MainData.PxH && 
                    Button_x < MainData.DiffX+MObject.PX * MainData.PxW + MObject.Width * MainData.PxW && 
                    Button_y < MainData.DiffY+MObject.PY * MainData.PxH + MObject.Height * MainData.PxH) {
                    
                    MainData.WindowMove = false;
                    MainData.OnInter = true;
                    
                    if(MObject.Type){
                        
                        Check = true;
    
                        MainData.CurrentButton = {
    
                            "Name": "Inter",
                            "Object": MObject,
                            "Num": y,
        
                        };
        
                        if(MObject.BAnim) if(MObject.AnX == 0) { 
                                
                            if(MObject.HoverCSound != null)
                            PlaySound("Copy",MObject.HoverCSound);
    
                        }

                        if (MObject.BAnim) if(MObject.AnX != 2) MObject.AnX = 1;
                    
                    }
    
                } else  if(MObject.BAnim) MObject.AnX = 0;
    
            }
    
            if(MainData.CurrentButton != null)
            if(!Check && MainData.CurrentButton.Name == "Inter")
            MainData.CurrentButton = null;
    
        }

	}

    function ButtonHBWinList(Button_x,Button_y,WinData,Num){
        
        // The pxy list requires the window to use the 0 object that is at the (0,0) point of the window

        if(MainData.Mobile){

            var Check = false;

            if(WinData.Window.List.InterType != "None" && !MainData.OnInter){

                var Vertical = WinData.Window.List.PY,
                    Horizon = [WinData.Window.List.PX,WinData.Window.List.PX],
                    CounterRender = 0;	
                
                for(var x = 0; x < WinData.CopyList.length; x++) {
        
                    if(WinData.CopyList[x].Buttons)
                    if(!MainData.OnInter && MainData.OnWindowNum == Num &&
                    Button_x > MainData.DiffX+(WinData.Window.List.Ram.PX+WinData.Window.PX)*MainData.PxW && 
                    Button_y > MainData.DiffY+(WinData.Window.List.Ram.PY+WinData.Window.PY)*MainData.PxH && 
                    Button_x < MainData.DiffX+(WinData.Window.List.Ram.PX+WinData.Window.PX)*MainData.PxW+WinData.Window.List.Ram.Width*MainData.PxW && 
                    Button_y < MainData.DiffY+(WinData.Window.List.Ram.PY+WinData.Window.PY)*MainData.PxH+WinData.Window.List.Ram.Height*MainData.PxH){
                    
                        for (var y = 0; y < WinData.CopyList[x].Buttons.length; y++) {
                        
                            var ValX = Horizon[1]+WinData.CopyList[x].Buttons[y].PX,
                                ValY = Vertical+WinData.Window.ListSpecial.DifferenceY+WinData.CopyList[x].Buttons[y].PY;

                            if( Button_x > MainData.DiffX+(WinData.Window.PX+ValX)*MainData.PxW && !MainData.OnInter && 
                                Button_y > MainData.DiffY+(WinData.Window.PY+ValY)*MainData.PxH && 
                                Button_x < MainData.DiffX+(WinData.Window.PX+WinData.CopyList[x].Buttons[y].Width+ValX)*MainData.PxW && 
                                Button_y < MainData.DiffY+(WinData.Window.PY+WinData.CopyList[x].Buttons[y].Height+ValY)*MainData.PxH){
                            
                                if(WinData.Window.List.TypeList == "Level" && !SpecListData[WinData.Window.List.SpecList][WinData.CopyList[x].Buttons[y].SNum].Unlock) break;
                                if(WinData.Window.List.TypeList == "Temple" && !SpecListData[WinData.Window.List.SpecList][AddData.Temple][x].Unlock) break;

                                if(WinData.CopyList[x].Buttons[y].AnX != 2) WinData.CopyList[x].Buttons[y].AnX = 1;

                                Check = true;

                                MainData.CurrentButton = {

                                    "Name": "List",
                                    "ListData": WinData.Window.List,
                                    "Object": WinData.CopyList[x].Buttons[y],
                                    "Num": x,
                                    "BNum": y,

                                };
                                
                            } else WinData.CopyList[x].Buttons[y].AnX = 0;

                        }
                        
                        if(MainData.CurrentButton != null)
                        if(!Check && MainData.CurrentButton.Name == "List") 
                        MainData.CurrentButton = null;

                    } else for (var y = 0; y < WinData.CopyList[x].Buttons.length; y++) WinData.CopyList[x].Buttons[y].AnX = 0;
                
                    if((WinData.Window.List.StopListX-1) == CounterRender){
                        
                        Horizon[1] = Horizon[0];
                        Vertical += WinData.CopyList[x].PH;
                        CounterRender = 0;
                        
                    } else {
                        
                        Horizon[1] += WinData.CopyList[x].PW;
                        CounterRender ++;
                        
                    }

                }

            }
        
        } else {

            var Check = false;

            if(WinData.Window.List.InterType != "None"){
    
                var Vertical = WinData.Window.List.PY,
                    Horizon = [WinData.Window.List.PX,WinData.Window.List.PX],
                    CounterRender = 0;	
                
                for(var x = 0; x < WinData.CopyList.length; x++) {
                    
                    if(WinData.CopyList[x].Buttons)
                    if(!MainData.OnInter && MainData.OnWindowNum == Num &&
                    Button_x > MainData.DiffX+(WinData.Window.List.Ram.PX+WinData.Window.PX)*MainData.PxW && 
                    Button_y > MainData.DiffY+(WinData.Window.List.Ram.PY+WinData.Window.PY)*MainData.PxH && 
                    Button_x < MainData.DiffX+(WinData.Window.List.Ram.PX+WinData.Window.PX)*MainData.PxW+WinData.Window.List.Ram.Width*MainData.PxW && 
                    Button_y < MainData.DiffY+(WinData.Window.List.Ram.PY+WinData.Window.PY)*MainData.PxH+WinData.Window.List.Ram.Height*MainData.PxH){
                        
                        for (var y = 0; y < WinData.CopyList[x].Buttons.length; y++) {
                            
                            var ValX = Horizon[1]+WinData.CopyList[x].Buttons[y].PX,
                                ValY = Vertical+WinData.Window.ListSpecial.DifferenceY+WinData.CopyList[x].Buttons[y].PY;
                                
                            if( Button_x > MainData.DiffX+(WinData.Window.PX+ValX)*MainData.PxW && !MainData.OnInter && 
                                Button_y > MainData.DiffY+(WinData.Window.PY+ValY)*MainData.PxH && 
                                Button_x < MainData.DiffX+(WinData.Window.PX+WinData.CopyList[x].Buttons[y].Width+ValX)*MainData.PxW && 
                                Button_y < MainData.DiffY+(WinData.Window.PY+WinData.CopyList[x].Buttons[y].Height+ValY)*MainData.PxH){
                                    
                                if(WinData.Window.List.TypeList == "Level" && !SpecListData[WinData.Window.List.SpecList][WinData.CopyList[x].Buttons[y].SNum].Unlock) break;
                                
                                if(WinData.CopyList[x].Buttons[y].AnX == 0) { 
                                
                                    if(WinData.CopyList[x].Buttons[y].HoverCSound != null)
                                    PlaySound("Copy",WinData.CopyList[x].Buttons[y].HoverCSound);
    
                                }

                                if(WinData.CopyList[x].Buttons[y].AnX != 2) WinData.CopyList[x].Buttons[y].AnX = 1;
    
                                Check = true;
    
                                MainData.CurrentButton = {
    
                                    "Name": "List",
                                    "ListData": WinData.Window.List,
                                    "Object": WinData.CopyList[x].Buttons[y],
                                    "Num": x,
                                    "BNum": y,
    
                                };
                                
                            } else WinData.CopyList[x].Buttons[y].AnX = 0;
    
                        }
                        
                        if(MainData.CurrentButton != null)
                        if(!Check && MainData.CurrentButton.Name == "List") 
                        MainData.CurrentButton = null;
    
                    } else for (var y = 0; y < WinData.CopyList[x].Buttons.length; y++) WinData.CopyList[x].Buttons[y].AnX = 0;
                
                    if((WinData.Window.List.StopListX-1) == CounterRender){
                        
                        Horizon[1] = Horizon[0];
                        Vertical += WinData.CopyList[x].PH;
                        CounterRender = 0;
                        
                    } else {
                        
                        Horizon[1] += WinData.CopyList[x].PW;
                        CounterRender ++;
                        
                    }
    
                }
    
            }
            
        }

    }
    
    function InterfejsCheck(Button_x,Button_y){

        for(var y = 0; y < InterfejsData[MainData.InterNum].length; y++) {

            var MObject = InterfejsData[MainData.InterNum][y];

            if (Button_x > MainData.DiffX+MObject.PX * MainData.PxW && MainData.Interfejs && 
                Button_y > MainData.DiffY+MObject.PY * MainData.PxH && 
                Button_x < MainData.DiffX+MObject.PX * MainData.PxW + MObject.Width * MainData.PxW && 
                Button_y < MainData.DiffY+MObject.PY * MainData.PxH + MObject.Height * MainData.PxH) {
                
                MainData.WindowMove = false;

            }

        }

    }

    function ButtonScriptsLinks(Data){

        if(Data.Object.Type == "CUTFUJIgames") { 

            window.open("https://www.cutfujigames.pl/", "_blank"); 
            return;

        }

    }

    // Mobile Events i Pauza

    function onPause() {
		
        MainData.SystemPaused = true;
 
		for(var y = 0; y < SoundBase.Copy.length; y++){
           
            for(var x = 0; x < SoundBase.Copy[y].List.length; x++)
            SoundBase.Copy[y].List[x].pause();	

            SoundBase.Copy[y].List = [];

        }
       
        if(SoundBase.Soundtracks.Sound)
        SoundBase.Soundtracks.Sound.pause();

		for (var x = 0; x < MainData.VideoLen; x++) 
        if(!Images["Video_"+x].paused) {

            Images["Video_"+x].pause();
            MainData.VideoStop.push(x);

        }
	
		ButtonClean();
		
        MainData.RightMouse = false;
        MainData.ButtonWork = true;
		MainData.TouchX = 0;
		MainData.TouchY = 0;

		MainData.Alert = false;
		AlertList = [];
		MainData.AlertNum = 0;
        
		clearInterval(TimeInter.AchievementF);
        clearInterval(TimeInter.MoveObjects);
        clearInterval(TimeInter.DialogWork);
       
        if(OpenWorldData[OPCamera.AMap].Work){

            clearInterval(OpenWorldData[OPCamera.AMap].MapObjAnim);
            clearInterval(OpenWorldData[OPCamera.AMap].BuildingsAnimations);
            clearInterval(OpenWorldData[OPCamera.AMap].WavesSystem);
    
        }
        
		if(Maps_Data[OPCamera.AMap].Weather)
		if(Maps_Data[OPCamera.AMap].Weather.Rain){

            clearInterval(OpenWorldData[OPCamera.AMap].AddRain);
            clearInterval(OpenWorldData[OPCamera.AMap].AddFall);
            
        }

		TimeInter.MoveObjects = null;

        cancelAnimationFrame(TimeInter.UpdateScreen);
        NoUpdateScreen();
        
        Keyboard.key.left = false;
        Keyboard.key.up = false;
        Keyboard.key.right = false;
        Keyboard.key.down = false;
        
    }

    function onResume() {
	
        MainData.SystemPaused = false;

		ButtonClean();
		
        MainData.ButtonWork = true;
		MainData.Alert = false;
		AlertList = [];
        MainData.AlertNum = 0;
        
        if(SoundBase.Soundtracks.Sound)
        SoundBase.Soundtracks.Sound.play();

        clearInterval(TimeInter.AchievementF);
        clearInterval(TimeInter.MoveObjects);
        clearInterval(TimeInter.DialogWork);

		TimeInter.AchievementF = setInterval(AchievementF,1000);	
		TimeInter.MoveObjects = setInterval(MoveObjects,30);
		TimeInter.DialogWork = setInterval(DialogWork,VisualNovelD.Speed);
        
        if(OpenWorldData[OPCamera.AMap].Work){
         
			clearInterval(OpenWorldData[OPCamera.AMap].MapObjAnim);
			clearInterval(OpenWorldData[OPCamera.AMap].BuildingsAnimations);
            clearInterval(OpenWorldData[OPCamera.AMap].WavesSystem);

            if(!OpenWorldData[OPCamera.AMap].Pause){
             
                OpenWorldData[OPCamera.AMap].MapObjAnim = setInterval(MapObjAnim,Maps_Data[OPCamera.AMap].AnimSpeed);
                OpenWorldData[OPCamera.AMap].BuildingsAnimations = setInterval(BuildingsAnimations,Maps_Data[OPCamera.AMap].BuildingsAnimations);
                OpenWorldData[OPCamera.AMap].WavesSystem = setInterval(WavesSystem,100);

            }
			
            if(Maps_Data[OPCamera.AMap].Weather)
            if(Maps_Data[OPCamera.AMap].Weather.Rain){
    
                clearInterval(OpenWorldData[OPCamera.AMap].AddRain);
                OpenWorldData[OPCamera.AMap].AddRain = setInterval(AddRain,Maps_Data[OPCamera.AMap].Weather.Rain.SpeedRain);
    
                clearInterval(OpenWorldData[OPCamera.AMap].AddFall);
                OpenWorldData[OPCamera.AMap].AddFall = setInterval(AddFall,Maps_Data[OPCamera.AMap].Weather.Rain.SpeedFall);
    
            }
           
        }
      	
        cancelAnimationFrame(TimeInter.UpdateScreen);
        TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen);
      
        for(var y = 0; y < MainData.VideoStop.length; y++)
        Images["Video_"+MainData.VideoStop[y]].play();	
        
        MainData.VideoStop = [];

	}

	function backButton() { return false; }

    
    // If naprawić żeby nie skakał
    // dodać ify przy usuwaniu lini za
    // naprawić if który zamyka promień błędnie
    // dodać podnoszenie i zaniżanie kamery dla klawiatury
