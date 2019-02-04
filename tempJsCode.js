

function toUp(str){
	if(!str)
		return str;
	else
		return str[0].toUpperCase() + str.slice(1);
};

alert(toUp("bIG"));

function res(incStr){
	if(incStr.indexOf('xxx'))
		return true;
	return false;

function checkSpammy(incStr) {
	if(!incStr)
		return false;
	return res(incStr);
	}
};

alert( checkSpammy('klasnii xxx content') );
alert( res('pipo') );





// function checkSpam(str) {
//   var lowerStr = str.toLowerCase();

//   return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );