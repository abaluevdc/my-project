import {
  Component,
  OnInit,
  Input,
  forwardRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from '@angular/core';
import {
  ControlValueAccessor,
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true
    }
  ]
})

export class CustomControlComponent  implements  ControlValueAccessor, OnInit {

  customControlGroup!: FormGroup;
  @Output() public valueEvent: any = new EventEmitter<any>();
  public value: any;
  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.customControlGroup = this.formBuilder.group({
      month: [''],
      year: [''],
    })

    this.customControlGroup.valueChanges.subscribe(value => {
      console.log(value);

      if (value['month'] > 12) {
        this.customControlGroup.get('month')?.setValue(12, {emitEvent: false});
      }

      this.value = +value.month + +value.year * 12;
      this.onChange(this.value);
    })
  }

  monthAndYearTotal(value: number) {
    this.customControlGroup.get('month')?.setValue(value % 12, {emitEvent: false});
    this.customControlGroup.get('year')?.setValue(Math.floor(value / 12), {emitEvent: false});
  }

  public writeValue(value: number): void {
    this.value = value;
    this.monthAndYearTotal(value);
    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
