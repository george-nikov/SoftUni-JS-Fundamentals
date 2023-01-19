function echo (name) {

    let type = typeof name;
    console.log(type);
    if (type === 'string' || type === 'number') {
        console.log(name);
    }
    else {
        console.log('Parameter is not suitable for printing');
    }
}
echo('Hello, JavaScript!')
