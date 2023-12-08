import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService],
})
export class AppHome {
  form: FormGroup;
  popUp: boolean;
  selectedPizza: number[] = [];

  constructor(private httpService: HttpService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{11}'),
      ]),
    });

    this.popUp = false;

    // this.form.get('name')?.valueChanges.subscribe((value: string) => {
    //   let name = value.replace('.', '')
    //   this.form.patchValue({ name: name })
    // })
  }

  submit() {
    console.log(this.form.value);
    console.log(this.selectedPizza);
    let data = {
      name: this.form.value.name,
      address: this.form.value.address,
      phone: this.form.value.phone,
      pizzaId: this.selectedPizza,
    };
    this.httpService.postData(data).subscribe({
      // //next:(data: any) => {this.receivedUser=data; this.done=true;},
      // error: (error) => console.log(error),
    });
  }

  showDialog() {
    let modal_t = document.getElementById('modal_1');
    modal_t?.classList.remove('hhidden');
    modal_t?.classList.add('sshow');
  }
  closeDialog() {
    let modal_t = document.getElementById('modal_1');
    modal_t?.classList.remove('sshow');
    modal_t?.classList.add('hhidden');
  }

  _keyUp(event: any) {
    if (event.key === '.') {
      event.preventDefault();
      console.log(event.key);

      let name: string = this.form.get('name')?.value.slice(0, -1);
      this.form.patchValue({ name: name });
    }
  }

  goToCart(event: { id: number }) {
    this.selectedPizza.push(event.id);
  }

  public pizza: {
    header: string;
    compound: string;
    img: string;
    id: number;
  }[] = [
    {
      header: 'Мясная Делюкс',
      compound:
        'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
      img: '../../assets/icon/pizza/1.png',
      id: 0,
    },

    {
      header: 'Морская Премиум',
      compound: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      img: '../../assets/icon/pizza/2.png',
      id: 1,
    },

    {
      header: 'Бекон и Сосиски',
      compound: 'Бекон, сыр, сосиски, ананас, томатная паста',
      img: '../../assets/icon/pizza/3.png',
      id: 2,
    },

    {
      header: 'Куриная Делюкс',
      compound: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      img: '../../assets/icon/pizza/4.png',
      id: 3,
    },

    {
      header: 'Барбекю Премиум',
      compound:
        'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      img: '../../assets/icon/pizza/5.png',
      id: 4,
    },

    {
      header: 'Пепперони Дабл',
      compound: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      img: '../../assets/icon/pizza/6.png',
      id: 5,
    },

    {
      header: 'Куриное трио',
      compound:
        'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      img: '../../assets/icon/pizza/7.png',
      id: 6,
    },

    {
      header: 'Сырная',
      compound: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      img: '../../assets/icon/pizza/8.png',
      id: 7,
    },
  ];
}
