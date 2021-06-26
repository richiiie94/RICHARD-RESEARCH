import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MainConfigService {
  password_regex = '^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[0-9].*)[A-Za-z0-9]{8,}$';

  getErrorMessage(element) {
    if (!element.errors) {
      return null;
    }

    if (element.errors['required']) {
      return 'Required!';
    }

    if (element.errors['notExist']) {
      return 'Not exist!';
    }

    if (element.errors['email']) {
      return 'Email address invalid!';
    }

    if (element.errors['exist']) {
      return 'Already exist!';
    }

    if (element.errors['pattern']) {
      if (
        element.errors['pattern']['requiredPattern'] === this.password_regex
      ) {
        return 'Must be more than 8 characters and contains at least one lowercase, one uppercase and one number!';
      } else {
        return 'Must contain alphabets and numbers!';
      }
    }

    if (element.errors['minlength']) {
      return 'Minimum Length: ' + element.errors['minlength']['requiredLength'];
    }

    if (element.errors['maxlength']) {
      return 'Maximum Length: ' + element.errors['maxlength']['requiredLength'];
    }

    if (element.errors['min']) {
      return 'Minimum ' + element.errors['min']['min'];
    }

    if (element.errors['max']) {
      return 'Maximum ' + element.errors['max']['max'];
    }
  }
}
