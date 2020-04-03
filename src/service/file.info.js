function infoOf(file) {
    if (!file) {
        return {}
    }
    return {
        name: file.name,
        ext: file.ext,
        size: `${file.size} B`,
        mimetype: file.mimetype,
        checksum: file.md5
    }
}

export { infoOf }