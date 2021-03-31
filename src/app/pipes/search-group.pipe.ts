import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchGroup'
})
export class SearchGroupPipe implements PipeTransform {

  transform(items: any, searchStrGroup: string): any {
     if(searchStrGroup === ''){
      return items;
    }else{
      let filteredItemsGroup = items.filter(
        (e: any) => e.group.indexOf(searchStrGroup) !== -1
      );
      return filteredItemsGroup;
    }
  }

}
