export { inject };

function inject(items, sections) {
    const output = new Array(items.length + sections.length);

    for (let i = 0; i < sections.length; i++) {
        output[sections[i].index + i] = sections[i].content
    }

    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < output.length; j++) {
            if (output[j] == null) {
                output[j] = items[i];
                break;
            }
        }
    }

    return output;
}