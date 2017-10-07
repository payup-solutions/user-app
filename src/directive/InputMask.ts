import { Directive, Attribute  } from '@angular/core';

@Directive({
    selector: '[mask]',
    host: {
        '(keydown)': 'onInputChange($event)'
    }
})
export class InputMask  {

    mask: string;

    constructor(
        @Attribute('mask') mask: string
    ) {
        this.mask = mask;
    }

    onInputChange(e) {
        try {

            let value = e.target.value,
                caret = e.target.selectionStart,
                mask = this.mask,
                reserve = mask.replace(/\*/, 'g'),
                applied = '',
                ordinal = 0;

            if (e.keyCode === 8 || e.key === 'Backspace' || e.keyCode === 46 || e.key === 'Delete') {
                if (value.length) {
                    //remove all trailing formatting
                    while (value.length && mask[value.length] && mask[value.length] !== '*') {
                        value = value.substring(0, value.length - 1);
                    }
                    //remove all leading formatting to restore placeholder
                    if (mask.substring(0, value.length).indexOf('*') < 0) {
                        value = value.substring(0, value.length - 1);
                    }
                }
            }

            //apply mask characters 
            for (var i = 0; i < value.length; i++) {
                //enforce pattern limit
                if (i < mask.length) {
                    //match mask
                    if (value[i] === mask[ordinal]) {
                        applied += value[i];
                        ordinal++;
                    } else if (reserve.indexOf(value[i]) > -1) {
                        //skip other reserved characters
                    } else {
                        //apply leading formatting
                        while (ordinal < mask.length && mask[ordinal] !== '*') {
                            applied += mask[ordinal];
                            ordinal++;
                        }
                        applied += value[i];
                        ordinal++;
                        //apply trailing formatting
                        while (ordinal < mask.length && mask[ordinal] !== '*') {
                            applied += mask[ordinal];
                            ordinal++;
                        }
                    }
                }
            }
            e.target.value = applied;
            if (caret < value.length) {
                e.target.setSelectionRange(caret, caret);
            }
        } catch (ex) {
            console.error(ex.message);
        }

     }

}