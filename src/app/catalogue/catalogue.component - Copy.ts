// import { Component, OnInit, inject } from '@angular/core';
// import { CatalogueDataService } from '../services/catalogue-data.service';

// @Component({
//   selector: 'app-catalogue',
//   standalone: true,
//   imports: [],
//   templateUrl: './catalogue.component.html',
//   styleUrl: './catalogue.component.scss'
// })
// export class CatalogueComponent implements OnInit {

//   catalogueData = inject(CatalogueDataService)
//   // catD: any = {};
//   // removeDuplicatesArrayByColor: Array<any> = [];
//   // removeDuplicatesArrayById1: Array<any> = [];

//   catD: Array<any> = [];
//   removeDuplicatesArrayByColor: Array<any> = [];
//   removeDuplicatesArrayById1: Array<any> = [];
//   removeDuplicatesArrayByColor1: Array<any> = [];
//   ngOnInit(): void {
//     this.getfilterdata()
    
//   }
//   getfilterdata() {
//     this.catalogueData.getCatalogueData().subscribe((response: any) => {

//       this.catD = response
//       // console.log(this.catD);






//  var result = this.catD.reduce( (acc, obj) => {
//         acc[obj.gender] = acc[obj.gender] || [];
//         acc[obj.gender].push(obj);
//         return acc;
//     }, {});
    
//     console.log('result', result);

// // let duplicateNames = employees
// //      .map(emp => emp['firstName'])
// //      .map((emp, i, final) => final.indexOf(emp) !== i && i)
// //      .filter(obj=> employees[obj])
// //      .map(emp => employees[emp]["firstName"])
// // console.log(duplicateNames); 

// let employeeIds = [];
// employeeIds.push(...this.catD.map(cat => cat.gender));
// //console.log(employeeIds); 

// let duplicateNames = this.catD
//      .map(category => category['color'])
//      .map((category, i, final) => final.indexOf(category) == i && i)
//      .filter((obj:any)=> this.catD[obj])
//      .map((category:any) => this.catD[category]["color"])
// console.log(duplicateNames); 





















//     this.removeDuplicatesArrayByColor = this.removeDuplicates(this.catD, 'color');
//     // console.log(this.removeDuplicatesArrayByColor);


//     // console.log(this.removeDuplicatesArrayByColor);

//   // const newcat =  this.catD.forEach((item) => {
//   //   console.log(item);
//   //   return
//   //  })
//   //  console.log(newcat);
//    // get email

//     })
//   }



// removeDuplicates(myArray:any, Prop:any) {
//   // return myArray.filter((obj:any, pos:any, arr:any) => {
//   //  return arr.map((mapObj:any) => mapObj[Prop]).indexOf(obj[Prop]) === pos;


//   return myArray.filter((obj:any, pos:any, arr:any) => {
//     return arr.map((mapObj:any) => mapObj[Prop]).indexOf(obj[Prop]) === pos;
//   });
// }





// }
