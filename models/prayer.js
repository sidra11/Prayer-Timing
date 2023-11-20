class Prayer {
    constructor(name, imageUri,time,location){
     this.name= name;
     this.imageUri= imageUri;
     this.time= time;
     this.location= location;
     this.id = new Date().toString() + Math.random().toString();   
    }
}