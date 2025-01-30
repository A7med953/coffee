import { CommonModule } from '@angular/common';
import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: string[] = ['Hot Coffee', 'Ice Coffee', 'Tea', 'Fresh Drink'];

 
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);  
  }
}