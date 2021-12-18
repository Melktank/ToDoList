// let input = prompt('What will you like to do?');
// const todos = ['Buy dog food', 'Wash dishes']
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('***********')
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('***********')
//     } else if (input === 'add') {
//         const newTodo = prompt('What is the new todo?');
//         todos.push(newTodo)
//         console.log(`${newTodo} added to the list!`)
//     } else if (input === 'delete') {
//         const index = parseInt(prompt('Enter the index you wish to delete.'));
//         // const index = parseInt(indexStr); !! redundant can parseInt on users input
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`Deleted ${deleted[0]}`);
//         } else {
//             console.log('Unknown Index')
//         }

//     }
//     input = prompt('What will you like to do?')
// }
// console.log('OK Quit the App')

//Cleaner Code using switch
setTimeout(function () {
    let quit = false;
    let todos = ['Buy dog food', 'Wash dishes'];
    let choice = undefined;

    while (!quit) {
        choice = prompt("What would you like to do?");
        switch (choice) {
            case 'add':
                todos.push(prompt("Enter new todo"));
                break;
            //    lists the all strings in the todos Array
            case 'list':
                console.log("_________________");
                for (let i = 0; i < todos.length; i++)
                    console.log(`${i}: ${todos[i]}`);
                console.log("________________")
                break;
            // deletes a index from the list you've created
            case 'delete':
                const index = parseInt(prompt('Enter the index you wish to delete.'));
                // const index = parseInt(indexStr); !! redundant can parseInt on users input
                if (!Number.isNaN(index)) {
                    const deleted = todos.splice(index, 1);
                    console.log(`Deleted ${deleted[0]}`);
                } else {
                    console.log('Unknown Index')
                }
                break;
            //    quits app is user types q or quit
            case 'quit' || 'q': console.log("Exiting..");
                quit = true;
                break;
            default: alert("Invalid, Try again");
        }
    }
}, 200)