<html>
	<head>

		<title>TitanCalc by stonedonkey - A Titan Quest Calculator - <%=Request.QueryString("Mastery")%></title>
		<script src="scripts/common.js"></script>
		<script src="scripts/control.js"></script>
  		<% if Request.QueryString("master1") = 1 or Request.QueryString("master2") = 1 then %>
		<script src="scripts/earth.js"></script>
		<% END IF %>
		<% if Request.QueryString("master1") = 2 or Request.QueryString("master2") = 2 then %>
			<script src="scripts/spirit.js"></script>
		<% END IF %>
		<% if Request.QueryString("master1") = 3 or Request.QueryString("master2") = 3 then %>
			<script src="scripts/warfare.js"></script>
		<% END IF %>
		<% if Request.QueryString("master1") = 4 or Request.QueryString("master2") = 4 then %>
			<script src="scripts/nature.js"></script>
		<% END IF %>
		<% if Request.QueryString("master1") = 5 or Request.QueryString("master2") = 5 then %>
			<script src="scripts/defense.js"></script>
		<% END IF %>
		<% if Request.QueryString("master1") = 6 or Request.QueryString("master2") = 6 then %>
			<script src="scripts/rogue.js"></script>
		<% END IF %>
		<% if Request.QueryString("master1") = 7 or Request.QueryString("master2") = 7 then %>
			<script src="scripts/hunting.js"></script>
		<% END IF %>
		<% if Request.QueryString("master1") = 8 or Request.QueryString("master2") = 8 then %>
			<script src="scripts/storm.js"></script>
		<% END IF %>
		<% if Request.QueryString("master1") = 9 or Request.QueryString("master2") = 9 then %>
			<script src="scripts/dream.js"></script>
		<% END IF %>
	    <link rel="stylesheet" type="text/css" href="main.css">


	<script>



	function PageStart() {

    <% if Request.QueryString("master1") = 1 or Request.QueryString("master2") = 1 then %>
    SetPage(1)
    <% END IF %>
    <% if Request.QueryString("master1") = 2 or Request.QueryString("master2") = 2 then %>
    SetPage(2)
    <% END IF %>
    <% if Request.QueryString("master1") = 3 or Request.QueryString("master2") = 3 then %>
    SetPage(3)
    <% END IF %>
    <% if Request.QueryString("master1") = 4 or Request.QueryString("master2") = 4 then %>
    SetPage(4)
    <% END IF %>
    <% if Request.QueryString("master1") = 5 or Request.QueryString("master2") = 5 then %>
    SetPage(5)
    <% END IF %>
    <% if Request.QueryString("master1") = 6 or Request.QueryString("master2") = 6 then %>
    SetPage(6)
    <% END IF %>
    <% if Request.QueryString("master1") = 7 or Request.QueryString("master2") = 7 then %>
    SetPage(7)
    <% END IF %>
    <% if Request.QueryString("master1") = 8 or Request.QueryString("master2") = 8 then %>
    SetPage(8)
    <% END IF %>
    <% if Request.QueryString("master1") = 9 or Request.QueryString("master2") = 9 then %>
    SetPage(9)
    <% END IF %>    
  }

  var _MasteryName = "<%=Request.Querystring("Mastery")%>"
  var _Mastery1 = <%=Request.QueryString("master1")%>
  var _Mastery2 = <%=Request.QueryString("master2")%>

  <%if len(Request.QueryString("m1")) > 2 THEN%>
    var _PreSet1 = "<%=Request.QueryString("m1")%>"
  <%ELSE%>
    var _PreSet1 = ""
  <% END IF %>
  <%if len(Request.QueryString("m2")) > 2 THEN%>
    var _PreSet2 = "<%=Request.QueryString("m2")%>"
  <%ELSE%>
    var _PreSet2 = ""
  <% END IF%>
  <%if len(Request.QueryString("m2")) > 2 THEN%>
    var _SA = "<%=Request.QueryString("sa")%>"
  <% ELSE %>
    var _SA = ""
  <% END IF %>
  

  </script>

  </HEAD>
	<BODY link="white" vlink="white" alink="white" onload="PageStart();" BGCOLOR="#000000" LEFTMARGIN="0" TOPMARGIN="0" MARGINWIDTH="0"	MARGINHEIGHT="0">

<br /><br />

<TABLE width="95%" align="center" border=0><TR><TD valign="top" >

	<div id="pageheader">TitanCalc 0.65 <font size=1><a href="/">Back to Main</A></font>
	<br> <%=Request.Querystring("Mastery")%> <font size=1> (<script>document.write(Mastery[<%=request.Querystring("master1")%>].masteryname)</script><% if request.Querystring("master2") > 0 then%> + <script>document.write(Mastery[<%=request.Querystring("master2")%>].masteryname)</script><% END IF %>)</font></div>


