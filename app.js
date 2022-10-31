class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        this.names = ['Max', 'Manu', 'Anna'];
        // makes names a variable attached to this class ... like property or field
        // nows names can be used on any part of the class and the instance.
        this.currentName = 0;
        btn.addEventListener('click', this.addName.bind(this));// this -  gives access to this object
        // remove paranthesis so as it only passes references and doesn't execute
        //immediately when browsers occurs 
        
        // or USE
        btn.addEventListener('click', () => {
            this.addName();
        });
    }

    addName() {
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if(this.currentName >= this.names.length){
            this.currentName = 0;
        }
    }
}

const gen = new NameGenerator();

// this refers to what is executing the code..
// we use .bind(this) to tell it to use the this from the class