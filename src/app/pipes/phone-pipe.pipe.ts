import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Remove todos os caracteres não numéricos
    const valorNumerico = value.replace(/\D/g, '');

    // Formata para padrão brasileiro de telefone
    if (valorNumerico.length === 10) { // Telefone fixo (XX) XXXX-XXXX
      return valorNumerico.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (valorNumerico.length === 11) { // Celular (XX) XXXXX-XXXX
      return valorNumerico.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    return value; // Retorna o valor original caso não corresponda aos padrões
  }
}
