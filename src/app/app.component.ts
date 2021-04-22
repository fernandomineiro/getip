import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ipAddress = '';
  
  constructor(private http:HttpClient,
    public apiService: ApiService,) { }
  
  ngOnInit() {
      this.getIPAddress();
  }
  
  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
      this.apiService.getItem(this.ipAddress).subscribe((response) => {
        return response
      });
    });

  }
}
