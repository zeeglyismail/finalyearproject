import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CheckboxComponent {
  @Input() isChecked = false
  @Input() text = ''
  @Input() id = ''
  @Input() boldText = false
  @Output() isCheckedChange: EventEmitter<boolean> = new EventEmitter()
  constructor() {}
  onCheckChanged(event: any): void {
    const checked: boolean = event.target.checked
    this.isCheckedChange.emit(checked)
  }
  updateItem(event: any) {
    this.isChecked = !this.isChecked
    this.isCheckedChange.emit(this.isChecked)
    event.stopPropagation()
  }
}
