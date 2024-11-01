const con = require('../CONNECT/banco').con;

const create = (req, res) => {
    let carros_id = req.body.carros_id;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiculo;
    let cliente_id = req.body.cliente_id;
    let veiculo_placa = req.body.veiculo_placa;
    let veiculo_marca = req.body.veiculo_marca;
    let veiculo_modelo = req.body.veiculo_modelo;

    let query = `INSERT INTO carros (carros_id, ano_veiculo, fabricacao_veiculo, cliente_id, veiculo_placa, veiculo_marca, veiculo_modelo) VALUES`
    query += `('${veiculo_placa}', '${veiculo_marca}', '${veiculo_modelo}', '${carros_id}', '${ano_veiculo}', '${fabricacao_veiculo}', '${cliente_id}',);`;
    con.query(query, (err, result) => {
    if (err) {
        res.status(500).json(err)
    } else {
        res.status(201).json(result)
    }
})
}

const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    create,
    read
}