import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-carousel-basic',
  template: `
    <nz-carousel [nzEffect]="effect">
      <div nz-carousel-content *ngFor="let index of array">
        <h3>{{ index }}</h3>
      </div>
    </nz-carousel>
  `,
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
      }
    `
  ]
})
export class NzDemoCarouselBasicComponent implements OnInit{
  array = [];
  effect = 'scrollx';

  ngOnInit() {
    for(let i = 0;i<100;i++) {
      this.array.push(i)
    }
  }
}