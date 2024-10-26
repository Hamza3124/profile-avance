//Création d'un string JSON
var jsonData • '("non": "Saidi", "prenom": "Ali")';
document write (typeof(jsonData)+'<br>'); //string
//Création d'un objet Javascript
var jsobject = (nom: "Saidi", prenom: "a11");
document write(typeof(jsObject) +'<br>');//Object
//Convertir JSON vers Javascript
var jsObject = JSON,parse(jsonData);
document write(typeof (jsObject) +'<br›');//object
document write(jsObject+'<br›'); //[object object]
document write(jsObject.nom + "
"+JsObject,prenom+'<br>'); //Saidi Ali
//Convertir javascript vers JSON
var jsonString = JSON.stringify(js0bject);
document write(typeof (jsonString)+'<br›*);//string 
document write(jsonString) ;//("nom": "Saidi", "prend
""all")
//remarquer la présence des "™ dans les clés