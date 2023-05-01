import { Component } from '@angular/core';
import { of, from, mergeMap, concatMap, switchMap, exhaustMap, flatMap, filter, toArray, map, reduce } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Operators';

  dataArray = [
    {id:1,name:'Shingadiya Ravi',city:'Rajkot'},
    {id:2,name:'John cena',city:'Ahmedabad'},
    {id:3,name:'Nikki Bella',city:'Rajkot'},
    {id:4,name:'Arjun Modha',city:'Rajkot'},
    {id:5,name:'Kiahan Godhani',city:'Surat'},
    {id:6,name:'Grishm Sir',city:'vakaner'},
    {id:7,name:'Abc',city:'Rajkot'},
    {id:8,name:'Virat',city:'nadiyad'},
  ];

  filterData:any=[];



  constructor(private http: HttpClient) { }


  ngOnInit() {

    /* This is only one time one because of it have a one main object.*/
    // let firstData = this.http.get('https://dummyjson.com/users');

    /* This is used for the first outer observable. (like outer loop) */
    let firstData = of(1, 'hello', [10, 20, 30,[30.10,30.20,30.30], 40, 50, 60], { name: 'john' });


    /* This is used for the inner observable and it will called number of time outer observable length of item. (like inner loop) */
    let secondData = this.http.get('https://dummyjson.com/todos');

    //#region :::::::: mergeMap() Operator ::::::::

    /* mergeMap() :  */

    // firstData
    //   .pipe(
    //     mergeMap(val => {
    //       console.log("Outer MergeMap :", val);
    //       return secondData
    //     })
    //   ).subscribe(res => {
    //     console.log("Inner MergeMap",res)
    //   });

    //#endregion


    //#region :::::::: concatMap() Operator :::::

    // firstData.pipe(
    //   concatMap(val=>{
    //     console.log("Outer ConcatMap :",val)
    //     return secondData
    //   })
    // )
    // .subscribe(res=>{
    //   console.log("Inner ConcatMap : ",res);
    // })

    //#endregion


    //#region :::::::: switchMap() Operator :::::

    // firstData.pipe(
    //   switchMap(val=>{
    //     console.log("Outer SwitchMap :",val)
    //     return secondData
    //   })
    // )
    // .subscribe(res=>{
    //   console.log("Inner SwitchMap : ",res);
    // })

    //#endregion


    //#region :::::::: exhaustMap() Operator :::::

    // firstData.pipe(
    //   exhaustMap(val=>{
    //     console.log("Outer ExhaustMap :",val)
    //     return secondData
    //   })
    // )
    // .subscribe(res=>{
    //   console.log("Inner ExhaustMap : ",res);
    // })

    //#endregion


    //#region :::::::: flatMap() Operator :::::

    // firstData.pipe(
    //   flatMap(val=>{
    //     console.log("Outer FlatMap :",val)
    //     return secondData
    //   })
    // )
    // .subscribe(res=>{
    //   console.log("Inner FlatMap : ",res);
    // })

    //#endregion


    //#region ::::::: filter() Operator ::::::
    let userData = from(this.dataArray);

    userData.pipe(
      filter(user=>user.name.length<5),
      toArray()
    ).subscribe(res=>{
      console.log("Filter() Operator :",res),
      this.filterData = res;
    });

    //#endregion


    //#region :::: Map() Operator :::::::::
    userData.pipe(
      map((val)=>val.name + ' new'),
    ).subscribe(res=>{
      console.log("Map Operator Called : ",res)
    })
    //#endregion


    //#region :::: Reduce() Operator :::::
    // let reduceData = of(10,15,50);
    // reduceData.pipe(
    //   reduce((acc,val)=>{
    //     console.log("Reduce After Addition Data : ",acc);
    //     console.log("Reduce From Array Next Data Data : ",val);
    //     return acc+val;
    //   })
    // // },5) /*This is default value and it will return first and we can set any default value */
    // ).subscribe(res=>console.log('Reduce Called :',res));
    //#endregion
  }


}
