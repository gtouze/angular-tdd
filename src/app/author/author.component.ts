import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../service/authors.service';
import Pretender from 'pretender';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [AuthorsService]
})
export class AuthorComponent implements OnInit {
  public authors;

  constructor( private authorsService: AuthorsService ) {
    this.getDataV1(authorsService);
    //this.getDataV2();
  }

  ngOnInit() {
  }

  getDataV1(authorsService) {
    authorsService.all(
      // { include: ['books', 'photos'] }
    )

  .subscribe(
      authors => {
          this.authors = authors.data;
          console.info('success authors controller', authors);
      },
      error => console.error('Could not load authors.')
    );
  }

  getDataV2() {
      const AUTHORS = {};

      const server = new Pretender(function() {
        this.get('//jsonapiplayground.reyesoft.com/v2/authors', request => {
          const all =  JSON.stringify(Object.keys(AUTHORS).map(k => AUTHORS[k]));
          console.info('success authors controller', AUTHORS);
          return [200, {'Content-Type': 'application/json'}, all];
        }, 3000);
      });
  }
}
