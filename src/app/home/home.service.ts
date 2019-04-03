import { Injectable} from '@angular/core'  
import { HttpClient } from '@angular/common/http';
//import {Http,Response } from '@angular/http';  
import { AppComponent } from '../app.component';
// import 'rxjs/add/operator/map'; 
@Injectable()  
export class HomeService

{  
   
    constructor(private http: HttpClient) {  
  
    }  

    getrecords()
    {


      return  this.http.get(AppComponent.apiURL+"getdet.php");
    }


    updatestatus(id){
        

        let body: FormData = new FormData();
      
        body.append('id', id);
    
      
        return  this.http.post(AppComponent.apiURL+"updatestatus.php",body);

    }


postedit(body)
{
   
    return  this.http.post(AppComponent.apiURL+"updatedet.php",body);
  
}

getdatabyid(id){

   return this.http.get(AppComponent.apiURL + "getbyid.php?id=" + id);

}

    deleterecord(data){
        

        let body: FormData = new FormData();
      
        body.append('id', data.ID);
        body.append('imagePath', data.IMAGE);
    
      
        return  this.http.post(AppComponent.apiURL+"deleterecord.php",body);

    }
}  