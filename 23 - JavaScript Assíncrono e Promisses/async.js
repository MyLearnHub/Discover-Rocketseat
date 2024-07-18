const promessa = new Promise((resolve, reject) => {
    return reject('error')
})

async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Rodar sempre")
    }
}