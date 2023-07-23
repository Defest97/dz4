import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countriesl',
  templateUrl: './countriesl.component.html',
  styleUrls: ['./countriesl.component.css']
})
export class CountrieslComponent {
  countryName='';
  countryListInfo: any;
  countryInfo:any;
  constructor(private api: CountriesService) {
    api.getCountries().subscribe(tmp => {
      this.countryListInfo = tmp;
    })
  }
  onClick()
  {
    if(this.countryName.length>0)
    {
      this.api.getCountry(this.countryName).subscribe(tmp=>{
        this.countryInfo=tmp;
        console.log(this.countryInfo)
      })
    }
  }
  getObjectKeys(obj:any)
  {
    return Object.values(obj);
  }
}
