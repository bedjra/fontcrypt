import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principale',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './principale.component.html',
  styleUrl: './principale.component.css'
})
export class PrincipaleComponent {
  nom: string = 'Utilisateur';
  avatar: string | null = null; // Remplacez `null` par l'avatar par défaut si nécessaire
  isNavOpen: boolean = false;
  activeLink: string = '';

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  goToProfile(): void {
    console.log('Naviguer vers le profil');
  }

  setActive(link: string): void {
    this.activeLink = link;
  }
}