<% if Request.QueryString("master1") = 1 or Request.QueryString("master2") = 1 then %>
	<table id="earth" cellpadding=0 cellspacing=0 border=0>
		<tr>
			<td id="b32pt_1" class="b32pt" onclick="AddSkillLevel(1,event.button,32)" align="center" valign="top">32</td>
			<TD> </TD>
			<td onmouseover="DrawSpell(1,17)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,17)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/18.gif"><div id="spell_1_18"></div></td>
			<TD> </TD>
			<TD> </TD>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,18)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,18)" onmouseout="KillTip()" align="center" valign="center"><img src="images/Earth/19.gif"><div id="spell_1_19"></div></td>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<td onmouseover="DrawSpell(1,19)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,19)" onmouseout="KillTip()" align="center" valign="center"><img src="images/Earth/20.gif"><div id="spell_1_20"></div></td>
		</tr>
		<tr>
			<td id="b24pt_1" class="b24pt" onclick="AddSkillLevel(1,event.button,24)" align="center" valign="top">24</td>
			<TD> </TD>
			<TD> </TD>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,13)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,13)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/14.gif"><div id="spell_1_14"></div></td>
			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
			<td onmouseover="DrawSpell(1,14)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,14)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/15.gif"><div id="spell_1_15"></div></td>
			<TD> </TD>
			<TD> </TD>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,15)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,15)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/16.gif"><div id="spell_1_16"></div></td>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,16)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,16)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/17.gif"><div id="spell_1_17"></div></td>
		</tr>
		<tr>
			<td id="b16pt_1" class="b16pt" onclick="AddSkillLevel(1,event.button,16)" align="center" valign="top">16</td>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,9)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,9)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/10.gif"><div id="spell_1_10"></div></td>
			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
			<TD> </TD>
			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
			<td onmouseover="DrawSpell(1,10)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,10)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/11.gif"><div id="spell_1_11"></div></td>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,11)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,11)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/12.gif"><div id="spell_1_12"></div></td>
			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
			<TD> </TD>
			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
			<td onmouseover="DrawSpell(1,12)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,12)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/13.gif"><div id="spell_1_13"></div></td>
		</tr>
		<tr>
			<td id="b10pt_1" class="b10pt" onclick="AddSkillLevel(1,event.button,10)" align="center" valign="top">10</td>
			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
			<TD> </TD>
			<td valign="top"><img src="images/bottomright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,6)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,6)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/7.gif"><div id="spell_1_7"></div></td>
			<td valign="top"><img src="images/bottomright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,7)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,7)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/8.gif"><div id="spell_1_8"></div></td>
			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
			<TD> </TD>
			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
			<td onmouseover="DrawSpell(1,8)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,8)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/9.gif"><div id="spell_1_9"></div></td>
			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
			<TD> </TD>
		</tr>
		<tr>
			<td id="b4pt_1" class="b4pt" onclick="AddSkillLevel(1,event.button,4)" align="center" valign="top">4</td>
			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
			<td onmouseover="DrawSpell(1,2)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,2)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/3.gif"><div id="spell_1_3"></div></td>
			<TD> </TD>
			<td onmouseover="DrawSpell(1,3)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,3)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/4.gif"><div id="spell_1_4"></div></td>
			<TD> </TD>
			<TD> </TD>
			<td valign="top"><img src="images/bottomright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,4)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,4)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/5.gif"><div id="spell_1_5"></div></td>
			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
			<TD> </TD>
			<td valign="top"><img src="images/bottomright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,5)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,5)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/6.gif"><div id="spell_1_6"></div></td>
		</tr>
		<tr>
			<td id="b1pt_1" class="b1pt" onclick="AddSkillLevel(1,event.button,1)" align="center" valign="top">1</td>
			<td valign="top"><img src="images/bottomright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,0)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,0)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/1.gif"><div id="spell_1_1"></div></td>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<td valign="top"><img src="images/bottomright_grey.gif"></td>
			<td onmouseover="DrawSpell(1,1)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,1,event.button,1)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Earth/2.gif"><div id="spell_1_2"></div></td>
			<TD> </TD>
			<TD> </TD>
		</tr>
		<tr>
			<td id="button"><img id="button1" onmouseover="DrawSkill(1,this)" onmouseout="KillTip()" onmousedown="AddSkillLevel(1,event.button)" src="images/button.gif"></td>
			<td colspan=12><a href="javascript:void(0);" onclick="SetPage(1,true);return false">Reset Mastery</A>
      <div id="pointsremaining_1"></div><div id="masterypoints_1"></div></td>
		</tr>
	</table>
	<% END IF %>


  <% if Request.QueryString("master1") = 2 or Request.QueryString("master2") = 2 then %>
 
	<table id="spirit" cellpadding=0 cellspacing=0 border=0 >
		<tr>
			<td id="b32pt_2" class="b32pt" onclick="AddSkillLevel(2,event.button,32)" align="center" valign="top">32</td>
			<TD> </TD>
      <td onmouseover="DrawSpell(2,17)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,17)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/18.gif"><div id="spell_2_18"></div></td>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
      <td onmouseover="DrawSpell(2,18)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,18)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/19.gif"><div id="spell_2_19"></div></td>
			<TD> </TD>
			<TD> </TD>
			<TD valign="bottom"><img src="images/topright_grey.gif"></TD>
      <td onmouseover="DrawSpell(2,19)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,19)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/20.gif"><div id="spell_2_20"></div></td>
			<TD> </TD>
			<TD> </TD>
		</tr>
		<tr>
			<td id="b24pt_2" class="b24pt" onclick="AddSkillLevel(2,event.button,24)" align="center" valign="top">24</td>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD valign="bottom"><img src="images/topright_grey.gif"></TD>
      <td onmouseover="DrawSpell(2,14)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,14)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/15.gif"><div id="spell_2_15"></div></td>
			<TD background="images/line_grey.gif"><img src="images/t_grey.gif"></TD>
      <td onmouseover="DrawSpell(2,15)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,15)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/16.gif"><div id="spell_2_16"></div></td>
			<TD> </TD>
      <td onmouseover="DrawSpell(2,16)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,16)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/17.gif"><div id="spell_2_17"></div></td>
		</tr>
		<tr>
			<td id="b16pt_2" class="b16pt" onclick="AddSkillLevel(2,event.button,16)" align="center" valign="top">16</td>
			<TD valign="bottom"><img src="images/topright_grey.gif"></TD>
      <td onmouseover="DrawSpell(2,10)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,10)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/11.gif"><div id="spell_2_11"></div></td>
			<TD valign="bottom"><img src="images/topright_grey.gif"></TD>
      <td onmouseover="DrawSpell(2,11)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,11)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/12.gif"><div id="spell_2_12"></div></td>
			<TD> </TD>
      <td onmouseover="DrawSpell(2,12)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,12)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/13.gif"><div id="spell_2_13"></div></td>
			<TD background="images/line_grey.gif"><img src="images/line_grey.gif"></TD>
			<TD> </TD>
			<TD background="images/line_grey.gif"><img src="images/t_grey.gif"></TD>
      <td onmouseover="DrawSpell(2,13)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,13)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/14.gif"><div id="spell_2_14"></div></td>
			<TD> </TD>
			<TD> </TD>
		</tr>
		<tr>
			<td id="b10pt_2" class="b10pt" onclick="AddSkillLevel(2,event.button,10)" align="center" valign="top">10</td>
			<TD background="images/line_grey.gif"><img src="images/line_grey.gif"></TD>
			<TD> </TD>
			<TD background="images/line_grey.gif"><img src="images/line_grey.gif"></TD>
			<TD> </TD>
			<TD valign="bottom"><img src="images/topright_grey.gif"></TD>
			<td onmouseover="DrawSpell(2,6)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,6)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/7.gif"><div id="spell_2_7"></div></td>
			<TD valign="top"><img src="images/bottomright_grey.gif"></TD>
      <td onmouseover="DrawSpell(2,7)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,7)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/8.gif"><div id="spell_2_8"></div></td>
			<TD valign="top"><img src="images/bottomright_grey.gif"></TD>
      <td onmouseover="DrawSpell(2,8)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,8)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/9.gif"><div id="spell_2_9"></div></td>
			<TD valign="bottom"><img src="images/topright_grey.gif"></TD>
      <td onmouseover="DrawSpell(2,9)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,9)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/10.gif"><div id="spell_2_10"></div></td>
		</tr>
		<tr>
			<td id="b4pt_2" class="b4pt" onclick="AddSkillLevel(2,event.button,4)" align="center" valign="top">4</td>
			<TD valign="top"><img src="images/bottomright_grey.gif"></TD>
			<td onmouseover="DrawSpell(2,2)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,2)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/3.gif"><div id="spell_2_3"></div></td>
			<TD background="images/line_grey.gif"><img src="images/t_grey.gif"></TD>
			<td onmouseover="DrawSpell(2,3)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,3)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/4.gif"><div id="spell_2_4"></div></td>
			<TD background="images/line_grey.gif"><img src="images/line_grey.gif"></TD>
			<TD> </TD>
			<TD> </TD>
			<td onmouseover="DrawSpell(2,4)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,4)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/5.gif"><div id="spell_2_5"></div></td>
			<TD> </TD>
			<TD> </TD>
			<TD valign="top"><img src="images/bottomright_grey.gif"></TD>
			<td onmouseover="DrawSpell(2,5)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,5)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/6.gif"><div id="spell_2_6"></div></td>
		</tr>
		<tr>
			<td id="b1pt_2" class="b1pt" onclick="AddSkillLevel(2,event.button,1)" align="center" valign="top">1</td>
			<TD> </TD>
			<TD> </TD>
			<TD valign="top"><img src="images/bottomright_grey.gif"></TD>
			<td onmouseover="DrawSpell(2,0)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,0)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/1.gif"><div id="spell_2_1"></div></td>
			<TD valign="top"><img src="images/bottomright_grey.gif"></TD>
			<td onmouseover="DrawSpell(2,1)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,2,event.button,1)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Spirit/2.gif"><div id="spell_2_2"></div></td>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
			<TD> </TD>
		</tr>
		<tr>
			<td id="button"><img id="button2" onmouseover="DrawSkill(2,this)" onmouseout="KillTip()"  onmousedown="AddSkillLevel(2,event.button)" src="images/button.gif"></td>
			<td colspan=12><a href="javascript:void(0);" onclick="SetPage(2,true);return false">Reset Mastery</A>
      <div id="pointsremaining_2"></div><div id="masterypoints_2"></div></td>
		</tr>
	</table>
	<% END IF %>

