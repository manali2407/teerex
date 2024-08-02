import { Component, OnInit, inject } from '@angular/core';
import { CatalogueDataService } from '../services/catalogue-data.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterPipe,FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  catalogueData = inject(CatalogueDataService);
  productArray: Array<any> = [];
  arrays: Array<any> = [];
  filterList: Array<any> = [];
  colors: any;
  gender: any;
  type: any;
  price: any;
  tempArray: any = [];
  newArray: any = [];
  productListShow: any;
  filteredProducts: any
  filters: any;


  ngOnInit(): void {
    this.getfilterdata()
  }

  getfilterdata() {
    this.catalogueData.getCatalogueData().subscribe((response: any) => {
      this.productArray = response;
      this.arrays = response;
      this.filterList = response;



      this.colors = this.removeDuplicates(this.filterList, "color")
      // console.log('colors', this.colors);
      this.type = this.removeDuplicates(this.filterList, "type")
       console.log('type', this.type);
      this.gender = this.removeDuplicates(this.filterList, "gender")
      console.log('gender', this.gender);
      this.price = this.removeDuplicates(this.filterList, "price")
     console.log('price', this.price);





// const newArray22 = this.productArray.map((item,index)=> { return {
//   "color": item.color,
//   "gender": item.gender,
//   "type": item.type,
//   "price": item.price
//  }})
// console.log('newArray22',  newArray22);


    })
   
  }

  removeDuplicates(myArray: any, Prop: any) {
  //  debugger;
    return myArray.map((category: any) => {category[Prop]})
      .map((category: any, i: any, final: any) =>  final.indexOf(category) == i && i )
      .filter((obj: any) => this.filterList[obj])
      .map((category: any) => this.filterList[category][Prop]);
      

  }


  selectedFilters:any;
  onChange(event: any) {
    const checkboxcheck = event.target.checked;
    const value = event.target.value;
// exta
if(!this.selectedFilters.includes(event)){
  this.selectedFilters = [...this.selectedFilters, event];
  console.log(this.selectedFilters);
}else {
  this.selectedFilters = this.selectedFilters.filter((item:any) => item !== event);
  console.log(this.selectedFilters);
}
// exta
    console.log("value", value);
    if (value == "") {
      console.log("nsjn");

      this.getfilterdata();
    }

    if (checkboxcheck) {
      console.log(value, 'value');
      // debugger
      this.tempArray = this.arrays.filter((e: any) => {
        return (e.color == value || e.gender == value || e.type == value || e.price == value)
        // || (e.color == value && e.gender == value && e.type == value && e.price == value);
      });
      // debugger
      console.log(this.tempArray, 'temparray');
      this.productArray = [];
      this.newArray.push(this.tempArray);
      console.log(this.newArray, 'newArray');
      for (let i = 0; i < this.newArray.length; i++) {
        var firstArray = this.newArray[i];
        console.log(firstArray,'firstArray');
        for (let i = 0; i < firstArray.length; i++) {
          const obj = firstArray[i];
          console.log(obj,'obj');
          this.productArray.push(obj);
          console.log(this.productArray,'productArray');
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

  item2 = '';
filterType = ''
productType = ''
type2 = new FormControl('');
category = new FormControl('');
  onChange1(event: any) {
    this.productType
    console.log('productType', this.productType);
    console.log('onChange1');
    const checkboxcheck = event.target.checked;
    const value1 = event.target.value; 
    console.log('checkboxcheck',checkboxcheck);
    console.log('value',value1);
    debugger
    this.filterType = value1;
    console.log('this.filterType',this.filterType);
    
  }




  public filterProducts(): void {
    alert('filterProducts')
    const filteredProductArray = new Array<any>();
    const activeColors = this.colors.filter((c:any) => c.selected).map((c:any) => c.color);
    this.productListShow.forEach((prod:any) => {
        const filteredSubProducts = prod.product.filter((p:any) => activeColors.includes(p.productColor));
         if(filteredSubProducts.length > 0){
             const clonedProduct = Object.assign({}, prod);
             clonedProduct.product = filteredSubProducts;
             filteredProductArray.push(clonedProduct);
         }
    });
    this.filteredProducts = filteredProductArray;
}









selectedFilters2: any = []
setCheckbox(event: any, index: number) {
  console.log('setCheckbox');
  
  console.log(event);
  
  if(!this.selectedFilters2.includes(event)){
     this.selectedFilters2 = [...this.selectedFilters2, event];
    console.log('selectedFilters2', this.selectedFilters2);
// extra
this.filter_books(this.selectedFilters2)
  // this.selectedFilters = this.productArray.filter((val:any) => val.color.map(this.selectedFilters2));
//  console.log('filters manali', this.filters);


  // const filteredBooks:any = [];
  // this.productArray.forEach(filterValue => {
  //     filteredBooks.push(this.productArray.filter(val => val.color.includes(filterValue)));
  // });
  // console.log(filteredBooks);
    // extra


  }else {
    this.selectedFilters2 = this.selectedFilters2.filter((item:any) => item !== event);
    console.log('selectedFilters2', this.selectedFilters2);
    this.filter_books(this.selectedFilters2)
  }
}


 filter_books(filters:any) {
  const filteredBooks:any = [];
   filters.forEach((filterValue:any) => {
      filteredBooks.push(...this.productArray.filter((val:any) => val.color.includes(filterValue) || val.gender.includes(filterValue)));
  });
  console.log('filteredBooks', filteredBooks);
};
}

















  

