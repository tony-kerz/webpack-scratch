import './app.scss'
import module1 from './module-1/module-1'
import $ from 'jquery'

var myElt = $('#myId')
if (!myElt.length) {
  console.log('#myId not found, creating...')
  myElt = $('<div />').appendTo('body')
}
myElt.append(module1)
