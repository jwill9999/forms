import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pretty',
})
export class PrettyPipe implements PipeTransform {
    transform(value: unknown, ...args: unknown[]): unknown {
        return JSON.stringify(value, null, 4)
            .replace(/ /g, ' ')
            .replace(/\n/g, '<br/>');
    }
}
