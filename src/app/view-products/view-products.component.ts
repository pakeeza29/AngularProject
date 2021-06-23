import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  public products: any;
  URL: string = `http://localhost:30001/product/`;

  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'image',
    'length',
    'color',
    'style',
    'update',
    'delete'
  ];

  // product = ELEMENT_DATA;

  constructor(private _http: HttpClient) {
    this.products = []
  }

loadData(){
  this._http.get(this.URL).subscribe((data) => {
    console.log(data);
    this.products = data;
  })
}

updateData(id: HTMLButtonElement){
console.log(id);
}

  ngOnInit(): void {
    this.loadData();
  }

  public deleteData(id: any){
    this._http.get(`${this.URL}/${id}`).subscribe((data) => {
      console.log(data);
    })
  }
}
