$.hiresTimer; // запуск таймера

var ImportFileN = new Array();
var SourceFolder, files, FileType, err, AlertOn



//включить уведомление об окночании (false = выключить)
AlertOn = true; 

//путь к папке страниц
ImportFilePath = "//192.168.10.10/0$/projects/для 1С/" 

//путь к папке обработки
SourceFolder = Folder("D:\\1");


//скрипт превращения в монтажную область
var ScriptArtboards = new File(Folder.myDocuments + '/createArtboardsFromTheSelection.jsx')
//https://github.com/MooNFishZ/illustrator-scripts/blob/957c52910c2aafc52f56ad3dfde19256d6f20697/createArtboardsFromTheSelection.jsx


for ( k = 1; k <= pages; k++ ) //цикл новый путь
{
	ImportFileN[k] = File(ImportFilePath+ImportFile[k]);
	if ( ImportFileN[k].length <= 0 ) //ошибка1
	{
		alert( 'Файл: ' + ImportFile[k] + '\nне найден!' );
		err = true;
	}
}


if ( SourceFolder != null && err != true) 
{
	files = new Array();
	FileType = "*.eps"; //тип файлов
	files = SourceFolder.getFiles( FileType );

	if ( files.length > 0 )
	{
	
		for ( i = 0; i < files.length; i++ ) //цикл открыть eps
		{
			app.open(files[i])
			
			for ( k = 1; k <= pages; k++ ) //цикл добавление страниц
			{		
				var doc = app.activeDocument;
				var outlineLayer = doc.layers.add(); //новый слой
				outlineLayer.name = "NewLayer "+(k); //название слоя
			
				var placed = outlineLayer.placedItems.add(); //добавить страницу
				placed.file = File(ImportFileN[k]);
				placed.position = [0, -800*k+5]; //смещение новых страниц на 805 pt вниз
				$.evalFile(ScriptArtboards);
			}

		var pdfFile = new File(doc.path); //настройки сохранения
		var pdfOptions = new PDFSaveOptions();
		pdfOptions.compatibility = PDFCompatibility.ACROBAT7;
		pdfOptions.generateThumbnails = false;
		pdfOptions.preserveEditability = false;
		pdfOptions.preset = "[Standard(1)]"; //название файла настроек сохранения
		doc.saveAs(pdfFile, pdfOptions);
		//app.redraw();
		doc.close();	
		}

		var time = $.hiresTimer/1000000; // таймер стоп
		if ( AlertOn = true)
		{
			alert( 'Готово. \nОбработано файлов: ' + files.length + "\nВремя работы: " + time.toFixed(2) + " сек");
		}
	}

else if (err != true) //ошибка2
{
alert( 'Файлы eps в D:\\1 не найдены!' );
}

}
