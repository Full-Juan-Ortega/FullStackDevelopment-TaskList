import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OnClickNavbarCollapseService {
  constructor() {}

  collapseNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
      // Close the navbar by toggling the "show" class
      navbarToggler.classList.add('collapsed');
      navbarCollapse.classList.remove('show');
    }
  }
}
