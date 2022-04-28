import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-month-input',
  templateUrl: './custom-month-input.component.html',
  styleUrls: ['./custom-month-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomMonthInputComponent),
      multi: true
    }
  ]
})
export class CustomMonthInputComponent implements ControlValueAccessor{

  public value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor( private readonly changeDetector: ChangeDetectorRef) { }

  public onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    if (this.onChange) {
      this.onChange(value);
    }

    // console.log('targetDivElement', targetDivElement)
    // console.log('value', value)
  }

  public writeValue(value: string): void{
    this.value = value;
    console.log('writeValue')

    this.changeDetector.detectChanges();
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }


}
