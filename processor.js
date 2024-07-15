function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    if (!rawData.startsWith('<') && !rawData.endsWith('>')) {
        throw new Error('RawData is invalid ; should contain < at start and > at end')
    }
    if (!rawData.startsWith('<')) {
        throw new Error('RawData is invalid ; should contain < at start')
    }
    if (!rawData.endsWith('>')) {
        throw new Error('RawData is invalid ; should contain > at end')
    }
    let id = Number(parts[0])
    if (Number.isNaN(id)) {
        throw new Error('id cannot be converted to number')
    }
    return {
        id: id,
        rawData: rawData
    };
}

module.exports = processor;