import { Component, inject, OnInit } from '@angular/core';
import { CatalogueDataService } from '../services/catalogue-data.service';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FilterPipe,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  catalogueData = inject(CatalogueDataService);

  productArray: Array<any> = [];
  colorArray: any;
  typeArray: any;
  genderArray: any;
  priceArray: any;
  colorSerach:any =[];
  ngOnInit(): void {
    this.getfilterdata()
  }

  getfilterdata() {
    this.catalogueData.getCatalogueData().subscribe((response: any) => {
      this.productArray = response;
      //console.log(this.productArray);

      // this.arrays = response;
      // this.filterList = response;



      this.colorArray = this.productArray.map((e: any) => {
        return { color: e.color }
      }).filter((element: any, index: any, array: any) => {
        return array.findIndex((a: any) => a.color == element.color) === index
      })

     // console.log(this.colorArray);

     this.genderArray= this.productArray.map((e: any) => {
        return { gender: e.gender }
      }).filter((element: any, index: any, array: any) => {
        return array.findIndex((a: any) => a.gender == element.gender) === index
      })

     // console.log(this.genderArray);

      this.priceArray = this.productArray.map((e: any) => {
        return { price: e.price }
      }).filter((element: any, index: any, array: any) => {
        return array.findIndex((a: any) => a.price == element.price) === index
      })

     // console.log(this.priceArray);

      this.typeArray = this.productArray.map((e: any) => {
        return { type: e.type }
      }).filter((element: any, index: any, array: any) => {
        return array.findIndex((a: any) => a.type == element.type) === index
      })

    //  console.log(this.typeArray);





    })
  }

  selectedFilters2: any = []
  setCheckbox(event: any, index: number) {
    console.log('setCheckbox');
    
   // console.log(event);
    
    if(!this.selectedFilters2.includes(event)){
       this.selectedFilters2 = [...this.selectedFilters2, event];
      console.log('selectedFilters2', this.selectedFilters2);
 
  
  
    }else {
      this.selectedFilters2 = this.selectedFilters2.filter((item:any) => item !== event);
      console.log('selectedFilters2', this.selectedFilters2);
    
    }
  }
}
