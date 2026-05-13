const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Denna ska testa min nya clear funktion knapp och se till att de faktiskt tömmer
test('peek on empty stack after clearing it and it should be undefined', () => {
    //Pushar nytt
    stack.push(1);
    stack.push(2);
    stack.push(3); 
    stack.clear();//Provar min clear funktion 
    expect(stack.peek()).toBeUndefined();//Så ska de förhoppningsvis vara undefined då vi har tagit bort allt vi la till. 
});