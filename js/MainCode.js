	
	var Keys = function () {

		this.key = {
			left: false,
			right: false,
			up: false,
			down: false,
		};

		window.onkeydown = this.keydown.bind(this);
		window.onkeyup = this.keyup.bind(this);

	};
	
	Keys.prototype.keydown = function (e) {

		e.preventDefault();

		var _this = this;

		switch (e.keyCode) {
		case 37:
			_this.key.left = true;
			break;
		case 65:
			_this.key.left = true;
			break;
		case 38:
			_this.key.up = true;
			break;
		case 87:
			_this.key.up = true;
			break;
		case 39:
			_this.key.right = true;
			break;
		case 68:
			_this.key.right = true;
			break;
		case 40:
			_this.key.down = true;
			break;
		case 83:
			_this.key.down = true;
			break;
		}

		KeyboardKDEvents(e);

	};

	Keys.prototype.keyup = function (e) {

		e.preventDefault();

		var _this = this;
		
		switch (e.keyCode) {
		case 37:
			_this.key.left = false;
			break;
		case 65:
			_this.key.left = false;
			break;
		case 38:
			_this.key.up = false;
			break;
		case 87:
			_this.key.up = false;
			break;
		case 39:
			_this.key.right = false;
			break;
		case 68:
			_this.key.right = false;
			break;
		case 40:
			_this.key.down = false;
			break;
		case 83:
			_this.key.down = false;
			break;
		}

	};

	var Keyboard = new Keys();

	var myStorage = localStorage;

	var windowWidth = window.innerWidth,
		windowHeight = window.innerHeight,
		pixelRatio = window.devicePixelRatio || 1;

	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");

		canvas.width = windowWidth * pixelRatio;
		canvas.height = windowHeight * pixelRatio;

		canvas.style.width = windowWidth + 'px';
		canvas.style.height = windowHeight + 'px';	
	
	function PixelRatio(){ 
	
		//const bounds = canvas.getBoundingClientRect();

		if(MainData.Orientation == "Landscape"){

			if(MainData.ScreenType == "Normal"){ // Full
			
				MainData.DiffY = 0;
				MainData.DiffX = 0;
		
				if(windowWidth != window.innerWidth || windowHeight != window.innerHeight){
		
					windowWidth = window.innerWidth;
					windowHeight = window.innerHeight;
			
					canvas.width = windowWidth * pixelRatio;
					canvas.height = windowHeight * pixelRatio;
			
					canvas.style.width = windowWidth + 'px';
					canvas.style.height = windowHeight + 'px';	
					
				}
		
				MainData.PxW = ((windowWidth * pixelRatio) / 1920);
				MainData.PxH = ((windowHeight * pixelRatio) / 1080);
		
				setTimeout(function(){
			
					if((windowWidth != window.innerWidth || windowHeight != window.innerHeight) && MainData.ScreenType == "Normal"){
		
						windowWidth = window.innerWidth;
		
						windowHeight = window.innerHeight;
				
						canvas.width = windowWidth * pixelRatio;
						canvas.height = windowHeight * pixelRatio;
				
						canvas.style.width = windowWidth + 'px';
						canvas.style.height = windowHeight + 'px';	
					
					MainData.PxW = ((windowWidth * pixelRatio) / 1920);
					MainData.PxH = ((windowHeight * pixelRatio) / 1080);
				
				}
		
				},200);
		
				setTimeout(function(){
			
					if((windowWidth != window.innerWidth || windowHeight != window.innerHeight) && MainData.ScreenType == "Normal"){
		
						windowWidth = window.innerWidth;
		
						windowHeight = window.innerHeight;
				
						canvas.width = windowWidth * pixelRatio;
						canvas.height = windowHeight * pixelRatio;
				
						canvas.style.width = windowWidth + 'px';
						canvas.style.height = windowHeight + 'px';	
						
					MainData.PxW = ((windowWidth * pixelRatio) / 1920);
					MainData.PxH = ((windowHeight * pixelRatio) / 1080);
				
				}
		
				},1000);
		
			} else { // 16:9
	
				windowWidth = window.innerWidth;
				windowHeight = window.innerHeight;
				pixelRatio = window.devicePixelRatio || 1;
		
				canvas.width = windowWidth * pixelRatio;
				canvas.height = windowHeight * pixelRatio;
		
				canvas.style.width = windowWidth + 'px';
				canvas.style.height = windowHeight + 'px';
		
				var Height = windowHeight* pixelRatio , Width = windowWidth* pixelRatio;
		
				if(Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) > 36)
					for (;Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) != 36;)
						windowHeight = Math.round(36 * ((windowWidth + windowHeight) / 100));
		
				if (Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) > 64)
					for (;Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) != 64;)
						windowWidth = Math.round(64 * ((windowWidth + windowHeight) / 100));
		
				MainData.PxW = ((windowWidth * pixelRatio) / 1920);
				MainData.PxH = ((windowHeight * pixelRatio) / 1080);
		
				MainData.DiffY = ((Height - windowHeight* pixelRatio)) / 2;
				MainData.DiffX = ((Width - windowWidth* pixelRatio)) / 2;
			
			}
			
			MainData.Width = 1920*MainData.PxW;
			MainData.Height = 1080*MainData.PxH;

		} else {

			if(MainData.ScreenType == "Normal"){ // Full
			
				MainData.DiffY = 0;
				MainData.DiffX = 0;
		
				if(windowWidth != window.innerWidth || windowHeight != window.innerHeight){
		
					windowWidth = window.innerWidth;
					windowHeight = window.innerHeight;
			
					canvas.width = windowWidth * pixelRatio;
					canvas.height = windowHeight * pixelRatio;
			
					canvas.style.width = windowWidth + 'px';
					canvas.style.height = windowHeight + 'px';	
					
				}
		
				MainData.PxW = ((windowWidth * pixelRatio) / 1080);
				MainData.PxH = ((windowHeight * pixelRatio) / 1920);
		
				setTimeout(function(){
			
					if((windowWidth != window.innerWidth || windowHeight != window.innerHeight) && MainData.ScreenType == "Normal"){
		
						windowWidth = window.innerWidth;
		
						windowHeight = window.innerHeight;
				
						canvas.width = windowWidth * pixelRatio;
						canvas.height = windowHeight * pixelRatio;
				
						canvas.style.width = windowWidth + 'px';
						canvas.style.height = windowHeight + 'px';	
					
					MainData.PxW = ((windowWidth * pixelRatio) / 1080);
					MainData.PxH = ((windowHeight * pixelRatio) / 1920);
				
				}
		
				},200);
		
				setTimeout(function(){
			
					if((windowWidth != window.innerWidth || windowHeight != window.innerHeight) && MainData.ScreenType == "Normal"){
		
						windowWidth = window.innerWidth;
		
						windowHeight = window.innerHeight;
				
						canvas.width = windowWidth * pixelRatio;
						canvas.height = windowHeight * pixelRatio;
				
						canvas.style.width = windowWidth + 'px';
						canvas.style.height = windowHeight + 'px';	
						
						MainData.PxW = ((windowWidth * pixelRatio) / 1080);
						MainData.PxH = ((windowHeight * pixelRatio) / 1920);
					
				}
		
				},1000);
		
			} else { // 16:9
	
				windowWidth = window.innerWidth;
				windowHeight = window.innerHeight;
				pixelRatio = window.devicePixelRatio || 1;
		
				canvas.width = windowWidth * pixelRatio;
				canvas.height = windowHeight * pixelRatio;
		
				canvas.style.width = windowWidth + 'px';
				canvas.style.height = windowHeight + 'px';
		
				var Height = windowHeight* pixelRatio , Width = windowWidth* pixelRatio;
		
				if(Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) > 64)
					for (;Math.floor((windowHeight / (windowWidth + windowHeight)) * 100) != 64;)
						windowHeight = Math.round(64 * ((windowWidth + windowHeight) / 100));
		
				if (Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) > 36)
					for (;Math.floor((windowWidth / (windowWidth + windowHeight)) * 100) != 36;)
						windowWidth = Math.round(36 * ((windowWidth + windowHeight) / 100));
		
				MainData.PxW = ((windowWidth * pixelRatio) / 1080);
				MainData.PxH = ((windowHeight * pixelRatio) / 1920);
					
				MainData.DiffY = ((Height - windowHeight* pixelRatio)) / 2;
				MainData.DiffX = ((Width - windowWidth* pixelRatio)) / 2;
			
			}

			MainData.Width = 1080*MainData.PxW;
			MainData.Height = 1920*MainData.PxH;

		}

		NoUpdateScreen();

	}

	// Start/Spec Events

	function LoadEngine(){

        TextSet();
        
        if(localStorage.getItem('StartGame_FE'))
        LoadData(); else StartEvent();

        TimeInter.AchievementF = setInterval(AchievementF,1000);
        TimeInter.MoveObjects = setInterval(MoveObjects,30);
		TimeInter.DialogWork = setInterval(DialogWork,VisualNovelD.Speed);

        AddWindow(MainData.StartWindow); 

        if(MainData.LogoWindow) AddWindow("S"); 

        StartTime();

		for (var x = 0; x < MainData.VideoLen; x++) {
			
			Images["Video_"+x].autoPlay = false;
			Images["Video_"+x].loop = true;
			Images["Video_"+x].muted = false;
			Images["Video_"+x].currentTime = 0;

		}
		
	}

	function StartAnim(){
		
		StartAnimation.Start = true;
		StartAnimation.AddAlpha = 1/StartAnimation.MaxTimer;

	}

	function StartEvent(){
		
		localStorage.setItem('CFG_StartGame_FE',true);
		localStorage.setItem('CFG_AppVersion_FE',MainData.AppVersion);

		PixelRatio();

		TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen);

	}

	function InfoWindow(Val){
		
		console.log("Nowa Wersja");

		//MainData.HelpValue.P0 = Val; // Previous version number

		//WindowDrawList[WindowDrawList.length-1] = "W0";
		//if(Window[WindowDrawList[WindowDrawList.length-1]].Animation) AnimationStarterWindow(WindowDrawList[WindowDrawList.length-1]);
	
	}

	// Save/Load Data
	
	function LoadData(){
		
		if(MainData.AppVersion > Number(localStorage.getItem('CFG_AppVersion_FE'))) InfoWindow(Number(localStorage.getItem('CFG_AppVersion_FE')));
		
		localStorage.setItem('CFG_AppVersion_FE',MainData.AppVersion);
		
		MainData.Language = Number(localStorage.getItem('CFG_Language_FE'));
		MainData.ScreenType = localStorage.getItem('CFG_Screen_FE');
		
		if(localStorage.getItem('CFG_Sound_FE') == "true")
		MainData.HelpValue.Sound = true; 
		else MainData.HelpValue.Sound = false; 
				
		MuteSound(MainData.HelpValue.Sound);
		
		SettingWin();

		PixelRatio();

		TimeInter.UpdateScreen = requestAnimationFrame(UpdateScreen);
		
	}
		
	function SaveData(){


	}

	function SaveAchiv(){
		
		
	}
	
	function SaveSettings(){
		
		localStorage.setItem('CFG_Sound_FE',MainData.HelpValue.Sound);
		localStorage.setItem('CFG_Language_FE',MainData.Language);
		localStorage.setItem('CFG_Screen_FE',MainData.ScreenType);
	
	}

	function SettingWin(Data){
		
		if(Data)
		if(Data.Object.TMY == 0)
		Data.Object.TMY = Data.Object.Height;
		else Data.Object.TMY = 0;

		if(MainData.ScreenType == "Normal")
		WindowObjects[8][4].TMY = WindowObjects[8][4].Height;
		else WindowObjects[8][4].TMY = 0;
		
		if(MainData.HelpValue.Sound)
		WindowObjects[8][5].TMY = WindowObjects[8][5].Height;
		else WindowObjects[8][5].TMY = 0;

		SaveSettings();

	}

	// Button Scripts

	function ButtonScripts(Data){
		
		//console.log(Data);
		
		if(Data.Name == "Window") {

			if(Data.Object.Type == "WindowOpen") AddWindow(Data.Object.Href);
			else if(Data.Object.Type == "ChangeWindow") ChangeWindow(Data.Object.Href);
			else if(Data.Object.Type == "ScreenSettings") {

				if(MainData.ScreenType == "Normal")
				MainData.ScreenType = "Line"; else MainData.ScreenType = "Normal";
				
				PixelRatio();

				SettingWin(Data); 

			} else if(Data.Object.Type == "LanguageChange"){ 
			
				MainData.Language++;
				
				if(MainData.Language == MainData.LanNumber)
				MainData.Language = 0;
			
				SaveSettings();

			} else if(Data.Object.Type == "Mute"){
				
				if(!MainData.HelpValue.Sound) MainData.HelpValue.Sound = true; 
				else MainData.HelpValue.Sound = false;
				
				MuteSound(MainData.HelpValue.Sound);

 				SettingWin(Data); 
				
			} else if(Data.Object.Type == "Exit") { 
				
				if(Data.Object.Stop) Images[Data.Object.Stop].pause();

				var ActWin = WindowDrawList[WindowDrawList.length-1];

				if(WindowList[ActWin].Window.Name == "OP2") {
	
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
			
					OpenWorldData[OPCamera.AMap].Work = false;
				
				}
				
				DesFullscreenSet(1);
				SetInterfejs(WindowList[WindowDrawList[WindowDrawList.length-2]].Window);

				if(WindowList[ActWin].Window.ScaleData.ScaleSim != 0)
				ScaleClose(); else CloseWindow();
			
			} 
		
			if(Data.Object.Type == "Filter") {
				
				var WinsowNum = WindowList[WindowDrawList[WindowDrawList.length-1]];

				WinsowNum.Window.ListSpecial.ListFilter = true;
				WinsowNum.Window.ListSpecial.ListTag = Data.Object.Filtr;
				ListData(WinsowNum);
				
			} else if(Data.Object.Type == "StopFilter"){

				var WinsowNum = WindowList[WindowDrawList[WindowDrawList.length-1]];

				WinsowNum.Window.ListSpecial.ListFilter = false;
				ListData(WinsowNum);
				
			}
			
			if(Data.Object.Type == "Sort") {
				
				var WinsowNum = WindowList[WindowDrawList[WindowDrawList.length-1]];

				WinsowNum.Window.ListSpecial.Sort = true;
				WinsowNum.Window.ListSpecial.SortMax = Data.Object.Sort;
				ListData(WinsowNum);
				
			} else if(Data.Object.Type == "StopSort"){

				var WinsowNum = WindowList[WindowDrawList[WindowDrawList.length-1]];

				WinsowNum.Window.ListSpecial.Sort = false;
				ListData(WinsowNum);

			}

			if(Data.Object.Type == "Form") 
			MainData.HelpValue.Form = Data.Object.ST;
			
			// ---- Showcase ----

			// ---- Desktop ----

			if(Data.Object.Type == "Achiv_0") {
			
				if(!Achievements[0].Unlock){

					Achievements[0].Unlock = true;
						
					Achievements.UnlockN++;
					AddAlert(Achievements,1,0);

				}

			}

			if(Data.Object.Type == "Achiv_1") {
				
				if(!Achievements[1].Unlock){

					Achievements[1].Unlock = true;
					
					Achievements.UnlockN++;
					AddAlert(Achievements,1,1);
	
				}
				
			}

			if(Data.Object.Type == "StartAnim") {
				
				if(!WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Animations[Data.Object.AnimN].Work)
				WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Animations[Data.Object.AnimN].Work = true;
				else WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Animations[Data.Object.AnimN].Work = false;

			} 

			if(Data.Object.Type == "Points"){ 
				
				for (var x = 0; x < 12; x++) 
				if(SpecListData[0][x].Points < 3){ 
					
					SpecListData[0][SpecListData[0][x].Points].Mission_0 = true;
					SpecListData[0][x].Points++;

					if(x+1 < 12)
					SpecListData[0][x+1].Unlock = true;

					x = 12;

				}
				
				AddData.Points += 1;
				SpecText.N1 = [AddData.Points];

				for (var u = 0; u < WindowDrawList.length; u++) 
				if(WindowList[WindowDrawList[u]].Window.Name == "W2")
				WindowList[WindowDrawList[u]].CopyList = ListCreator(WindowList[WindowDrawList[u]].Window);

			}

			if(Data.Object.Type == "Platyna" && Achievements.Plat) 
			AddAlert(Achievements,0,0);
			
			if(Data.Object.Type == "Hour") Achievements.PlayTimeH++;

			if(Data.Object.Type == "Alert_1") AddAlert(Alerts.Reset,0,0);
			if(Data.Object.Type == "Alert_2") AddAlert(Achievements,1,0);

			if(Data.Object.Type == "PlayVideoOther") {

				if(Images[Data.Object.Play].paused) Images[Data.Object.Play].play();
				else Images[Data.Object.Play].pause();
				
			} 

			if(Data.Object.Type == "PlayVideo") {

				if(Images[Data.Object.File].paused) Images[Data.Object.File].play();
				else Images[Data.Object.File].pause();
				
			}

			if(Data.Object.Type == "Muted") {

				if(Images[Data.Object.Play].muted) Images[Data.Object.Play].muted = false;
				else Images[Data.Object.Play].muted = true;
				
			}

			if(Data.Object.Type == "CurrentTime") {

				if(Data.Object.Add) Images[Data.Object.Play].currentTime += 0.1;
				else Images[Data.Object.Play].currentTime -= 0.1;
				
			}

			// ---- Open World ----

			if(Data.Object.Type == "OPControl"){
			
				if(OPCamera[OPCamera.AMap].NPCNumC == null) OPCamera[OPCamera.AMap].NPCNumC = 0;
				else OPCamera[OPCamera.AMap].NPCNumC = null;

			} else if(Data.Object.Type == "OPFollow"){
			
				if(OPCamera[OPCamera.AMap].Follow == null) OPCamera[OPCamera.AMap].Follow = 0;
				else OPCamera[OPCamera.AMap].Follow = null;

			} else if(Data.Object.Type == "CameraControl"){
			
				if(OPCamera[OPCamera.AMap].Control) OPCamera[OPCamera.AMap].Control = false;
				else OPCamera[OPCamera.AMap].Control = true;

			} else if(Data.Object.Type == "CameraAutoMove"){
			
				if(OPCamera[OPCamera.AMap].CamMove.Move == null) SetCameraMove(0);
				else SetCameraMove(null);

			} else if(Data.Object.Type == "HitboxRD"){
			
				if(AddData.RD_HitBox) AddData.RD_HitBox = false;
				else AddData.RD_HitBox = true;

			} else if(Data.Object.Type == "NPCCType"){
			
				if(OPCamera[OPCamera.AMap].NPCCType) OPCamera[OPCamera.AMap].NPCCType = false;
				else OPCamera[OPCamera.AMap].NPCCType = true;

			}

			if(Data.Object.Type == "AddBuildM") {

				if(OPCamera[OPCamera.AMap].Net.NetN.length > 0 && !OPCamera[OPCamera.AMap].Net.Block && MainData.Mobile) 
				AddObjectNet();

			} else if(Data.Object.Type == "SellBuilding"){
			
				if(!MainData.Mobile)
				if(OpenWorldData[OPCamera.AMap].ActBuilding != null){
					
					DeadBuildAnim(OpenWorldData[OPCamera.AMap].ActBuilding,BuildAnimF[OpenWorldData[OPCamera.AMap].ActBuilding.Data.Name].Destroy);
					OpenWorldData[OPCamera.AMap].ActBuilding = null;

				}
				
			} else if(Data.Object.Type == "Build_1"){
			
				HKBuildSett(MapObjects.HotKeys[1]);

			} else if(Data.Object.Type == "RainWork"){
				
				if(Maps_Data[OPCamera.AMap].Weather.RainWork) Maps_Data[OPCamera.AMap].Weather.RainWork = false;
				else Maps_Data[OPCamera.AMap].Weather.RainWork = true;

				if(Maps_Data[OPCamera.AMap].Weather.RainWork){
		
					clearInterval(OpenWorldData[OPCamera.AMap].AddRain);
					OpenWorldData[OPCamera.AMap].AddRain = setInterval(AddRain,Maps_Data[OPCamera.AMap].Weather.Rain.SpeedRain);
		
					clearInterval(OpenWorldData[OPCamera.AMap].AddFall);
					OpenWorldData[OPCamera.AMap].AddFall = setInterval(AddFall,Maps_Data[OPCamera.AMap].Weather.Rain.SpeedFall);
		
				} else {

					clearInterval(OpenWorldData[OPCamera.AMap].AddRain);
					clearInterval(OpenWorldData[OPCamera.AMap].AddFall);

				}
				
			} else if(Data.Object.Type == "NPCmove"){
			
				if(OPCamera[OPCamera.AMap].NPCList[0].LoopMove == null) {

					SetMove(OPCamera[OPCamera.AMap].NPCList[0],true); 
					SetMoveList(OPCamera[OPCamera.AMap].NPCList[0],1);

				} else {

					SetMoveList(OPCamera[OPCamera.AMap].NPCList[0],null);

					SetMove(OPCamera[OPCamera.AMap].NPCList[0],true); 
					Pathfinding(OPCamera[OPCamera.AMap].NPCList[0],0,0,0);

				}
	
			} 
			
		} else if(Data.Name == "List"){

			var ActWindowN = WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Name;

			if(ActWindowN == "W6") DialogDataSet(Data.Object.DData);

			if(ActWindowN == "W1"){
				
				for (var y = 0; y < MainData.LanNumber; y++) 
				Text[y].RandomV = Text[y][30] + " " +Text[y]["N"+Data.Num];
					
				Window[Data.Object.Href].Name = Data.Object.Video + Text[MainData.Language]["N"+Data.Num];
				Window[Data.Object.Href].SpecText[2][0].Text = ["N"+Data.Num];
				
				WindowObjects[9][1].Stop = Data.Object.Video;
				WindowObjects[9][3].Play = Data.Object.Video;
				WindowObjects[9][4].File = Data.Object.Video;
				WindowObjects[9][5].Play = Data.Object.Video;
				WindowObjects[9][6].Play = Data.Object.Video;
				WindowObjects[9][7].Play = Data.Object.Video;

				AddWindow(Data.Object.Href);
		
			}
	
			if(ActWindowN == "W5"){
				
				AddAlphaText(Data.Num+1,(MainData.TouchX-MainData.DiffX)/MainData.PxW,(MainData.TouchY-MainData.DiffY)/MainData.PxH,3,0.04); 
				MainData.HelpValue.T0 += Data.Num+1;
				SpecText.N3 = ["<-- ["+MainData.HelpValue.T0+"] -->"];

			}

			if(ActWindowN == "W2") RandomMoney(Data.Object.Money)

		} else if(Data.Name == "Inter"){
			
			if(Data.Object.Type == "WindowOpen") AddWindow(Data.Object.Href);
			else if(Data.Object.Type == "ChangeWindow") ChangeWindow(Data.Object.Href);
			else if(Data.Object.Type == "Exit"){ 
				
				if(Data.Object.Stop) Images[Data.Object.Stop].pause();

				var ActWin = WindowDrawList[WindowDrawList.length-1];
				
				if(MainData.ActWindowN == "OP2")
				OpenWorldData[OPCamera.AMap].Work = false;

				DesFullscreenSet(1);
				SetInterfejs(WindowList[WindowDrawList[WindowDrawList.length-2]].Window);

				if(WindowList[ActWin].Window.ScaleData.ScaleSim != 0)
				ScaleClose(); else CloseWindow();
			
			} 
			
			// ---- Showcase ----

			if(Data.Object.Type == "StartAnim") {
				
				if(!InterfejsData[MainData.InterNum].Animations[Data.Object.AnimN].Work)
				InterfejsData[MainData.InterNum].Animations[Data.Object.AnimN].Work = true;
				else InterfejsData[MainData.InterNum].Animations[Data.Object.AnimN].Work = false;
				
			} 
	
		} 

		if(Data.Object.CSound != null)
		PlaySound("Copy",Data.Object.CSound);

		SoundtrackControl();

		ButtonClean();

	}

	// Events Keyboard/Touch/Mouse

	function KeyboardKDEvents(e){

		//console.log(e);
		
		var ActWindowN = WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Name;

		if(ActWindowN == "LogoStart"){

			if(e.key == " ") StartAnim();
			if(e.key == "e") {
			
				MainData.Language++;
				
				if(MainData.Language == MainData.LanNumber)
				MainData.Language = 0;
			
				SaveSettings();
	
			}

		}

		if(MainData.HelpValue.Form != null){

			var Form = MainData.HelpValue.Form;

			if(e.key.length == 1) SpecText[Form][0] += [e.key];
			else if(e.key == "Backspace")
			SpecText[Form] = [SpecText[Form][0].substring(0, SpecText[Form][0].length-1)];
			else if(e.key == "Enter") MainData.HelpValue.Form = null;

		}

		if(ActWindowN == "OP2"){

			if(!MainData.Mobile)
			if(MapObjects.HotKeys[e.key] != null) 
			HKBuildSett(MapObjects.HotKeys[e.key]);
	
			if(e.key == "e")
			if(AddData.ActualObelisk != null && AddData.ActualObelisk.AnX == 0){
				
				AddData.ActualObelisk.AnX = 1;
				OPCamera[0].SBuildList[AddData.Obelisks[AddData.ActualObelisk.N_Obelisk].N].AnX = 1;
				AddData.Obelisks[AddData.ActualObelisk.N_Obelisk].T = true;
				
			}

			if(e.key == "2"){

				if(OPCamera[OPCamera.AMap].NPCNumC == null) OPCamera[OPCamera.AMap].NPCNumC = 0;
				else OPCamera[OPCamera.AMap].NPCNumC = null;

			}

			if(e.key == "3"){

				if(OPCamera[OPCamera.AMap].Follow == null) OPCamera[OPCamera.AMap].Follow = 0;
				else OPCamera[OPCamera.AMap].Follow = null;

			}

			if(e.key == "4"){

				if(OPCamera[OPCamera.AMap].Control) OPCamera[OPCamera.AMap].Control = false;
				else OPCamera[OPCamera.AMap].Control = true;

			}

			if(e.key == "5"){

				if(OPCamera[OPCamera.AMap].CamMove.Move == null) SetCameraMove(0);
				else SetCameraMove(null);

			}

			if(e.key == "6"){

				if(AddData.RD_HitBox) AddData.RD_HitBox = false;
				else AddData.RD_HitBox = true;

			}

			if(e.key == "7"){

				if(OPCamera[OPCamera.AMap].NPCCType) OPCamera[OPCamera.AMap].NPCCType = false;
				else OPCamera[OPCamera.AMap].NPCCType = true;

			}

			if(e.key == "q"){

				if(OPCamera[OPCamera.AMap].NPCList[0].LoopMove == null) {

					SetMove(OPCamera[OPCamera.AMap].NPCList[0],true); 
					SetMoveList(OPCamera[OPCamera.AMap].NPCList[0],1);

				} else {

					SetMoveList(OPCamera[OPCamera.AMap].NPCList[0],null);

					SetMove(OPCamera[OPCamera.AMap].NPCList[0],true); 
					Pathfinding(OPCamera[OPCamera.AMap].NPCList[0],0,0,0);

				}

			}

			if(e.key == "r"){

				if(OpenWorldData[OPCamera.AMap].ActBuilding != null){
					
					DeadBuildAnim(OpenWorldData[OPCamera.AMap].ActBuilding,BuildAnimF[OpenWorldData[OPCamera.AMap].ActBuilding.Data.Name].Destroy);
					OpenWorldData[OPCamera.AMap].ActBuilding = null;

				}
				
			}

			if(e.key == "t"){

				if(Maps_Data[OPCamera.AMap].Weather.RainWork) Maps_Data[OPCamera.AMap].Weather.RainWork = false;
				else Maps_Data[OPCamera.AMap].Weather.RainWork = true;

				if(Maps_Data[OPCamera.AMap].Weather.RainWork){
		
					clearInterval(OpenWorldData[OPCamera.AMap].AddRain);
					OpenWorldData[OPCamera.AMap].AddRain = setInterval(AddRain,Maps_Data[OPCamera.AMap].Weather.Rain.SpeedRain);
		
					clearInterval(OpenWorldData[OPCamera.AMap].AddFall);
					OpenWorldData[OPCamera.AMap].AddFall = setInterval(AddFall,Maps_Data[OPCamera.AMap].Weather.Rain.SpeedFall);
		
				} else {

					clearInterval(OpenWorldData[OPCamera.AMap].AddRain);
					clearInterval(OpenWorldData[OPCamera.AMap].AddFall);

				}
				
			}

			if(e.key == "y"){

				if(AddData.Zoom) AddData.Zoom = false;
				else AddData.Zoom = true;

			}

			if(e.key == "u"){

				var Wave = NPCSpawnList[0][1];

				for (var y = 0; y < Wave.Number; y++) {
			
					var Range = [
						-Wave.Range+Math.floor((Math.random() * (Wave.Range*2))),
						-Wave.Range+Math.floor((Math.random() * (Wave.Range*2)))
					];

					AddNPC( 
						MapObjects[Wave.Type], 
						Wave.PX+Range[0], 
						Wave.PY+Range[1], 
						OPCamera.AMap,
						null
					);

				}	
			
			}

			if(e.key == "i"){

				var Wave = NPCSpawnList[0][2];

				for (var y = 0; y < Wave.Number; y++) {
			
					var Range = [
						-Wave.Range+Math.floor((Math.random() * (Wave.Range*2))),
						-Wave.Range+Math.floor((Math.random() * (Wave.Range*2)))
					];

					AddNPC( 
						MapObjects[Wave.Type], 
						Wave.PX+Range[0], 
						Wave.PY+Range[1], 
						OPCamera.AMap,
						Wave.Path
					);

					SetMoveList(OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCList.length-1],Wave.Path);
				
				}	

			}

			if(OpenWorldData[OPCamera.AMap].ActBuilding != null){

				var Build = OpenWorldData[OPCamera.AMap].ActBuilding;

				if(e.key == "v")
				Build.Data.SpeedC++;
				
				if(e.key == "c")
				Build.Data.SpeedC--;

				if(e.key == "n")
				Build.Data.Range += 5;

				if(e.key == "b")
				Build.Data.Range -= 5;
				
				if(e.key == "x"){

					if(Build.Data.Bullet == 1) Build.Data.Bullet = 17;
					else Build.Data.Bullet = 1;

				}

				if(e.key == "z"){

					if(!Build.Data.DyingA) Build.Data.DyingA = true;
					else Build.Data.DyingA = false;

				}

			}

		}

		if(ActWindowN == "W6")
		if(e.key == "Enter") {
			
			if(SpecText.VisNovel == SpecText.VisNovelT) DialogToYou();
			else SpecText.VisNovel = SpecText.VisNovelT;
			
		}

		if(ActWindowN == "W18"){

			if(e.key == "e"){

				if(!Render3DTD.AutoCam){

					Render3DTD.AutoCam = true;

					Camera3D.cX = Render3DTD.Path.Start[0];
					Camera3D.cY = Render3DTD.Path.Start[1];

					Render3DTD.TestCamera.List = [];

					Render3DTD.TestCamera.Num = 0;
					Render3DTD.TestCamera.Counter = -1;

				} else Render3DTD.AutoCam = false;

			}

			if(e.key == "r"){

				if(!Render3DTD.Sky)
				Render3DTD.Sky = true;
				else Render3DTD.Sky = false;

				if(!Render3DTD.Floor)
				Render3DTD.Floor = true;
				else Render3DTD.Floor = false;

			}

			if(e.key == "t"){

				if(!Render3DTD.Texture)
				Render3DTD.Texture = true;
				else Render3DTD.Texture = false;

			}

			if(e.key == "y"){

				if(!Render3DTD.AlphaNoTexture)
				Render3DTD.AlphaNoTexture = true;
				else Render3DTD.AlphaNoTexture = false;

			}

			if(e.key == "p"){

				if(!Camera3D.Keyboard_Mouse_Control)
				Camera3D.Keyboard_Mouse_Control = true;
				else Camera3D.Keyboard_Mouse_Control = false;
				
				Camera3D.cZ = Camera3D.Camera_Default_Boundries[0];
				Camera3D.Sky = Camera3D.Camera_Default_Boundries[1];
				Camera3D.SPZ = Camera3D.Camera_Default_Boundries[2];

			}

			if(e.key == "u"){

				if(!Camera3D.TopDownControl)
				Camera3D.TopDownControl = true;
				else Camera3D.TopDownControl = false;

			}

			if(e.key == "i"){

				if(!Render3DTD.Look2D)
				Render3DTD.Look2D = true;
				else Render3DTD.Look2D = false;

			}

			if(e.key == "o"){

				if(!Render3DTD.Look3D)
				Render3DTD.Look3D = true;
				else Render3DTD.Look3D = false;

			}

		}

		HeroControlK(e.key);
	
	}
	
	function SpecialDownEvents(e){
		
		var ActWindowN = WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Name;

		if(ActWindowN == "LogoStart")
		StartAnim();

		if(MainData.Mobile){
 
			if(ActWindowN == "OP2"){

				if(OpenWorldData[OPCamera.AMap].Work) {
                   
					OPCamera[OPCamera.AMap].MPX = Math.abs(OPCamera[OPCamera.AMap].PX+(MainData.TouchX-MainData.DiffX));
					OPCamera[OPCamera.AMap].MPY = Math.abs(OPCamera[OPCamera.AMap].PY+(MainData.TouchY-MainData.DiffY));
				
					OpenWorldData[OPCamera.AMap].Move = true;
					
				}
	
				if(!MainData.OnInter)
				NetHB( Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
					   Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
	
			}

			if(ActWindowN == "W6") {
				
				if(SpecText.VisNovel == SpecText.VisNovelT) DialogToYou();
				else SpecText.VisNovel = SpecText.VisNovelT;
				
			}
	
		} else {
		
			if(ActWindowN == "W6") {
				
				if(SpecText.VisNovel == SpecText.VisNovelT) DialogToYou();
				else SpecText.VisNovel = SpecText.VisNovelT;
				
			}
	
		}
		
	}

	function SpecialUpEvents(e){
		
		if(MainData.Mobile){
			
			if(OpenWorldData[OPCamera.AMap].Move){

				var ActWin = WindowDrawList[WindowDrawList.length-1];
				
				if(OPCamera[OPCamera.AMap].Build == null && !MainData.OnInter) 
				if( MainData.TouchX > MainData.DiffX+(WindowList[ActWin].Window.PX+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PXw)* MainData.PxW && 
					MainData.TouchY > MainData.DiffY+(WindowList[ActWin].Window.PY+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PYw)* MainData.PxH && 
					MainData.TouchX < MainData.DiffX+(WindowList[ActWin].Window.PX+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PXw+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].Widthw)* MainData.PxW && 
					MainData.TouchY < MainData.DiffY+(WindowList[ActWin].Window.PY+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PYw+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].Heightw)* MainData.PxH)
				PointNPCcontrol(Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PXw-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
								Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PYw-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
	
				if(OpenWorldData[OPCamera.AMap].PointOn != null) ObjectsScripts();
	
			}

		} else {
			
			if(OpenWorldData[OPCamera.AMap].Move){
				
				var ActWin = WindowDrawList[WindowDrawList.length-1];
				
				if(WindowList[ActWin].Window.Name == "OP2")
				if(OPCamera[OPCamera.AMap].Build == null && !MainData.OnInter) 
				if( MainData.TouchX > MainData.DiffX+(WindowList[ActWin].Window.PX+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PXw)* MainData.PxW && 
					MainData.TouchY > MainData.DiffY+(WindowList[ActWin].Window.PY+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PYw)* MainData.PxH && 
					MainData.TouchX < MainData.DiffX+(WindowList[ActWin].Window.PX+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PXw+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].Widthw)* MainData.PxW && 
					MainData.TouchY < MainData.DiffY+(WindowList[ActWin].Window.PY+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PYw+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].Heightw)* MainData.PxH)
				PointNPCcontrol(Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PXw-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
								Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PYw-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
				
				if(OPCamera[OPCamera.AMap].Net.NetN.length > 0 && !OPCamera[OPCamera.AMap].Net.Block) 
				BuyBuilding();

				if(OpenWorldData[OPCamera.AMap].PointOn != null) ObjectsScripts();

			}
			
		}
		
	}

	function SpecialMoveEvents(e){
		  
		var ActWindowN = WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Name;

		if(MainData.Mobile){

			if(ActWindowN == "OP2"){

				if(OPCamera[OPCamera.AMap].Build == null && OPCamera[OPCamera.AMap].Follow == null && !MainData.OnInter && OPCamera[OPCamera.AMap].Control) 
				CameraBlock(OPCamera[OPCamera.AMap].MPX-(MainData.TouchX-MainData.DiffX),OPCamera[OPCamera.AMap].MPY-(MainData.TouchY-MainData.DiffY));
	
			}

		} else {

			if(ActWindowN == "OP2"){

				if(!MainData.OnInter)
				NetHB( Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
					   Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
		
			}
			
		}
		
	}

	function SpecialRightMDownEvents(e){
		
		var ActWindowN = WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Name;

		if(ActWindowN == "OP2"){

			MainData.Mouse = 0;
			MainData.RightMouse = true;
	
			OPCamera[OPCamera.AMap].Build = null; 
			OpenWorldData[OPCamera.AMap].ActBuilding = null; 
	
			NetHB( Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
				   Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
			
		}
		
	}

	function SpecialRightUpEvents(e){
		
		var ActWindowN = WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Name;

		if(ActWindowN == "OP2")
		MainData.RightMouse = false;
		
	}

	// Main Window Draw

	function WindowDraw(Obj){

		var WindowData = Obj.Window,
			WinData = Obj.WindowObjects;
			
		if(WindowData.ScaleData.ScaleSim && WindowData.ScaleData.Scale < 1) WindowScale(WindowData,WindowData.ScaleData.ScaleSim);

		if(WindowData.Background)
		ctx.drawImage(Images[WindowData.Background.File], 0, 0, WindowData.Background.TMW, WindowData.Background.TMH, 0, 0, WindowData.Background.Width*MainData.PxW, WindowData.Background.Height*MainData.PxH);
		
		ctx.save();

		ctx.translate(WindowData.PX*MainData.PxW, WindowData.PY*MainData.PxH);
		ctx.scale(WindowData.ScaleData.Scale, WindowData.ScaleData.Scale);
		
		ctx.globalAlpha = WindowData.ScaleData.Alpha;

		for(var y = 0; y < WindowData.ObjectNumber; y++){	
			
			ctx.save();

				ctx.translate(WinData[y].PX*MainData.PxW, WinData[y].PY*MainData.PxH);
				
				ctx.drawImage(Images[WinData[y].File], WinData[y].TMX*WinData[y].AnX, WinData[y].TMY, WinData[y].TMW, WinData[y].TMH, 0, 0, WinData[y].Width*MainData.PxW, WinData[y].Height*MainData.PxH);
				
				if(WindowData.List) if(WindowData.List.ListNum == y) Obj.ListFunction();
				
				if(WindowData.SpecText[y]) TextDraw(WindowData.SpecText[y]);

			ctx.restore();
            
		}

		ctx.restore();
           	
	}	
	
    function WindowScale(Obj,ScaleSim){

		var WindowData = Obj;
		
		if(WindowData.ScaleData.SPX <= WindowData.PX)
		WindowData.PX -= WindowData.ScaleData.Xmove;
		else WindowData.PX += WindowData.ScaleData.Xmove;
		
		if(WindowData.ScaleData.SPY <= WindowData.PY)
		WindowData.PY -= WindowData.ScaleData.Ymove;
		else WindowData.PY += WindowData.ScaleData.Ymove;

		if(ScaleSim == 1){
		
			WindowData.ScaleData.Scale += WindowData.ScaleData.Speed;
			WindowData.ScaleData.Alpha += WindowData.ScaleData.Speed;
	
			if(WindowData.ScaleData.Scale >= 1){
				
				if(!WindowData.Background)
				SetInterfejs(WindowData);
	
				WindowData.PX = WindowData.ScaleData.SPX;
				WindowData.PY = WindowData.ScaleData.SPY;
		
				WindowData.ScaleData.SPX = 0;
				WindowData.ScaleData.SPY = 0;
	
				WindowData.ScaleData.Scale = 1;
				WindowData.ScaleData.Alpha = 1;

				DesFullscreenSet(0);

				ButtonClean();

			} 

		} else if(ScaleSim == 2){

			if(WindowData.ScaleData.Scale)
			WindowData.ScaleData.Scale -= 0.1;
			WindowData.ScaleData.Alpha -= 0.1;
	
		}
		
    }

	// System Draw
	
	function Interfejs(){

		for (var i = 0; i < InterfejsData[MainData.InterNum].Objects.length; i++) {

			var OData = InterfejsData[MainData.InterNum].Objects[i];

			ctx.save();

			ctx.translate(OData.PX * MainData.PxW, OData.PY * MainData.PxH);
			
			ctx.drawImage(Images[OData.File], OData.TMX * OData.AnX, OData.TMY, OData.TMW, OData.TMH, 0, 0, OData.Width * MainData.PxW, OData.Height * MainData.PxH);
			
			if(OData.SpecText) TextDraw(OData.SpecText);

			if(MainData.InterNum == 0)
			if(i == 0) DrawAlphaText();
				
			ctx.restore();

		}
		
		for (var y = 0; y < AddData.Money.length; y++)
		for (var x = 0; x < AddData.Money[y].length; x++) 
		if(AddData.Money[y][x] != null) SpecObjects(AddData.Money[y][x]);

	}

	function DrawMouse(){

		ctx.save();

			var Mouse = MouseData[MainData.Mouse][MouseData.AnF];
			
			ctx.translate(MouseData.PX+Mouse.PX*MainData.PxW, MouseData.PY+Mouse.PY*MainData.PxH);
		
			ctx.drawImage(
				Images[Mouse.File], 
				Mouse.Width*MouseData.AnX, 0, 
				Mouse.TMW, 
				Mouse.TMH,
				0, 0, 
				Mouse.Width, 
				Mouse.Height);
				
			if(MainData.InfoWindow != null){
				
				var XY = [0,0];

					if(MouseData.PX > (MainData.DiffX+MainData.Width/2)) 
					XY[0] = -InfoWindowsData[MainData.InfoWindow].Width_2;
					else XY[0] = -InfoWindowsData[MainData.InfoWindow].Width_1;

					if(MouseData.PY > (MainData.DiffY+MainData.Height/2)) 
					XY[1] = -InfoWindowsData[MainData.InfoWindow].Height_2;
					else XY[1] = -InfoWindowsData[MainData.InfoWindow].Height_1;
	
				ctx.save();
	
				ctx.translate(XY[0] * MainData.PxW, XY[1] * MainData.PxH);
				
					ctx.globalAlpha = InfoWindowsData[MainData.InfoWindow].Alpha;

					for (var x = 0; x < InfoWindowsData[MainData.InfoWindow].length; x++) {

						var OData = InfoWindowsData[MainData.InfoWindow][x];
			
						ctx.save();
			
						ctx.translate(OData.PX * MainData.PxW, OData.PY * MainData.PxH);
					
						ctx.drawImage(Images[OData.File], OData.TMX , OData.TMY, OData.TMW, OData.TMH, 0, 0, OData.Width * MainData.PxW, OData.Height * MainData.PxH);
							
						if(OData.SpecText) TextDraw(OData.SpecText);
			
						ctx.restore();
			
					}

				ctx.restore();
		
			}

		ctx.restore();

	}
	
	function InfoWindowSpec(){

		switch (MainData.CurrentButton.Object.InfoWNumber) {
			
			case 0: {
				
			}
			break;

		}	

	}

	function LogoStartDraw(){

			var OData = StartAnimation.MainGraphic;

			ctx.save();

			ctx.translate(OData.PX * MainData.PxW, OData.PY * MainData.PxH);
			
				ctx.drawImage(
						Images[OData.File], 
						OData.TMX, 
						OData.TMY, 
						OData.TMW, 
						OData.TMH, 
						0,0, 
						OData.Width*MainData.PxW, 
						OData.Height*MainData.PxH
					);
				
				if(OData.SpecText) TextDraw(OData.SpecText);

			ctx.restore();

			var OData = StartAnimation.TransGraphic;

			ctx.save();

			ctx.translate(OData.PX * MainData.PxW, OData.PY * MainData.PxH);

			ctx.globalAlpha = StartAnimation.Alpha;

				ctx.drawImage(
						Images[OData.File+["_"]+MainData.Language], 
						OData.TMX, 
						OData.TMY, 
						OData.TMW, 
						OData.TMH, 
						0,0, 
						OData.Width*MainData.PxW, 
						OData.Height*MainData.PxH
					);
				
				if(OData.SpecText) TextDraw(OData.SpecText);

			ctx.restore();

	}
	
	function TextDraw(TData,SText){ 
	
		for(var h = 0; h < TData.Num; h++) {
			
			var TextF = TData[h].Data[MainData.Language], 
				Data = TextData[TextF.Data]; 

			if(TData[h].Spec) {

				var TN = SpecText[TData[h].Spec]; 

				for (var x = 0; x < TN.length; x++) 
				FontDraw(String(TN[x]),TextF,Data,x);
			
			} else if(TData[h].SText) {
				
				var TN = SText; 
				
				for (var x = 0; x < TN.length; x++) 
				FontDraw(String(TN[x]),TextF,Data,x);
			
			} else {
			
				var TN = Text[MainData.Language][TData[h].Text]; 
				
				for (var x = 0; x < TN.length; x++) 
				FontDraw(TN[x],TextF,Data,x);
				
			}

		}
	
	}
	
	function FontDraw(TN,TextF,Data,Enter){
		
		ctx.save();	

		if(Enter > 0)
		var PY = TextF.PY+((Data.Enter*Enter));
		else var PY = TextF.PY;

		ctx.font = Data.Spec+" "+(Data.Size*MainData.PxW)+"px "+Data.Font;
		ctx.textAlign = TextF.Align;

		if(Data.SColor){
		
			ctx.lineWidth = Data.LWidth*MainData.PxW;
			ctx.strokeStyle = Data.SColor;
			ctx.lineJoin = Data.LineJoin;
			ctx.strokeText(TN, TextF.PX*MainData.PxW, (PY+Data.SPY)*MainData.PxH);

		}

		if(Data.ShadowColor){
		
			ctx.shadowOffsetX = Data.OffsetX;
			ctx.shadowOffsetY = Data.OffsetY;
			ctx.shadowColor = Data.ShadowColor;
			ctx.shadowBlur = Data.ShadowBlur;
	
		}

		ctx.fillStyle = Data.Color;
		ctx.fillText(TN, TextF.PX*MainData.PxW, PY*MainData.PxH);

		ctx.restore();

	}

	function ProgressBar(Obj,BarData){
		
		ctx.save();

			ctx.translate(BarData.PX*MainData.PxW,BarData.PY*MainData.PxH);
					
			if(BarData.Type == "Percent"){

				if(Obj.Unlock) var BarWidth = BarData.BarC.MaxWidth; 
				else if(Obj.Type == "time") var BarWidth = (((Achievements.PlayTimeH*60+Achievements.PlayTimeM)/(Obj.CTF*60)))*BarData.BarC.MaxWidth;
				
				ctx.drawImage(Images[BarData.File], 0, 0, BarData.TMW, BarData.TMH, 0,0, BarData.Width*MainData.PxW, BarData.Height*MainData.PxH);	
				ctx.drawImage(Images[BarData.BarC.File], 0, 0, BarWidth, BarData.BarC.TMH, BarData.BarC.PX*MainData.PxW, BarData.BarC.PY*MainData.PxH, BarWidth*MainData.PxW, BarData.BarC.Height*MainData.PxH);	
			
				if(Obj.Type == "time"){
					
					if(!Obj.Unlock) 
					FontDraw(Math.round(((Achievements.PlayTimeH*60+Achievements.PlayTimeM)/(Obj.CTF*60))*100)+"%",{

						"Data": 2,
						"PX": 517/2,
						"PY": 20,
						"Align": "center",
		
					},TextData[2]);
					else 
					FontDraw("100%",{

						"Data": 2,
						"PX": 517/2,
						"PY": 20,
						"Align": "center",
		
					},TextData[2]);

				} 

			} else if(BarData.Type == "Live"){
				
				var BarWidth = (Obj.Live/Obj.MLive)*BarData.BarC.MaxWidth;
				
				ctx.drawImage(Images[BarData.File], 0, 0, BarData.TMW, BarData.TMH, 0,0, BarData.Width*MainData.PxW, BarData.Height*MainData.PxH);	
				ctx.drawImage(Images[BarData.BarC.File], 0, 0, BarWidth, BarData.BarC.TMH, BarData.BarC.PX*MainData.PxW, BarData.BarC.PY*MainData.PxH, BarWidth*MainData.PxW, BarData.BarC.Height*MainData.PxH);	
			
			}

		ctx.restore();
				
	}
	
	function SpecObjects(Obj){

		ctx.save();

		ctx.translate(Obj.PX * MainData.PxW, Obj.PY * MainData.PxH);
		
		ctx.rotate(Obj.Route*Math.PI/180);
							
		ctx.drawImage(Images[Obj.File], Obj.TMX * Obj.AnX, Obj.TMY, Obj.TMW, Obj.TMH, -(Obj.Width/2)* MainData.PxW, -(Obj.Height/2)* MainData.PxH, Obj.Width * MainData.PxW, Obj.Height * MainData.PxH);

		ctx.restore();

	}

	function MoveObjects(){
		
		for (var y = 0; y < AddData.Money.length; y++){
			
			var Counter = 0;

			for (var x = 0; x < AddData.Money[y].length; x++){

				var Mon = AddData.Money[y][x];
	
				if(Mon.AnX != 3 || Mon.Type == 3) 
				Mon.AnX++; else Mon.AnX = 0;
		
				if(Mon.Type == 1){
	
					if(Mon.Counter > 0){
			
						Mon.PX -= Mon.XMove;
						Mon.PY -= Mon.YMove;
						
						Mon.Counter --;
		
					} else {
		
						Mon.XEnd = InterfejsData[0].Objects[5].PX+InterfejsData[0].Objects[5].Width/2; 
						Mon.YEnd = InterfejsData[0].Objects[5].PY+InterfejsData[0].Objects[5].Height/2;
						
						Mon.Type = 2;
						Mon.Speed = Math.floor((Math.random() * 10)+30);
	
						var dx = Mon.PX-Mon.XEnd,
							dy = Mon.PY-Mon.YEnd,
							angle = Math.atan2(dy, dx);
						
							Mon.XMove = Math.round(((Mon.Speed * Math.cos(angle)) + Number.EPSILON) * 100) / 100;
							Mon.YMove = Math.round(((Mon.Speed * Math.sin(angle)) + Number.EPSILON) * 100) / 100;
							
							if(Mon.XMove)
							Mon.Counter = Math.round(Math.abs((Mon.PX-Mon.XEnd)/Mon.XMove));
							else Mon.Counter = Math.round(Math.abs((Mon.PY-Mon.YEnd)/Mon.YMove));
		
					}
	
				} else if(Mon.Type == 2){
	
					if(Mon.Counter > 0){
				
						Mon.PX -= Mon.XMove;
						Mon.PY -= Mon.YMove;
		
						Mon.Counter --;
		
					} else {
	
						Mon.XMove = 0;
						Mon.YMove = 0;

						Mon.Type = 3;

						Mon.TMY = 29;
						PlaySound("Copy",SoundBase.Other.Money);

					}
	
				} else {
					
					if(Mon.AnX > 2) Counter++;
		
					if(Counter >= AddData.Money[y].length-1) {
						
						x = AddData.Money[y].length;	
						AddData.Money[y] = [];
	
					}
	
				}
	
			}

		}
		
		if(MainData.CurrentButton)
		if(MouseData.MCounter <= MouseData.Counter){
			
			MouseData.Counter = 0;

			if(MouseData[MainData.Mouse][MouseData.AnF].MAnX > MouseData.AnX)
			MouseData.AnX++; else MouseData.AnX = 0;
	
		} else MouseData.Counter++;
		else MouseData.AnX = 0;
		
		if(MainData.ActWindowN == "LogoStart")
		if(StartAnimation.Start){

			if(StartAnimation.Timer == StartAnimation.MaxTimer){
				
				StartAnimation.Alpha = 1;

				CloseWindow();

				MainData.ActWindowN = "W0";
				SoundtrackControl();
				SpecText.Game_Ver = ["FROSTengine Ver "+MainData.AppVersion];
			
			} else {
				
				StartAnimation.Alpha += StartAnimation.AddAlpha;
				StartAnimation.Timer++;
			
			}

		}

		KeysUpdate();

	}

	function DrawAlphaText(){

		for(var x = 0; x < AddData.TextList.length; x++) 		
		if(AddData.TextList[x]) if(AddData.TextList[x].Alpha > 0){

			var TextF = AddData.TextList[x];

				ctx.save();
			
					ctx.globalAlpha = TextF.Alpha;
					
					FontDraw(TextF.Text,TextF, TextData[TextF.Data]);

				ctx.restore();
			
		} else AddData.TextList[x] = null;
		
		if(!OpenWorldData[OPCamera.AMap].Pause){

			for(var x = 0; x < AddData.TextList.length; x++) 		
			if(AddData.TextList[x]){
	
				AddData.TextList[x].Alpha -= AddData.TextList[x].AlphaH;
				AddData.TextList[x].PY --;
	
			} else AddData.TextList[x] = null;
			
		}

	}

	// System Lists
	
	function ListNormal(ListCopy,Window){ 
		
		var ListData = Window.List,
			ListSpecial = Window.ListSpecial,
			Vertical = ListData.PY,
			Horizon = [ListData.PX,ListData.PX],
			BlockData = ListData.SpecData,
			CounterRender = 0;

		ctx.save();
		ctx.beginPath();
		ctx.rect(ListData.DrawRam.PX * MainData.PxW, ListData.DrawRam.PY * MainData.PxH, ListData.DrawRam.Width * MainData.PxW, ListData.DrawRam.Height * MainData.PxH);
		ctx.clip();	

		for(var x = 0; x < ListCopy.length; x++) {
		
			ctx.save();

			if(	Vertical+ListSpecial.DifferenceY+ListCopy[x].PH > ListData.DrawRam.PY && 
				Vertical+ListSpecial.DifferenceY < ListData.DrawRam.PY+ListData.DrawRam.Height){

				ctx.translate(Horizon[1]*MainData.PxW, (Vertical+ListSpecial.DifferenceY)*MainData.PxH);
				
				ctx.drawImage(Images[ListCopy[x].File], 0,0,ListCopy[x].Width, ListCopy[x].Height,0,0, ListCopy[x].Width*MainData.PxW, ListCopy[x].Height*MainData.PxH);
				
				if(BlockData.Image)  //<----  Image
				for(var g = 0; g < BlockData.ImageNumber; g++) 
				ctx.drawImage(Images[ListCopy[x]["N"+g].File_Image],ListCopy[x]["N"+g].TMX, ListCopy[x]["N"+g].TMY, BlockData.Width, BlockData.Height, BlockData.PX*MainData.PxW, BlockData.PY*MainData.PxH, BlockData.Width*MainData.PxW, BlockData.Height*MainData.PxH);
				
				if(ListCopy[x].Buttons)
				for (var y = 0; y < ListCopy[x].Buttons.length; y++) {

					ctx.save();

					ctx.translate(ListCopy[x].Buttons[y].PX*MainData.PxW, ListCopy[x].Buttons[y].PY*MainData.PxH);
				
					ctx.drawImage(Images[ListCopy[x].Buttons[y].File], ListCopy[x].Buttons[y].TMX*ListCopy[x].Buttons[y].AnX, ListCopy[x].Buttons[y].TMY, ListCopy[x].Buttons[y].Width, ListCopy[x].Buttons[y].Height, 0,0, ListCopy[x].Buttons[y].Width*MainData.PxW, ListCopy[x].Buttons[y].Height*MainData.PxH);
					
					if(ListCopy[x].Buttons[y].Text) TextDraw(ListCopy[x].Buttons[y].Text);

					ctx.restore();
					
				}

				if(ListCopy[x].Text) TextDraw(ListCopy[x].Text);
				
				if(Window.Name == "W4") 
				TextDraw(Window.List.SpecText,[ListCopy[x].Points]);

			}
			
			if((ListData.StopListX-1) == CounterRender){
				
				Horizon[1] = Horizon[0];
				Vertical += ListCopy[x].PH;
				CounterRender = 0;
				
			} else {
				
				Horizon[1] += ListCopy[x].PW;
				CounterRender++;
				
			}
		
			ctx.restore();
			
		}
		
		ctx.closePath();
		ctx.restore();
		
	}
	
	function ListLevel(ListCopy,Window){ 
		
		var ListData = Window.List,
			ListSpecial = Window.ListSpecial,
			Vertical = ListData.PY,
			Horizon = [ListData.PX,ListData.PX],
			BlockData = ListData.SpecData,
			CounterRender = 0;

		ctx.save();
		ctx.beginPath();
		ctx.rect(ListData.DrawRam.PX * MainData.PxW, ListData.DrawRam.PY * MainData.PxH, ListData.DrawRam.Width * MainData.PxW, ListData.DrawRam.Height * MainData.PxH);
		ctx.clip();	

		for(var x = 0; x < ListCopy.length; x++) {
		
			ctx.save();

			if(	Vertical+ListSpecial.DifferenceY+ListCopy[x].PH > ListData.DrawRam.PY && 
				Vertical+ListSpecial.DifferenceY < ListData.DrawRam.PY+ListData.DrawRam.Height){

				ctx.translate(Horizon[1]*MainData.PxW, (Vertical+ListSpecial.DifferenceY)*MainData.PxH);
				
				ctx.drawImage(Images[ListCopy[x].File], 0,0,ListCopy[x].Width, ListCopy[x].Height,0,0, ListCopy[x].Width*MainData.PxW, ListCopy[x].Height*MainData.PxH);
				
				if(ListCopy[x].Text) TextDraw(ListCopy[x].Text);

				if(ListCopy[x].Buttons)
				for (var y = 0; y < ListCopy[x].Buttons.length; y++) {

					ctx.save();

					ctx.translate(ListCopy[x].Buttons[y].PX*MainData.PxW, ListCopy[x].Buttons[y].PY*MainData.PxH);
				
					ctx.drawImage(Images[ListCopy[x].Buttons[y].File], ListCopy[x].Buttons[y].TMX*ListCopy[x].Buttons[y].AnX, ListCopy[x].Buttons[y].TMY, ListCopy[x].Buttons[y].Width, ListCopy[x].Buttons[y].Height, 0,0, ListCopy[x].Buttons[y].Width*MainData.PxW, ListCopy[x].Buttons[y].Height*MainData.PxH);
					
					if(ListCopy[x].Buttons[y].Text) TextDraw(ListCopy[x].Buttons[y].Text);

					ctx.drawImage(Images[BlockData.Points.File], BlockData.Points.TMX*SpecListData[ListData.SpecList][ListCopy[x].Buttons[y].SNum].Points, BlockData.Points.TMY, BlockData.Points.Width, BlockData.Points.Height, BlockData.Points.PX*MainData.PxW, BlockData.Points.PY*MainData.PxH, BlockData.Points.Width*MainData.PxW, BlockData.Points.Height*MainData.PxH);
		
					ctx.restore();
			
				}
				
			}

			if((ListData.StopListX-1) == CounterRender){
				
				Horizon[1] = Horizon[0];
				Vertical += ListCopy[x].PH;
				CounterRender = 0;
				
			} else {
				
				Horizon[1] += ListCopy[x].PW;
				CounterRender++;
				
			}
		
			ctx.restore();
			
		}
		
		ctx.closePath();
		ctx.restore();
		
	}
	
	function ListAchiv(ListCopy,Window){ 
		
		var ListData = Window.List,
			ListSpecial = Window.ListSpecial,
			Vertical = ListData.PY,
			Horizon = [ListData.PX,ListData.PX],
			BlockData = ListData.SpecData,
			CounterRender = 0;

		ctx.save();
		ctx.beginPath();
		ctx.rect(ListData.DrawRam.PX * MainData.PxW, ListData.DrawRam.PY * MainData.PxH, ListData.DrawRam.Width * MainData.PxW, ListData.DrawRam.Height * MainData.PxH);
		ctx.clip();	

		for(var x = 0; x < ListCopy.length; x++) {
		
			ctx.save();

			if(	Vertical+ListSpecial.DifferenceY+ListCopy[x].PH > ListData.DrawRam.PY && 
				Vertical+ListSpecial.DifferenceY < ListData.DrawRam.PY+ListData.DrawRam.Height){

				ctx.translate(Horizon[1]*MainData.PxW, (Vertical+ListSpecial.DifferenceY)*MainData.PxH);
				
				ctx.drawImage(Images[ListCopy[x].File], 0,0,ListCopy[x].Width, ListCopy[x].Height,0,0, ListCopy[x].Width*MainData.PxW, ListCopy[x].Height*MainData.PxH);
				
				if(!Achievements[ListCopy[x].Num].Unlock) //<----  Achievement
					ctx.drawImage(Images[BlockData.LockTrophy], 0, 0, BlockData.Width, BlockData.Height, BlockData.PX*MainData.PxW,BlockData.PY*MainData.PxH,BlockData.Width*MainData.PxW, BlockData.Height*MainData.PxH);
				else ctx.drawImage(Images[ListCopy[x].Trophy], 0, 0, BlockData.Width, BlockData.Height, BlockData.PX*MainData.PxW,BlockData.PY*MainData.PxH,BlockData.Width*MainData.PxW, BlockData.Height*MainData.PxH);

				if(Achievements[ListCopy[x].Num].Unlock || !Achievements[ListCopy[x].Num].Hidden)
				TextDraw(ListCopy[x].Text); else TextDraw(BlockData.Text);
			
				if(ListCopy[x].Bar) 
				ProgressBar(Achievements[ListCopy[x].Num],ListData.PBData);
		
			}

			if((ListData.StopListX-1) == CounterRender){
				
				Horizon[1] = Horizon[0];
				Vertical += ListCopy[x].PH;
				CounterRender = 0;
				
			} else {
				
				Horizon[1] += ListCopy[x].PW;
				CounterRender++;
				
			}
		
			ctx.restore();
			
		}
		
		ctx.closePath();
		ctx.restore();

	}

	// Window/Inter/Lists System Functions
	
	function AddWindow(Num,Change) { 

		var Check = true, WNum = null;

		if(!Window[Num].Copy){

			for (var x = 0; x < WindowDrawList.length; x++) {

				if(WindowList[WindowDrawList[x]].Window.Name == Window[Num].Name)
				{ Check = false; WNum = WindowDrawList[x]; }
				
			}

		}

		if(Check){

			var WindowData = JSON.parse(JSON.stringify(Window[Num]));
		
			if(Change){

				WindowData.PX = Change[0];
				WindowData.PY = Change[1];

				WindowData.ScaleData.Scale = 1;
				
				DesFullscreenSet(0);
				SetInterfejs(WindowData);

			} 

			if(WindowData.ScaleData.ScaleSim && !Change){

				WindowData.ScaleData.SPX = WindowData.PX;
				WindowData.ScaleData.SPY = WindowData.PY;
		
				WindowData.PX = (MainData.TouchX-MainData.DiffX)/MainData.PxW;
				WindowData.PY = (MainData.TouchY-MainData.DiffY)/MainData.PxH;
		
				WindowData.ScaleData.Xmove = Math.abs(WindowData.ScaleData.SPX-WindowData.PX)/WindowData.ScaleData.Divider;
				WindowData.ScaleData.Ymove = Math.abs(WindowData.ScaleData.SPY-WindowData.PY)/WindowData.ScaleData.Divider;
	
				WindowData.ScaleData.Scale = 0;
				WindowData.ScaleData.Alpha = 0;
				
				if(WindowData.Background)
				SetInterfejs(WindowData);

			}

			var WindowObject = {
					
				"WindowObjects": JSON.parse(JSON.stringify(WindowObjects[WindowData.WindowType])),
				"Window": JSON.parse(JSON.stringify(WindowData)),
				"CopyList": ListCreator(WindowData),
				"Function": null,
				"ListFunction": null,
				"AnimList": null
						
			};
	
			var Check = false, x = 0, Num = 0;

			if(WindowList.length > 1)
			for (var x = 0; x < WindowList.length; x++) {
				
				if(WindowList[x] == null){

					Check = true;
					Num = x;

				}

			}

			if(!Check){

				WindowList.push(WindowObject);
			
				x = WindowList.length-1;
		
			} else {
				
				WindowList[Num] = WindowObject;
			
				x = Num;
		
			}

			WindowDrawList.push(x);
			
			if(!WindowData.ScaleData.ScaleSim) { DesFullscreenSet(0); SetInterfejs(WindowData); }
			
			if(!WindowData.Spec)
			WindowList[x].Function = function (){ WindowDraw(WindowList[x]); };
			else if(WindowData.Spec == "LogoStart") WindowList[x].Function = function (){ LogoStartDraw(WindowList[x]); };
			else if(WindowData.Spec == "Render3D") WindowList[x].Function = function (){ Render3DWindow(WindowList[x]); }; 
			else if(WindowData.Spec == "VisualNovel") WindowList[x].Function = function (){ VisualNovel(WindowList[x]); };
			else if(WindowData.Spec == "SpecialText") WindowList[x].Function = function (){ SpecialTextWDraw(WindowList[x]); };
			else if(WindowData.Spec == "OpenWorld") WindowList[x].Function = function (){ OpenWorldDraw(WindowList[x]); }; 

			WindowList[x].AnimList = AnimationStarter(WindowList[x].Window,WindowList[x].WindowObjects);
		
			if(WindowList[x].CopyList){

				ListData(WindowList[x]);

				if(WindowList[x].Window.List.TypeList == "Normal") 
					WindowList[x].ListFunction = function (){ ListNormal(WindowList[x].CopyList,WindowList[x].Window); };
				else if(WindowList[x].Window.List.TypeList == "Level") 
					WindowList[x].ListFunction = function (){ ListLevel(WindowList[x].CopyList,WindowList[x].Window); };
				else if(WindowList[x].Window.List.TypeList == "Achievement") 
					WindowList[x].ListFunction = function (){ ListAchiv(WindowList[x].CopyList,WindowList[x].Window); };
		
			}
			
			switch (WindowData.SpecialFun) {
				case 0: DialogDataSet(false);
				break;	
				case 1: CreateWorld(WindowData.Name);
				break;	
			}
		
		} else NewDrawList(WNum);
		
		if(WindowDrawList.length) 
		ButtonHBWindow(MainData.TouchX,MainData.TouchY); else MainData.OnWindow = false;
	
	}

	function ChangeWindow(Href){

		var ActWin = WindowDrawList[WindowDrawList.length-1];

		if(WindowList[ActWin].Window.Animations)
		for(var y = 0; y < WindowList[ActWin].Window.Animations.AnimationsNum; y++)	
		clearInterval(WindowList[ActWin].AnimList[y]);

		var NewList = [];

		for (var x = 0; x < WindowDrawList.length-1; x++) 
		NewList.push(WindowDrawList[x]);
		
		WindowDrawList = NewList;
		
		if(WindowDrawList.length > 0)
		var PXY = [WindowList[ActWin].Window.PX,WindowList[ActWin].Window.PY];

		WindowList[ActWin] = null;
		
		if(WindowDrawList.length > 0)
		AddWindow(Href,PXY);
		else AddWindow(Href);
	
		if(WindowDrawList.length) 
		ButtonHBWindow(MainData.TouchX,MainData.TouchY); else MainData.OnWindow = false;

	}
	
	function CloseWindow(){

		var ActWin = WindowDrawList[WindowDrawList.length-1];
		
		SetInterfejs(WindowList[WindowDrawList[WindowDrawList.length-2]].Window);

		var NewList = [];

		for (var x = 0; x < WindowDrawList.length-1; x++) 
		NewList.push(WindowDrawList[x]);
		
		WindowDrawList = NewList;
		
		if(WindowList[ActWin].Window.Animations)
		for(var y = 0; y < WindowList[ActWin].Window.Animations.AnimationsNum; y++)	
		clearInterval(WindowList[ActWin].AnimList[y]);

		WindowList[ActWin] = null;
		
		var Check = false;

		for (var x = 0; x < WindowList.length; x++) 
		if(WindowList[x] != null) Check = true;
			
		if(!Check) WindowList = [];

		if(WindowDrawList.length) 
		ButtonHBWindow(MainData.TouchX,MainData.TouchY); else { 
			MainData.OnWindow = false; 
			if(MainData.CurrentButton != null)
			if(MainData.CurrentButton.Name == "Window") 
			MainData.CurrentButton = null;
		}

		DesFullscreenSet(0);
		
	}

	function ScaleClose(){

		var ActWin = WindowDrawList[WindowDrawList.length-1];

		WindowList[ActWin].Window.ScaleData.Scale = 0.9;
		WindowList[ActWin].Window.ScaleData.ScaleSim = 2;

		WindowList[ActWin].Window.ScaleData.Xmove = -50;
		WindowList[ActWin].Window.ScaleData.Ymove = -50;

		WindowList[ActWin].Window.ScaleData.SPX = 0;
		WindowList[ActWin].Window.ScaleData.SPY = 0;

		setTimeout(CloseWindow,30);

	}

	function NewDrawList(Num){
		
		if(WindowList[WindowDrawList[Num]])
		if(WindowList[WindowDrawList[Num]].Window.Desktop){

			SetInterfejs(WindowList[WindowDrawList[Num]].Window);
			return;

		}

		for (var y = 0; y < WindowList.length; y++) if(WindowList[y])
		if(MainData.ActWindowN == WindowList[y].Window.Name){
			
			var Window = WindowList[y].Window;

			if(Window.Desktop){
	
				SetInterfejs(Window);
				return;
	
			}
			
			var NewList = [];
	
			for (var x = 0; x < WindowDrawList.length; x++) 
			if(WindowDrawList[x] != Num)
			NewList.push(WindowDrawList[x]);
			
			NewList.push(Num);
	
			WindowDrawList = NewList;
			
		}

		SetInterfejs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window);
		
	}

	function DesFullscreenSet(Minus){
		
		var Num = 0;

		for (var x = 0; x < WindowDrawList.length-Minus; x++) 
		if(WindowList[WindowDrawList[x]].Window.Desktop)
		Num = x;

		MainData.Desktop = Num;
		
		Num = 0;

		for (var x = 0; x < WindowDrawList.length-Minus; x++) 
		if(WindowList[WindowDrawList[x]].Window.Fullscreen)
		Num = x;

		MainData.Fullscreen = Num;
		
		MainData.ActWindowN = WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Name;

		SoundtrackControl();

	}

	function ListData(WinsowNum){

		WinsowNum.Window.ListSpecial.DifferenceY = 0;

		WinsowNum.CopyList = ListCreator(WinsowNum.Window);
		
		if(WinsowNum.Window.List.StopListX || WinsowNum.Window.List.StopListX == 1){

			var Val = 0;

			for(var y = 0; y < WinsowNum.CopyList.length; y++) if(WinsowNum.Window.List.StopListX*Val == y) Val++;
			
			WinsowNum.Window.ListSpecial.StopList = 0;

			for (var z = 0; z < Val-WinsowNum.Window.List.StopListY; z++) 
			WinsowNum.Window.ListSpecial.StopList += WinsowNum.CopyList[z].PH;

		} else for (var z = 0; z < WinsowNum.CopyList.length-WinsowNum.Window.List.StopListY; z++) 
		WinsowNum.Window.ListSpecial.StopList += WinsowNum.CopyList[z].PH;

		if(WinsowNum.Window.ListSpecial.StartDown)
		WinsowNum.Window.ListSpecial.DifferenceY = -WinsowNum.Window.ListSpecial.StopList;

	}

	function ListCreator(DataList){

		if(!DataList.List) return null;

		var List = DataList.List.Objects;

		var CList = [];

		if(!DataList.ListSpecial.ListFilter)
		for(var x = 0; x < List.length; x++)
		CList.push(List[x]);
			
		if(DataList.List.TypeList == "Level"){
			
			for(var x = 0; x < CList.length; x++)
			for (var y = 0; y < CList[x].Buttons.length; y++) 
			if(!SpecListData[DataList.List.SpecList][CList[x].Buttons[y].SNum].Unlock)
			CList[x].Buttons[y].TMY = CList[x].Buttons[y].Lock; 
			else CList[x].Buttons[y].TMY = 0;

		}

		if(DataList.ListSpecial.ListFilter)
		for(var c = 0; c < List.length; c++){

			for(var y = 0; y < List[c].TagsNumber; y++){
				
				var Tag = DataList.ListSpecial.ListTag,
					CheckTag = List[c].Tags[MainData.Language][y];

					Tag = Tag.toLowerCase();
					CheckTag = CheckTag.toLowerCase();
					
				var Checkf = Tag.includes(CheckTag);
				
				if(Checkf && Tag.length > 2)
				CList.push(List[c]);
	
			}

		}

		if(DataList.ListSpecial.Sort){

			if(DataList.ListSpecial.SortMax){
				
				CList.sort(function(a, b){
					return a.Points - b.Points;
				});

			} else {

				CList.sort(function(a, b){
					return b.Points - a.Points;
				});

			}

		}

		return JSON.parse(JSON.stringify(CList));

	}

	function SetInterfejs(WindowData){
		
		if(WindowData.Inter && !MainData.Interfejs){
			
			MainData.Interfejs = true;
			MainData.InterNum = WindowData.InterNum;

			InterfejsData.AnimationList = AnimationStarter(InterfejsData[MainData.InterNum],InterfejsData[MainData.InterNum].Objects);

		} else if(WindowData.Inter && MainData.Interfejs && MainData.InterNum != WindowData.InterNum){
			
			for(var y = 0; y < InterfejsData.AnimationList.length; y++)	
			clearInterval(InterfejsData.AnimationList[y]);

			MainData.InterNum = WindowData.InterNum;

			InterfejsData.AnimationList = AnimationStarter(InterfejsData[MainData.InterNum],InterfejsData[MainData.InterNum].Objects);

		} else if(!WindowData.Inter){
			
			for(var y = 0; y < InterfejsData.AnimationList.length; y++)	
			clearInterval(InterfejsData.AnimationList[y]);

			MainData.Interfejs = false;
			MainData.OnInter = false;

		}

	}

	function AddAlphaText(Text,PX,PY,Data,Alpha){

		var Val = true;

		for(var x = 0; x < AddData.TextList.length; x++) 		
		if(AddData.TextList[x] == null){
		
			AddData.TextList[x] = {

				"Text": String(Text),
				"Data": Data,
				"Alpha": 1,
				"AlphaH": Alpha,
				"PX": PX,
				"PY": PY,
	
			};
			
			Val = false;
			x = AddData.TextList.length;
			
		}
		
		if(Val)
		AddData.TextList.push({

			"Text": String(Text),
			"Data": Data,
			"Alpha": 1,
			"AlphaH": Alpha,
			"PX": PX,
			"PY": PY,

		});

	}

	// System Alerts

	function AchievementF(){
	
		if(!Achievements.Plat) {

			var AC = Achievements;
			
			if(!Achievements[3].Unlock) {

				var N = AC.List.Time.List[AC.List.Time.ActL];
	
				if(AC[N].CTF <= AC.PlayTimeH){ 
	
					AC[N].Unlock = true;
					
					if(AC.List.Time.ActL != AC.List.Time.MaxL)
					AC.List.Time.ActL++;
					
					Achievements.UnlockN++;
					AddAlert(AC,1,N);
	
				}
	
			}

			AC.PlayTimeS++;
			if(AC.PlayTimeS == 60) { AC.PlayTimeM++; AC.PlayTimeS = 0;}
			if(AC.PlayTimeM == 60) { AC.PlayTimeH++; AC.PlayTimeM = 0;}

			if(AC.UnlockN == 4)
			AC.Plat = true;

			SaveAchiv();
	
		}
		
	}
	
	function AddAlert(Obj,alertnum,num) { 

		MainData.Alert = true; 
				
		var ActualAlert = {
				
			"File": Obj[num].File,
			"TMX": Obj.TMX,
			"TMY": Obj.TMY,
			"Width": Obj.Width,
			"Height": Obj.Height,
			"Alpha": 0,
			"SpecText": false,
			"Counter": 0,
			"MaxCounter": 100,
			"Function": null
					
		};

		if(Obj[num].Text) ActualAlert.SpecText = Obj[num].Text;
		if(Obj[num].Prize) ActualAlert.Text = "+"+Obj[num].Prize+"!";

		AlertList.push(ActualAlert);
		
		var x = AlertList.length-1;

		if(Alerts[alertnum].Num == "Alert_1")
		AlertList[x].Function = function (){ Alert_1(AlertList[x],alertnum); };
		
		if(Alerts[alertnum].Num == "Alert_2")
		AlertList[x].Function = function (){ Alert_2(AlertList[x],alertnum); };

	}	

	function Alert_1(Obj,Type){

		ctx.save();

		var Move = (Alerts[Type].Time/6)/((Alerts[Type].Time/60)/2);

		if(Obj.MaxCounter/2 > Obj.Counter && Obj.Alpha < Math.abs(Alerts[Type].PX+40))
		Obj.Alpha += Move;
			else if(Obj.MaxCounter/2 < Obj.Counter)
		Obj.Alpha -= Move;

		ctx.translate((Obj.Alpha+Alerts[Type].PX)*MainData.PxW,Alerts[Type].PY*MainData.PxH);
				
		ctx.drawImage(Images[Alerts[Type].File], Alerts[Type].TMX, Alerts[Type].TMY, Alerts[Type].Width, Alerts[Type].Height, 0,0, Alerts[Type].Width*MainData.PxW, Alerts[Type].Height*MainData.PxH);		

		if(Obj.SpecText) TextDraw(Obj.SpecText);

		Obj.Counter++;

		if(Obj.MaxCounter == Obj.Counter){
		
			Obj.Counter = 0;

			if(AlertList.length-1 != MainData.AlertNum)
			MainData.AlertNum++; else {
			
				MainData.Alert = false;
				AlertList = [];
				MainData.AlertNum = 0;
					
			}
			
		}

		ctx.restore();

	}	
				
	function Alert_2(Obj,Type){

		ctx.save();

		var globalAlpha = 1/((Alerts[Type].Time/60)/2);

		if(Obj.MaxCounter/2 > Obj.Counter)
		Obj.Alpha += globalAlpha;
			else
		Obj.Alpha -= globalAlpha;

			ctx.globalAlpha = Obj.Alpha;

		ctx.translate(Alerts[Type].PX*MainData.PxW,Alerts[Type].PY*MainData.PxH);
				
		ctx.drawImage(Images[Alerts[Type].File], Alerts[Type].TMX, Alerts[Type].TMY, Alerts[Type].Width, Alerts[Type].Height, 0,0, Alerts[Type].Width*MainData.PxW, Alerts[Type].Height*MainData.PxH);		

		ctx.drawImage(Images[Obj.File], Obj.TMX, Obj.TMY, Obj.Width, Obj.Height, Alerts[Type].Spec.PX*MainData.PxW,Alerts[Type].Spec.PY*MainData.PxH, Alerts[Type].Spec.Width*MainData.PxW, Alerts[Type].Spec.Height*MainData.PxH);		
			
			ctx.globalAlpha = 0;
			
		Obj.Counter++;

		if(Obj.MaxCounter == Obj.Counter){
		
			Obj.Counter = 0;

			if(AlertList.length-1 != MainData.AlertNum)
			MainData.AlertNum++; else {
			
				MainData.Alert = false;
				AlertList = [];
				MainData.AlertNum = 0;

			}
			
		}

		ctx.restore();

	}

	// System Animations

	function AnimationStarter(Data,Obj){
		
		if(!Data.Animations)
		return [];

		var AnimList = [];

		for(var y = 0; y < Data.Animations.AnimationsNum; y++){	
			
			if(Data.Animations[y].Type == "LoadStay")
			AnimList.push(setInterval(LoadStay,Data.Animations[y].Speed,Data.Animations[y],Obj[Data.Animations[y].ObjectNumber]));
			else
			if(Data.Animations[y].Type == "InfiniteLoop") 
			AnimList.push(setInterval(InfiniteLoop,Data.Animations[y].Speed,Data.Animations[y],Obj[Data.Animations[y].ObjectNumber]));
			
		}
	
		return AnimList;

	}
	
	function InfiniteLoop(AData,Obj){
			
		if(!MainData.SystemPaused)
		if(AData.Work){

			if(AData.FL != AData.MaxFrame) AData.FL++; 
			else AData.FL = 0;
			
			Obj.AnX = AData.List[AData.FL];
		
		}

	}

	function LoadStay(AData,Obj){

		if(!MainData.SystemPaused)
		if(AData.Work){

			if(AData.Direction) {
				
				if(AData.FL == AData.MaxFrame)
				{
					AData.Direction = false; 
					AData.Work = false;	

				} else AData.FL++;
				
			} else {
				
				if(AData.FL == 0)
				{
					AData.Direction = true; 
					AData.Work = false;

				} else AData.FL--; 
			
			}

			Obj.AnX = AData.List[AData.FL];
		
		}

	}

	// System Sound 

	function SoundtrackControl(){
		
		if(!MainData.VolumeM)
		for (var x = 0; x < SoundBase.Soundtracks.length; x++) 
		for (var y = 0; y < SoundBase.Soundtracks[x].Windows.length; y++){
			
			if(SoundBase.Soundtracks[x].Windows[y] == MainData.ActWindowN){
			
				if(SoundBase.Soundtracks.ActSound != x){
					
					SoundBase.Soundtracks.ActSound = x;
					SoundBase.Soundtracks.SoundBuff = SoundBase.Soundtracks[x].Buffor;
	
					if(SoundBase.Soundtracks.Sound != null)
					SoundBase.Soundtracks.Sound.pause();
	
					SoundBase.Soundtracks.Sound = new Audio(SoundBase.Soundtracks[x].S);
					
					SoundBase.Soundtracks.Sound.volume = SoundBase.Soundtracks[x].Volume;
					SoundBase.Soundtracks.Sound.load();
					SoundBase.Soundtracks.Sound.play();
		
					SoundBase.Soundtracks.Sound.addEventListener('timeupdate', function(){
						if(this.currentTime > SoundBase.Soundtracks.SoundBuff){
							this.currentTime = 0;
							this.play();
						}
					});
	
				} else if(SoundBase.Soundtracks.ActSound == x) 
				SoundBase.Soundtracks.Sound.volume = SoundBase.Soundtracks[x].Volume;
	
				break;
	
			}

		}
		

	}

	function PlaySound(Type,Sound){
		
		if(!MainData.VolumeM){
		
			var slist = [];

				for (var x = 0; x < SoundBase[Type][Sound].List.length; x++) 
				if(SoundBase[Type][Sound].List[x].currentTime < SoundBase[Type][Sound].List[x].duration) 
				slist.push(SoundBase[Type][Sound].List[x]);
					
				SoundBase[Type][Sound].List = slist;

			if(SoundBase[Type][Sound].List.length < SoundBase[Type][Sound].MaxList){

				SoundBase[Type][Sound].List.push(new Audio(SoundBase[Type][Sound].S));

				SoundBase[Type][Sound].List[SoundBase[Type][Sound].List.length-1].volume = SoundBase[Type][Sound].Volume-(SoundBase[Type][Sound].Volm*SoundBase[Type][Sound].List.length);
				SoundBase[Type][Sound].List[SoundBase[Type][Sound].List.length-1].play();
		
			
			} else if(Math.floor((Math.random() * SoundBase[Type][Sound].Rand)) == 1 && SoundBase[Type][Sound].List.length < SoundBase[Type][Sound].MaxList*4) {
				
				SoundBase[Type][Sound].List.push(new Audio(SoundBase[Type][Sound].S));

				SoundBase[Type][Sound].List[SoundBase[Type][Sound].List.length-1].volume = SoundBase[Type][Sound].minVol;
				SoundBase[Type][Sound].List[SoundBase[Type][Sound].List.length-1].play();
		
			}

		} else SoundBase[Type][Sound].List = [];
		
	}

	function PlayCopy(){

		for(var y = 0; y < SoundBase.Copy.length; y++)
		if(SoundBase.Copy[y].Stop)
		for(var x = 0; x < SoundBase.Copy[y].List.length; x++)
		SoundBase.Copy[y].List[x].play();

	}

	function MuteSound(Val){
		
		MainData.VolumeM = Val;

		if(MainData.VolumeM) {
			
			for(var y = 0; y < SoundBase.Copy.length; y++){
           
				for(var x = 0; x < SoundBase.Copy[y].List.length; x++)
				SoundBase.Copy[y].List[x].pause();	
	
				SoundBase.Copy[y].List = [];
	
			}
		   
			if(SoundBase.Soundtracks.Sound){

				SoundBase.Soundtracks.Sound.pause();

				SoundBase.Soundtracks.Sound = null;
				SoundBase.Soundtracks.ActSound = null;
				
			}
			
		}
		
		SoundtrackControl();
			
	}
	
	// Other

	function StartTime(){ 
    
		Time.Today = new Date();
		Time.A0 = Time.Today.getMinutes();
		Time.A1 = Time.Today.getSeconds();
		Time.A2 = Time.Today.getHours();

		SpecText.N0 = [TimeSM((Time.A2*60*60)+(Time.A0*60)+Time.A1)];
		
	}	
	
	function TimeSM(duration){

		// Hours, minutes and seconds
		var hrs = ~~(duration / 3600);
		var mins = ~~((duration % 3600) / 60);
		var secs = ~~duration % 60;
	
		// Output like "1:01" or "4:03:59" or "123:03:59"
		var ret = "";
	
		if (hrs > 0) {
			ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		}
	
		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;
		return ret;

	}

	// --------------------------------- Special Text --------------------------------

	function SpecialTextWDraw(Obj){

		var WindowData = Obj.Window,
			WinData = Obj.WindowObjects;
			
		if(WindowData.ScaleData.ScaleSim && WindowData.ScaleData.Scale < 1) WindowScale(WindowData,WindowData.ScaleData.ScaleSim);

		if(WindowData.Background)
		ctx.drawImage(Images[WindowData.Background.File], 0, 0, WindowData.Background.TMW, WindowData.Background.TMH, 0, 0, WindowData.Background.Width*MainData.PxW, WindowData.Background.Height*MainData.PxH);
		
		ctx.save();

		ctx.globalAlpha = WindowData.ScaleData.Alpha;

		for(var y = 0; y < WindowData.ObjectNumber; y++){	
			
			ctx.save();

				ctx.translate(WindowData.PX*MainData.PxW, WindowData.PY*MainData.PxH);
				ctx.scale(WindowData.ScaleData.Scale, WindowData.ScaleData.Scale);
				
				ctx.translate(WinData[y].PX*MainData.PxW, WinData[y].PY*MainData.PxH);
				
				ctx.drawImage(Images[WinData[y].File], WinData[y].TMX*WinData[y].AnX, WinData[y].TMY, WinData[y].TMW, WinData[y].TMH, 0, 0, WinData[y].Width*MainData.PxW, WinData[y].Height*MainData.PxH);
				
				if(WindowData.List) if(WindowData.List.ListNum == y) Obj.ListFunction();
				
				if(WindowData.ID[y]) SpecialText(WindowData.ID[y]);	

				if(WindowData.SpecText[y]) TextDraw(WindowData.SpecText[y]);

			ctx.restore();
            
		}

		ctx.restore();
           	
	}	
	
	function SpecialText(TextDataM){
		
		for(var h = 0; h < TextDataM.Num; h++) {
	
			var TxtData = TextDataM[h].Data[MainData.Language],
				Texttype = SpecialTextData[TxtData.TData];
				
			if(TextDataM[h].Spec){
			
				var Width = 0,
					TN = SpecText[TextDataM[h].Spec][0];

				if(TxtData.Middle)
				var	PX = -((TN.length*Texttype.Width)/2); 
				else var PX = 0;
				
				ctx.save();	

				ctx.translate((TxtData.PX+PX)*MainData.PxW, TxtData.PY*MainData.PxH); 
					
				for(var w = 0; w < TN.length; w++){

					var funkcja_XY = TextFile[Texttype.File].Fun(TN[w],Texttype.Size);

					ctx.drawImage(
						TextFile[Texttype.File][funkcja_XY[0]], 
						0, 0, 
						Texttype.TW, 
						Texttype.TH, 
						Width*MainData.PxW, 
						funkcja_XY[2]*MainData.PxH,
						Texttype.Width*MainData.PxW, 
						Texttype.Height*MainData.PxH);
		
					Width += Texttype.Width*funkcja_XY[1];
						
				}

				ctx.restore(); 

			} else 

			for(var w = 0; w < TxtData.List.length; w++)
			ctx.drawImage(TextFile[Texttype.File][TxtData.List[w].File], 0, 0, Texttype.TW, Texttype.TH, (TxtData.PX+TxtData.List[w].X)*MainData.PxW, (TxtData.PY+TxtData.List[w].Y)*MainData.PxH,Texttype.Width*MainData.PxW, Texttype.Height*MainData.PxH);
				
		}

	}

	// Text Solid Set

	function TextSet(){

		for (var x = 0; x < SpecialTextData.length; x++) {
			
			SpecialTextData[x].Width = SpecialTextData[x].TW*SpecialTextData[x].Size;
			SpecialTextData[x].Height = SpecialTextData[x].TH*SpecialTextData[x].Size;
			
		}

		for (var x = 0; x < Window.length; x++) if(Window[x].ID)
		for (var y = 0; y < Window[x].ObjectNumber; y++)
		if(Window[x].ID[y]){ 

			MiddleText(Window[x].ID[y],WindowObjects[Window[x].WindowType][y]);
			ListText(Window[x].ID[y]);
			
		}
		
	}

	function ListText(TextDataM){
		
		for (var y = 0; y < TextDataM.Num; y++) {
			
			if(!TextDataM[y].Spec)
			for (var z = 0; z < MainData.LanNumber; z++) {

				TextDataM[y].Data[z].List = [];

				var Width = 0, TN = String(Text[z][TextDataM[y].Text]), Pass = 0,
					TxtData = TextDataM[y].Data[z],Texttype = SpecialTextData[TxtData.TData];
	
				for(var w = 0; w < TN.length; w++){
	
					if(TN[w] != "@"){
						
						var funkcja_XY = TextFile[Texttype.File].Fun(TN[w],Texttype.Size);

						TextDataM[y].Data[z].List.push({
							
							"File": funkcja_XY[0],
							"X": Width,
							"Y": Pass+funkcja_XY[2]

						});

						Width += Texttype.Width*funkcja_XY[1];
						
					} else {

						Pass += Texttype.Height+TxtData.Enter;
						Width = 0;
	
					}

				}

			}
			
		}

	}

	function MiddleText(TextDataM,Obj){
	
		for (var y = 0; y < TextDataM.Num; y++) {
				
			if(!TextDataM[y].Spec)
			for (var z = 0; z < MainData.LanNumber; z++) {

				if(TextDataM[y].Data[z].Middle) {

					var Width = 0, TN = String(Text[z][TextDataM[y].Text]),
						TxtData = TextDataM[y].Data[z],Texttype = SpecialTextData[TxtData.TData];
		
					for(var w = 0; w < TN.length; w++){
		
						if(TN[w] != "@"){
							
							var funkcja_XY = TextFile[Texttype.File].Fun(TN[w],Texttype.TW);
							Width += Texttype.Width*funkcja_XY[1];
							
						} else w = TN.length; 

					}

					TextDataM[y].Data[z].PX = (Obj.Width/2)-(Width/2);

				}
			
			}
			
		}

	}

	// -------------------------------- Visual Novel --------------------------------
	
	function VisualNovel(Obj){
		
		SpecText.VS0 = [
			Text[MainData.Language].S0+" - "+People[0].Name,
			Text[MainData.Language].S1+" - "+People[0].Attitude,
			Text[MainData.Language].S2+" - "+People[0].State,
		];

		SpecText.VS1 = [
			Text[MainData.Language].S0+" - "+People[1].Name,
			Text[MainData.Language].S1+" - "+People[1].Attitude,
			Text[MainData.Language].S2+" - "+People[1].State,
		];

		SpecText.VS2 = [
			Text[MainData.Language].S0+" - "+People[2].Name,
			Text[MainData.Language].S1+" - "+People[2].Attitude,
			Text[MainData.Language].S2+" - "+People[2].State,
		];

		SpecText.VS3 = [
			Text[MainData.Language].S0+" - "+People[3].Name,
			Text[MainData.Language].S1+" - "+People[3].Attitude,
			Text[MainData.Language].S2+" - "+People[3].State,
		];

		SpecText.VS8 = [
						[Text[MainData.Language].S3+" - "+VisualNovelD.ADialog],
						[Text[MainData.Language].S4+" - "+VisualNovelD.ToYou],
						[Text[MainData.Language].S5+" - "+VisualNovelD.Tree],
					];

		var WindowData = Obj.Window,
			WinData = Obj.WindowObjects;
			
		if(WindowData.ScaleData.ScaleSim && WindowData.ScaleData.Scale < 1) WindowScale(WindowData,WindowData.ScaleData.ScaleSim);

		if(WindowData.Background)
		ctx.drawImage(Images[WindowData.Background.File], 0, 0, WindowData.Background.TMW, WindowData.Background.TMH, 0, 0, WindowData.Background.Width*MainData.PxW, WindowData.Background.Height*MainData.PxH);
		
		ctx.save();

		ctx.translate(WindowData.PX*MainData.PxW, WindowData.PY*MainData.PxH);
		ctx.scale(WindowData.ScaleData.Scale, WindowData.ScaleData.Scale);
		
		ctx.globalAlpha = WindowData.ScaleData.Alpha;

		var People_ = DialogsData[VisualNovelD.ADialog].Tree[VisualNovelD.Tree].ToYou[VisualNovelD.ToYou-1].People;

		for(var y = 0; y < WindowData.ObjectNumber; y++){	
			
			ctx.save();

				ctx.translate(WinData[y].PX*MainData.PxW, WinData[y].PY*MainData.PxH);
				
				ctx.drawImage(Images[WinData[y].File], WinData[y].TMX*WinData[y].AnX, WinData[y].TMY, WinData[y].TMW, WinData[y].TMH, 0, 0, WinData[y].Width*MainData.PxW, WinData[y].Height*MainData.PxH);
				
				if(WindowData.List) if(WindowData.List.ListNum == y) Obj.ListFunction();
				
				if(WindowData.DrawNovel == y) {
				
					ctx.save();

					ctx.translate(VNBackgrounds.PX * MainData.PxW, VNBackgrounds.PY * MainData.PxH);
					
					var BG = VNBackgrounds[DialogsData[VisualNovelD.ADialog].Tree[VisualNovelD.Tree].Background];

						for (var x = 0; x < BG.length; x++){
							
							ctx.drawImage(Images[BG[x].File], 
								BG[x].TMX * BG[x].AnX, 
								BG[x].TMY, 
								BG[x].TMW, 
								BG[x].TMH, 
								BG[x].PX* MainData.PxW, 
								BG[x].PY* MainData.PxH, 
								BG[x].Width * MainData.PxW, 
								BG[x].Height * MainData.PxH);

						}

					ctx.restore();
	
				}

				if(WindowData.SpecText[y]) TextDraw(WindowData.SpecText[y]);

			ctx.restore();
            
		}

		for (var x = 0; x < People_.length; x++){
			
			var Obj_ = People[People_[x].Per].Data;
	
			ctx.save();
	
				ctx.translate(People_[x].PX * MainData.PxW, People_[x].PY * MainData.PxH);
								
				ctx.drawImage(Images[Obj_["File_"+People_[x].Talk]], Obj_.TMX * Obj_.AnX, Obj_.TMY, Obj_.TMW, Obj_.TMH, 0, 0, Obj_.Width * MainData.PxW, Obj_.Height * MainData.PxH);
	
			ctx.restore();
	
		}
	
		ctx.restore();
        
	}

	function DialogDataSet(DData){
		
		WindowList[WindowDrawList[WindowDrawList.length-1]].CopyList = [];
			
		if(!DData)
		var DData = {

			"DNumber": VisualNovelD.ADialog,
			"NTree": VisualNovelD.Tree,
			
		}
		
		if(DData.Spec != null)
		console.log(DData.Spec);

		// Update of Character Setup

		if(DData.ListN != null){

			var FromYou = DialogsData[VisualNovelD.ADialog].Tree[VisualNovelD.Tree].FromYou[DData.ListN];
			 	
			for (var x = 0; x < FromYou.State.length; x++) {
				
				var Per = People[FromYou.State[x][0]];
				
				Per.State += FromYou.State[x][1];
	
				if(Per.StateLimits[0] >= Per.State) Per.Attitude = 0;
				else if(Per.StateLimits[1] <= Per.State) Per.Attitude = 2;
				else Per.Attitude = 1;
	
			}

		}
		
		// Tree and dialogue setup 

		VisualNovelD.ADialog = DData.DNumber;
		VisualNovelD.Tree = DData.NTree;
		VisualNovelD.ToYou = 0;
		

		DialogToYou();

	}

	function DialogToYou(){
		
		var Tree = DialogsData[VisualNovelD.ADialog].Tree[VisualNovelD.Tree];
		
		if(VisualNovelD.ToYou != null)
			var ToYou = Tree.ToYou[VisualNovelD.ToYou];
		else
			var ToYou = Tree.ToYou[0];
			
		// Dialogues in sequence

		if(VisualNovelD.ToYou < Tree.ToYou.length){

			SpecText.VisNovelT = Text[MainData.Language][ToYou.Text];

			if(SpecText.VisNovelT.length > 1)
			SpecText.VisNovel = [[""],[""],[""],[""],[""]];
			else SpecText.VisNovel = [""];

			VisualNovelD.ToYou++;

		} else DialogFromYou(); // Reply after the ToYou, reply and next tree or dialogue
		
	}

	function DialogFromYou(){

		var WinsowNum = WindowList[WindowDrawList[WindowDrawList.length-1]];

		// Moving on to the next Dialogue / Places in the Dialogue tree

			WinsowNum.CopyList = [];

			var Huh = DialogsData[VisualNovelD.ADialog].Tree[VisualNovelD.Tree].FromYou,
				Val = 0;


			for (var x = 0; x < Huh.length; x++){

				if(Huh[x].Attitude[People[Huh[x].Attitude.P].Attitude]){

					WinsowNum.CopyList.push(JSON.parse(JSON.stringify({
	
						"Num": Val,
	
						"File": "List_6",
						"PH": 90,
						"PW": 537,
						"Height": 87,
						"Width": 530,
						
						"Text":{
						 
							"Num": 1,
	
							0: {
	
								"Text": Huh[x].Text,
								"Data": {
	
									0: {
	
										"PX": 19,
										"PY": 29,
										"Align": "normal",
										"Data": 19,
	
									},
	
									1: {
	
										"PX": 19,
										"PY": 29,
										"Align": "normal",
										"Data": 19,
	
									}
	
								},
							}  
	
						},
	
						"Buttons":{
	
							"length": 1,
	
							0:{
	
								"File": "ListButton_2",
								"TMX": 77,
								"TMY": 0,
								"PX": 445,
								"PY": 9,
								"Width": 77,
								"Height": 69,
								"BAnim": true,
                        "CSound": 1,
                        "HoverCSound": 2,
								"AnX": 0, 
								"DData": {
				
									"DNumber": Huh[x].GoToD, // Next Dialogue Number
									"NTree": Huh[x].GoToT, // Number Next in the Dialogue Tree
									"ListN": x, // Number in the list
									"Spec": Huh[x].Spec, // Spec

								}											  
	
							}
	
						}
						
					})));

				}
				
				Val++;

			}
			
	
		if(WinsowNum.Window.List.StopListX || WinsowNum.Window.List.StopListX == 1){
	
			var Val = 0;

			for(var y = 0; y < WinsowNum.CopyList.length; y++) if(WinsowNum.Window.List.StopListX*Val == y) Val++;
			
			WinsowNum.Window.ListSpecial.StopList = 0;

			for (var z = 0; z < Val-WinsowNum.Window.List.StopListY; z++) 
			WinsowNum.Window.ListSpecial.StopList += WinsowNum.CopyList[z].PH;

		} else for (var z = 0; z < WinsowNum.CopyList.length-WinsowNum.Window.List.StopListY; z++) 
		WinsowNum.Window.ListSpecial.StopList += WinsowNum.CopyList[z].PH;

	}

	function DialogWork(){
		
		if(SpecText.VisNovelT != null){

			var Val = 0;

			if(SpecText.VisNovelT.length > 1){
				
				for (var x = 0; x < SpecText.VisNovelT.length; x++) 
				if(SpecText.VisNovelT[x][0].length != SpecText.VisNovel[x][0].length)
				{ Val = x; break; }
		
				if(SpecText.VisNovelT[Val][0].length != SpecText.VisNovel[Val][0].length)
				SpecText.VisNovel[Val][0] += SpecText.VisNovelT[Val][0][SpecText.VisNovel[Val][0].length];
				else SpecText.VisNovel = SpecText.VisNovelT;

			} else {

				if(SpecText.VisNovelT[0].length != SpecText.VisNovel[0].length)
				SpecText.VisNovel[0] += SpecText.VisNovelT[0][SpecText.VisNovel[0].length];
				else SpecText.VisNovel = SpecText.VisNovelT;
		
			}
			
		}
	
	}

	// --------------------------------- 3D Render ---------------------------------
	
	function Render3DWindow(Obj){

		var WindowData = Obj.Window,
			WinData = Obj.WindowObjects;
			
		if(WindowData.ScaleData.ScaleSim && WindowData.ScaleData.Scale < 1) WindowScale(WindowData,WindowData.ScaleData.ScaleSim);

		if(WindowData.Background)
		ctx.drawImage(Images[WindowData.Background.File], 0, 0, WindowData.Background.TMW, WindowData.Background.TMH, 0, 0, WindowData.Background.Width*MainData.PxW, WindowData.Background.Height*MainData.PxH);
		
		ctx.save();
		
		ctx.translate(WindowData.PX*MainData.PxW, WindowData.PY*MainData.PxH);
		ctx.scale(WindowData.ScaleData.Scale, WindowData.ScaleData.Scale);
		
		ctx.globalAlpha = WindowData.ScaleData.Alpha;

		for(var y = 0; y < WindowData.ObjectNumber; y++){	
			
			ctx.save();

				ctx.translate(WinData[y].PX*MainData.PxW, WinData[y].PY*MainData.PxH);
				
				ctx.drawImage(Images[WinData[y].File], WinData[y].TMX*WinData[y].AnX, WinData[y].TMY, WinData[y].TMW, WinData[y].TMH, 0, 0, WinData[y].Width*MainData.PxW, WinData[y].Height*MainData.PxH);
				
				if(WindowData.SpecText[y]) TextDraw(WindowData.SpecText[y]);
				
				if(WindowData.Draw3D == y)
				Render3D();

			ctx.restore();
            
		}
		
		ctx.restore();

	}

	function Render3D(){

		SpecText.InfoRender = [
			Text[MainData.Language].Re0,
			" ",
			Text[MainData.Language].Re1+Render3DTD.AutoCam,
			Text[MainData.Language].Re2+Render3DTD.Sky,
			Text[MainData.Language].Re3+Render3DTD.Texture,
			Text[MainData.Language].Re4+Render3DTD.AlphaNoTexture,
			Text[MainData.Language].Re5+Camera3D.TopDownControl,
			Text[MainData.Language].Re5_1+Camera3D.Keyboard_Mouse_Control,
			Text[MainData.Language].Re6+Render3DTD.Look2D,
			Text[MainData.Language].Re7+Render3DTD.Look3D,
			" ",
			Text[MainData.Language].Re8+Math.round(Camera3D.cX),
			Text[MainData.Language].Re9+Math.round(Camera3D.cY),
			Text[MainData.Language].Re10+Camera3D.cZ,
			Text[MainData.Language].Re11+Camera3D.Degree,
			Text[MainData.Language].Re12+Camera3D.WorldHeight,
			Text[MainData.Language].Re13+Camera3D.Sky,
			" ",
			Text[MainData.Language].Re14+Camera3D.Speed,
			Text[MainData.Language].Re15+Camera3D.Quality,
			Text[MainData.Language].Re16+Camera3D.Distance,
			Text[MainData.Language].Re17+Camera3D.Accuracy,
			Text[MainData.Language].Re18+Camera3D.SHeight,
			Text[MainData.Language].Re19+Camera3D.SWidth,
			"",
			Text[MainData.Language].Re20+Camera3D.SPX,
			Text[MainData.Language].Re21+Camera3D.SPY,
			Text[MainData.Language].Re22+Camera3D.SPZ,
		];

		if(Render3DTD.Look3D){

			ctx.save();

				ctx.beginPath();
				ctx.rect(Camera3D.SPX*MainData.PxW, Camera3D.SPY*MainData.PxH, Camera3D.SWidth*MainData.PxW, Camera3D.SHeight*MainData.PxH);
				ctx.clip();	
				
					if(Render3DTD.Sky){
					
						ctx.beginPath();
						ctx.fillStyle = "#00238c";
						ctx.fillRect(Camera3D.SPX * MainData.PxW, Camera3D.SPY * MainData.PxH, Render3DTD.Width * MainData.PxW, Camera3D.Sky * MainData.PxH);
						ctx.stroke();
		
					}
				
					if(Render3DTD.Floor){
					
						ctx.beginPath();
						ctx.fillStyle = "#005913";
						ctx.fillRect(Camera3D.SPX * MainData.PxW, (Camera3D.SPY+Camera3D.Sky) * MainData.PxH, Render3DTD.Width * MainData.PxW, (Camera3D.SHeight-Camera3D.Sky) * MainData.PxH);
						ctx.stroke();
		
					}
				
					ctx.save();
						ctx.translate(Camera3D.SPX*MainData.PxW, (Camera3D.SPY+Camera3D.SHeight-Camera3D.SPZ)*MainData.PxH);

						var x = 0;

						for (var y = 0; y < Camera3D.Rays.length; y++)
						for (var x = Camera3D.Rays[y].length-1; x > -1; x--)
						if(Render3DTD.Texture){
						
							if(Camera3D.Rays[y][x].File)
							ctx.drawImage(Images[Camera3D.Rays[y][x].File], 
								Camera3D.Rays[y][x].SX, Camera3D.Rays[y][x].TMH_S, 
								Camera3D.Rays[y][x].EX, Camera3D.Rays[y][x].TMH_E,
								(y*Camera3D.SWidth/Camera3D.Quality)* MainData.PxW, 
								Camera3D.Rays[y][x].Start * MainData.PxH, 
								(1+Camera3D.SWidth/Camera3D.Quality) * MainData.PxW, 
								-Camera3D.Rays[y][x].End * MainData.PxH);
							
						} else {

							ctx.beginPath();

							if(Render3DTD.AlphaNoTexture){
							
								if(Number("0."+Math.round(Camera3D.Rays[y][x].End-Camera3D.Rays[y][x].Start)) > 0.1 )
								ctx.globalAlpha = (Number("0."+Math.round(Camera3D.Rays[y][x].End-Camera3D.Rays[y][x].Start)));

							}
							
							if(Camera3D.Rays[y][x].Data.File == "Wall_1") ctx.fillStyle = "black";
							else ctx.fillStyle = "gray";

							ctx.fillRect(
										(y*Camera3D.SWidth/Camera3D.Quality)* MainData.PxW, 
										Camera3D.Rays[y][x].Start * MainData.PxH, 
										(2+Camera3D.SWidth/Camera3D.Quality) * MainData.PxW, 
										-Camera3D.Rays[y][x].End * MainData.PxH
										);
							ctx.stroke();

						}
						
					ctx.closePath();
					ctx.restore();

			ctx.restore();
			
		}

		if(Render3DTD.Look2D){

			ctx.save();

			if(Render3DTD.Look3D)
			ctx.globalAlpha = 0.3;

			ctx.beginPath();
			ctx.rect(Camera3D.SPX * MainData.PxW, Camera3D.SPY * MainData.PxH, Render3DTD.Width * MainData.PxW, Render3DTD.Height * MainData.PxH);
			ctx.clip();	
			
				for(var y = 0; y < Render3DTD.Objects.length; y++)	
				ctx.drawImage(Images[Render3DTD.Objects[y].File], Render3DTD.Objects[y].TMX, Render3DTD.Objects[y].TMY, Render3DTD.Objects[y].TMW, Render3DTD.Objects[y].TMH, Render3DTD.Objects[y].PX*MainData.PxW, Render3DTD.Objects[y].PY*MainData.PxH,Render3DTD.Objects[y].Width*MainData.PxW, Render3DTD.Objects[y].Height*MainData.PxH);
					
				ctx.save();
				ctx.beginPath();
				
					for (var y = 0; y < Camera3D.Rays.length; y++) {

						ctx.moveTo(Camera3D.Rays[y][0].SPX* MainData.PxW, Camera3D.Rays[y][0].SPY* MainData.PxH);
						ctx.lineTo(Camera3D.Rays[y][0].EPX* MainData.PxW, Camera3D.Rays[y][0].EPY* MainData.PxH);

					}

				ctx.stroke();
				ctx.restore();

			ctx.closePath();

			ctx.restore();
		
		}
		
		if(!MainData.SystemPaused)
		HeroMove();

	}

	// Rays

	function Rays(X,Y){
		
		Camera3D.Rays = [];

		var EpX = Camera3D.cX, 
			EpY = Camera3D.cY, 
			EpZ = 0,
			Check = true,
			Degree = 90+(Camera3D.Degree/2),
			AddDegre = Camera3D.Degree/Camera3D.Quality;
		
		for (var y = 0; y < Camera3D.Quality; y++) {
			
			var Ignore = [];

			Camera3D.Rays.push([]);

			var MathDegree = RotateVector([X-EpX,Y-EpY], Degree),
				Angle = -Math.atan2(MathDegree[0], MathDegree[1]),
				XMove = (Camera3D.Accuracy * Math.cos(Angle)) + Number.EPSILON,
				YMove = (Camera3D.Accuracy * Math.sin(Angle)) + Number.EPSILON;
				
			for(var x = 0; x < Camera3D.Distance && Check == true; x++){
	
				if(x == Camera3D.Distance-1 && Check){

					Check = false;
					
				var Distance = Camera3D.WorldHeight/LineWidth(EpX,EpY,Camera3D.cX,Camera3D.cY);
					
					Camera3D.Rays[Camera3D.Rays.length-1].push({

						SPX: Camera3D.cX, 
						SPY: Camera3D.cY,
						EPX: EpX,
						EPY: EpY,

						Start: 0, // Distance*(Camera3D.cZ), 
						End: 0, // Distance*(Camera3D.WorldHeight+Camera3D.cZ), 

						Data: RenderObjects["Black"].Data, 
						Num: -2, 
						Type: 0,

						File: RenderObjects["Black"].Render.File, 
						TMW: RenderObjects["Black"].Render.TMW, 
						TMW_2: RenderObjects["Black"].Render.TMW_2, 
						SX: 0, 
						EX: 20, 
						
					});
					
				} else {

					var Wall = WallCheck(EpX-XMove,EpY-YMove,EpX,EpZ,Ignore);

					if(!Wall){

						EpX -= XMove;
						EpY -= YMove;
						
					} else {
						
						EpX = Wall[0];
						EpY = Wall[1];
						
					var Distance = Camera3D.WorldHeight/LineWidth(EpX,EpY,Camera3D.cX,Camera3D.cY);
					
						Camera3D.Rays[Camera3D.Rays.length-1].push({

							SPX: Camera3D.cX, 
							SPY: Camera3D.cY,
							EPX: EpX,
							EPY: EpY,
							
							Start: Distance*(Wall[4].RPZ+Camera3D.cZ), 
							End: Distance*(Wall[4].RHeight), 

							Data: Wall[4], // Object data
							Num: Wall[2], // object number
							Type: Wall[3], // object wall

							File: RenderObjects[Wall[4].Render][Wall[3]].File, // file to be rendered
							TMW: RenderObjects[Wall[4].Render][Wall[3]].TMW, // file width
							TMW_2: RenderObjects[Wall[4].Render][Wall[3]].TMW_2, // file width 2 - other wall
							SX: 0, // start drawing image from file - width
							EX: 0, // end of drawing image from file - width

							TMH_S: 0, //RenderObjects[Wall[4].Render][Wall[3]].TMH, // file height start
							TMH_E: RenderObjects[Wall[4].Render][Wall[3]].TMH_2, // file height end
							
						});	
						
						Ignore.push(Wall[2]);

						EpZ = Wall[4].RHeight+Wall[4].RPZ;	

						if(Wall[4].Wall)
						Check = false;
	
					}

				}

				if(!Check){

					EpX = Camera3D.cX;
					EpY = Camera3D.cY;
					EpZ = Camera3D.cZ;

				}

			}
			
			Degree -= AddDegre;

			Check = true;
			
		}

		if(Render3DTD.Texture)
		SetTextures();

		OptimDrawHeight();

	}

	function WallCheck(Xm,Ym,Px,Pz,Ignore){

		for(var y = 0; y < Render3DTD.Objects.length; y++){
			
			var Check = true;

			for (var x = 0; x < Ignore.length; x++) 
			if(Ignore[x] == y) Check = false;
				 
			if( Check && 
				((Render3DTD.Objects[y].RHeight+Render3DTD.Objects[y].RPZ) > Pz || Camera3D.Rays[Camera3D.Rays.length-1].length < 1) &&
				Xm >= Render3DTD.Objects[y].PX &&
				Ym >= Render3DTD.Objects[y].PY &&  
				Xm <= Render3DTD.Objects[y].PX+Render3DTD.Objects[y].Width && 
				Ym <= Render3DTD.Objects[y].PY+Render3DTD.Objects[y].Height){

				if( Px >= Render3DTD.Objects[y].PX && 
					Px <= Render3DTD.Objects[y].PX+Render3DTD.Objects[y].Width){

					if(Ym >= Render3DTD.Objects[y].PY && Ym <= Render3DTD.Objects[y].PY+Render3DTD.Objects[y].Height/2) 
						return [Xm,Ym,y,0,Render3DTD.Objects[y]]; 
					else if(Ym <= Render3DTD.Objects[y].PY+Render3DTD.Objects[y].Height) 
						return [Xm,Ym,y,2,Render3DTD.Objects[y]];
				
				} else
				
				if(Xm >= Render3DTD.Objects[y].PX && Xm <= Render3DTD.Objects[y].PX+Render3DTD.Objects[y].Width/2) 
					return [Xm,Ym,y,1,Render3DTD.Objects[y]];
				else if(Xm <= Render3DTD.Objects[y].PX+Render3DTD.Objects[y].Width) 
					return [Xm,Ym,y,3,Render3DTD.Objects[y]];
		
			}
			
		}	
		
		return false;

	}

	function SetTextures(){

		var ObjTabY = 0;

		for (var y = 0; y < Camera3D.Rays.length; y++) 
		if(Camera3D.Rays[y].length > ObjTabY)
		ObjTabY = Camera3D.Rays[y].length;

		for (var z = 0; z < ObjTabY; z++){

			var ObjTab = [], 
				Obj = null, 
				Type = null, 
				Counter = 0;

			for (var y = 0; y < Camera3D.Rays.length; y++){

				var Ray = Camera3D.Rays[y][z];

				if(Ray){
				
					if(Ray.Num != Obj || Ray.Type != Type) // If another object or wall
					{ 
						
						if(ObjTab[ObjTab.length-1] && Camera3D.Rays[y-1][z])
						ObjTab[ObjTab.length-1].EPoint = SEPointSet(Type,Camera3D.Rays[y-1][z]);
							
						Obj = Ray.Num; 
						Type = Ray.Type; 
	
						ObjTab.push({
	
							Num: Obj, // Object number
							Type: Type, // Which wall
							Length : 0, // number of lines in x
							SPoint : 0, // Starting point for drawing in graphics x
							EPoint : 0, // Drawing end point in graphics x
	
						})
	
						ObjTab[ObjTab.length-1].SPoint = SEPointSet(Type,Ray);
					
					}

				} else if(ObjTab.length == 0 || !ObjTab[ObjTab.length-1].Fake) {

					if(ObjTab[ObjTab.length-1] && Camera3D.Rays[y-1][z])
					ObjTab[ObjTab.length-1].EPoint = SEPointSet(Type,Camera3D.Rays[y-1][z]);
						
					ObjTab.push({
	
						Fake: true,
						Num: -2, // Object number
						Type: 0, // Which wall
						Length : 0, // number of lines in x
						SPoint : 0, // Starting point for drawing in graphics x
						EPoint : 0, // Drawing end point in graphics x

					})

				}
				
				ObjTab[ObjTab.length-1].Length++;

			}
		
			if(ObjTab.length > 0){

				if(Camera3D.Rays[Camera3D.Rays.length-1][z])
				ObjTab[ObjTab.length-1].EPoint = SEPointSet(ObjTab[ObjTab.length-1].Type,Camera3D.Rays[Camera3D.Rays.length-1][z]);
				
				for (var x = 0; x < ObjTab.length; x++){
					
					var pX = ObjTab[x].SPoint;
						
					for (var y = 0; y < ObjTab[x].Length; y++){

						if(Camera3D.Rays[Counter][z]){
						
							var WSz = (Camera3D.Rays[Counter][z].TMW-Math.abs(Camera3D.Rays[Counter][z].TMW-ObjTab[x].EPoint)-
							ObjTab[x].SPoint)/ObjTab[x].Length;
							
							if(ObjTab[x].Num != -2){
	
								Camera3D.Rays[Counter][z].SX = pX;
								Camera3D.Rays[Counter][z].EX = WSz;
	
								pX += WSz;
	
							}
	
						}
						
						Counter++;
	
					} 
					
				} 

			}
			
		} 

	}

	function SEPointSet(Type,Obj){

		if(Type == 0 || Type == 2){
			
			if(Type == 2) return (Obj.EPX-Obj.Data.PX)*(Obj.TMW/Obj.Data.Width);
			else return (Math.abs(Obj.EPX-(Obj.Data.PX+Obj.Data.Width)))*(Obj.TMW/Obj.Data.Width);
			
		} else {

			if(Type == 1) return (Obj.EPY-Obj.Data.PY)*(Obj.TMW_2/Obj.Data.Height);
			else return (Math.abs(Obj.EPY-(Obj.Data.PY+Obj.Data.Height)))*(Obj.TMW_2/Obj.Data.Height);
			
		} 

	}

	function OptimDrawHeight(){

		return;

		for (var y = 0; y < Camera3D.Rays.length; y++){

			var Ray = Camera3D.Rays[y];
			
			for (var x = 1; x < Ray.length; x++){

				var check_S = Camera3D.Rays[y][x].Start,
					check_E = Camera3D.Rays[y][x].End,
					h_S = Camera3D.Rays[y][x-1].Start,
					h_E = Camera3D.Rays[y][x-1].End;
				
				if(h_S > check_S && check_E < h_E){

					Camera3D.Rays[y][x].End = 0;
					Camera3D.Rays[y][x].Start = 0;

				} else if(check_E > h_E){
				
					var Wall_H_Full = JSON.parse(JSON.stringify(Camera3D.Rays[y][x].End));

					Camera3D.Rays[y][x].End = Math.abs(JSON.parse(JSON.stringify((Camera3D.Rays[y][x-1].Start-Camera3D.Rays[y][x-1].End)-(Camera3D.Rays[y][x].Start-Camera3D.Rays[y][x].End))));
					Camera3D.Rays[y][x].Start = JSON.parse(JSON.stringify(Camera3D.Rays[y][x-1].Start-Camera3D.Rays[y][x-1].End));
				
					Camera3D.Rays[y][x].TMH_E = Camera3D.Rays[y][x].TMH_E*((Camera3D.Rays[y][x].End/Wall_H_Full));

				}
				
			}

		}
		
	}

	// Hero Control

	function HeroControlK(Key){

		if(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.Name == "W18"){

			if(Key == "f") Camera3D.cZ -= 5;
			if(Key == "g") Camera3D.cZ += 5;
	
			if(Key == "h") Camera3D.Degree -= 5;
			if(Key == "j") Camera3D.Degree += 5;
	
			if(Key == "k") Camera3D.WorldHeight -= 5;
			if(Key == "l") Camera3D.WorldHeight += 5;
	
			if(Key == "v") Camera3D.SPZ -= 5;
			if(Key == "b") Camera3D.SPZ += 5;

			if(Key == "n") Camera3D.Sky -= 5;
			if(Key == "m") Camera3D.Sky += 5;

			if(Key == "z") Camera3D.Quality -= 5;
			if(Key == "x") Camera3D.Quality += 5;

			if(Key == "1") Camera3D.Distance -= 5;
			if(Key == "2") Camera3D.Distance += 5;

			if(Key == "3") Camera3D.Accuracy -= 0.1;
			if(Key == "4") Camera3D.Accuracy += 0.1;

		}

	}

	function HeroMove(){

		if(!Render3DTD.AutoCam){

			var MoveY = 0,
				MoveX = 0;

			if(Camera3D.TopDownControl){

				if(Keyboard.key.down) MoveY = Camera3D.Speed;
				if(Keyboard.key.up) MoveY = -Camera3D.Speed;
				if(Keyboard.key.right) MoveX = Camera3D.Speed;
				if(Keyboard.key.left) MoveX = -Camera3D.Speed;
			
				Camera3D.cX += MoveX;
				Camera3D.cY += MoveY;
			
				var ActWin = WindowDrawList[WindowDrawList.length-1];
				
				if(WindowList[ActWin].Window.Name == "W18")
				if( MainData.TouchX > MainData.DiffX+(WindowList[ActWin].Window.PX+Camera3D.SPX)* MainData.PxW && 
					MainData.TouchY > MainData.DiffY+(WindowList[ActWin].Window.PY+Camera3D.SPY)* MainData.PxH && 
					MainData.TouchX < MainData.DiffX+(WindowList[ActWin].Window.PX+Camera3D.SPX+Camera3D.SWidth)* MainData.PxW && 
					MainData.TouchY < MainData.DiffY+(WindowList[ActWin].Window.PY+Camera3D.SPY+Camera3D.SHeight)* MainData.PxH)
				Rays(Math.abs(WindowList[ActWin].Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
					Math.abs(WindowList[ActWin].Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
	   	
			} else {

				if(!Camera3D.Keyboard_Mouse_Control){

					var Move = 0;

					if(Keyboard.key.left) Camera3D.cAngle += 2.5;
					if(Keyboard.key.right) Camera3D.cAngle -= 2.5;
					
					if(Keyboard.key.down) Move = -Camera3D.Player_Speed;
					else if(Keyboard.key.up) Move = Camera3D.Player_Speed;
	
					if(Camera3D.cAngle < 0) Camera3D.cAngle = 359;
					if(Camera3D.cAngle > 360) Camera3D.cAngle = 0;
	
					var rad = Camera3D.cAngle * Math.PI / 180;
					
						Camera3D.cX += Move * Math.cos(rad);
						Camera3D.cY += -Move * Math.sin(rad);
	
						var x = Camera3D.cX + 1 * Math.cos(rad);
						var y = Camera3D.cY - 1 * Math.sin(rad);
					
					Rays(x,y);
	
				} else {

					if(MainData.Mouse_Vectors_Save[0] != MainData.TouchX) MainData.Mouse_Vectors[0] = MainData.TouchX-MainData.Mouse_Vectors_Save[0];
					else MainData.Mouse_Vectors[0] = 0;
	
                    if(MainData.Mouse_Vectors_Save[1] != MainData.TouchY) { 

                        MainData.Mouse_Vectors[1] = MainData.TouchY-MainData.Mouse_Vectors_Save[1];
    
                        if(MainData.Mouse_Vectors[1] > 0) MainData.Mouse_Vectors[1] = 1;
                        else MainData.Mouse_Vectors[1] = -1;
                    
                    } else MainData.Mouse_Vectors[1] = 0;
    
					MainData.Mouse_Vectors_Save = [MainData.TouchX,MainData.TouchY];
	
					var Move_Front = 0, 
						Move_Side = 0;

					if(Keyboard.key.down) Move_Front = -Camera3D.Player_Speed;
					else if(Keyboard.key.up) Move_Front = Camera3D.Player_Speed;
	
					if(Keyboard.key.left) Move_Side = -Camera3D.Player_Speed;
					else if(Keyboard.key.right) Move_Side = Camera3D.Player_Speed;
					
					Camera3D.cAngle -= MainData.Mouse_Vectors[0]*Camera3D.Camera_X_Speed;
					
						Camera3D.Camera_Math_Boundries[0] = ((Math.abs(Camera3D.Camera_Max_Boundries[0])+Math.abs(Camera3D.Camera_Min_Boundries[0]))/10)*Camera3D.Camera_Y_Speed;
						Camera3D.Camera_Math_Boundries[1] = ((Math.abs(Camera3D.Camera_Max_Boundries[1])+Math.abs(Camera3D.Camera_Min_Boundries[1]))/10)*Camera3D.Camera_Y_Speed;
						Camera3D.Camera_Math_Boundries[2] = ((Math.abs(Camera3D.Camera_Max_Boundries[2])+Math.abs(Camera3D.Camera_Min_Boundries[2]))/10)*Camera3D.Camera_Y_Speed; //(Camera3D.Camera_Max_Boundries[2]-Camera3D.Camera_Default_Boundries[2])*

					if(Camera3D.cZ < Camera3D.Camera_Max_Boundries[0]) Camera3D.cZ = Camera3D.Camera_Max_Boundries[0];
					else if(Camera3D.cZ > Camera3D.Camera_Min_Boundries[0]) Camera3D.cZ = Camera3D.Camera_Min_Boundries[0];
					else Camera3D.cZ -= MainData.Mouse_Vectors[1]*Camera3D.Camera_Math_Boundries[0];

					if(Camera3D.Sky > Camera3D.Camera_Max_Boundries[1]) Camera3D.Sky = Camera3D.Camera_Max_Boundries[1];
					else if(Camera3D.Sky < Camera3D.Camera_Min_Boundries[1]) Camera3D.Sky = Camera3D.Camera_Min_Boundries[1];
					else Camera3D.Sky -= MainData.Mouse_Vectors[1]*Camera3D.Camera_Math_Boundries[1];

					if(Camera3D.SPZ < Camera3D.Camera_Max_Boundries[2]) Camera3D.SPZ = Camera3D.Camera_Max_Boundries[2];
					else if(Camera3D.SPZ > Camera3D.Camera_Min_Boundries[2]) Camera3D.SPZ = Camera3D.Camera_Min_Boundries[2];
					else Camera3D.SPZ += MainData.Mouse_Vectors[1]*Camera3D.Camera_Math_Boundries[2];
						
					if(Camera3D.cAngle < 0) Camera3D.cAngle = 359;
					if(Camera3D.cAngle > 360) Camera3D.cAngle = 0;
	
					var rad = Camera3D.cAngle * Math.PI / 180;

						Camera3D.cX += Move_Front * Math.cos(rad);
						Camera3D.cY += -Move_Front * Math.sin(rad);

						if(Move_Side != 0){

							var Angle2 = Camera3D.cAngle-90;

							if(Angle2 < 0) Angle2 = 359+Angle2;
							if(Angle2 > 360) Angle2 = 0-Angle2;
							
							var rad2 = Angle2 * Math.PI / 180;
		
							Camera3D.cX += Move_Side * Math.cos(rad2);
							Camera3D.cY += -Move_Side * Math.sin(rad2);

						}

						var x = Camera3D.cX + 1 * Math.cos(rad);
						var y = Camera3D.cY - 1 * Math.sin(rad);
					
					Rays(x,y);

					console.log(Camera3D.Sky/(Camera3D.Camera_Max_Boundries[1]+Camera3D.Camera_Min_Boundries[1]));

					console.log();

				}

			}

		} else {

			if(Render3DTD.TestCamera.Counter == -1){

				Render3DTD.TestCamera.List.push({

                    "PX_R": Render3DTD.TestCamera.PX,
                    "PY_R": Render3DTD.TestCamera.PY,

				});

				var XEnd = Render3DTD.Path[Render3DTD.TestCamera.Num][0],
					YEnd = Render3DTD.Path[Render3DTD.TestCamera.Num][1],
				
					Speed = Render3DTD.Path[Render3DTD.TestCamera.Num][2];

				var dx = Render3DTD.TestCamera.PX-XEnd,
					dy = Render3DTD.TestCamera.PY-YEnd,
					angle = Math.atan2(dy, dx);
				
					Render3DTD.TestCamera.XMove = Math.round(((Speed * Math.cos(angle)) + Number.EPSILON) * 100) / 100;
					Render3DTD.TestCamera.YMove = Math.round(((Speed * Math.sin(angle)) + Number.EPSILON) * 100) / 100;
					
					if(Render3DTD.TestCamera.XMove)
					Render3DTD.TestCamera.Counter = Math.round(Math.abs((Render3DTD.TestCamera.PX-XEnd)/Render3DTD.TestCamera.XMove));
					else Render3DTD.TestCamera.Counter = Math.round(Math.abs((Render3DTD.TestCamera.PY-YEnd)/Render3DTD.TestCamera.YMove));

			} else {

				Render3DTD.TestCamera.PX -= Render3DTD.TestCamera.XMove;
				Render3DTD.TestCamera.PY -= Render3DTD.TestCamera.YMove;
				
				Render3DTD.TestCamera.List.push({

                    "PX_R": Render3DTD.TestCamera.PX,
                    "PY_R": Render3DTD.TestCamera.PY,

				});

				var List = [];

				if(Render3DTD.TestCamera.List.length > 30){
					
					for (var x = 1; x < Render3DTD.TestCamera.List.length; x++)
					List.push(Render3DTD.TestCamera.List[x]);
					
					Render3DTD.TestCamera.List = List;
	
				}
				
				if(Render3DTD.TestCamera.Counter == 0){

					Render3DTD.TestCamera.Counter = -1;
					Render3DTD.TestCamera.Num++;

					if(Render3DTD.TestCamera.Num == Render3DTD.Path.length)
					Render3DTD.TestCamera.Num = 0;

				} else Render3DTD.TestCamera.Counter--;

			}
	
			Camera3D.cX = Render3DTD.TestCamera.List[0].PX_R;
			Camera3D.cY = Render3DTD.TestCamera.List[0].PY_R;

			Rays(
				Render3DTD.TestCamera.PX,
				Render3DTD.TestCamera.PY
			);
			
		}
				
	}

	// Math

	function RotateVector(vec,ang){

		ang = -ang * (Math.PI/180);
		var cos = Math.cos(ang);
		var sin = Math.sin(ang);
		return new Array(Math.round(10000*(vec[0] * cos - vec[1] * sin))/10000, Math.round(10000*(vec[0] * sin + vec[1] * cos))/10000);

	}

	function LineWidth(x,y,x0,y0){

		return Math.sqrt( ( x -= x0 ) * x + ( y -= y0 ) * y );

	}

	// ---------------------------- Open World System ----------------------------
	
	function CreateWorld(MapNum){
		
		if(MapNum != null)
		OPCamera.AMap = OPCamera.MapNum[MapNum];

		var Map = Maps_Data[OPCamera.AMap];
		
			OpenWorldData[OPCamera.AMap].Pause = false;
			OpenWorldData[OPCamera.AMap].Work = true;
			GameData.Wave = null;

			if(Map.Reset || !OPCamera[OPCamera.AMap].MapBuild){
				
				OPCamera[OPCamera.AMap].Control = true;

					Map.All = [];
					Map.Chunks = [];
					
					OPCamera[OPCamera.AMap].PX = Map.CPX;
					OPCamera[OPCamera.AMap].PY = Map.CPY;

					OPCamera[OPCamera.AMap].NPCList = [];
					OPCamera[OPCamera.AMap].NPCDrawL = [];
					OPCamera[OPCamera.AMap].SortList = [];
					OPCamera[OPCamera.AMap].ObjectList = [];
					OPCamera[OPCamera.AMap].SBuildList = [];

					Map.NetSize = Map.Size/Map.Net;
					Map.CHSizeX = (Map.MapSizeX*Map.Size)-Map.CHX*2;
					Map.CHSizeY = (Map.MapSizeY*Map.Size)-Map.CHY*2;

					for (var x = 0; x < Map.MapSizeY; x++){
						Map.All.push([]);	
						for (var y = 0; y < Map.MapSizeX; y++)
						Map.All[x].push((Map.MapSizeX*x)+y);	
					}

					for (var x = 0; x < Map.MapSizeX*Map.MapSizeY; x++){

						var Val = 0;

						Map.Chunks.push({
							
							Background: null,
							Objects:[],
							Net: [],

						}); 

						for (var z = 0; z < Map.Net; z++)
						for (var y = 0; y < Map.Net; y++){

							Map.Chunks[x].Net.push({

								PX:y*Map.NetSize,
								PY:z*Map.NetSize,
								Object: Maps_Data[OPCamera.AMap].NetBlocade[x][Val],
								ObjectD: null

							});

							Val++;

						}

					}

					for (var y = 0; y < Map.MapSizeY; y++)for (var x = 0; x < Map.MapSizeX; x++)
					Map.Chunks[(y*Map.MapSizeX)+x].Background = Map.Map[y][x];
					
					StartBuildings(Map);

					for(var y = 0; y < Map.MapSizeY; y++)  
					for(var x = 0; x < Map.MapSizeX; x++){
					
						var Chunk = Map.Chunks[(Map.MapSizeX*y)+x];

						for(var z = 0; z < Chunk.Objects.length; z++) {
						
							var Obj = Chunk.Objects[z];
							
							Obj.PX += Map.Size*x;
							Obj.PY += Map.Size*y;
				
						}

						for(var z = 0; z < Chunk.Net.length; z++) {
						
							var Obj = Chunk.Net[z];
							
							Obj.PX += Map.Size*x;
							Obj.PY += Map.Size*y;
				
						}

					}
	
				OPCamera[OPCamera.AMap].MapBuild = true;

				if(Map.StartWave != null){

					GameData.WaveGroup = Map.StartWave;
	
					GameData.Wave = 0;
					GameData.WTime = 0;
					GameData.WPlace = 0;
					GameData.NumberD = 0;
			
				}
	
				if(Map.NormalSpawn){

					for (var x = 0; x < NPCNormalSpawn[GameData.WaveGroup].length; x++) {
			
						var Waves = NPCNormalSpawn[GameData.WaveGroup][x];
					
						AddNPC( 
							MapObjects[Waves.Type], 
							Waves.PX,
							Waves.PY,
							OPCamera.AMap,
							null
						);

						SetMoveList(OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCList.length-1],Waves.Path);
				
					}

				}
		
			}

			IntervalStart();

		CameraMove();
		ChangeObjects();
		NetHB( Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
			   Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
	
		if(Maps_Data[OPCamera.AMap].Weather)
		if(Maps_Data[OPCamera.AMap].Weather.RainWork){

			clearInterval(OpenWorldData[OPCamera.AMap].AddRain);
			OpenWorldData[OPCamera.AMap].AddRain = setInterval(AddRain,Maps_Data[OPCamera.AMap].Weather.Rain.SpeedRain);

			clearInterval(OpenWorldData[OPCamera.AMap].AddFall);
			OpenWorldData[OPCamera.AMap].AddFall = setInterval(AddFall,Maps_Data[OPCamera.AMap].Weather.Rain.SpeedFall);

		}
		
	}

	function StartBuildings(Map){

		var Build = Map.Buildings;

		for (var x = 0; x < Build.length; x++) {
			
			var ID = AddMapObject(
					MapObjects[Build[x].BuildN].Data, 
					Build[x].Chunk,
					Map.Chunks[Build[x].Chunk].Net[Build[x].Net].PX+MapObjects[Build[x].BuildN].Build.PX-MapObjects[Build[x].BuildN].Data.HitBox.PX,
					Map.Chunks[Build[x].Chunk].Net[Build[x].Net].PY+MapObjects[Build[x].BuildN].Build.PY-MapObjects[Build[x].BuildN].Data.HitBox.PY,
					OPCamera.AMap, 
					MapObjects[Build[x].BuildN].Spec,
					null,
					Build[x].PlaceC
				);
	
			Map.Chunks[Build[x].Chunk].Net[Build[x].Net].Object = true;
			Map.Chunks[Build[x].Chunk].Net[Build[x].Net].ObjectD = {
				
				"ID": ID,
				"Chunk": Build[x].Chunk,
				"List": [Build[x].Chunk]

			};
		
		}

		if(OPCamera.AMap == 2)
		for (var x = 0; x < OPCamera[OPCamera.AMap].SBuildList.length; x++)
		Maps_Data[OPCamera.AMap].Crystals.List.push(OPCamera[OPCamera.AMap].SBuildList[x].ID);
	
	}

	function WavesSystem(){
	
		if(!Maps_Data[OPCamera.AMap].NormalSpawn)
		if(GameData.Wave != null) {
			
			for (var x = GameData.WPlace; x < NPCSpawnList[GameData.Wave].length; x++) {
			
				var Wave = NPCSpawnList[GameData.Wave][x];
	
				if(GameData.WTime >= Wave.Time+GameData.NumberD){
				
					if(Wave.Path != null){
					
						for (var y = 0; y < Wave.Number; y++) {
							
							var Range = [
								-Wave.Range+Math.floor((Math.random() * (Wave.Range*2))),
								-Wave.Range+Math.floor((Math.random() * (Wave.Range*2)))
							];
		
							AddNPC( 
									MapObjects[Wave.Type], 
									Wave.PX+Range[0], 
									Wave.PY+Range[1], 
									OPCamera.AMap,
									Wave.Path
								);
		
							SetMoveList(OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCList.length-1],Wave.Path);
				
						}
	
					} else for (var y = 0; y < Wave.Number; y++) {
			
						var Range = [
							-Wave.Range+Math.floor((Math.random() * (Wave.Range*2))),
							-Wave.Range+Math.floor((Math.random() * (Wave.Range*2)))
						];
	
						AddNPC( 
							MapObjects[Wave.Type], 
							Wave.PX+Range[0], 
							Wave.PY+Range[1], 
							OPCamera.AMap,
							null
						);
	
					}
					
					if(!NPCSpawnList[GameData.Wave][x].Loop)
					GameData.WPlace++;
					else {

						if(GameData.NumberD < NPCSpawnList[GameData.Wave][x].Loop.Time*NPCSpawnList[GameData.Wave][x].Loop.Number)
						GameData.NumberD += NPCSpawnList[GameData.Wave][x].Loop.Time;
						else { 

							GameData.WPlace++; 
							GameData.NumberD = 0;

						}
 
					}

				}
				
			}

			GameData.WTime += 0.1;

			for (var x = 0; x < ControlWaves[GameData.Wave].length; x++) 
			if(GameData.KillCount[ControlWaves[GameData.Wave][x].Npc] >= ControlWaves[GameData.Wave][x].Kills)
			if(NPCSpawnList[GameData.Wave+1]) NPCSpawnList[GameData.Wave+1].Unlock = true; 
				
			if(GameData.WPlace >= NPCSpawnList[GameData.Wave].length)
			if(NPCSpawnList[GameData.Wave+1]) if(NPCSpawnList[GameData.Wave+1].Unlock)
			NextWave();
			
			if(!NPCSpawnList[GameData.Wave+1] && GameData.WPlace == NPCSpawnList[GameData.Wave].length){

				GameData.WTime = 0;
				GameData.Wave = null;
				GameData.NumberD = 0;
				GameData.WPlace = 0;

			}

		}
		
	}

	function NextWave(){

		GameData.Wave ++;
		GameData.WTime = 0;
		GameData.WPlace = 0;

	}

	function IntervalStart(){

		clearInterval(OpenWorldData[OPCamera.AMap].MapObjAnim);
		clearInterval(OpenWorldData[OPCamera.AMap].BuildingsAnimations);
		clearInterval(OpenWorldData[OPCamera.AMap].WavesSystem);

		OpenWorldData[OPCamera.AMap].MapObjAnim = setInterval(MapObjAnim,Maps_Data[OPCamera.AMap].AnimSpeed);
		OpenWorldData[OPCamera.AMap].BuildingsAnimations = setInterval(BuildingsAnimations,Maps_Data[OPCamera.AMap].BuildingsAnimations);
		OpenWorldData[OPCamera.AMap].WavesSystem = setInterval(WavesSystem,100);
		
	}

	// Draw World

	function OpenWorldDraw(Obj){

		var WindowData = Obj.Window,
			WinData = Obj.WindowObjects;
			
		if(WindowData.ScaleData.ScaleSim && WindowData.ScaleData.Scale < 1) WindowScale(WindowData,WindowData.ScaleData.ScaleSim);

		if(WindowData.Background)
		ctx.drawImage(Images[WindowData.Background.File], 0, 0, WindowData.Background.TMW, WindowData.Background.TMH, 0, 0, WindowData.Background.Width*MainData.PxW, WindowData.Background.Height*MainData.PxH);
		
		ctx.save();

		ctx.translate(WindowData.PX*MainData.PxW, WindowData.PY*MainData.PxH);
		ctx.scale(WindowData.ScaleData.Scale, WindowData.ScaleData.Scale);
		
		ctx.globalAlpha = WindowData.ScaleData.Alpha;

		for(var y = 0; y < WindowData.ObjectNumber; y++){	
			
			ctx.save();

				ctx.translate(WinData[y].PX*MainData.PxW, WinData[y].PY*MainData.PxH);
				
				ctx.drawImage(Images[WinData[y].File], WinData[y].TMX*WinData[y].AnX, WinData[y].TMY, WinData[y].TMW, WinData[y].TMH, 0, 0, WinData[y].Width*MainData.PxW, WinData[y].Height*MainData.PxH);
				
				if(WindowData.List) if(WindowData.List.ListNum == y) Obj.ListFunction();
				
				if(WindowData.SpecText[y]) TextDraw(WindowData.SpecText[y]);

				if(WindowData.DrawWorld == y) {
				
					ctx.beginPath();	
					ctx.rect(WinData[y].PXw*MainData.PxW, WinData[y].PYw*MainData.PxH, WinData[y].Widthw*MainData.PxW, WinData[y].Heightw*MainData.PxH);
					ctx.clip();	
					ctx.translate(WinData[y].PXw*MainData.PxW, WinData[y].PYw*MainData.PxH);
					
						WorldDrawer();

					ctx.closePath();
				
				}

			ctx.restore();
            
		}

		ctx.restore();
        
	}
	
	function WorldDrawer(){
	
		if(AddData.ActualObelisk != null && AddData.ActualObelisk.AnX == 0)
		var GGH = true; else var GGH = false;

		if(OPCamera[OPCamera.AMap].NPCList[0])
		SpecText.InfoOpen = [
			Text[MainData.Language].B0+AddData.PointsRD,
			" ",
			Text[MainData.Language].B1,
			" ",
			Text[MainData.Language].B2+GGH,
			Text[MainData.Language].B3,
			Text[MainData.Language].B4+OPCamera[OPCamera.AMap].NPCNumC,
			Text[MainData.Language].B5+OPCamera[OPCamera.AMap].Follow,
			Text[MainData.Language].B6+OPCamera[OPCamera.AMap].Control,
			Text[MainData.Language].B7+OPCamera[OPCamera.AMap].CamMove.Move,
			Text[MainData.Language].B8+AddData.RD_HitBox,
			Text[MainData.Language].B9+OPCamera[OPCamera.AMap].NPCCType,
			" ",
			Text[MainData.Language].B10+OPCamera[OPCamera.AMap].NPCList[0].LoopMove,
			Text[MainData.Language].B11,
			Text[MainData.Language].B12+Maps_Data[OPCamera.AMap].Weather.RainWork,
			Text[MainData.Language].B13+AddData.Zoom,
			Text[MainData.Language].B14,
			Text[MainData.Language].B15,
			" ",
			Text[MainData.Language].B16+OPCamera[OPCamera.AMap].NPCList.length,
			Text[MainData.Language].B17+OPCamera[OPCamera.AMap].SortList.length,
			Text[MainData.Language].B18+OPCamera[OPCamera.AMap].ObjectList.length,
		];

		if(OpenWorldData[OPCamera.AMap].ActBuilding == null){
			
			AddData.Build = false;
			SpecText.InfoOpenBuilding = [""];

		} else if(AddData.Build) {
			
			var Build = OpenWorldData[OPCamera.AMap].ActBuilding;
			SpecText.InfoOpenBuilding = [
				Text[MainData.Language].B19+Build.Live,
				"",
				Text[MainData.Language].B20+Build.Data.DyingA,
				Text[MainData.Language].B21+Build.Data.Bullet,
				Text[MainData.Language].B22+Build.Data.SpeedC,
				Text[MainData.Language].B23+Build.Data.Range,
			];

		}

		if(Maps_Data[OPCamera.AMap].Sort){
			
			OPCamera[OPCamera.AMap].SortList.sort(function(a, b){
				return (a.PY+a.Data.Height/2) - (b.PY+b.Data.Height/2);
			});
	
			OPCamera[OPCamera.AMap].NPCDrawL.sort(function(a, b){
				return (a.PY+a.Data.Height/2) - (b.PY+b.Data.Height/2);
			});
	
		}
		
		ctx.save();
		
		if(AddData.Zoom){
			
			ctx.translate(220*MainData.PxW, 160*MainData.PxH);
			ctx.scale(0.6, 0.6);
			
		}
		
		ctx.translate(-OPCamera[OPCamera.AMap].PX*MainData.PxW, -OPCamera[OPCamera.AMap].PY*MainData.PxH);
				
			for(var x = -Maps_Data[OPCamera.AMap].DChunksX; x < Maps_Data[OPCamera.AMap].DChunksX+1; x++)
			for(var y = -Maps_Data[OPCamera.AMap].DChunksY; y < Maps_Data[OPCamera.AMap].DChunksY+1; y++)
			if(OPCamera[OPCamera.AMap].InChY+y > -1 && OPCamera[OPCamera.AMap].InChX+x > -1 &&  
				OPCamera[OPCamera.AMap].InChY+y < Maps_Data[OPCamera.AMap].MapSizeY &&  
				OPCamera[OPCamera.AMap].InChX+x < Maps_Data[OPCamera.AMap].MapSizeX){
		
					var Chunk = Maps_Data[OPCamera.AMap].Chunks[Maps_Data[OPCamera.AMap].All[OPCamera[OPCamera.AMap].InChY+y][OPCamera[OPCamera.AMap].InChX+x]];
		
					ctx.drawImage(Images[Chunk.Background], 0, 0, Maps_Data[OPCamera.AMap].Size, Maps_Data[OPCamera.AMap].Size, ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChX)+(Maps_Data[OPCamera.AMap].Size*x))*MainData.PxW, ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChY)+(Maps_Data[OPCamera.AMap].Size*y))*MainData.PxH, Maps_Data[OPCamera.AMap].Size*MainData.PxW, Maps_Data[OPCamera.AMap].Size*MainData.PxH);
					
					if(OPCamera[OPCamera.AMap].Build != null)
					for (var z = 0; z < Chunk.Net.length; z++)
					if(!Chunk.Net[z].Object) 
					{

						ctx.beginPath();
						
						ctx.strokeStyle = Maps_Data[OPCamera.AMap].NetLook.Color;
						ctx.lineWidth = Maps_Data[OPCamera.AMap].NetLook.Width * MainData.PxW;
						ctx.rect(Chunk.Net[z].PX* MainData.PxW, Chunk.Net[z].PY* MainData.PxH, Maps_Data[OPCamera.AMap].NetSize* MainData.PxW, Maps_Data[OPCamera.AMap].NetSize* MainData.PxH);
						ctx.stroke();
		
						ctx.closePath();
			
					}
	
				}
				
			if(Maps_Data[OPCamera.AMap].Weather)
			if(Maps_Data[OPCamera.AMap].Weather.RainWork)
			for (var x = 0; x < OPCamera[OPCamera.AMap].SortList.length; x++){
				
				var Data = OPCamera[OPCamera.AMap].SortList[x];

				if(Data.Data.Blur){

					ctx.save();

					ctx.translate(Data.PX * MainData.PxW, Data.PY * MainData.PxH);
					
					ctx.scale(-1, 0.6);
					ctx.filter = "blur(1px)";

					ctx.globalAlpha = 0.4;

					ctx.rotate(Data.Route+(180*Math.PI/180));
							
					ctx.drawImage(Images[Data.File],Data.Data.TMX * Data.AnX, 
						Data.Data.TMY* Data.AnY ,Data.Data.TMW, Data.Data.TMH, 
						-(Data.Data.Width/2)* MainData.PxW, 
						-(Data.Data.Height/2+Data.Data.MHeight)* MainData.PxH, 
						Data.Data.Width * MainData.PxW, 
						Data.Data.Height * MainData.PxH);
					
					ctx.restore();
					
				} else if(!Data.Dying && !Data.Data.Nope) {

					var Mirr = Data.Data.Mirr;
					
					ctx.save();

					ctx.globalAlpha = 0.4;

					ctx.translate(Data.PX * MainData.PxW, Data.PY * MainData.PxH);
						
					ctx.rotate(Data.Route);
						
					ctx.drawImage(
						Images[Mirr.File],
						Mirr.TMX * Data.AnX, 
						Mirr.TMY * Data.AnY,
						Mirr.TMW, 
						Mirr.TMH, 
						-(Mirr.Width/2)* MainData.PxW, 
						-(Mirr.Height/2+Data.Data.MHeight)* MainData.PxH, 
						Mirr.Width * MainData.PxW, 
						Mirr.Height * MainData.PxH);
					
					ctx.restore();
					
				}

			}
			
			for (var x = 0; x < OPCamera[OPCamera.AMap].NPCDrawL.length; x++) {

				var Data = OPCamera[OPCamera.AMap].NPCDrawL[x];

				ctx.save();

				ctx.translate(Data.PX * MainData.PxW, Data.PY * MainData.PxH);
				
				ctx.rotate(Data.Route);
						
				ctx.drawImage(Images[Data.File],Data.Data.TMX * Data.AnX, Data.Data.TMY* Data.AnY ,Data.Data.TMW, Data.Data.TMH, -(Data.Data.Width/2)* MainData.PxW, -(Data.Data.Height/2)* MainData.PxH, Data.Data.Width * MainData.PxW, Data.Data.Height * MainData.PxH);
				
				ctx.restore();
				
			}
			
			if(OPCamera[OPCamera.AMap].Build != null && OPCamera[OPCamera.AMap].Net.NetN.length > 0) {

				var Obj = MapObjects[OPCamera[OPCamera.AMap].Build].Data;

				ctx.save();

					if(OPCamera[OPCamera.AMap].Net.Block){
						
						ctx.beginPath();

							ctx.strokeStyle = Maps_Data[OPCamera.AMap].BuildLook.BColor;
							
							ctx.lineWidth = Maps_Data[OPCamera.AMap].BuildLook.BWidth * MainData.PxW;
							ctx.rect(OPCamera[OPCamera.AMap].Net.NetN[0].PX* MainData.PxW, OPCamera[OPCamera.AMap].Net.NetN[0].PY* MainData.PxH, OPCamera[OPCamera.AMap].Net.SizeX* MainData.PxW, OPCamera[OPCamera.AMap].Net.SizeY* MainData.PxH);
							ctx.stroke();

						ctx.closePath();
	
						ctx.globalAlpha = Maps_Data[OPCamera.AMap].BuildLook.BAlpha;

					} else {
						
						ctx.beginPath();

							ctx.strokeStyle = Maps_Data[OPCamera.AMap].BuildLook.nBColor;
							
							ctx.lineWidth = Maps_Data[OPCamera.AMap].BuildLook.nBWidth * MainData.PxW;
							ctx.rect(OPCamera[OPCamera.AMap].Net.NetN[0].PX* MainData.PxW, OPCamera[OPCamera.AMap].Net.NetN[0].PY* MainData.PxH, OPCamera[OPCamera.AMap].Net.SizeX* MainData.PxW, OPCamera[OPCamera.AMap].Net.SizeY* MainData.PxH);
							ctx.stroke();

						ctx.closePath();
	
						ctx.globalAlpha = Maps_Data[OPCamera.AMap].BuildLook.nBAlpha;

					}
						
					ctx.translate(((-Obj.HitBox.PX-(Obj.Width/2))+OPCamera[OPCamera.AMap].Net.PX)*MainData.PxW, ((-Obj.HitBox.PY-(Obj.Height/2))+OPCamera[OPCamera.AMap].Net.PY)*MainData.PxH);
					ctx.drawImage(Images[Obj.File], 0, 0, Obj.Width, Obj.Height, 0, 0,Obj.Width*MainData.PxW, Obj.Height*MainData.PxH);
			
					if(Obj.Range){

						ctx.translate((Obj.Width/2)*MainData.PxW, (Obj.Height/2)*MainData.PxH);

						ctx.beginPath();
						ctx.strokeStyle = Maps_Data[OPCamera.AMap].BuildLook.RColor;
						ctx.arc(0, 0, Obj.Range* MainData.PxW, 0, Maps_Data[OPCamera.AMap].BuildLook.RWidth * Math.PI);
						ctx.stroke();
		
					}
					
				ctx.restore();
			
			} else if(OpenWorldData[OPCamera.AMap].PointOn != null && !OpenWorldData[OPCamera.AMap].PointOn.Dead) DrawSBuildingD(OpenWorldData[OPCamera.AMap].PointOn,Maps_Data[OPCamera.AMap].HitBox);
			if(OpenWorldData[OPCamera.AMap].ActBuilding != null) DrawSBuildingD(OpenWorldData[OPCamera.AMap].ActBuilding,Maps_Data[OPCamera.AMap].ActB);

			if(Maps_Data[OPCamera.AMap].Weather)
			if(Maps_Data[OPCamera.AMap].Weather.RainWork){

				FallDraw();
				NPCRain();

			}

			for (var x = 0; x < OPCamera[OPCamera.AMap].SortList.length; x++){

				var Data = OPCamera[OPCamera.AMap].SortList[x];

				ctx.save();

				ctx.translate(Data.PX * MainData.PxW, Data.PY * MainData.PxH);
				
				ctx.rotate(Data.Route);
				
				ctx.drawImage(Images[Data.File],Data.Data.TMX * Data.AnX, Data.Data.TMY* Data.AnY ,Data.Data.TMW, Data.Data.TMH, -(Data.Data.Width/2)* MainData.PxW, -(Data.Data.Height/2)* MainData.PxH, Data.Data.Width * MainData.PxW, Data.Data.Height * MainData.PxH);
				
				if(Data.Data.HitBox && AddData.RD_HitBox){
					
					ctx.save();
				
						ctx.beginPath();
						
							ctx.lineWidth = 1 * MainData.PxW;
							ctx.strokeStyle = "White";
							ctx.rect(Data.Data.HitBox.PX* MainData.PxW,Data.Data.HitBox.PY* MainData.PxH,Data.Data.HitBox.Width* MainData.PxW,Data.Data.HitBox.Height* MainData.PxH);
							ctx.stroke();
							
						ctx.closePath();
			
					ctx.restore();
				
				}
				
				if(Data.Live > 0){ // && Data.Live < Data.MLive

					if(Data.Data.Solid)
					ProgressBar(Data,Maps_Data[OPCamera.AMap].LiveB);
					else ProgressBar(Data,Maps_Data[OPCamera.AMap].LiveNPC);
	
				}

				ctx.restore();
				
			}
			
			if(OPCamera[OPCamera.AMap].NPCList[0])
			for (var x = 0; x < 1; x++){

				var Data = OPCamera[OPCamera.AMap].NPCList[x];

				ctx.save();

				ctx.translate(Data.PX * MainData.PxW, Data.PY * MainData.PxH);
				
				ctx.rotate(Data.Route);
						
				ctx.drawImage(Images[Data.File+"_M"],Data.Data.TMX * Data.AnX, Data.Data.TMY* Data.AnY ,Data.Data.TMW, Data.Data.TMH, -(Data.Data.Width/2)* MainData.PxW, -(Data.Data.Height/2)* MainData.PxH, Data.Data.Width * MainData.PxW, Data.Data.Height * MainData.PxH);
				
				ctx.restore();
				
			}
			
			for (var x = 0; x < OPCamera[OPCamera.AMap].ObjectList.length; x++) {
			
				var Obj = OPCamera[OPCamera.AMap].ObjectList[x];
			
				if(Obj.PX > OPCamera[OPCamera.AMap].PX && Obj.PY > OPCamera[OPCamera.AMap].PY 
					&& Obj.PX < OPCamera[OPCamera.AMap].PX+Maps_Data[OPCamera.AMap].CHX*2
					&& Obj.PY < OPCamera[OPCamera.AMap].PY+Maps_Data[OPCamera.AMap].CHY*2)
				ObjectDraw(Obj);
				
			}
			
			if(Maps_Data[OPCamera.AMap].Weather)
			if(Maps_Data[OPCamera.AMap].Weather.RainWork)
			RainDraw();
		
			if(AddData.Zoom){
			
				ctx.save();
				ctx.translate(OPCamera[OPCamera.AMap].PX*MainData.PxW, OPCamera[OPCamera.AMap].PY*MainData.PxH);
				ctx.beginPath();
				
					ctx.strokeStyle = "Red";
					ctx.rect(0* MainData.PxW,0* MainData.PxH,1100* MainData.PxW,800* MainData.PxH);
					ctx.stroke();
					
				ctx.closePath();
				ctx.restore();
	
			}
		
		ctx.restore();
	
		if(!MainData.SystemPaused){
			
			for (var x = 0; x < OPCamera[OPCamera.AMap].NPCList.length; x++) 
			ChunkFunction(OPCamera[OPCamera.AMap].NPCList[x]);

			CameraMove();
			
			for (var x = 0; x < OPCamera[OPCamera.AMap].SBuildList.length; x++) 
			BuildFun(OPCamera[OPCamera.AMap].SBuildList[x]);

			if(!Maps_Data[OPCamera.AMap].NoFrameRefresh)
			OPMoveObjects();
	
		}
	
	}

	// Weather - Rain

	function NPCRain(){

		var Fall = Maps_Data[OPCamera.AMap].Weather.Rain.NPC;
		
		for(var x = 0; x < OpenWorldData[OPCamera.AMap].NPCRain.length; x++) 		
		if(OpenWorldData[OPCamera.AMap].NPCRain[x]) if(OpenWorldData[OPCamera.AMap].NPCRain[x].AnX < Fall.MAnX) {
			
			ctx.save();

			ctx.globalAlpha = OpenWorldData[OPCamera.AMap].NPCRain[x].Alpha;

			ctx.drawImage(Images[Fall.File], 
				Fall.TMX*OpenWorldData[OPCamera.AMap].NPCRain[x].AnX, 
				Fall.TMY, 
				Fall.TMW, 
				Fall.TMH, 
				OpenWorldData[OPCamera.AMap].NPCRain[x].PX*MainData.PxW, 
				OpenWorldData[OPCamera.AMap].NPCRain[x].PY*MainData.PxH, 
				Fall.Width*MainData.PxW, 
				Fall.Height*MainData.PxH
			);

			ctx.restore();

		} else OpenWorldData[OPCamera.AMap].NPCRain[x] = null;

	}

	function RainDraw(){

		var Rain = Maps_Data[OPCamera.AMap].Weather.Rain.Up;
		
		for(var x = 0; x < OpenWorldData[OPCamera.AMap].RainList.length; x++) 		
		if(OpenWorldData[OPCamera.AMap].RainList[x]) if(OpenWorldData[OPCamera.AMap].RainList[x].Alpha > 0.1) {
			
			ctx.save();
			
			ctx.translate(OpenWorldData[OPCamera.AMap].RainList[x].PX * MainData.PxW, OpenWorldData[OPCamera.AMap].RainList[x].PY * MainData.PxH);
			
			ctx.globalAlpha = OpenWorldData[OPCamera.AMap].RainList[x].Alpha;

			ctx.drawImage(Images[Rain.File], 
				0,
				0, 
				Rain.TMW, 
				Rain.TMH, 
				-(Rain.Width/2)*MainData.PxW, 
				-(Rain.Height/2)*MainData.PxH, 
				Rain.Width*MainData.PxW, 
				Rain.Height*MainData.PxH
			);

			ctx.restore();

			if(!MainData.SystemPaused){
			
				OpenWorldData[OPCamera.AMap].RainList[x].PY += 22;
				OpenWorldData[OPCamera.AMap].RainList[x].PX += 1;
				OpenWorldData[OPCamera.AMap].RainList[x].Alpha -= 0.009;
	
			}
			
		} else OpenWorldData[OPCamera.AMap].RainList[x] = null;

	}

	function FallDraw(){

		var Fall = Maps_Data[OPCamera.AMap].Weather.Rain.Down;
		
		for(var x = 0; x < OpenWorldData[OPCamera.AMap].RainFall.length; x++) 		
		if(OpenWorldData[OPCamera.AMap].RainFall[x]) if(OpenWorldData[OPCamera.AMap].RainFall[x].AnX < Fall.MAnX) {
			
			ctx.save();

			ctx.globalAlpha = OpenWorldData[OPCamera.AMap].RainFall[x].Alpha;

			ctx.drawImage(Images[Fall.File], 
				Fall.TMX*OpenWorldData[OPCamera.AMap].RainFall[x].AnX, 
				Fall.TMY, 
				Fall.TMW, 
				Fall.TMH, 
				OpenWorldData[OPCamera.AMap].RainFall[x].PX*MainData.PxW, 
				OpenWorldData[OPCamera.AMap].RainFall[x].PY*MainData.PxH, 
				Fall.Width*MainData.PxW, 
				Fall.Height*MainData.PxH
			);

			ctx.restore();

		} else OpenWorldData[OPCamera.AMap].RainFall[x] = null;

	}

	function AddRain(){
		
		for (var y = 0; y < 5; y++) {
		
			var Val = true;

			var PX = OPCamera[OPCamera.AMap].PX+Math.floor((Math.random() * (1920+800)))-400,
				PY = OPCamera[OPCamera.AMap].PY+Math.floor((Math.random() * -1000));
	
			for(var x = 0; x < OpenWorldData[OPCamera.AMap].RainList.length; x++) 		
			if(OpenWorldData[OPCamera.AMap].RainList[x] == null){
			
				OpenWorldData[OPCamera.AMap].RainList[x] = {
	
					"PX": PX,
					"PY": PY,
					"Alpha": 1,
		
				};
				
				Val = false;
				x = OpenWorldData[OPCamera.AMap].RainList.length;
				
			}
			
			if(Val)
			OpenWorldData[OPCamera.AMap].RainList.push({
	
				"PX": PX,
				"PY": PY,
				"Alpha": 1,
	
			});

		}
		
	}

	function AddFall(){
		
		var Map = Maps_Data[OPCamera.AMap];
		
		for(var x = -Map.DChunksX; x < Map.DChunksX+1; x++) for(var y = -Map.DChunksY; y < Map.DChunksY+1; y++)
		if( OPCamera[OPCamera.AMap].InChY+y > -1 && OPCamera[OPCamera.AMap].InChX+x > -1 &&  
			OPCamera[OPCamera.AMap].InChY+y < Map.MapSizeY && OPCamera[OPCamera.AMap].InChX+x < Map.MapSizeX){
	
			var Chunk = Map.Chunks[Map.All[OPCamera[OPCamera.AMap].InChY+y][OPCamera[OPCamera.AMap].InChX+x]],
				Num = Math.floor((Math.random() * (Map.Net*Map.Net)));
			
			if(!Chunk.Net[Num].Object){

				var Val = true;

				var PX = Chunk.Net[Num].PX+Math.floor((Math.random() * 80)),
					PY = Chunk.Net[Num].PY+Math.floor((Math.random() * 80));
		
				var AnX = 0,
					Alpha = 1;

				for(var q = 0; q < OpenWorldData[OPCamera.AMap].RainFall.length; q++) 		
				if(OpenWorldData[OPCamera.AMap].RainFall[q] == null){
				
					OpenWorldData[OPCamera.AMap].RainFall[q] = {
		
						"PX": PX,
						"PY": PY,
						"AnX": AnX,
						"Alpha": Alpha,
			
					};
					
					Val = false;
					q = OpenWorldData[OPCamera.AMap].RainFall.length;
					
				}
				
				if(Val)
				OpenWorldData[OPCamera.AMap].RainFall.push({
		
					"PX": PX,
					"PY": PY,
					"AnX": AnX,
					"Alpha": Alpha,
		
				});
	
			}
			
		}

		for(var q = 0; q < OpenWorldData[OPCamera.AMap].RainFall.length; q++) 		
		if(OpenWorldData[OPCamera.AMap].RainFall[q] != null){
			
			if(OPCamera.AMap == 0){
			
				OpenWorldData[OPCamera.AMap].RainFall[q].AnX++;
				OpenWorldData[OPCamera.AMap].RainFall[q].Alpha -= 0.25;
	
			} else {

				OpenWorldData[OPCamera.AMap].RainFall[q].AnX--;
				OpenWorldData[OPCamera.AMap].RainFall[q].Alpha += 0.25;
	
			}
			
		} 
		
		for(var q = 0; q < OpenWorldData[OPCamera.AMap].NPCRain.length; q++) 		
		if(OpenWorldData[OPCamera.AMap].NPCRain[q] != null){
			
			OpenWorldData[OPCamera.AMap].NPCRain[q].AnX++;
			OpenWorldData[OPCamera.AMap].NPCRain[q].Alpha -= 0.25;
	
		} 
		
	}

	// Spec Draw
	
	function ObjectDraw(Data){

		ctx.save();

		ctx.translate(Data.PX * MainData.PxW, Data.PY * MainData.PxH);
		
		ctx.rotate(Data.Route);
				
		ctx.drawImage(Images[Data.File],Data.Data.TMX * Data.AnX, Data.Data.TMY* Data.AnY ,Data.Data.TMW, Data.Data.TMH, -(Data.Data.Width/2)* MainData.PxW, -(Data.Data.Height/2)* MainData.PxH, Data.Data.Width * MainData.PxW, Data.Data.Height * MainData.PxH);
		
		ctx.restore();
		
	}

	function DrawSBuildingD(Data,Look){
		
		ctx.save();
		
			ctx.translate(Data.PX * MainData.PxW, Data.PY * MainData.PxH);
			
			ctx.beginPath();
			
				ctx.globalAlpha = Look.Alpha;
				ctx.strokeStyle = Look.Color;
				ctx.rect(Data.Data.HitBox.PX* MainData.PxW,Data.Data.HitBox.PY* MainData.PxH,Data.Data.HitBox.Width* MainData.PxW,Data.Data.HitBox.Height* MainData.PxH);
				ctx.stroke();
				
			ctx.closePath();

			if(Data.Data.Range){

				ctx.beginPath();
				ctx.strokeStyle = Look.RColor;
				ctx.arc(0, 0, Data.Data.Range* MainData.PxW, 0, 2 * Math.PI);
				ctx.stroke();

			}
			
		ctx.restore();
		
	}

	function OPMoveObjects(){

		for (var x = 0; x < OPCamera[OPCamera.AMap].NPCList.length; x++) 
		MoveList(OPCamera[OPCamera.AMap].NPCList[x]);

		for (var x = 0; x < OPCamera[OPCamera.AMap].ObjectList.length; x++) 
		ObjectFun(OPCamera[OPCamera.AMap].ObjectList[x]);
		
	}

	// Camera

	function SetCameraMove(Num){

		OPCamera[OPCamera.AMap].CamMove.Move = Num; 
		OPCamera[OPCamera.AMap].CamMove.Num = 0; 

		if(OPCamera[OPCamera.AMap].CamMove.Move != null)
		OPCamera[OPCamera.AMap].CamMove.Counter = CameraMoves[OPCamera[OPCamera.AMap].CamMove.Move][OPCamera[OPCamera.AMap].CamMove.Num].Counter;
		else OPCamera[OPCamera.AMap].CamMove.Counter = 0;

	}

	function CameraMove(){

		if(OPCamera[OPCamera.AMap].Follow != null && OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].Follow] != null)
		CameraBlock(OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].Follow].PX-Maps_Data[OPCamera.AMap].CHX,OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].Follow].PY-Maps_Data[OPCamera.AMap].CHY);
		else if(OPCamera[OPCamera.AMap].Control) {

			var MoveY = 0,
				MoveX = 0;

			if(Keyboard.key.down) MoveY = Maps_Data[OPCamera.AMap].Speed;
			if(Keyboard.key.up) MoveY = -Maps_Data[OPCamera.AMap].Speed;
			if(Keyboard.key.right) MoveX = Maps_Data[OPCamera.AMap].Speed;
			if(Keyboard.key.left) MoveX = -Maps_Data[OPCamera.AMap].Speed;

			CameraBlock(OPCamera[OPCamera.AMap].PX + MoveX,OPCamera[OPCamera.AMap].PY + MoveY);
			
		} else if(OPCamera[OPCamera.AMap].CamMove.Move != null){
				
			var Move = CameraMoves[OPCamera[OPCamera.AMap].CamMove.Move],
				MoveY = Move[OPCamera[OPCamera.AMap].CamMove.Num].Ym,
				MoveX = Move[OPCamera[OPCamera.AMap].CamMove.Num].Xm;
				
			if(OPCamera[OPCamera.AMap].CamMove.Counter <= 0) {

				OPCamera[OPCamera.AMap].CamMove.Num ++;

				if(OPCamera[OPCamera.AMap].CamMove.Num == Move.length){
					
					if(Move.loop) {

						OPCamera[OPCamera.AMap].CamMove.Num = 0;
						OPCamera[OPCamera.AMap].CamMove.Counter = Move[OPCamera[OPCamera.AMap].CamMove.Num].Counter;
		
					} else { 

						OPCamera[OPCamera.AMap].CamMove.Num = 0; 
						OPCamera[OPCamera.AMap].CamMove.Counter = 0;
						OPCamera[OPCamera.AMap].CamMove.Move = null; 

					}
	
				} else OPCamera[OPCamera.AMap].CamMove.Counter = Move[OPCamera[OPCamera.AMap].CamMove.Num].Counter;

			} else OPCamera[OPCamera.AMap].CamMove.Counter--;
			
			CameraBlock(OPCamera[OPCamera.AMap].PX + MoveX,OPCamera[OPCamera.AMap].PY + MoveY);
			
		}

		if(OPCamera[OPCamera.AMap].NPCNumC != null && OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC] != null && OPCamera[OPCamera.AMap].NPCCType && OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC].LoopMove == null){

			var NPC = OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC];

			var MoveY = 0,
				MoveX = 0;

			if(Keyboard.key.down) MoveY = 10;
			if(Keyboard.key.up) MoveY = -10;
			if(Keyboard.key.right) MoveX = 10;
			if(Keyboard.key.left) MoveX = -10;

			var PXY = HeroCollision(NPC,MoveX,MoveY);
			
			if(PXY[0] != 0 || PXY[1] != 0)
			{ 
				SetMove(NPC,true); 
				HeroControl(NPC,1,NPC.PX+PXY[0],NPC.PY+PXY[1]); 
				HeroControl(NPC,0); 
			}

		}
		
		if(MoveX != 0 || MoveY != 0)
		NetHB( Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
			   Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH));

		CameraCheck();

	}

	function CameraBlock(Xm,Ym){

		if(Xm >= 0+Maps_Data[OPCamera.AMap].CameraDiff.XL && Xm <= Maps_Data[OPCamera.AMap].CHSizeX+Maps_Data[OPCamera.AMap].CameraDiff.XR)
		OPCamera[OPCamera.AMap].PX = Xm; else if(Xm <= 0+Maps_Data[OPCamera.AMap].CameraDiff.XL) OPCamera[OPCamera.AMap].PX = Maps_Data[OPCamera.AMap].CameraDiff.XL; 
		else OPCamera[OPCamera.AMap].PX = Maps_Data[OPCamera.AMap].CHSizeX+Maps_Data[OPCamera.AMap].CameraDiff.XR;
		
		if(Ym >= 0+Maps_Data[OPCamera.AMap].CameraDiff.YL && Ym <= Maps_Data[OPCamera.AMap].CHSizeY+Maps_Data[OPCamera.AMap].CameraDiff.YR)
		OPCamera[OPCamera.AMap].PY = Ym; else if(Ym <= 0+Maps_Data[OPCamera.AMap].CameraDiff.YL) OPCamera[OPCamera.AMap].PY = Maps_Data[OPCamera.AMap].CameraDiff.YL; 
		else OPCamera[OPCamera.AMap].PY = Maps_Data[OPCamera.AMap].CHSizeY+Maps_Data[OPCamera.AMap].CameraDiff.YR;
		
	}

	function CameraCheck(){

		var CHx = JSON.parse(JSON.stringify(OPCamera[OPCamera.AMap].InChX)), 
			CHy = JSON.parse(JSON.stringify(OPCamera[OPCamera.AMap].InChY));

		for(var x = 0; x < Maps_Data[OPCamera.AMap].MapSizeX; x++) 
		for(var y = 0; y < Maps_Data[OPCamera.AMap].MapSizeY; y++){
			
			if( OPCamera[OPCamera.AMap].PX+Maps_Data[OPCamera.AMap].CHX >= Maps_Data[OPCamera.AMap].Size*x && 
				OPCamera[OPCamera.AMap].PX+Maps_Data[OPCamera.AMap].CHX <= Maps_Data[OPCamera.AMap].Size+Maps_Data[OPCamera.AMap].Size*x) OPCamera[OPCamera.AMap].InChX = x;

			if( OPCamera[OPCamera.AMap].PY+Maps_Data[OPCamera.AMap].CHY >= Maps_Data[OPCamera.AMap].Size*y && 
				OPCamera[OPCamera.AMap].PY+Maps_Data[OPCamera.AMap].CHY <= Maps_Data[OPCamera.AMap].Size+Maps_Data[OPCamera.AMap].Size*y) OPCamera[OPCamera.AMap].InChY = y;
	
		}

		if(CHx != OPCamera[OPCamera.AMap].InChX || CHy != OPCamera[OPCamera.AMap].InChY)
		ChangeObjects();

	}

	function ChangeObjects(){
		
		var NewList = [];

		for (var x = 0; x < OPCamera[OPCamera.AMap].SortList.length; x++) 
		if(!OPCamera[OPCamera.AMap].SortList[x].Data.Solid && !OPCamera[OPCamera.AMap].SortList[x].Die) 
		NewList.push(OPCamera[OPCamera.AMap].SortList[x]);

		for(var x = -Maps_Data[OPCamera.AMap].DChunksX; x < Maps_Data[OPCamera.AMap].DChunksX+1; x++) 
		for(var y = -Maps_Data[OPCamera.AMap].DChunksY; y < Maps_Data[OPCamera.AMap].DChunksY+1; y++)
		if(OPCamera[OPCamera.AMap].InChY+y > -1 && OPCamera[OPCamera.AMap].InChX+x > -1 && OPCamera[OPCamera.AMap].InChY+y < Maps_Data[OPCamera.AMap].MapSizeY && OPCamera[OPCamera.AMap].InChX+x < Maps_Data[OPCamera.AMap].MapSizeX){

			var Obj = Maps_Data[OPCamera.AMap].Chunks[Maps_Data[OPCamera.AMap].All[OPCamera[OPCamera.AMap].InChY+y][OPCamera[OPCamera.AMap].InChX+x]];

			for (var z = 0; z < Obj.Objects.length; z++)
			NewList.push(Obj.Objects[z]);

		} 
		
		OPCamera[OPCamera.AMap].SortList = NewList;
	
	}

	// Objects Scripts

	function ObjectsInter(Obj_,X,Y){
		
		for (var x = 0; x < Maps_Data[OPCamera.AMap].Chunks[Obj_.ObjectD.Chunk].Objects.length; x++) 
		if(Maps_Data[OPCamera.AMap].Chunks[Obj_.ObjectD.Chunk].Objects[x].ID == Obj_.ObjectD.ID){
		
			var Obj = Maps_Data[OPCamera.AMap].Chunks[Obj_.ObjectD.Chunk].Objects[x];

			var	PX = Obj.PX+Obj.Data.HitBox.PX, 
				PY = Obj.PY+Obj.Data.HitBox.PY;
	
			if( X > PX && Y > PY && X < PX+Obj.Data.HitBox.Width && Y < PY+Obj.Data.HitBox.Height )
			OpenWorldData[OPCamera.AMap].PointOn = Obj;
	
		}
	
	}
	
	function ObjectsScripts(){

		OpenWorldData[OPCamera.AMap].ActBuilding = OpenWorldData[OPCamera.AMap].PointOn;

		switch (OpenWorldData[OPCamera.AMap].PointOn.Data.Script) {	
			case 0: Tower_Opt_Window(OpenWorldData[OPCamera.AMap].PointOn); 
			break;		
		}
		
	}

	function Tower_Opt_Window(Build){

		AddData.Build = true;

	}

	// Net 

	function NetHB(X,Y){
		
		var ActWin = WindowDrawList[WindowDrawList.length-1];
				
		if( MainData.TouchX > MainData.DiffX+(WindowList[ActWin].Window.PX+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PXw)* MainData.PxW && 
			MainData.TouchY > MainData.DiffY+(WindowList[ActWin].Window.PY+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PYw)* MainData.PxH && 
			MainData.TouchX < MainData.DiffX+(WindowList[ActWin].Window.PX+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PXw+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].Widthw)* MainData.PxW && 
			MainData.TouchY < MainData.DiffY+(WindowList[ActWin].Window.PY+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PYw+WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].Heightw)* MainData.PxH){

		
				var X_ = X-WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PXw+OPCamera[OPCamera.AMap].PX,
					Y_ = Y-WindowList[ActWin].WindowObjects[WindowList[ActWin].Window.DrawWorld].PYw+OPCamera[OPCamera.AMap].PY;
	
				OpenWorldData[OPCamera.AMap].PointOn = null;
				OPCamera[OPCamera.AMap].Net.NetN = [];
				OPCamera[OPCamera.AMap].Net.Block = false;
				
			if(!MainData.RightMouse){
	
				if(OPCamera[OPCamera.AMap].Build != null) {
	
					var Obj = MapObjects[OPCamera[OPCamera.AMap].Build];
	
					var SY = Obj.Build.NetSY,
						SX = Obj.Build.NetSX;
			
				} else {
					
					var SY = 1,
						SX = 1;
	
				}
	
				OPCamera[OPCamera.AMap].Net.SizeX = SX*Maps_Data[OPCamera.AMap].NetSize;
				OPCamera[OPCamera.AMap].Net.SizeY = SY*Maps_Data[OPCamera.AMap].NetSize;
	
				for(var x = -Maps_Data[OPCamera.AMap].DChunksX; x < Maps_Data[OPCamera.AMap].DChunksX+1; x++) 
				for(var y = -Maps_Data[OPCamera.AMap].DChunksY; y < Maps_Data[OPCamera.AMap].DChunksY+1; y++)
				if(OPCamera[OPCamera.AMap].InChY+y > -1 && OPCamera[OPCamera.AMap].InChX+x > -1 && OPCamera[OPCamera.AMap].InChY+y < Maps_Data[OPCamera.AMap].MapSizeY && OPCamera[OPCamera.AMap].InChX+x < Maps_Data[OPCamera.AMap].MapSizeX){
					
					for (var g = 0; g < SY; g++) for (var q = 0; q < SX; q++) {
						
						var _X_ = X_+(q*Maps_Data[OPCamera.AMap].NetSize),
							_Y_ = Y_+(g*Maps_Data[OPCamera.AMap].NetSize);
	
						var Num = (Maps_Data[OPCamera.AMap].MapSizeX*(OPCamera[OPCamera.AMap].InChY+y))+(OPCamera[OPCamera.AMap].InChX+x);
	
						for(var z = 0; z < Maps_Data[OPCamera.AMap].Chunks[Num].Net.length; z++) 
						{
							
							var PXn = Maps_Data[OPCamera.AMap].Chunks[Num].Net[z].PX,
								PYn = Maps_Data[OPCamera.AMap].Chunks[Num].Net[z].PY;
								
							if( _X_ > PXn && _X_ < PXn+Maps_Data[OPCamera.AMap].NetSize && _Y_ > PYn && _Y_ < PYn+Maps_Data[OPCamera.AMap].NetSize){
								
								var Obj_ = Maps_Data[OPCamera.AMap].Chunks[Num].Net[z];
						
								if(OPCamera[OPCamera.AMap].Build != null){
									
									OPCamera[OPCamera.AMap].Net.NetN.push({
					
										"Chunk": Num,
										"Net": z,
										"PX": Obj_.PX,
										"PY": Obj_.PY
						
									});
	
								} else if(Obj_.Object && Obj_.ObjectD) 
								ObjectsInter(Obj_,X_,Y_);
	
								if(Obj_.Object) OPCamera[OPCamera.AMap].Net.Block = true;
								
							}	
							
						}	
	
					}
	
				}
				
				if(OPCamera[OPCamera.AMap].Net.NetN.length != SY*SX)
				OPCamera[OPCamera.AMap].Net.Block = true;
			
				if(OPCamera[OPCamera.AMap].Net.NetN.length > 0){
	
					OPCamera[OPCamera.AMap].Net.PX = OPCamera[OPCamera.AMap].Net.NetN[0].PX+Obj.Build.PX;
					OPCamera[OPCamera.AMap].Net.PY = OPCamera[OPCamera.AMap].Net.NetN[0].PY+Obj.Build.PY;
					
				} else {
					
					OPCamera[OPCamera.AMap].Net.PX = 0;
					OPCamera[OPCamera.AMap].Net.PY = 0;
					
				}
	
			} else {
	
			}
	
		}
		
	}

	function AddObjectNet(){
		
		var Obj = MapObjects[OPCamera[OPCamera.AMap].Build].Data;

		// Replaceable - object in sort to be exchanged for another and back again
		
		if(!Obj.Replaceable){
			
			var ID = AddMapObject(
				Obj,
				OPCamera[OPCamera.AMap].Net.NetN[0].Chunk,
				OPCamera[OPCamera.AMap].Net.PX-Obj.HitBox.PX,
				OPCamera[OPCamera.AMap].Net.PY-Obj.HitBox.PY,
				OPCamera.AMap,
				MapObjects[OPCamera[OPCamera.AMap].Build].Spec);
	
			var Net = OPCamera[OPCamera.AMap].Net.NetN;

			for (var x = 0; x < Net.length; x++){
	
				Maps_Data[OPCamera.AMap].Chunks[Net[x].Chunk].Net[Net[x].Net].Object = true;
				Maps_Data[OPCamera.AMap].Chunks[Net[x].Chunk].Net[Net[x].Net].ObjectD = {
						
					"ID": ID,
					"Chunk": Net[x].Chunk,
					"List": []
	
				};

			}
			
			for (var x = 0; x < Net.length; x++)
			Maps_Data[OPCamera.AMap].Chunks[Net[0].Chunk].Net[Net[0].Net].ObjectD.List.push(Maps_Data[OPCamera.AMap].Chunks[Net[x].Chunk].Net[Net[x].Net].ObjectD.Chunk);

			ChangeObjects();
			NetHB( Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
				   Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
			
		} else {

			AddMapObject(Obj,
				OPCamera[OPCamera.AMap].Net.NetN[0].Chunk,
				OPCamera[OPCamera.AMap].Net.PX-Obj.HitBox.PX,
				OPCamera[OPCamera.AMap].Net.PY-Obj.HitBox.PY,
				OPCamera.AMap,
				MapObjects[OPCamera[OPCamera.AMap].Build].Spec);
	
			for (var x = 0; x < OPCamera[OPCamera.AMap].Net.NetN.length; x++)
			Maps_Data[OPCamera.AMap].Chunks[OPCamera[OPCamera.AMap].Net.NetN[x].Chunk].Net[OPCamera[OPCamera.AMap].Net.NetN[x].Net].ObjectD = {
						
				"Replaceable": true,
				"Num": Maps_Data[OPCamera.AMap].Chunks[OPCamera[OPCamera.AMap].Net.NetN[0].Chunk].Objects.length-1,
				"Type": OPCamera[OPCamera.AMap].Build

			};
			
			ChangeObjects();
			
		}
		
	}

	function AddMapObject(Obj,Chunk,PX,PY,Map,Spec){

		var Chunk_ = Maps_Data[Map].Chunks[Chunk].Objects;

		Chunk_.push(JSON.parse(JSON.stringify({
			
			ID: String("B"+Math.floor((Math.random() * 100))+""+Math.floor((Math.random() * 1000))),
			Chunk: Chunk,

			Counter: 0,
			Type: 0,

			File: Obj.File,
			Data: Obj,
			Route: 0,
			AnX: 0,

			AnimCounter: 0,
			AnimType: 0,
			MAnX: 5,
			AnY: 0,

			PX: PX, 
			PY: PY,
			
		})));	

		if(BuildAnimF[Obj.Name]){

			Chunk_[Chunk_.length-1].File = BuildAnimF[Obj.Name][0].File;
			Chunk_[Chunk_.length-1].AnimCounter = BuildAnimF[Obj.Name][0].AnimCounter;
			Chunk_[Chunk_.length-1].AnimType = BuildAnimF[Obj.Name][0].AnimType;
			Chunk_[Chunk_.length-1].MAnX = BuildAnimF[Obj.Name][0].MAnX;
			
		}

		if(Spec){

			OPCamera[Map].SBuildList.push(Chunk_[Chunk_.length-1]);

			OPCamera[Map].SBuildList[OPCamera[Map].SBuildList.length-1].Spec = Spec.Spec;
			
			if(Spec.Live){
			
				OPCamera[Map].SBuildList[OPCamera[Map].SBuildList.length-1].Live = Spec.Live;
				OPCamera[Map].SBuildList[OPCamera[Map].SBuildList.length-1].MLive = Spec.Live;
				
			}
			
			if(Spec.Attack)
			OPCamera[Map].SBuildList[OPCamera[Map].SBuildList.length-1].AttackP = Spec.Attack;

		}

		if(Obj.Obelisk) {
			
			AddData.Obelisks[AddData.ObeliskCounter].N = OPCamera[Map].SBuildList.length-1;
			AddData.ObeliskCounter++;

		}
		
		if(Obj.P_Obelisk) {
			
			OPCamera[Map].SBuildList[OPCamera[Map].SBuildList.length-1].N_Obelisk = AddData.Obelisk_P_Counter;
			AddData.Obelisk_P_Counter++;

		}

		return Chunk_[Chunk_.length-1].ID;

	}

	function AddObject(Obj,PX,PY,Map,PX_,PY_,NPC,Atk,ID,Move,Build,Sound){
		
		OPCamera[Map].ObjectList.push(JSON.parse(JSON.stringify({
				
			Type: Obj.Spec.Type,
			Blocade: 0, 
			NPC: NPC,
			NPCID: ID,

			MoveList: null, 
			LoopMove: null, 
			Draw: true,
			Move: null,
			
			Chunk: null, 

			File: Obj.Data.File,
			Data: Obj.Data,
			Route: 0,
			AnY: 0,
			AnX: 0,

			AnimType: 0,
			MAnX: 1,

			PX: PX, 
			PY: PY,

		})));	

		if(Atk) 
		OPCamera[Map].ObjectList[OPCamera[Map].ObjectList.length-1].Atk = Atk;

		if(!Sound)
		OPCamera[Map].ObjectList[OPCamera[Map].ObjectList.length-1].Sound = true;
		
		if(Move)
		SetObjectsMove(OPCamera[Map].ObjectList[OPCamera[Map].ObjectList.length-1],Move,PX_,PY_);
		else SetObjectsMove(OPCamera[Map].ObjectList[OPCamera[Map].ObjectList.length-1],0,PX_,PY_);

	}

	function AddNPC(Obj,PX,PY,Map,Path){
		
		OPCamera[Map].NPCList.push(JSON.parse(JSON.stringify({
				
			ID: String(Math.floor((Math.random() * 1000))+""+OPCamera[Map].NPCList.length+""+Math.floor((Math.random() * 1000))),
			Type: Obj.Spec.Type, // Set of character moves
			Blocade: Obj.Spec.Blocade, // Blocking type (camera or board)
			Live: Obj.Spec.Live,
			MLive: Obj.Spec.Live,
			Up: Obj.Spec.Up,

			MoveList: [], // list of moves
			LoopMove: null, // saved list of movements to repeat
			Draw: null, // if to be drawn
			Move: null, 
			Spec: null,
			
			Chunk: null,

			File: Obj.Data.File,
			Data: Obj.Data,
			Route: 0,
			AnY: 0,
			AnX: 0,

			AnimType: null,
			MAnX: 0,

			PX: PX, 
			PY: PY,

		})));	
		
		if(Obj.Data.Live){
			
			OPCamera[Map].NPCList[OPCamera[Map].NPCList.length-1].Live = Obj.Data.Live;
			OPCamera[Map].NPCList[OPCamera[Map].NPCList.length-1].MLive = Obj.Data.Live;
			
		}
		
		if(!(Path != null)) 
		Pathfinding(OPCamera[Map].NPCList[OPCamera[Map].NPCList.length-1],null,PX,PY);

	}

	function DeleteNPC(NPC){

		if(NPC.Up){

			var NewList = [];

			for (var x = 0; x < OPCamera[OPCamera.AMap].NPCDrawL.length; x++) 
			if(!OPCamera[OPCamera.AMap].NPCDrawL[x].Die) NewList.push(OPCamera[OPCamera.AMap].NPCDrawL[x]);
			
			OPCamera[OPCamera.AMap].NPCDrawL = NewList;
		
		}

		var NewList = [];

		for (var x = 0; x < OPCamera[OPCamera.AMap].NPCList.length; x++) 
		if(!OPCamera[OPCamera.AMap].NPCList[x].Die) NewList.push(OPCamera[OPCamera.AMap].NPCList[x]);
		
		OPCamera[OPCamera.AMap].NPCList = NewList;
		
		switch (NPC.Up) {
			case 0: ChunkCheck_0(NPC);
			break;		
			case 1: ChunkCheck_1(NPC);
			break;	
		}
		
	}

	function BuyBuilding(){

		var Build = MapObjects[OPCamera[OPCamera.AMap].Build],
			PX = ((MainData.TouchX-MainData.DiffX)/MainData.PxW)+OPCamera[OPCamera.AMap].PX,
			PY = ((MainData.TouchY-MainData.DiffY)/MainData.PxH)+OPCamera[OPCamera.AMap].PY;

		AddObjectNet(Build,PX,PY);

	}

	function HKBuildSett(Val){

		if(OPCamera[OPCamera.AMap].Build != Val){

			OPCamera[OPCamera.AMap].Build = null;
			OPCamera[OPCamera.AMap].Build = Val;
			
			OPCamera[OPCamera.AMap].Net.NetN = [];
			OPCamera[OPCamera.AMap].Net.Block = false;
			OpenWorldData[OPCamera.AMap].ActBuilding = null; 

		} else {

			OPCamera[OPCamera.AMap].Build = null; 
			OpenWorldData[OPCamera.AMap].ActBuilding = null; 
	
		}
		
		NetHB( Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
			   Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
				
	}

	// Building Functions

	function BuildFun(Build){
		
		switch (Build.Spec) {	
			case 0: DownArmor(Build);
			break;
			case 1: Obelisk_Button(Build);
			break;
		}
	
	}

	function DownArmor(Build){
		
		if(Build.Data.DyingA)
		Build.Live -= 1;

		if(Build.Live <= 0){

			DeadBuildAnim(Build,BuildAnimF[Build.Data.Name].Destroy);

			if(OpenWorldData[OPCamera.AMap].ActBuilding == Build)
			OpenWorldData[OPCamera.AMap].ActBuilding = null;

		}

	}

	function AnimBuildFun(Build){
		
		switch (Build.Spec) {
			case 0: var Boom = TestShoot(Build);
			break;
		}

		return Boom;

	}

	function TestShoot(Build){
		
		var	boom = false,
			r = Build.Data.Range, 
			a = Build.PX+(Build.Data.HitBox.PX+Build.Data.HitBox.Width/2), 
			b = Build.PY+(Build.Data.HitBox.PY+Build.Data.HitBox.Height/2);
			
			r *= r;
				
		for (var z = 0; z < OPCamera[OPCamera.AMap].NPCList.length; z++) 
		if(OPCamera[OPCamera.AMap].NPCList[z] && OPCamera[OPCamera.AMap].NPCList[z].Live >= 0) {
			
			var Dis = (a - OPCamera[OPCamera.AMap].NPCList[z].PX) * (a - OPCamera[OPCamera.AMap].NPCList[z].PX) + (b - OPCamera[OPCamera.AMap].NPCList[z].PY) * (b - OPCamera[OPCamera.AMap].NPCList[z].PY);
			
			if (Dis < r) {
			
				AddObject(MapObjects[Build.Data.Bullet],
					Build.PX+Build.Data.ShootPX,
					Build.PY+Build.Data.ShootPY,
					OPCamera.AMap,
					OPCamera[OPCamera.AMap].NPCList[z].PX,
					OPCamera[OPCamera.AMap].NPCList[z].PY,
					z,
					Build.AttackP,
					OPCamera[OPCamera.AMap].NPCList[z].ID,
					null,
					null,
					boom);
					
				boom = true;

			}
		
		}

		return boom;

	}

	function Obelisk_Button(Build){

		if(OPCamera[OPCamera.AMap].NPCList[0]){
			
			var r = 120;
	
			var	a = Build.PX, 
				b = Build.PY+30;
			
				r *= r;
	
			var Dis = (a - OPCamera[OPCamera.AMap].NPCList[0].PX) * 
						(a - OPCamera[OPCamera.AMap].NPCList[0].PX) + 
						(b - (OPCamera[OPCamera.AMap].NPCList[0].PY + (OPCamera[OPCamera.AMap].NPCList[0].Data.Height/2))) * 
						(b - (OPCamera[OPCamera.AMap].NPCList[0].PY + (OPCamera[OPCamera.AMap].NPCList[0].Data.Height/2)));
	
			if (Dis < r) AddData.ActualObelisk = Build;
	
		}
		
	}

	function DestroyBuilding(Obj){

		Obj.Die = true;

		var List = [];

		for (var x = 0; x < Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net.length; x++) 
		if(Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].Object)
		if(Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].ObjectD != null)
		if(Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].ObjectD.List.length > 0)
		if(Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].ObjectD.ID == Obj.ID)
		List = Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].ObjectD.List;

		if(List.length > 1){

			for (var x = 0; x < Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net.length; x++) 
			for (var y = 0; y < Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net.length; y++) 
			if(Maps_Data[OPCamera.AMap].Chunks[List[y]].Net[x].Object)
			if(Maps_Data[OPCamera.AMap].Chunks[List[y]].Net[x].ObjectD != null)
			if(Maps_Data[OPCamera.AMap].Chunks[List[y]].Net[x].ObjectD.ID == Obj.ID){
	
				Maps_Data[OPCamera.AMap].Chunks[List[y]].Net[x].Object = false;
				Maps_Data[OPCamera.AMap].Chunks[List[y]].Net[x].ObjectD = null;
				
			}

		} else {

			for (var x = 0; x < Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net.length; x++) 
			if(Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].Object)
			if(Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].ObjectD != null)
			if(Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].ObjectD.ID == 
				Obj.ID){
	
				Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].Object = false;
				Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Net[x].ObjectD = null;
				
			}

		}
		
			var NewList = [];

			for (var x = 0; x < Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Objects.length; x++) 
			if(!Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Objects[x].Die) 
			NewList.push(Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Objects[x]);
			
			Maps_Data[OPCamera.AMap].Chunks[Obj.Chunk].Objects = NewList;
	
		if(Obj.Spec != null){

			var NewList = [];

			for (var x = 0; x < OPCamera[OPCamera.AMap].SBuildList.length; x++) 
			if(!OPCamera[OPCamera.AMap].SBuildList[x].Die) 
			NewList.push(OPCamera[OPCamera.AMap].SBuildList[x]);
			
			OPCamera[OPCamera.AMap].SBuildList = NewList;
		
		}

		ChangeObjects();
		NetHB( Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PX-(MainData.TouchX-MainData.DiffX)/MainData.PxW),
			   Math.abs(WindowList[WindowDrawList[WindowDrawList.length-1]].Window.PY-(MainData.TouchY-MainData.DiffY)/MainData.PxH));
	
	}

	function DeadBuildAnim(Build,AnimT){

		if(!Build.Dead){
			
			Build.Dead = true;
			Build.Type = AnimT;
		
			Build.AnimType = BuildAnimF[Build.Data.Name][Build.Type].AnimType;
			Build.File = BuildAnimF[Build.Data.Name][Build.Type].File;
			Build.MAnX = BuildAnimF[Build.Data.Name][Build.Type].MAnX;
			Build.AnX = 0;	
	
		}
		
	}

	// Objects Move

	function SetObjectsMove(Obj,Move,X,Y){
		
		var Data = ObjMoves[Obj.Type][Move];
		
		var M_ = {

			AnY: 0,
			MoveX: 0,
			MoveY: 0,
			ZeroX: 0,
			ZeroY: 0,
			Speed: Data.Speed,

		};
	
		var PX = Obj.PX, 
			PY = Obj.PY;

		var PXY = NPCMapBlock(X,Y);
			
		M_.ZeroX = PXY[0];
		M_.ZeroY = PXY[1];

		var dx = PX-M_.ZeroX,
			dy = PY-M_.ZeroY,
			angle = Math.atan2(dy, dx);

			M_.MoveX = Math.round(((M_.Speed * Math.cos(angle)) + Number.EPSILON) * 100) / 100;
			M_.MoveY = Math.round(((M_.Speed * Math.sin(angle)) + Number.EPSILON) * 100) / 100;
			
			if(M_.MoveX) M_.Counter = Math.round(Math.abs((PX-M_.ZeroX)/M_.MoveX));
			else M_.Counter = Math.round(Math.abs((PY-M_.ZeroY)/M_.MoveY));
		
		Obj.MoveList = M_;
		Obj.Move = Data.Move;
		Obj.AnimType = Data.AnimType;
		Obj.Route = (Math.atan2(PX - M_.ZeroX, PY - M_.ZeroY)* -1);
		Obj.MAnX = Data.MAnX;
		Obj.File = Data.File;
		Obj.Spec = Data.Spec;

	}
	
	function ObjectFun(Obj){

		switch (Obj.Move) {
			case 0: LineShot(Obj);
			break;
			case 1: TargetShot(Obj);
			break;
		}

	}

	function LineShot(Obj){

		Obj.PX -= Obj.MoveList.MoveX;
		Obj.PY -= Obj.MoveList.MoveY;
		
		if(!OPCamera[OPCamera.AMap].NPCList[Obj.NPC]) Obj.DeadNPC = true;
		
		if(!Obj.DeadNPC)
		if(OPCamera[OPCamera.AMap].NPCList[Obj.NPC].ID != Obj.NPCID){

			for (var x = 0; x < OPCamera[OPCamera.AMap].NPCList.length; x++) {
				
				if(OPCamera[OPCamera.AMap].NPCList[x].ID == Obj.NPCID) { Obj.NPC = x; return;}
				else if(x == OPCamera[OPCamera.AMap].NPCList.length-1) Obj.DeadNPC = true;

			}

		}

		if(!Obj.DeadNPC){
		
			if(Obj.MoveList.Counter <= 0) {
				
				switch (Obj.Spec) {
					case 0: PointDamage(Obj);
					break;
				}
				
			} else {
				
				Obj.MoveList.Counter --;
				
			}
			
		} else {

			Obj.MoveList.Counter --;
			
			if(Obj.MoveList.Counter <= 0) {
				
				switch (Obj.Spec) {
					//case 0: PointDamage(Obj);
					//break;
				}

				Obj.AnX = 0;
				SetObjectsMove(Obj,1,null,null);
	
			}

		}
		
	}

	function TargetShot(Obj){

		Obj.PX -= Obj.MoveList.MoveX;
		Obj.PY -= Obj.MoveList.MoveY;
		
		if(!OPCamera[OPCamera.AMap].NPCList[Obj.NPC]) Obj.DeadNPC = true;
		
		if(!Obj.DeadNPC)
		if(OPCamera[OPCamera.AMap].NPCList[Obj.NPC].ID != Obj.NPCID){

			for (var x = 0; x < OPCamera[OPCamera.AMap].NPCList.length; x++) {
				
				if(OPCamera[OPCamera.AMap].NPCList[x].ID == Obj.NPCID) { Obj.NPC = x; return;}
				else if(x == OPCamera[OPCamera.AMap].NPCList.length-1) Obj.DeadNPC = true;

			}

		}

		if(!Obj.DeadNPC){
		
			if(Obj.MoveList.Counter <= 0) {
				
				switch (Obj.Spec) {
					case 0: PointDamage(Obj);
					break;
				}

			} else {
				
				Obj.MoveList.Counter --;
				
				var PX = Obj.PX, 
					PY = Obj.PY;
	
				Obj.MoveList.Speed += 0.1;

				Obj.MoveList.ZeroX = OPCamera[OPCamera.AMap].NPCList[Obj.NPC].PX;
				Obj.MoveList.ZeroY = OPCamera[OPCamera.AMap].NPCList[Obj.NPC].PY;
	
				var dx = PX-Obj.MoveList.ZeroX,
					dy = PY-Obj.MoveList.ZeroY,
					angle = Math.atan2(dy, dx);
	
				Obj.MoveList.MoveX = Math.round(((Obj.MoveList.Speed * Math.cos(angle)) + Number.EPSILON) * 100) / 100;
				Obj.MoveList.MoveY = Math.round(((Obj.MoveList.Speed * Math.sin(angle)) + Number.EPSILON) * 100) / 100;
				Obj.Route = (Math.atan2(PX - Obj.MoveList.ZeroX, PY - Obj.MoveList.ZeroY)* -1);
		
				if(Obj.MoveList.MoveX) Obj.MoveList.Counter = Math.round(Math.abs((PX-Obj.MoveList.ZeroX)/Obj.MoveList.MoveX));
				else Obj.MoveList.Counter = Math.round(Math.abs((PY-Obj.MoveList.ZeroY)/Obj.MoveList.MoveY));

			}
			
		} else {

			Obj.MoveList.Counter --;
			
			if(Obj.MoveList.Counter <= 0) {
				
				switch (Obj.Spec) {
					//case 0: PointDamage(Obj);
					//break;
				}

				Obj.AnX = 0;
				SetObjectsMove(Obj,1,null,null);
	
			}

		}
		
	}

	function PointDamage(Obj){
			
		if(OPCamera[OPCamera.AMap].NPCList[Obj.NPC]){
							
			OPCamera[OPCamera.AMap].NPCList[Obj.NPC].Live -= Obj.Atk; 
			
			if(OPCamera[OPCamera.AMap].NPCList[Obj.NPC].Live <= 0 && !OPCamera[OPCamera.AMap].NPCList[Obj.NPC].Dying) {
				
				if(OPCamera[OPCamera.AMap].NPCList[Obj.NPC].Draw)
				if(Obj.Sound) PlaySound("Copy",SoundBase.KillSounds[OPCamera[OPCamera.AMap].NPCList[Obj.NPC].Data.Type]);
				else if(SoundBase["Copy"][SoundBase.KillSounds[OPCamera[OPCamera.AMap].NPCList[Obj.NPC].Data.Type]].List.length < 3)  
				PlaySound("Copy",SoundBase.KillSounds[OPCamera[OPCamera.AMap].NPCList[Obj.NPC].Data.Type]);

				PrepareToDie(Obj.NPC);

			}

		}

		Obj.AnX = 0;
		SetObjectsMove(Obj,1,null,null);

	}

	// NPC Moves Set

	function SetMoveList(NPC,MoveL){
		
		var PX = NPC.PX,
			PY = NPC.PY;

		if(NPC.PathN)
		var PathN = NPC.PathN; 
		else var PathN = 0;

		if(MoveL != null){

			if(MovesList[MoveL].loop) NPC.LoopMove = MoveL;
			else NPC.LoopMove = null;
	
			for (var x = PathN; x < MovesList[MoveL].length; x++) {
				
				if(!MovesList[MoveL].position){
				
					PX += MovesList[MoveL][x].Xm;
					PY += MovesList[MoveL][x].Ym;
					
				} else {
					
					PX = MovesList[MoveL][x].Xm;
					PY = MovesList[MoveL][x].Ym;
					
				}

				if(MovesList[MoveL][x].Random != null)
				Pathfinding(NPC,MovesList[MoveL][x].Move,
					PX+(Math.floor((Math.random() * MovesList[MoveL][x].Random))-MovesList[MoveL][x].Random/2),
					PY+(Math.floor((Math.random() * MovesList[MoveL][x].Random))-MovesList[MoveL][x].Random/2),
					MovesList[MoveL][x].Pos);
				else Pathfinding(NPC,MovesList[MoveL][x].Move,PX,PY,MovesList[MoveL][x].Pos);
			}

		} else NPC.LoopMove = null;

		NPC.PathN = 0; 

	}

	function Pathfinding(NPC,Move,X,Y,Pos){
		
		if(Move == null) var Data = Moves[NPC.Type][Math.floor((Math.random() * Moves[NPC.Type].length))];
		else var Data = Moves[NPC.Type][Move];
		
		switch (NPC.Data.NPCT) {
			case 0: SetNPCmove(NPC,Data,X,Y,Pos);
			break;	
			case 1: SetEnergymove(NPC,Data);
			break;	
		}

	}

	function SetMove(NPC,Reset){

		if(NPC.MoveList.length == 1 || Reset){
			
			NPC.MoveList = [];

			if(NPC.LoopMove != null) SetMoveList(NPC,NPC.LoopMove);
			else if(!Reset) Pathfinding(NPC,null,0,0);

		} else {
			
			var NewList = [];

			for (var x = 1; x < NPC.MoveList.length; x++) 
			NewList.push(NPC.MoveList[x]);
			
			NPC.MoveList = NewList;
		
			NPC.Move = NPC.MoveList[0].Move;
			NPC.File = NPC.MoveList[0].File; 
			NPC.MAnX = NPC.MoveList[0].MAnX;
			NPC.AnY = NPC.MoveList[0].AnY; 
			NPC.AnimType = NPC.MoveList[0].AnimType; 		
			
			if(NPC.AnX > NPC.MAnX)
			NPC.AnX = NPC.MAnX;
	
		}

	}
	
	function SetNPCmove(NPC,Data,X,Y,Pos){
		
		var M_ = {

			Move: 0,
			File: 0,

			AnY: 0,
			MAnX: 0,
			AnimType: null,

			MoveX: 0,
			MoveY: 0,
			ZeroX: 0,
			ZeroY: 0,
			Speed: Data.Speed,

		};
	
		if(NPC.MoveList.length > 0){

			var PX = NPC.MoveList[NPC.MoveList.length-1].ZeroX, 
				PY = NPC.MoveList[NPC.MoveList.length-1].ZeroY;

		} else {

			var PX = NPC.PX, 
				PY = NPC.PY;

		}

		if(Data.Speed) {
			
			switch (NPC.Blocade) {
				case 0: var PXY = NPCMapBlock(X,Y);
				break;	
				case 1: var PXY = NPCCameraBlock(X,Y);
				break;	
				case 2: var PXY = [X,Y];
				break;	
			}

			M_.ZeroX = PXY[0];
			M_.ZeroY = PXY[1];

			var dx = PX-M_.ZeroX,
				dy = PY-M_.ZeroY,
				angle = Math.atan2(dy, dx);

				M_.MoveX = Math.round(((M_.Speed * Math.cos(angle)) + Number.EPSILON) * 100) / 100;
				M_.MoveY = Math.round(((M_.Speed * Math.sin(angle)) + Number.EPSILON) * 100) / 100;
				
				if(M_.MoveX) M_.Counter = Math.round(Math.abs((PX-M_.ZeroX)/M_.MoveX));
				else M_.Counter = Math.round(Math.abs((PY-M_.ZeroY)/M_.MoveY));

			if(M_.MoveX <= 0) M_.AnY = 1; 
			else M_.AnY = 0;
		
			if(M_.ZeroY == PY) var Dir = "Down"; // Equal
			else if(M_.ZeroY > PY) var Dir = "Down"; // Down
			else var Dir = "Up"; // Up
			
		} else {
			
			M_.ZeroX = PX;
			M_.ZeroY = PY;

			if(Data.Counter > 500) M_.Counter = Data.Counter;
			else M_.Counter = Math.floor((Math.random() * Data.Counter)+100);
		
			if(Pos){

				if(Pos[0] == 1) M_.AnY = 1; 
				else M_.AnY = 0;
			
				if(Pos[1] == 1) var Dir = "Down"; 
				else var Dir = "Up";

			} else{

				if(Math.floor((Math.random() * 2)) == 1) 
				M_.AnY = 1; else M_.AnY = 0;
			
				if(Math.floor((Math.random() * 2)) == 1)
				var Dir = "Down"; else var Dir = "Up";
				
			}

		}

		M_.Speed = Data.Speed;
		M_.Move = Data.Move;
		M_.File = NPC.Data.Name+"_"+Data.File+"_"+Dir; 

		M_.MAnX = Data.MAnX; 
		M_.AnimType = Data.AnimType; 

		NPC.MoveList.push(M_);
		
		if(NPC.MoveList.length == 1){
		
			NPC.Move = NPC.MoveList[0].Move;
			NPC.File = NPC.MoveList[0].File; 
			NPC.MAnX = NPC.MoveList[0].MAnX; 
			NPC.AnY = NPC.MoveList[0].AnY; 	
			NPC.AnimType = NPC.MoveList[0].AnimType; 	
	
			if(NPC.AnX > NPC.MAnX)
			NPC.AnX = NPC.MAnX;
		}
		
	}
	
	function SetEnergymove(NPC,Data){
		
		var M_ = {

			Move: 0,
			File: 0,

			AnY: 0,
			MAnX: 0,
			AnimType: null,

			MoveX: 0,
			MoveY: 0,
			ZeroX: 0,
			ZeroY: 0,
			Speed: Data.Speed,

		};
	
		M_.ZeroX = 0;
		M_.ZeroY = 0;

		M_.Counter = 1000;
	
		M_.Speed = Data.Speed;
		M_.Move = Data.Move;
		M_.File = NPC.Data.Name;

		M_.MAnX = Data.MAnX; 
		M_.AnimType = Data.AnimType; 

		NPC.MoveList.push(M_);
		
		if(NPC.MoveList.length == 1){
		
			NPC.Move = NPC.MoveList[0].Move;
			NPC.File = NPC.MoveList[0].File; 
			NPC.MAnX = NPC.MoveList[0].MAnX; 
			NPC.AnY = NPC.MoveList[0].AnY; 	
			NPC.AnimType = NPC.MoveList[0].AnimType; 	
	
			if(NPC.AnX > NPC.MAnX)
			NPC.AnX = NPC.MAnX;
		}
		
	}

	function NPCMapBlock(X,Y){
		
		if(X < 20) X = 20; 
		else if(X > (Maps_Data[OPCamera.AMap].MapSizeX*Maps_Data[OPCamera.AMap].Size)-20 ) 
		X = (Maps_Data[OPCamera.AMap].MapSizeX*Maps_Data[OPCamera.AMap].Size)-20;
		
		if(Y < 20) Y = 20; 
		else if(Y > (Maps_Data[OPCamera.AMap].MapSizeY*Maps_Data[OPCamera.AMap].Size)-20 ) 
		Y = (Maps_Data[OPCamera.AMap].MapSizeY*Maps_Data[OPCamera.AMap].Size)-20;
		
		return [X,Y];

	}
	
	function NPCCameraBlock(X,Y){
	
		if(X < OPCamera[OPCamera.AMap].PX-Maps_Data[OPCamera.AMap].CameraDiff.XL) X = OPCamera[OPCamera.AMap].PX-Maps_Data[OPCamera.AMap].CameraDiff.XL; 
		else if(X > OPCamera[OPCamera.AMap].PX+(Maps_Data[OPCamera.AMap].CHX*2)-Maps_Data[OPCamera.AMap].CameraDiff.XR) 
		X = OPCamera[OPCamera.AMap].PX+(Maps_Data[OPCamera.AMap].CHX*2)-Maps_Data[OPCamera.AMap].CameraDiff.XR;
		
		if(Y < OPCamera[OPCamera.AMap].PY-Maps_Data[OPCamera.AMap].CameraDiff.YL) Y = OPCamera[OPCamera.AMap].PY-Maps_Data[OPCamera.AMap].CameraDiff.YL; 
		else if(Y > OPCamera[OPCamera.AMap].PY+(Maps_Data[OPCamera.AMap].CHY*2)-Maps_Data[OPCamera.AMap].CameraDiff.YR) 
		Y = OPCamera[OPCamera.AMap].PY+(Maps_Data[OPCamera.AMap].CHY*2)-Maps_Data[OPCamera.AMap].CameraDiff.YR;
		
		return [X,Y];

	}

	function PrepareToDie(NPC_){

		var NPC = OPCamera[OPCamera.AMap].NPCList[NPC_],
			Move = Moves[NPC.Type][Moves[NPC.Type].Die];

		NPC.Dying = true;
		NPC.LoopMove = null;
		
		SetMove(NPC,true); 
		Pathfinding(NPC,Moves[NPC.Type].Die,0,0);

		NPC.AnX = 0;
		
		NPC.DieCounter = 0;
		NPC.MDieCounter = Move.DieCounter;

	}

	// Hero Control 

	function PointNPCcontrol(X,Y){

		var Xrandom = JSON.parse(JSON.stringify(X+OPCamera[OPCamera.AMap].PX)),
			Yrandom = JSON.parse(JSON.stringify(Y+OPCamera[OPCamera.AMap].PY));
			
		if(OPCamera[OPCamera.AMap].NPCList.length > 0 && OPCamera[OPCamera.AMap].NPCNumC != null)
		if(!OPCamera[OPCamera.AMap].NPCCType && OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC].LoopMove == null){
			
			if( !( 
				Xrandom > OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC].PX-40 && 
				Yrandom > OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC].PY-40 && 
				Xrandom < OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC].PX+40 && 
				Yrandom < OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC].PY+40)){
				
				SetMove(OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC],true); 
				HeroControl(OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC],1,Xrandom,Yrandom);
				HeroControl(OPCamera[OPCamera.AMap].NPCList[OPCamera[OPCamera.AMap].NPCNumC],0); 
			}

		}
			
	}
	
	function HeroControl(NPC,Move,X,Y){
		
		Pathfinding(NPC,Move,X,Y);

	}

	function HeroBlock(X,Y,NPC){
		
		var Map = Maps_Data[OPCamera.AMap];
		
		// Map

		if(NPC.PX+X < NPC.Data.HitBox.Width/2) X = 0; 
		else if(NPC.PX+X > (Map.MapSizeX*Map.Size)-NPC.Data.HitBox.Width/2 ) X = 0;
		
		if(NPC.PY+Y < NPC.Data.HitBox.Height/2) Y = 0; 
		else if(NPC.PY+Y > (Map.MapSizeY*Map.Size)-NPC.Data.HitBox.Height/2 ) Y = 0;

		// Camera
		
		if(NPC.PX+X < OPCamera[OPCamera.AMap].PX+NPC.Data.HitBox.Width/2) X = 0; 
		else if(NPC.PX+X > OPCamera[OPCamera.AMap].PX+(Map.CHX*2)-NPC.Data.HitBox.Width/2) X = 0;
		
		if(NPC.PY+Y < OPCamera[OPCamera.AMap].PY+NPC.Data.HitBox.Height/2) Y = 0; 
		else if(NPC.PY+Y > OPCamera[OPCamera.AMap].PY+(Map.CHY*2)-NPC.Data.HitBox.Height/2) Y = 0;
		
		return [X/2,Y/2];

	}

	function HeroCollision(NPC,MoveX,MoveY){
		
		var MD = Maps_Data[OPCamera.AMap], 
			CD = OPCamera[OPCamera.AMap]; 

		for(var x = -MD.DChunksX; x < MD.DChunksX+1; x++) 
		for(var y = -MD.DChunksY; y < MD.DChunksY+1; y++)
		if( CD.InChY+y > -1 && CD.InChX+x > -1 && CD.InChY+y < MD.MapSizeY && CD.InChX+x < MD.MapSizeX){

			var Obj = Maps_Data[OPCamera.AMap].Chunks[(MD.MapSizeX*(CD.InChY+y))+(CD.InChX+x)].Objects;

			for (var z = 0; z < Obj.length; z++)
			if(Obj[z].Data.Collision){

				var Opx = Obj[z].PX+Obj[z].Data.HitBox.PX,
					Opy = Obj[z].PY+Obj[z].Data.HitBox.PY,

					Npx = (NPC.PX+NPC.Data.HitBox.PX),
					Npy = (NPC.PY+NPC.Data.HitBox.PY),
					
					MoveX_ = MoveX*2,
					MoveY_ = MoveY*2;

				if( Npx+NPC.Data.HitBox.Width+MoveX_ > Opx && Npy+NPC.Data.HitBox.Height > Opy && 
					Npx+MoveX_ < Opx+Obj[z].Data.HitBox.Width && Npy < Opy+Obj[z].Data.HitBox.Height) MoveX = 0;
	
				if( Npx+NPC.Data.HitBox.Width > Opx && Npy+NPC.Data.HitBox.Height+MoveY_ > Opy && 
					Npx < Opx+Obj[z].Data.HitBox.Width && Npy+MoveY_ < Opy+Obj[z].Data.HitBox.Height) MoveY = 0;
	
			}
	
		}

		var MapBlock = HeroBlock(MoveX*2,MoveY*2,NPC);
		
		return [MapBlock[0],MapBlock[1]];

	}

	// NPC Movement

	function ChunkFunction(NPC){
	
		switch (NPC.Up) {
			case 0: ChunkCheck_0(NPC);
			break;		
			case 1: ChunkCheck_1(NPC);
			break;	
		}
		
	}

	function ChunkCheck_0(NPC){
		
		var Chunk = null;

		for(var x = -Maps_Data[OPCamera.AMap].DChunksX; x < Maps_Data[OPCamera.AMap].DChunksX+1; x++) 
		for(var y = -Maps_Data[OPCamera.AMap].DChunksY; y < Maps_Data[OPCamera.AMap].DChunksY+1; y++)
		if(OPCamera[OPCamera.AMap].InChY+y > -1 && OPCamera[OPCamera.AMap].InChX+x > -1 && OPCamera[OPCamera.AMap].InChY+y < Maps_Data[OPCamera.AMap].MapSizeY && OPCamera[OPCamera.AMap].InChX+x < Maps_Data[OPCamera.AMap].MapSizeX)
		if( NPC.PX >= ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChX)+(Maps_Data[OPCamera.AMap].Size*x)) && 
		NPC.PX <= ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChX)+(Maps_Data[OPCamera.AMap].Size*x))+Maps_Data[OPCamera.AMap].Size && 
			NPC.PY >= ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChY)+(Maps_Data[OPCamera.AMap].Size*y)) && 
			NPC.PY <= ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChY)+(Maps_Data[OPCamera.AMap].Size*y))+Maps_Data[OPCamera.AMap].Size)
			Chunk = (Maps_Data[OPCamera.AMap].MapSizeX*(OPCamera[OPCamera.AMap].InChY+y))+(OPCamera[OPCamera.AMap].InChX+x);
			
		if(Chunk != null) {
			
			NPC.Chunk = Chunk;

			if( NPC.Draw == null ){ 
				
				NPC.Draw = true;

				OPCamera[OPCamera.AMap].SortList.push(NPC);
	
				return;
				
			}

		} else {

			if(NPC.Draw != null){
				
				NPC.Draw = null;

				var NewList = [];

				for (var x = 0; x < OPCamera[OPCamera.AMap].SortList.length; x++) 
				if(!OPCamera[OPCamera.AMap].SortList[x].Die &&(OPCamera[OPCamera.AMap].SortList[x].Draw != null || OPCamera[OPCamera.AMap].SortList[x].Data.Solid)) NewList.push(OPCamera[OPCamera.AMap].SortList[x]);
				
				OPCamera[OPCamera.AMap].SortList = NewList;
			
			}

		}

	}

	function ChunkCheck_1(NPC){
		
		var Chunk = null;

		for(var x = -Maps_Data[OPCamera.AMap].DChunksX; x < Maps_Data[OPCamera.AMap].DChunksX+1; x++) 
		for(var y = -Maps_Data[OPCamera.AMap].DChunksY; y < Maps_Data[OPCamera.AMap].DChunksY+1; y++)
		if(OPCamera[OPCamera.AMap].InChY+y > -1 && OPCamera[OPCamera.AMap].InChX+x > -1 && OPCamera[OPCamera.AMap].InChY+y < Maps_Data[OPCamera.AMap].MapSizeY && OPCamera[OPCamera.AMap].InChX+x < Maps_Data[OPCamera.AMap].MapSizeX)
		if( NPC.PX >= ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChX)+(Maps_Data[OPCamera.AMap].Size*x)) && 
		NPC.PX <= ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChX)+(Maps_Data[OPCamera.AMap].Size*x))+Maps_Data[OPCamera.AMap].Size && 
			NPC.PY >= ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChY)+(Maps_Data[OPCamera.AMap].Size*y)) && 
			NPC.PY <= ((Maps_Data[OPCamera.AMap].Size*OPCamera[OPCamera.AMap].InChY)+(Maps_Data[OPCamera.AMap].Size*y))+Maps_Data[OPCamera.AMap].Size)
			Chunk = (Maps_Data[OPCamera.AMap].MapSizeX*(OPCamera[OPCamera.AMap].InChY+y))+(OPCamera[OPCamera.AMap].InChX+x);
			
		if(Chunk != null) {
			
			NPC.Chunk = Chunk;

			if( NPC.Draw == null ){ 
				
				NPC.Draw = true;

				OPCamera[OPCamera.AMap].NPCDrawL.push(NPC);
	
				return;
				
			}

		} else {

			if(NPC.Draw != null){ 
				
				NPC.Draw = null;

				var NewList = [];

				for (var x = 0; x < OPCamera[OPCamera.AMap].NPCDrawL.length; x++) 
				if(!OPCamera[OPCamera.AMap].NPCDrawL[x].Die && OPCamera[OPCamera.AMap].NPCDrawL[x].Draw != null) 
				NewList.push(OPCamera[OPCamera.AMap].NPCDrawL[x]);
				
				OPCamera[OPCamera.AMap].NPCDrawL = NewList;
			
			}

		}

	}

	function MoveList(NPC){
	
		switch (NPC.Move) {
			case 0: NPCstay(NPC);
			break;	
			case 1: NPCmove(NPC);
			break;	
			case 2: DieEnergymove(NPC);
			break;
			case 3: Energymove(NPC);
			break;
			case 4: LookingForHero(NPC);
			break;
		}

		switch (NPC.Spec) {
			// case 0: NPCstay(NPC);
			// break;		
		}
		
	}

	function NPCstay(NPC){

		if(NPC.MoveList[0].Counter <= 0) SetMove(NPC); 
		else NPC.MoveList[0].Counter --;
	
	}

	function NPCmove(NPC){

		NPC.PX -= NPC.MoveList[0].MoveX;
		NPC.PY -= NPC.MoveList[0].MoveY;

		if(NPC.MoveList[0].Counter <= 0) SetMove(NPC); 
		else NPC.MoveList[0].Counter --;
		
	}

	// Energy Moves

	function DieEnergymove(NPC){
		
		NPC.PX = OPCamera[OPCamera.AMap].NPCList[0].PX;
		NPC.PY = OPCamera[OPCamera.AMap].NPCList[0].PY+20;

	}

	function Energymove(NPC){
		
		var PX = NPC.PX, 
			PY = NPC.PY;

			NPC.MoveList[0].Speed += 0.3;

			NPC.MoveList[0].ZeroX = OPCamera[OPCamera.AMap].NPCList[0].PX;
			NPC.MoveList[0].ZeroY = OPCamera[OPCamera.AMap].NPCList[0].PY+20;

			var dx = PX-NPC.MoveList[0].ZeroX,
				dy = PY-NPC.MoveList[0].ZeroY,
				angle = Math.atan2(dy, dx);

			NPC.MoveList[0].MoveX = Math.round(((NPC.MoveList[0].Speed * Math.cos(angle)) + Number.EPSILON) * 100) / 100;
			NPC.MoveList[0].MoveY = Math.round(((NPC.MoveList[0].Speed * Math.sin(angle)) + Number.EPSILON) * 100) / 100;

			if(NPC.MoveList[0].MoveX) NPC.MoveList[0].Counter = Math.round(Math.abs((PX-NPC.MoveList[0].ZeroX)/NPC.MoveList[0].MoveX));
			else NPC.MoveList[0].Counter = Math.round(Math.abs((PY-NPC.MoveList[0].ZeroY)/NPC.MoveList[0].MoveY));

		NPC.PX -= NPC.MoveList[0].MoveX;
		NPC.PY -= NPC.MoveList[0].MoveY;

		if(NPC.MoveList[0].Counter <= 0) {
		
			if(!NPC.Dying){
				
				NPC.Dying = true;

				SetMove(NPC,true); 
				Pathfinding(NPC,2,0,0);
				NPC.AnX = 0;
		
				AddData.PointsRD++;
				SpecText.RD1 = [AddData.PointsRD];

				//PlayCopySound("Copy",2);

			}
			
		} else NPC.MoveList[0].Counter --;
		
	}

	function LookingForHero(NPC){
		
			var	r = 150;

			var	a = NPC.PX, 
				b = NPC.PY;
			
				r *= r;

			var Dis = (a - OPCamera[OPCamera.AMap].NPCList[0].PX) * 
					(a - OPCamera[OPCamera.AMap].NPCList[0].PX) + 
					(b - OPCamera[OPCamera.AMap].NPCList[0].PY) * 
					(b - OPCamera[OPCamera.AMap].NPCList[0].PY);
		
		if (Dis < r) {

			SetMove(NPC,true); 
			Pathfinding(NPC,1,
				OPCamera[OPCamera.AMap].NPCList[0].PX,
				OPCamera[OPCamera.AMap].NPCList[0].PY+30);
			
		} 

	}

	//----------------------------------

	// NPC Animations 

	function MapObjAnim(){

		for (var x = 0; x < OPCamera[OPCamera.AMap].NPCList.length; x++) {
			
			if(OPCamera[OPCamera.AMap].NPCList[x].Dying && 
				OPCamera[OPCamera.AMap].NPCList[x].AnimType != 1 && 
					OPCamera[OPCamera.AMap].NPCList[x].AnimType != 3 && 
						OPCamera[OPCamera.AMap].NPCList[x].AnimType != 4){
			
				OPCamera[OPCamera.AMap].NPCList[x].Die = true;
				DeleteNPC(OPCamera[OPCamera.AMap].NPCList[x]);
				
				ChangeObjects();
			
			}

			switch (OPCamera[OPCamera.AMap].NPCList[x].AnimType) {
				case 0: MOInfAnim(OPCamera[OPCamera.AMap].NPCList[x]);
				break;
				case 1: DieNPC(OPCamera[OPCamera.AMap].NPCList[x]);
				break;		
				case 2: RunNPC(OPCamera[OPCamera.AMap].NPCList[x]);
				break;	
				case 3: DieNPCWait(OPCamera[OPCamera.AMap].NPCList[x]);
				break;		
			}

		}

		ObjectAnimations();

	}

	function MOInfAnim(NPC){

		if (NPC.AnX >= NPC.MAnX) NPC.AnX = 0;
		else NPC.AnX++; 
		
	}

	function DieNPC(NPC){

		if (NPC.AnX >= NPC.MAnX){
		
			NPC.Die = true;
			DeleteNPC(NPC);
			
			ChangeObjects();
	
		} else NPC.AnX++; 
		
	}

	function RunNPC(NPC){

		if (NPC.AnX >= NPC.MAnX) NPC.AnX = 0;
		else NPC.AnX++; 
		
		var Val = true;

		var PX = NPC.PX+Maps_Data[OPCamera.AMap].Weather.Rain.NPC["PX_"+NPC.AnX],
			PY = NPC.PY+Maps_Data[OPCamera.AMap].Weather.Rain.NPC.PY;

		for(var q = 0; q < OpenWorldData[OPCamera.AMap].NPCRain.length; q++) 		
		if(OpenWorldData[OPCamera.AMap].NPCRain[q] == null){
		
			OpenWorldData[OPCamera.AMap].NPCRain[q] = {

				"PX": PX,
				"PY": PY,
				"AnX": 0,
				"Alpha": 1,
	
			};
			
			Val = false;
			q = OpenWorldData[OPCamera.AMap].NPCRain.length;
			
		}
		
		if(Val)
		OpenWorldData[OPCamera.AMap].NPCRain.push({

			"PX": PX,
			"PY": PY,
			"AnX": 0,
			"Alpha": 1,

		});
		
		OpenWorldData[OPCamera.AMap].Count_Rain++;

		if(OpenWorldData[OPCamera.AMap].Count_Rain > Maps_Data[OPCamera.AMap].Weather.Rain.Count_Rain_Max){
			
			PlaySound("Copy",SoundBase.OpenWorld.NPC_Foot);
			OpenWorldData[OPCamera.AMap].Count_Rain = 0;

		}

	}

	function DieNPCWait(NPC){

		NPC.DieCounter++;

		if(NPC.MDieCounter[NPC.AnX] <= NPC.DieCounter){

			if (NPC.AnX >= NPC.MAnX){
				
				NPC.Die = true;
				DeleteNPC(NPC);
				
				ChangeObjects();
		
			} else NPC.AnX++; 
			
			NPC.DieCounter = 0;

		}
		
	}

	// Objects Animations

	function ObjectAnimations(){

		for (var x = 0; x < OPCamera[OPCamera.AMap].ObjectList.length; x++) 
		switch (OPCamera[OPCamera.AMap].ObjectList[x].AnimType) {
			case 0: ObjectAnim(OPCamera[OPCamera.AMap].ObjectList[x]);
			break;
			case 1: ObjectDestroy(OPCamera[OPCamera.AMap].ObjectList[x]);
			break;		
		}
		
	}

	function ObjectAnim(Obj){

		if (Obj.AnX >= Obj.MAnX) Obj.AnX = 0;
		else Obj.AnX++; 
		
	}

	function ObjectDestroy(Obj){

		if (Obj.AnX >= Obj.MAnX){
					
			Obj.Die = true;
	
			var NewList = [];

			for (var x = 0; x < OPCamera[OPCamera.AMap].ObjectList.length; x++) 
			if(!OPCamera[OPCamera.AMap].ObjectList[x].Die) 
			NewList.push(OPCamera[OPCamera.AMap].ObjectList[x]);
			
			OPCamera[OPCamera.AMap].ObjectList = NewList;
		
		} else Obj.AnX++; 
		
	}

	// Buildings Animations

	function BuildingsAnimations(){

		for (var x = 0; x < OPCamera[OPCamera.AMap].SBuildList.length; x++) {

			if(OPCamera[OPCamera.AMap].SBuildList[x].AnimCounter <= 0)
			switch (OPCamera[OPCamera.AMap].SBuildList[x].AnimType) {
				case 0: BuildAnim(OPCamera[OPCamera.AMap].SBuildList[x]);
				break;	
				case 1: BuildShoot(OPCamera[OPCamera.AMap].SBuildList[x]);
				break;	
				case 2: BuildDestroy(OPCamera[OPCamera.AMap].SBuildList[x]);
				break;
			}
			
			if(OPCamera[OPCamera.AMap].SBuildList[x]){

				OPCamera[OPCamera.AMap].SBuildList[x].AnimCounter--;

				if(OPCamera[OPCamera.AMap].SBuildList[x].Data.SpeedC)
				OPCamera[OPCamera.AMap].SBuildList[x].AnimCounter -= OPCamera[OPCamera.AMap].SBuildList[x].Data.SpeedC;
	
			}
			
		}
		
		if(Maps_Data[OPCamera.AMap].NoFrameRefresh)
		OPMoveObjects();

	}

	function BuildAnim(Obj){

		Obj.AnimCounter = BuildAnimF[Obj.Data.Name][Obj.Type].AnimCounter;

		if (Obj.AnX >= Obj.MAnX){
			
			Obj.Type = BuildAnimF[Obj.Data.Name][Obj.Type].Next;

			Obj.File = BuildAnimF[Obj.Data.Name][Obj.Type].File;
			Obj.MAnX = BuildAnimF[Obj.Data.Name][Obj.Type].MAnX;
			Obj.AnimType = BuildAnimF[Obj.Data.Name][Obj.Type].AnimType;

			Obj.AnX = 0;

		} else Obj.AnX++; 
		
	}

	function BuildShoot(Obj){

		Obj.AnimCounter = BuildAnimF[Obj.Data.Name][Obj.Type].AnimCounter;

		var Boom = AnimBuildFun(Obj);
			
		if (Obj.AnX >= Obj.MAnX) Obj.AnX = 0;
		else Obj.AnX++; 

		if(Boom){
		
			if(OPCamera[OPCamera.AMap].SortList.includes(Obj))
			PlaySound("Copy",SoundBase.ShootSounds[Obj.Data.Name]);

			Obj.AnX = 0;
			Obj.Type = BuildAnimF[Obj.Data.Name][Obj.Type].Next;

			Obj.File = BuildAnimF[Obj.Data.Name][Obj.Type].File;
			Obj.MAnX = BuildAnimF[Obj.Data.Name][Obj.Type].MAnX;
			Obj.AnimType = BuildAnimF[Obj.Data.Name][Obj.Type].AnimType;

		}
		
	}

	function BuildDestroy(Obj){

		Obj.AnimCounter = BuildAnimF[Obj.Data.Name][Obj.Type].AnimCounter;

		if (Obj.AnX >= Obj.MAnX) DestroyBuilding(Obj);
		else Obj.AnX++; 
		
	}

	// ----------------------------- Test / Demonstration -----------------------------

	function RandomMoney(Money){
	
		AddData.Coins += Money;
		SpecText.N4 = [AddData.Coins];

		var PX = (MainData.TouchX-MainData.DiffX)/MainData.PxW,
			PY = (MainData.TouchY-MainData.DiffY)/MainData.PxH;

		var Check = false, Num = 0;
	
		if(AddData.Money.length > 1)
		for (var x = 0; x < AddData.Money.length; x++) 
		if(AddData.Money[x].length == 0){

			Check = true;
			Num = x;

		}

		if(Check) {

			for (var x = 0; x < Money; x++) {
			
				AddData.Money[Num].push({
						
					File: "Money",
					Width: 20, 
					Height: 20,
					TMW: 29, 
					TMH: 29,
					AnX: Math.floor((Math.random() * 2)+1),
					TMX: 29,
					TMY: 0,

					PX: PX, 
					PY: PY,
					XEnd: PX+Math.floor((Math.random() * 160)-80),
					YEnd: PY+Math.floor((Math.random() * 160)-80),
					XMove: 0,
					YMove: 0,

					Speed: Math.floor((Math.random() * 3)+9),
					Type: 1,
					Counter: 0,
					
				});	
				
				var Mon = AddData.Money[Num][x];
			
				var dx = Mon.PX-Mon.XEnd,
					dy = Mon.PY-Mon.YEnd,
					angle = Math.atan2(dy, dx);
				
					Mon.XMove = Math.round(((Mon.Speed * Math.cos(angle)) + Number.EPSILON) * 100) / 100;
					Mon.YMove = Math.round(((Mon.Speed * Math.sin(angle)) + Number.EPSILON) * 100) / 100;
					
					if(Mon.XMove)
					Mon.Counter = Math.round(Math.abs((Mon.PX-Mon.XEnd)/Mon.XMove));
					else Mon.Counter = Math.round(Math.abs((Mon.PY-Mon.YEnd)/Mon.YMove));
	
			}

		} else {
			
			AddData.Money.push([]);

			for (var x = 0; x < Money; x++) {
			
				AddData.Money[AddData.Money.length-1].push({
						
					File: "Money",
					Width: 20, 
					Height: 20,
					TMW: 29, 
					TMH: 29,
					AnX: Math.floor((Math.random() * 2)+1),
					TMX: 29,
					TMY: 0,

					PX: PX, 
					PY: PY,
					XEnd: PX+Math.floor((Math.random() * 160)-80),
					YEnd: PY+Math.floor((Math.random() * 160)-80),
					XMove: 0,
					YMove: 0,

					Speed: Math.floor((Math.random() * 3)+9),
					Type: 1,
					Counter: 0,
					
				});	
				
				var Mon = AddData.Money[AddData.Money.length-1][x];
			
				var dx = Mon.PX-Mon.XEnd,
					dy = Mon.PY-Mon.YEnd,
					angle = Math.atan2(dy, dx);
				
					Mon.XMove = Math.round(((Mon.Speed * Math.cos(angle)) + Number.EPSILON) * 100) / 100;
					Mon.YMove = Math.round(((Mon.Speed * Math.sin(angle)) + Number.EPSILON) * 100) / 100;
					
					if(Mon.XMove)
					Mon.Counter = Math.round(Math.abs((Mon.PX-Mon.XEnd)/Mon.XMove));
					else Mon.Counter = Math.round(Math.abs((Mon.PY-Mon.YEnd)/Mon.YMove));
	
			}
	
		}
		
	}

	// ------------------------ Keyboard List -------------------------

	function KeysUpdate(){

		var MoveY = 0;

		if(Keyboard.key.down) MoveY = 40;
		else if(Keyboard.key.up) MoveY = -40;

		if(MainData.OnWindow && !MainData.WindowMove && MoveY != 0){
               
			var ActWin = WindowList[WindowDrawList[WindowDrawList.length-1]];
				
			if(ActWin.Window.List){

				var ObjectList = ActWin.Window;
				
				if(ObjectList.ListSpecial.DifferenceY-MoveY < 0 && ActWin.CopyList.length > ObjectList.List.StopListX){

					if(Math.abs(ObjectList.ListSpecial.DifferenceY-MoveY) < ObjectList.ListSpecial.StopList)
						ObjectList.ListSpecial.DifferenceY -= MoveY;
					else 
						ObjectList.ListSpecial.DifferenceY = -ObjectList.ListSpecial.StopList;
				
				} else ObjectList.ListSpecial.DifferenceY = 0;
				
				ButtonClean();
			
			}
				
		}

	}