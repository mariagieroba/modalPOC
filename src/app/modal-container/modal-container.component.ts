import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {PhotoDetailComponent} from '../photo-detail/photo-detail.component';

@Component({
  selector: 'app-modal-container',
  template: ''
})
export class ModalContainerComponent implements OnDestroy {
  destroy = new Subject<any>();
  currentDialog = null;

  constructor(
    public modalService: NgxSmartModalService,
    route: ActivatedRoute,
    router: Router
  ) {
    route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      // When router navigates on this component is takes the params and opens up the photo detail modal
      console.log(params);
      this.modalService.create(params.id, 'dupa');
      this.currentDialog = this.modalService.getModal(params.id).open();
      console.log(this.currentDialog);
      this.currentDialog.componentInstance = params.id;

      // Go back to home page after the modal is closed
 /*     this.currentDialog.result.then(result => {
        router.navigateByUrl('/');
      }, reason => {
        router.navigateByUrl('/');
      })*/
    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}
