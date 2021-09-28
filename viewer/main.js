   function validatehms(text) {
        return /^([0-1]?[0-9]|2[0-4])_([0-5][0-9])(_[0-5][0-9])?$/.test(text);
    }
    /*
    Convertitore di numeri interi in corrispettivi letterali.
    Esempio:	123 => centoventitre'
    Born:	10 Giugno 2012
    Licenza: GNU General Public License (versione 3 o successive)
    Autore: Valerio Bozzolan - Reyboz.it
*/
    function spell_my_int(numstr, centOOttanta) {
        mono = new Array("", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove");
        duplo = new Array("dieci", "undici", "dodici", mono[3] + "dici", "quattordici", "quindici", "sedici", "dicias" + mono[7], "dici" + mono[8], "dician" + mono[9]);
        deca = new Array("", duplo[0], "venti", mono[3] + "nta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta");
        cento = new Array("cent", "cento");
        mili = new Array();
        mili[0] = new Array("", "mille", "milione", "miliardo", "bilione", "biliardo");
        mili[1] = new Array("", "mila", "milioni", "miliardi", "bilioni", "biliardi");
        text = new Array();
        cifra = new Array();
        result = "";
        sezione = 0;
        // In Javascript si fa così per dire che questo parametro e' opzionale, con valore false di default
        centOOttanta = centOOttanta || false;
        numstr += '';
        // Non deve cominciare per zero altrimenti parseInt() impazzisce...
        while (numstr.substr(0, 1) == "0" && numstr.length != 1) {
            numstr = numstr.substr(1, numstr.length);
        }
        num = parseInt(numstr);
        switch (numstr.length % 3) {
            case 1: numstr = "00" + numstr;
                break;
            case 2: numstr = "0" + numstr;
        }
        numlen = numstr.length;
        if (isNaN(num)) {
            return "Non e' un numero!";
        } else if (num < 0) {
            return "Numero negativo!";
        } else if (numstr.length > 6 * 3) {
            return "Limite superato!";
        } else if (num == 0) {
            return "zero";
        }
        while ((sezione + 1) * 3 <= numlen) {
            subnumerostring = numstr.substr(((numlen - 1) - ((sezione + 1) * 3)) + 1, 3);
            if (subnumerostring != "000") {
                subnumero = parseInt(subnumerostring);
                cifra[0] = subnumerostring.substr(0, 1);
                cifra[1] = subnumerostring.substr(1, 1);
                cifra[2] = subnumerostring.substr(2, 1);
                prime2cifre = parseInt(cifra[1] * 10) + parseInt(cifra[2]);
                if (prime2cifre < 10) {
                    text[2] = mono[cifra[2]];
                    text[1] = "";
                } else if (prime2cifre < 20) {
                    text[2] = "";
                    text[1] = duplo[prime2cifre - 10];
                } else {
                    //	ventitre => ventitrè
                    if (sezione == 0 && cifra[2] == 3) {
                        text[2] = "tre'";
                    } else {
                        text[2] = mono[cifra[2]];
                    }
                    //	novantaotto => novantotto
                    if (cifra[2] == 1 || cifra[2] == 8) {
                        text[1] = deca[cifra[1]].substr(0, deca[cifra[1]].length - 1);
                    } else {
                        text[1] = deca[cifra[1]];
                    }
                }
                if (cifra[0] == 0) {
                    text[0] = "";
                } else {
                    //	centoottanta => centottanta
                    if (!centOOttanta && cifra[1] == 8 || (cifra[1] == 0 && cifra[2] == 8)) {
                        IDcent = 0;
                    } else {
                        IDcent = 1;
                    }
                    if (cifra[0] != 1) {
                        text[0] = mono[cifra[0]] + cento[IDcent];
                    } else {
                        text[0] = cento[IDcent];
                    }
                }
                //	unomille	=> mille
                //	miliardo	=> unmiliardo
                if (subnumero == 1 && sezione != 0) {
                    if (sezione >= 2) {
                        result = "un" + mili[0][sezione] + result;
                    } else {
                        result = mili[0][sezione] + result;
                    }
                } else {
                    result = text[0] + text[1] + text[2] + mili[1][sezione] + result;
                }
            }
            sezione++;
        }
        return result;
    }
    var dataAll = [];
    var pathTree = [];
    function treeMove(path) {
        if (path == "..") pathTree.pop();
        var original = dataAll["all"];
        var o = original;
        if (path != "." && path != "..") pathTree.push(path);
        try {
            pathTree.forEach(function (element) {
                original = original[element];
            });
        }
        catch (e) {
            return o;
        }
        return original;
    }
    function treeSeek(level) {
        location.hash = pathTree.join("::");
        document.getElementById("pathTicker").innerHTML = pathTree.join(" > ");
        document.getElementById("browser").innerHTML = "";
        var descr = "", descDetail = "", addClass = "";
        var keys = Object.keys(level).sort();
        keys.push("..");
        keys.forEach(key => {
            if (Array.isArray(level) /* we have reached a single file level if this fails */ && key != ".." /* Still display the "go up" card */) return false;
            var dispK = key, openT = "Apri";
            switch (key) {
                case "..":
                    if (pathTree.length < 1) return false; // don't display at first level
                    dispK = "Indietro";
                    descr = "";
                    descDetail = "Scaffale superiore";
                    addClass = "back";
                    openT = "Risali";
                    break;
                case "Arte":
                case "Biologia":
                case "Chimica":
                case "Disegno":
                case "Filosofia":
                case "Fisica":
                case "Informatica":
                case "Inglese":
                case "Italiano":
                case "Matematica":
                case "Religione":
                case "Storia":
                    descr = "Materia";
                    descDetail = "Archvio di tutti gli appunti di " + key;
                    break;
                case "misc":
                    descr = "Appunti misti";
                    dispK = "Miscellanea";
                    descDetail = "Archvio di tutti gli appunti non classificati";
                    break;
                case "Scienze_Motorie":
                    descr = "Materia";
                    dispK = "Scienze Motorie";
                    descDetail = "Archvio di tutti gli appunti di " + dispK;
                    break;
                case "2020":
                case "2021":
                case "2022":
                case "2023":
                case "2024":
                case "2025":
                case "2026":
                case "2027":
                    descr = "Anno";
                    dispK = "Anno " + key;
                    descDetail = "Appunti dell'anno " + spell_my_int(key);
                    break;
                case "settembre":
                case "ottobre":
                case "novembre":
                case "dicembre":
                case "gennaio":
                case "febbraio":
                case "marzo":
                case "aprile":
                case "maggio":
                case "giugno":
                case "luglio":
                case "agosto":
                    descr = "Mese";
                    dispK = key.charAt(0).toUpperCase() + key.slice(1);
                    descDetail = "Appunti dell mese di " + key;
                    break;
                default:
                    var sw = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"];
                    var foundD = false;
                    for (var i = 0; i < sw.length; i++) {
                        if (key.startsWith(sw[i])) {
                            foundD = true;
                            break;
                        }
                    }
                    if (foundD) {
                        descr = "Giorno";
                        var k = key.split("_")[0];
                        k = k.charAt(0).toUpperCase() + k.slice(1);
                        k += " " + key.split("_")[1];
                        dispK = k;
                        descDetail = "Appunti di " + dispK;
                    }
                    else if (validatehms(key)) {
                        descr = "Ora";
                        dispK = key.replaceAll("_", ":");
                        descDetail = "Appunti delle " + dispK;
                    }
                    break;
            }
            document.getElementById("browser").innerHTML += "<li class=\"cards_item " + addClass + "\"><b>" + dispK + "</b><br /> " + descr + "<br /><hr /> <div class=\"extractor\"> " + descDetail + "</div><br /><a href=\"javascript:fs('" + key + "');\">" + openT + "</a></li>";
        });
        if (Array.isArray(level)) {
            level.forEach(function iterate(el) {
                var fi = el.split(".");
                if (el == "appunti.md") {
                    descr = "Foglio degli appunti";
                    descDetail = "Contiene appunti sulle lezioni";
                }
                else if (el == "compiti.md") {
                    descr = "Foglio dei compiti";
                    descDetail = "Contiene compiti";
                }
                else if(fi[fi.length-1]=="md"){
                    descr = "Foglio";
                    descDetail = "Contiene testo formattato in Markdown";
                }
                else if(["png", "jpeg", "jpg", "svg"].includes(fi[fi.length - 1])){
                    descr = "Immagine";
                    descDetail = "Contiene un immagine";
                }
                else if(fi[fi.length-1]=="pdf"){
                    descr = "PDF";
                    descDetail = "Contiene un file pdf";
                }
                else if(["doc", "docx", "odt"].includes(fi[fi.length - 1])){
                    descr = "Documento di testo";
                    descDetail = "Contiene un documento di testo";
                }
                else if(["xls", "xlsx", "ods"].includes(fi[fi.length - 1])){
                    descr = "Foglio di calcolo";
                    descDetail = "Contiene un foglio di calcolo";
                }
                else if(["odp", "pptx", "ppt"].includes(fi[fi.length - 1])){
                    descr = "Presentazione";
                    descDetail = "Contiene una presentazione";
                }
                else if(fi[fi.length-1]=="md"){
                    descr = "Foglio";
                    descDetail = "Contiene testo formattato";
                }
                else if(fi[fi.length-1]=="txt"){
                    descr = "Testo piano";
                    descDetail = "Contiene testo non formattato";
                }
                document.getElementById("browser").innerHTML += "<li class=\"cards_item file \"><b>" + el + "</b><br /> " + descr + "<br /><hr /> <div class=\"extractor\"> " + descDetail + "</div><br /><a href=\"javascript:disdoc('" + el + "');\">Apri</a></li>";
            });
        }
    }
    fetch('list.json')
        .then(response => response.json())
        .then(function elaborate(data) {
            dataAll = data;
            document.getElementById("recents").innerHTML = "";
            data["recent"].forEach(element => {
                document.getElementById("recents").innerHTML += "<li class=\"cards_item\"><b>" + element["subject"] + "</b><br />Foglio di " + element["humanDay"] + "<br /><hr /> <div class=\"extractor\"> " + element["extract"] + "</div><br /><a href=\"doc.html?path=" + encodeURIComponent(element["path"]) + "\">Apri</a></li>";
            });
            if (location.hash.length != 0) pathTree = location.hash.substr(1).split("::");
            treeSeek(treeMove("."));
        });
    function fs(what) {
        treeSeek(treeMove(what));
    }
    function disdoc(d) {
        var ext = d.split(".");
        if (["txt", "md"].includes(ext[ext.length - 1])) {
            location.href = "doc.html?path=" + encodeURIComponent("latest/" + pathTree.join("/") + "/" + d) + "&hash=" + encodeURIComponent(location.hash);
        }
        else {
            if (confirm("Il file potrebbe essere scaricato")) {
                location.href = "https://raw.githubusercontent.com/MatMasIt/notesArchive/main/latest/" + pathTree.join("/") + "/" + d;
            }
        }
    }
