import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * CalculadoraPolymerApp
 * Desc: Calculadora con las operaciones básicas
 */
class CalculadoraPolymerApp extends PolymerElement {
  static get template() {
    return html`
  <style>
  :host {
      display: block
    }
  </style>
    <div>
    <span>Operador 1:</span> <input type="number"  value="{{op1::input}}">
        </div>
        <div>
        <span>Operación:</span>
    <select value="{{operacion::input}}">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    </div>
    <div>
    <span>Operador 2:</span> <input type="text" value="{{op2::input}}">
        </div>
        <div>
        <span>Redondear: </span> <input type="checkbox" checked="{{redondear::change}}">
        </div>
        <div>
        <span>Resultado:</span> {{calcularResultado(op1, op2, operacion, redondear)}}
    </div>
  `;
}
static
get
properties()
{
  return {
    op1: {
      type: Number,
      value: 0
    },
    op2: {
      type: Number,
      value: 0
    },
    operacion: {
      type: String,
      value: '+'
    },
    redondear: {
      type: Boolean,
      value: false
    }
  };
}

constructor()
{
  super();
}
calcularResultado(op1, op2, operacion, redondear)
{
  op1 = parseFloat(op1);
  op2 = parseFloat(op2);
  if (isNaN(op1) || isNaN(op2)) {
    return 'Los operadores deben ser números';
  }
  if (operacion == '+') {
    return this.redondeoCondicional(op1 + op2, redondear);
  }
  if (operacion == '-') {
    return this.redondeoCondicional(op1 - op2, redondear);
  }
  if (operacion == '*') {
    return this.redondeoCondicional(op1 * op2, redondear);
  }
  if (operacion == '/' && op2 != 0) {
    return this.redondeoCondicional(op1 / op2, redondear);
  }
  return 'Sin resultado posible'
}

redondeoCondicional(valor, redondear)
{
  if (!redondear) {
    return valor;
  } else {
    return Math.round(valor * 100) / 100;
  }
}

}

window.customElements.define('calculadora-polymer-app', CalculadoraPolymerApp);
