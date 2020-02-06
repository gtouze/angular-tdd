import { Injectable } from '@angular/core';
import { Service } from 'ngx-jsonapi';
import {Author} from '../entities/authors';

@Injectable()
export class AuthorsService extends Service<Author> {
    public resource = Author;
    public type = 'authors';
    public schema = {
        relationships: {
            books: {
                hasMany: true
            },
            photos: {
                hasMany: true
            }
        }
    };
}
