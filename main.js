//das Canvas stellt meine Autobahn dar, hier hole ich das Canvas
const canvas=document.getElementById("myCanvas");


//Hier definiere ich die Breite meines Canvas
canvas.width=200;

//ich definiere einen Context, um mein Auto zu zeichnen, hier in 2d
const ctx = canvas.getContext("2d");

//Autobahn zeichnen
const road=new Road(canvas.width/2,canvas.width*0.9);

//Auto zeichnen (Ohne Context)
const car=new Car(road.getLaneCenter(1),100,30,50, "KEYS");
//GetlaneCenter(1) gibt die Posision des Autos, wenn man die Simulation startet.

//traffic auf der Straße
//Der letzte Wert representiert die höchste geschwindigkeit
const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 0)
];



animate();

function animate(){

    for(let i=0; i<traffic.length; i++){
        traffic[i].update(road.borders, []);
    }

    //Autoposition aktualisieren
    car.update(road.borders, traffic);

    // gibt die Innenhöhe des Fensters in Pixel zurück
    canvas.height=window.innerHeight;

    ctx.save(); //Speichere den Context
    ctx.translate(0,-car.y+canvas.height*0.7); //Position des Autos beim Start der Simulation

    road.draw(ctx); //Autobahn zeichnen (ich verwenden, den Context, den ich definiert habe)

    //Traffic zeichen
    for (let i=0 ; i<traffic.length; i++){
        traffic[i].draw(ctx);
    }

    car.draw(ctx); //Auto zeichnen (ich verwenden, den Context, den ich definiert habe)

    ctx.restore();
    //requestAnimationFrame diese Methode wird die Methode animate immer wieder aufrufen
    requestAnimationFrame(animate);
}