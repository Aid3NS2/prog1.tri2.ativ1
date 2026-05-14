class Item {

    constructor(public title: string) {

    }

}

class TodoList {

    private items: Item[] = [];
    private filePath: string;

    constructor(filePath: string) {

        this.filePath = filePath;

    }

    addItem(item: Item){ 

        this.items.push(item);

    }

    removeItem(index: number) {
        this.items.slice(index, 1);
    }

    getItems(): Item[] {
        return this.items;
        // o certo seria clonar, usando [... this.items] 
        // mas não faz muita diferença em um trabalho pequeno como este,
        // de acordo com o prof
    }

}