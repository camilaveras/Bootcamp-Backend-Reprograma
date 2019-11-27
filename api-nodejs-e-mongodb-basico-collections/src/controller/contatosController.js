const contatosCollection = require("../model/contatoSchema")


//--------------adiconava o objeto ----------

const add = (request, response) => {
  console.log(request.url)
  // novo objeto pra nossa coleção
  const contatoDoBody = request.body
  const contato = new contatosCollection(contatoDoBody)

  contato.save((error) => {
    // if(error !== null && error !== undefined)
    if(error) {
      return response.status(400).send(error)
    } else {
      return response.status(201).send(contato)
    }
  })
}

//--------------------Buscar todos
const getAll = (request, response) => {
  console.log(request.url)
  contatosCollection.find((error,contatos) => {
    if(error){
      return response.status(500).send(error)
    } else {
      return response.status(200).send(contatos)
    }
  })
};

//-------- filtrar pelo nome e o nome 
const getByName = (request, response) => {
  const nomeParam = request.params.nome
  const regex = new RegExp(nomeParam, 'i')
  const filtro = { nome: regex }
  //ou, para filtrar pelo nome completo: const filtro = { nome: nomeParam }
  //ou, para filtrar com uma regex fixa: const filtro = { nome: /^t/i }
  
  contatosCollection.find(filtro, (error, contatos) => {
    if(error){
      return response.status(500).send(error)
    } else {
      if(contatos.length > 0) {
        return response.status(200).send(contatos)
      } else {
        return response.sendStatus(404)
      }
    }
  })
}

//----------------buscar por id
const getById = (request, response) => {
  const idParam = request.params.id
  contatosCollection.findById(idParam, (error, contato) => {
    if(error) { // deu algum erro no mongo
      return response.status(500).send(error)
    } else {
     // if(contato !== null  && contato!== undefined)
      if(contato) {
        return response.status(200).send(contato)
      } else {
        return response.status(404).send('Contato nao encontrado')
      }
    }
  })
}

//------------deletar por id
const deleteById = (request, response) => {
  const idParam = request.params.id
  contatosCollection.findByIdAndDelete(idParam, (error, contato) => {
    if(error) {
      return response.status(500).send(error)
    } else {
      if(contato) {
        return response.status(200).send('Contato apagado, mana')
        //return response.status(200).send(contato)
      } else {
        return response.sendStatus(404)
      }
    }
  })
}

//----------- update
const updateById = (request, response) => {
  const idParam = request.params.id
  const contatoDoBody = request.body
  const options = {new : true}

contatosCollection.findByIdAndUpdate(
      idParam,
      contatoDoBody,
      options, 
      (error, contato) => {
        if(error) {
          return response.status(500).send(error)

        }else if (contato){
          return response.status(200).send(contato)
        } else {
          return response.sendStatus(404)
        }
      }
    
)
  }
module.exports = {
  getAll,
  add,
  getByName,
  getById,
  deleteById,
  updateById
}
