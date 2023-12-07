import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppHome {
  form: FormGroup
  popUp: boolean
  selectedPizza: number[] = []

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', [
        Validators.required,
        // Validators.pattern('[0-9]{11}'),
      ]),
    })

    this.popUp = false

    // this.form.get('name')?.valueChanges.subscribe((value: string) => {
    //   let name = value.replace('.', '')
    //   this.form.patchValue({ name: name })
    // })
  }

  submit() {
    console.log(this.form)
    console.log(this.selectedPizza)
  }

  _keyUp(event: any) {
    if (event.key === '.') {
      event.preventDefault()
      console.log(event.key)

      let name: string = this.form.get('name')?.value.slice(0, -1)
      this.form.patchValue({ name: name })
    }
  }

  goToCart(event: { id: number }) {
    this.selectedPizza.push(event.id)
  }

  public pizza: {
    header: string
    compound: string
    img: string
    id: number
  }[] = [
    {
      header: 'Мясная Делюкс',
      compound: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы',
      img: '../../assets/icon/pizza/1.png',
      id: 0,
    },

    {
      header: 'Морская Премиум',
      compound: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      img: '../../assets/icon/pizza/1.png',
      id: 1,
    },

    {
      header: 'Бекон и Сосиски',
      compound: 'Бекон, сыр, сосиски, ананас, томатная паста',
      img: '../../assets/icon/pizza/1.png',
      id: 2,
    },

    {
      header: 'Куриная Делюкс',
      compound: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      img: '../../assets/icon/pizza/1.png',
      id: 3,
    },

    {
      header: 'Барбекю Премиум',
      compound: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      img: '../../assets/icon/pizza/1.png',
      id: 4,
    },

    {
      header: 'Пепперони Дабл',
      compound: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      img: '../../assets/icon/pizza/1.png',
      id: 5,
    },

    {
      header: 'Барбекю Премиум',
      compound: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      img: '../../assets/icon/pizza/1.png',
      id: 6,
    },

    {
      header: 'Пепперони Дабл',
      compound: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      img: '../../assets/icon/pizza/1.png',
      id: 7,
    },
  ]
}
