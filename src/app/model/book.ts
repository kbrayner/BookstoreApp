import { Category } from './category';
import { Publisher } from './publisher';
import { Writer } from './writer';

export class Book {
  id?: number;
  title: string = '';
  subtitle?: string;
  resume?: string;
  pagesNumber: number|null = null;
  releaseDate: Date|null = null;
  edition: number|null = null;
  writer: Writer[] = [];
  publisher: Publisher|null = null;
  category: Category|null = null;

}
