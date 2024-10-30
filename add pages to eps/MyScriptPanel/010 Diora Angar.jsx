/***
	{
		"name" : "Diora Angar",
	}
***/


var ImportFile = new Array();

//указать названия (относительный путь внутри папки):
ImportFile[1] = "паспорт - стр2 и 7 (тб и условия).pdf";
ImportFile[2] = "Diora Angar/паспорт Angar - стр3 и 6.pdf";
ImportFile[3] = "Diora Angar/паспорт Angar - стр4 и 5.pdf";

//всего страниц:
var pages = 3 

//основная функция
main()
function main() {
$.evalFile(Folder.myDocuments + '/ImportPagesToEPS.jsx');
}