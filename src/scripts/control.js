// 1. Earth, 2. Spirit, 3. Warfare, 4. Nature, 5. Defense, 6. Rogue, 7. Hunting, 8. Storm

var _SkillLevel = new Array() //0
var UserSkills = new Array();
var _TotalPoints = 222;
var isIE = document.all;
Mastery = new Array() // stores mastery data for this page
AttributesBase = new Array() // stores base attributes for characters



function SetUserSkills() {
	this.SkillLevel = new Array(19)
}

function SetPage(masteryid, bolReset) {

	if (bolReset) { // if we already have a array defined, we are resetting 
		if (!confirm('Are you sure you want to reset the ' + Mastery[masteryid].masteryname + ' mastery?')) { return false; }
		_TotalPoints = parseInt(_TotalPoints) + parseInt(_SkillLevel[masteryid])
		var TotalPoints = 0
		for (var y = 0; y < UserSkills[masteryid].SkillLevel.length; y++) {
			if (UserSkills[masteryid].SkillLevel[y]) {
				TotalPoints = TotalPoints + UserSkills[masteryid].SkillLevel[y]
			}
		}
		_TotalPoints = parseInt(_TotalPoints) + TotalPoints
	}

	UserSkills[masteryid] = new SetUserSkills()
	_SkillLevel[masteryid] = 0;

	
	if (masteryid > 0)
		for (var x = 0; x < (Mastery[masteryid].Skills.length); x++) {
			if (document.getElementById("spell_" + masteryid + '_' + (x + 1))) {
				document.getElementById("spell_" + masteryid + '_' + (x + 1)).innerHTML = "0 of " + ((Mastery[masteryid].Skills[x].spells.length) - 1)
			}
		}

	UpdateSkillStats(masteryid)
	UpdateLinkBack()
	UpdatePlayerBaseAttributes()
	UpdateSkillBar(masteryid)
	if (bolReset) { DrawSpellList() } // redraw spells on resets


	if (!bolReset) {
		if (_PreSet1.length > 0 && UserSkills[_Mastery1] && masteryid == _Mastery1) {
			SetFormFromReturn(_PreSet1, _Mastery1)
		}
		if (_PreSet2.length > 0 && UserSkills[_Mastery2] && masteryid == _Mastery2) {
			SetFormFromReturn(_PreSet2, _Mastery2)
		}
	}

}
function AddSkillLevel(masteryid, button, skilllevel) {
	if (button != 2 && !skilllevel) {

		if ((parseInt(_SkillLevel[masteryid]) + 1) <= 32) {

			_SkillLevel[masteryid]++
			_TotalPoints = _TotalPoints - 1
		}
	}
	else if (skilllevel) { // we are directly setting the skill level by clicking the bar
		for (var x = 0; x < (Mastery[masteryid].Skills.length); x++) {
			if (Mastery[masteryid].Skills[x].min_points >= skilllevel && UserSkills[masteryid].SkillLevel[x] > 0) {
				return false;
			}
		}
		_TotalPoints = _TotalPoints + _SkillLevel[masteryid] - skilllevel
		_SkillLevel[masteryid] = skilllevel; // set this to the defined skill level
	}
	else {

		// check to make sure there's no spells in use higher than the current skill level
		for (var x = 0; x < (Mastery[masteryid].Skills.length); x++) {
			if (Mastery[masteryid].Skills[x].min_points >= _SkillLevel[masteryid] && UserSkills[masteryid].SkillLevel[x] > 0) {
				return false;
			}
		}

		if (_SkillLevel[masteryid] - 1 >= 0) {
			_SkillLevel[masteryid]--
			_TotalPoints = _TotalPoints + 1
		}
	}
	UpdateSkillStats(masteryid)
	UpdateSkillBar(masteryid)
	if (!skilllevel) DrawSkill(masteryid)
}