<% if Request.QueryString("master1") = 3 or Request.QueryString("master2") = 3 then %>
 
  <table id="warfare" cellpadding=0 cellspacing=0 border=0 >
  		<tr>
  			<td id="b32pt_3" class="b32pt" onclick="AddSkillLevel(3,event.button,32)" align="center" valign="top">32</td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,17)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,17)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/18.gif"><div id="spell_3_18"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,18)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,18)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/19.gif"><div id="spell_3_19"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(3,19)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,19)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/20.gif"><div id="spell_3_20"></div></td>
  		</tr>
  		<tr>
  			<td id="b24pt_3" class="b24pt" onclick="AddSkillLevel(3,event.button,24)" align="center" valign="top">24</td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,13)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,13)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/14.gif"><div id="spell_3_14"></div></td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,14)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,14)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/15.gif"><div id="spell_3_15"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,15)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,15)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/16.gif"><div id="spell_3_16"></div></td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,16)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,16)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/17.gif"><div id="spell_3_17"></div></td>
  		</tr>
  		<tr>
  			<td id="b16pt_3" class="b16pt" onclick="AddSkillLevel(3,event.button,16)" align="center" valign="top">16</td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,11)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,11)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/12.gif"><div id="spell_3_12"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,12)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,12)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/13.gif"><div id="spell_3_13"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b10pt_3" class="b10pt" onclick="AddSkillLevel(3,event.button,10)" align="center" valign="top">10</td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,7)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,7)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/8.gif"><div id="spell_3_8"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,8)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,8)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/9.gif"><div id="spell_3_9"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,9)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,9)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/10.gif"><div id="spell_3_10"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,10)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,10)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/11.gif"><div id="spell_3_11"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b4pt_3" class="b4pt" onclick="AddSkillLevel(3,event.button,4)" align="center" valign="top">4</td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,3)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,3)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/4.gif"><div id="spell_3_4"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(3,4)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,4)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/5.gif"><div id="spell_3_5"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,5)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,5)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/6.gif"><div id="spell_3_6"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,6)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,6)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/7.gif"><div id="spell_3_7"></div></td>
  		</tr>
  		<tr>
  			<td id="b1pt_3" class="b1pt" onclick="AddSkillLevel(3,event.button,1)" align="center" valign="top">1</td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(3,0)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,0)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/1.gif"><div id="spell_3_1"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,1)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,1)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/2.gif"><div id="spell_3_2"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(3,2)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,3,event.button,2)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Warfare/3.gif"><div id="spell_3_3"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="button"><img id="button3" onmouseover="DrawSkill(3,this)" onmouseout="KillTip()"  onmousedown="AddSkillLevel(3,event.button)" src="images/button.gif"></td>
  			<td colspan=12><a href="javascript:void(0);" onclick="SetPage(3,true);return false">Reset Mastery</A>
        <div id="pointsremaining_3"></div><div id="masterypoints_3"></div></td>
  		</tr>
  	</table>
