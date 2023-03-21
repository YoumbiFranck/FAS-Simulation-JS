class Controls{
    //Die Objektkontrolle soll vier verschiedene Attribute haben
    constructor(type){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        //Hier wollen wir nur ein Auto kontrollieren
        switch (type){
           //Wenn wir unseres Auto indentifiziert haben
            case "KEYS":
                //Ich rufe die Methode hier, um das Auto zu kontrollieren.
                this.#addKeyboardListeners();
                break;
            //Wenn wir das andere Auto haben, muss er nur nach vorne gehen
            case "DUMMY":
                this.forward = true;
                break;
        }

    }

    //diese Methode ist private, deshalb #, und wird nur hier aufgerufen
    //Referenz zum Objekt Controlls
    // Es ist zwingen notenwendig die Arroy funktion von JavaScript zu verwenden.
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            //Abhängig von der gewählten Schlüssel oder dem gedrückten Knopf
            switch(event.key){
                //<
                case "ArrowLeft":
                    this.left=true;
                    break;
                 //>
                case "ArrowRight":
                    this.right=true;
                    break;
                //oben
                case "ArrowUp":
                    this.forward=true;
                    break;
                //unten
                case "ArrowDown":
                    this.reverse=true;
                    break;
            }

        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
            }
            console.table(this);

        }
    }
}