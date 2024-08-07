import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
      this.route.fragment.subscribe((fragment: string | null) => {
        if (fragment) this.jumpToSection(fragment);
      });
    }
    jumpToSection(section: string | null) {
      if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
}


