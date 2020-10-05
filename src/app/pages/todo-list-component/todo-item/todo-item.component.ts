import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from '../../../models/todo.models';
import { AppState } from 'src/app/app.state';
import * as actions from '../../todo.actions';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputEdit') inputEdit: ElementRef;

  checkBoxIsCompleted: FormControl;
  inputEditText: FormControl;

  editMode = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkBoxIsCompleted = new FormControl(this.todo.completado);
    this.inputEditText = new FormControl(this.todo.texto, Validators.required);

    this.checkBoxIsCompleted.valueChanges.subscribe( _ => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  modoEdicion() {
    this.editMode = true;
    setTimeout(() => {
      this.inputEdit.nativeElement.select();
    }, 1);
  }

  updateTodo() {
    this.editMode = false;

    if (this.inputEditText.invalid) { return; }
    if (this.inputEditText.value === this.todo.texto) { return; }

    this.store.dispatch(actions.editar(
      {id: this.todo.id, texto: this.inputEditText.value}
      )
    );
  }

  delete() {
    this.store.dispatch(actions.borrar(
      {id: this.todo.id}
      )
    );
  }
}
