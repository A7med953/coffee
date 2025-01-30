import { Component } from '@angular/core';
import { CategoriesComponent } from '../../categories/categories.component';
import { ItemsComponent } from '../../items/items.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent,ItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedCategory: string = '';
  
  onCategorySelected(category: string) {
    this.selectedCategory = category;


}
}