<% END IF %>


<% if Request.QueryString("master1") = 4 or Request.QueryString("master2") = 4 then %>
 
  <table id="nature" cellpadding=0 cellspacing=0 border=0 >
  		<tr>
  			<td id="b32pt_4" class="b32pt" onclick="AddSkillLevel(4,event.button,32)" align="center" valign="top">32</td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
        <td onmouseover="DrawSpell(4,17)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,17)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/18.gif"><div id="spell_4_18"></div></td>
 	  		<td valign="bottom"><img src="images/topright_grey.gif"></td>
        <td onmouseover="DrawSpell(4,18)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,18)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/19.gif"><div id="spell_4_19"></div></td>
  			<TD> </TD>
  			<TD> </TD>
 	  		<td valign="bottom"><img src="images/topright_grey.gif"></td>
        <td onmouseover="DrawSpell(4,19)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,19)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/20.gif"><div id="spell_4_20"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b24pt_4" class="b24pt" onclick="AddSkillLevel(4,event.button,24)" align="center" valign="top">24</td>
 	  		<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,13)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,13)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/14.gif"><div id="spell_4_14"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
 	  		<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,14)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,14)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/15.gif"><div id="spell_4_15"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,15)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,15)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/16.gif"><div id="spell_4_16"></div></td>
 	  		<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,16)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,16)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/17.gif"><div id="spell_4_17"></div></td>
  		</tr>
  		<tr>
  			<td id="b16pt_4" class="b16pt" onclick="AddSkillLevel(4,event.button,16)" align="center" valign="top">16</td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,9)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,9)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/10.gif"><div id="spell_4_10"></div></td>
 	  		<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,10)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,10)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/11.gif"><div id="spell_4_11"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,11)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,11)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/12.gif"><div id="spell_4_12"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,12)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,12)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/13.gif"><div id="spell_4_13"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b10pt_4" class="b10pt" onclick="AddSkillLevel(4,event.button,10)" align="center" valign="top">10</td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,6)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,6)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/7.gif"><div id="spell_4_7"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,7)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,7)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/8.gif"><div id="spell_4_8"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,8)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,8)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/9.gif"><div id="spell_4_9"></div></td>
  		</tr>
  		<tr>
  			<td id="b4pt_4" class="b4pt" onclick="AddSkillLevel(4,event.button,4)" align="center" valign="top">4</td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,2)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,2)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/3.gif"><div id="spell_4_3"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,3)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,3)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/4.gif"><div id="spell_4_4"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,4)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,4)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/5.gif"><div id="spell_4_5"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,5)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,5)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/6.gif"><div id="spell_4_6"></div></td>
  		</tr>
  		<tr>
  			<td id="b1pt_4" class="b1pt" onclick="AddSkillLevel(4,event.button,1)" align="center" valign="top">1</td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,0)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,0)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/1.gif"><div id="spell_4_1"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(4,1)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,4,event.button,1)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Nature/2.gif"><div id="spell_4_2"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="button"><img id="button4" onmouseover="DrawSkill(4,this)" onmouseout="KillTip()"  onmousedown="AddSkillLevel(4,event.button)" src="images/button.gif"></td>
  			<td colspan=12><a href="javascript:void(0);" onclick="SetPage(4,true);return false">Reset Mastery</A>
        <div id="pointsremaining_4"></div><div id="masterypoints_4"></div></td>
  		</tr>
  	</table>
