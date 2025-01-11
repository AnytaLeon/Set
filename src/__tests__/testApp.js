import Team, { Character } from '../js/app';

test('add character', () => {
    const user = new Character('мечник', 10);
    const team = new Team;
    team.add(user);

    expect(team.members.has(user)).toBe(true);
});

test('it is not possible to add the symbol again', () => {
    const user = new Character('мечник', 10);
    const team = new Team;
    team.add(user);
    expect(() => {
        team.add(user);
    }).toThrow(new Error('Такой игрок уже есть в команде!'));
});

test('add all users', () => {
    const team = new Team;
    team.addAll(1, 2);
    expect(team.members.size).toBe(2);
});

test('set to array', () => {
    const team = new Team;
    expect(Array.isArray(team.toArray())).toBeTruthy();
});
