import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
<<<<<<< HEAD
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatIconModule, MatBadgeModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatIconModule, MatBadgeModule],
=======
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatExpansionModule,
    MatInputModule, MatFormFieldModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatIconModule],
>>>>>>> ac72c0e7d43270caa8dd58af592b50dfdbfc2d02
})
export class MaterialModule { }
