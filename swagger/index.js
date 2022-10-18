import { join, dirname } from "path";
import { fileURLToPath } from "url";
import swaggerAutogen from 'swagger-autogen';

const _dirname = dirname(fileURLToPath(import.meta.url));

const outputFile = join(_dirname, 'output.json');
const endpointsFiles = [join(_dirname, '../server.js')];

const doc = {
    //Main info
    info: {
        title: 'Todo API',
        description: 'My todo API'
    },
    //Models
    definitions: {
        //Task model
        Todo: {
            id: 1,
            text: 'test',
            done: false
        },
        //Tasks array models
        Todos: [
            {
                //Link to the task model
                $ref: '#/definitions/Todo'
            }
        ],
        //Object's model with text of a new task
        Text: {
            text: 'test'
        },
        //Object's model with changes of existing task
        Changes: {
            changes: {
                text: 'test',
                done: true
            }
        }
    },
    host: 'localhost:1703',
    schemes: ['http', 'https']
}

swaggerAutogen(/*options*/)(outputFile, endpointsFiles, doc).then(({ success}) => {
    console.log(`Generated ${success}`)
});