function UpdateSkillStats(masteryid) {


	for (var x = 0; x < Mastery.length; x++) {
		if (document.getElementById("pointsremaining_" + x)) {
			var UpdateText = "Points Left = " + parseInt(parseInt(_TotalPoints) + parseInt(GetDropDownValue('skilladjustment')));
			var CharLevel = Math.floor((222 - parseInt(GetDropDownValue('skilladjustment')) - _TotalPoints) / 3) + 1
			if (CharLevel < 0) CharLevel = 0;
			if (CharLevel > 75) CharLevel = 75;
			UpdateText = UpdateText + " - Estimated Character Level: " + CharLevel
			document.getElementById("pointsremaining_" + x).innerHTML = UpdateText;
		}

		var TotalPoints = 0
		if (UserSkills[x]) {
			for (var y = 0; y < UserSkills[x].SkillLevel.length; y++) {
				if (UserSkills[x].SkillLevel[y]) {
					TotalPoints = TotalPoints + UserSkills[x].SkillLevel[y]
				}
			}
		}
		if (document.getElementById("masterypoints_" + x)) {
			var UpdateText = "Skill Points = " + _SkillLevel[x]
			UpdateText = UpdateText + " - Mastery Points Spent = " + TotalPoints;
			UpdateText = UpdateText + " - Total in this Mastery = " + parseInt(parseInt(_SkillLevel[x]) + parseInt(TotalPoints))
			document.getElementById("masterypoints_" + x).innerHTML = UpdateText;
		}

	}
	UpdateLinkBack()
}

function UpdateSkillBar(masteryid) {

	if (document.getElementById("b1pt_" + masteryid) === null) {
		return;
	}

	if (_SkillLevel[masteryid] >= 1) { document.getElementById("b1pt_" + masteryid).style.background = "yellow" } else { document.getElementById("b1pt_" + masteryid).style.background = "black" }
	if (_SkillLevel[masteryid] >= 4) { document.getElementById("b4pt_" + masteryid).style.background = "yellow" } else { document.getElementById("b4pt_" + masteryid).style.background = "black" }
	if (_SkillLevel[masteryid] >= 10) { document.getElementById("b10pt_" + masteryid).style.background = "yellow" } else { document.getElementById("b10pt_" + masteryid).style.background = "black" }
	if (_SkillLevel[masteryid] >= 16) { document.getElementById("b16pt_" + masteryid).style.background = "yellow" } else { document.getElementById("b16pt_" + masteryid).style.background = "black" }
	if (_SkillLevel[masteryid] >= 24) { document.getElementById("b24pt_" + masteryid).style.background = "yellow" } else { document.getElementById("b24pt_" + masteryid).style.background = "black" }
	if (_SkillLevel[masteryid] >= 32) { document.getElementById("b32pt_" + masteryid).style.background = "yellow" } else { document.getElementById("b32pt_" + masteryid).style.background = "black" }

	UpdatePlayerBaseAttributes(masteryid)
}

function UpdatePlayerBaseAttributes(masteryid) {
	if (AttributesBase[0]) {
		document.getElementById("health").innerHTML = AttributesBase[0].health //+ Attributes[_SkillLevel[masteryid]].health;
		document.getElementById("energy").innerHTML = AttributesBase[0].energy //+ Attributes[_SkillLevel[masteryid]].energy;
		document.getElementById("str").innerHTML = AttributesBase[0].str //+ Attributes[_SkillLevel[masteryid]].str;
		document.getElementById("dex").innerHTML = AttributesBase[0].dex //+ Attributes[_SkillLevel[masteryid]].dex;
		document.getElementById("int").innerHTML = AttributesBase[0].inte //+ Attributes[_SkillLevel[masteryid]].int;

		AppendMasteryAttributes(_Mastery1)
		AppendMasteryAttributes(_Mastery2)
	}
}

function AppendMasteryAttributes(masteryid) {
	if (_SkillLevel[masteryid] > 0) {
		document.getElementById("health").innerHTML = parseInt(document.getElementById("health").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].health;
		document.getElementById("energy").innerHTML = parseInt(document.getElementById("energy").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].energy;
		document.getElementById("str").innerHTML = parseInt(document.getElementById("str").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].str;
		document.getElementById("dex").innerHTML = parseInt(document.getElementById("dex").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].dex;
		document.getElementById("int").innerHTML = parseInt(document.getElementById("int").innerHTML) + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].inte;
	}
}

