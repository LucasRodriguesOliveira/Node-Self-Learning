process.on('exit', code => {
    console.log(`Process exited with code ${code}`);
    setInterval(() => console.log('Não será executado'), 0);
});

/*
 * Todo código pendente é abortado, portanto a linha 3 não é 
 * executada pois o evento 'exit' é síncrono e não pode ser abortado
 */