import { Component,Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Item } from '../item';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  @Input() category: string = '';
  items: Item[] = [
    { name: 'Hot Coffee', description: 'Refreshing hot coffee', price: 2.5, category: 'Hot Coffee', imageUrl: '/assets/images.jpg' },
    { name: 'Ice Coffee', description: 'Chilled coffee', price: 3.0, category: 'Ice Coffee', imageUrl: '/assets/images.jpg' },
    { name: 'Tea', description: 'Warm tea', price: 1.8, category: 'Tea', imageUrl: '/assets/images.jpg' },
    { name: 'Fresh Drink', description: 'Freshly squeezed drink', price: 2.0, category: 'Fresh Drink', imageUrl: '/assets/images.jpg' },
    { name: 'Hot Coffee', description: 'Refreshing hot coffee', price: 2.5, category: 'Hot Coffee', imageUrl: '/assets/images.jpg' },
    { name: 'Ice Coffee', description: 'Chilled coffee', price: 3.0, category: 'Ice Coffee', imageUrl: '/assets/images.jpg' },
    { name: 'Tea', description: 'Warm tea', price: 1.8, category: 'Tea', imageUrl: '/assets/images.jpg' },
    { name: 'Fresh Drink', description: 'Freshly squeezed drink', price: 2.0, category: 'Fresh Drink', imageUrl: '/assets/images.jpg' },
    { name: 'Hot Coffee', description: 'Refreshing hot coffee', price: 2.5, category: 'Hot Coffee', imageUrl: '/assets/images.jpg' },
    { name: 'Ice Coffee', description: 'Chilled coffee', price: 3.0, category: 'Ice Coffee', imageUrl: '/assets/images.jpg' },
    { name: 'Tea', description: 'Warm tea', price: 1.8, category: 'Tea', imageUrl: '/assets/images.jpg' },
    { name: 'Fresh Drink', description: 'Freshly squeezed drink', price: 2.0, category: 'Fresh Drink', imageUrl: '/assets/images.jpg' },
    { name: 'Hot Coffee', description: 'Refreshing hot coffee', price: 2.5, category: 'Hot Coffee', imageUrl: '/assets/images.jpg' },
    { name: 'Ice Coffee', description: 'Chilled coffee', price: 3.0, category: 'Ice Coffee', imageUrl: '/assets/images.jpg' },
    { name: 'Tea', description: 'Warm tea', price: 1.8, category: 'Tea', imageUrl: '/assets/images.jpg' },
  ];
  filteredItems: Item[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category']) {
      this.filterItems();
    }
  }

  ngOnInit() {
    this.filteredItems = this.items;  
  }

  filterItems() {
    if (this.category) {
      this.filteredItems = this.items.filter(item => item.category === this.category);
    } else {
      this.filteredItems = this.items; 
    }
  }

}