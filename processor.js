function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    if (!rawData.startsWith('<')) {
        throw new Error('RawData is invalid ; should contain < at start')
    }
    if (!rawData.endsWith('>')) {
        throw new Error('RawData is invalid ; should contain > at end')
    }
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;