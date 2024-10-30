/***
	{
		"name" : "Diora Craft",
	}
***/

var ImportFile = new Array();

//указать названия (относительный путь внутри папки):
ImportFile[1] = "паспорт - стр2 и 7 (тб и условия).pdf";
ImportFile[2] = "Diora Craft/паспорт Craft - стр3 и 6.pdf";
ImportFile[3] = "Diora Craft/паспорт Craft - стр4 и 5.pdf";

//всего страниц:
var pages = 3 

//основная функция
main()
function main() {
$.evalFile(Folder.myDocuments + '/ImportPagesToEPS.jsx');
}