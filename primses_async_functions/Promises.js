function flippingACoin() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1); // 0 or 1, at random
        val ? resolve('Heads!!') : reject('Tails!!');
    });
}

async function result() {
    try {
        const result = await flippingACoin();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

result();
result();
result();
result();
result();

function mdZubire() {
    return new Promise((loosa, illaya) => {
        const valOne = Math.round(Math.random() * 1);
        valOne ? loosa('ama') : illaya('athum amaa');

    })
}
async function resul() {
    try {
        const result = await mdZubire();
        console.log(resul);
    } catch (err) {
        console.log(err);
    }
}

resul();
resul();
resul();
resul();
resul();