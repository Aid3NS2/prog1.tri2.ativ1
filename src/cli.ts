// CLI: Command Line Interface

/* 
Outras maneiras de exportar: 

import xpto from './core'

import { Item as ItemApelido, TodoList as TodoListApelido } from './core'

import { Item, TodoList } from './core'

Todas essas maneiras funcionam :PP
*/

import TodoListApelido, { Item } from "./core" // arrumar (criar arquivo chamado todolist.json)

const todolist = new TodoListApelido('todolist.json')

const params = process.argv // argv ;; comandos do terminal.
const command = params[2]


if (command === 'add') {

    const value = params[3]

    if (!value) {
        console.error('Valor do item não pode ser nulo ou vazio')
        process.exit(1)
    }

    try {
        await todolist.addItem(new Item(value))
    } catch (error) {
        console.error('Erro ao adicionar item:', error)
        process.exit(1)
    }
    
    console.log(`Item adicionado com sucesso:`, value)
    process.exit(0)

}

if (command)
    console.log(`Comando não reconhecido: ${command}`)