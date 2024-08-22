import { Component, OnInit } from '@angular/core';
import { MockedService } from '../../../global/services/mock.service';
import { IList } from '../../../global/inrerfaces/list.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [MockedService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public lists$: Observable<IList[]> = this.mockedService.getLists();

  constructor(private mockedService: MockedService) {}

  public ngOnInit(): void {
    this.lists$.subscribe((value) => {
      console.log('lists', value);
    });
  }

  public addList(): void {
    console.log('add list');
    
  }
}
