import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
      <div class="container">
          <div class='hr'></div>
          <div class='text'>© 2022 created with 💚 by Matykina Anna</div>
      </div>
  `,
  styles: [`
  button{
      background-color: none;
      border: none;
  }
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text{
      text-align: center;
      font-family: 'Fira Sans', sans-serif;
      color: #278774a8;
      margin: 10px 0;
  }
  .hr{
      width: 70%;
      height: 1px;
      background-color: #278774a8;
  }
  @media (max-width: 400px) {
      .text{
          font-size: 8px
      }
  }
  `]
})
export class Footer {

}
