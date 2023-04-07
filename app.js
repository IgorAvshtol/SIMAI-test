class Component {
  constructor({ template, displayOptions, modifiers, textValues, events }) {
    this.template = template;
    this.displayOptions = displayOptions;
    this.modifiers = modifiers;
    this.textValues = textValues;
    this.events = events;
  }

  generateButton() {
    const element = document.createElement(this.template.type);

    // Add display options as attributes
    for (const [key, value] of Object.entries(this.displayOptions)) {
      element.setAttribute(key, value);
    }

    // Add modifiers as classes
    if (this.modifiers) {
      element.classList.add(...this.modifiers);
    }

    // Add text values as content
    if (this.textValues) {
      element.textContent = this.textValues.join('');
    }

    // Add event listeners
    for (const [key, value] of Object.entries(this.events)) {
      element.addEventListener(key, value);
    }

    return element;
  }
}

const myComponent = new Component({
  template: { type: 'button' },
  displayOptions: { id: 'my-button', style: 'color: red;' },
  modifiers: ['my-button'],
  textValues: ['SIMAI test task'],
  events: { click: () => { alert('Clicked!'); } }
});

const element = myComponent.generateButton();
document.body.appendChild(element);
