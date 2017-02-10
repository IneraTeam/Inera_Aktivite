import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
    transform(value: any): string {
        if (value) {
            let returnString = '';
            value.split(' ').forEach(element => {
                returnString += ' ' + element.charAt(0).toUpperCase()
                    + element.slice(1);
            });
            return returnString;
        }
        return value;
    }
}