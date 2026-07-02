function generatePermutations(str, current = "") {
    if (str.length === 0) {
        console.log(current);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        const remaining =
            str.slice(0, i) + str.slice(i + 1);

        generatePermutations(
            remaining,
            current + str[i]
        );
    }
}

generatePermutations("ABC");