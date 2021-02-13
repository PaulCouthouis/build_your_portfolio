import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/store/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() portfolio: Portfolio = { id: -1, name: '' };

  wording = {
    sexe: ['女性', '男性'],
  };

  convertBirthdayToString(birthday: string): string {
    const birthdayDate = new Date(birthday),
      year = birthdayDate.getFullYear(),
      month = birthdayDate.getMonth() + 1,
      day = birthdayDate.getDate(),
      age =
        new Date(Date.now() - birthdayDate.getTime()).getFullYear() - 1970 + '';

    return `${year}年${month}月${day}日　（${age}歳）`;
  }
}
