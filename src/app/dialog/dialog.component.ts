import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  freshnessList = ['Novo', 'Usado', 'Remanufaturado'];
  productForm !: FormGroup  ;

  constructor ( private formBuilder: FormBuilder  ) { }

  ngOnInit(): void {
       this.productForm = this.formBuilder.group({
       productName : [' ', Validators.required],
       category : [' ', Validators.required],
       freshness : [' ', Validators.required],
       price : [' ', Validators.required],
       comment : [' ', Validators.required],
       date : [' ', Validators.required]
    }) 
  }

  addProduct(){
    console.log(this.productForm.value)
  }
}
