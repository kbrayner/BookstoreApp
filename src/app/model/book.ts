import { Category } from './category';
import { Publisher } from './publisher';
import { Writer } from './writer';

export class Book {
  Id?: number;
  Title: string = '';
  Subtitle?: string;
  Resume?: string;
  PagesNumber: number|null = null;
  ReleaseDate: Date|null = null;
  Edition: number|null = null;
  Writer: Writer[] = [];
  Publisher: Publisher|null = null;
  Category: Category|null = null;

}
