import { Component, OnInit, inject } from "@angular/core";
import { CatalogueDataService } from "../services/catalogue-data.service";
import { CommonModule, JsonPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-catalogue",
  standalone: true,
  imports: [JsonPipe, FormsModule,RouterLink],
  templateUrl: "./catalogue.component.html",
  styleUrl: "./catalogue.component.scss",
})
export class CatalogueComponent implements OnInit {
 

  catalogueData = inject(CatalogueDataService);

  catD: Array<any> = [];
  catD1: any;
  removeDuplicatesArrayByColor: Array<any> = [];
  removeDuplicatesArrayById1: Array<any> = [];
  removeDuplicatesArrayByColor1: Array<any> = [];
  colors: any;
  gender: any;
  type: any;
  price: any;
  removeDuplicatesArrayByType: any;
  selectedCheckbox: any;
  filterColors: any;
  filter: any;
  isChecked: any;
  filterList: any;
  productArray: any;
  arrays: any;

  ngOnInit(): void {
    this.getfilterdata();
    console.log("this.selectedCheckbox", this.selectedCheckbox);
    this.catD;
    console.log("catD", this.catD);
  }


  getfilterdata() {
    this.catalogueData.getCatalogueData().subscribe((response: any) => {
      this.catD = response;
      this.catD1 = response;

      this.productArray = response;
      this.arrays = response;
      this.filterList = response;
      // console.log(this.catD);

          this.colors = this.catD
              .map(category => category['color'])
              .map((category, i, final) => final.indexOf(category) == i && i)
              .filter((obj: any) => this.catD[obj])
              .map((category: any) => this.catD[category]["color"])
            console.log(this.colors);

            this.gender = this.catD
            .map(category => category['gender'])
            .map((category, i, final) => final.indexOf(category) == i && i)
            .filter((obj: any) => this.catD[obj])
            .map((category: any) => this.catD[category]["gender"])
          console.log(this.gender);

          this.type = this.catD
          .map(category => category['type'])
          .map((category, i, final) => final.indexOf(category) == i && i)
          .filter((obj: any) => this.catD[obj])
          .map((category: any) => this.catD[category]["type"])
        console.log(this.type);

        this.price = this.catD
        .map(category => category['price'])
        .map((category, i, final) => final.indexOf(category) == i && i)
        .filter((obj: any) => this.catD[obj])
        .map((category: any) => this.catD[category]["price"])
      console.log(this.price);

      this.removeDuplicatesArrayByType = this.removeDuplicates(this.catD, "price")
      console.log(this.removeDuplicatesArrayByType, 'removeDuplicatesArrayByType');

      this.colors =  this.removeDuplicates(this.catD, "color")
       //console.log('colors', this.colors);

       this.type =  this.removeDuplicates(this.catD, "type")
       //console.log('type', this.type);
       this.gender =  this.removeDuplicates(this.catD, "gender")
       //console.log('gender', this.gender);
       this.price =  this.removeDuplicates(this.catD, "price")
      console.log('price', this.price);
    });
  }
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

  removeDuplicates(myArray:any, Prop:any) {
   return myArray.map((category:any) => category[Prop])
  .map((category:any, i:any, final:any) => final.indexOf(category) == i && i)
  .filter((obj: any) => this.catD[obj])
  .map((category: any) => this.catD[category][Prop])

  }

  //  getSelectedCheckbox(event:any, SelectedCheckbox: any) {
  //   const value = event.target.value;
  //   this.isChecked = event.target.checked;
  //   console.log('isChecked', this.isChecked ) ;
  //   console.log('SelectedCheckbox', SelectedCheckbox ) ;
  // //    this.selectedCheckbox = SelectedCheckbox
  // //  console.log('selectedCheckbox', this.selectedCheckbox ) ;

  // let filterGender = this.catD.filter(opt => opt.gender === SelectedCheckbox )
  //    console.log('filterGender', filterGender ) ;

  //    let filtertype = this.catD.filter(opt => opt.type === SelectedCheckbox )
  //    console.log('filtertype', filtertype ) ;
  //    let filterPrice = this.catD.filter(opt => opt.price === SelectedCheckbox )
  //    console.log('filterPrice', filterPrice ) ;

  //   let filterColor= this.catD.filter(opt => opt.color === SelectedCheckbox )
  //   console.log('filterColor', filterColor ) ;

  // }

  // extra start

  tempArray: any = [];
  newArray: any = [];

  onChange(event: any) {
    const checkboxcheck = event.target.checked;
    const value = event.target.value;
    console.log("value", value);
    if (value == "") {
      console.log("nsjn");

      this.getfilterdata();
    }

    if (checkboxcheck) {
      //console.log(value, 'value');
      // debugger
      this.tempArray = this.arrays.filter((e: any) => {
        return e.id == value;
      });
      // debugger
      //console.log(this.tempArray, 'temparray');
      this.productArray = [];
      this.newArray.push(this.tempArray);
      //console.log(this.newArray, 'newArray');
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        //console.log(firstArray,'firstArray');
        for (let i = 0; i < firstArray.length; i++) {
          const obj = firstArray[i];
          // console.log(obj,'obj');
          this.productArray.push(obj);
          // console.log(this.catD,'catD');
        }
      }
    } else {
      console.log("last else");
      console.log(checkboxcheck);

      console.log(checkboxcheck);
      this.tempArray = this.productArray.filter((e: any) => {
        return e.id != value;
      });
      // console.log(this.tempArray, 'temparray');
      this.newArray = [];
      this.productArray = [];
      this.newArray.push(this.tempArray);
      console.log(this.newArray, "newArray");
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        console.log(firstArray, "firstArray this");
        for (let i = 0; i < firstArray.length; i++) {
          const obj = firstArray[i];
          // console.log(obj,'obj');
          this.productArray.push(obj);
        }
        if (firstArray == "") {
          console.log("firstArray empty");

          this.getfilterdata();
        }
      }
}

  }

 
}
