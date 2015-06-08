import './app.scss'
import module1 from './module-1/module-1'
import debug_ from 'debug'
import jq from 'jquery'

var dbg = debug_('app:')
var elt = jq('#myId')
var domElt = elt[0];
var getElt = document.getElementById('myId')

dbg('jq=%o, elt=%o, dom-elt=%o, get-elt=%o', jq, elt, domElt, getElt)

elt.append(module1)
