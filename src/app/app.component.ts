import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  url = 'https://api.binance.com/api/v3/ticker/price?symbol={0}USDT';
  lsf = [
    { id: 1, name: "Long" },
    { id: 2, name: "Short" },
  ];
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      coin: new FormControl(''),
      price: new FormControl(''),
      ls: new FormControl(1),
      x: new FormControl(18),
      en: new FormControl(''),
      vol: new FormControl(''),
      sl: new FormControl(''),
      slp: new FormControl(''),
      slu: new FormControl(''),
      tp: new FormControl(''),
      tpp: new FormControl(''),
      tpu: new FormControl(''),
      min: new FormControl(''),
      max: new FormControl(''),
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(e => {
      console.log(e);
    })
  }

}