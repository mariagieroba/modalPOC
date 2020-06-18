import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PhotoDetailComponent} from './photo-detail/photo-detail.component';
import {ModalContainerComponent} from './modal-container/modal-container.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';

const routes: Routes = [
  {path: ':id', component: ModalContainerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PhotoDetailComponent,
    ModalContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxSmartModalModule.forRoot()
  ],
  entryComponents: [
    PhotoDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
