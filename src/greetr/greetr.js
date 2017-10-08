//Mini framework the exercise js
;(function (global, $) {

    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es', 'pt-br'];

    function Greeting(formal, informal) {
        this.formal = formal;
        this.informal = informal;
    }

    var greetings = {
        en: new Greeting('Greetings', 'Hello'),
        es: new Greeting('Saludos', 'Hola'),
        'pt-br': new Greeting('Saudações', 'Oi')
    }

    function greet(greeting, obj, formal) {
        greeting = formal ? greeting.formal : greeting.informal;
        return `${greeting} ${obj.fullName()}!`
    }

    Greetr.prototype = {

        fullName: function () {
            return `${this.firstName} ${this.lastName}`;
        },

        validate: function () {
            if (supportedLangs.lastIndexOf(this.language) === -1)
                throw `'${this.language}' is not a supported language :(`
        },

        greeting: function (formal) {
            return greet(greetings[this.language], this, formal);
        },

        setLang(language){
            this.language = language;
            this.validate(language);
            return this;
        },

        //Greets on a dom element
        greetOn(selector, formal){
            $(selector).text(this.greeting(formal));
            return this;
        }
                
    };

    Greetr.init = function (firstName, lastName, language) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || 'en';
        this.validate(language);
    }

    Greetr.init.prototype = Greetr.prototype;

    global.g$ = global.Greetr = Greetr;

}(window, $ || jQuery))