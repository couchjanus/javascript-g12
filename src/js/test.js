'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

function CreateRequest() {
	var httpRequest = false;

	if (window.XMLHttpRequest) {
		//Gecko-совместимые браузеры, Safari, Konqueror
		httpRequest = new XMLHttpRequest();
		httpRequest.overrideMimeType('text/xml');
	} else if (window.ActiveXObject) {
		//Internet explorer
		try {
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (CatchException) {
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
	}

	if (!httpRequest) {
		console.log("Невозможно создать XMLHttpRequest");
	}

	return httpRequest;
}

function printConsole(text) {
	document.getElementById("console").innerHTML += text;
}

function sendRequest() {
	//Создаём запрос
	//  Это вызывает функцию CreateRequest();
	var request = CreateRequest();
	var url = 'http://jsonplaceholder.typicode.com/';

	//Проверяем существование запроса
	if (!request) {
		console.log("Невозможно создать XMLHttpRequest");
	} else {
		console.log("Ура! Мы создали XMLHttpRequest. Что с ним делать?");

		request.onreadystatechange = function () {
			switch (request.readyState) {
				case 1:
					printConsole('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
					break;
				case 2:
					printConsole('<div class="alert alert-primary" role="alert">2: Отправлен...</div>');
					break;
				case 3:
					printConsole('<div class="alert alert-warning" role="alert">3: Идет обмен...</div>');
					break;
				case 4:
					{
						if (request.status == 200) {
							printConsole('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
							document.getElementById("printResult").innerHTML = "<b>" + request.responseText + "</b>";
						} else if (request.status == 404) {
							printConsole('<div class="alert alert-danger" role="alert">Ошибка: запрашиваемый скрипт не найден!</div>');
						} else {
							printConsole('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: ' + request.status + '</div>');
						}
						break;
					}
			}
		};
		request.open('GET', url, true);
		// this.style.display = 'none';
		request.send('');
	}
}

// Пользователь нажимает на ссылку 

document.querySelector('.btnGo').addEventListener('click', sendRequest);

$('.btnGo0').on('click', function () {
	// ==============Создаём запрос====================
	$.ajax({
			url: 'http://jsonplaceholder.typicode.com/',
		})
		.done(function (data) {
			$('#console').html('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
			if (console && console.log) {
				console.log("Sample of data:", data.slice(0, 100));
			}
		});
	});

$('.btnGo1').on('click', function () {
	// ==============Создаём запрос====================
	$.ajax({
			url: 'http://jsonplaceholder.typicode.com/',
			beforeSend: function () {
				$('#console').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
			}
		})
		.fail(function (xhr, statusText) {
			$('#console').html('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: ' + statusText + '</div>');
			$("#printResult").html("<b>Error: " + statusText + "</b>");
		})
		.done(function (data) {
			var text = $('#console').html();
			$('#console').html(text + '<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
			$("#printResult").html("<b>Прибыли данные: </b>" + data);
			if (console && console.log) {
				console.log("Sample of data:", data.slice(0, 100));
			}
		})
		.always(function () {
			var text = $('#console').html();
			$('#console').html(text + '<div class="alert alert-success" role="alert">5: All Done!</div>');
		});

});


$('.btnGo2').on('click', function () {
	fetch('https://api.myjson.com/bins/zrs3y')
		.then(
			function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' +
						response.status);
					return;
				}
				response.json().then(function (data) {
					var text = $('#console').html();
					$('#console').html(text + '<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
					$("#printResult").html("<b>Прибыли данные: </b>" + data);
					console.log(data);
				});
			})
		.catch(function (err) {
			console.log('Fetch Error :-S', err);
		});
});