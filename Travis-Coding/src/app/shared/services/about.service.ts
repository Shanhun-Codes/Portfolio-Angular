import { Injectable, signal } from '@angular/core';
import ABOUT_DATA from '../data/about';
import { About } from '../models/about.model';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  aboutData = signal<About>(ABOUT_DATA);
}
