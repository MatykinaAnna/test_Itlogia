import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="container">
      <div class="logo">
        <button (click)="goToHome()"></button>
        <div>Pizza cheff</div>
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
        padding-top: 30px;
      }
      .container > .menu {
        display: flex;
        width: 490px;
        justify-content: space-between;
        padding-right: 300px;
      }
      .container > .menu > a {
        font-family: Arial;
        font-size: 16px;
        line-height: 1.2;
        font-weight: 400;
        letter-spacing: 0.02em;
        color: #a46b00;
      }
      .logo {
        display: flex;
        align-items: center;
      }
      .logo > button {
        background: url('../../logo.png');
        width: 68px;
        height: 69px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: 10px;
      }
      .logo > div {
        font-family: Arial;
        font-size: 24px;
        line-height: 1.2;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #ffc468;
        width: 82px;
      }

      @media (max-width: 1200px) {
        .container {
        }
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
