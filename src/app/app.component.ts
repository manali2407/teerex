import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogueDataService } from './services/catalogue-data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'T_Shirt_Shop';
  // subMenuItems: any;
  // catalogueData = inject(CatalogueDataService)
  // catData: any = {};
  // colors: any = {};
  // genders: any;
  // catData1: any = [];
  // obj: any = [];
  // Data1:  any = {};
  // colorsMap:any = {};
 
  constructor() { }
  ngOnInit(): void {
    //this.getfilterdata();
   // this.filter();
   // this.remove();
    
  }
//   getfilterdata() {
//     this.catalogueData.getCatalogueData().subscribe((response: any) => {
//       this.catData = response
//       // console.log(this.catData);
//       // console.log(JSON.stringify(this.catData));

// // //       working
//       this.catData.forEach((item: any, index: any) => {
//         // var obj;
//         this.obj = {
//           color: item.color
//         }
//         console.log('catData1', this.obj);
//        this.catData1.push(this.obj);
//         this.colors = this.catData1.reduce((a: any, b: any) => {
//           if (!a.find((m: any) => m.color === b.color)) {
//             a.push(b)
//            }
//           return a;
//         }, [])
//         console.log('colors', this.colors)
//       });
     
// // // working

// // ///////////////////////////

//     })
//   }

//   filter(){
//     this.catalogueData.getCatalogueData().subscribe((response: any) => {
//       this.catData = response;
//        //console.log(this.catData);

//           // this.Data1 = this.catData;
//     // this.colorsMap = { ...new Set(this.Data1.map((item: any) => item.color)) };
//     // console.log('colorsMap', this.colorsMap);

  










//       this.colors = this.catData.reduce((a: any, b: any) => {
//         if (!a.find((m: any) => m.color === b.color)) {
//           a.push(b);
//          }
//         return a;
//       }, [])
//       console.log('colors', this.colors.length)


//       // gender
//       this.genders = this.catData.reduce((a: any, b: any) => {
//         if (!a.find((m: any) => m.gender === b.gender)) {
//           a.push(b);
//          }
//         return a;
//       }, [])
//       console.log('gender', this.genders.length)
  
// })
//   }
//   removeDuplicatesArrayByColor: Array<any> = [];
//   removeDuplicatesArrayByGender: Array<any>= [];
//   removeDuplicatesArrayByType: Array<any>= [];

// remove(){
//   this.catalogueData.getCatalogueData().subscribe((response: any) => {
//     this.catData = response;
//     debugger;
//     this.removeDuplicatesArrayByColor = this.removeDuplicates(this.catData, "color")
//     debugger;
//     this.removeDuplicatesArrayByGender = this.removeDuplicates(this.catData, "gender");
//     debugger;
//     this.removeDuplicatesArrayByType = this.removeDuplicates(this.catData, "type")

// //    console.log( 'removeDuplicatesArrayById', this.removeDuplicatesArrayByColor);
//     console.log('removeDuplicatesArrayByName', this.removeDuplicatesArrayByGender);
//     // console.log('removeDuplicatesArrayByType', this.removeDuplicatesArrayByType);
    
// })
// }


//   // parameters 1.array 2. based on key to remove duplications
//   removeDuplicates(myArray:any, Prop:any) {
//    // debugger;
//     return myArray.filter((obj:any, pos:any, arr:any) => {
//      // debugger;
//       return arr.map((mapObj:any) => {

//          (mapObj[Prop]).indexOf(obj[Prop]) === pos;
        
//         }
//         ) }
// );
//   }








}