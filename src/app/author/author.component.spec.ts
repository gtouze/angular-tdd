import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import { AuthorComponent } from './author.component';
import { By } from '@angular/platform-browser';
import { AuthorsService } from '../service/authors.service';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorComponent ],
      imports: [
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
      })
      ],
      providers: [AuthorsService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show all the authors', async () =>  {
    new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve
      },2000)
    })
    .then(() => {
      fixture.detectChanges();
      const authorElements = fixture.debugElement.queryAll(By.css('.author'));
      expect(authorElements.length).toBeGreaterThan(3);
    }
  )});

 /* it('show all the authors', () =>  {
      fixture.detectChanges();
      const authorElements = fixture.debugElement.queryAll(By.css('.author'));
      expect(authorElements.length).toBeGreaterThan(3);
});*/

});