<% END IF %>


  <% if Request.QueryString("master1") = 5 or Request.QueryString("master2") = 5 then %>
 
  <table id="defense" cellpadding=0 cellspacing=0 border=0 >
  		<tr>
  			<td id="b32pt_5" class="b32pt" onclick="AddSkillLevel(5,event.button,32)" align="center" valign="top">32</td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,17)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,17)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/18.gif"><div id="spell_5_18"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(5,18)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,18)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/19.gif"><div id="spell_5_19"></div></td>
  			<TD><img src="images/blank.gif"></TD>
  			<td onmouseover="DrawSpell(5,19)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,19)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/20.gif"><div id="spell_5_20"></div></td>
  		</tr>
  		<tr>
  			<td id="b24pt_5" class="b24pt" onclick="AddSkillLevel(5,event.button,24)" align="center" valign="top">24</td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,14)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,14)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/15.gif"><div id="spell_5_15"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,15)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,15)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/16.gif"><div id="spell_5_16"></div></td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,16)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,16)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/17.gif"><div id="spell_5_17"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b16pt_5" class="b16pt" onclick="AddSkillLevel(5,event.button,16)" align="center" valign="top">16</td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
	   		<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,11)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,11)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/12.gif"><div id="spell_5_12"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,12)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,12)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/13.gif"><div id="spell_5_13"></div></td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(5,13)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,13)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/14.gif"><div id="spell_5_14"></div></td>
  		</tr>
  		<tr>
  			<td id="b10pt_5" class="b10pt" onclick="AddSkillLevel(5,event.button,10)" align="center" valign="top">10</td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,8)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,8)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/9.gif"><div id="spell_5_9"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,9)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,9)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/10.gif"><div id="spell_5_10"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,10)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,10)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/11.gif"><div id="spell_5_11"></div></td>
		  	<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b4pt_5" class="b4pt" onclick="AddSkillLevel(5,event.button,4)" align="center" valign="top">4</td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,4)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,4)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/5.gif"><div id="spell_5_5"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,5)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,5)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/6.gif"><div id="spell_5_6"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(5,6)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,6)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/7.gif"><div id="spell_5_7"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(5,7)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,7)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/8.gif"><div id="spell_5_8"></div></td>
  		</tr>
  		<tr>
  			<td id="b1pt_5" class="b1pt" onclick="AddSkillLevel(5,event.button,1)" align="center" valign="top">1</td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(5,0)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,0)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/1.gif"><div id="spell_5_1"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,1)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,1)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/2.gif"><div id="spell_5_2"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(5,2)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,2)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/3.gif"><div id="spell_5_3"></div></td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(5,3)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,5,event.button,3)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Defense/4.gif"><div id="spell_5_4"></div></td>
  		</tr>
  		<tr>
  			<td id="button"><img id="button5" onmouseover="DrawSkill(5,this)" onmouseout="KillTip()"  onmousedown="AddSkillLevel(5,event.button)" src="images/button.gif"></td>
  			<td colspan=12><a href="javascript:void(0);" onclick="SetPage(5,true);return false">Reset Mastery</A>
        <div id="pointsremaining_5"></div><div id="masterypoints_5"></div></td>
  		</tr>
  	</table>
<% END IF %>

<% if Request.QueryString("master1") = 6 or Request.QueryString("master2") = 6 then %>
 
  <table id="rogue" cellpadding=0 cellspacing=0 border=0 >
  		<tr>
  			<td id="b32pt_6" class="b32pt" onclick="AddSkillLevel(6,event.button,32)" align="center" valign="top">32</td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,17)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,17)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/18.gif"><div id="spell_6_18"></div></td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,18)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,18)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/19.gif"><div id="spell_6_19"></div></td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,19)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,19)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/20.gif"><div id="spell_6_20"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b24pt_6" class="b24pt" align="center" onclick="AddSkillLevel(6,event.button,24)" valign="top">24</td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(6,14)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,14)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/15.gif"><div id="spell_6_15"></div></td>
    			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
   			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,15)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,15)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/16.gif"><div id="spell_6_16"></div></td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,16)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,16)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/17.gif"><div id="spell_6_17"></div></td>
  		</tr>
  		<tr>
  			<td id="b16pt_6" class="b16pt" align="center" onclick="AddSkillLevel(6,event.button,16)" valign="top">16</td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,11)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,11)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/12.gif"><div id="spell_6_12"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,12)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,12)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/13.gif"><div id="spell_6_13"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,13)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,13)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/14.gif"><div id="spell_6_14"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b10pt_6" class="b10pt" onclick="AddSkillLevel(6,event.button,10)" align="center" valign="top">10</td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,7)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,7)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/8.gif"><div id="spell_6_8"></div></td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(6,8)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,8)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/9.gif"><div id="spell_6_9"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,9)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,9)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/10.gif"><div id="spell_6_10"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,10)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,10)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/11.gif"><div id="spell_6_11"></div></td>
  		</tr>
  		<tr>
  			<td id="b4pt_6" class="b4pt" onclick="AddSkillLevel(6,event.button,4)" align="center" valign="top">4</td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
   			<td onmouseover="DrawSpell(6,3)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,3)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/4.gif"><div id="spell_6_4"></div></td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(6,4)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,4)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/5.gif"><div id="spell_6_5"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,5)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,5)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/6.gif"><div id="spell_6_6"></div></td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(6,6)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,6)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/7.gif"><div id="spell_6_7"></div></td>
  		</tr>
  		<tr>
  			<td id="b1pt_6" class="b1pt" onclick="AddSkillLevel(6,event.button,1)" align="center" valign="top">1</td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,0)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,0)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/1.gif"><div id="spell_6_1"></div></td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(6,1)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,1)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/2.gif"><div id="spell_6_2"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(6,2)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,6,event.button,2)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Rogue/3.gif"><div id="spell_6_3"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="button"><img id="button6" onmouseover="DrawSkill(6,this)" onmouseout="KillTip()"  onmousedown="AddSkillLevel(6,event.button)" src="images/button.gif"></td>
  			<td colspan=12><a href="javascript:void(0);" onclick="SetPage(6,true);return false">Reset Mastery</A>
        <div id="pointsremaining_6"></div><div id="masterypoints_6"></div></td>
  		</tr>
  	</table>
