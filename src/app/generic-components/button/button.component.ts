import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ButtonType } from 'src/app/enums/buttonEnums'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  marginRight = '0px'
  @Input() buttonType: ButtonType = ButtonType.BUTTON
  @Input() text = 'Button'
  @Input() alignRight = false
  @Input() needRightMargin = false
  @Input() needGrayBackGroundOnActivate = false
  @Output() buttonClicked: EventEmitter<Event> = new EventEmitter()

  get isButton(): boolean {
    return this.buttonType === ButtonType.BUTTON
  }
  get isSubmit(): boolean {
    return this.buttonType === ButtonType.SUBMIT
  }
  get isReset(): boolean {
    return this.buttonType === ButtonType.RESET
  }
  get isGrid(): boolean {
    return this.buttonType === ButtonType.GRID
  }
  get isExport(): boolean {
    return this.buttonType === ButtonType.EXPORT
  }
  get isCancel(): boolean {
    return this.buttonType === ButtonType.CANCEL
  }
  @Input() set rightMargin(rhs: number) {
    this.marginRight = rhs + 'px'
  }
  constructor() {}

  onClick(event: Event): void {
    this.buttonClicked.emit(event)
  }
}
