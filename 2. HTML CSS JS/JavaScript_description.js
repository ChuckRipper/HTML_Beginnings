/* JavaScript - opis
*/
/* 0. Wyjaśnienia
Właściwości - zachowują się jak zmienne do których przypisujemy nową wartość
Metody - zachowują się jak funkcje, którym podajemy argumenty
DOM - Document Object Model  
*/
/* 1. Deklarowanie zmiennych

var - zmienna widoczna globalnie lub wewnątrz funkcji, opcjonalnie przypisująca wartość do zmiennej  
const - stała widoczna globalnie lub w bloku, nie może być redefiniowana; zmienna stała tylko do odczytu
let - zmienna widoczna w bloku, opcjonalnie przypisująca wartość do zmiennej 
*/
/* 2. Typy danych

Prymitywne:
Boolean (1-bitowy) - typ binarny: true/false
Symbol - typ danych z zagwarantowaną unikalnością - nawet jeśli porównamy identyczne wartości symboliczne, zostanie nam zwrócony fałsz
string (2 bajty na znak) - ciąg znaków, także typ tekstowy
number (8-bajtowy) - typ liczbowy (wszystkie liczby są typu zmiennoprzecinkowego)
null - literał reprezentujący zamierzony brak wartości obiekty, nie jest zmienną globalną
undefined - typ zadeklarowany ale niezdefiniowany (póki nie zdefiniujemy zmiennej, tj. nie nadamy jej wartości, jej typ to undefined)

Złożone:
object - obiekt 

Lista obiektów:
    Array - tablica - obiekt listo-podobny wysokiego poziomu
    ArrayBuffer - obiekt reprezentujący bufor (tablicy) z surowymi danymi binarnymi o niezmiennej długości; nie jest możliwe bezpośrednio wpływanie na zawartoość takiego obiektu; używany do odczytu oraz zapisu
        treści bufora
    BigInt - obiekt umożliwiający reprezentowanie całych liczb większch niż 2^53 - 1, ile wynosi największa liczba, którą JavaScript może faktycznie reprezentować przez prymityw Number
    Boolean - typ binarny: true/false
    DataView - obiekt udostępniający niskopoziomowy interfejs do zapisu i odczytu typów numerycznych w formie ArrayBuffer niezależnie od kodowania platformy
    Date - obiekt tworzący instancję Date, który pozwalają na pracę z danymi opisującymy datę i czas
    Error - obiekt błędu, instancja klasy Error jest rzucana w momencie napotkania błędu w trakcie wykonywania programu, może być wykorzystywana jako funkcja do tworzenia wyjątków
    Function - funkcja
    Generator - obiekt jest zwracany przez generator function i odpowiada obu: iterable protocol i iterator protocol.
    Infinity - Number reprezentujący nieskończoność (domyślnie: Number.POSITIVE_INFINITY)
    JSON - obiekt zawierający metody analizy składniowej JavaScript Object Notation (JSON) i konwertowania wartości do formatu JSON; nie może być on wywoływany lub utworzony i prócz kego dwóch metod, sam w sobie
        nie ma interesuącej funkcjonalności
    Map - obiekt mapujący klucze na wartości, każdy element (zarówno obiekt jak i prymitywy) mogą być użyte zarówno jako klucz jak i wartość; obiekt ten iteruje swoje elementy we wprowadzonej kolejności,
        pętla for...of zwraca tablicę [key, value] dla każdej iteracji
    Math - wbudowany obiekt zawierający własności i metody związane z funkcjami i stałymi matematycznymi. Na przykład własność PI obiektu Math zawiera wartość liczby pi; Obiekt Math w JS
        jest predefiniowanym obiektem najwyższego poziomu, można z niego korzystać od razu, bez korzystania z konstruktora lub wywoływania tworzącej metody; Wszystkie własności i metody obiektu Math są statyczne,
        do stałej pi odwołujemy się poprzez Math.PI, a funkcję sinus wywołujemy jako Math.sin(x), gdzie x jest argumentem metody, stałe zdefiniowane są z pełną precyzją liczb rzeczywistych JS;
    NaN - Number nie będący liczbą, nie jest równy żadnej liczbie ani nawet samej sobie
    null - literał reprezentujący zamierzony brak wartości obiekty, nie jest zmienną globalną
    Object - po prostu obiekt
    Promise - "obietnica"; obiekt reprezentujący ewentualne zakończenie (lub porażkę) asynchronicznej operacji (akcji) i jej wartości
    Proxy - obiekt jest używany w celu definiowania specyficznego zachowania dla podstawowych operacji (np. wyszukiwanie atrybutu, przypisanie, wyliczanie, wywołanie funkcji, itd.)
    RangeError - obiekt wskazujący na błąd wartości poza zakresem dozwolonych wartości
    RegExp - łańcuch znaków, wyrażenie regularne
    Set - kolekcja wartości; obiekt umożliwia przechowywanie unikalnych wartości każdego typu, zarówno primitywów (wartości prymitywnych) jak i obiektów.
    String - łańcuch znaków
    Symbol - wartość symboliczna, typ danych z zagwarantowaną unikalnością - nawet jeśli porównamy identyczne wartości symboliczne, zostanie nam zwrócony fałsz
    undefined - wartość niezidentyfikowana 
    */
