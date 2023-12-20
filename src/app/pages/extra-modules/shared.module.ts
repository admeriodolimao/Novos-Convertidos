import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from 'src/app/pipes/phone-pipe.pipe';

@NgModule({
  declarations: [PhonePipe],
  imports: [CommonModule],
  exports: [PhonePipe] // Export the pipe
})
export class SharedModule {}
