function greetingFactory(language) {
    return function greeting(name) {
        let greeting;
        switch (language) {
            case 'pt-br':
                greeting = "Oi";
                break;
            default:
                greeting = "Hi"
                break;
        }

        console.log(`${greeting} ${name}! =D`);
    }
}

greetingFactory('pt-br')('Gui');
greetingFactory()('Gui');
greetingFactory('en')('Gui');