import { Resource } from 'ngx-jsonapi';

export class Author extends Resource {
    public attributes: {
        name: string;
        date_of_birth: string;
        date_of_death: string;
        created_at: string;
        updated_at: string;
    };
}
