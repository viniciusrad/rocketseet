import fastify from 'fastify'
import crypto from 'crypto'
import {knex} from './database'

const app = fastify()

app.get('/hello', async () => {
    // const tables = knex('sqlite_schema').select('*')
    // // return 'Hello Node!'
    // return tables

    /** exemplo de insert */
    // const transaction = await knex('transactions').insert({
    //     id: crypto.randomUUID(),
    //     title: 'Transação de teste',
    //     amount: 1000,
    // }).returning('id')

    const transaction = await knex('transactions').select('*').where('amount', 1000)

    return transaction
})

app.listen({ port: 3333 }).then(() => {
    console.log('listening on port 3333')
})