/* 3. Operatory, arytmetyka, przypisywanie, porównywanie

Operatory arytmetyczne
+ - suma
- - różnica
* - iloczyn
/ - iloraz
** - potęgowanie/eksponencjacja
% - operacja modulo (arytmetyka reszt z dzielenia)
++ - inkrement (przyrost o 1) 
    ++i - preinkrement - przyrost wartości przed operacją
    i++ - postinkrement - przyrost wartości po operacji
-- - dekrement (spadek wartości o 1)
    --i - predekrement - spadek wartości przed opeeracją
    i-- - postdekrement - spadek wartości po operacji

Operatory przypisania
= - operator przypisania wartości do zmiennej
+= - przypisanie sumy do wartości zmiennej
-= - przypisanie różnicy do wartości zmiennej
*= - przypisanie iloczynu do wartości zmiennej
/= - przypisanie ilorazu do wartości zmiennej
%= - przypisanie operacji modulo do wartości zmiennej (a % = b to to samo co a = a % b)
<<= - przypisanie przesunięcia bitowego w lewo
>>= - przypisanie przesunięcia bitowego w prawo
>>>= - przypisanie przesunięcia bitowego w prawo bez znaku (unsigned)
&= - przypisanie iloczynu bitowego (AND bitowy)
^= - przypisanie sumy bitowej modulo 2 (XOR bitowy)
|= - przypisanie sumy bitowej (OR bitowy)
**= - przypisanie potęgi do wartości zmiennej

Operator działania na typie String
+ - łączenie łańcuchów znaków (konkatenacja)
= - przypisanie łańcucha znaków do zmiennej
== - porónanie identyczności łańcuchów znaków
+= - przypisanie konkatenacji łańcuchów znaków do zmiennej

Operatory porównania
== - operator równości (tu: równości) i konwersji typu (jeśli typy porównywanych danych są różne)
=== - operator równości (tu: identyczności) - sprawdzana jest zarówno wartość jak i typ wartości
!= - operator nierówności
!== - operator nierówności typu wartości lub wartości
> - operator większości
> - operator mniejszości
>= - operator większości lub równiści
>= - operator mniejszości lub równości
? - operator trójskładnikowy (dla wersji inline instrukcji warunkowej if)

Operatory logiczne
&& - operator iloczynu logicznego (AND logiczny)
|| - operator sumy logiczne (OR logiczny)
! - operator negacji logicznej (NOT logiczny)

Operatory typu
typeof - zwraca typ zmiennej; zwracane wartości: function, string, number, object, undefined, Boolean, 
instanceof - zwraca "true" gdy obiekt jest jest instancją typu obiektowego

Operatory bitowe
& - AND
| - OR
~ - NOT
^ - XOR
<< - przesunięcie bitowe w lewo (wypełnianie prawej strony zerami, odpowiednik mnożenia liczby bitowej przez 2)
>> - przesunięcie bitowe w prawo (przesunięcie w prawo z możliwością zmiany znaku, gdy 1 zostanie przeniesiona ze skrajnej prawej pozycji na skrajną lewą,
    odpowiednik dzielenia liczby bitowej przez 2 o ile nie dochodzi do zmiany znaku)
>>> - przesunięcie bitowe w prawo (wypełnianie lewej strony zerami, odpowiednik dzielenia liczby bitowej przez 2)

Kolejność wykonawania działań w JS
Im wyższa wartość pierwszeńswa (precedence value), tym wyższy priorytet działania. W razie wykonywania działań o tym samym priorytecie, działania są wykonywane w kolejności od lewej do prawej. 

Wartość	    Operator	    Opis	                                    Przykład
20	        ( )	            Expression grouping	                        (3 + 4)
 	 	 	 
19	        .	            Member (członek)                            person.name
19	        []	            Member	                                    person["name"]
19	        ()	            Wywołanie funkcji                           myFunction()
19	        new	            Create	                                    new Date()
 	 	 	 
17	        ++	            Postinkrementacja	                        i++
17	        --	            Postdekrementacja	                        i--
 	 	 	 
16	        ++	            Preinkrementacja	                        ++i
16	        --	            Predekrementacja                            --i
16	        !	            Logiczne "nie"                              !(x==y)
16	        typeof	        Typ zmiennej                                typeof x
 	 	 	 
15	        **	            Potęgowanie (ES2016)	                    10 ** 2
 	 	 	 
14	        *	            Mnożenie    	                            10 * 5
14	        /	            Dzielenie	                                10 / 5
14	        %	            Reszta z dzielenia	                        10 % 5
 	 	 	 
13	        +	            Dodawanie	                                10 + 5
13	        -	            Odejmowanie	                                10 - 5
 	 	 	 
12	        <<	            Przesunięcie bitowe w lewo                  x << 2
12	        >>	            Przesunięcie bitowe w prawo	                x >> 2
12	        >>>	            Przesunięcie bitowe w prawo bez znaku	    x >>> 2
 	 	 	 
11	        <	            Mniejsze niż	                            x < y 
11	        <=	            Równe lub mniejsze niż	                    x <= y
11	        >	            Większe niż	                                x > y
11	        >=	            Równe lub większe niż	                    x >= y
11	        in	            Właściwość w obiekcie                       "PI" in Math
11	        instanceof	    Instancja obiektu	                        instanceof Array
 	 	 	 
10	        ==	            Równa się	                                x == y
10	        ===	            Równa się i jest tego samego typu	        x === y
10	        !=	            Nie równa się	                            x != y
10	        !==	            Nie równa się lub tego samego typu	        x !== y
 	 	 	 
9	        &	            Bitowy AND	                                x & y
8	        ^	            Bitowy XOR	                                x ^ y
7	        |	            Bitowy OR	                                x | y
6	        &&	            Logiczne AND	                            x && y
5	        ||	            Logiczne OR	                                x || y
4	        ? :	            Warunek, if w postaci inline	            ? "Yes" : "No"
 	 	 	 
3	        +=	            Przypisanie	                                x += y
3	        /=	            Przypisanie	                                x /= y
3	        -=	            Przypisanie	                                x -= y
3	        *=	            Przypisanie	                                x *= y
3	        %=	            Przypisanie	                                x %= y
3	        <<=	            Przypisanie	                                x <<= y
3	        >>=	            Przypisanie	                                x >>= y
3	        >>>=	        Przypisanie	                                x >>>= y
3	        &=	            Przypisanie	                                x &= y
3	        ^=	            Przypisanie	                                x ^= y
3	        =	            Przypisanie	                                x |= y
 	 	 	 
2	        yield	        Funkcja pauzy	                            yield x
1	        ,	            Przecinek	                                5 , 6
*/
/* 4. Typ String

Metody
.indexOf(string) - wyszukuje string w stringu

Właściwości
.length - zwraca długość tekstu



Typ Obiekt


*/
/* 1. Wyszukiwanie elementu HTML

Metody
document.getElementById(id) - znajdź element po jego ID
document.getElementsByTagName(name) - znajdź element po jego tagu HTML
document.getElementsByClassName(name) - znajdź element po jego klasie 
*/
/* 2. Zmiana elementów HTML

Właściwości
element.innerHTML = new html content - zmiana elementu wewnątrz dokumentu HTML (np. zmiana tekstu)
element.attribute = new value - zmiana wartości atrybutu elementu HTML
element.style.property = new style - zmiana stylu (CSS) elementu HTML

Metody
element.setAttribute(attribute, value); - zmiana wartości atrybutu elementu HTML 
*/
/* 3. Dodawanie i usuwanie elementów

Metody
document.createElement(element) - tworzy element HTML
document.removeChild(element) - usuwa element HTML
document.appendChild(element) - dodaje element HTML
document.replaceChild(new, old) - zastępuje element HTML innym
document.write(text) - wpisuje tekst na strumień wyjścia HTML 
*/
/* 4. Dodawanie obsługi zdarzeń

Metody
document.getElementById(id).onclick = function(){code} - dodaje wydarzenia następujące po kliknięciu elementu znalezionego po ID 
*/
/* 5. Szukanie obiektów HTML

Właściwości
document.anchors - zwraca wszystkie kotwice <a>
document.applets - zwraca elementy typu <applet> (przestarzałe w HTML5)
document.baseURI - zwraca bazę identyfikatora URI (URI = URL + URN)
document.body - zwraca element <body>
document.cookie - zwraca plik cookie dokumentu
document.doctype - zwraca doctype dokumentu
document.documentElement - zwraca element HTML
document.documentMode - zwraca tryb używany przez przeglądarkę
document.documentURI - zwraca identyfikator URI dokumentu
document.domain - zwraca nazwę domeny serwera na którym jest dokument
document.domConfig - zwraca konfigurację DOM (przestarzałe)
document.embeds - zwraca wszystkie elementy <embed>
document.forms - zwraca wszystkie elementy <form>
document.head - zwraca element <head>
document.images - zwraca wszystkie elementy <img>
document.implementation - zwraca implementację DOM
document.inputEncoding - zwraca stronę kodową dokumentu (zbiór znaków)
document.lastModified - zwraca datę i godzinę ostatniej aktualizacji dokumentu
document.links - zwraca wszystkie elementy <area> i <a> posiadające atrybut "href" (czyli linki)
document.readyState - zwraca status ładowania dokumentu (w procentach)
document.referrer - zwraca identyfikator URI strony odsyłającej (podlinkowanego dokumentu)
document.scripts - zwraca wszystkie elementy <script>
document.strictErrorChecking - zwraca informację jeśli sprawdzanie błędów jest wymuszone
document.title - zwraca element <title>
document.URL - zwraca kompletny adres URL dokumentu 
*/


