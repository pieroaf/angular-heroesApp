import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img {
    width: 70%;
    border-radius: 10px;
  }
  `
  ]
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    if ( !this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroeById(id) )
    )
    .subscribe((heroe) => this.heroe=heroe)
  }

  guardar(){
    if( this.heroe.superhero.trim().length === 0 ) {
      return;
    }

    if( this.heroe.id ) {
      this.heroesService.actualizarHeroe(this.heroe).subscribe(heroe=>console.log(heroe))
    } else {
      this.heroesService.agregarHeroe(this.heroe).subscribe( heroe => this.router.navigate(['/heroes/edit', heroe.id]))
    }
  }

}
