import {Component, Input} from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent {

  constructor(public ngxSmartModalService: NgxSmartModalService) {
  }

  @Input()
  photo;

  getLargeImageUrl(imageId) {
    return `https://picsum.photos/500?image=${imageId}`;
  }

}