<% END IF %>

<% if Request.QueryString("master1") = 7 or Request.QueryString("master2") = 7 then %>
 
  <table id="hunting" cellpadding=0 cellspacing=0 border=0 >
  		<tr>
  			<td id="b32pt_7" class="b32pt" onclick="AddSkillLevel(7,event.button,32)" align="center" valign="top">32</td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
   			<td onmouseover="DrawSpell(7,17)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,17)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/18.gif"><div id="spell_7_18"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
   			<td onmouseover="DrawSpell(7,18)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,18)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/19.gif"><div id="spell_7_19"></div></td>
  			<TD> </TD>
   			<td onmouseover="DrawSpell(7,19)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,19)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/20.gif"><div id="spell_7_20"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b24pt_7" class="b24pt" onclick="AddSkillLevel(7,event.button,24)" align="center" valign="top">24</td>
     		<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
   			<td onmouseover="DrawSpell(7,14)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,14)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/15.gif"><div id="spell_7_15"></div></td>
     		<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
   			<td onmouseover="DrawSpell(7,15)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,15)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/16.gif"><div id="spell_7_16"></div></td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
   			<td onmouseover="DrawSpell(7,16)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,16)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/17.gif"><div id="spell_7_17"></div></td>
  		</tr>
  		<tr>
  			<td id="b16pt_7" class="b16pt" onclick="AddSkillLevel(7,event.button,16)" align="center" valign="top">16</td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(7,10)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,10)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/11.gif"><div id="spell_7_11"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
   			<td onmouseover="DrawSpell(7,11)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,11)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/12.gif"><div id="spell_7_12"></div></td>
  			<TD> </TD>
   			<td onmouseover="DrawSpell(7,12)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,12)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/13.gif"><div id="spell_7_13"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
   			<td onmouseover="DrawSpell(7,13)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,13)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/14.gif"><div id="spell_7_14"></div></td>
     			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b10pt_7" class="b10pt" onclick="AddSkillLevel(7,event.button,10)" align="center" valign="top">10</td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(7,6)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,6)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/7.gif"><div id="spell_7_7"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(7,7)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,7)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/8.gif"><div id="spell_7_8"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(7,8)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,8)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/9.gif"><div id="spell_7_9"></div></td>
   			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(7,9)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,9)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/10.gif"><div id="spell_7_10"></div></td>
  		</tr>
  		<tr>
  			<td id="b4pt_7" class="b4pt" onclick="AddSkillLevel(7,event.button,4)" align="center" valign="top">4</td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(7,3)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,3)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/4.gif"><div id="spell_7_4"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(7,4)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,4)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/5.gif"><div id="spell_7_5"></div></td>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(7,5)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,5)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/6.gif"><div id="spell_7_6"></div></td>
  		</tr>
  		<tr>
  			<td id="b1pt_7" class="b1pt" onclick="AddSkillLevel(7,event.button,1)" align="center" valign="top">1</td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(7,0)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,0)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/1.gif"><div id="spell_7_1"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
			   <td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(7,1)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,1)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/2.gif"><div id="spell_7_2"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td onmouseover="DrawSpell(7,2)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,7,event.button,2)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Hunting/3.gif"><div id="spell_7_3"></div></td>
  		</tr>
  		<tr>
  			<td id="button"><img id="button7" onmouseover="DrawSkill(7,this)" onmouseout="KillTip()"  onmousedown="AddSkillLevel(7,event.button)" src="images/button.gif"></td>
  			<td colspan=12><a href="javascript:void(0);" onclick="SetPage(7,true);return false">Reset Mastery</A>
        <div id="pointsremaining_7"></div><div id="masterypoints_7"></div></td>
  		</tr>
  	</table>
<% END IF %>



