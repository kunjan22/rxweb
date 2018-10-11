import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { LOWER_CASE_ROUTING } from './lowerCase.routing';
import { LowerCaseComponent } from './lowerCase.component';
import { LowerCaseExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/lowerCase/lowerCase.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";
import { TitleCasePipe } from "@angular/common";

@NgModule({
  imports: [
    LOWER_CASE_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, LowerCaseExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule],
  declarations: [LowerCaseComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[TitleCasePipe]
})
export class LowerCaseValidatorsModule { }

