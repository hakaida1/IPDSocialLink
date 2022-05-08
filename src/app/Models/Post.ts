export class Post {
  title: string;
  user : string;
  image : string;
  pI : string;
  pulse: boolean;
  saveChecked: boolean;
  likeChecked: boolean;
  snap: number;
  description: string;
  date : Date;
  location : string;
  constructor ( title:string, user : string,image : string,pI : string, pulse : boolean, saveChecked : boolean, likeChecked : boolean, snap : number,
              description : string, date:Date , location:string)
    {

    this.title = title;  
    this.user = user;
    this.image = image;
    this.pI = pI;
    this.pulse = pulse;
    this.saveChecked = saveChecked;
    this.likeChecked = likeChecked;
    this.snap = snap;
    this.description =description;
    this.date=date;
    this.location = location;

   

  }
  
  changeLikeCheckedValue() {
    this.pulse = true
    this.likeChecked = !this.likeChecked
    setTimeout(() => this.pulse = false, 300)
  }
  }