<% if Request.QueryString("master1") = 8 or Request.QueryString("master2") = 8 then %>
 
  <table id="storm" cellpadding=0 cellspacing=0 border=0 >
  		<tr>
  			<td id="b32pt_8" class="b32pt" onclick="AddSkillLevel(8,event.button,32)" align="center" valign="top">32</td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
       	<td onmouseover="DrawSpell(8,17)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,17)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/18.gif"><div id="spell_8_18"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
       	<td onmouseover="DrawSpell(8,18)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,18)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/19.gif"><div id="spell_8_19"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
       	<td onmouseover="DrawSpell(8,19)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,19)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/20.gif"><div id="spell_8_20"></div></td>
  		</tr>
  		<tr>
  			<td id="b24pt_8" class="b24pt" onclick="AddSkillLevel(8,event.button,24)" align="center" valign="top">24</td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
       	<td onmouseover="DrawSpell(8,14)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,14)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/15.gif"><div id="spell_8_15"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
       	<td onmouseover="DrawSpell(8,15)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,15)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/16.gif"><div id="spell_8_16"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
       	<td onmouseover="DrawSpell(8,16)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,16)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/17.gif"><div id="spell_8_17"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b16pt_8" class="b16pt" onclick="AddSkillLevel(8,event.button,16)" align="center" valign="top">16</td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
      	<td onmouseover="DrawSpell(8,9)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,9)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/10.gif"><div id="spell_8_10"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
      	<td onmouseover="DrawSpell(8,10)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,10)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/11.gif"><div id="spell_8_11"></div></td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
      	<td onmouseover="DrawSpell(8,11)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,11)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/12.gif"><div id="spell_8_12"></div></td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
       	<td onmouseover="DrawSpell(8,12)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,12)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/13.gif"><div id="spell_8_13"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
       	<td onmouseover="DrawSpell(8,13)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,13)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/14.gif"><div id="spell_8_14"></div></td>
  		</tr>
  		<tr>
  			<td id="b10pt_8" onclick="AddSkillLevel(8,event.button,10)" class="b10pt" align="center" valign="top">10</td>
  			<td valign="bottom"><img src="images/topright_grey.gif"></td>
    		<td onmouseover="DrawSpell(8,5)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,5)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/6.gif"><div id="spell_8_6"></div></td>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
     		<td onmouseover="DrawSpell(8,6)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,6)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/7.gif"><div id="spell_8_7"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
     		<td onmouseover="DrawSpell(8,7)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,7)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/8.gif"><div id="spell_8_8"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<TD> </TD>
     		<td onmouseover="DrawSpell(8,8)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,8)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/9.gif"><div id="spell_8_9"></div></td>
  		</tr>
  		<tr>
  			<td id="b4pt_8" class="b4pt" onclick="AddSkillLevel(8,event.button,4)" align="center" valign="top">4</td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(8,2)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,2)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/3.gif"><div id="spell_8_3"></div></td>
  			<td background="images/line_grey.gif"><img src="images/line_grey.gif"></td>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
    			<td onmouseover="DrawSpell(8,3)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,3)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/4.gif"><div id="spell_8_4"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
    			<td onmouseover="DrawSpell(8,4)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,4)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/5.gif"><div id="spell_8_5"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b1pt_8" class="b1pt" onclick="AddSkillLevel(8,event.button,1)" align="center" valign="top">1</td>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(8,0)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,0)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/1.gif"><div id="spell_8_1"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<TD> </TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(8,1)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,8,event.button,1)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Storm/2.gif"><div id="spell_8_2"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="button"><img id="button8" onmouseover="DrawSkill(8,this)" onmouseout="KillTip()"  onmousedown="AddSkillLevel(8,event.button)" src="images/button.gif"></td>
  			<td colspan=12><a href="javascript:void(0);" onclick="SetPage(8,true);return false">Reset Mastery</A>
			  <div id="pointsremaining_8"></div><div id="masterypoints_8"></div></td>
  		</tr>
  	</table>
<% END IF %>


<% if Request.QueryString("master1") = 9 or Request.QueryString("master2") = 9 then %>
 
  <table id="dream" cellpadding=0 cellspacing=0 border=0 >
  		<tr>
  			<td id="b32pt_9" class="b32pt" onclick="AddSkillLevel(9,event.button,32)" align="center" valign="top">32</td>
			<td width="10"><img src="images/Dream/Blank.gif"></td>
			<td onmouseover="DrawSpell(9,17)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,17)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/18.gif"><div id="spell_9_18"></div></td>
  			<TD>&nbsp;</TD>
  			<TD>&nbsp;</TD>  			
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(9,18)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,18)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/19.gif"><div id="spell_9_19"></div></td>
  			<TD> </TD>
  			<TD> </TD>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(9,19)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,19)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/20.gif"><div id="spell_9_20"></div></td>
  			<TD> </TD>
  			<TD> </TD>
  		</tr>
  		<tr>
  			<td id="b24pt_9" class="b24pt" onclick="AddSkillLevel(9,event.button,24)" align="center" valign="top">24</td>
  			<td>&nbsp;</td>
  			<TD>&nbsp;</TD>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(9,15)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,15)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/16.gif"><div id="spell_9_16"></div></td>
			<td background="images/line_grey.gif">&nbsp;</td>
  			<TD>&nbsp;</TD>
  			<TD>&nbsp;</TD>
  			<TD>&nbsp;</TD>
			<td background="images/line_grey.gif">&nbsp;</td>
  			<TD>&nbsp;</TD>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
			<td onmouseover="DrawSpell(9,16)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,16)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/17.gif"><div id="spell_9_17"></div></td>
  		</tr>
  		<tr>
  			<td id="b16pt_9" class="b16pt" onclick="AddSkillLevel(9,event.button,16)" align="center" valign="top">16</td>
  			<td>&nbsp;</td>
  			<td onmouseover="DrawSpell(9,11)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,11)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/12.gif"><div id="spell_9_12"></div></td>
			<td background="images/line_grey.gif">&nbsp;</td>
  			<TD>&nbsp;</TD>
			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,12)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,12)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/13.gif"><div id="spell_9_13"></div></td>
  			<TD>&nbsp;</TD>
  			<td onmouseover="DrawSpell(9,13)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,13)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/14.gif"><div id="spell_9_14"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
			<td onmouseover="DrawSpell(9,14)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,14)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/15.gif"><div id="spell_9_15"></div></td>
			<td background="images/line_grey.gif">&nbsp;</td>
  			<TD> </TD>
  		</tr>  		
  		<tr>
  			<td id="b10pt_9" onclick="AddSkillLevel(9,event.button,10)" class="b10pt" align="center" valign="top">10</td>
  			<td>&nbsp;</td>
  			<TD>&nbsp;</TD>
			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,6)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,6)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/7.gif"><div id="spell_9_7"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,7)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,7)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/8.gif"><div id="spell_9_8"></div></td>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,8)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,8)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/9.gif"><div id="spell_9_9"></div></td>
			<td valign="bottom"><img src="images/topright_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,9)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,9)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/10.gif"><div id="spell_9_10"></div></td>
			<td background="images/line_grey.gif"><img src="images/t_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,10)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,10)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/11.gif"><div id="spell_9_11"></div></td>
  		</tr>
  		<tr>
  			<td id="b4pt_9" class="b4pt" onclick="AddSkillLevel(9,event.button,4)" align="center" valign="top">4</td>
  			<td>&nbsp;</td>
  			<td onmouseover="DrawSpell(9,3)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,3)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/4.gif"><div id="spell_9_4"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,4)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,4)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/5.gif"><div id="spell_9_5"></div></td>
  			<TD>&nbsp;</TD>
  			<td>&nbsp;</td>
    		<td  background="images/line_grey.gif">&nbsp;</td>
  			<TD>&nbsp;</TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,5)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,5)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/6.gif"><div id="spell_9_6"></div></td>
  			<td background="images/line_grey.gif">&nbsp;</td>
  			<TD>&nbsp;</TD>
  		</tr>
  		<tr>
  			<td id="b1pt_9" class="b1pt" onclick="AddSkillLevel(9,event.button,1)" align="center" valign="top">1</td>
  			<td>&nbsp;</td>
  			<TD>&nbsp;</TD>
  			<TD>&nbsp;</TD>
  			<td>&nbsp;</TD>
  			<TD>&nbsp;</TD>
			<td onmouseover="DrawSpell(9,0)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,0)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/1.gif"><div id="spell_9_1"></div></td>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,1)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,1)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/2.gif"><div id="spell_9_2"></div></td>
  			<TD>&nbsp;</TD>
  			<TD>&nbsp;</TD>
  			<td valign="top"><img src="images/bottomright_grey.gif"></td>
  			<td onmouseover="DrawSpell(9,2)" onmousedown="AddPoint(event.ctrlKey,event.shiftKey,9,event.button,2)" onmouseout="KillTip()"  align="center" valign="center"><img src="images/Dream/3.gif"><div id="spell_9_3"></div></td>
  		</tr>
  		<tr>
  			<td id="button"><img id="button9" onmouseover="DrawSkill(9,this)" onmouseout="KillTip()"  onmousedown="AddSkillLevel(9,event.button)" src="images/button.gif"></td>
  			<td colspan=12><a href="javascript:void(0);" onclick="SetPage(9,true);return false">Reset Mastery</A>
		   <div id="pointsremaining_9"></div><div id="masterypoints_9"></div></td>
  		</tr>
  	</table>
