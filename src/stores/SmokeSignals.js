import Reflux from 'reflux';
import _ from 'lodash';
import socket from '../socket'

let SmokeStore = Reflux.createStore({

	data: {
		smokeSignals: {},
		forMe: [],
		forAll: [],
		forAllCount: 0,
		forMeCount: 0
	},

	init() {
		socket.emit('r-smokesignal.forall', {
			match_all: {}
		})

    socket.on('r-smokesignal.forall.done', (signals) => {
    	this.data.forAllCount = signals.counts

    	this.forMe = _.map(signals.message, (signal) => {
    		return signal._id
    	})

			this.data.smokeSignals = signals.message.reduce(function(result, smokesignal) {
        result[smokesignal._id] = smokesignal
        return result
      }, {})

      this.trigger()
    })
	},

	getForMe: function() {
		return _.map(this.forMe, (id) => {
			return this.data.smokeSignals[id]
		})
	}

})

module.exports = SmokeStore