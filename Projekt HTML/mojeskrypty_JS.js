document.getElementById('tytul').innerHTML = "Moj tytul z JS";
/*  modyfikacja h1 - skrypt JS
        Metody osadzania JS:
        1 - można wstawić w <head> ale trzeba pamiętać że strona ładuje się od góry do dołu kodu, 
        więc skrypt może się odwoływać do elementów, które jeszcze nie istnieją, 
        dlatego najlepiej jest wstawić JS skrypt dopiero za <body>
        2 - za body
        3 - stosując opóźnienia w ładowaniu skryptów (dopiszę o tym później)
        4 - w osobnym pliku, dołączając w <head> linijkę "<script src="mojeskryptyJS_js"></script>"
*/