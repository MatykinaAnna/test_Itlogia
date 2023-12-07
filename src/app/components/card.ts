import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'card',
  template: `
    <div class="container">
      <img (click)="showLightbox(0)" src="{{ img }}" alt="" />

      <ng-image-fullscreen-view
        [images]="imageObject"
        [imageIndex]="selectedImageIndex"
        [show]="showFlag"
        (close)="closeEventHandler()"
      ></ng-image-fullscreen-view>

      <div class="header">{{ header }}</div>
      <div class="compound">{{ compound }}</div>
      <button (click)="goToCart.emit({id})">В корзину</button>
    </div>
  `,
  styles: [
    `
      .container {
        width: 240px;
        height: 355px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .container > img {
        margin-bottom: 10px;
      }
      .header {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .compound {
        text-align: center;
      }
      button {
        background-color: #fdb115;
        font-weight: bold;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 240px;
        height: 48px;
      }
      img {
        cursor: pointer;
      }
    `,
  ],
})
export class Card {
  showFlag: boolean = false
  currentIndex: number = -1
  selectedImageIndex: number = -1

  @Input() header: string = ''
  @Input() compound: string = ''
  @Input() img: string = ''
  @Input() id: number = -1

  @Output() goToCart = new EventEmitter()

  imageObject: Array<object> = [
    {
      image: '../../assets/icon/pizza/1.png',
    },
  ]

  showLightbox(index: number) {
    this.selectedImageIndex = index
    this.showFlag = true
  }
  closeEventHandler() {
    this.showFlag = false
    this.currentIndex = -1
  }
}
