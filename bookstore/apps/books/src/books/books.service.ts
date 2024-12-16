import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {

  private books: BookDto[] = [
    {
      id: 1,
      title: 'New Book',
      author: 'Author 1',
      rating: 10
    },
    {
      id: 2,
      title: 'New Book 2',
      author: 'Author 2',
      rating: 9
    },
    {
      id: 3,
      title: 'New Book 3',
      author: 'Author 3',
      rating: 8
    },
  ]

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    }

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
