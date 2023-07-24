
import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { COUNTRES } from '../model/countries';
import { COUNTRY } from '../model/country';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
  data: any;
  Countries:COUNTRY[]=[];



  constructor(private router: Router,private shared:SharedService) {}
 imgCollection=[
  {
    image:'https://th.bing.com/th/id/OIP.1R_M3TeRJqE9LCQVJRS_IgHaFj?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.1R_M3TeRJqE9LCQVJRS_IgHaFj?pid=ImgDet&rs=1',
    title:'Australia'
  }
  ,{
    image:'https://th.bing.com/th/id/OIP.iOvgfallNS5WDowvrhB4mwHaE7?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.iOvgfallNS5WDowvrhB4mwHaE7?pid=ImgDet&rs=1',
    title:'UK'

  },{
    image:'https://yt3.ggpht.com/-DItrgjLJ_xg/AAAAAAAAAAI/AAAAAAAAAAA/BwnbEZRLuFE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
    thumbImage:'https://yt3.ggpht.com/-DItrgjLJ_xg/AAAAAAAAAAI/AAAAAAAAAAA/BwnbEZRLuFE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title:'USA'
  }
 ,{
  image:'https://th.bing.com/th/id/R.2a2acfdb4f0717725c2bdec4529e9625?rik=n4jL6pivzFc%2fYA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1915133.jpg&ehk=%2b6kul4rL1wgHr6UtY04UhB4OIXhwcXtGQAzuSaYjG1Q%3d&risl=&pid=ImgRaw&r=0',
  thumbImage:'https://th.bing.com/th/id/R.2a2acfdb4f0717725c2bdec4529e9625?rik=n4jL6pivzFc%2fYA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1915133.jpg&ehk=%2b6kul4rL1wgHr6UtY04UhB4OIXhwcXtGQAzuSaYjG1Q%3d&risl=&pid=ImgRaw&r=0',
  title:'South Korea'
},{
  image:'https://th.bing.com/th/id/OIP.Ak0jajPMeCs-ysHjI_YD4wHaE8?pid=ImgDet&rs=1',
  thumbImage:'https://th.bing.com/th/id/OIP.Ak0jajPMeCs-ysHjI_YD4wHaE8?pid=ImgDet&rs=1',
  title:'Thailand'
},{
    image:'https://th.bing.com/th/id/OIP.VMJVUu5eW-3c8avD-4fTXgHaEK?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.VMJVUu5eW-3c8avD-4fTXgHaEK?pid=ImgDet&rs=1',
    title:'Canada'
  },{
    image:'https://wonderfulengineering.com/wp-content/uploads/2015/06/new-zealand-wallpaper-6.jpg',
    thumbImage:'https://wonderfulengineering.com/wp-content/uploads/2015/06/new-zealand-wallpaper-6.jpg',
    title:'new zealand'
  }
 ]

 imgageRouter( index:Number){
  this.router.navigate(['/country', index]);
  console.log(index);
 }


 imgCollection0=[
  {
    image:'https://th.bing.com/th/id/OIP.OsDencJGDUZZR7-QXbA89AHaE7?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.OsDencJGDUZZR7-QXbA89AHaE7?pid=ImgDet&rs=1',
    title:'China'
  } ,
  {
    image:'https://wallpapercave.com/wp/wp1842906.jpg',
    thumbImage:'https://wallpapercave.com/wp/wp1842906.jpg',
    title:'Malaysia'
  } ,{
    image:'https://th.bing.com/th/id/OIP.O1z4ip8CpF-BQ-6Lb7USjQHaEo?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.O1z4ip8CpF-BQ-6Lb7USjQHaEo?pid=ImgDet&rs=1',
    title:'Singapore'
  },
 ]
 imgageRoute( index:Number){
  this.router.navigate(['/small', index]);
  console.log(index);
 }


 imgCollection1=[
  {
    image:'https://th.bing.com/th/id/OIP.ZD_yH-EBWLGrjg8Uc7VotgHaE8?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.ZD_yH-EBWLGrjg8Uc7VotgHaE8?pid=ImgDet&rs=1',
    title:' Austria'
  },{
    image:'https://www.jacadatravel.com/wp-content/uploads/2017/12/iStock_000024664199_LargeWF.jpg',
    thumbImage:'https://www.jacadatravel.com/wp-content/uploads/2017/12/iStock_000024664199_LargeWF.jpg',
    title:'Belgium'

  },{
    image:'https://th.bing.com/th/id/OIP.Ru0rT-pa_YSQx2-XKYOBIgHaEK?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.Ru0rT-pa_YSQx2-XKYOBIgHaEK?pid=ImgDet&rs=1',
    title:'Czech Republic'
  }
  ,{
    image:'https://th.bing.com/th/id/OIP.VV7SPsWPq672eCB87_8J2AHaE8?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.VV7SPsWPq672eCB87_8J2AHaE8?pid=ImgDet&rs=1',
    title:'Croatia'
  },{
    image:'https://lp-cms-production.imgix.net/2019-06/GettyImages-126140612_super%20.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
    thumbImage:'https://lp-cms-production.imgix.net/2019-06/GettyImages-126140612_super%20.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
    title:'Denmark'
  },{
    image:'https://th.bing.com/th/id/OIP.enJYERe1QBFZ_WT1jSVnbwHaEK?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.enJYERe1QBFZ_WT1jSVnbwHaEK?pid=ImgDet&rs=1',
    title:'Estonia'
  },{
    image:'https://th.bing.com/th/id/OIP.d-cxvh9yHQJVwZxBMBeubwHaEa?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.d-cxvh9yHQJVwZxBMBeubwHaEa?pid=ImgDet&rs=1',
    title:'Finland'
  },{
    image:'https://th.bing.com/th/id/OIP.QGxtGHORQlSBxwxgzRwx6AHaFj?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.QGxtGHORQlSBxwxgzRwx6AHaFj?pid=ImgDet&rs=1',
    title:'France'
  },{
    image:'https://th.bing.com/th/id/OIP.qdiQd5QFUWrPKNmgIWHpnQHaEo?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.qdiQd5QFUWrPKNmgIWHpnQHaEo?pid=ImgDet&rs=1',
    title:'Germany'
  },{
    image:'https://th.bing.com/th/id/OIP.ZS_jlhNWtMPDDAcuPhB6HgHaEn?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.ZS_jlhNWtMPDDAcuPhB6HgHaEn?pid=ImgDet&rs=1',
    title:'Greece'

  },{
    image:'https://th.bing.com/th/id/OIP.AixJa5wVSO9RJavguH-dhgHaEK?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.AixJa5wVSO9RJavguH-dhgHaEK?pid=ImgDet&rs=1',
    title:'Hungary'
  }
  ,{
    image:'https://th.bing.com/th/id/OIP.0CJfZoAW0riHApedv0e_egHaE8?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.0CJfZoAW0riHApedv0e_egHaE8?pid=ImgDet&rs=1',
    title:'Iceland'
  },{
    image:'https://th.bing.com/th/id/OIP.nsPZJvenW2K7VGwoIOmpJgHaE7?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.nsPZJvenW2K7VGwoIOmpJgHaE7?pid=ImgDet&rs=1',
    title:'Italy'
  },{
    image:'https://media.wired.co.uk/photos/606db0ebe97d34ed515f07ec/master/w_1600%2Cc_limit/istock-615926196.jpg',
    thumbImage:'https://media.wired.co.uk/photos/606db0ebe97d34ed515f07ec/master/w_1600%2Cc_limit/istock-615926196.jpg',
    title:'Latvia'
  },{
    image:'https://th.bing.com/th/id/OIP.KZsnmdVm9hLXPTB9P4PJoAHaFj?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.KZsnmdVm9hLXPTB9P4PJoAHaFj?pid=ImgDet&rs=1',
    title:'Liechtenstein'
  },{
    image:'https://th.bing.com/th/id/OIP.kPWn1FoG7qy53ttBCOZe6QHaE8?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.kPWn1FoG7qy53ttBCOZe6QHaE8?pid=ImgDet&rs=1',
    title:'Lithuania'
  },{
    image:'https://th.bing.com/th/id/R.7ad0c7249c263b210b6b486a0e88b6d2?rik=qNaA%2fBLyWpTpMw&riu=http%3a%2f%2fstatic3.businessinsider.com%2fimage%2f560062ce9dd7cc1f008bbf6b-3463-2597%2f2274937510_cb61f324f9_o.jpg&ehk=B0Lj48fBVN4CUAGcGIall7xt49VaZ4%2fA8pBwMg%2fedZw%3d&risl=1&pid=ImgRaw&r=0',
    thumbImage:'https://th.bing.com/th/id/R.7ad0c7249c263b210b6b486a0e88b6d2?rik=qNaA%2fBLyWpTpMw&riu=http%3a%2f%2fstatic3.businessinsider.com%2fimage%2f560062ce9dd7cc1f008bbf6b-3463-2597%2f2274937510_cb61f324f9_o.jpg&ehk=B0Lj48fBVN4CUAGcGIall7xt49VaZ4%2fA8pBwMg%2fedZw%3d&risl=1&pid=ImgRaw&r=0',
    title:'Luxembourg'
  },{
    image:'https://th.bing.com/th/id/OIP.b_KqHNWNBaDzAlI0-fuEYQHaFj?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.b_KqHNWNBaDzAlI0-fuEYQHaFj?pid=ImgDet&rs=1',
    title:'Malta'
  },{
    image:'https://th.bing.com/th/id/OIP.cqD1bUS84BOwwT5UIaVepgHaFj?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.cqD1bUS84BOwwT5UIaVepgHaFj?pid=ImgDet&rs=1',
    title:'Netherlands'
  },{
    image:'https://th.bing.com/th/id/OIP.aGxUWKb7QJbp_LNB5ZT4VgHaHa?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.aGxUWKb7QJbp_LNB5ZT4VgHaHa?pid=ImgDet&rs=1',
    title:'Norway'

  },{
    image:'https://th.bing.com/th/id/OIP.2TtJ_ygLaN-dcFmlVC7z5gHaFL?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.2TtJ_ygLaN-dcFmlVC7z5gHaFL?pid=ImgDet&rs=1',
    title:'Poland'
  }
  ,{
    image:'https://th.bing.com/th/id/OIP.JKukQKM0aQilh90t8DiMhwHaHd?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.JKukQKM0aQilh90t8DiMhwHaHd?pid=ImgDet&rs=1',
    title:'Portugal'
  },{
    image:'https://www.planetware.com/wpimages/2020/02/slovakia-top-things-to-do-fairytale-castles-palaces.jpg',
    thumbImage:'https://www.planetware.com/wpimages/2020/02/slovakia-top-things-to-do-fairytale-castles-palaces.jpg',
    title:'Slovakia'
  },{
    image:'https://th.bing.com/th/id/OIP.BeKHkTGaNDVFhmZeN6pxxQHaE8?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.BeKHkTGaNDVFhmZeN6pxxQHaE8?pid=ImgDet&rs=1',
    title:'Slovenia'
  },{
    image:'https://th.bing.com/th/id/OIP.tOkSpz8t8dtq_XsM7W9aXQHaFj?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.tOkSpz8t8dtq_XsM7W9aXQHaFj?pid=ImgDet&rs=1',
    title:'Spain'
  },{
    image:'https://th.bing.com/th/id/OIP.-EFd61lmqa7bj_41yrlk_QHaFj?pid=ImgDet&rs=1',
    thumbImage:'https://th.bing.com/th/id/OIP.-EFd61lmqa7bj_41yrlk_QHaFj?pid=ImgDet&rs=1',
    title:'Sweden'
  },{
    image:'https://media.cntraveler.com/photos/586ff30da56b791d5465a34d/master/pass/Zermatt-Switzerland-Getty532660419.jpg',
    thumbImage:'https://media.cntraveler.com/photos/586ff30da56b791d5465a34d/master/pass/Zermatt-Switzerland-Getty532660419.jpg',
    title:'Switzerland'
  }
 ]
 imgageRouting1( indexes:Number){
  this.router.navigate(['/schengen', indexes]);
  console.log(indexes);
 }
title:string="";
objTitle:string="";
 onSearchTextChanged(stitle: string) {

  this.title = stitle.toLowerCase();
  if (stitle === '' || !stitle) {
    this.imgCollection=this.imgCollection;
    this.shared.setCountriesShared(this.Countries);
  } else {
    this.imgCollection = this.imgCollection.filter((img: any) => {
      this.objTitle = img.title.toLowerCase();
      if (this.objTitle?.startsWith(this.title)) {
        return this.objTitle;
      } else return null;
    });
    this.Countries = this.Countries.filter((country: any) => {
      this.objTitle = country.name.toLowerCase();
      if (this.objTitle?.startsWith(this.title)) {
        return this.objTitle;
      } else return null;
    });
    this.shared.setCountriesShared(this.Countries);
  }


}
/*this.n = menu.toLowerCase();
    if (menu === '' || !menu) {
      this.Data.getAllMenu(this.city, this.restaurant).subscribe((resp) => {
        this.menudata = resp;
      });
    } else {
      this.menudata = this.menudata.filter((menu: any) => {
        this.r = menu.itemName.toLowerCase();
        if (this.r?.startsWith(this.n)) {
          return this.r;
        } else return null;
      });
    }*/

}


