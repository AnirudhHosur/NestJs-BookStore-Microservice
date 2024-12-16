import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern('books.create')
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern('books.findAll')
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern('books.findOne')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @MessagePattern('books.update')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @MessagePattern('books.remove')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
