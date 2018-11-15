import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatExpansionModule,
    MatInputModule, MatFormFieldModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatIconModule],
})
export class MaterialModule { }
