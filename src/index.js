function calcularAIdadeDoUsuario(user) {
    return new Date().getFullYear() - user.birthYear;
}
calcularAIdadeDoUsuario({
    birthYear: 1984
});