<% END IF %>

<BR><BR>
<TABLE width="95%" align="center"><TR><TD>
<font color="white">
<font size=1 face=tahoma,arial>
Return Link:
<input type="text" id="linkback"  onclick="this.select();" style="font-size:8pt;color:white;background:black;width:200;"></div>
</font>
</font>
</TD></TR></TABLE>
<BR><BR>
<CENTER>
<font color="white" size=1>
  Questions/Comments: <a href="http://www.stonedonkey.com/Titan-Quest-Updated-to-065/2007/5/36/Posts.aspx" target="_blank">stonedonkey</a>

<script language=javascript>
  <!--
  var contact = "stonedonkey"
  var email = "titancalc"
  var emailHost = "gmail.com"
  //document.write("<a href=" + "mail" + "to:" + email + "@" + emailHost+ ">" + contact + "</a>" + ".")
  //-->
</script>
</CENTER>


  </TD><TD width="100%"" valign="top">


<br><BR>
	
<div id="stats" style="padding:10px">
<TABLE width="150" id="statstable" cellpadding=0 cellspacing=1 border=0>
<TR><TD colspan=2><div id="atttitle">Base Attributes:</div></TD></TR>
<TR><TD>Health:</TD><TD><div id="health">0</div></TD></TR>
<TR><TD>Energy:</TD><TD><div id="energy">0</div></TD></TR>
<TR><TD>Strength:</TD><TD><div id="str">0</div></TD></TR>
<TR><TD>Intelligence:</TD><TD><div id="int">0</div></TD></TR>
<TR><TD>Dexterity:</TD><TD><div id="dex">0</div></TD></TR>
</TR></TABLE>
</div>
<div style="padding:10px">
Right Click - Remove Point<br>
Left Click - Add Point<br>
Shift-Right Click - Reset Points Points<br/>
Shift-Left Click - Add Full Points
</div>

<div id="skilladjust" style="padding-left:10px">
Rewarded Skill Points:
<select onchange="UpdateSkillStats()" id="skilladjustment">
<% for counter = 0 to 21 %>
<option value="<%=counter%>">
<%=counter %><% select case counter 
    case 5
        response.Write " - All Normal (TQ)"
    case 10 
        response.Write " - All Epic (TQ)"
    case 15
        response.Write " - All Legend (TQ)" 
    case 7
        response.Write " - All Normal (IM)"
    case 14 
        response.Write " - All Epic (IM)"
    case 21
        response.Write " - All Legend (IM)"
    end select
%>
</option>
<% next %>
</select> <a href="RewardPoints.html" target="_blank">What's this?</a>
</div>
<br />
<div id="spelllistingheader"><B>Spell Listing:</B> <input type="checkbox" id="verbose" onclick="DrawSpellList();">Verbose Spells</div>
	<div id="spells">None selected</div>

	<br><br>

	</TD></TR></TABLE>

<br/><br/><br/>
<div style="text-align:center;font-size:10px;font-family:arial,tahoma,verdana,arial">
<a style="color:white;text-decoration:underline;" href="http://www.hansenwebconsulting.com">Developed and Hosted by Hansen Web Consulting - Tampa, FL</a>
</div>


	<BR><BR><BR><BR><BR>
	<BR><BR><BR><BR><BR>
	</BODY>

</HTML>
