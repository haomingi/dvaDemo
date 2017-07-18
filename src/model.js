/**
 * Created by 001758 on 2017/7/17.
 */
import products from './models/products'
import example from './models/example'

const models = [
  products,
  example
]

function modelMap (app) {
  models.map(item => {
    app.model(item)
  })
}

export default modelMap
