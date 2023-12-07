import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="container">
      <div class="logo">
        <button (click)="goToHome()"></button>
      </div>
      <div class="menu">
        <a href="!#">Пиццы</a>
        <a href="!#">Напитки</a>
        <a href="!#">Доставка и оплата</a>
        <a href="!#">Контакты</a>
      </div>
    </div>
  `,
  styles: [
    `
      button {
        background-color: none;
        border: none;
      }
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .container > menu {
      }
      .logo > button {
        background: url('../../logo.png');
        width: 187px;
        height: 90px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    `,
  ],
})
export class Header {
  goToHome() {
    if (location.href != '') {
      location.href = '';
    }
  }
}