function GetSpellText(masteryid, skillid) {

	var rankid = 0
	if (UserSkills[masteryid]) {
		if (isNaN(UserSkills[masteryid].SkillLevel[skillid])) { UserSkills[masteryid].SkillLevel[skillid] = 0 }
		rankid = UserSkills[masteryid].SkillLevel[skillid] // get users current skillrank
	}
	var strHTML = ""
	strHTML = "<div id='spellname'>" + Mastery[masteryid].Skills[skillid].name + "</div></B>"
	strHTML = strHTML + "<div id='spelldesc'>" + Mastery[masteryid].Skills[skillid].desc + "</div><BR>"

	// show current rank
	if (rankid > 0) {
		strHTML = strHTML + "<div id='currentranklevel'>Current Level: " + (rankid) + "</div>"
		strHTML = strHTML + "<div id='currentspell'>" + Mastery[masteryid].Skills[skillid].spells[rankid].spellinfo.replace(/,/g, "<br>") + "</div><BR>"
	}

	// show next rank
	if (Mastery[masteryid].Skills[skillid].spells[rankid + 1]) {
		strHTML = strHTML + "<div id='nextranklevel'>Next Level: " + (rankid + 1) + "</div>"
		strHTML = strHTML + "<div id='nextspell'>" + Mastery[masteryid].Skills[skillid].spells[rankid + 1].spellinfo.replace(/,/g, "<br>") + "</div>"
	}



	// check for prereq
	if (Mastery[masteryid].Skills[skillid].prereq >= 0) {
		if (UserSkills[masteryid].SkillLevel[Mastery[masteryid].Skills[skillid].prereq] > 0) {
			strHTML = strHTML + "<BR><div id='prereq'>PreReq: " + Mastery[masteryid].Skills[Mastery[masteryid].Skills[skillid].prereq].name + "</div>"
		}
		else {
			strHTML = strHTML + "<BR><div id='prereq'><font color=red>PreReq: " + Mastery[masteryid].Skills[Mastery[masteryid].Skills[skillid].prereq].name + "</div>"
		}
	}

	return strHTML
}



function DrawSkill(masteryid) {

	img = document.getElementById("button" + masteryid)

	// create div for text
	if (!document.getElementById("tip")) {
		var divtip = document.createElement("div")
		divtip.setAttribute('id', "tip")
		document.body.appendChild(divtip)
	}
	document.getElementById("tip").style.position = "absolute";
	divtip = document.getElementById("tip")

	divtip.innerHTML = GetSkillLevelText(masteryid)
	img.style.position = "relative"
	divtip.style.top = img.offsetTop - divtip.offsetHeight - 20;
	divtip.style.left = img.height;

}

function GetSkillLevelText(masteryid) {
	var strHTML = ""
	strHTML = "<div id='spellname'>" + Mastery[masteryid].masteryname + " Mastery</div>"

	if (_SkillLevel[masteryid] > 0) {
		var strHTML = strHTML + "<div id='currentranklevel'><BR>Current Level: " + _SkillLevel[masteryid] + "</div>"
		var strHTML = strHTML + "<div id='currentspell'>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].str > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].str + " Strengh" + "<BR>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].inte > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].inte + " Intellect" + "<BR>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].dex > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].dex + " Dexterity" + "<BR>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].health > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].health + " Health" + "<BR>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid]].energy > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid]].energy + " Energy" + "<BR>"
		strHTML = strHTML + "</div>"
	}

	if (_SkillLevel[masteryid] + 1 <= 32) {
		var strHTML = strHTML + "<div id='currentranklevel'><BR>Next Level: " + (_SkillLevel[masteryid] + 1) + "</div>"
		var strHTML = strHTML + "<div id='nextspell'>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].str > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].str + " Strengh" + "<BR>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].inte > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].inte + " Intellect" + "<BR>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].dex > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].dex + " Dexterity" + "<BR>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].health > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].health + " Health" + "<BR>"
		if (Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].energy > 0) strHTML = strHTML + "+" + Mastery[masteryid].Attributes[_SkillLevel[masteryid] + 1].energy + " Energy" + "<BR>"
		strHTML = strHTML + "</div>"

		strHTML = strHTML + "<div id='pressadd'><BR>Left click to add unused skill points. Right click to remove.</div>"

	}


	return strHTML
}

