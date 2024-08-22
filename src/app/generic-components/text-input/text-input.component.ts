import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnChanges {
  @Input() type = 'text'
  @Input() minNumber: number | string = 0
  @Input() maxNumber: number | string | null = null
  @Input() placeHolder = ''
  @Input() errorMessage = ''
  @Input() showError = false
  @Input() showErrorIcon = false
  @Input() text = ''
  @Input() required = false
  @Input() isReadonly = false
  @Input() maxLength = 0
  @Input() isCurrency = false
  @Input() disablePaste = false
  @Output() textChange: EventEmitter<string> = new EventEmitter()
  @Output() showErrorChange: EventEmitter<boolean> = new EventEmitter()
  @ViewChild('textInput', { static: true }) textInputRef!: ElementRef

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxNumber'] && changes['maxNumber'].currentValue) {
      if (this.text && this.text.length > 0) {
        if (+this.text >= +changes['maxNumber'].currentValue) {
          this.text = changes['maxNumber'].currentValue.toString()
          this.textChange.emit(this.text)
        }
      }
    }
  }

  textChanged(event: Event): void {
    if (this.type === 'number' && this.maxNumber) {
      const inputNumber = +this.text
      if (inputNumber >= +this.maxNumber) {
        this.text = this.maxNumber.toString()
      }
    }
    if (this.required) {
      this.showError = this.text.length === 0
    }
    this.textChange.emit(this.text)
    this.showErrorChange.emit(this.showError)
  }
}
