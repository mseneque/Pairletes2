<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head profile="http://selenium-ide.openqa.org/profiles/test-case">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="selenium.base" href="https://pairletes2.herokuapp.com/" />
<title>viewProfile</title>
</head>
<body>
<table cellpadding="1" cellspacing="1" border="1">
<thead>
<tr><td rowspan="1" colspan="3">viewProfile</td></tr>
</thead><tbody>
<tr>
	<td>open</td>
	<td>/profile/newuser</td>
	<td></td>
</tr>
<tr>
	<td>clickAndWait</td>
	<td>link=Find A Match!</td>
	<td></td>
</tr>
<tr>
	<td>select</td>
	<td>id=activity</td>
	<td>label=Gym</td>
</tr>
<tr>
	<td>select</td>
	<td>id=gender</td>
	<td>label=Female</td>
</tr>
<tr>
	<td>clickAndWait</td>
	<td>css=input.btn.btn-default</td>
	<td></td>
</tr>
<tr>
	<td>verifyLocation</td>
	<td>https://pairletes2.herokuapp.com/findmatch</td>
	<td></td>
</tr>
<tr>
	<td>clickAndWait</td>
	<td>css=button.btn.btn-default</td>
	<td></td>
</tr>
<tr>
	<td>verifyLocation</td>
	<td>https://pairletes2.herokuapp.com/profile/jenny</td>
	<td></td>
</tr>

</tbody></table>
</body>
</html>