function DrawSpell(masteryid, skillid) {

	var SpellText = GetSpellText(masteryid, skillid)

	// create div for text
	if (!document.getElementById("tip")) {
		var divtip = document.createElement("div")
		divtip.setAttribute('id', "tip")
		document.body.appendChild(divtip)
	}
	document.getElementById("tip").style.position = "absolute";


	divwidth = document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).offsetWidth / 2
	document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).style.position = "absolute";
	var LeftDiv = document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).offsetLeft + divwidth;
	var TopDiv = document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).offsetTop;
	document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).style.position = "relative";

	divtip = document.getElementById("tip")

	divtip.innerHTML = SpellText
	divtip.style.left = LeftDiv - 100 //- (divtip.offsetWidth / 2)

	if (TopDiv - (divtip.offsetHeight + 50) <= 0) {
		if (isIE) {
			divtip.style.top = TopDiv + 75
		}
		else {
			divtip.style.top = TopDiv + 25
		}
	}
	else {

		if (isIE) {
			divtip.style.top = TopDiv - (divtip.offsetHeight + 10)
		}
		else {
			divtip.style.top = TopDiv - (divtip.offsetHeight + 50)
		}
	}

}

function KillTip() {
	if (document.getElementById("tip")) {
		elm = document.getElementById("tip")
		document.body.removeChild(elm)
	}
}

function AddPoint(bolCtrl, bolShft, masteryid, button, skillid) {



	var Points = 1;
	if (bolShft) {
		Points = (Mastery[masteryid].Skills[skillid].spells.length - UserSkills[masteryid].SkillLevel[skillid] - 1)
	}

	if (button == 2) {
		RemovePoint(bolCtrl, bolShft, masteryid, skillid)
		return false;
	}

	if (isNaN(UserSkills[masteryid].SkillLevel[skillid])) { UserSkills[masteryid].SkillLevel[skillid] = 0 }

	if (UserSkills[masteryid].SkillLevel[skillid] + Points < Mastery[masteryid].Skills[skillid].spells.length) { // is there another rank?

		if (Mastery[masteryid].Skills[skillid].min_points <= _SkillLevel[masteryid]) { // has the user spent enough points on skill level for this spell?
			var PreReq = Mastery[masteryid].Skills[skillid].prereq

			if ((PreReq >= 0 && UserSkills[masteryid].SkillLevel[PreReq] > 0) || PreReq < 0) { // does the user have points in the prereq skill?
				_TotalPoints = _TotalPoints - Points
				UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] + Points
				document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).innerHTML = UserSkills[masteryid].SkillLevel[skillid] + " of " + ((Mastery[masteryid].Skills[skillid].spells.length) - 1)
				UpdateSkillStats(masteryid)
				DrawSpell(masteryid, skillid)
				DrawSpellList()
			}
		}
	}
}





