export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if(this.members.has(character)) {
            throw new Error('Такой игрок уже есть в команде!');
        } else {
            this.members.add(character);
        }
    }

    addAll(...users) {
        [ ...users ].forEach(user => this.members.add(user));
    }

    toArray(){
        return Array.from(this.members);
    }
};

export class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
};
