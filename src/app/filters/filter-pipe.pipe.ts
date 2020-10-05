import { Pipe, PipeTransform } from '@angular/core';
import { FilterType } from '../types/filter.type';
import { Todo } from '../models/todo.models';
import { FilterEnum } from '../enums/filter.enum';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], currentFilter: FilterType): Todo[] {
  
    switch(currentFilter) {
      case FilterEnum.COMPLETED:
        return todos.filter(todo => todo.completado);
      case FilterEnum.PENDING:
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }

  }

}