function RemovePoint(bolCtrl, bolShft, masteryid, skillid) {

	if (isNaN(UserSkills[masteryid].SkillLevel[skillid])) { UserSkills[masteryid].SkillLevel[skillid] = 0 }

	var Points = 1;
	if (bolShft) {
		Points = UserSkills[masteryid].SkillLevel[skillid];
	}

	// check to make sure that nothing is using this as as a required skill
	for (var x = 0; x < (Mastery[masteryid].Skills.length); x++) {
		if (Mastery[masteryid].Skills[x].prereq == skillid && UserSkills[masteryid].SkillLevel[x] > 0) {
			if (UserSkills[masteryid].SkillLevel[skillid] - Points == 0) { // make sure at least one points is left in this spell
				return false;
			}
		}
	}


	if (UserSkills[masteryid].SkillLevel[skillid] - 1 >= 0) { // is there another rank?
		_TotalPoints = _TotalPoints + Points
		UserSkills[masteryid].SkillLevel[skillid] = UserSkills[masteryid].SkillLevel[skillid] - Points
		document.getElementById("spell_" + masteryid + '_' + (skillid + 1)).innerHTML = UserSkills[masteryid].SkillLevel[skillid] + " of " + ((Mastery[masteryid].Skills[skillid].spells.length) - 1)
		UpdateSkillStats(masteryid)
		DrawSpell(masteryid, skillid)
		DrawSpellList()
	}
}

function DrawSpellList() {
	var SpellList = ""
	var SpellFound = false;

	for (var y = 0; y < Mastery.length; y++) {

		if (Mastery[y]) {
			SpellList = SpellList + "<div id='masteryname'>" + Mastery[y].masteryname + "</div>"
			for (var x = 0; x < (Skills.length); x++) {

				if (UserSkills[y])
					spellrank = UserSkills[y].SkillLevel[x];
				else
					spellrank = 0;


				if (Mastery[y].Skills[x].spells[spellrank]) {
					SpellFound = true;
					if (document.getElementById("verbose").checked) {
						SpellList = SpellList + "<hr noshade size=1>"
					}
					SpellList = SpellList + "<B>" + Mastery[y].Skills[x].name + "</B>: (Rank: " + UserSkills[y].SkillLevel[x] + " of " + (Mastery[y].Skills[x].spells.length - 1) + ")<BR>"
					if (document.getElementById("verbose").checked) {
						SpellList = SpellList + Mastery[y].Skills[x].desc + "<BR>"
						SpellList = SpellList + Mastery[y].Skills[x].spells[spellrank].spellinfo + "<BR>"
					}
				}
			}
			SpellList = SpellList + "<BR>"
		}
	}


	if (!SpellFound) { SpellList = 'None selected' }
	document.getElementById("spells").innerHTML = SpellList;

	UpdateLinkBack()

}

function UpdateLinkBack() {
	var HTML = ""
	  HTML = 'http://www.titancalc.com/TitanCalc.html?mastery=' + _MasteryName + '&master1=' + _Mastery1 + '&master2=' + _Mastery2

	  var TempM1 = ""
	  var SkillLevel1 = 0
	  var SkillLevel2 = 0
	  if (UserSkills[_Mastery1]) {
	      // loop through both masteries and build the vars to return with
	      SkillLevel1 = _SkillLevel[_Mastery1]

	      for (var x = 0 ; x <= UserSkills[_Mastery1].SkillLevel.length ; x++) {
	             //alert(x + '-' + UserSkills[_Mastery1].SkillLevel[x])
	           if (UserSkills[_Mastery1].SkillLevel[x]) {
	            TempM1 = TempM1 + UserSkills[_Mastery1].SkillLevel[x] + "-"
	            }
	            else {
	            TempM1 = TempM1 + "0-"
	          }
	      }  
	  }

	  var TempM2 = ""
	  if (UserSkills[_Mastery2]) {
	    SkillLevel2 = _SkillLevel[_Mastery2]
	    // loop through both masteries and build the vars to return with
	    for (var x = 0 ; x <= UserSkills[_Mastery2].SkillLevel.length ; x++) {
	         if (UserSkills[_Mastery2].SkillLevel[x])
	          TempM2 = TempM2 + UserSkills[_Mastery2].SkillLevel[x] + "-"
	          else
	          TempM2 = TempM2 + "0-"
	    } 
	  }

	  TempM1 =  SkillLevel1 + "-" + TempM1 
	  TempM2 =  SkillLevel2 + "-" + TempM2 

	  TempM1 = TempM1.substring(0,TempM1.length -1 )
	  TempM2 = TempM2.substring(0,TempM2.length -1 )

	var RewardPoints = parseInt(GetDropDownValue('skilladjustment'))

	 document.getElementById("linkback").value = HTML + '&sa=' + RewardPoints + '&m1=' + TempM1 + "&m2=" + TempM2

}

