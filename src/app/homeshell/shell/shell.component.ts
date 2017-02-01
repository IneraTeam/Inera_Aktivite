import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
  <div class="client">
  <div class="input-group mb-2 mr-sm-2 mb-sm-0 search">
    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Ara">
    <i class="input-group-addon fa fa-search"></i>
  </div>
  <button class="btn btn-success add"> Ekle </button>
  <div class="list">
    <app-list class="list-group"></app-list>
  </div>
</div>
  `,
  styles: [`
    .input-group-addon { background-color: inherit;}
    .search { width: 70%; float:left; }
    button.add { line-height: 1.5; float:right; }
    div.list { width: 100%; float:left; }
    .client{ padding: 5px; }
  `]
})
export class ShellComponent {
}
