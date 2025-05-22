import { Injectable, signal } from '@angular/core';
import LANGUAGE_DATA from '../staticData/techStack/languages';
import FRAMEWORK_DATA from '../staticData/techStack/frameworks';
import TOOL_DATA from '../staticData/techStack/tools';
import { TechItem } from '../models/techItem.model';



@Injectable({
  providedIn: 'root',
})
export class TechStackService {
  languages = signal<TechItem[]>(LANGUAGE_DATA);
  frameworks = signal<TechItem[]>(FRAMEWORK_DATA);
  tools = signal<TechItem[]>(TOOL_DATA);



  getLanguages() {
    return this.languages().sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  getFrameworks() {
    return this.frameworks().sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  getTools() {
    return this.tools().sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

}
