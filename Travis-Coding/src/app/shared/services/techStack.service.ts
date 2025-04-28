import { Injectable, signal } from '@angular/core';
import techStack from '../data/techStack';
import TechStack from '../models/techStack.model';

@Injectable({
  providedIn: 'root',
})
export class TechStackService {
  techStackData = signal<TechStack>(techStack);

  getLanguages() {
    return this.techStackData().languages.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  getFrameworks() {
    return this.techStackData().frameworks.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  getTools() {
    return this.techStackData().tools.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }
}
