var gui = g$('Guilherme','de Castro', 'en');
console.log(gui.greeting());
console.log(gui.setLang('es').greeting());
console.log(gui.greeting(true));

gui.setLang('en').greetOn("#en-informal", false);
gui.greetOn("#en-formal", true);
gui.setLang('es').greetOn("#es-informal", false);
gui.greetOn("#es-formal", true);