/* English version of Precedence Value
Value	Operator	Description	Example
20	( )	Expression grouping	(3 + 4)
 	 	 	 
19	.	Member	person.name
19	[]	Member	person["name"]
19	()	Function call	myFunction()
19	new	Create	new Date()
 	 	 	 
17	++	Postfix Increment	i++
17	--	Postfix Decrement	i--
 	 	 	 
16	++	Prefix Increment	++i
16	--	Prefix Decrement	--i
16	!	Logical not	!(x==y)
16	typeof	Type	typeof x
 	 	 	 
15	**	Exponentiation (ES2016)	10 ** 2
 	 	 	 
14	*	Multiplication	10 * 5
14	/	Division	10 / 5
14	%	Division Remainder	10 % 5
 	 	 	 
13	+	Addition	10 + 5
13	-	Subtraction	10 - 5
 	 	 	 
12	<<	Shift left	x << 2
12	>>	Shift right	x >> 2
12	>>>	Shift right (unsigned)	x >>> 2
 	 	 	 
11	<	Less than	x < y 
11	<=	Less than or equal	x <= y
11	>	Greater than	x > y
11	>=	Greater than or equal	x >= y
11	in	Property in Object	"PI" in Math
11	instanceof	Instance of Object	instanceof Array
 	 	 	 
10	==	Equal	x == y
10	===	Strict equal	x === y
10	!=	Unequal	x != y
10	!==	Strict unequal	x !== y
 	 	 	 
9	&	Bitwise AND	x & y
8	^	Bitwise XOR	x ^ y
7	|	Bitwise OR	x | y
6	&&	Logical AND	x && y
5	||	Logical OR	x || y
4	? :	Condition	? "Yes" : "No"
 	 	 	 
3	+=	Assignment	x += y
3	/=	Assignment	x /= y
3	-=	Assignment	x -= y
3	*=	Assignment	x *= y
3	%=	Assignment	x %= y
3	<<=	Assignment	x <<= y
3	>>=	Assignment	x >>= y
3	>>>=	Assignment	x >>>= y
3	&=	Assignment	x &= y
3	^=	Assignment	x ^= y
3	|=	Assignment	x |= y
 	 	 	 
2	yield	Pause Function	yield x
1	,	Comma	5 , 6
*/
