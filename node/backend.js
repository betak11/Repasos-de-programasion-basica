var papas = 100
var basededatos={
	usuario:"kevin",
	password:"betak0815"
};
console.log("hola como estas?");

var express = require("C:\\Program Files (x86)\\nodejs\\node_modules\\express");
var parcero = require("C:\\Program Files (x86)\\nodejs\\node_modules\\body-parser");
var web = express();
web.use(parcero.urlencoded() );
var server;
server =  web.listen(80,function()
{
	console.log("servidor cargado juan :D")
});
web.get("/",function(request,response)
{
	response.sendfile("C:\\Users\\Mega\\Google Drive\\node\\formulario.html");
})
/*web.get("/",function(request,response)
{
	response.send("su conputadora a sido hackeada. "+papas);
});*/
web.post("/entrar", function(request,response){

	if(request.body.usuario == basededatos.usuario && request.body.clave == basededatos.password)
	{
		response.send("bienbenido al area secreta!!!");
	}
	else
	{
		response.send("Bye Bye");
	}

});

///http://127.0.0.1/hola/como/estas?edad=90&nombre=laura
web.get("/hola/como/estas",function(request,response)
{
	//console.log(request)
	response.send("hola como estas<input type=\"text\">jajaja"+request.query.nombre);

});
