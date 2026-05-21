// lembrar o professor do to-do no começo do código

class Item {
    constructor(public title: string) { }
}

class TodoList {

    private items: Item[] = [];
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
        this.readListFromDisk()
    }

    private async saveListToDisk() {
        const file = Bun.file(this.filePath)
        const data = JSON.stringify(this.items)
        await file.write(data)
    }

    private async readListFromDisk() {
        const file = Bun.file(this.filePath)
        // const text = await file.text()
        // const data = JSON.parse(text)
        const data = await file.json()
        this.items = data.map((v: any) => {
            return new Item(v.title)
        })
    }

    /**
     * Isso adiciona um novo item na lista de itens
     */
    async addItem(item: Item) {

        if (!item)
            throw 'item não pode ser nulo ou indefinido'
        if (!item.title || !item.title.trim()) // resolver isso (nao sei o que em específico, só anotando caso o prof esqueça)
            throw 'item.title não pode ser nulo ou indefinido'

        this.items.push(item);
        await this.saveListToDisk()
    }
    /**
     * Remove um item da lista de item pelo índice
     */
    async removeItem(index: number) {
        this.items.splice(index, 1);
        await this.saveListToDisk()
    }
    /**
     * Retorna uma cópia da lista de itens
     */
    getItems(): Item[] {
        return Array.from(this.items);
        // o certo seria clonar, usando [... this.items] 
        // mas não faz muita diferença em um trabalho pequeno como este,
        // de acordo com o prof
    }

}

export default TodoList
export { Item, TodoList }