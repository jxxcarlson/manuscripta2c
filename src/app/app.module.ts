import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core';

import {Ng2SimplePageScrollModule} from 'ng2-simple-page-scroll'
// https://github.com/bbottema/ng2-simple-page-scroll/issues

import {AppRoutingModule} from './app-routing.module'

import { Constants } from './toplevel/constants'

import { StoreModule } from '@ngrx/store';
import { documentsReducer } from './state-management/reducers/documents.reducer'
import { activeDocumentReducer } from './state-management/reducers/activeDocument.reducer'
import { uistateReducer } from './state-management/reducers/uistate.reducer'
import { userReducer } from './state-management/reducers/user.reducer'
import { documentHistoryReducer } from './state-management/reducers/documentHistory.reducer'
import { activeImageReducer } from './state-management/reducers/activeImageReducer'
import { imagesReducer } from './state-management/reducers/images.reducer'

import { Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DocumentEffects } from './state-management/effects/document.effects';

import {compose} from '@ngrx/core/compose'
import {combineReducers} from '@ngrx/store'
import { localStorageSync } from 'ngrx-store-localstorage';


import {DocumentService} from './services/document.service';
import {UserService} from './services/user.service';
import {MailService} from './services/mailService'
import {WindowRef} from './services/windowRef'

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { appReducer } from './state-management/reducers/appReducer.reducer'
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';
import {provideStore} from '@ngrx/store';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


import { QueryParser } from './services/queryparser.service';

import { AppComponent } from './toplevel/app/app.component';
import { FooterComponent } from './toplevel/footer/footer.component';
import { ReaderComponent } from './reader/reader/reader.component';
import { ImagesComponent } from './images/images/images.component';
import { AboutComponent } from './toplevel/about/about.component';
import { SettingsComponent } from './toplevel/settings/settings.component';

import { SearchScopeControlComponent } from './search/search-scope-control2/search-scope-control.component';

// Application modules
import {AuthorizationModule} from "./auth/authorization.module";
import {NavbarModule} from "./toplevel/navbar/navbar.module"
import {HomeModule} from "./toplevel/home/home.module";
import {EditorModule} from "./editor/editor.module";
import {DocumentDisplayModule} from './reader/document/document_display.module'
import {DocumentListModule} from './reader/document-list/document-list.module'
import {SearchModule} from './search/search.module';
import {ImageModule}  from './images/image.module'
import {TextHelpersModule} from './text_helpers/text_helpers.module';
import { NewDocumentComponent } from './editor/new-document/new-document.component';
import { ImageListItemComponent } from './images/image-list-item/image-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ReaderComponent,
    AboutComponent,
    ImagesComponent,
    SearchScopeControlComponent,
    SettingsComponent,
    NewDocumentComponent,
    ImageListItemComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    Ng2SimplePageScrollModule.forRoot(),

    // StoreModule.provideStore(appReducer, documentsReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(DocumentEffects),

    AppRoutingModule,
    AuthorizationModule,
    HomeModule,
    DocumentDisplayModule,
    DocumentListModule,
    NavbarModule,
    EditorModule,
    SearchModule,
    ImageModule,
    TextHelpersModule,

    StoreModule.provideStore(
      compose(
        localStorageSync(['user',
          'activeDocumentReducer',
          'documentsReducer',
          'uistateReducer',
          'documentHistoryReducer'], true),
        combineReducers
      )({
        documents: documentsReducer,
        activeDocument: activeDocumentReducer,
        user: userReducer,
        uistate: uistateReducer,
        history: documentHistoryReducer,
        activeImage: activeImageReducer,
        images: imagesReducer
      })
    )


  ],

  providers: [
    QueryParser, Constants,
    DocumentService, UserService,
    MailService, WindowRef,
  ],

  bootstrap: [AppComponent, [ ]]
})
export class AppModule { }

