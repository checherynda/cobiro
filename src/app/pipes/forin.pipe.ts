import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'forin'
})
export class ForInPipe implements PipeTransform {
    transform(value: Object): { key: string, value: string }[] {
        const keys: { key: string, value: string }[] = [];
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }
}