function SetFormFromReturn(string, masteryid) {

	
	// set the Skill Adjustment drop down
	if (_SA.length > 0) {
		SetDropDownByValue('skilladjustment', _SA);
	}

	var Elms = string.split("-")
	_TotalPoints = _TotalPoints - Elms[0];
	_SkillLevel[masteryid] = Elms[0];
	UpdateSkillBar(masteryid)

	for (var x = 1; x < Elms.length; x++) {
		UserSkills[masteryid].SkillLevel[x - 1] = parseInt(Elms[x])
		//   _TotalPoints = _TotalPoints - parseInt(Elms[x])
	}

	// set the form
	for (var x = 0; x < (Mastery[masteryid].Skills.length); x++) {

		if (document.getElementById("spell_" + masteryid + '_' + (x + 1))) {
			if (UserSkills[masteryid].SkillLevel[x]) { // fixed bug with links missing last skill
				if (UserSkills[masteryid].SkillLevel[x] <= ((Mastery[masteryid].Skills[x].spells.length) - 1)) {  // we changed mastery data, if there's less spells set it to the max
					document.getElementById("spell_" + masteryid + '_' + (x + 1)).innerHTML = UserSkills[masteryid].SkillLevel[x] + " of " + ((Mastery[masteryid].Skills[x].spells.length) - 1)
					_TotalPoints = _TotalPoints - UserSkills[masteryid].SkillLevel[x]
				}
				else {
					document.getElementById("spell_" + masteryid + '_' + (x + 1)).innerHTML = ((Mastery[masteryid].Skills[x].spells.length) - 1) + " of " + ((Mastery[masteryid].Skills[x].spells.length) - 1)
					UserSkills[masteryid].SkillLevel[x] = ((Mastery[masteryid].Skills[x].spells.length) - 1)
					_TotalPoints = _TotalPoints - ((Mastery[masteryid].Skills[x].spells.length) - 1)
				}
			}
			else {
				document.getElementById("spell_" + masteryid + '_' + (x + 1)).innerHTML = "0 of " + ((Mastery[masteryid].Skills[x].spells.length) - 1)
			}
		}
	}
	UpdateSkillStats(masteryid)
	DrawSpellList()
}



// disable right click menus
document.oncontextmenu =
	function () { return false }


function GetDropDownValue(element) {
	// returns the value of the selected dropdown
	var elm = document.getElementById(element)
	return elm.options[elm.selectedIndex].value
}

function SetDropDownByValue(elm, value) {

	var elm = document.getElementById(elm)
	for (var i = 0; i < elm.options.length; i++) {
		if (elm.options[i].value == value) {
			elm.selectedIndex = i;
		}
	}
}

window.SetUserSkills = SetUserSkills;
window.AddSkillLevel = AddSkillLevel;
window.UpdateSkillStats = UpdateSkillStats;
window.UpdateSkillBar = UpdateSkillBar;
window.UpdatePlayerBaseAttributes = UpdatePlayerBaseAttributes;
window.AppendMasteryAttributes = AppendMasteryAttributes;
window.GetSpellText = GetSpellText;
window.DrawSkill = DrawSkill;
window.GetSkillLevelText = GetSkillLevelText;
window.DrawSpell = DrawSpell;
window.KillTip = KillTip;
window.AddPoint = AddPoint;
window.RemovePoint = RemovePoint;
window.DrawSpellList = DrawSpellList;
window.UpdateLinkBack = UpdateLinkBack;
window.SetFormFromReturn = SetFormFromReturn;
window.GetDropDownValue = GetDropDownValue;
window.SetDropDownByValue = SetDropDownByValue;
window.SetPage = SetPage;

