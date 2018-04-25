import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getKeyString'
})
export class GetKeyStringPipe implements PipeTransform {
  transform(obj: any, key: string): string {
    return (obj && obj[key]) ? obj[key] : '';
  }
}
